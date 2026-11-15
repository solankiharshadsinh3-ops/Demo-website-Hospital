import heroDentalSuite from '../assets/images/hero_dental_suite_1794723423189.jpg';
import aboutClinicLounge from '../assets/images/about_clinic_lounge_1794723424181.jpg';
import treatmentCosmeticSmile from '../assets/images/treatment_cosmetic_smile_1794723423596.jpg';
import treatmentDentalTech from '../assets/images/treatment_dental_tech_1794723424710.jpg';
import doctorElenaVance from '../assets/images/doctor_elena_vance_1794723425442.jpg';
import doctorVikramSingh from '../assets/images/doctor_arjun_mehta_1794723424753.jpg';
import doctorClaireLaurent from '../assets/images/doctor_claire_laurent_1794723425794.jpg';
import gallerySmileTransformation from '../assets/images/gallery_smile_transformation_1794723425369.jpg';
import galleryVeneersPortrait from '../assets/images/gallery_veneers_portrait_1794723427510.jpg';
import galleryAlignerCare from '../assets/images/gallery_aligner_care_1794723426766.jpg';

export const MEDIA = {
  heroSuite: heroDentalSuite,
  aboutLounge: aboutClinicLounge,
  cosmeticSmile: treatmentCosmeticSmile,
  dentalTech: treatmentDentalTech,
  doctors: {
    elena: doctorElenaVance,
    vikram: doctorVikramSingh,
    claire: doctorClaireLaurent,
  },
  gallery: {
    cosmeticSmile: treatmentCosmeticSmile,
    veneersPortrait: galleryVeneersPortrait,
    smileMan: gallerySmileTransformation,
    alignerCare: galleryAlignerCare,
    dentalTech: treatmentDentalTech,
  },
} as const;
