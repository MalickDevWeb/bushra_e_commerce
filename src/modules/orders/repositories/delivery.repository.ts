import { prisma } from "@/lib/prisma";

export const deliveryRepository = {
  list() {
    return prisma.delivery.findMany({ include: { order: true }, orderBy: { createdAt: "desc" } });
  },

  update(id: string, data: { status: string; carrier?: string; trackingNumber?: string }) {
    const timestamp = data.status === "SHIPPED" ? { shippedAt: new Date() } : data.status === "DELIVERED" ? { deliveredAt: new Date() } : {};
    return prisma.$transaction(async (transaction) => {
      const delivery = await transaction.delivery.update({ where: { id }, data: { ...data, ...timestamp } });
      const orderStatus = data.status === "DELIVERED" ? "DELIVERED" : data.status === "SHIPPED" ? "SHIPPED" : undefined;
      if (orderStatus) await transaction.order.update({ where: { id: delivery.orderId }, data: { status: orderStatus } });
      return delivery;
    });
  },
};