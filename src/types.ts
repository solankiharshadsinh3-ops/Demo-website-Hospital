export type Language = 'en' | 'gu' | 'hi';

export type TreatmentCategory = 'all' | 'cosmetic' | 'restorative' | 'orthodontics' | 'preventive';

export type GalleryCategory =
  | 'all'
  | 'smile-makeover'
  | 'teeth-whitening'
  | 'dental-veneers'
  | 'orthodontics'
  | 'dental-implants';

export interface TreatmentItem {
  id: string;
  number: string;
  category: Exclude<TreatmentCategory, 'all'>;
  name: string;
  shortDescription: string;
  detailedOverview: string;
  whatToExpect: string[];
  typicalVisit: string;
  iconName: string;
}

export interface DoctorItem {
  id: string;
  name: string;
  specialization: string;
  qualification: string;
  experienceNote: string;
  languages: string;
  intro: string;
  fullBio: string;
  focusAreas: string[];
  imageKey: 'elena' | 'vikram' | 'claire';
}

export interface GalleryItem {
  id: string;
  category: Exclude<GalleryCategory, 'all'>;
  categoryLabel: string;
  title: string;
  caption: string;
  note: string;
  imageKey: 'cosmeticSmile' | 'veneersPortrait' | 'smileMan' | 'alignerCare' | 'dentalTech';
}

export interface TestimonialItem {
  id: string;
  patientName: string;
  visitType: string;
  rating: number;
  quote: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface AppointmentFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
