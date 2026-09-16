"use server";

import { requireAdmin } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export type DashboardData = NonNullable<Awaited<ReturnType<typeof getDashboardData>>>;

const startOfDay = (date: Date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

export async function getDashboardData() {
  if (!(await requireAdmin())) return null;

  const now = new Date();
  const today = startOfDay(now);
  const sevenDaysAgo = new Date(today);
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 6);
  const previousPeriodStart = new Date(today);
  previousPeriodStart.setDate(previousPeriodStart.getDate() - 13);

  const [orders, products, users, messages, reviews, orderItems, categories] = await Promise.all([
    prisma.order.findMany({
      where: { status: { not: "CANCELLED" } },
      select: { id: true, orderNumber: true, customerName: true, totalAmount: true, status: true, createdAt: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.product.findMany({ select: { id: true, name: true, price: true, stock: true, category: { select: { name: true } } } }),
    prisma.user.findMany({ where: { role: { in: ["USER", "DISABLED"] } }, select: { id: true, lastLoginAt: true, createdAt: true, role: true } }),
    prisma.customerMessage.findMany({ select: { id: true, name: true, subject: true, createdAt: true, status: true }, orderBy: { createdAt: "desc" }, take: 5 }),
    prisma.review.findMany({ where: { status: "APPROVED" }, select: { rating: true } }),
    prisma.orderItem.findMany({ where: { order: { status: { not: "CANCELLED" } } }, select: { productId: true, quantity: true, price: true, product: { select: { name: true, category: { select: { name: true } } } } } }),
    prisma.category.findMany({ select: { name: true, products: { select: { orderItems: { where: { order: { status: { not: "CANCELLED" } } }, select: { quantity: true } } } } } }),
  ]);

  const revenue = orders.reduce((sum, order) => sum + order.totalAmount, 0);
  const todayOrders = orders.filter((order) => order.createdAt >= today).length;
  const previousOrders = orders.filter((order) => order.createdAt >= previousPeriodStart && order.createdAt < sevenDaysAgo).length;
  const periodOrders = orders.filter((order) => order.createdAt >= sevenDaysAgo);
  const previousRevenue = orders.filter((order) => order.createdAt >= previousPeriodStart && order.createdAt < sevenDaysAgo).reduce((sum, order) => sum + order.totalAmount, 0);
  const percentChange = (current: number, previous: number) => previous === 0 ? (current === 0 ? 0 : 100) : Math.round(((current - previous) / previous) * 100);

  const sales = Array.from({ length: 7 }, (_, index) => {
    const date = new Date(sevenDaysAgo);
    date.setDate(sevenDaysAgo.getDate() + index);
    const nextDate = new Date(date);
    nextDate.setDate(date.getDate() + 1);
    return { label: date.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" }), value: periodOrders.filter((order) => order.createdAt >= date && order.createdAt < nextDate).reduce((sum, order) => sum + order.totalAmount, 0) };
  });

  const topProducts = [...orderItems.reduce((map, item) => {
    const current = map.get(item.productId) || { name: item.product.name, quantity: 0, revenue: 0 };
    current.quantity += item.quantity;
    current.revenue += item.price * item.quantity;
    map.set(item.productId, current);
    return map;
  }, new Map<string, { name: string; quantity: number; revenue: number }>()).values()].sort((a, b) => b.quantity - a.quantity).slice(0, 5);

  const categoryTotals = categories.map((category) => ({ name: category.name, quantity: category.products.reduce((sum, product) => sum + product.orderItems.reduce((inner, item) => inner + item.quantity, 0), 0) })).sort((a, b) => b.quantity - a.quantity).slice(0, 5);
  const approvedRating = reviews.length ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length : 0;
  const inactiveCutoff = new Date(today);
  inactiveCutoff.setDate(today.getDate() - 90);

  return {
    kpis: { revenue, todayOrders, totalOrders: orders.length, activeProducts: products.filter((product) => product.stock > 0).length, outOfStock: products.filter((product) => product.stock === 0).length, revenueChange: percentChange(revenue, previousRevenue), ordersChange: percentChange(todayOrders, previousOrders) },
    sales,
    topProducts,
    orders: orders.slice(0, 5),
    messages,
    customers: { total: users.length, active: users.filter((user) => user.role === "USER" && (user.lastLoginAt || user.createdAt) >= inactiveCutoff).length, inactive: users.filter((user) => user.role === "USER" && (user.lastLoginAt || user.createdAt) < inactiveCutoff).length, blocked: users.filter((user) => user.role === "DISABLED").length },
    reviews: { average: Number(approvedRating.toFixed(1)), count: reviews.length, distribution: [5, 4, 3, 2, 1].map((stars) => ({ stars, count: reviews.filter((review) => review.rating === stars).length })) },
    categories: categoryTotals,
  };
}