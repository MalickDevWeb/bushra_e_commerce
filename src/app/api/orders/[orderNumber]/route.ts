import { NextResponse } from "next/server";
import { orderService } from "@/modules/orders/services/order.service";

export async function GET(_request: Request, context: { params: Promise<{ orderNumber: string }> }) {
  const { orderNumber } = await context.params;
  const order = await orderService.track(orderNumber);
  if (!order) return NextResponse.json({ error: "Commande introuvable." }, { status: 404 });
  return NextResponse.json({ order });
}