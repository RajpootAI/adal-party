export type Language = "en" | "ur";

export interface ManifestoPolicy {
  number: number;
  slug: string;
  titleUr: string;
  titleEn: string;
  category: string;
  categoryUr: string;
  summaryUr: string;
  summaryEn: string;
  fullTextUr: string;
  fullTextEn: string;
  keyPointsUr: string[];
  keyPointsEn: string[];
  officialTerms?: string[];
  icon: string;
}

export interface ManifestoCategory {
  id: string;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  descriptionUr: string;
  policyNumbers: number[];
}

export interface MembershipApplication {
  id: string;
  applicationNumber: string; // e.g. PAP-2026-10823
  fullName: string;
  cnic: string;
  phone: string;
  mobile?: string;
  email?: string;
  address: string;
  city?: string;
  district: string;
  province: string;
  profession?: string;
  education?: string;
  membershipType: "regular" | "youth" | "overseas";
  commitmentAccepted: boolean;
  signatureReference?: string;
  status: "Pending" | "Under Review" | "Approved" | "Rejected" | "Contact Required";
  adminNotes?: string;
  createdAt: string;
  updatedAt?: string;
}

export interface Volunteer {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  city: string;
  district: string;
  province: string;
  areaOfInterest: string;
  availability: string;
  message?: string;
  status: "Active" | "Contacted" | "Archived";
  createdAt: string;
}

export interface Donation {
  id: string;
  donationReference: string;
  amount: number;
  currency: string;
  donorName?: string;
  email?: string;
  phone?: string;
  isAnonymous: boolean;
  paymentProvider: string;
  paymentStatus: "Pending" | "Paid" | "Failed" | "Refunded";
  transactionReference?: string;
  createdAt: string;
}

export interface ContactMessage {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: "Unread" | "Read" | "In Progress" | "Resolved";
  createdAt: string;
}

export interface LeadershipMember {
  id: string;
  nameEn: string;
  nameUr: string;
  designationEn: string;
  designationUr: string;
  tier: "central" | "provincial" | "advisory";
  bioEn: string;
  bioUr: string;
  photoUrl?: string;
  order: number;
  isPlaceholder: boolean;
}

export interface NewsArticle {
  id: string;
  slug: string;
  titleEn: string;
  titleUr: string;
  summaryEn: string;
  summaryUr: string;
  contentEn: string;
  contentUr: string;
  category: string;
  author: string;
  publishedAt: string;
  coverImage: string;
  isFeatured: boolean;
  status: "Published" | "Draft" | "Archived";
}

export interface EventItem {
  id: string;
  slug: string;
  titleEn: string;
  titleUr: string;
  descriptionEn: string;
  descriptionUr: string;
  eventDate: string;
  eventTime: string;
  locationEn: string;
  locationUr: string;
  city: string;
  status: "Upcoming" | "Ongoing" | "Completed";
  coverImage?: string;
}

export interface PressRelease {
  id: string;
  releaseNumber: string;
  titleEn: string;
  titleUr: string;
  summaryEn: string;
  summaryUr: string;
  contentEn: string;
  contentUr: string;
  publishedDate: string;
  pdfAttachment?: string;
}

export interface MediaItem {
  id: string;
  titleEn: string;
  titleUr: string;
  mediaType: "photo" | "video" | "speech" | "document";
  url: string;
  thumbnailUrl?: string;
  date: string;
}
