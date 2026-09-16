"use server";

import { requireAdmin } from "@/lib/auth";
import { deliveryRepository } from "@/modules/orders/repositories/delivery.repository";

const allowedStatuses = new Set(["PENDING", "PREPARING", "SHIPPED", "DELIVERED", "CANCELLED"]);

export async function getDeliveries() {
  if (!(await requireAdmin())) return [];
  return deliveryRepository.list();
}

export async function updateDelivery(
  id: string,
  input: { status: string; carrier?: string; trackingNumber?: string },
) {
  if (!(await requireAdmin())) return { success: false as const, error: "Accès non autorisé." };
  if (!allowedStatuses.has(input.status)) return { success: false as const, error: "Statut de livraison invalide." };
  const delivery = await deliveryRepository.update(id, {
    status: input.status,
    carrier: input.carrier?.trim() || undefined,
    trackingNumber: input.trackingNumber?.trim() || undefined,
  });
  return { success: true as const, delivery };
}