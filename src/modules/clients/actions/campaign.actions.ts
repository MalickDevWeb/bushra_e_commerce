"use server";

import { prisma } from "@/lib/prisma";

export async function getCampaigns() {
  try {
    const campaigns = await prisma.campaign.findMany({
      include: {
        segment: true
      },
      orderBy: { createdAt: "desc" }
    });
    return campaigns;
  } catch (error) {
    console.error("Error fetching campaigns:", error);
    return [];
  }
}
