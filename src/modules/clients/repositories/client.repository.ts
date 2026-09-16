import { prisma } from "@/lib/prisma";

export const clientRepository = {
  list() {
    return prisma.user.findMany({
      where: { role: "USER" },
      select: { id: true, name: true, email: true, createdAt: true, _count: { select: { orders: true, reviews: true } } },
      orderBy: { createdAt: "desc" },
    });
  },

  createMessage(data: { userId?: string; name: string; email: string; phone?: string; subject?: string; message: string }) {
    return prisma.customerMessage.create({ data });
  },

  listMessages() {
    return prisma.customerMessage.findMany({ orderBy: { createdAt: "desc" } });
  },

  updateMessageStatus(id: string, status: string) {
    return prisma.customerMessage.update({ where: { id }, data: { status } });
  },

  createReview(data: { userId?: string; productId: string; rating: number; comment?: string }) {
    return prisma.review.create({ data });
  },

  moderateReview(id: string, status: string) {
    return prisma.review.update({ where: { id }, data: { status } });
  },

  listReviews() {
    return prisma.review.findMany({
      include: { user: { select: { name: true, email: true } }, product: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
    });
  },
};