import { prisma } from "@/lib/prisma";

export const paymentRepository = {
  findByTransactionId(transactionId: string) {
    return prisma.payment.findUnique({ where: { transactionId }, include: { order: true } });
  },

  async markPaid(paymentId: string, transactionId: string) {
    return prisma.$transaction(async (transaction) => {
      const payment = await transaction.payment.update({
        where: { id: paymentId },
        data: { status: "PAID", transactionId },
      });
      await transaction.order.update({
        where: { id: payment.orderId },
        data: { paymentStatus: "PAID", status: "PAID" },
      });
      return payment;
    });
  },

  async markFailed(paymentId: string) {
    return prisma.$transaction(async (transaction) => {
      const payment = await transaction.payment.update({ where: { id: paymentId }, data: { status: "FAILED" } });
      await transaction.order.update({ where: { id: payment.orderId }, data: { paymentStatus: "FAILED" } });
      return payment;
    });
  },

  list() {
    return prisma.payment.findMany({ include: { order: true }, orderBy: { createdAt: "desc" } });
  },
};