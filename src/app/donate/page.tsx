"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useSiteSettings } from "@/lib/siteSettings";
import { useI18n } from "@/lib/i18nContext";
import {
  Heart,
  ShieldCheck,
  CheckCircle2,
  Building,
  CreditCard,
  Copy,
  Printer,
  ChevronRight
} from "lucide-react";

export default function DonatePage() {
  const siteSettings = useSiteSettings();
  const { language, isUrdu, t } = useI18n();

  const presetAmounts = [2500, 5000, 10000, 25000, 50000, 100000];
  const [selectedAmount, setSelectedAmount] = useState<number>(10000);
  const [customAmount, setCustomAmount] = useState<string>("");
  const [donorName, setDonorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [frequency, setFrequency] = useState<"one-time" | "monthly">("one-time");
  const [loading, setLoading] = useState(false);
  const [confirmedDonation, setConfirmedDonation] = useState<{
    reference: string;
    amount: number;
  } | null>(null);

  const effectiveAmount = customAmount ? Number(customAmount) : selectedAmount;

  const handleDonateSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!effectiveAmount || effectiveAmount <= 0) return;

    setLoading(true);
    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: effectiveAmount,
          currency: "PKR",
          donorName,
          email,
          phone,
          isAnonymous,
          frequency,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        setConfirmedDonation({
          reference: data.donationReference,
          amount: effectiveAmount,
        });
      }
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3 shadow-sm">
              <Heart className="h-3.5 w-3.5" />
              <span>{isUrdu ? "شفاف عوامی تعاون" : "Institutional Civic Support"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-adal-green-950 font-urdu urdu-editorial leading-tight">
              {t.donate.title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {t.donate.subtitle}
            </p>
          </div>

          {confirmedDonation ? (
            <div className="rounded-2xl border-2 border-adal-gold-500 bg-white p-8 sm:p-12 shadow-2xl text-center space-y-6 animate-in fade-in">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-10 w-10" />
              </div>

              <h2 className="text-2xl font-bold font-urdu urdu-editorial text-adal-green-950">
                {isUrdu ? "مالی تعاون کی درخواست موصول ہو گئی" : "Contribution Registration Received"}
              </h2>

              <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                {isUrdu
                  ? "پاکستان عدل پارٹی کی قانونی اور آئینی اصلاحات کی تحریک کی معاونت کا شکریہ۔"
                  : "Thank you for contributing to constitutional rule of law and judicial reform."}
              </p>

              <div className="rounded-xl border-2 border-dashed border-adal-gold-400 bg-adal-gold-50/50 p-6 max-w-md mx-auto text-center">
                <span className="text-xs text-gray-500 font-semibold uppercase block mb-1">
                  Donation Reference Code
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-black text-adal-green-950">
                  {confirmedDonation.reference}
                </div>
                <div className="mt-2 text-base font-bold text-adal-gold-700">
                  PKR {confirmedDonation.amount.toLocaleString()}
                </div>
              </div>

              {/* Official Party Bank Account Placeholders */}
              <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 max-w-lg mx-auto text-left rtl:text-right space-y-3 text-xs">
                <h4 className="font-bold text-adal-green-950 text-sm pb-2 border-b border-gray-200 flex items-center gap-2">
                  <Building className="h-4 w-4 text-adal-gold-600" />
                  <span>{isUrdu ? "براہِ راست بینک اکاؤنٹ تفصیلات" : "Designated Central Bank Account Details"}</span>
                </h4>
                <div className="flex justify-between">
                  <span className="text-gray-500">{isUrdu ? "اکاؤنٹ ٹائٹل:" : "Account Title:"}</span>
                  <span className="font-bold text-gray-900">PAKISTAN ADAL PARTY</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">{isUrdu ? "بینک کا نام:" : "Bank Name:"}</span>
                  <span className="font-mono font-bold text-gray-900">{siteSettings.bankName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">IBAN:</span>
                  <span className="font-mono font-bold text-gray-900">{siteSettings.bankAccount}</span>
                </div>
              </div>

              <div className="pt-4 flex justify-center">
                <button
                  onClick={() => setConfirmedDonation(null)}
                  className="rounded-lg bg-adal-green-900 px-6 py-2.5 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800"
                >
                  {isUrdu ? "نیا تعاون کریں" : "Make Another Contribution"}
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-institution-lg space-y-8">
              {/* Frequency Toggle */}
              <div className="flex rounded-lg bg-gray-100 p-1 max-w-xs mx-auto text-xs font-bold">
                <button
                  type="button"
                  onClick={() => setFrequency("one-time")}
                  className={`w-1/2 py-2 rounded-md transition-all ${
                    frequency === "one-time" ? "bg-adal-green-900 text-adal-gold-300 shadow" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t.donate.frequencyOneTime}
                </button>
                <button
                  type="button"
                  onClick={() => setFrequency("monthly")}
                  className={`w-1/2 py-2 rounded-md transition-all ${
                    frequency === "monthly" ? "bg-adal-green-900 text-adal-gold-300 shadow" : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {t.donate.frequencyMonthly}
                </button>
              </div>

              {/* Amount Selection */}
              <div>
                <label className="block text-xs font-bold text-gray-700 mb-3">
                  {t.donate.amountLabel}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {presetAmounts.map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => {
                        setSelectedAmount(amt);
                        setCustomAmount("");
                      }}
                      className={`py-3 px-4 rounded-xl border text-sm font-bold transition-all ${
                        selectedAmount === amt && !customAmount
                          ? "border-adal-gold-500 bg-adal-gold-50/50 text-adal-green-950 ring-2 ring-adal-gold-500/30"
                          : "border-gray-200 text-gray-700 hover:bg-gray-50"
                      }`}
                    >
                      PKR {amt.toLocaleString()}
                    </button>
                  ))}
                </div>

                <div className="mt-4">
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    {t.donate.customLabel}
                  </label>
                  <input
                    type="number"
                    min="500"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder={isUrdu ? "رقم درج کریں (مثلاً: 15000)" : "Enter custom amount in PKR"}
                    className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Donor Details */}
              <form onSubmit={handleDonateSubmit} className="space-y-4 pt-4 border-t border-gray-100">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "نام (اختیاری اگر خفیہ ہو)" : "Name"}
                    </label>
                    <input
                      type="text"
                      disabled={isAnonymous}
                      value={donorName}
                      onChange={(e) => setDonorName(e.target.value)}
                      placeholder={isUrdu ? "آپ کا نام" : "Full Name"}
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none disabled:bg-gray-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "ای میل (برائے رسید)" : "Email Address"}
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="name@example.com"
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "فون نمبر" : "Phone Number"}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="0300-1234567"
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <label className="flex items-center gap-2 cursor-pointer pt-1">
                  <input
                    type="checkbox"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="h-4 w-4 rounded text-adal-green-900 focus:ring-adal-gold-500"
                  />
                  <span className="text-xs text-gray-700 font-medium">
                    {t.donate.anonymousLabel}
                  </span>
                </label>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={loading || !effectiveAmount}
                    className="w-full rounded-xl bg-gradient-to-r from-adal-gold-500 to-adal-gold-600 py-3.5 text-sm font-bold text-adal-green-950 shadow-lg hover:from-adal-gold-400 hover:to-adal-gold-500 transition-all disabled:opacity-50"
                  >
                    {loading
                      ? (isUrdu ? "پراسیسنگ جاری ہے..." : "Processing...")
                      : `${isUrdu ? "تعاون کی توثیق کریں" : "Proceed with Contribution of"} PKR ${effectiveAmount ? effectiveAmount.toLocaleString() : 0}`}
                  </button>
                </div>
              </form>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500">
                <ShieldCheck className="h-4 w-4 text-adal-gold-600" />
                <span>{t.donate.methodNotice}</span>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
