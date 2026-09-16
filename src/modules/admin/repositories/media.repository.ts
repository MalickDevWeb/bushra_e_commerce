import { prisma } from "@/lib/prisma";

export const mediaRepository = {
  list() {
    return prisma.mediaAsset.findMany({ orderBy: { createdAt: "desc" } });
  },
  create(data: { name: string; url: string; mimeType?: string; size?: number; alt?: string }) {
    return prisma.mediaAsset.create({ data });
  },
  delete(id: string) {
    return prisma.mediaAsset.delete({ where: { id } });
  },
};