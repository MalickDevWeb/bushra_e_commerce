import { NextResponse } from "next/server";
import { paymentService } from "@/modules/payments/services/payment.service";

export async function POST(request: Request) {
  const expectedSecret = process.env.PAYMENT_WEBHOOK_SECRET;
  if (!expectedSecret || request.headers.get("x-payment-webhook-secret") !== expectedSecret) {
    return NextResponse.json({ error: "Webhook non autorisé." }, { status: 401 });
  }

  try {
    const body = await request.json();
    if (body.status !== "PAID") return NextResponse.json({ received: true });
    const result = await paymentService.confirm(String(body.paymentId || ""), String(body.transactionId || ""));
    return NextResponse.json(result, { status: result.success ? 200 : 400 });
  } catch {
    return NextResponse.json({ error: "Payload de paiement invalide." }, { status: 400 });
  }
}