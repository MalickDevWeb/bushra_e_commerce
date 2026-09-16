import { prisma } from "@/lib/prisma";

const FALLBACK_PRODUCT_IMAGE = "/images/product_1.jpg";

function normalizeProductImage(image: string | null) {
  return image && image !== "/placeholder.jpg" ? image : FALLBACK_PRODUCT_IMAGE;
}

function normalizeProductImages<T extends { image: string | null; image2: string | null; image3: string | null }>(product: T) {
  return {
    ...product,
    image: normalizeProductImage(product.image),
    image2: product.image2 === "/placeholder.jpg" ? null : product.image2,
    image3: product.image3 === "/placeholder.jpg" ? null : product.image3,
  };
}

export const productRepository = {
  async list() {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    return products.map(normalizeProductImages);
  },
  async findById(id: string) {
    const product = await prisma.product.findUnique({ where: { id }, include: { category: true } });
    return product ? normalizeProductImages(product) : null;
  },
  findByNameOrSlug(name: string, slug: string, excludeId?: string) {
    return prisma.product.findFirst({
      where: {
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
        OR: [{ name }, { slug }],
      },
      select: { id: true },
    });
  },
  create(data: { name: string; slug: string; description: string; price: number; stock: number; categoryId: string; image: string; image2: string | null; image3: string | null }) {
    return prisma.product.create({ data });
  },
  update(id: string, data: { name: string; slug: string; description: string; price: number; stock: number; categoryId: string; image: string; image2: string | null; image3: string | null }) {
    return prisma.product.update({ where: { id }, data });
  },
  findForDelete(id: string) {
    return prisma.product.findUnique({
      where: { id },
      select: { _count: { select: { orderItems: true } } },
    });
  },
  delete(id: string) {
    return prisma.product.delete({ where: { id } });
  },
};

export const categoryRepository = {
  list() {
    return prisma.category.findMany({
      orderBy: { name: "asc" },
      include: { _count: { select: { products: true } } },
    });
  },
  findByNameOrSlug(name: string, slug: string, excludeId?: string) {
    return prisma.category.findFirst({
      where: {
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
        OR: [{ name }, { slug }],
      },
      select: { id: true },
    });
  },
  findById(id: string) {
    return prisma.category.findUnique({ where: { id }, select: { id: true } });
  },
  create(data: { name: string; slug: string; description: string | null; image: string | null; status: string }) {
    return prisma.category.create({ data });
  },
  update(id: string, data: { name: string; slug: string; description: string | null; image: string | null; status: string }) {
    return prisma.category.update({ where: { id }, data });
  },
  findForDelete(id: string) {
    return prisma.category.findUnique({
      where: { id },
      select: { _count: { select: { products: true } } },
    });
  },
  delete(id: string) {
    return prisma.category.delete({ where: { id } });
  },
};

export const collectionRepository = {
  list() {
    return prisma.collection.findMany({
      orderBy: { createdAt: "desc" },
      include: { _count: { select: { products: true } } },
    });
  },
  findById(id: string) {
    return prisma.collection.findUnique({
      where: { id },
      include: { products: { select: { id: true } } },
    });
  },
  findByNameOrSlug(name: string, slug: string, excludeId?: string) {
    return prisma.collection.findFirst({
      where: {
        ...(excludeId ? { NOT: { id: excludeId } } : {}),
        OR: [{ name }, { slug }],
      },
      select: { id: true },
    });
  },
  create(data: { name: string; slug: string; type: string; status: string; scheduledAt: Date | null }, productIds: string[]) {
    return prisma.collection.create({
      data: {
        ...data,
        products: { connect: productIds.map((id) => ({ id })) },
      },
    });
  },
  update(id: string, data: { name: string; slug: string; type: string; status: string; scheduledAt: Date | null }, productIds: string[]) {
    return prisma.collection.update({
      where: { id },
      data: {
        ...data,
        products: { set: productIds.map((id) => ({ id })) },
      },
    });
  },
  delete(id: string) {
    return prisma.collection.delete({ where: { id } });
  },
};

export const promotionRepository = {
  list() {
    return prisma.promotion.findMany({
      orderBy: { createdAt: "desc" },
    });
  },
  findById(id: string) {
    return prisma.promotion.findUnique({ where: { id } });
  },
  findByCode(code: string) {
    return prisma.promotion.findUnique({ where: { code } });
  },
  create(data: { name: string; code: string; type: string; value: number | null; usageLimit: number | null; startDate: Date; endDate: Date | null; minimumSpend: number | null; isActive: boolean }) {
    return prisma.promotion.create({ data });
  },
  update(id: string, data: { name: string; code: string; type: string; value: number | null; usageLimit: number | null; startDate: Date; endDate: Date | null; minimumSpend: number | null; isActive: boolean }) {
    return prisma.promotion.update({ where: { id }, data });
  },
  delete(id: string) {
    return prisma.promotion.delete({ where: { id } });
  }
};
