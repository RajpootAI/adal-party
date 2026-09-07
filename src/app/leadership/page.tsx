"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useI18n } from "@/lib/i18nContext";
import { useSiteSettings } from "@/lib/siteSettings";
import { leadershipMembers } from "@/data/partyData";
import { Users, User, ShieldAlert, Award, ChevronRight, Lock } from "lucide-react";

export default function LeadershipPage() {
  const { language, isUrdu, t } = useI18n();
  const siteSettings = useSiteSettings();
  const [tierFilter, setTierFilter] = useState<string>("all");

  const liveMembers = leadershipMembers.map((member, index) => {
    const names = [
      [siteSettings.chairmanNameEn, siteSettings.chairmanNameUr],
      [siteSettings.secretaryGeneralNameEn, siteSettings.secretaryGeneralNameUr],
      [siteSettings.viceChairmanNameEn, siteSettings.viceChairmanNameUr],
      [siteSettings.secretaryInformationNameEn, siteSettings.secretaryInformationNameUr],
      [siteSettings.punjabPresidentNameEn, siteSettings.punjabPresidentNameUr],
      [siteSettings.sindhPresidentNameEn, siteSettings.sindhPresidentNameUr],
      [siteSettings.kpPresidentNameEn, siteSettings.kpPresidentNameUr],
      [siteSettings.balochistanPresidentNameEn, siteSettings.balochistanPresidentNameUr],
    ][index];
    return { ...member, nameEn: names[0], nameUr: names[1] };
  });

  const filteredMembers = liveMembers.filter((m) => {
    if (tierFilter === "all") return true;
    return m.tier === tierFilter;
  });

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      <main className="flex-1">
        {/* Header Banner */}
        <section className="bg-gradient-to-b from-adal-green-950 via-adal-green-900 to-adal-green-950 text-white py-14 sm:py-20 border-b-4 border-adal-gold-500">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-adal-gold-400/50 bg-adal-green-900/80 px-3.5 py-1 text-xs font-bold text-adal-gold-300 mb-3">
              <Award className="h-3.5 w-3.5" />
              <span>{isUrdu ? "مرکزی و صوبائی تنظیم" : "Party Hierarchy & Leadership"}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-white font-urdu urdu-editorial leading-tight">
              {isUrdu ? "قیادت اور تنظیمی عہدیداران" : "Central & Provincial Leadership"}
            </h1>

            <p className="mt-3 text-xs sm:text-sm text-gray-300 max-w-2xl mx-auto leading-relaxed font-light">
              {isUrdu
                ? "پاکستان عدل پارٹی کی تنظیم سازی شفافیت، میرٹ اور آئین کی پابندی پر استوار ہے۔"
                : "Institutional leadership council overseeing constitutional reform, policy execution, and provincial coordination."}
            </p>
          </div>
        </section>

        {/* Verification / Placeholder Transparency Notice */}
        <section className="bg-amber-50/70 border-b border-amber-200 py-4 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto flex items-start sm:items-center gap-3 text-xs text-amber-900">
            <ShieldAlert className="h-4 w-4 text-amber-700 shrink-0 mt-0.5 sm:mt-0" />
            <p className="leading-relaxed">
              {isUrdu ? (
                <span>
                  <strong>شفافیت نوٹ:</strong> پارٹی اصولوں اور الیکشن کمیشن ضوابط کے تحت، جب تک تنظیمی عہدیداروں کے ناموں کی حتمی توثیق نہیں ہو جاتی، سرکاری پورٹل پر پلیس ہولڈرز (جیسے [چیئرمین کا نام]) استعمال کیے جا رہے ہیں۔ کوئی غیر مصدقہ نام یا من گھڑت کوائف درج نہیں کیے گئے۔
                </span>
              ) : (
                <span>
                  <strong>Institutional Transparency Notice:</strong> Per strict party compliance and ECP reporting guidelines, official office bearer profiles remain editable until formal electoral certification by the Central Executive Council.
                </span>
              )}
            </p>
          </div>
        </section>

        {/* Leadership Roster */}
        <section className="py-14 sm:py-20 bg-adal-surface">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Filter Tabs */}
            <div className="overflow-x-auto pb-1 mb-8 sm:mb-10">
              <div className="flex items-center justify-start sm:justify-center gap-2 text-xs min-w-max sm:min-w-0 mx-auto">
                {[
                  { id: "all", labelUr: "تمام عہدیداران", labelEn: "All Office Bearers" },
                  { id: "central", labelUr: "مرکزی قیادت", labelEn: "Central Leadership" },
                  { id: "provincial", labelUr: "صوبائی صدور", labelEn: "Provincial Presidents" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setTierFilter(tab.id)}
                    className={`px-4 py-2 rounded-lg font-bold transition-all flex-shrink-0 ${
                      tierFilter === tab.id
                        ? "bg-adal-green-900 text-adal-gold-300 shadow-sm"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {isUrdu ? tab.labelUr : tab.labelEn}
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredMembers.map((member) => (
                <div
                  key={member.id}
                  className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:border-adal-gold-500/60 hover:shadow-institution-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Placeholder Avatar */}
                    <div className="relative mx-auto mb-4 flex h-28 w-28 items-center justify-center rounded-full border-2 border-dashed border-adal-gold-400/80 bg-adal-green-50 text-adal-green-800">
                      <User className="h-12 w-12 text-adal-green-800/40" />
                      <span className="absolute bottom-0 right-0 rounded-full bg-adal-green-900 p-1.5 text-adal-gold-300 border border-white">
                        <Award className="h-3 w-3" />
                      </span>
                    </div>

                    <div className="text-center">
                      <div className="inline-block rounded bg-amber-50 px-2 py-0.5 text-[10px] font-mono font-semibold text-amber-800 border border-amber-200 mb-2">
                        Pending verification
                      </div>

                      <h3 className="font-mono text-base font-bold text-adal-green-950">
                        {isUrdu ? member.nameUr : member.nameEn}
                      </h3>

                      <p className="mt-1 text-xs font-bold text-adal-gold-600 uppercase tracking-wide">
                        {isUrdu ? member.designationUr : member.designationEn}
                      </p>

                      <p className="mt-3 text-xs text-gray-600 leading-relaxed">
                        {isUrdu ? member.bioUr : member.bioEn}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-3 border-t border-gray-100 text-center">
                    <span className="text-[11px] font-mono text-gray-400">
                      {member.tier.toUpperCase()} UNIT
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Institutional Organization CTA */}
            <div className="mt-16 text-center">
              <Link
                href="/organization"
                className="inline-flex items-center gap-2 rounded-lg bg-adal-green-900 px-6 py-3 text-xs sm:text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
              >
                <span>{isUrdu ? "مکمل تنظیمی ڈھانچہ دیکھیں" : "Explore Organizational Hierarchy"}</span>
                <ChevronRight className="h-4 w-4 rtl:rotate-180" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
