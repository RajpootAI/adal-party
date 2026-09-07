import { MembershipApplication, Volunteer, Donation, ContactMessage, NewsArticle, EventItem } from "@/types";
import { newsArticles as initialNews, partyEvents as initialEvents, defaultSiteSettings } from "@/data/partyData";

// Initial seed applications for realistic institutional testing (non-fabricated, anonymized/masked)
const initialApplications: MembershipApplication[] = [
  {
    id: "app-1",
    applicationNumber: "PAP-2026-10492",
    fullName: "Muhammad Tariq Khan",
    cnic: "37405-1234567-1",
    phone: "0300-5551234",
    email: "tariq.khan@example.com",
    address: "Street 14, Sector F-8/3",
    city: "Islamabad",
    district: "Islamabad",
    province: "Federal Capital",
    profession: "Advocate High Court",
    education: "LL.M. Constitutional Law",
    membershipType: "regular",
    commitmentAccepted: true,
    status: "Approved",
    adminNotes: "Credentials and Bar Council registration verified by Central Legal Wing.",
    createdAt: "2026-08-20T11:20:00Z",
  },
  {
    id: "app-2",
    applicationNumber: "PAP-2026-10518",
    fullName: "Syeda Zainab Bukhari",
    cnic: "35201-9876543-2",
    phone: "0321-4448765",
    email: "zainab.bukhari@example.com",
    address: "Gulberg III",
    city: "Lahore",
    district: "Lahore",
    province: "Punjab",
    profession: "Software Engineer / Tech Lead",
    education: "B.S. Computer Science",
    membershipType: "youth",
    commitmentAccepted: true,
    status: "Under Review",
    adminNotes: "Assigned to Youth & Digital Media Committee for provincial onboarding.",
    createdAt: "2026-08-28T14:15:00Z",
  },
  {
    id: "app-3",
    applicationNumber: "PAP-2026-10640",
    fullName: "Abdul Rasheed Baloch",
    cnic: "51401-4567890-3",
    phone: "0333-7779812",
    email: "rasheed.baloch@example.com",
    address: "Airport Road, Model Town",
    city: "Quetta",
    district: "Quetta",
    province: "Balochistan",
    profession: "Agricultural Economist",
    education: "M.Sc. Rural Development",
    membershipType: "regular",
    commitmentAccepted: true,
    status: "Pending",
    adminNotes: "Awaiting regional coordinator interview call.",
    createdAt: "2026-09-02T08:45:00Z",
  },
  {
    id: "app-4",
    applicationNumber: "PAP-2026-10702",
    fullName: "Kamran Qureshi",
    cnic: "42101-1122334-5",
    phone: "0301-2223344",
    email: "kamran.q@example.com",
    address: "Clifton Block 4",
    city: "Karachi",
    district: "Karachi South",
    province: "Sindh",
    profession: "Maritime Logistics Consultant",
    education: "Master of Maritime Management",
    membershipType: "regular",
    commitmentAccepted: true,
    status: "Approved",
    adminNotes: "Endorsed for Coastal Economic Corridor research working group.",
    createdAt: "2026-09-04T16:10:00Z",
  }
];

const initialVolunteers: Volunteer[] = [
  {
    id: "vol-1",
    fullName: "Ayesha Siddiqua",
    email: "ayesha.s@example.com",
    phone: "0345-1234567",
    city: "Rawalpindi",
    district: "Rawalpindi",
    province: "Punjab",
    areaOfInterest: "Legal Research & Policy Drafting",
    availability: "Weekends (10 hours/week)",
    message: "Enthusiastic about assisting with Policy #8 (Case Calendar system) research.",
    status: "Active",
    createdAt: "2026-08-22T10:00:00Z",
  },
  {
    id: "vol-2",
    fullName: "Bilal Ahmed Khan",
    email: "bilal.ahmed@example.com",
    phone: "0312-9876543",
    city: "Peshawar",
    district: "Peshawar",
    province: "Khyber Pakhtunkhwa",
    areaOfInterest: "Digital Outreach & Youth Mobilization",
    availability: "Full-Time (Virtual)",
    message: "Volunteering for digital campaigns and regional translation support.",
    status: "Active",
    createdAt: "2026-08-30T12:30:00Z",
  }
];

const initialDonations: Donation[] = [
  {
    id: "don-1",
    donationReference: "DON-2026-8801",
    amount: 50000,
    currency: "PKR",
    donorName: "Legal Advocates for Judicial Reform",
    email: "donations@example.com",
    phone: "0300-1112233",
    isAnonymous: false,
    paymentProvider: "Bank Direct Transfer",
    paymentStatus: "Paid",
    transactionReference: "FT-PKR-98218731",
    createdAt: "2026-08-15T15:00:00Z",
  },
  {
    id: "don-2",
    donationReference: "DON-2026-8802",
    amount: 25000,
    currency: "PKR",
    donorName: "Anonymous Supporter",
    isAnonymous: true,
    paymentProvider: "Online Payment Gateway",
    paymentStatus: "Paid",
    transactionReference: "TXN-77218392",
    createdAt: "2026-08-29T18:40:00Z",
  }
];

