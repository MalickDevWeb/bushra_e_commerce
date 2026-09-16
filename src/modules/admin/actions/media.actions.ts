"use server";

import { requireAdmin } from "@/lib/auth";
import { mediaRepository } from "@/modules/admin/repositories/media.repository";

export async function getMediaAssets() {
  if (!(await requireAdmin())) return [];
  return mediaRepository.list();
}

export async function registerMediaAsset(input: { name: string; url: string; mimeType?: string; size?: number; alt?: string }) {
  if (!(await requireAdmin())) return { success: false as const, error: "Accès non autorisé." };
  if (!input.name.trim() || !/^https:\/\//.test(input.url) && !input.url.startsWith("/")) {
    return { success: false as const, error: "Le média est invalide." };
  }
  return { success: true as const, asset: await mediaRepository.create({ ...input, name: input.name.trim(), alt: input.alt?.trim() }) };
}

export async function deleteMediaAsset(id: string) {
  if (!(await requireAdmin())) return { success: false as const, error: "Accès non autorisé." };
  await mediaRepository.delete(id);
  return { success: true as const };
}