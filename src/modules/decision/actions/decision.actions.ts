"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function processDecisionAction(
  recommendationId: string, 
  actionTaken: "IGNORED" | "SCHEDULED" | "SENT_NOW",
  payload?: {
    campaignName?: string;
    channel?: string;
    content?: string;
    segmentName?: string;
    scheduledAt?: Date;
  }
) {
  try {
    let campaignId = null;

    // 1. If we schedule or send now, create a campaign
    if (actionTaken === "SCHEDULED" || actionTaken === "SENT_NOW") {
      const campaign = await prisma.campaign.create({
        data: {
          name: payload?.campaignName || `Campagne depuis décision ${recommendationId.substring(0,6)}`,
          channel: payload?.channel || "WHATSAPP",
          status: actionTaken === "SENT_NOW" ? "ACTIVE" : "SCHEDULED",
          content: payload?.content || "",
          scheduledAt: payload?.scheduledAt,
        }
      });
      campaignId = campaign.id;
    }

    // 2. Log the decision
    await prisma.decisionLog.create({
      data: {
        recommendationId,
        actionTaken,
        details: campaignId ? { campaignId } : {}
      }
    });

    revalidatePath("/admin/decision-center");
    revalidatePath("/admin/communication/campagnes");
    return { success: true };
  } catch (error) {
    console.error("Decision action error:", error);
    return { success: false, error: "Failed to process decision" };
  }
}

export async function getHandledDecisions() {
  const logs = await prisma.decisionLog.findMany({
    select: { recommendationId: true }
  });
  return logs.map(l => l.recommendationId);
}
