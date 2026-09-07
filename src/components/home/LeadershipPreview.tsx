"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "@/lib/i18nContext";
import { leadershipMembers } from "@/data/partyData";
import { Users, User, ChevronRight, ShieldAlert } from "lucide-react";

export function LeadershipPreview() {
  const { language, isUrdu, t } = useI18n();

  return (
    <section className="py-16 sm:py-24 bg-gray-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-adal-green-900 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
            <Users className="h-3.5 w-3.5" />
            <span>{t.nav.leadership}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-adal-green-950 tracking-tight">
            {isUrdu ? "مرکزی و صوبائی قیادت" : "Party Leadership & Institutional Governance"}
          </h2>

          <p className="mt-3 text-sm sm:text-base text-gray-600">
            {isUrdu
              ? "پارٹی کی مرکزی تنظیم اور صوبائی شاخیں نظریاتی، دیانت دار اور باصلاحیت ارکان پر مشتمل ہوں گی۔"
              : "Institutional council responsible for executing policy commitments across national and provincial chapters."}
          </p>
        </div>

        {/* Structured Placeholders Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {leadershipMembers.slice(0, 4).map((leader) => (
            <div
              key={leader.id}
              className="rounded-xl border border-gray-200 bg-white p-6 text-center shadow-sm hover:border-adal-gold-500/50 hover:shadow-md transition-all"
            >
              {/* Photo Placeholder */}
              <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-adal-gold-400/80 bg-adal-green-50 text-adal-green-800">
                <User className="h-10 w-10 text-adal-green-700/60" />
              </div>

              {/* Verified Placeholder Label */}
              <div className="inline-block rounded bg-amber-50 px-2 py-0.5 text-[10px] font-mono font-semibold text-amber-800 border border-amber-200 mb-2">
                [PLACEHOLDER]
              </div>

              <h3 className="font-mono text-base font-bold text-adal-green-950">
                {isUrdu ? leader.nameUr : leader.nameEn}
              </h3>

              <p className="mt-1 text-xs font-semibold text-adal-gold-600">
                {isUrdu ? leader.designationUr : leader.designationEn}
              </p>

              <p className="mt-3 text-xs text-gray-500 leading-relaxed line-clamp-3">
                {isUrdu ? leader.bioUr : leader.bioEn}
              </p>
            </div>
          ))}
        </div>

        {/* View All Leadership Link */}
        <div className="mt-10 text-center">
          <Link
            href="/leadership"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-adal-green-900 hover:text-adal-gold-600 transition-colors"
          >
            <span>{isUrdu ? "تمام تنظیمی عہدیداران دیکھیں" : "View Complete Leadership Directory"}</span>
            <ChevronRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
