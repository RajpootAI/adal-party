"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import { UserPlus, FileCheck, ShieldCheck, Download, ChevronRight } from "lucide-react";

export function MembershipCTA() {
  const { language, isUrdu, t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-adal-green-950 via-adal-green-900 to-adal-green-950 border-2 border-adal-gold-400 p-8 sm:p-14 text-white shadow-2xl relative overflow-hidden">
          {/* Background Motif */}
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full border-8 border-adal-gold-500/10 pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-adal-gold-500/20 px-3.5 py-1 text-xs font-bold text-adal-gold-300 border border-adal-gold-400/40">
                <UserPlus className="h-3.5 w-3.5" />
                <span>{isUrdu ? "نظریاتی رکنیت سازی" : "Ideological Party Membership"}</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
                {isUrdu ? "پاکستان عدل پارٹی کی باضابطہ رکنیت حاصل کریں" : "Join the Movement for Rule of Law & National Transformation"}
              </h2>

              <p className="text-sm sm:text-base text-gray-200 leading-relaxed max-w-2xl">
                {isUrdu
                  ? "ہم کسی موروثی جاگیر یا کارٹل کے ملازم نہیں بلکہ آئین پاکستان، عدل اور قومی خوشحالی کے نظریاتی سپاہی ہیں۔ باضابطہ ممبر شپ فارم آن لائن پر کریں اور اپنا سرکاری ٹریکنگ نمبر حاصل کریں۔"
                  : "We reject dynastic politics and elite privilege. Join thousands of patriotic citizens dedicated to constitutional justice, the Case Calendar judicial system, and a sovereign production economy."}
              </p>

              {/* Solemn Oath Quote Box (From Membership.pdf) */}
              <div className="rounded-xl bg-white/5 border border-adal-gold-500/30 p-4 sm:p-5 mt-4">
                <div className="text-xs font-bold uppercase tracking-wider text-adal-gold-400 mb-1">
                  {isUrdu ? "حلف نامہ (عہد نامہ)" : "Solemn Member Oath"}
                </div>
                <p className="font-urdu text-sm sm:text-base text-adal-gold-100 leading-loose urdu-editorial">
                  "میں حلفاً اقرار کرتا/کرتی ہوں کہ میں نے 'پاکستان عدل پارٹی' کا منشور پڑھ اور سمجھ لیا ہے۔ میں پارٹی کے قواعد و ضوابط کی پابندی کروں گا/گی اور پاکستان کی ترقی، عدل اور خوشحالی کے لیے پارٹی کے ساتھ مل کر نظریاتی کارکن کی حیثیت سے کام کروں گا/گی۔"
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3.5">
              <Link
                href="/membership"
                className="w-full text-center rounded-xl bg-gradient-to-r from-adal-gold-400 via-adal-gold-500 to-adal-gold-600 px-6 py-4 text-base font-bold text-adal-green-950 shadow-xl hover:from-adal-gold-300 hover:to-adal-gold-500 transition-all transform hover:-translate-y-0.5"
              >
                {t.cta.join}
              </Link>

              <Link
                href="/membership/status"
                className="w-full text-center rounded-xl border border-adal-gold-400/60 bg-adal-green-900/60 px-6 py-3 text-xs sm:text-sm font-semibold text-adal-gold-300 hover:bg-adal-gold-500/20 transition-colors"
              >
                {t.cta.checkStatus}
              </Link>

              <a
                href="/downloads/Membership.pdf"
                download
                className="w-full text-center inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 px-6 py-2.5 text-xs text-gray-300 hover:bg-white/20 transition-colors"
              >
                <Download className="h-3.5 w-3.5 text-adal-gold-400" />
                <span>{t.cta.downloadMembership}</span>
              </a>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-400 mt-1">
                <ShieldCheck className="h-3.5 w-3.5 text-adal-gold-400" />
                <span>{isUrdu ? "شناختی کارڈ نمبر مکمل محفوظ رہتا ہے" : "Strict CNIC Privacy & Encryption"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
