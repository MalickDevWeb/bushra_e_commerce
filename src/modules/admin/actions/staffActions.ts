"use server";

import bcrypt from "bcryptjs";
import { permissions, requireSuperAdminPermission } from "@/lib/authorization";
import { readText } from "@/lib/validation";
import { revalidatePath } from "next/cache";
import { staffRepository } from "@/modules/admin/repositories/staff.repository";
import { staffService } from "@/modules/admin/services/staff.service";

// Créer un nouveau compte Admin
export async function createAdminAction(formData: FormData): Promise<{ error?: string; success?: boolean }> {
  const currentUser = await requireSuperAdminPermission(permissions.STAFF_MANAGE);
  if (!currentUser) return { error: "Accès refusé." };

  const name = readText(formData, "name");
  const email = readText(formData, "email").toLowerCase();
  const password = formData.get("password")?.toString() || "";

  if (!name || !email || !password) {
    return { error: "Tous les champs sont obligatoires." };
  }

  if (password.length < 8) {
    return { error: "Le mot de passe doit contenir au moins 8 caractères." };
  }

  // Vérifier si l'email est déjà utilisé
  // Hasher le mot de passe
  const hashedPassword = await bcrypt.hash(password, 12);

  const result = await staffService.createAdmin({ name, email, password: hashedPassword });
  if (!result.success) return { error: result.error };

  revalidatePath("/admin/super-admin/staff");
  return { success: true };
}

// Désactiver / Réactiver un Admin (en changeant son rôle)
export async function toggleAdminStatusAction(userId: string, currentRole: string): Promise<{ error?: string }> {
  const currentUser = await requireSuperAdminPermission(permissions.STAFF_MANAGE);
  if (!currentUser) return { error: "Accès refusé." };

  // Ne pas s'auto-modifier
  const result = await staffService.toggleStatus(userId, currentUser.id, currentRole);
  if (!result.success) return { error: result.error };

  revalidatePath("/admin/super-admin/staff");
  return {};
}

// Supprimer un Admin
export async function deleteAdminAction(userId: string): Promise<{ error?: string }> {
  const currentUser = await requireSuperAdminPermission(permissions.STAFF_MANAGE);
  if (!currentUser) return { error: "Accès refusé." };

  const result = await staffService.deleteAdmin(userId, currentUser.id);
  if (!result.success) return { error: result.error };

  revalidatePath("/admin/super-admin/staff");
  return {};
}

// Récupérer la liste du staff (Server-side)
export async function getStaffMembers() {
  const currentUser = await requireSuperAdminPermission(permissions.STAFF_MANAGE);
  if (!currentUser) return [];

  return staffRepository.list();
}
