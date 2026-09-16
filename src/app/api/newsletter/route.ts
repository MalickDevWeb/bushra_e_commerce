import { NextResponse } from "next/server";
import { subscribeToNewsletter } from "@/modules/content/actions/settings.actions";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await subscribeToNewsletter(String(body.email || ""));
    return NextResponse.json(result, { status: result.success ? 201 : 400 });
  } catch {
    return NextResponse.json({ success: false, error: "Adresse email invalide." }, { status: 400 });
  }
}