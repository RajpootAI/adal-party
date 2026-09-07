# Pakistan Adal Party (پاکستان عدل پارٹی)
### Official Bilingual Institutional Digital Platform

> **"امن، انصاف، ترقی اور مساوات سب کے لیے"**  
> *"Peace, Justice, Development and Equality for All"*  
> — **قومی منشور 2026 / National Manifesto 2026**

---

## Overview

A serious, institutional-grade official political party platform for **Pakistan Adal Party (پاکستان عدل پارٹی)**. Grounded strictly in official source materials:
1. **Official Emblem Logo:** High-resolution crest featuring Minar-e-Pakistan, scales of justice, emerald/gold ring, and calligraphic party name.
2. **Official National Manifesto 2026:** All 35 foundational policy areas and the Pakistan 2036 National Transformation Plan.
3. **Official Membership Form & Solemn Oath (*حلف نامہ*):** Multi-step online membership application matching `Membership.pdf`.

---

## Core Features & Architecture

- **Bilingual i18n & Dynamic Direction:**
  - Full bidirectional support: **Urdu (RTL, `dir="rtl"`)** and **English (LTR, `dir="ltr"`)**.
  - High-quality typography using `Noto Nastaliq Urdu`, `Noto Sans Arabic`, and `Inter`.
  - Global language switcher with persistent user preference in cookies and localStorage.
  - Seamless handling of mixed technical terms (*CPEC 2.0*, *AI-assisted legal research*, *Skill + Education + Industry*, *One Citizen — One Digital Government ID*).

- **Institutional Design Language:**
  - Deep Pakistan Green (`#01411C`, `#022410`), Emerald Green (`#059669`), White surfaces, and subtle Gold accents (`#D4AF37`).
  - No generic campaign gimmicks; designed to feel credible, dignified, constitutional, and modern.

- **Authoritative Manifesto Explorer (`/manifesto`, `/manifesto/[slug]`):**
  - Layer 1: Structural category architecture (Governance, Justice, Education, Economy, Trade, Security, Public Administration, Rights, Transformation).
  - Layer 2: All 35 individual policy areas with deep-linkable SEO detail pages.
  - Dedicated showcase for **Policy #35: Pakistan 2036 National Transformation Plan** across 5 strategic pillars (*National Unity, Justice, Production, Connectivity, Security*).
  - Real-time bilingual keyword search and instant print-friendly stylesheet.
  - Direct download of official `manshoor-pakistan-adal-party-2026.pdf`.

- **Online Membership System (`/membership`, `/membership/status`):**
  - Multi-step application matching the official party form:
    1. Personal Information (Full Name / مکمل نام)
    2. Identification (CNIC - mandatory, encrypted, masked in public views)
    3. Contact & Residency (Phone, Alternate Mobile, Email, Full Residential Address, District, Province)
    4. Education & Profession (پیشہ / تعلیم)
    5. Solemn Oath (*حلف نامہ*): Exact word-for-word text from `Membership.pdf` with required affirmation
    6. Review & Final Submission
  - Automatic generation of unique application tracking codes: `PAP-2026-XXXXX`.
  - Instant printable/downloadable confirmation receipt.
  - Public status verification portal without exposing private identity data.

- **Institutional Staff Portal (`/admin`):**
  - Secure authentication screen (`adal2026admin`).
  - Overview Dashboard with verified metric counters.
  - Membership Management Console: inspect applications, update statuses (*Pending, Under Review, Approved, Rejected, Contact Required*), add internal review notes, export full CSV.
  - Volunteer Management Console.
  - News & Press Releases CMS.
  - Donation Ledger & Account Records.
  - Public Inquiries Inbox.
  - Site Placeholders Configuration.

- **Civic Engagement & Financial Infrastructure:**
  - `/volunteer`: Skills, interests, and availability onboarding.
  - `/donate`: Provider-agnostic payment abstraction with custom amounts, recurring options, and anonymous toggle.
  - `/contact`: Official contact channels with structured placeholders (`[OFFICE ADDRESS]`, `[OFFICIAL EMAIL]`, `[PHONE NUMBER]`, `[WHATSAPP NUMBER]`).
  - `/media` & `/press`: Media center and authenticated press communiqués.
  - `/downloads`: Central repository for manifesto, membership form, and brand assets.

- **Database & Backend Ready:**
  - PostgreSQL / Supabase schema (`schema.sql`) with Row-Level Security (RLS) policies and indexes.
  - Dual-mode data access layer (`lib/db.ts`): runs immediately out-of-the-box with in-memory persistence, and automatically switches to cloud Supabase when environment variables are supplied.
  - Ready for email delivery via Resend/SMTP and webhooks.

---

## Getting Started

### Prerequisites
- Node.js LTS (v20.x recommended)
- npm or yarn

### Installation & Local Run
```bash
# 1. Install dependencies
npm install

# 2. Run in development mode
npm run dev

# 3. Build for production
npm run build

# 4. Start production server
npm start
```
The portal will be accessible at: `http://localhost:3000`

---

## Environment Configuration

Create or update `.env.local`:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Supabase Credentials (Optional for local mode)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=

# Notification & Email Delivery
MEMBERSHIP_NOTIFICATION_EMAIL=[MEMBERSHIP_NOTIFICATION_EMAIL]
RESEND_API_KEY=

# Payment Provider Gateway
PAYMENT_PROVIDER_KEY=
PAYMENT_WEBHOOK_SECRET=

# Admin Access Credentials
ADMIN_SECRET_KEY=adal2026admin
```

---

## Database Setup (Supabase / PostgreSQL)

To initialize your production database, execute the full DDL script provided in [`schema.sql`](./schema.sql) in your Supabase SQL Editor. It establishes:
- `membership_applications` (with Row-Level Security)
- `volunteers`
- `news_articles`
- `events`
- `press_releases`
- `media_items`
- `donations`
- `contact_messages`
- `site_settings`
- `audit_logs`

---

## Official Documents Included in Repository
- `public/logo.jpg`: Official party emblem.
- `public/downloads/manshoor-pakistan-adal-party-2026.pdf`: Authentic National Manifesto 2026 (8 pages).
- `public/downloads/Membership.pdf`: Official Membership Application Form & Oath.
