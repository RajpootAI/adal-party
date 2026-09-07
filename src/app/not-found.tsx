"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { Scale, Home, BookOpen, UserPlus, AlertCircle } from "lucide-react";

export default function NotFound() {
  const { language, isUrdu, t } = useI18n();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1 bg-adal-surface flex items-center justify-center py-20 px-4">
        <div className="max-w-md w-full text-center space-y-6">
          <div className="relative mx-auto h-24 w-24 rounded-full border-4 border-adal-gold-400 bg-white p-1 shadow-xl">
            <Image
              src="/logo.jpg"
              alt="Logo"
              width={96}
              height={96}
              className="h-full w-full object-contain rounded-full"
            />
          </div>

          <div className="space-y-2">
            <span className="text-4xl sm:text-6xl font-black font-mono text-adal-green-950">
              404
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-adal-green-950 font-urdu urdu-editorial">
              {isUrdu ? "صفحہ موجود نہیں ہے" : "Page Not Found"}
            </h1>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {isUrdu
                ? "آپ جس صفحے پر پہنچنے کی کوشش کر رہے ہیں وہ منتقل ہو چکا ہے یا موجود نہیں ہے۔"
                : "The requested institutional resource or document could not be located."}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-col gap-2.5">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-adal-green-900 py-3 text-xs sm:text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
            >
              <Home className="h-4 w-4" />
              <span>{isUrdu ? "صفحہ اول پر واپس جائیں" : "Return to Home"}</span>
            </Link>

            <Link
              href="/manifesto"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-adal-gold-500 bg-white py-2.5 text-xs sm:text-sm font-bold text-adal-green-950 hover:bg-gray-50 transition-colors"
            >
              <BookOpen className="h-4 w-4 text-adal-gold-600" />
              <span>{t.cta.readManifesto}</span>
            </Link>

            <Link
              href="/membership"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-adal-gold-500 py-2.5 text-xs sm:text-sm font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors"
            >
              <UserPlus className="h-4 w-4" />
              <span>{t.cta.join}</span>
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
