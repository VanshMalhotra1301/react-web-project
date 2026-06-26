/* ======================================================
   Global TypeScript Interfaces — Malhotra Classes
   ====================================================== */

// ── Course ──
export interface Course {
  _id: string;
  title: string;
  slug: string;
  board: CourseBoard;
  classLevel: string;
  subject?: string;
  category: CourseCategory;
  description: string;
  shortDescription: string;
  benefits: string[];
  curriculum: CurriculumSection[];
  duration: string;
  eligibility: string;
  learningOutcomes: string[];
  faculty: FacultyRef[];
  faqs: FAQ[];
  reviews: Review[];
  fees?: FeeInfo;
  thumbnail?: string;
  seo: SEOMeta;
  relatedCourses: string[];
  isActive: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export type CourseBoard = 'CBSE' | 'HBSE' | 'ICSE' | 'All';
export type CourseCategory =
  | 'class'
  | 'board'
  | 'competitive'
  | 'olympiad'
  | 'subject'
  | 'entrance';

export interface CurriculumSection {
  title: string;
  topics: string[];
}

export interface FeeInfo {
  amount: number;
  currency: string;
  period: string;
  discount?: number;
  emi?: boolean;
}

// ── Faculty ──
export interface Faculty {
  _id: string;
  name: string;
  slug: string;
  photo: string;
  designation: string;
  department: string;
  qualifications: string[];
  experience: string;
  specialization: string[];
  bio: string;
  courses: string[];
  achievements: string[];
  socialLinks?: SocialLinks;
  isActive: boolean;
  order: number;
}

export interface FacultyRef {
  _id: string;
  name: string;
  photo: string;
  designation: string;
}

export interface SocialLinks {
  linkedin?: string;
  twitter?: string;
  youtube?: string;
}

// ── Blog ──
export interface Blog {
  _id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  thumbnail: string;
  featuredImage: string;
  seo: SEOMeta;
  status: 'draft' | 'published' | 'scheduled';
  scheduledDate?: string;
  readingTime: number;
  tableOfContents: TOCItem[];
  relatedArticles: string[];
  views: number;
  isFeatured: boolean;
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
}

export interface BlogAuthor {
  _id: string;
  name: string;
  photo: string;
  bio: string;
}

export interface TOCItem {
  id: string;
  title: string;
  level: number;
}

// ── Testimonial ──
export interface Testimonial {
  _id: string;
  studentName: string;
  photo?: string;
  course: string;
  batch: string;
  rating: number;
  text: string;
  videoUrl?: string;
  achievement?: string;
  isFeatured: boolean;
  isActive: boolean;
  createdAt: string;
}

// ── Gallery ──
export interface GalleryItem {
  _id: string;
  title: string;
  images: GalleryImage[];
  category: GalleryCategory;
  date: string;
  description?: string;
}

export interface GalleryImage {
  url: string;
  alt: string;
  width: number;
  height: number;
}

export type GalleryCategory =
  | 'campus'
  | 'events'
  | 'celebrations'
  | 'classroom'
  | 'achievements'
  | 'sports';

// ── FAQ ──
export interface FAQ {
  _id?: string;
  question: string;
  answer: string;
  category?: string;
  order?: number;
}

// ── Review ──
export interface Review {
  studentName: string;
  rating: number;
  text: string;
  date: string;
  verified?: boolean;
}

// ── Lead / Enquiry ──
export interface Enquiry {
  _id: string;
  name: string;
  email: string;
  phone: string;
  courseInterest?: string;
  message?: string;
  source: LeadSource;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: string;
}

export type LeadSource =
  | 'book-demo'
  | 'contact-form'
  | 'callback'
  | 'newsletter'
  | 'admission'
  | 'brochure'
  | 'whatsapp';

// ── Admission ──
export interface Admission {
  _id: string;
  studentName: string;
  parentName: string;
  email: string;
  phone: string;
  alternatePhone?: string;
  dateOfBirth: string;
  currentClass: string;
  previousSchool: string;
  board: CourseBoard;
  courseApplied: string;
  address: string;
  city: string;
  pincode: string;
  howDidYouHear: string;
  status: 'pending' | 'reviewed' | 'accepted' | 'rejected';
  createdAt: string;
}

// ── Study Material ──
export interface StudyMaterial {
  _id: string;
  title: string;
  subject: string;
  classLevel: string;
  type: 'notes' | 'worksheet' | 'paper' | 'solution';
  fileUrl: string;
  fileSize: string;
  downloadCount: number;
  isActive: boolean;
  createdAt: string;
}

// ── Announcement ──
export interface Announcement {
  _id: string;
  title: string;
  content: string;
  type: 'general' | 'admission' | 'exam' | 'result' | 'event';
  isActive: boolean;
  startDate: string;
  endDate?: string;
  createdAt: string;
}

// ── Result ──
export interface StudentResult {
  _id: string;
  studentName: string;
  photo?: string;
  exam: string;
  year: string;
  score: string;
  rank?: string;
  board?: string;
  classLevel: string;
  achievement?: string;
  isFeatured: boolean;
}

// ── SEO ──
export interface SEOMeta {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  keywords?: string[];
  noIndex?: boolean;
}

export interface SEOSettings {
  defaultTitle: string;
  defaultDescription: string;
  siteUrl: string;
  ogImage: string;
  ga4Id?: string;
  gtmId?: string;
  metaPixelId?: string;
  linkedinInsightId?: string;
  gscVerification?: string;
}

// ── Homepage Config ──
export interface HomepageConfig {
  heroTitle: string;
  heroSubtitle: string;
  heroCTA: string;
  heroImage?: string;
  counters: CounterItem[];
  announcementBar?: string;
  featuredCourses: string[];
  featuredFaculty: string[];
  featuredTestimonials: string[];
}

export interface CounterItem {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
}

// ── API Response ──
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  pagination?: Pagination;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

// ── Auth ──
export interface AuthState {
  user: AdminUser | null;
  token: string | null;
  isAuthenticated: boolean;
}

export interface AdminUser {
  _id: string;
  name: string;
  email: string;
  role: 'admin' | 'editor';
}

export interface LoginCredentials {
  email: string;
  password: string;
}

// ── Navigation ──
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
  isNew?: boolean;
  icon?: string;
}
