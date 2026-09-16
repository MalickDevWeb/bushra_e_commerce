"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/prisma";
import { requirePermission, permissions } from "@/lib/authorization";

export async function getInventory() {
  const products = await prisma.product.findMany({
    select: {
      id: true,
      name: true,
      sku: true,
      stock: true,
      orderItems: {
        where: {
          order: {
            status: { in: ["PENDING", "PAID"] },
          },
        },
        select: {
          quantity: true,
        },
      },
    },
    orderBy: { name: "asc" },
  });

  return products.map((p) => {
    const reserved = p.orderItems.reduce((acc, item) => acc + item.quantity, 0);
    return {
      id: p.id,
      name: p.name,
      sku: p.sku || `BUSH-${p.id.slice(0, 8).toUpperCase()}`,
      inStock: p.stock,
      reserved: reserved,
      available: Math.max(0, p.stock - reserved),
    };
  });
}

export async function updateAvailableStock(productId: string, newAvailableStr: string) {
  try {
    const currentUser = await requirePermission(permissions.PRODUCT_UPDATE); // or equivalent
    if (!currentUser) return { success: false, error: "Accès non autorisé." };
    
    const newAvailable = parseInt(newAvailableStr, 10);
    if (isNaN(newAvailable) || newAvailable < 0) return { success: false, error: "Quantité invalide." };

    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: {
        orderItems: {
          where: { order: { status: { in: ["PENDING", "PAID"] } } },
          select: { quantity: true },
        },
      },
    });

    if (!product) return { success: false, error: "Produit introuvable." };

    const reserved = product.orderItems.reduce((acc, item) => acc + item.quantity, 0);
    const newTotalStock = newAvailable + reserved;

    await prisma.product.update({
      where: { id: productId },
      data: { stock: newTotalStock },
    });

    revalidatePath("/admin/boutique/stocks");
    return { success: true };
  } catch (error) {
    console.error("Error updating stock:", error);
    return { success: false, error: "Erreur lors de la mise à jour." };
  }
}

export async function getProductOrders(productId: string) {
  try {
    const items = await prisma.orderItem.findMany({
      where: { productId },
      include: {
        order: {
          select: {
            id: true,
            orderNumber: true,
            customerName: true,
            customerPhone: true,
            status: true,
            paymentStatus: true,
            createdAt: true,
          }
        }
      },
      orderBy: { order: { createdAt: "desc" } },
    });

    return items.map(item => ({
      id: item.order.id,
      orderNumber: item.order.orderNumber,
      date: item.order.createdAt,
      customer: item.order.customerName,
      phone: item.order.customerPhone,
      quantity: item.quantity,
      status: item.order.status,
      paymentStatus: item.order.paymentStatus,
    }));
  } catch (error) {
    console.error("Error fetching product orders:", error);
    return [];
  }
}
