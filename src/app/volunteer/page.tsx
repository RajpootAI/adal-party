"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { HeartHandshake, CheckCircle2, AlertCircle, ShieldCheck, ChevronRight } from "lucide-react";

export default function VolunteerPage() {
  const { language, isUrdu, t } = useI18n();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    city: "",
    district: "",
    province: "Punjab",
    areaOfInterest: "Legal Research & Drafting",
    availability: "Weekends",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const areas = [
    { en: "Legal Research & Drafting", ur: "قانونی تحقیق و مسودہ سازی" },
    { en: "Policy & Economic Analysis", ur: "پالیسی و معاشی تجزیہ" },
    { en: "Grassroots Field Mobilization", ur: "عوامی رابطہ و فیلڈ مہمات" },
    { en: "Digital Media & IT", ur: "ڈیجیٹل میڈیا اور آئی ٹی" },
    { en: "Community Healthcare & Aid", ur: "بنیادی صحت اور کمیونٹی سروس" },
    { en: "Urdu Content & Translation", ur: "اردو مواد و ترجمہ کاری" },
  ];

  const availabilities = [
    { en: "Weekends (4-8 hours/week)", ur: "ہفتہ وار تعطیلات (4 تا 8 گھنٹے)" },
    { en: "Part-Time Evenings", ur: "شام کے اوقات (پارٹ ٹائم)" },
    { en: "Full-Time Campaign Support", ur: "ہمہ وقتی مہم معاونت" },
    { en: "On-Call Project Basis", ur: "پروجیکٹ کی بنیاد پر" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/volunteer", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to submit.");

      setSuccess(true);
    } catch (err: any) {
      setErrorMsg(err.message || "An error occurred.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3 shadow-sm">
              <HeartHandshake className="h-3.5 w-3.5" />
              <span>{isUrdu ? "قومی رضاکارانہ تحریک" : "Volunteer Network"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-adal-green-950 font-urdu urdu-editorial leading-tight">
              {t.volunteer.title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {t.volunteer.subtitle}
            </p>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-institution-lg">
            {success ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                  <CheckCircle2 className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-bold text-adal-green-950 font-urdu urdu-editorial">
                  {t.volunteer.successTitle}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                  {t.volunteer.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {errorMsg && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-800">
                    <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
                    <span>{errorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "مکمل نام" : "Full Name"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder={isUrdu ? "آپ کا نام" : "Your Name"}
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "ای میل پتہ" : "Email Address"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@example.com"
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "موبائل فون نمبر" : "Mobile Phone"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="0300-1234567"
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "شہر" : "City"} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder={isUrdu ? "شہر کا نام" : "City"}
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {isUrdu ? "صوبہ" : "Province"}
                    </label>
                    <select
                      value={formData.province}
                      onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none bg-white"
                    >
                      {["Punjab", "Sindh", "Khyber Pakhtunkhwa", "Balochistan", "Islamabad", "Gilgit-Baltistan", "Azad Kashmir", "Overseas"].map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {t.volunteer.areaLabel}
                    </label>
                    <select
                      value={formData.areaOfInterest}
                      onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none bg-white"
                    >
                      {areas.map((a) => (
                        <option key={a.en} value={a.en}>
                          {isUrdu ? a.ur : a.en}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1">
                      {t.volunteer.availLabel}
                    </label>
                    <select
                      value={formData.availability}
                      onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none bg-white"
                    >
                      {availabilities.map((av) => (
                        <option key={av.en} value={av.en}>
                          {isUrdu ? av.ur : av.en}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-gray-700 mb-1">
                    {isUrdu ? "اضافی پیغام / تجربہ (اختیاری)" : "Brief Note on Experience / Message"}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={isUrdu ? "آپ کس طرح معاونت کرنا چاہتے ہیں..." : "How would you like to contribute..."}
                    className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-lg bg-adal-green-900 py-3 text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow disabled:opacity-50"
                >
                  {loading ? (isUrdu ? "ارسال ہو رہا ہے..." : "Submitting...") : isUrdu ? "رضاکارانہ اندراج کروائیں" : "Register as Volunteer"}
                </button>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
