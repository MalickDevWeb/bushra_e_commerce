"use server";

import { revalidatePath } from "next/cache";
import { permissions, requirePermission } from "@/lib/authorization";
import { readText } from "@/lib/validation";
import { promotionRepository } from "@/modules/catalog/repositories/catalog.repository";
import { promotionService } from "@/modules/catalog/services/catalog.service";

export async function getPromotions() {
  try {
    return await promotionRepository.list();
  } catch (error) {
    console.error("Error fetching promotions:", error);
    return [];
  }
}

export async function savePromotionAction(formData: FormData) {
  try {
    const id = readText(formData, "id");
    // Reuse CATEGORY_CREATE or create a new PROMOTION_CREATE perm if needed. Assuming user is Admin.
    const currentUser = await requirePermission(permissions.CATEGORY_CREATE); 
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const name = readText(formData, "name");
    const code = readText(formData, "code");
    const type = readText(formData, "type");
    const valueStr = readText(formData, "value");
    const value = valueStr ? parseFloat(valueStr) : null;
    const usageLimitStr = readText(formData, "usageLimit");
    const usageLimit = usageLimitStr ? parseInt(usageLimitStr, 10) : null;
    const startDateStr = readText(formData, "startDate");
    const startDate = startDateStr ? new Date(startDateStr) : new Date();
    const endDateStr = readText(formData, "endDate");
    const endDate = endDateStr ? new Date(endDateStr) : null;
    const minimumSpendStr = readText(formData, "minimumSpend");
    const minimumSpend = minimumSpendStr ? parseFloat(minimumSpendStr) : null;
    const isActive = formData.get("isActive") === "true";

    if (!name || !code || !type) {
      return { success: false, error: "Nom, code et type sont obligatoires." };
    }

    if (type !== "FREE_SHIPPING" && (!value || value <= 0)) {
      return { success: false, error: "La valeur de réduction doit être supérieure à 0." };
    }

    const result = await promotionService.savePromotion(id || undefined, {
      name,
      code,
      type,
      value,
      usageLimit,
      startDate,
      endDate,
      minimumSpend,
      isActive,
    });

    if (!result.success) return result;

    revalidatePath("/admin/boutique/promotions");
    return result;
  } catch (error) {
    console.error("Error saving promotion:", error);
    return { success: false, error: "Impossible d'enregistrer la promotion." };
  }
}

export async function deletePromotionAction(id: string) {
  try {
    const currentUser = await requirePermission(permissions.CATEGORY_DELETE);
    if (!currentUser) return { success: false, error: "Accès non autorisé." };

    const result = await promotionService.deletePromotion(id);
    if (!result.success) return result;
    
    revalidatePath("/admin/boutique/promotions");
    return result;
  } catch (error) {
    console.error("Error deleting promotion:", error);
    return { success: false, error: "Impossible de supprimer la promotion." };
  }
}
