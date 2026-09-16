"use server";

import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getAdminHeaderData() {
  const admin = await requireAdmin();
  if (!admin) return null;

  const [user, pendingOrders, newMessages, pendingReviews] = await Promise.all([
    prisma.user.findUnique({ where: { id: admin.id }, select: { name: true, email: true, role: true } }),
    prisma.order.count({ where: { status: "PENDING" } }),
    prisma.customerMessage.count({ where: { status: "NEW" } }),
    prisma.review.count({ where: { status: "PENDING" } }),
  ]);

  if (!user) return null;
  return {
    name: user.name || user.email.split("@")[0],
    email: user.email,
    role: user.role,
    unreadCount: pendingOrders + newMessages + pendingReviews,
  };
}