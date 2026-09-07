"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useI18n } from "@/lib/i18nContext";
import { partyStore } from "@/lib/store";
import { maskCNIC } from "@/lib/db";
import { MembershipApplication, Volunteer, Donation, ContactMessage, NewsArticle } from "@/types";
import {
  Lock,
  LayoutDashboard,
  Users,
  UserPlus,
  Newspaper,
  Calendar,
  Heart,
  Mail,
  Settings,
  Download,
  CheckCircle2,
  Clock,
  AlertCircle,
  Eye,
  Edit,
  Plus,
  Search,
  Filter,
  LogOut,
  ChevronRight,
  ShieldCheck,
  Building
} from "lucide-react";

export default function AdminDashboardPage() {
  const { language } = useI18n();
  const isUrdu = false;

  useEffect(() => {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = "en";
  }, []);

  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState("");

  // Navigation Tabs
  const [activeTab, setActiveTab] = useState<
    "overview" | "membership" | "volunteers" | "news" | "donations" | "messages" | "settings"
  >("overview");

  // Data States
  const [applications, setApplications] = useState<MembershipApplication[]>([]);
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [donations, setDonations] = useState<Donation[]>([]);
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [siteSettings, setSiteSettings] = useState(partyStore.getSiteSettings());

  // Filter & Search states
  const [memberSearch, setMemberSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedApp, setSelectedApp] = useState<MembershipApplication | null>(null);
  const [newNote, setNewNote] = useState("");

  // News creation form state
  const [showAddNews, setShowAddNews] = useState(false);
  const [newsTitleUr, setNewsTitleUr] = useState("");
  const [newsTitleEn, setNewsTitleEn] = useState("");
  const [newsSummaryUr, setNewsSummaryUr] = useState("");
  const [newsSummaryEn, setNewsSummaryEn] = useState("");
  const [newsContentUr, setNewsContentUr] = useState("");
  const [newsContentEn, setNewsContentEn] = useState("");

  const refreshData = () => {
    setApplications([...partyStore.getApplications()]);
    setVolunteers([...partyStore.getVolunteers()]);
    setDonations([...partyStore.getDonations()]);
    setMessages([...partyStore.getMessages()]);
    setNews([...partyStore.getNews()]);
    setSiteSettings({ ...partyStore.getSiteSettings() });

    const accessToken = sessionStorage.getItem("pap_admin_token");
    if (accessToken) {
      fetch("/api/admin", { headers: { Authorization: `Bearer ${accessToken}` } })
        .then(async (res) => (res.ok ? res.json() : null))
        .then((data) => {
          if (!data) return;
          if (data.applications) setApplications(data.applications);
          if (data.volunteers) setVolunteers(data.volunteers);
          if (data.donations) setDonations(data.donations);
          if (data.messages) setMessages(data.messages);
          if (data.news) setNews(data.news);
          if (data.settings) setSiteSettings({ ...partyStore.getSiteSettings(), ...data.settings });
        })
        .catch(() => undefined);
    }
  };

  useEffect(() => {
    // Check local session
    const auth = sessionStorage.getItem("pap_admin_auth");
    if (auth === "true" && sessionStorage.getItem("pap_admin_token")) {
      setIsAuthenticated(true);
      refreshData();
    }
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password: passwordInput }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Invalid admin credentials.");
      setIsAuthenticated(true);
      sessionStorage.setItem("pap_admin_auth", "true");
      sessionStorage.setItem("pap_admin_token", data.accessToken);
      refreshData();
    } catch (error) {
      setAuthError(error instanceof Error ? error.message : "Invalid admin credentials.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("pap_admin_auth");
    sessionStorage.removeItem("pap_admin_token");
  };

  const handleUpdateStatus = async (id: string, newStatus: MembershipApplication["status"]) => {
    const accessToken = sessionStorage.getItem("pap_admin_token");
    if (!accessToken) return;
    const res = await fetch("/api/membership", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ id, status: newStatus, notes: newNote || undefined }),
    });
    if (res.ok) {
      refreshData();
      if (selectedApp && selectedApp.id === id) {
        setSelectedApp({ ...selectedApp, status: newStatus, adminNotes: newNote || selectedApp.adminNotes });
      }
    }
    setNewNote("");
  };

  const handleExportCSV = () => {
    const headers = "ApplicationNumber,FullName,CNIC_Masked,Phone,Province,District,Status,CreatedAt\n";
    const rows = applications
      .map(
        (a) =>
          `"${a.applicationNumber}","${a.fullName}","${maskCNIC(a.cnic)}","${a.phone}","${a.province}","${a.district}","${a.status}","${a.createdAt}"`
      )
      .join("\n");
    const blob = new Blob([headers + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `PAP-Membership-Applications-${new Date().toISOString().slice(0, 10)}.csv`;
    link.click();
  };

  const handleCreateNews = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsTitleEn || !newsTitleUr) return;

    const article = {
      slug: newsTitleEn.toLowerCase().replace(/[^a-z0-9]+/g, "-").slice(0, 60),
      titleEn: newsTitleEn,
      titleUr: newsTitleUr,
      summaryEn: newsSummaryEn,
      summaryUr: newsSummaryUr,
      contentEn: newsContentEn,
      contentUr: newsContentUr,
      category: "Official Announcement",
      author: "Central Media Secretariat",
      publishedAt: new Date().toISOString(),
      coverImage: "/logo.jpg",
      isFeatured: false,
      status: "Published",
    };
    const accessToken = sessionStorage.getItem("pap_admin_token");
    const response = await fetch("/api/admin", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ entity: "news", data: article }),
    });
    if (!response.ok) return;

    setShowAddNews(false);
    setNewsTitleEn("");
    setNewsTitleUr("");
    setNewsSummaryEn("");
    setNewsSummaryUr("");
    setNewsContentEn("");
    setNewsContentUr("");
    refreshData();
  };

  const handleSaveSiteSettings = async () => {
    const accessToken = sessionStorage.getItem("pap_admin_token");
    const response = await fetch("/api/admin", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ entity: "settings", data: siteSettings }),
    });
    if (response.ok) refreshData();
  };

  const handleSaveMember = async () => {
    if (!selectedApp) return;
    const accessToken = sessionStorage.getItem("pap_admin_token");
    const response = await fetch("/api/admin", {
      method: "PATCH",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${accessToken}` },
      body: JSON.stringify({ entity: "membership", id: selectedApp.id, data: selectedApp }),
    });
    if (response.ok) {
      setSelectedApp(null);
      refreshData();
    }
  };

  // If unauthenticated: render login screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-adal-green-950 flex flex-col justify-center items-center p-4">
        <div className="max-w-md w-full bg-white rounded-2xl border-2 border-adal-gold-400 p-8 shadow-2xl space-y-6">
          <div className="text-center space-y-3">
            <div className="mx-auto h-20 w-20 rounded-full border-2 border-adal-gold-400 bg-white p-1 overflow-hidden shadow">
              <Image src="/logo.jpg" alt="Logo" width={80} height={80} className="object-contain h-full w-full" />
            </div>
            <h1 className="font-urdu text-2xl font-black text-adal-green-950 urdu-editorial">
              پاکستان عدل پارٹی — مرکزی پورٹل
            </h1>
            <p className="text-xs text-gray-500 font-mono uppercase tracking-wider">
              Secretariat Administration Console
            </p>
          </div>

          {authError && (
            <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 p-3 text-xs text-red-800">
              <AlertCircle className="h-4 w-4 text-red-600 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                {isUrdu ? "ایڈمن ای میل" : "Admin Email"}
              </label>
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="admin@example.com"
                className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-1">
                {isUrdu ? "سیکرٹریٹ رسائی پاس ورڈ" : "Staff Passcode / Secret Key"}
              </label>
              <div className="relative">
                <input
                  type="password"
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin passcode (e.g. adal2026admin)"
                  className="w-full rounded-lg border border-gray-300 p-3 text-sm focus:border-adal-gold-500 focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-adal-green-900 py-3 text-sm font-bold text-adal-gold-300 hover:bg-adal-green-800 transition-colors shadow"
            >
              {isUrdu ? "سیکرٹریٹ میں داخل ہوں" : "Authenticate to Console"}
            </button>
          </form>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <Link href="/" className="hover:text-adal-green-900">
              ← {isUrdu ? "پورٹل پر واپس جائیں" : "Return to Public Portal"}
            </Link>
            <span className="font-mono text-[10px]">AUTH V1.0</span>
          </div>
        </div>
      </div>
    );
  }

  // Filtered Applications
  const filteredApps = applications.filter((app) => {
    const matchStatus = statusFilter === "all" || app.status === statusFilter;
    const q = memberSearch.toLowerCase().trim();
    const matchQ =
      !q ||
      app.fullName.toLowerCase().includes(q) ||
      app.applicationNumber.toLowerCase().includes(q) ||
      app.province.toLowerCase().includes(q) ||
      app.district.toLowerCase().includes(q);
    return matchStatus && matchQ;
  });

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Top Admin Header */}
      <header className="bg-adal-green-950 text-white border-b border-adal-gold-500/30 px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-white p-0.5 overflow-hidden border border-adal-gold-400 shrink-0">
            <Image src="/logo.jpg" alt="Logo" width={36} height={36} className="h-full w-full object-contain" />
          </div>
          <div>
            <h2 className="font-bold text-sm leading-tight text-white flex items-center gap-2">
              <span>Pakistan Adal Party</span>
              <span className="rounded bg-adal-gold-500/20 text-adal-gold-300 px-2 py-0.5 text-[10px] font-mono">
                CENTRAL ADMIN
              </span>
            </h2>
            <p className="text-[11px] text-gray-300 font-urdu urdu-editorial leading-none">
              مرکزی انتظامی پورٹل
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <Link
            href="/"
            target="_blank"
            className="hidden sm:inline-flex items-center gap-1 text-gray-300 hover:text-adal-gold-300"
          >
            <span>{isUrdu ? "ویب سائٹ دیکھیں" : "View Live Website"}</span>
            <ChevronRight className="h-3 w-3 rtl:rotate-180" />
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center gap-1 rounded bg-white/10 px-3 py-1.5 text-gray-200 hover:bg-white/20 hover:text-white"
          >
            <LogOut className="h-3.5 w-3.5" />
            <span>{isUrdu ? "لاگ آؤٹ" : "Log Out"}</span>
          </button>
        </div>
      </header>

      {/* Main Admin Interface with Navigation Tabs */}
      <div className="flex-1 flex flex-col md:flex-row min-h-0">
        {/* Sidebar Navigation — horizontal scrollable on mobile, vertical on md+ */}
        <aside className="w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-gray-200 shrink-0">
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible p-2 md:p-4 gap-1 md:space-y-1">
          {[
            { id: "overview", labelUr: "عمومی جائزہ", labelEn: "Overview", icon: LayoutDashboard },
            { id: "membership", labelUr: "رکنیت", labelEn: "Membership", icon: UserPlus, count: applications.length },
            { id: "volunteers", labelUr: "رضاکاران", labelEn: "Volunteers", icon: Users, count: volunteers.length },
            { id: "news", labelUr: "خبریں", labelEn: "News", icon: Newspaper, count: news.length },
            { id: "donations", labelUr: "مالی", labelEn: "Donations", icon: Heart, count: donations.length },
            { id: "messages", labelUr: "پیغامات", labelEn: "Inquiries", icon: Mail, count: messages.length },
            { id: "settings", labelUr: "سیٹنگز", labelEn: "Settings", icon: Settings },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id as any);
                  setSelectedApp(null);
                }}
                className={`flex-shrink-0 flex items-center justify-between md:w-full rounded-lg px-3 md:px-3.5 py-2 md:py-2.5 text-xs font-bold transition-colors ${
                  isActive
                    ? "bg-adal-green-900 text-adal-gold-300 shadow-sm"
                    : "text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className={`h-4 w-4 flex-shrink-0 ${isActive ? "text-adal-gold-400" : "text-gray-500"}`} />
                  <span className="whitespace-nowrap">{isUrdu ? item.labelUr : item.labelEn}</span>
                </div>
                {item.count !== undefined && (
                  <span
                    className={`ml-1 rounded-full px-2 py-0.5 text-[10px] font-mono ${
                      isActive ? "bg-adal-gold-500 text-adal-green-950 font-black" : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {item.count}
                  </span>
                )}
              </button>
            );
          })}
          </div>
        </aside>

        {/* Dynamic Tab Body */}
        <main className="flex-1 p-4 sm:p-8 overflow-y-auto max-w-7xl">
          {/* TAB 1: EXECUTIVE OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {isUrdu ? "سیکرٹریٹ ڈیش بورڈ جائزہ" : "Central Executive Dashboard"}
                </h1>
                <p className="text-xs text-gray-500">
                  Live verification metrics from the Pakistan Adal Party national registry.
                </p>
              </div>

              {/* Metric Counters (Real database data) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Total Applications</span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-3xl font-black text-adal-green-950">{applications.length}</span>
                    <span className="text-xs font-bold text-emerald-700">Verified Submissions</span>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Pending Review</span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-3xl font-black text-amber-600">
                      {applications.filter((a) => a.status === "Pending" || a.status === "Under Review").length}
                    </span>
                    <span className="text-xs font-medium text-amber-800">Requires Action</span>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Approved Members</span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-3xl font-black text-emerald-700">
                      {applications.filter((a) => a.status === "Approved").length}
                    </span>
                    <span className="text-xs text-gray-500">Active Roster</span>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                  <span className="text-xs text-gray-500 font-semibold uppercase">Total Donated (PKR)</span>
                  <div className="mt-2 flex items-baseline justify-between">
                    <span className="text-2xl font-black text-adal-green-950">
                      Rs. {donations.reduce((acc, d) => acc + d.amount, 0).toLocaleString()}
                    </span>
                    <span className="text-xs text-gray-500">{donations.length} receipts</span>
                  </div>
                </div>
              </div>

              {/* Quick Action Buttons */}
              <div className="rounded-xl border border-adal-gold-500/30 bg-adal-green-950 p-6 text-white shadow-md">
                <h3 className="text-sm font-bold text-adal-gold-400 mb-3 uppercase tracking-wider">
                  Quick Staff Actions
                </h3>
                <div className="flex flex-wrap gap-2.5 text-xs">
                  <button
                    onClick={() => setActiveTab("membership")}
                    className="rounded-lg bg-adal-gold-500 px-4 py-2 font-bold text-adal-green-950 hover:bg-adal-gold-400 transition-colors"
                  >
                    Review Membership Applications
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab("news");
                      setShowAddNews(true);
                    }}
                    className="rounded-lg bg-white/10 px-4 py-2 font-semibold text-white hover:bg-white/20 transition-colors"
                  >
                    + Publish News Statement
                  </button>
                  <button
                    onClick={handleExportCSV}
                    className="rounded-lg border border-adal-gold-400/60 px-4 py-2 text-adal-gold-300 hover:bg-white/5 transition-colors"
                  >
                    Export Member CSV
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: MEMBERSHIP APPLICATIONS */}
          {activeTab === "membership" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                    {isUrdu ? "رکنیت کی درخواستیں" : "Membership Applications Console"}
                  </h1>
                  <p className="text-xs text-gray-500">
                    Full database table with CNIC masking, review statuses, and export tools.
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleExportCSV}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-adal-green-900 px-3.5 py-2 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800 shadow-sm"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Export CSV</span>
                  </button>
                </div>
              </div>

              {/* Filters & Search */}
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <div className="relative flex-1 w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400 rtl:left-auto rtl:right-3" />
                  <input
                    type="text"
                    value={memberSearch}
                    onChange={(e) => setMemberSearch(e.target.value)}
                    placeholder="Search by name, reference (PAP-2026-...), district, province..."
                    className="w-full rounded-lg border border-gray-300 py-2 pl-9 pr-4 text-xs text-gray-900 focus:border-adal-gold-500 focus:outline-none bg-white shadow-sm rtl:pl-4 rtl:pr-9"
                  />
                </div>

                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="rounded-lg border border-gray-300 py-2 px-3 text-xs bg-white text-gray-800 focus:outline-none"
                >
                  <option value="all">All Statuses ({applications.length})</option>
                  <option value="Pending">Pending</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Approved">Approved</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Contact Required">Contact Required</option>
                </select>
              </div>

              {/* Responsive Applications Table */}
              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs border-collapse">
                    <thead className="bg-adal-green-950 text-white font-mono text-[11px]">
                      <tr>
                        <th className="p-3">Tracking Ref</th>
                        <th className="p-3">Applicant</th>
                        <th className="p-3">CNIC (Masked)</th>
                        <th className="p-3">Contact</th>
                        <th className="p-3">District / Province</th>
                        <th className="p-3">Status</th>
                        <th className="p-3 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      {filteredApps.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="p-8 text-center text-gray-500">
                            No membership records match your filter criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredApps.map((app) => (
                          <tr key={app.id} className="hover:bg-gray-50 transition-colors">
                            <td className="p-3 font-mono font-bold text-adal-green-900 whitespace-nowrap">
                              {app.applicationNumber}
                            </td>
                            <td className="p-3 font-semibold text-gray-900 whitespace-nowrap">
                              {app.fullName}
                            </td>
                            <td className="p-3 font-mono text-gray-600 whitespace-nowrap">
                              {maskCNIC(app.cnic)}
                            </td>
                            <td className="p-3 text-gray-600 whitespace-nowrap">
                              {app.phone}
                            </td>
                            <td className="p-3 text-gray-600 whitespace-nowrap">
                              {app.district}, {app.province}
                            </td>
                            <td className="p-3 whitespace-nowrap">
                              <span
                                className={`inline-block rounded-full px-2.5 py-0.5 text-[10px] font-bold ${
                                  app.status === "Approved"
                                    ? "bg-emerald-100 text-emerald-800"
                                    : app.status === "Under Review"
                                    ? "bg-blue-100 text-blue-800"
                                    : app.status === "Pending"
                                    ? "bg-amber-100 text-amber-800"
                                    : "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {app.status}
                              </span>
                            </td>
                            <td className="p-3 text-right whitespace-nowrap">
                              <button
                                onClick={() => setSelectedApp(app)}
                                className="inline-flex items-center gap-1 rounded bg-gray-100 px-2.5 py-1 text-[11px] font-bold text-adal-green-900 hover:bg-adal-gold-100"
                              >
                                <Eye className="h-3 w-3" />
                                <span>Inspect</span>
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Detailed Application Inspection Modal */}
              {selectedApp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
                  <div className="w-full max-w-2xl rounded-2xl bg-white p-6 sm:p-8 shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
                    <div className="flex items-center justify-between pb-3 border-b border-gray-200">
                      <div>
                        <span className="text-xs font-mono font-bold text-adal-green-900">
                          {selectedApp.applicationNumber}
                        </span>
                        <h3 className="text-xl font-bold text-adal-green-950">
                          {selectedApp.fullName}
                        </h3>
                      </div>
                      <button
                        onClick={() => setSelectedApp(null)}
                        className="rounded-lg p-1.5 text-gray-400 hover:bg-gray-100"
                      >
                        ✕
                      </button>
                    </div>

                    <div className="grid grid-cols-2 gap-4 text-xs">
                      <div>
                        <span className="text-gray-500 font-medium">CNIC (Protected):</span>
                        <p className="font-mono font-bold text-gray-900">{maskCNIC(selectedApp.cnic)}</p>
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Primary Phone:</span>
                        <input value={selectedApp.phone} onChange={(e) => setSelectedApp({ ...selectedApp, phone: e.target.value })} className="mt-1 w-full rounded border border-gray-300 p-2 font-mono text-xs" />
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Email:</span>
                        <input value={selectedApp.email || ""} onChange={(e) => setSelectedApp({ ...selectedApp, email: e.target.value })} className="mt-1 w-full rounded border border-gray-300 p-2 text-xs" />
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Residency:</span>
                        <div className="mt-1 flex gap-2"><input value={selectedApp.district} onChange={(e) => setSelectedApp({ ...selectedApp, district: e.target.value })} className="w-1/2 rounded border border-gray-300 p-2 text-xs" /><input value={selectedApp.province} onChange={(e) => setSelectedApp({ ...selectedApp, province: e.target.value })} className="w-1/2 rounded border border-gray-300 p-2 text-xs" /></div>
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500 font-medium">Full Address:</span>
                        <textarea value={selectedApp.address} onChange={(e) => setSelectedApp({ ...selectedApp, address: e.target.value })} className="mt-1 w-full rounded border border-gray-300 p-2 text-xs" rows={2} />
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Profession:</span>
                        <input value={selectedApp.profession || ""} onChange={(e) => setSelectedApp({ ...selectedApp, profession: e.target.value })} className="mt-1 w-full rounded border border-gray-300 p-2 text-xs" />
                      </div>
                      <div>
                        <span className="text-gray-500 font-medium">Education:</span>
                        <input value={selectedApp.education || ""} onChange={(e) => setSelectedApp({ ...selectedApp, education: e.target.value })} className="mt-1 w-full rounded border border-gray-300 p-2 text-xs" />
                      </div>
                      <div className="col-span-2">
                        <span className="text-gray-500 font-medium">Solemn Oath Acceptance:</span>
                        <p className="text-emerald-700 font-bold">✓ Accepted Voluntarily</p>
                      </div>
                      {selectedApp.adminNotes && (
                        <div className="col-span-2 rounded-lg bg-gray-50 p-3">
                          <span className="text-gray-500 font-medium">Current Staff Notes:</span>
                          <p className="text-gray-700 mt-1">{selectedApp.adminNotes}</p>
                        </div>
                      )}
                    </div>

                    {/* Change Status Controls */}
                    <div className="pt-4 border-t border-gray-200 space-y-3">
                      <button onClick={handleSaveMember} className="rounded-lg bg-adal-green-900 px-4 py-2 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800">
                        Save Member Details
                      </button>
                      <label className="block text-xs font-bold text-gray-700">
                        Update Application Status & Add Staff Review Note:
                      </label>
                      <input
                        type="text"
                        value={newNote}
                        onChange={(e) => setNewNote(e.target.value)}
                        placeholder="Add internal verification note (e.g. verified by phone, documents checked)..."
                        className="w-full rounded-lg border border-gray-300 p-2 text-xs focus:outline-none focus:border-adal-gold-500"
                      />

                      <div className="flex flex-wrap gap-2 pt-2">
                        {(["Approved", "Under Review", "Contact Required", "Rejected"] as const).map((st) => (
                          <button
                            key={st}
                            onClick={() => handleUpdateStatus(selectedApp.id, st)}
                            className={`rounded px-3 py-1.5 text-xs font-bold transition-colors ${
                              selectedApp.status === st
                                ? "bg-adal-green-900 text-adal-gold-300 ring-2 ring-adal-gold-500"
                                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                            }`}
                          >
                            Mark as {st}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: VOLUNTEERS NETWORK */}
          {activeTab === "volunteers" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {isUrdu ? "رضاکارانہ نیٹ ورک" : "Registered Party Volunteers"}
                </h1>
                <p className="text-xs text-gray-500">
                  Volunteers categorized by specialized legal, digital, and regional outreach interest.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-adal-green-950 text-white font-mono text-[11px]">
                    <tr>
                      <th className="p-3">Volunteer</th>
                      <th className="p-3">Contact</th>
                      <th className="p-3">Region</th>
                      <th className="p-3">Area of Interest</th>
                      <th className="p-3">Availability</th>
                      <th className="p-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {volunteers.map((vol) => (
                      <tr key={vol.id} className="hover:bg-gray-50">
                        <td className="p-3 font-bold text-gray-900">{vol.fullName}</td>
                        <td className="p-3 text-gray-600">{vol.phone} • {vol.email}</td>
                        <td className="p-3 text-gray-600">{vol.city}, {vol.province}</td>
                        <td className="p-3 font-medium text-adal-green-900">{vol.areaOfInterest}</td>
                        <td className="p-3 text-gray-500">{vol.availability}</td>
                        <td className="p-3">
                          <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                            {vol.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: NEWS & STATEMENTS CMS */}
          {activeTab === "news" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                    {isUrdu ? "خبریں اور بیانات کا انتظام" : "Official News & Statements CMS"}
                  </h1>
                  <p className="text-xs text-gray-500">
                    Draft, schedule, publish and manage authenticated communications in Urdu and English.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddNews(!showAddNews)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-adal-green-900 px-4 py-2 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800 shadow-sm"
                >
                  <Plus className="h-3.5 w-3.5" />
                  <span>{showAddNews ? "Cancel" : "Add News Statement"}</span>
                </button>
              </div>

              {/* Create Article Form */}
              {showAddNews && (
                <form onSubmit={handleCreateNews} className="rounded-xl border border-adal-gold-500/40 bg-white p-6 shadow-md space-y-4 animate-in fade-in">
                  <h3 className="font-bold text-sm text-adal-green-950 pb-2 border-b border-gray-200">
                    Create New Official Article
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Title (Urdu)</label>
                      <input
                        type="text"
                        required
                        value={newsTitleUr}
                        onChange={(e) => setNewsTitleUr(e.target.value)}
                        placeholder="اردو میں عنوان..."
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-adal-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Title (English)</label>
                      <input
                        type="text"
                        required
                        value={newsTitleEn}
                        onChange={(e) => setNewsTitleEn(e.target.value)}
                        placeholder="English headline..."
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-adal-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Summary (Urdu)</label>
                      <textarea
                        rows={2}
                        value={newsSummaryUr}
                        onChange={(e) => setNewsSummaryUr(e.target.value)}
                        placeholder="مختصر خلاصہ..."
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-adal-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Summary (English)</label>
                      <textarea
                        rows={2}
                        value={newsSummaryEn}
                        onChange={(e) => setNewsSummaryEn(e.target.value)}
                        placeholder="Brief summary..."
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-adal-gold-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Content (Urdu)</label>
                      <textarea
                        rows={4}
                        value={newsContentUr}
                        onChange={(e) => setNewsContentUr(e.target.value)}
                        placeholder="مکمل بیان..."
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-adal-gold-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1">Full Content (English)</label>
                      <textarea
                        rows={4}
                        value={newsContentEn}
                        onChange={(e) => setNewsContentEn(e.target.value)}
                        placeholder="Full body text..."
                        className="w-full rounded-lg border border-gray-300 p-2.5 text-xs focus:outline-none focus:border-adal-gold-500"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="rounded-lg bg-adal-gold-500 px-6 py-2.5 text-xs font-bold text-adal-green-950 hover:bg-adal-gold-400 shadow"
                  >
                    Publish to Website
                  </button>
                </form>
              )}

              <div className="space-y-3">
                {news.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-center justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
                  >
                    <div>
                      <span className="rounded bg-adal-green-50 px-2 py-0.5 text-[10px] font-bold text-adal-green-900">
                        {item.category}
                      </span>
                      <h4 className="font-bold text-adal-green-950 text-sm mt-1">
                        {item.titleEn}
                      </h4>
                      <p className="text-xs text-gray-500 font-urdu urdu-editorial leading-none mt-1">
                        {item.titleUr}
                      </p>
                    </div>

                    <span className="text-[11px] font-mono text-gray-400">
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: DONATIONS & ACCOUNTS */}
          {activeTab === "donations" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {isUrdu ? "مالی معاونت کا ریکارڈ" : "Donations & Contribution Ledger"}
                </h1>
                <p className="text-xs text-gray-500">
                  Transparent record of citizen contributions registered through bank transfers and payment gateways.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs border-collapse">
                  <thead className="bg-adal-green-950 text-white font-mono text-[11px]">
                    <tr>
                      <th className="p-3">Reference</th>
                      <th className="p-3">Amount</th>
                      <th className="p-3">Donor</th>
                      <th className="p-3">Payment Channel</th>
                      <th className="p-3">Status</th>
                      <th className="p-3">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {donations.map((don) => (
                      <tr key={don.id} className="hover:bg-gray-50">
                        <td className="p-3 font-mono font-bold text-adal-green-900">{don.donationReference}</td>
                        <td className="p-3 font-bold text-gray-900">{don.currency} {don.amount.toLocaleString()}</td>
                        <td className="p-3 text-gray-700">{don.isAnonymous ? "Anonymous Citizen" : don.donorName}</td>
                        <td className="p-3 text-gray-500">{don.paymentProvider}</td>
                        <td className="p-3">
                          <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-800">
                            {don.paymentStatus}
                          </span>
                        </td>
                        <td className="p-3 font-mono text-gray-400">{new Date(don.createdAt).toLocaleDateString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 6: CONTACT MESSAGES */}
          {activeTab === "messages" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {isUrdu ? "مرکزی ان باکس" : "Public Inquiries Inbox"}
                </h1>
                <p className="text-xs text-gray-500">
                  Correspondence received from the central contact form.
                </p>
              </div>

              <div className="space-y-3">
                {messages.map((msg) => (
                  <div key={msg.id} className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-adal-green-950">{msg.fullName} ({msg.email})</span>
                      <span className="rounded bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-700">
                        {msg.status}
                      </span>
                    </div>
                    <h4 className="font-bold text-sm text-gray-900">{msg.subject}</h4>
                    <p className="text-xs text-gray-600 leading-relaxed">{msg.message}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SITE SETTINGS & PLACEHOLDERS */}
          {activeTab === "settings" && (
            <div className="space-y-6">
              <div>
                <h1 className="text-xl sm:text-2xl font-bold text-adal-green-950">
                  {isUrdu ? "پورٹل سیٹنگز و پلیس ہولڈرز" : "Site Placeholders & Configuration"}
                </h1>
                <p className="text-xs text-gray-500">
                  Configure official contact channels, office addresses, and social media handles.
                </p>
              </div>

              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Party Name (English)</label>
                    <input type="text" value={siteSettings.partyNameEn} onChange={(e) => setSiteSettings({ ...siteSettings, partyNameEn: e.target.value })} className="w-full rounded-lg border border-gray-300 p-2.5 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Party Name (Urdu)</label>
                    <input type="text" value={siteSettings.partyNameUr} onChange={(e) => setSiteSettings({ ...siteSettings, partyNameUr: e.target.value })} className="w-full rounded-lg border border-gray-300 p-2.5 font-urdu focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Tagline (English)</label>
                    <input type="text" value={siteSettings.taglineEn} onChange={(e) => setSiteSettings({ ...siteSettings, taglineEn: e.target.value })} className="w-full rounded-lg border border-gray-300 p-2.5 focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Tagline (Urdu)</label>
                    <input type="text" value={siteSettings.taglineUr} onChange={(e) => setSiteSettings({ ...siteSettings, taglineUr: e.target.value })} className="w-full rounded-lg border border-gray-300 p-2.5 font-urdu focus:outline-none" />
                  </div>
                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Official Party Email</label>
                    <input
                      type="text"
                      value={siteSettings.officialEmail}
                      onChange={(e) => setSiteSettings({ ...siteSettings, officialEmail: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-2.5 font-mono focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block font-bold text-gray-700 mb-1">Official Phone</label>
                    <input
                      type="text"
                      value={siteSettings.officialPhone}
                      onChange={(e) => setSiteSettings({ ...siteSettings, officialPhone: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-2.5 font-mono focus:outline-none"
                    />
                  </div>

                  {([
                    ["membershipEmail", "Membership Email"],
                    ["mediaEmail", "Media Email"],
                    ["whatsappNumber", "WhatsApp Number"],
                    ["bankName", "Designated Bank Name"],
                    ["bankAccount", "Bank Account / IBAN"],
                    ["electionCommissionRegNo", "Election Commission Registration No."],
                    ["facebookUrl", "Facebook URL"],
                    ["twitterUrl", "X / Twitter URL"],
                    ["youtubeUrl", "YouTube URL"],
                    ["instagramUrl", "Instagram URL"],
                    ["tiktokUrl", "TikTok URL"],
                    ["whatsappUrl", "WhatsApp URL"],
                    ["chairmanNameEn", "Chairman Name (English)"],
                    ["chairmanNameUr", "Chairman Name (Urdu)"],
                    ["secretaryGeneralNameEn", "Secretary General (English)"],
                    ["secretaryGeneralNameUr", "Secretary General (Urdu)"],
                    ["viceChairmanNameEn", "Vice Chairman (English)"],
                    ["viceChairmanNameUr", "Vice Chairman (Urdu)"],
                    ["secretaryInformationNameEn", "Secretary Information (English)"],
                    ["secretaryInformationNameUr", "Secretary Information (Urdu)"],
                    ["punjabPresidentNameEn", "Punjab President (English)"],
                    ["punjabPresidentNameUr", "Punjab President (Urdu)"],
                    ["sindhPresidentNameEn", "Sindh President (English)"],
                    ["sindhPresidentNameUr", "Sindh President (Urdu)"],
                    ["kpPresidentNameEn", "Khyber Pakhtunkhwa President (English)"],
                    ["kpPresidentNameUr", "Khyber Pakhtunkhwa President (Urdu)"],
                    ["balochistanPresidentNameEn", "Balochistan President (English)"],
                    ["balochistanPresidentNameUr", "Balochistan President (Urdu)"],
                  ] as const).map(([key, label]) => (
                    <div key={key}>
                      <label className="block font-bold text-gray-700 mb-1">{label}</label>
                      <input
                        type="text"
                        value={siteSettings[key]}
                        onChange={(e) => setSiteSettings({ ...siteSettings, [key]: e.target.value })}
                        className="w-full rounded-lg border border-gray-300 p-2.5 font-mono focus:outline-none"
                      />
                    </div>
                  ))}

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Office Address (English)</label>
                    <input
                      type="text"
                      value={siteSettings.officeAddressEn}
                      onChange={(e) => setSiteSettings({ ...siteSettings, officeAddressEn: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-2.5 font-mono focus:outline-none"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <label className="block font-bold text-gray-700 mb-1">Office Address (Urdu)</label>
                    <input
                      type="text"
                      value={siteSettings.officeAddressUr}
                      onChange={(e) => setSiteSettings({ ...siteSettings, officeAddressUr: e.target.value })}
                      className="w-full rounded-lg border border-gray-300 p-2.5 font-mono focus:outline-none"
                    />
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100 flex justify-end">
                  <button
                    type="button"
                    onClick={handleSaveSiteSettings}
                    className="rounded-lg bg-adal-green-900 px-5 py-2 text-xs font-bold text-adal-gold-300 hover:bg-adal-green-800 shadow"
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
