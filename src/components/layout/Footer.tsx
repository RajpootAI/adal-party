"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18nContext";
import { defaultSiteSettings } from "@/data/partyData";
import { LanguageSwitcher } from "./LanguageSwitcher";
import {
  Scale,
  Mail,
  Phone,
  MapPin,
  FileText,
  Shield,
  ExternalLink,
  ChevronRight,
  Heart
} from "lucide-react";

export function Footer() {
  const { language, isUrdu, t } = useI18n();

  return (
    <footer className="bg-adal-green-950 text-gray-300 border-t-2 border-adal-gold-500/40 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px] opacity-5 pointer-events-none"></div>

      {/* Main 4-Column Institutional Grid */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-16 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Col 1: Party Emblem & Identity */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full border border-adal-gold-400 bg-white p-0.5 overflow-hidden shrink-0">
                <Image
                  src="/logo.jpg"
                  alt="Pakistan Adal Party Logo"
                  width={48}
                  height={48}
                  className="h-full w-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-urdu text-xl font-black text-white leading-tight">
                  پاکستان عدل پارٹی
                </h3>
                <p className="text-xs font-semibold text-adal-gold-400 uppercase tracking-wider">
                  Pakistan Adal Party
                </p>
              </div>
            </div>

            <p className="text-xs leading-relaxed text-gray-400 font-urdu urdu-editorial">
              "امن، انصاف، ترقی اور مساوات سب کے لیے" — ریاست کسی خاندان، جماعت یا طبقے کی جاگیر نہیں، پاکستان کے ہر شہری کی امانت ہے۔
            </p>

            <div className="pt-2 text-[11px] text-adal-gold-300/80 space-y-1 border-t border-adal-green-900">
              <p>
                <span className="font-semibold">{isUrdu ? "الیکشن کمیشن رجسٹریشن:" : "ECP Registration:"}</span>{" "}
                {defaultSiteSettings.electionCommissionRegNo}
              </p>
              <p>
                <span className="font-semibold">{isUrdu ? "قومی منشور:" : "Manifesto:"}</span> 2026–2036
              </p>
            </div>
          </div>

          {/* Col 2: Platform Navigation */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-adal-gold-400 border-b border-adal-green-900 pb-2.5">
              {t.footer.quickLinks}
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.home}</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.about}</span>
                </Link>
              </li>
              <li>
                <Link href="/vision-mission" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.vision}</span>
                </Link>
              </li>
              <li>
                <Link href="/manifesto" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.manifesto}</span>
                </Link>
              </li>
              <li>
                <Link href="/leadership" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.leadership}</span>
                </Link>
              </li>
              <li>
                <Link href="/organization" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.organization}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Civic & Political Resources */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-adal-gold-400 border-b border-adal-green-900 pb-2.5">
              {t.footer.officialResources}
            </h4>
            <ul className="mt-4 space-y-2 text-xs">
              <li>
                <Link href="/membership" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5 font-medium text-white">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.cta.join}</span>
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.volunteer}</span>
                </Link>
              </li>
              <li>
                <Link href="/donate" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.donate}</span>
                </Link>
              </li>
              <li>
                <Link href="/news" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.news}</span>
                </Link>
              </li>
              <li>
                <Link href="/press" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.press}</span>
                </Link>
              </li>
              <li>
                <Link href="/downloads" className="hover:text-adal-gold-300 transition-colors flex items-center gap-1.5">
                  <ChevronRight className="h-3 w-3 text-adal-gold-500 rtl:rotate-180" />
                  <span>{t.nav.downloads}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Central Secretariat Contact (Placeholders) */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-adal-gold-400 border-b border-adal-green-900 pb-2.5">
              {t.footer.contactInfo}
            </h4>
            <div className="mt-4 space-y-3 text-xs text-gray-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-adal-gold-400 shrink-0 mt-0.5" />
                <p className="leading-relaxed">
                  {isUrdu ? defaultSiteSettings.officeAddressUr : defaultSiteSettings.officeAddressEn}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 text-adal-gold-400 shrink-0" />
                <span className="font-mono text-gray-400">{defaultSiteSettings.officialEmail}</span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 text-adal-gold-400 shrink-0" />
                <span className="font-mono text-gray-400">{defaultSiteSettings.officialPhone}</span>
              </div>

              <div className="pt-3 border-t border-adal-green-900">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1 rounded bg-adal-green-900 px-3 py-1.5 text-xs text-adal-gold-300 hover:bg-adal-green-800 transition-colors"
                >
                  <span>{isUrdu ? "مرکزی دفتر سے رابطہ فارم" : "Contact Secretariat"}</span>
                  <ChevronRight className="h-3 w-3 rtl:rotate-180" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Legal and Copyright Bar */}
        <div className="mt-12 pt-8 border-t border-adal-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <p>© 2026 {isUrdu ? "پاکستان عدل پارٹی۔ جملہ حقوق محفوظ ہیں۔" : "Pakistan Adal Party. All Rights Reserved."}</p>

          <div className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="hover:text-adal-gold-300 transition-colors">
              {t.footer.privacy}
            </Link>
            <span>•</span>
            <Link href="/terms" className="hover:text-adal-gold-300 transition-colors">
              {t.footer.terms}
            </Link>
            <span>•</span>
            <Link href="/downloads/manshoor-pakistan-adal-party-2026.pdf" target="_blank" className="hover:text-adal-gold-300 transition-colors">
              {isUrdu ? "سرکاری منشور (پی ڈی ایف)" : "Official Manifesto (PDF)"}
            </Link>
            <span>•</span>
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
