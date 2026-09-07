-- ==========================================================
-- PAKISTAN ADAL PARTY (پاکستان عدل پارٹی)
-- Institutional Database Schema (PostgreSQL / Supabase)
-- ==========================================================

-- 1. EXTENSIONS
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. ADMIN USERS TABLE
CREATE TABLE IF NOT EXISTS admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    role VARCHAR(50) DEFAULT 'officer', -- 'superadmin', 'secretary', 'officer'
    full_name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    last_login TIMESTAMP WITH TIME ZONE
);

-- 3. MEMBERSHIP APPLICATIONS (Strictly Protected, CNIC masked in public views)
CREATE TABLE IF NOT EXISTS membership_applications (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    application_number VARCHAR(64) UNIQUE NOT NULL, -- e.g. PAP-2026-10492
    full_name VARCHAR(255) NOT NULL,
    cnic VARCHAR(32) NOT NULL, -- 13-digit CNIC (encrypted or protected)
    phone VARCHAR(32) NOT NULL,
    mobile VARCHAR(32),
    email VARCHAR(255),
    address TEXT NOT NULL,
    city VARCHAR(100),
    district VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    profession VARCHAR(150),
    education VARCHAR(150),
    membership_type VARCHAR(50) DEFAULT 'regular',
    commitment_accepted BOOLEAN NOT NULL DEFAULT TRUE, -- حلف نامہ قبولیت
    signature_reference VARCHAR(255),
    status VARCHAR(50) DEFAULT 'Pending', -- 'Pending', 'Under Review', 'Approved', 'Rejected', 'Contact Required'
    admin_notes TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Indexes for membership search & queries
CREATE INDEX IF NOT EXISTS idx_membership_app_num ON membership_applications(application_number);
CREATE INDEX IF NOT EXISTS idx_membership_status ON membership_applications(status);
CREATE INDEX IF NOT EXISTS idx_membership_province ON membership_applications(province);
CREATE INDEX IF NOT EXISTS idx_membership_created ON membership_applications(created_at DESC);

-- 4. VOLUNTEERS
CREATE TABLE IF NOT EXISTS volunteers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(32) NOT NULL,
    city VARCHAR(100) NOT NULL,
    district VARCHAR(100) NOT NULL,
    province VARCHAR(100) NOT NULL,
    area_of_interest VARCHAR(100) NOT NULL,
    availability VARCHAR(50) NOT NULL,
    message TEXT,
    status VARCHAR(50) DEFAULT 'Active',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 5. MANIFESTO CATEGORIES & POLICIES (Authoritative 35 Policies)
CREATE TABLE IF NOT EXISTS manifesto_categories (
    id VARCHAR(50) PRIMARY KEY,
    title_en VARCHAR(255) NOT NULL,
    title_ur VARCHAR(255) NOT NULL,
    display_order INT NOT NULL
);

CREATE TABLE IF NOT EXISTS manifesto_policies (
    policy_number INT PRIMARY KEY,
    slug VARCHAR(120) UNIQUE NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ur VARCHAR(255) NOT NULL,
    category_id VARCHAR(50) REFERENCES manifesto_categories(id),
    short_summary_en TEXT NOT NULL,
    short_summary_ur TEXT NOT NULL,
    full_text_en TEXT NOT NULL,
    full_text_ur TEXT NOT NULL,
    key_points_en JSONB DEFAULT '[]'::jsonb,
    key_points_ur JSONB DEFAULT '[]'::jsonb,
    icon_name VARCHAR(50) DEFAULT 'Scale'
);

-- 6. NEWS ARTICLES
CREATE TABLE IF NOT EXISTS news_articles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ur VARCHAR(255) NOT NULL,
    summary_en TEXT NOT NULL,
    summary_ur TEXT NOT NULL,
    content_en TEXT NOT NULL,
    content_ur TEXT NOT NULL,
    category VARCHAR(100) DEFAULT 'Official Statement',
    author VARCHAR(100) DEFAULT 'Central Media Cell',
    published_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    cover_image TEXT,
    is_featured BOOLEAN DEFAULT FALSE,
    status VARCHAR(50) DEFAULT 'Published'
);

