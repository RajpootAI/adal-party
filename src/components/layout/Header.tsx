"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18nContext";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { SearchModal } from "../ui/SearchModal";
import { useSiteSettings } from "@/lib/siteSettings";
import {
  Menu,
  X,
  Search,
  Download,
  ChevronDown,
  UserPlus,
  BookOpen,
  Lock
} from "lucide-react";

export function Header() {
  const { language, isUrdu, t } = useI18n();
  const siteSettings = useSiteSettings();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/vision-mission", label: t.nav.vision },
    { href: "/manifesto", label: t.nav.manifesto },
    { href: "/leadership", label: t.nav.leadership },
    { href: "/organization", label: t.nav.organization },
    { href: "/news", label: t.nav.news },
    { href: "/events", label: t.nav.events },
    { href: "/media", label: t.nav.media },
    { href: "/press", label: t.nav.press },
    { href: "/volunteer", label: t.nav.volunteer },
    { href: "/donate", label: t.nav.donate },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      {/* Top Utility Bar — hidden on xs, visible sm+ */}
      <div className="hidden sm:block bg-adal-green-950 text-gray-300 text-xs border-b border-adal-gold-500/20 py-1.5 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 min-w-0 overflow-hidden">
            <span className="inline-block h-2 w-2 rounded-full bg-adal-gold-400 animate-pulse flex-shrink-0"></span>
            <span className="font-medium tracking-wide text-adal-gold-300 truncate">
              {isUrdu ? `${siteSettings.partyNameUr} — قومی منشور 2026` : `${siteSettings.partyNameEn} — National Manifesto 2026`}
            </span>
            <span className="hidden md:inline text-gray-400 flex-shrink-0">|</span>
            <span className="hidden md:inline text-gray-300 italic truncate">
              {isUrdu ? siteSettings.taglineUr : siteSettings.taglineEn}
            </span>
          </div>

          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 text-gray-300 hover:text-adal-gold-400 transition-colors"
              aria-label={t.nav.search}
            >
              <Search className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">{t.nav.search}</span>
            </button>

            <Link
              href="/downloads"
              className="flex items-center gap-1 text-gray-300 hover:text-adal-gold-400 transition-colors"
            >
              <Download className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">{t.nav.downloads}</span>
            </Link>

            <Link
              href="/admin"
              className="flex items-center gap-1 text-gray-400 hover:text-adal-gold-400 transition-colors"
              title="Staff Administration Console"
            >
              <Lock className="h-3 w-3" />
              <span className="hidden lg:inline">{t.nav.admin}</span>
            </Link>

            <LanguageSwitcher />
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="sticky top-0 z-40 bg-adal-green-900/95 backdrop-blur-md text-white border-b border-adal-gold-500/30 shadow-institution">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
            {/* Official Party Crest and Title */}
            <Link href="/" className="flex items-center gap-2 sm:gap-3.5 group flex-shrink-0 min-w-0">
              <div className="relative h-10 w-10 sm:h-14 sm:w-14 flex-shrink-0 overflow-hidden rounded-full border-2 border-adal-gold-400 shadow-md bg-white p-0.5 group-hover:scale-105 transition-transform">
                <Image
                  src="/logo.jpg"
                  alt="Pakistan Adal Party Official Emblem"
                  width={56}
                  height={56}
                  className="h-full w-full object-contain"
                  priority
                />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-base sm:text-xl lg:text-2xl font-black tracking-tight text-white font-urdu urdu-editorial leading-tight truncate">
                  {siteSettings.partyNameUr}
                </span>
                <span className="text-[10px] sm:text-xs font-semibold tracking-wider text-adal-gold-400 uppercase truncate">
                  {siteSettings.partyNameEn}
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 text-xs font-medium text-gray-100 flex-1 justify-center">
              {navLinks.slice(0, 9).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-2.5 py-1.5 rounded hover:bg-adal-green-800 hover:text-adal-gold-300 transition-colors whitespace-nowrap"
                >
                  {link.label}
                </Link>
              ))}

              {/* More dropdown for secondary links */}
              <div className="relative group">
                <button className="flex items-center gap-1 px-2.5 py-1.5 rounded hover:bg-adal-green-800 hover:text-adal-gold-300 transition-colors">
                  <span>{isUrdu ? "مزید" : "More"}</span>
                  <ChevronDown className="h-3 w-3" />
                </button>
                <div className="absolute right-0 top-full hidden w-44 rounded-md border border-adal-gold-500/30 bg-adal-green-950 p-1 shadow-lg group-hover:block rtl:left-0 rtl:right-auto z-50">
                  {navLinks.slice(9).map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block rounded px-3 py-2 text-xs text-gray-200 hover:bg-adal-green-800 hover:text-adal-gold-300 transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <div className="border-t border-adal-gold-500/20 my-1"></div>
                  <Link
                    href="/downloads"
                    className="block rounded px-3 py-2 text-xs text-gray-200 hover:bg-adal-green-800 hover:text-adal-gold-300 transition-colors"
                  >
                    {t.nav.downloads}
                  </Link>
                </div>
              </div>
            </nav>

            {/* Action Buttons — desktop only */}
            <div className="hidden lg:flex items-center gap-2.5 flex-shrink-0">
              <Link
                href="/manifesto"
                className="hidden xl:inline-flex items-center gap-1.5 rounded border border-adal-gold-400/80 bg-transparent px-3.5 py-2 text-xs font-semibold text-adal-gold-300 hover:bg-adal-gold-500/10 transition-all whitespace-nowrap"
              >
                <BookOpen className="h-3.5 w-3.5 flex-shrink-0" />
                <span>{t.cta.readManifesto}</span>
              </Link>

              <Link
                href="/membership"
                className="inline-flex items-center gap-1.5 rounded bg-gradient-to-r from-adal-gold-500 to-adal-gold-600 px-4 py-2 text-xs font-bold text-adal-green-950 shadow hover:from-adal-gold-400 hover:to-adal-gold-500 transition-all transform hover:-translate-y-0.5 whitespace-nowrap"
              >
                <UserPlus className="h-4 w-4 flex-shrink-0" />
                <span>{t.cta.join}</span>
              </Link>
            </div>

            {/* Mobile: search + lang switcher + hamburger */}
            <div className="flex items-center gap-1 xl:hidden flex-shrink-0">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 rounded text-gray-300 hover:text-adal-gold-400"
                aria-label="Search"
              >
                <Search className="h-5 w-5" />
              </button>
              {/* Show lang switcher inline on mobile */}
              <div className="hidden sm:block">
                <LanguageSwitcher />
              </div>
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="p-2 rounded-md text-gray-200 hover:bg-adal-green-800 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-Out Drawer */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-adal-gold-500/30 bg-adal-green-950/98 px-4 py-5 shadow-2xl max-h-[85vh] overflow-y-auto">
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-adal-green-800">
              <div className="flex items-center gap-2">
                <Image src="/logo.jpg" alt="Logo" width={32} height={32} className="rounded-full bg-white p-0.5 flex-shrink-0" />
                <span className="font-urdu font-bold text-white text-base">{siteSettings.partyNameUr}</span>
              </div>
              <LanguageSwitcher />
            </div>

            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-1.5 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-200 hover:bg-adal-green-800 hover:text-adal-gold-400 transition-colors truncate"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/downloads"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-200 hover:bg-adal-green-800 hover:text-adal-gold-400 transition-colors"
              >
                {t.nav.downloads}
              </Link>
              <Link
                href="/admin"
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-gray-400 hover:bg-adal-green-800 hover:text-adal-gold-400 transition-colors"
              >
                {t.nav.admin}
              </Link>
            </div>

            {/* CTAs */}
            <div className="pt-4 border-t border-adal-green-800 flex flex-col gap-2.5">
              <Link
                href="/membership"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-lg bg-adal-gold-500 py-3 text-sm font-bold text-adal-green-950 shadow hover:bg-adal-gold-400"
              >
                {t.cta.join}
              </Link>
              <Link
                href="/manifesto"
                onClick={() => setMobileOpen(false)}
                className="w-full text-center rounded-lg border border-adal-gold-500/60 py-2.5 text-sm font-semibold text-adal-gold-300 hover:bg-adal-gold-500/10"
              >
                {t.cta.readManifesto}
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Dialog */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
