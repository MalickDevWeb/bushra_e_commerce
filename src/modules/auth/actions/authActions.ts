"use server";

import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { createSession, deleteSession } from "@/lib/auth";
import { redirect } from "next/navigation";
import { readText } from "@/lib/validation";

export async function loginAction(formData: FormData): Promise<{ error: string } | null> {
  const email = readText(formData, "email").toLowerCase();
  const password = formData.get("password")?.toString() || "";

  if (!email || !password) {
    return { error: "Veuillez remplir tous les champs." };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || password.length > 128) {
    return { error: "Email ou mot de passe incorrect." };
  }

  // 1. Chercher l'utilisateur dans la base de données
  const user = await prisma.user.findUnique({
    where: { email },
  });

  // 2. Vérifier si l'utilisateur existe
  if (!user) {
    return { error: "Email ou mot de passe incorrect." }; // Erreur générique (sécurité)
  }

  // 3. Vérifier le mot de passe avec bcrypt
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    return { error: "Email ou mot de passe incorrect." };
  }

  // 4. Créer la session sécurisée (JWT + Cookie)
  await createSession(user.id, user.role);

  // 5. Rediriger selon le rôle
  if (user.role === "SUPER_ADMIN") {
    redirect("/admin/super-admin");
  } else if (user.role === "ADMIN") {
    redirect("/admin/dashboard");
  } else {
    // Si c'est un client normal (USER), on le renvoie à l'accueil
    redirect("/");
  }
}

export async function logoutAction() {
  await deleteSession();
  redirect("/login");
}

export async function registerClient(input: { name: string; email: string; password: string }) {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  if (!name || name.length > 120 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || input.password.length < 8 || input.password.length > 128) {
    return { success: false as const, error: "Les informations d'inscription sont invalides." };
  }

  const existing = await prisma.user.findUnique({ where: { email }, select: { id: true } });
  if (existing) return { success: false as const, error: "Cette adresse email est déjà utilisée." };

  const user = await prisma.user.create({
    data: { name, email, password: await bcrypt.hash(input.password, 12), role: "USER" },
    select: { id: true, name: true, email: true, role: true },
  });
  await createSession(user.id, user.role);
  return { success: true as const, user };
}