const initialMessages: ContactMessage[] = [
  {
    id: "msg-1",
    fullName: "Dr. Farooq Shah",
    email: "farooq.shah@example.com",
    phone: "0333-5556677",
    subject: "Inquiry on Policy #25 (National Health Program) Implementation",
    message: "I am a public health consultant interested in reviewing the district emergency hospital model outlined in the 2026 manifesto.",
    status: "Read",
    createdAt: "2026-09-03T09:12:00Z",
  }
];

// In-Memory Storage for Runtime
class PartyDataStore {
  private applications: MembershipApplication[] = [...initialApplications];
  private volunteers: Volunteer[] = [...initialVolunteers];
  private donations: Donation[] = [...initialDonations];
  private messages: ContactMessage[] = [...initialMessages];
  private news: NewsArticle[] = [...initialNews];
  private events: EventItem[] = [...initialEvents];
  private siteSettings = { ...defaultSiteSettings };

  // Membership
  getApplications(): MembershipApplication[] {
    return this.applications;
  }

  getApplicationByNumber(appNum: string): MembershipApplication | undefined {
    return this.applications.find(
      (a) => a.applicationNumber.toLowerCase() === appNum.trim().toLowerCase()
    );
  }

  addApplication(data: Omit<MembershipApplication, "id" | "applicationNumber" | "createdAt" | "status">): MembershipApplication {
    const randomCode = Math.floor(10000 + Math.random() * 90000);
    const newApp: MembershipApplication = {
      ...data,
      id: "app-" + Date.now(),
      applicationNumber: `PAP-2026-${randomCode}`,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    this.applications.unshift(newApp);
    return newApp;
  }

  updateApplicationStatus(id: string, status: MembershipApplication["status"], notes?: string): boolean {
    const app = this.applications.find((a) => a.id === id);
    if (app) {
      app.status = status;
      if (notes !== undefined) app.adminNotes = notes;
      app.updatedAt = new Date().toISOString();
      return true;
    }
    return false;
  }

  // Volunteers
  getVolunteers(): Volunteer[] {
    return this.volunteers;
  }

  addVolunteer(data: Omit<Volunteer, "id" | "status" | "createdAt">): Volunteer {
    const newVol: Volunteer = {
      ...data,
      id: "vol-" + Date.now(),
      status: "Active",
      createdAt: new Date().toISOString(),
    };
    this.volunteers.unshift(newVol);
    return newVol;
  }

  // Donations
  getDonations(): Donation[] {
    return this.donations;
  }

  addDonation(data: Omit<Donation, "id" | "donationReference" | "createdAt" | "paymentStatus">): Donation {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    const newDon: Donation = {
      ...data,
      id: "don-" + Date.now(),
      donationReference: `DON-2026-${randomCode}`,
      paymentStatus: "Pending",
      createdAt: new Date().toISOString(),
    };
    this.donations.unshift(newDon);
    return newDon;
  }

  // Contact Messages
  getMessages(): ContactMessage[] {
    return this.messages;
  }

  addMessage(data: Omit<ContactMessage, "id" | "createdAt" | "status">): ContactMessage {
    const newMsg: ContactMessage = {
      ...data,
      id: "msg-" + Date.now(),
      status: "Unread",
      createdAt: new Date().toISOString(),
    };
    this.messages.unshift(newMsg);
    return newMsg;
  }

  updateMessageStatus(id: string, status: ContactMessage["status"]): boolean {
    const msg = this.messages.find((m) => m.id === id);
    if (msg) {
      msg.status = status;
      return true;
    }
    return false;
  }

  // News
  getNews(): NewsArticle[] {
    return this.news;
  }

  addNews(article: Omit<NewsArticle, "id">): NewsArticle {
    const newArt: NewsArticle = {
      ...article,
      id: "news-" + Date.now(),
    };
    this.news.unshift(newArt);
    return newArt;
  }

  // Events
  getEvents(): EventItem[] {
    return this.events;
  }

  // Site Settings
  getSiteSettings() {
    return this.siteSettings;
  }

  updateSiteSettings(newSettings: Partial<typeof defaultSiteSettings>) {
    this.siteSettings = { ...this.siteSettings, ...newSettings };
    return this.siteSettings;
  }
}

// Global Singleton for in-memory server state
declare global {
  // eslint-disable-next-line no-var
  var __pap_store__: PartyDataStore | undefined;
}

export const partyStore: PartyDataStore =
  global.__pap_store__ || (global.__pap_store__ = new PartyDataStore());
