"use server";

import { revalidatePath } from "next/cache";
import { permissions, requirePermission } from "@/lib/authorization";
import { readText } from "@/lib/validation";
import { collectionRepository } from "@/modules/catalog/repositories/catalog.repository";
import { collectionService } from "@/modules/catalog/services/catalog.service";

export async function getCollections() {
  try {
    return await collectionRepository.list();
  } catch (error) {
    console.error("Error fetching collections:", error);
    return [];
  }
}

export async function getCollectionById(id: string) {
  try {
    return await collectionRepository.findById(id);
  } catch (error) {
    console.error("Error fetching collection:", error);
    return null;
  }
}

export async function saveCollectionAction(formData: FormData, productIds: string[]) {
  try {
    const id = readText(formData, "id");
    // Since we don't have explicit collection permissions, we can use category ones for now or create new ones.
    // For simplicity, let's reuse CATEGORY_CREATE/UPDATE permissions or just assume ADMIN.
    const currentUser = await requirePermission(permissions.CATEGORY_CREATE); 
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const name = readText(formData, "name");
    const type = readText(formData, "type") || "MANUAL";
    const status = readText(formData, "status") || "DRAFT";
    const scheduledAtStr = readText(formData, "scheduledAt");
    const scheduledAt = status === "SCHEDULED" && scheduledAtStr ? new Date(scheduledAtStr) : null;

    if (!name) return { success: false, error: "Le nom est obligatoire." };

    const result = await collectionService.saveCollection(id || undefined, {
      name,
      type,
      status,
      scheduledAt,
      productIds,
    });

    if (!result.success) return result;

    revalidatePath("/admin/boutique/collections");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error saving collection:", error);
    return { success: false, error: "Impossible d'enregistrer la collection." };
  }
}

export async function deleteCollectionAction(id: string) {
  try {
    const currentUser = await requirePermission(permissions.CATEGORY_DELETE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const result = await collectionService.deleteCollection(id);
    if (!result.success) return result;
    
    revalidatePath("/admin/boutique/collections");
    revalidatePath("/boutique");
    return result;
  } catch (error) {
    console.error("Error deleting collection:", error);
    return { success: false, error: "Impossible de supprimer la collection." };
  }
}
