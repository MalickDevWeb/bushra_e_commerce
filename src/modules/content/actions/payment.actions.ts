"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requirePermission, permissions } from "@/lib/authorization";

export async function getPayments() {
  try {
    const payments = await prisma.payment.findMany({
      include: {
        order: {
          include: {
            items: {
              include: {
                product: {
                  select: { name: true, sku: true }
                }
              }
            }
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return payments.map(p => ({
      id: p.id,
      transactionId: p.transactionId || `TXN-${p.id.slice(0, 6).toUpperCase()}`,
      provider: p.provider,
      status: p.status,
      amount: p.amount,
      date: p.createdAt,
      order: {
        id: p.order.id,
        orderNumber: p.order.orderNumber,
        customerName: p.order.customerName,
        customerPhone: p.order.customerPhone,
        address: p.order.address,
        totalAmount: p.order.totalAmount,
        status: p.order.status,
        date: p.order.createdAt,
        items: p.order.items.map(i => ({
          name: i.product.name,
          sku: i.product.sku,
          quantity: i.quantity,
          price: i.price,
        }))
      }
    }));
  } catch (error) {
    console.error("Error fetching payments:", error);
    return [];
  }
}

export async function updatePaymentStatus(paymentId: string, newStatus: string, transactionId?: string) {
  try {
    const currentUser = await requirePermission(permissions.ORDER_UPDATE); // or equivalent
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const payment = await prisma.payment.findUnique({ where: { id: paymentId } });
    if (!payment) return { success: false, error: "Paiement introuvable." };

    await prisma.payment.update({
      where: { id: paymentId },
      data: { 
        status: newStatus,
        ...(transactionId && transactionId.trim() !== "" ? { transactionId: transactionId.trim() } : {})
      }
    });

    // If payment is successful, also update the order paymentStatus
    if (newStatus === "PAID") {
      await prisma.order.update({
        where: { id: payment.orderId },
        data: { paymentStatus: "PAID" }
      });
    }

    revalidatePath("/admin/commandes/paiements");
    return { success: true };
  } catch (error) {
    console.error("Error updating payment:", error);
    return { success: false, error: "Erreur lors de la mise à jour du paiement." };
  }
}
