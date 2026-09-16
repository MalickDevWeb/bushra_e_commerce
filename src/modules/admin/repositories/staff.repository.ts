import { prisma } from "@/lib/prisma";

export const staffRepository = {
  findByEmail(email: string) {
    return prisma.user.findUnique({ where: { email } });
  },
  createAdmin(data: { name: string; email: string; password: string }) {
    return prisma.user.create({ data: { ...data, role: "ADMIN" } });
  },
  updateRole(id: string, role: string) {
    return prisma.user.update({ where: { id }, data: { role } });
  },
  delete(id: string) {
    return prisma.user.delete({ where: { id } });
  },
  list() {
    return prisma.user.findMany({
      where: { role: { in: ["ADMIN", "SUPER_ADMIN", "DISABLED"] } },
      select: { id: true, name: true, email: true, role: true, createdAt: true },
      orderBy: { createdAt: "asc" },
    });
  },
};
