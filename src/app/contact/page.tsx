"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { defaultSiteSettings } from "@/data/partyData";
import { Mail, Phone, MapPin, CheckCircle2, AlertCircle, MessageSquare, Send, Globe } from "lucide-react";

export default function ContactPage() {
  const { language, isUrdu, t } = useI18n();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send message.");

      setSuccess(true);
      setFormData({ fullName: "", email: "", phone: "", subject: "", message: "" });
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
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3 shadow-sm">
              <Mail className="h-3.5 w-3.5" />
              <span>{isUrdu ? "مرکزی سیکرٹریٹ" : "Central Secretariat"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-adal-green-950 font-urdu urdu-editorial leading-tight">
              {isUrdu ? "مرکزی دفتر سے رابطہ اور قانونی تجاویز" : "Official Contact & Inquiries"}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-600 max-w-xl mx-auto">
              {isUrdu
                ? "پارٹی منشور، قانونی سفارشات، میڈیا انکوائریز اور عوامی تجاویز کے لیے باضابطہ رابطہ کریں۔"
                : "Submit policy research, institutional communications, or regional inquiries directly to the party secretariat."}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Information & Official Placeholders (5 Cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 shadow-sm space-y-6">
                <h3 className="font-urdu text-xl font-bold text-adal-green-950 urdu-editorial pb-3 border-b border-gray-100">
                  {isUrdu ? "مرکزی سیکرٹریٹ اسلام آباد" : "Central Party Secretariat"}
                </h3>

                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-adal-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase block mb-0.5">
                        {isUrdu ? "دفتر کا پتہ" : "Office Address"}
                      </span>
                      <p className="text-gray-800 leading-relaxed font-mono">
                        {isUrdu ? defaultSiteSettings.officeAddressUr : defaultSiteSettings.officeAddressEn}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="h-5 w-5 text-adal-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase block mb-0.5">
                        {isUrdu ? "سرکاری ای میل" : "Official Email"}
                      </span>
                      <p className="text-gray-800 font-mono">{defaultSiteSettings.officialEmail}</p>
                      <p className="text-gray-500 font-mono text-xs">{defaultSiteSettings.membershipEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-adal-gold-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-gray-500 uppercase block mb-0.5">
                        {isUrdu ? "فون و واٹس ایپ" : "Phone & WhatsApp"}
                      </span>
                      <p className="text-gray-800 font-mono">{defaultSiteSettings.officialPhone}</p>
                      <p className="text-gray-500 font-mono text-xs">{defaultSiteSettings.whatsappNumber}</p>
                    </div>
                  </div>
                </div>

                {/* Social Channels (Structured Placeholders) */}
                <div className="pt-4 border-t border-gray-100 space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase block">
                    {isUrdu ? "سوشل میڈیا چینلز" : "Official Social Media"}
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs font-mono text-gray-500">
                    <span className="rounded bg-gray-100 px-2.5 py-1">[X / TWITTER]</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1">[FACEBOOK]</span>
                    <span className="rounded bg-gray-100 px-2.5 py-1">[YOUTUBE]</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiries Form (7 Cols) */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-10 shadow-institution-lg">
                {success ? (
                  <div className="py-12 text-center space-y-4 animate-in fade-in">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-adal-green-950 font-urdu urdu-editorial">
                      {isUrdu ? "آپ کا پیغام موصول ہو گیا ہے" : "Message Successfully Dispatched"}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 max-w-md mx-auto">
                      {isUrdu
                        ? "مرکزی سیکرٹریٹ کا متعلقہ شعبہ جلد آپ کے فراہم کردہ ای میل پر رابطہ کرے گا۔"
                        : "Our secretariat will review your inquiry and connect via official correspondence."}
                    </p>
                    <button
                      onClick={() => setSuccess(false)}
                      className="mt-4 rounded-lg bg-adal-green-900 px-6 py-2.5 text-xs font-bold text-adal-gold-300"
                    >
                      {isUrdu ? "ایک اور پیغام ارسال کریں" : "Send Another Message"}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-100">
                      {isUrdu ? "پیغام ارسال فارم" : "Direct Message to Secretariat"}
                    </h3>

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

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          {isUrdu ? "فون نمبر (اختیاری)" : "Phone Number (Optional)"}
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0300-1234567"
                          className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1">
                          {isUrdu ? "موضوع" : "Subject"} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          placeholder={isUrdu ? "موضوع درج کریں" : "Inquiry Subject"}
                          className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">
                        {isUrdu ? "پیغام / تجاویز" : "Message / Proposal"} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={5}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={isUrdu ? "اپنا تفصیلی پیغام یا پالیسی فیڈ بیک یہاں لکھیں..." : "Detailed message or policy proposal..."}
                        className="w-full rounded-lg border border-gray-300 p-3 text-xs focus:border-adal-gold-500 focus:outline-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-adal-green-900 py-3.5 text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow disabled:opacity-50"
                    >
                      <Send className="h-4 w-4" />
                      <span>{loading ? (isUrdu ? "ارسال ہو رہا ہے..." : "Sending...") : isUrdu ? "پیغام ارسال کریں" : "Submit Message"}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
