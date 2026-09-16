import { prisma } from "@/lib/prisma";

export const orderRepository = {
  createWithItems(input: {
    orderNumber: string;
    userId?: string;
    customerName: string;
    customerPhone: string;
    address: string;
    notes?: string;
    totalAmount: number;
    deliveryFee: number;
    paymentMethod: string;
    items: Array<{ productId: string; quantity: number; price: number }>;
  }) {
    return prisma.$transaction(async (transaction) => {
      for (const item of input.items) {
        const updated = await transaction.product.updateMany({
          where: { id: item.productId, stock: { gte: item.quantity } },
          data: { stock: { decrement: item.quantity } },
        });
        if (updated.count !== 1) {
          throw new Error(`STOCK_UNAVAILABLE:${item.productId}`);
        }
      }

      return transaction.order.create({
        data: {
          orderNumber: input.orderNumber,
          userId: input.userId,
          customerName: input.customerName,
          customerPhone: input.customerPhone,
          address: input.address,
          notes: input.notes,
          totalAmount: input.totalAmount,
          deliveryFee: input.deliveryFee,
          paymentMethod: input.paymentMethod,
          items: { create: input.items },
          payments: {
            create: {
              provider: input.paymentMethod === "COD" ? "CASH_ON_DELIVERY" : input.paymentMethod,
              amount: input.totalAmount,
            },
          },
          delivery: { create: { status: "PENDING" } },
        },
        include: { items: true, payments: true, delivery: true },
      });
    });
  },

  findByOrderNumber(orderNumber: string) {
    return prisma.order.findUnique({
      where: { orderNumber },
      include: { items: { include: { product: true } }, payments: true, delivery: true },
    });
  },

  list() {
    return prisma.order.findMany({
      include: { items: true, payments: true, delivery: true },
      orderBy: { createdAt: "desc" },
    });
  },

  updateStatus(id: string, status: string) {
    return prisma.order.update({ where: { id }, data: { status } });
  },
};