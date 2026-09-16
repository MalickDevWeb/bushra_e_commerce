import { categoryRepository, productRepository, collectionRepository, promotionRepository } from "@/modules/catalog/repositories/catalog.repository";
import { slugify } from "@/lib/validation";

type ProductInput = {
  name: string;
  description: string;
  price: number;
  stock: number;
  categoryId: string;
  image: string;
  image2: string | null;
  image3: string | null;
};

type CategoryInput = {
  name: string;
  description: string | null;
  image: string | null;
  status: string;
};

export const catalogService = {
  async saveProduct(id: string | undefined, input: ProductInput) {
    const category = await categoryRepository.findById(input.categoryId);
    if (!category) return { success: false as const, error: "La catégorie sélectionnée n'existe plus." };
    const slug = slugify(input.name);
    const duplicate = await productRepository.findByNameOrSlug(input.name, slug, id);
    if (duplicate) return { success: false as const, error: "Ce nom de produit est déjà utilisé." };
    const data = { ...input, slug };
    const product = id
      ? await productRepository.update(id, data)
      : await productRepository.create(data);
    return { success: true as const, product };
  },

  async deleteProduct(id: string) {
    const product = await productRepository.findForDelete(id);
    if (!product) return { success: false as const, error: "Produit introuvable." };
    if (product._count.orderItems > 0) {
      return { success: false as const, error: "Ce produit est utilisé dans une commande et ne peut pas être supprimé." };
    }
    await productRepository.delete(id);
    return { success: true as const };
  },

  async saveCategory(id: string | undefined, input: CategoryInput) {
    const slug = slugify(input.name);
    const duplicate = await categoryRepository.findByNameOrSlug(input.name, slug, id);
    if (duplicate) return { success: false as const, error: "Cette catégorie existe déjà." };
    const data = { ...input, slug };
    const category = id
      ? await categoryRepository.update(id, data)
      : await categoryRepository.create(data);
    return { success: true as const, category };
  },

  async deleteCategory(id: string) {
    const category = await categoryRepository.findForDelete(id);
    if (!category) return { success: false as const, error: "Catégorie introuvable." };
    if (category._count.products > 0) {
      return { success: false as const, error: "Supprimez ou déplacez les produits avant de supprimer cette catégorie." };
    }
    await categoryRepository.delete(id);
    return { success: true as const };
  },
};

type CollectionInput = {
  name: string;
  type: string;
  status: string;
  scheduledAt: Date | null;
  productIds: string[];
};

export const collectionService = {
  async saveCollection(id: string | undefined, input: CollectionInput) {
    const slug = slugify(input.name);
    const duplicate = await collectionRepository.findByNameOrSlug(input.name, slug, id);
    if (duplicate) return { success: false as const, error: "Cette collection existe déjà." };
    
    const { productIds, ...data } = input;
    const collectionData = { ...data, slug };
    const collection = id
      ? await collectionRepository.update(id, collectionData, productIds)
      : await collectionRepository.create(collectionData, productIds);
      
    return { success: true as const, collection };
  },

  async deleteCollection(id: string) {
    await collectionRepository.delete(id);
    return { success: true as const };
  }
};

type PromotionInput = {
  name: string;
  code: string;
  type: string;
  value: number | null;
  usageLimit: number | null;
  startDate: Date;
  endDate: Date | null;
  minimumSpend: number | null;
  isActive: boolean;
};

export const promotionService = {
  async savePromotion(id: string | undefined, input: PromotionInput) {
    const code = input.code.toUpperCase();
    const duplicate = await promotionRepository.findByCode(code);
    if (duplicate && duplicate.id !== id) {
      return { success: false as const, error: "Ce code promo est déjà utilisé." };
    }
    
    const promotion = id
      ? await promotionRepository.update(id, { ...input, code })
      : await promotionRepository.create({ ...input, code });
      
    return { success: true as const, promotion };
  },

  async deletePromotion(id: string) {
    await promotionRepository.delete(id);
    return { success: true as const };
  }
};
