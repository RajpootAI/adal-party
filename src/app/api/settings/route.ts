import { NextResponse } from "next/server";
import { fetchSiteSettings } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const settings = await fetchSiteSettings();
    return NextResponse.json(
      { settings },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (error) {
    console.error("Public settings error:", error);
    return NextResponse.json({ settings: {} }, { status: 200 });
  }
}
