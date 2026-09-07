import { NextRequest, NextResponse } from "next/server";
import { recordDonation, fetchDonations } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const amount = Number(body.amount);
    if (!amount || isNaN(amount) || amount <= 0) {
      return NextResponse.json({ error: "Please provide a valid contribution amount." }, { status: 400 });
    }

    const donation = await recordDonation({
      amount,
      currency: body.currency || "PKR",
      donorName: body.isAnonymous ? "Anonymous Citizen" : body.donorName || "Supporter",
      email: body.email ? body.email.trim() : undefined,
      phone: body.phone ? body.phone.trim() : undefined,
      isAnonymous: Boolean(body.isAnonymous),
      paymentProvider: body.paymentProvider || "Configurable Gateway / Direct Bank",
      transactionReference: `TXN-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    });

    return NextResponse.json({
      success: true,
      donationReference: donation.donationReference,
      amount: donation.amount,
      currency: donation.currency,
      message: "Contribution intent registered successfully.",
    });
  } catch (error) {
    console.error("Donation API error:", error);
    return NextResponse.json({ error: "Server error occurred." }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.ADMIN_SECRET_KEY || "adal2026admin"}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const donations = await fetchDonations();
  return NextResponse.json({ donations });
}
