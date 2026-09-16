"use server";

import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function getCrmAnalytics() {
  if (!(await requireAdmin())) return null;

  const [customers, approvedReviews] = await Promise.all([
    prisma.user.findMany({
      where: { role: "USER" },
      select: {
        id: true,
        createdAt: true,
        orders: { where: { status: { not: "CANCELLED" } }, select: { totalAmount: true, createdAt: true, items: { select: { quantity: true, product: { select: { category: { select: { name: true } } } } } } }, orderBy: { createdAt: "desc" } },
        wishlist: { select: { product: { select: { category: { select: { name: true } } } } } },
      },
    }),
    prisma.review.findMany({ where: { status: "APPROVED" }, select: { rating: true } }),
  ]);

  const now = new Date();
  const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
  const revenue = customers.reduce((sum, customer) => sum + customer.orders.reduce((inner, order) => inner + order.totalAmount, 0), 0);
  const allOrders = customers.flatMap((customer) => customer.orders);
  const customersWithOrders = customers.filter((customer) => customer.orders.length > 0);
  const repeatCustomers = customers.filter((customer) => customer.orders.length >= 2).length;
  const segments = {
    vip: customers.filter((customer) => customer.orders.length >= 5 || customer.orders.reduce((sum, order) => sum + order.totalAmount, 0) >= 200000).length,
    regular: customers.filter((customer) => customer.orders.length >= 1 && customer.orders.length < 5 && customer.orders.reduce((sum, order) => sum + order.totalAmount, 0) < 200000).length,
    new: customers.filter((customer) => customer.orders.length === 0).length,
    churnRisk: customers.filter((customer) => customer.orders.length >= 1 && new Date(customer.orders[0].createdAt).getTime() < Date.now() - 45 * 24 * 60 * 60 * 1000).length,
  };
  const affinities = new Map<string, number>();
  for (const customer of customers) {
    for (const order of customer.orders) for (const item of order.items) affinities.set(item.product.category.name, (affinities.get(item.product.category.name) || 0) + item.quantity);
    for (const favorite of customer.wishlist) affinities.set(favorite.product.category.name, (affinities.get(favorite.product.category.name) || 0) + 1);
  }
  const sortedAffinities = [...affinities.entries()].sort((a, b) => b[1] - a[1]);
  const affinityTotal = sortedAffinities.reduce((sum, [, count]) => sum + count, 0) || 1;
  const averageRating = approvedReviews.length ? approvedReviews.reduce((sum, review) => sum + review.rating, 0) / approvedReviews.length : 0;

  return {
    metrics: {
      aov: allOrders.length ? revenue / allOrders.length : 0,
      ltv: customersWithOrders.length ? revenue / customersWithOrders.length : 0,
      retention: customersWithOrders.length ? (repeatCustomers / customersWithOrders.length) * 100 : 0,
      newCustomers: customers.filter((customer) => customer.createdAt >= monthStart).length,
    },
    segments,
    affinities: sortedAffinities.slice(0, 5).map(([name, count]) => ({ name, percentage: Math.round((count / affinityTotal) * 100) })),
    averageRating: Number(averageRating.toFixed(1)),
    reviewCount: approvedReviews.length,
    customers,
  };
}