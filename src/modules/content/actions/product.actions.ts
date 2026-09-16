"use server";

import { revalidatePath } from "next/cache";
import { permissions, requirePermission } from "@/lib/authorization";
import { readText, validateProductFields } from "@/lib/validation";
import { categoryRepository, productRepository } from "@/modules/catalog/repositories/catalog.repository";
import { catalogService } from "@/modules/catalog/services/catalog.service";

export async function getProducts() {
  try {
    return await productRepository.list();
  } catch (error) {
    console.error("Error fetching products:", error instanceof Error ? error.message : error);
    return [];
  }
}

export async function getCategories() {
  try {
    return await categoryRepository.list();
  } catch (error) {
    console.error("Error fetching categories:", error instanceof Error ? error.message : error);
    return [];
  }
}

export async function createProduct(formData: FormData) {
  try {
    const currentUser = await requirePermission(permissions.PRODUCT_CREATE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };
    const name = readText(formData, "name");
    const description = readText(formData, "description");
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock") || 0);
    const categoryId = readText(formData, "categoryId");
    const image = readText(formData, "image") || "/images/product_1.jpg";
    const image2 = readText(formData, "image2") || null;
    const image3 = readText(formData, "image3") || null;

    const validationError = validateProductFields({ name, categoryId, price, stock, images: [image, image2, image3] });
    if (validationError) return { success: false, error: validationError };

    const result = await catalogService.saveProduct(undefined, { name, description, price, stock, categoryId, image, image2, image3 });
    if (!result.success) return result;

    revalidatePath("/admin/boutique/produits");
    revalidatePath("/boutique");

    return result;
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
}

export async function saveProduct(formData: FormData) {
  try {
    const id = readText(formData, "id");
    const currentUser = await requirePermission(id ? permissions.PRODUCT_UPDATE : permissions.PRODUCT_CREATE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };
    const name = readText(formData, "name");
    const description = readText(formData, "description");
    const price = Number(formData.get("price"));
    const stock = Number(formData.get("stock"));
    const categoryId = readText(formData, "categoryId");
    const image = readText(formData, "image") || "/images/product_1.jpg";
    const image2 = readText(formData, "image2") || null;
    const image3 = readText(formData, "image3") || null;
    const validationError = validateProductFields({ name, categoryId, price, stock, images: [image, image2, image3] });
    if (validationError) return { success: false, error: validationError };
    const result = await catalogService.saveProduct(id || undefined, { name, description, price, stock, categoryId, image, image2, image3 });
    if (!result.success) return result;
    revalidatePath("/admin/boutique/produits");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error saving product:", error);
    return { success: false, error: "Impossible d'enregistrer le produit." };
  }
}

export async function deleteProduct(id: string) {
  try {
    const currentUser = await requirePermission(permissions.PRODUCT_DELETE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };
    const result = await catalogService.deleteProduct(id);
    if (!result.success) return result;
    revalidatePath("/admin/boutique/produits");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error deleting product:", error);
    return { success: false, error: "Impossible de supprimer le produit." };
  }
}

export async function createCategory(name: string) {
  try {
    const currentUser = await requirePermission(permissions.CATEGORY_CREATE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const normalizedName = name.trim();
    if (!normalizedName) return { success: false, error: "Le nom est obligatoire." };

    const result = await catalogService.saveCategory(undefined, { name: normalizedName, description: null, image: null, status: "DRAFT" });
    if (!result.success) return result;
    revalidatePath("/admin/boutique/categories");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, error: "Failed to create category" };
  }
}

export async function saveCategory(formData: FormData) {
  try {
    const id = readText(formData, "id");
    const currentUser = await requirePermission(id ? permissions.CATEGORY_UPDATE : permissions.CATEGORY_CREATE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const name = readText(formData, "name");
    const description = readText(formData, "description") || null;
    const image = readText(formData, "image") || null;
    const status = formData.get("status")?.toString() === "ACTIVE" ? "ACTIVE" : "DRAFT";

    if (!name) return { success: false, error: "Le nom est obligatoire." };

    const result = await catalogService.saveCategory(id || undefined, { name, description, image, status });
    if (!result.success) return result;

    revalidatePath("/admin/boutique/categories");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error saving category:", error);
    return { success: false, error: "Impossible d'enregistrer la catégorie." };
  }
}

export async function deleteCategory(id: string) {
  try {
    const currentUser = await requirePermission(permissions.CATEGORY_DELETE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const result = await catalogService.deleteCategory(id);
    if (!result.success) return result;
    revalidatePath("/admin/boutique/categories");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error deleting category:", error);
    return { success: false, error: "Impossible de supprimer la catégorie." };
  }
}

export async function getProductById(id: string) {
  try {
    const product = await productRepository.findById(id);
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}