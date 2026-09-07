import { NextRequest, NextResponse } from "next/server";
import { submitMembershipApplication, fetchMembershipApplications, fetchMembershipByNumber, updateApplicationStatus } from "@/lib/db";
import { isAdminRequest } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Validation matching Membership.pdf requirements
    if (!body.fullName || typeof body.fullName !== "string" || body.fullName.trim().length < 3) {
      return NextResponse.json({ error: "Full Name is required (minimum 3 characters)." }, { status: 400 });
    }

    if (!body.cnic || typeof body.cnic !== "string") {
      return NextResponse.json({ error: "CNIC is mandatory as per official party form." }, { status: 400 });
    }

    const cleanCnic = body.cnic.replace(/[^0-9]/g, "");
    if (cleanCnic.length !== 13) {
      return NextResponse.json({ error: "CNIC must be exactly 13 digits." }, { status: 400 });
    }

    if (!body.phone || typeof body.phone !== "string" || body.phone.trim().length < 10) {
      return NextResponse.json({ error: "Valid phone number is mandatory." }, { status: 400 });
    }

    if (!body.address || typeof body.address !== "string" || body.address.trim().length < 5) {
      return NextResponse.json({ error: "Complete residential address is required." }, { status: 400 });
    }

    if (!body.commitmentAccepted) {
      return NextResponse.json({ error: "The solemn party oath (حلف نامہ) must be accepted." }, { status: 400 });
    }

    const application = await submitMembershipApplication({
      fullName: body.fullName.trim(),
      cnic: cleanCnic,
      phone: body.phone.trim(),
      mobile: body.mobile ? body.mobile.trim() : undefined,
      email: body.email ? body.email.trim() : undefined,
      address: body.address.trim(),
      city: body.city ? body.city.trim() : "Not Specified",
      district: body.district ? body.district.trim() : "Not Specified",
      province: body.province ? body.province.trim() : "Not Specified",
      profession: body.profession ? body.profession.trim() : undefined,
      education: body.education ? body.education.trim() : undefined,
      membershipType: body.membershipType || "regular",
      commitmentAccepted: true,
      signatureReference: body.signatureReference || `Signed electronically by ${body.fullName.trim()}`,
      adminNotes: "Received via official portal.",
    });

    return NextResponse.json({
      success: true,
      applicationNumber: application.applicationNumber,
      message: "Your membership application has been received.",
      application: {
        id: application.id,
        applicationNumber: application.applicationNumber,
        fullName: application.fullName,
        createdAt: application.createdAt,
        status: application.status,
      },
    });
  } catch (error) {
    console.error("Membership submission error:", error);
    return NextResponse.json({ error: "Internal server error occurred. Please try again." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const appNumber = searchParams.get("appNumber");

  if (appNumber) {
    const app = await fetchMembershipByNumber(appNumber);
    if (!app) {
      return NextResponse.json({ found: false, error: "Application number not found." }, { status: 404 });
    }

    // Never expose full CNIC or phone publicly; return masked public summary
    return NextResponse.json({
      found: true,
      applicationNumber: app.applicationNumber,
      fullName: app.fullName,
      status: app.status,
      createdAt: app.createdAt,
      province: app.province,
      district: app.district,
    });
  }

  // Admin list query is protected
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apps = await fetchMembershipApplications();
  return NextResponse.json({ applications: apps });
}

export async function PATCH(req: NextRequest) {
  if (!(await isAdminRequest(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const body = await req.json();
  if (!body.id || !body.status) {
    return NextResponse.json({ error: "Application id and status are required." }, { status: 400 });
  }

  await updateApplicationStatus(body.id, body.status, body.notes);
  return NextResponse.json({ success: true });
}
