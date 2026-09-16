"use server";

import { permissions, requirePermission } from "@/lib/authorization";
import { orderRepository } from "@/modules/orders/repositories/order.repository";
import { orderService } from "@/modules/orders/services/order.service";

export type CreateOrderInput = Parameters<typeof orderService.create>[0];

export async function createOrder(input: CreateOrderInput) {
  return orderService.create(input);
}

export async function trackOrder(orderNumber: string) {
  if (!orderNumber.trim()) return null;
  return orderService.track(orderNumber);
}

export async function getOrders() {
  const admin = await requirePermission(permissions.PRODUCT_UPDATE);
  if (!admin) return [];
  return orderRepository.list();
}

export async function updateOrderStatus(orderId: string, status: string) {
  const admin = await requirePermission(permissions.PRODUCT_UPDATE);
  if (!admin) return { success: false as const, error: "Accès non autorisé." };
  const allowedStatuses = new Set(["PENDING", "PAID", "SHIPPED", "DELIVERED", "CANCELLED"]);
  if (!allowedStatuses.has(status)) return { success: false as const, error: "Statut invalide." };
  const order = await orderRepository.updateStatus(orderId, status);
  return { success: true as const, order };
}