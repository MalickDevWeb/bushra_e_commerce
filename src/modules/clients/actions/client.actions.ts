"use server";

import { requireAdmin } from "@/lib/auth";
import { clientRepository } from "@/modules/clients/repositories/client.repository";

function validEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function getClients() {
  if (!(await requireAdmin())) return [];
  return clientRepository.list();
}

export async function submitContactMessage(input: {
  userId?: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}) {
  const name = input.name.trim();
  const email = input.email.trim().toLowerCase();
  const message = input.message.trim();
  if (!name || !validEmail(email) || !message || message.length > 5000) {
    return { success: false as const, error: "Les informations du message sont invalides." };
  }
  const created = await clientRepository.createMessage({ ...input, name, email, message, phone: input.phone?.trim(), subject: input.subject?.trim() });
  return { success: true as const, message: created };
}

export async function getClientMessages() {
  if (!(await requireAdmin())) return [];
  return clientRepository.listMessages();
}

export async function updateClientMessageStatus(id: string, status: string) {
  if (!(await requireAdmin())) return { success: false as const, error: "Accès non autorisé." };
  if (!new Set(["NEW", "READ", "REPLIED", "ARCHIVED"]).has(status)) return { success: false as const, error: "Statut invalide." };
  return { success: true as const, message: await clientRepository.updateMessageStatus(id, status) };
}

export async function submitReview(input: { userId?: string; productId: string; rating: number; comment?: string }) {
  if (!input.productId || !Number.isInteger(input.rating) || input.rating < 1 || input.rating > 5) {
    return { success: false as const, error: "L'avis est invalide." };
  }
  return { success: true as const, review: await clientRepository.createReview({ ...input, comment: input.comment?.trim() }) };
}

export async function moderateReview(id: string, status: string) {
  if (!(await requireAdmin())) return { success: false as const, error: "Accès non autorisé." };
  if (!new Set(["PENDING", "APPROVED", "REJECTED"]).has(status)) return { success: false as const, error: "Statut invalide." };
  return { success: true as const, review: await clientRepository.moderateReview(id, status) };
}

export async function getReviews() {
  if (!(await requireAdmin())) return [];
  return clientRepository.listReviews();
}