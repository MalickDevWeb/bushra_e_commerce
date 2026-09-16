import { NextResponse } from "next/server";
import { submitContactMessage } from "@/modules/clients/actions/client.actions";

export async function POST(request: Request) {
  try {
    const result = await submitContactMessage(await request.json());
    return NextResponse.json(result, { status: result.success ? 201 : 400 });
  } catch {
    return NextResponse.json({ success: false, error: "Message invalide." }, { status: 400 });
  }
}