-- 7. EVENTS
CREATE TABLE IF NOT EXISTS events (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    slug VARCHAR(255) UNIQUE NOT NULL,
    title_en VARCHAR(255) NOT NULL,
    title_ur VARCHAR(255) NOT NULL,
    description_en TEXT NOT NULL,
    description_ur TEXT NOT NULL,
    event_date DATE NOT NULL,
    event_time VARCHAR(50),
    location_en VARCHAR(255) NOT NULL,
    location_ur VARCHAR(255) NOT NULL,
    city VARCHAR(100) NOT NULL,
    status VARCHAR(50) DEFAULT 'Upcoming', -- 'Upcoming', 'Ongoing', 'Completed'
    registration_url TEXT,
    cover_image TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 8. PRESS RELEASES
CREATE TABLE IF NOT EXISTS press_releases (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    release_number VARCHAR(100) UNIQUE,
    title_en VARCHAR(255) NOT NULL,
    title_ur VARCHAR(255) NOT NULL,
    content_en TEXT NOT NULL,
    content_ur TEXT NOT NULL,
    published_date DATE NOT NULL,
    pdf_attachment TEXT,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 9. MEDIA & GALLERY
CREATE TABLE IF NOT EXISTS media_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    title_en VARCHAR(255) NOT NULL,
    title_ur VARCHAR(255) NOT NULL,
    media_type VARCHAR(50) NOT NULL, -- 'photo', 'video', 'speech', 'press_kit'
    url TEXT NOT NULL,
    thumbnail_url TEXT,
    event_date DATE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 10. LEADERSHIP & OFFICE BEARERS
CREATE TABLE IF NOT EXISTS leadership_members (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name_en VARCHAR(255) NOT NULL,
    name_ur VARCHAR(255) NOT NULL,
    designation_en VARCHAR(255) NOT NULL,
    designation_ur VARCHAR(255) NOT NULL,
    level VARCHAR(50) DEFAULT 'central', -- 'central', 'provincial', 'divisional'
    bio_en TEXT,
    bio_ur TEXT,
    photo_url TEXT,
    display_order INT DEFAULT 0,
    is_published BOOLEAN DEFAULT TRUE
);

-- 11. DONATIONS (Strictly Protected)
CREATE TABLE IF NOT EXISTS donations (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    donation_reference VARCHAR(64) UNIQUE NOT NULL,
    amount DECIMAL(12, 2) NOT NULL,
    currency VARCHAR(10) DEFAULT 'PKR',
    donor_name VARCHAR(255),
    email VARCHAR(255),
    phone VARCHAR(50),
    is_anonymous BOOLEAN DEFAULT FALSE,
    payment_provider VARCHAR(50) DEFAULT 'Bank Transfer / Gateway',
    payment_status VARCHAR(50) DEFAULT 'Pending', -- 'Pending', 'Paid', 'Failed', 'Refunded'
    transaction_reference VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 12. CONTACT MESSAGES
CREATE TABLE IF NOT EXISTS contact_messages (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    full_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    status VARCHAR(50) DEFAULT 'Unread', -- 'Unread', 'Read', 'In Progress', 'Resolved'
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 13. NEWSLETTER SUBSCRIBERS
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    email VARCHAR(255) UNIQUE NOT NULL,
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    is_active BOOLEAN DEFAULT TRUE
);

-- 14. SITE SETTINGS & EDITABLE PLACEHOLDERS
CREATE TABLE IF NOT EXISTS site_settings (
    key VARCHAR(100) PRIMARY KEY,
    value TEXT NOT NULL,
    description TEXT,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

ALTER TABLE site_settings ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "Allow public read of site settings" ON site_settings;
CREATE POLICY "Allow public read of site settings" ON site_settings
    FOR SELECT TO anon, authenticated
    USING (true);

-- 15. AUDIT LOGS
CREATE TABLE IF NOT EXISTS audit_logs (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    actor VARCHAR(255) NOT NULL,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100) NOT NULL,
    entity_id VARCHAR(255),
    details JSONB,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- 16. SECURITY: ROW LEVEL SECURITY (RLS)
ALTER TABLE membership_applications ENABLE ROW LEVEL SECURITY;
ALTER TABLE donations ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_logs ENABLE ROW LEVEL SECURITY;

-- Allow public to INSERT new membership applications (oath submission)
CREATE POLICY "Allow public insert to membership" ON membership_applications
    FOR INSERT TO anon, authenticated
    WITH CHECK (true);

-- Never allow public anon SELECT on membership applications (CNIC & personal data protection)
-- Admin role only can read/update
