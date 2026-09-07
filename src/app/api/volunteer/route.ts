import { NextRequest, NextResponse } from "next/server";
import { submitVolunteer, fetchVolunteers } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    if (!body.fullName || !body.email || !body.phone || !body.city || !body.province) {
      return NextResponse.json({ error: "Missing required volunteer fields." }, { status: 400 });
    }

    const volunteer = await submitVolunteer({
      fullName: body.fullName.trim(),
      email: body.email.trim(),
      phone: body.phone.trim(),
      city: body.city.trim(),
      district: body.district ? body.district.trim() : body.city.trim(),
      province: body.province.trim(),
      areaOfInterest: body.areaOfInterest || "General Outreach",
      availability: body.availability || "Flexible",
      message: body.message ? body.message.trim() : undefined,
    });

    return NextResponse.json({
      success: true,
      message: "Volunteer registration logged successfully.",
      volunteer,
    });
  } catch (error) {
    console.error("Volunteer API error:", error);
    return NextResponse.json({ error: "Server error occurred." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET_KEY || "adal2026admin"}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const vols = await fetchVolunteers();
  return NextResponse.json({ volunteers: vols });
}
