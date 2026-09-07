"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import {
  UserPlus,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Download,
  Printer,
  ChevronRight,
  ChevronLeft,
  Lock,
  Scale
} from "lucide-react";

export default function MembershipPage() {
  const { language, isUrdu, t } = useI18n();

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: "",
    cnic: "",
    phone: "",
    mobile: "",
    email: "",
    address: "",
    city: "",
    district: "",
    province: "Punjab",
    profession: "",
    education: "",
    membershipType: "regular" as "regular" | "youth" | "overseas",
    commitmentAccepted: false,
    signatureReference: "",
  });

  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submittedResult, setSubmittedResult] = useState<{
    applicationNumber: string;
    createdAt: string;
  } | null>(null);

  const provinces = [
    { en: "Punjab", ur: "پنجاب" },
    { en: "Sindh", ur: "سندھ" },
    { en: "Khyber Pakhtunkhwa", ur: "خیبر پختونخوا" },
    { en: "Balochistan", ur: "بلوچستان" },
    { en: "Islamabad Capital Territory", ur: "وفاقی دارالحکومت اسلام آباد" },
    { en: "Gilgit-Baltistan", ur: "گلگت بلتستان" },
    { en: "Azad Jammu & Kashmir", ur: "آزاد جموں و کشمیر" },
    { en: "Overseas Pakistani", ur: "اوورسیز پاکستانی" },
  ];

  const handleNext = () => {
    setErrorMessage("");

    if (currentStep === 1) {
      if (!formData.fullName.trim() || formData.fullName.trim().length < 3) {
        setErrorMessage(isUrdu ? "مکمل نام درج کرنا لازمی ہے (کم از کم 3 حروف)۔" : "Please enter your full name as per CNIC.");
        return;
      }
    } else if (currentStep === 2) {
      const cleanCnic = formData.cnic.replace(/[^0-9]/g, "");
      if (cleanCnic.length !== 13) {
        setErrorMessage(isUrdu ? "قومی شناختی کارڈ نمبر 13 ہندسوں پر مشتمل ہونا لازمی ہے۔" : "CNIC must be exactly 13 digits (without dashes).");
        return;
      }
    } else if (currentStep === 3) {
      if (!formData.phone.trim() || formData.phone.trim().length < 10) {
        setErrorMessage(isUrdu ? "درست فون یا موبائل نمبر درج کرنا لازمی ہے۔" : "Please enter a valid primary mobile/phone number.");
        return;
      }
      if (!formData.address.trim() || formData.address.trim().length < 5) {
        setErrorMessage(isUrdu ? "مکمل رہائشی پتہ درج کرنا لازمی ہے۔" : "Please enter your full residential address.");
        return;
      }
      if (!formData.district.trim()) {
        setErrorMessage(isUrdu ? "ضلع کا نام درج کریں۔" : "Please enter your district.");
        return;
      }
    } else if (currentStep === 4) {
      // Profession/education can be optional as per official form, but recommended
    } else if (currentStep === 5) {
      if (!formData.commitmentAccepted) {
        setErrorMessage(isUrdu ? "آگے بڑھنے کے لیے حلف نامے کا اقرار لازمی ہے۔" : "You must affirm the solemn oath to proceed.");
        return;
      }
    }

    setCurrentStep((prev) => Math.min(prev + 1, 6));
  };

  const handlePrev = () => {
    setErrorMessage("");
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    try {
      const res = await fetch("/api/membership", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Submission failed.");
      }

      setSubmittedResult({
        applicationNumber: data.applicationNumber,
        createdAt: new Date().toISOString(),
      });
    } catch (err: any) {
      setErrorMessage(err.message || "An error occurred during submission. Please check your details.");
    } finally {
      setLoading(false);
    }
  };

  const handlePrintSlip = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Title Banner */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3 shadow-sm">
              <UserPlus className="h-3.5 w-3.5" />
              <span>{isUrdu ? "باضابطہ رکنیت پورٹل" : "Official Membership System"}</span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-adal-green-950 font-urdu urdu-editorial leading-tight">
              {t.membership.title}
            </h1>

            <p className="mt-2 text-xs sm:text-sm text-gray-600">
              {t.membership.subtitle}
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-1.5 text-xs text-emerald-800">
              <Lock className="h-3.5 w-3.5 text-emerald-700" />
              <span>{t.membership.privacyNotice}</span>
            </div>
          </div>

          {/* Submission Success View */}
          {submittedResult ? (
            <div className="rounded-2xl border-2 border-adal-gold-500 bg-white p-8 sm:p-12 shadow-2xl text-center space-y-6 animate-in zoom-in-95">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                <CheckCircle2 className="h-12 w-12" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold font-urdu urdu-editorial text-adal-green-950">
                {t.membership.successTitle}
              </h2>

              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                {t.membership.successMsg}
              </p>

              {/* Official Application Reference Card */}
              <div className="rounded-xl border-2 border-dashed border-adal-gold-400 bg-adal-gold-50/50 p-6 max-w-md mx-auto">
                <span className="text-xs uppercase tracking-wider text-gray-500 font-semibold block mb-1">
                  {t.membership.appNumberLabel}
                </span>
                <div className="text-2xl sm:text-3xl font-mono font-black text-adal-green-950 tracking-wider">
                  {submittedResult.applicationNumber}
                </div>
                <div className="mt-2 text-xs text-gray-500">
                  {new Date().toLocaleDateString(language === "ur" ? "ur-PK" : "en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
                <button
                  onClick={handlePrintSlip}
                  className="inline-flex items-center gap-2 rounded-lg bg-adal-green-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
                >
                  <Printer className="h-4 w-4" />
                  <span>{t.membership.downloadConfirmation}</span>
                </button>

                <Link
                  href="/membership/status"
                  className="inline-flex items-center gap-2 rounded-lg border border-adal-green-900 px-5 py-2.5 text-xs sm:text-sm font-semibold text-adal-green-950 hover:bg-gray-50 transition-colors"
                >
                  <span>{t.cta.checkStatus}</span>
                  <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          ) : (
            /* Multi-Step Wizard Card */
            <div className="rounded-2xl border border-gray-200 bg-white shadow-institution-lg overflow-hidden">
              {/* Step Progress Indicator */}
              <div className="bg-adal-green-950 p-4 sm:p-6 text-white border-b border-adal-gold-500/30">
                <div className="flex items-center justify-between text-xs mb-3">
                  <span className="font-bold text-adal-gold-400">
                    Step {currentStep} of 6
                  </span>
                  <span className="text-gray-300">
                    {currentStep === 1 && t.membership.steps.personal}
                    {currentStep === 2 && "2. شناختی کارڈ / Identification"}
                    {currentStep === 3 && t.membership.steps.contact}
                    {currentStep === 4 && t.membership.steps.background}
                    {currentStep === 5 && t.membership.steps.oath}
                    {currentStep === 6 && t.membership.steps.review}
                  </span>
                </div>

                <div className="grid grid-cols-6 gap-1.5 sm:gap-2">
                  {[1, 2, 3, 4, 5, 6].map((st) => (
                    <div
                      key={st}
                      className={`h-2 rounded-full transition-all ${
                        st <= currentStep ? "bg-adal-gold-500" : "bg-adal-green-800/80"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Form Content Area */}
              <form onSubmit={handleSubmit} className="p-6 sm:p-10 space-y-6">
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3.5 text-xs text-red-800 animate-in fade-in">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* STEP 1: Personal Information */}
                {currentStep === 1 && (
                  <div className="space-y-5 animate-in fade-in">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-200">
                      {isUrdu ? "مرحلہ 1: ذاتی معلومات" : "Step 1: Personal Information"}
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        {t.membership.fields.fullName} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder={isUrdu ? "مثلاً: محمد احمد خان" : "e.g. Muhammad Tariq Khan"}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        {t.membership.fields.membershipType}
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        {[
                          { id: "regular", labelUr: "باقاعدہ رکنیت", labelEn: "Regular Citizen Member" },
                          { id: "youth", labelUr: "یوتھ ونگ رکنیت", labelEn: "Youth Member (Under 30)" },
                          { id: "overseas", labelUr: "اوورسیز چیپٹر", labelEn: "Overseas Pakistani" },
                        ].map((mType) => (
                          <label
                            key={mType.id}
                            className={`flex items-center gap-2.5 rounded-lg border p-3 cursor-pointer transition-all ${
                              formData.membershipType === mType.id
                                ? "border-adal-gold-500 bg-adal-gold-50/40 font-bold text-adal-green-950"
                                : "border-gray-200 hover:bg-gray-50 text-gray-700"
                            }`}
                          >
                            <input
                              type="radio"
                              name="membershipType"
                              value={mType.id}
                              checked={formData.membershipType === mType.id}
                              onChange={() => setFormData({ ...formData, membershipType: mType.id as any })}
                              className="text-adal-green-900"
                            />
                            <span className="text-xs">{isUrdu ? mType.labelUr : mType.labelEn}</span>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 2: Identification & Strict CNIC Validation */}
                {currentStep === 2 && (
                  <div className="space-y-5 animate-in fade-in">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-200">
                      {isUrdu ? "مرحلہ 2: شناختی کارڈ نمبر (لازمی)" : "Step 2: National Identification (CNIC)"}
                    </h3>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        {t.membership.fields.cnic} <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        maxLength={15}
                        value={formData.cnic}
                        onChange={(e) => setFormData({ ...formData, cnic: e.target.value })}
                        placeholder="35201-1234567-1"
                        className="w-full rounded-lg border border-gray-300 p-3 font-mono text-sm tracking-wider focus:border-adal-gold-500 focus:outline-none"
                      />
                      <p className="mt-1.5 text-[11px] text-gray-500">
                        {isUrdu
                          ? "شناختی کارڈ نمبر آفیشل ممبرشپ فارم کا لازمی تقاضا ہے۔"
                          : "Enter your 13-digit Computerized National Identity Card number."}
                      </p>
                    </div>

                    <div className="rounded-xl border border-emerald-300 bg-emerald-50/70 p-4 space-y-2">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-900">
                        <ShieldCheck className="h-4 w-4 text-emerald-700" />
                        <span>{isUrdu ? "شناختی کارڈ کے تحفظ کا آئینی اصول" : "Strict Identity Protection Protocol"}</span>
                      </div>
                      <p className="text-xs text-emerald-800 leading-relaxed">
                        {isUrdu
                          ? "آپ کا شناختی کارڈ نمبر صرف الیکشن کمیشن قواعد اور مرکزی دفتری توثیق کے لیے استعمال ہوتا ہے۔ یہ ڈیٹا کبھی پبلک لسٹ میں ظاہر نہیں ہوگا اور سسٹم میں ماسکڈ صورت میں محفوظ رہتا ہے۔"
                          : "In compliance with statutory privacy standards, your CNIC is encrypted in transit and masked across public interfaces. It is exclusively utilized for official delegate verification."}
                      </p>
                    </div>
                  </div>
                )}

                {/* STEP 3: Contact Details */}
                {currentStep === 3 && (
                  <div className="space-y-5 animate-in fade-in">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-200">
                      {isUrdu ? "مرحلہ 3: رابطے کی تفصیلات" : "Step 3: Contact Information"}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          {t.membership.fields.phone} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0300-1234567"
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          {t.membership.fields.email}
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="name@example.com"
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          {t.membership.fields.province} <span className="text-red-500">*</span>
                        </label>
                        <select
                          value={formData.province}
                          onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none bg-white"
                        >
                          {provinces.map((prov) => (
                            <option key={prov.en} value={prov.en}>
                              {isUrdu ? prov.ur : prov.en}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          {t.membership.fields.district} <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.district}
                          onChange={(e) => setFormData({ ...formData, district: e.target.value })}
                          placeholder={isUrdu ? "مثلاً: لاہور / پشاور / کوئٹہ" : "e.g. Rawalpindi / Quetta / Karachi"}
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        {t.membership.fields.address} <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        rows={3}
                        required
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder={isUrdu ? "مکمل رہائشی پتہ (مکان، گلی، علاقہ)" : "Full residential address as per official documents"}
                        className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* STEP 4: Education / Profession (پیشہ / تعلیم) */}
                {currentStep === 4 && (
                  <div className="space-y-5 animate-in fade-in">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-200">
                      {isUrdu ? "مرحلہ 4: تعلیم اور پیشہ (اختیاری)" : "Step 4: Education & Profession"}
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          {t.membership.fields.profession}
                        </label>
                        <input
                          type="text"
                          value={formData.profession}
                          onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                          placeholder={isUrdu ? "مثلاً: وکیل، انجینئر، کسان، تاجر، طالب علم" : "e.g. Legal Advocate, Engineer, Farmer, Teacher"}
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-gray-700 mb-1.5">
                          {t.membership.fields.education}
                        </label>
                        <input
                          type="text"
                          value={formData.education}
                          onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                          placeholder={isUrdu ? "مثلاً: گریجویشن، ماسٹرز، میٹرک" : "e.g. LL.B., B.S., Master's, Intermediate"}
                          className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 5: Solemn Oath (حلف نامہ) From Membership.pdf */}
                {currentStep === 5 && (
                  <div className="space-y-5 animate-in fade-in">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-200">
                      {isUrdu ? "مرحلہ 5: حلف نامہ (لازمی اقرار)" : "Step 5: The Solemn Party Oath"}
                    </h3>

                    <div className="rounded-xl border-2 border-adal-gold-500 bg-adal-green-950 p-6 sm:p-8 text-white shadow-md">
                      <div className="flex items-center gap-2 text-adal-gold-400 font-bold text-sm mb-3">
                        <Scale className="h-4 w-4" />
                        <span>{t.membership.oathTitle}</span>
                      </div>

                      <blockquote className="font-urdu text-base sm:text-xl text-adal-gold-100 leading-loose urdu-editorial border-l-2 border-adal-gold-500 pl-4 rtl:border-l-0 rtl:border-r-2 rtl:pl-0 rtl:pr-4">
                        "{t.membership.oathText}"
                      </blockquote>
                    </div>

                    <label className="flex items-start gap-3 rounded-lg border border-adal-gold-400 bg-adal-gold-50/50 p-4 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.commitmentAccepted}
                        onChange={(e) => setFormData({ ...formData, commitmentAccepted: e.target.checked })}
                        className="h-5 w-5 rounded border-gray-300 text-adal-green-900 focus:ring-adal-gold-500 mt-0.5 shrink-0"
                      />
                      <span className="text-xs sm:text-sm font-semibold text-adal-green-950 leading-relaxed">
                        {t.membership.oathAcknowledge}
                      </span>
                    </label>
                  </div>
                )}

                {/* STEP 6: Review & Final Submission */}
                {currentStep === 6 && (
                  <div className="space-y-5 animate-in fade-in">
                    <h3 className="text-lg font-bold text-adal-green-950 pb-2 border-b border-gray-200">
                      {isUrdu ? "مرحلہ 6: کوائف کی تصدیق و حتمی ترسیل" : "Step 6: Review & Final Submission"}
                    </h3>

                    <div className="rounded-xl border border-gray-200 bg-gray-50 p-5 space-y-3 text-xs">
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{t.membership.fields.fullName}:</span>
                        <span className="font-bold text-gray-900">{formData.fullName}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{t.membership.fields.cnic}:</span>
                        <span className="font-mono font-bold text-gray-900">
                          {formData.cnic.length > 5 ? `${formData.cnic.substring(0, 5)}-*******-${formData.cnic.slice(-1)}` : formData.cnic}
                        </span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{t.membership.fields.phone}:</span>
                        <span className="font-bold text-gray-900">{formData.phone}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{t.membership.fields.province}:</span>
                        <span className="font-bold text-gray-900">{formData.province} ({formData.district})</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{t.membership.fields.address}:</span>
                        <span className="text-gray-800">{formData.address}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{t.membership.fields.profession}:</span>
                        <span className="text-gray-800">{formData.profession || "Not specified"}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <span className="text-gray-500 font-medium">{isUrdu ? "حلف نامہ:" : "Oath Affirmation:"}</span>
                        <span className="text-emerald-700 font-bold">✓ {isUrdu ? "مکمل اقرار کیا گیا" : "Affirmed Voluntarily"}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Controls */}
                <div className="pt-6 border-t border-gray-200 flex items-center justify-between gap-4">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={handlePrev}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-gray-300 px-4 py-2.5 text-xs sm:text-sm font-semibold text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                      <ChevronLeft className="h-4 w-4 rtl:rotate-180" />
                      <span>{t.cta.previous}</span>
                    </button>
                  ) : (
                    <div></div>
                  )}

                  {currentStep < 6 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-adal-green-900 px-6 py-2.5 text-xs sm:text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
                    >
                      <span>{t.cta.next}</span>
                      <ChevronRight className="h-4 w-4 rtl:rotate-180" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={loading}
                      className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-adal-gold-500 to-adal-gold-600 px-8 py-3 text-sm font-bold text-adal-green-950 shadow-lg hover:from-adal-gold-400 hover:to-adal-gold-500 transition-all disabled:opacity-50"
                    >
                      {loading ? (
                        <span>{isUrdu ? "ارسال ہو رہا ہے..." : "Submitting..."}</span>
                      ) : (
                        <>
                          <FileCheck className="h-4 w-4" />
                          <span>{t.cta.submit}</span>
                        </>
                      )}
                    </button>
                  )}
                </div>
              </form>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
