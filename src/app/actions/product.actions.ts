"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProducts() {
  try {
    const products = await prisma.product.findMany({
      include: {
        category: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getCategories() {
  try {
    const categories = await prisma.category.findMany({
      orderBy: {
        name: "asc",
      },
    });
    return categories;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

export async function createProduct(formData: FormData) {
  try {
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const price = parseFloat(formData.get("price") as string);
    const stock = parseInt(formData.get("stock") as string);
    const categoryId = formData.get("categoryId") as string;
    // In a real app, you would upload the file and get the URL. For now we use a placeholder or the provided URL.
    const image = (formData.get("image") as string) || "/placeholder.jpg";

    // Basic validation
    if (!name || !price || !categoryId) {
      return { success: false, error: "Missing required fields" };
    }

    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");

    const product = await prisma.product.create({
      data: {
        name,
        slug,
        description: description || "",
        price,
        stock: isNaN(stock) ? 0 : stock,
        categoryId,
        image,
      },
    });

    revalidatePath("/admin/boutique/produits");
    revalidatePath("/boutique");
    
    return { success: true, product };
  } catch (error) {
    console.error("Error creating product:", error);
    return { success: false, error: "Failed to create product" };
  }
}

export async function createCategory(name: string) {
  try {
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
    const category = await prisma.category.create({
      data: {
        name,
        slug,
      },
    });
    return { success: true, category };
  } catch (error) {
    console.error("Error creating category:", error);
    return { success: false, error: "Failed to create category" };
  }
}


export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    return product;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}
