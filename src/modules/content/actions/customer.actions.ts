"use server";

import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/lib/auth";

export async function getCustomersAnalytics() {
  if (!(await requireAdmin())) return [];

  try {
    const customers = await prisma.user.findMany({
      where: { role: "USER" },
      include: {
        orders: {
          select: {
            id: true,
            totalAmount: true,
            createdAt: true,
          },
          orderBy: { createdAt: "desc" },
        },
        wishlist: {
          include: {
            product: { select: { name: true, category: { select: { name: true } } } }
          }
        }
      },
      orderBy: { createdAt: "desc" }
    });

    return customers.map(c => {
      const totalSpent = c.orders.reduce((sum, o) => sum + o.totalAmount, 0);
      const orderCount = c.orders.length;
      
      let status = "Nouveau";
      if (totalSpent >= 200000 || orderCount >= 5) status = "VIP";
      else if (orderCount >= 1) status = "Régulier";

      const preferredCategories = Array.from(new Set(c.wishlist.map(w => w.product.category.name)));

      return {
        id: c.id,
        clientId: `CLT-${c.id.slice(0, 4).toUpperCase()}`,
        name: c.name || "Client Anonyme",
        email: c.email,
        phone: c.phone || "Non renseigné",
        ordersCount: orderCount,
        totalSpent,
        status,
        registrationDate: c.createdAt,
        lastActive: c.lastLoginAt || c.orders[0]?.createdAt || c.createdAt,
        likes: c.wishlist.map(w => w.product.name),
        preferredCategories,
        lastOrders: c.orders.slice(0, 5),
      };
    });
  } catch (error) {
    console.error("Error fetching customer analytics:", error);
    return [];
  }
}
