"use server";

import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import type { Prisma } from "@prisma/client";

export async function getSiteSetting<T = unknown>(key: string): Promise<T | null> {
  const setting = await prisma.siteSetting.findUnique({ where: { key } });
  return (setting?.value as T | undefined) ?? null;
}

export async function saveSiteSetting(key: string, value: unknown) {
  if (!(await requireAdmin())) return { success: false as const, error: "Accès non autorisé." };
  if (!/^[a-z0-9_.-]{2,100}$/.test(key)) return { success: false as const, error: "Clé de réglage invalide." };
  const jsonValue = value as Prisma.InputJsonValue;
  const setting = await prisma.siteSetting.upsert({ where: { key }, update: { value: jsonValue }, create: { key, value: jsonValue } });
  return { success: true as const, setting };
}

export async function subscribeToNewsletter(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalizedEmail)) {
    return { success: false as const, error: "Adresse email invalide." };
  }
  const subscriber = await prisma.newsletterSubscriber.upsert({
    where: { email: normalizedEmail },
    update: { status: "SUBSCRIBED" },
    create: { email: normalizedEmail },
  });
  return { success: true as const, subscriber };
}

export async function unsubscribeFromNewsletter(email: string) {
  const normalizedEmail = email.trim().toLowerCase();
  if (!normalizedEmail) return { success: false as const, error: "Adresse email invalide." };
  const subscriber = await prisma.newsletterSubscriber.update({ where: { email: normalizedEmail }, data: { status: "UNSUBSCRIBED" } });
  return { success: true as const, subscriber };
}