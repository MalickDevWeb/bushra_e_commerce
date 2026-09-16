import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth";
import { orderRepository } from "@/modules/orders/repositories/order.repository";
import { orderService } from "@/modules/orders/services/order.service";

export async function POST(request: Request) {
  try {
    const input = await request.json();
    const result = await orderService.create(input);
    return NextResponse.json(result, { status: result.success ? 201 : 400 });
  } catch {
    return NextResponse.json({ success: false, error: "Requête de commande invalide." }, { status: 400 });
  }
}

export async function GET() {
  if (!(await requireAdmin())) return NextResponse.json({ error: "Accès non autorisé." }, { status: 401 });
  return NextResponse.json({ orders: await orderRepository.list() });
}