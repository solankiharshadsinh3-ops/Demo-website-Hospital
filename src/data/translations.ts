import {
  DoctorItem,
  FaqItem,
  GalleryCategory,
  GalleryItem,
  Language,
  TestimonialItem,
  TreatmentCategory,
  TreatmentItem,
} from '../types';

export interface SiteContent {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    demoNote: string;
  };
  nav: {
    home: string;
    about: string;
    treatments: string;
    doctors: string;
    gallery: string;
    reviews: string;
    contact: string;
    bookCta: string;
    phoneLabel: string;
    whatsappLabel: string;
    menuOpen: string;
    menuClose: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    floatingLabel: string;
    floatingTitle: string;
    floatingText: string;
  };
  trust: {
    demoCaption: string;
    items: Array<{
      metric: string;
      title: string;
      description: string;
    }>;
  };
  about: {
    eyebrow: string;
    headline: string;
    lead: string;
    paragraphs: string[];
    pillars: Array<{
      title: string;
      detail: string;
    }>;
    cta: string;
    imageCaption: string;
  };
  treatments: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    disclaimer: string;
    learnMore: string;
    bookThis: string;
    typicalVisitLabel: string;
    whatToExpectLabel: string;
    closeModal: string;
    categories: Record<TreatmentCategory, string>;
    items: TreatmentItem[];
  };
  doctors: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    demoBanner: string;
    viewProfile: string;
    languagesLabel: string;
    focusLabel: string;
    bookWithDoctor: string;
    items: DoctorItem[];
  };
  gallery: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    demoNotice: string;
    zoomHint: string;
    prevLabel: string;
    nextLabel: string;
    closeLabel: string;
    categories: Record<GalleryCategory, string>;
    items: GalleryItem[];
  };
  whyChooseUs: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    items: Array<{
      number: string;
      title: string;
      description: string;
    }>;
  };
  testimonials: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    demoNotice: string;
    prevLabel: string;
    nextLabel: string;
    items: TestimonialItem[];
  };
  appointment: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    demoNotice: string;
    whatsappTitle: string;
    whatsappSubtitle: string;
    whatsappButton: string;
    form: {
      nameLabel: string;
      namePlaceholder: string;
      phoneLabel: string;
      phonePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      treatmentLabel: string;
      treatmentPlaceholder: string;
      dateLabel: string;
      timeLabel: string;
      timePlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      timeSlots: string[];
      errors: {
        nameRequired: string;
        phoneInvalid: string;
        emailInvalid: string;
        treatmentRequired: string;
        dateRequired: string;
        timeRequired: string;
      };
      successTitle: string;
      successMessage: string;
      resetButton: string;
    };
  };
  faq: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    educationalNote: string;
    items: FaqItem[];
  };
  contact: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    demoNotice: string;
    details: {
      addressLabel: string;
      addressValue: string;
      phoneLabel: string;
      phoneValue: string;
      emailLabel: string;
      emailValue: string;
      hoursLabel: string;
      hoursValue: string[];
    };
    whatsappCta: string;
    map: {
      title: string;
      badge: string;
      district: string;
      directionsNote: string;
      zoomIn: string;
      zoomOut: string;
      centerPin: string;
      landmarks: string[];
    };
    form: {
      title: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      subjectLabel: string;
      subjectPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submitButton: string;
      successMessage: string;
      errors: {
        nameRequired: string;
        emailInvalid: string;
        messageRequired: string;
      };
    };
  };
  footer: {
    description: string;
    quickLinksTitle: string;
    treatmentsTitle: string;
    contactTitle: string;
    followTitle: string;
    demoBadge: string;
    privacyLink: string;
    termsLink: string;
    copyright: string;
    creditPrefix: string;
    creditBrand: string;
  };
  legal: {
    privacyTitle: string;
    privacyBody: string[];
    termsTitle: string;
    termsBody: string[];
    close: string;
  };
}

export const TRANSLATIONS: Record<Language, SiteContent> = {
  en: {
    brand: {
      name: 'Lumière Dental Studio',
      shortName: 'Lumière',
      tagline: 'Beautiful Smiles. Exceptional Care.',
      demoNote: 'Demonstration Showcase · Fictional Clinic Data',
    },
    nav: {
      home: 'Home',
      about: 'About Us',
      treatments: 'Treatments',
      doctors: 'Our Doctors',
      gallery: 'Smile Gallery',
      reviews: 'Patient Reviews',
      contact: 'Contact',
      bookCta: 'Book Appointment',
      phoneLabel: 'Demo Phone Inquiry',
      whatsappLabel: 'WhatsApp Demo Inquiry',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
    },
    hero: {
      eyebrow: 'Lumière Dental Studio · Demonstration Showcase',
      headline: 'Your Smile Deserves Exceptional Care.',
      subheadline:
        'Experience modern dentistry, personalized treatments, and compassionate care designed to keep your smile healthy and beautiful.',
      primaryCta: 'Book Your Appointment',
      secondaryCta: 'Explore Treatments',
      floatingLabel: 'Studio Philosophy',
      floatingTitle: 'Calm, Precision-Led Dentistry',
      floatingText: 'Private sunlit suites designed for unhurried consultations and gentle care.',
    },
    trust: {
      demoCaption: 'Illustrative Demonstration Highlights · Fictional Clinic Overview',
      items: [
        {
          metric: '4 Specialists',
          title: 'Experienced Dental Professionals',
          description: 'Multidisciplinary clinicians focused on restorative, cosmetic, and preventive care.',
        },
        {
          metric: '3D Digital',
          title: 'Modern Dental Technology',
          description: 'Digital intraoral scanning and guided imaging for thoughtful treatment planning.',
        },
        {
          metric: '1-on-1 Care',
          title: 'Personalized Patient Care',
          description: 'Individualized consultation plans tailored around your comfort and oral health goals.',
        },
        {
          metric: 'Calm Suites',
          title: 'Comfortable Treatment Experience',
          description: 'Quiet architectural rooms with unhurried scheduling and gentle clinical protocols.',
        },
      ],
    },
    about: {
      eyebrow: 'About Our Dental Studio',
      headline: 'Redefining the Dental Care Experience.',
      lead: 'Thoughtful clinical precision inside an atmosphere shaped by calm architecture, natural light, and attentive hospitality.',
      paragraphs: [
        'At Lumière Dental Studio, every visit begins with a calm conversation rather than a rushed checklist. Our fictional flagship clinic concept blends modern digital diagnostics with serene architectural interiors to put anxious and returning guests at ease.',
        'From dedicated sterilization workflows to gentle, minimally invasive techniques, every room is organized around patient comfort, clear communication, and consistent hygiene practices.',
      ],
      pillars: [
        {
          title: 'Dedicated Sterilization Suite',
          detail: 'Structured instrument processing and single-use barrier protocols across every operatory.',
        },
        {
          title: 'Modern Digital Equipment',
          detail: 'Low-radiation digital imaging and optical impression scanning for comfortable evaluations.',
        },
        {
          title: 'Patient-First Philosophy',
          detail: 'Transparent step-by-step explanations before any dental procedure begins.',
        },
      ],
      cta: 'Discover Our Clinic',
      imageCaption: 'Patient Lounge & Concierge Reception · Illustrative Studio Concept',
    },
    treatments: {
      eyebrow: 'Dental Treatments & Services',
      headline: 'Comprehensive Dentistry Under One Roof.',
      subtitle:
        'Explore twelve restorative, cosmetic, orthodontic, and preventive dental care services presented for demonstration purposes.',
      disclaimer:
        'Educational overview only. Individual suitability and treatment options are always determined after an in-person dental examination.',
      learnMore: 'Learn More',
      bookThis: 'Request Consultation',
      typicalVisitLabel: 'Typical Consultation Scope',
      whatToExpectLabel: 'What to Expect',
      closeModal: 'Close details',
      categories: {
        all: 'All Treatments',
        cosmetic: 'Cosmetic',
        restorative: 'Restorative',
        orthodontics: 'Orthodontics',
        preventive: 'Preventive & Family',
      },
      items: [
        {
          id: 'general-dentistry',
          number: '01',
          category: 'preventive',
          name: 'General Dentistry',
          shortDescription:
            'Comprehensive oral examinations, digital diagnostics, and gentle everyday dental care for lasting oral wellness.',
          detailedOverview:
            'General dentistry forms the foundation of lifelong oral health. Visits focus on thorough examinations of teeth, gums, and bite alignment along with conservative restorative care when needed.',
          whatToExpect: [
            'Detailed visual and digital examination of teeth and soft tissues',
            'Discussion of daily hygiene habits and preventive priorities',
            'Conservative tooth-colored fillings or routine maintenance planning',
          ],
          typicalVisit: '45–60 min consultation',
          iconName: 'Stethoscope',
        },
        {
          id: 'teeth-whitening',
          number: '02',
          category: 'cosmetic',
          name: 'Teeth Whitening',
          shortDescription:
            'Clinically supervised brightening options designed to gently reduce surface staining while respecting enamel sensitivity.',
          detailedOverview:
            'Professional whitening assessments evaluate the cause of tooth discoloration before recommending supervised in-studio or custom take-home brightening protocols tailored to tooth sensitivity.',
          whatToExpect: [
            'Enamel and gum health check prior to whitening application',
            'Desensitizing preparation for comfortable treatment',
            'Guidance on maintaining brightness through everyday habits',
          ],
          typicalVisit: '60 min studio session',
          iconName: 'Sun',
        },
        {
          id: 'dental-implants',
          number: '03',
          category: 'restorative',
          name: 'Dental Implants',
          shortDescription:
            'Thoughtfully planned tooth replacement solutions crafted to support natural bite function and facial balance.',
          detailedOverview:
            'Dental implants replace missing tooth roots with biocompatible titanium or ceramic posts paired with custom restorations. Digital 3D imaging supports careful planning based on bone volume and gum health.',
          whatToExpect: [
            '3D diagnostic imaging and comprehensive bite evaluation',
            'Phased healing timeline reviewed clearly in advance',
            'Custom-shaded crown crafted to blend naturally with neighboring teeth',
          ],
          typicalVisit: 'Staged care plan',
          iconName: 'Layers',
        },
        {
          id: 'smile-makeover',
          number: '04',
          category: 'cosmetic',
          name: 'Smile Makeover',
          shortDescription:
            'Coordinated cosmetic and restorative planning combining digital smile previews with conservative aesthetic enhancements.',
          detailedOverview:
            'A smile makeover integrates multiple disciplines—such as whitening, alignment, bonding, or porcelain restorations—guided by facial proportions, speech comfort, and natural tooth anatomy.',
          whatToExpect: [
            'Digital photography and smile proportion assessment',
            'Collaborative mock-up review before committing to treatment',
            'Sequenced care timeline prioritizing tooth preservation',
          ],
          typicalVisit: 'Multi-step planning',
          iconName: 'Sparkles',
        },
        {
          id: 'root-canal',
          number: '05',
          category: 'restorative',
          name: 'Root Canal Treatment',
          shortDescription:
            'Gentle endodontic care aimed at relieving deep tooth discomfort and preserving your natural tooth structure.',
          detailedOverview:
            'Modern endodontic techniques use magnification, rotary instruments, and effective local anesthesia to clean infected inner canals calmly and comfortably, helping save natural teeth.',
          whatToExpect: [
            'Targeted diagnostic imaging and comfort-first numbing',
            'Careful cleaning and sealing of the internal root system',
            'Recommendations for protective restoration such as a crown',
          ],
          typicalVisit: '60–90 min visit',
          iconName: 'HeartPulse',
        },
        {
          id: 'orthodontics-braces',
          number: '06',
          category: 'orthodontics',
          name: 'Orthodontics & Braces',
          shortDescription:
            'Structured alignment systems using sleek ceramic or low-profile brackets to guide teeth and bite harmony.',
          detailedOverview:
            'Fixed orthodontic appliances remain a dependable approach for complex crowding, spacing, and bite corrections across teens and adults, supported by regular progress check-ins.',
          whatToExpect: [
            'Digital models and orthodontic bite analysis',
            'Choice of discreet ceramic or refined metallic brackets',
            'Periodic adjustments and post-treatment retention guidance',
          ],
          typicalVisit: 'Ongoing alignment program',
          iconName: 'SlidersHorizontal',
        },
        {
          id: 'invisalign-aligners',
          number: '07',
          category: 'orthodontics',
          name: 'Invisalign & Clear Aligners',
          shortDescription:
            'Removable, nearly invisible custom aligner trays crafted from 3D digital scans without traditional brackets.',
          detailedOverview:
            'Clear aligner therapy uses a sequence of custom-molded transparent trays to gradually guide teeth into balanced positions while allowing effortless brushing, flossing, and dining.',
          whatToExpect: [
            'Impression-free 3D optical intraoral scan',
            'Digital preview of projected tooth movement stages',
            'Removable trays worn daily with scheduled progress reviews',
          ],
          typicalVisit: 'Digital scan + check-ins',
          iconName: 'Scan',
        },
        {
          id: 'dental-veneers',
          number: '08',
          category: 'cosmetic',
          name: 'Dental Veneers',
          shortDescription:
            'Ultra-thin custom ceramic or composite facings designed to refine tooth shape, symmetry, and surface harmony.',
          detailedOverview:
            'Hand-layered porcelain or composite veneers address worn edges, minor spacing, and stubborn intrinsic discoloration while preserving healthy underlying enamel wherever possible.',
          whatToExpect: [
            'Detailed shade matching and facial harmony consultation',
            'Conservative tooth preparation and temporary preview phase',
            'Precision bonding of custom laboratory-crafted veneers',
          ],
          typicalVisit: '2–3 studio visits',
          iconName: 'Gem',
        },
        {
          id: 'crowns-bridges',
          number: '09',
          category: 'restorative',
          name: 'Crowns & Bridges',
          shortDescription:
            'Custom ceramic restorations engineered to reinforce weakened teeth or bridge gaps with natural translucency.',
          detailedOverview:
            'All-ceramic and zirconia crowns protect structurally compromised teeth, while precision bridges span missing spaces cleanly—each digitally scanned for a comfortable bite.',
          whatToExpect: [
            'Digital intraoral scanning for accurate margin fit',
            'Natural shade selection matched to surrounding enamel',
            'Balanced bite verification upon final placement',
          ],
          typicalVisit: '2 studio visits',
          iconName: 'Crown',
        },
        {
          id: 'pediatric-dentistry',
          number: '10',
          category: 'preventive',
          name: 'Pediatric Dentistry',
          shortDescription:
            'Warm, patience-led dental visits tailored for children and teens to build positive lifelong oral care habits.',
          detailedOverview:
            'Early positive experiences shape how children view dental care for decades. Our gentle approach introduces instruments calmly while monitoring developing teeth and jaws.',
          whatToExpect: [
            'Unhurried tell-show-do introduction for young visitors',
            'Growth tracking, gentle cleanings, and protective sealants',
            'Practical home-care coaching for parents and children',
          ],
          typicalVisit: '30–45 min gentle visit',
          iconName: 'Smile',
        },
        {
          id: 'gum-treatment',
          number: '11',
          category: 'preventive',
          name: 'Gum Treatment',
          shortDescription:
            'Focused periodontal care aimed at supporting healthy gum tissue, reducing inflammation, and protecting tooth support.',
          detailedOverview:
            'Healthy gums anchor every smile. Periodontal evaluations assess pocket depth and tissue wellness before offering gentle deep cleaning and personalized maintenance schedules.',
          whatToExpect: [
            'Comprehensive periodontal mapping and tissue evaluation',
            'Ultrasonic and hand scaling with comfort options',
            'Tailored supportive maintenance intervals',
          ],
          typicalVisit: '45–60 min care visit',
          iconName: 'Activity',
        },
        {
          id: 'preventive-care',
          number: '12',
          category: 'preventive',
          name: 'Preventive Dental Care',
          shortDescription:
            'Proactive cleanings, enamel protection, and routine screenings focused on preserving natural teeth long term.',
          detailedOverview:
            'Preventive visits detect subtle changes early—long before discomfort arises—through thorough plaque biofilm removal, oral wellness screenings, and tailored daily care guidance.',
          whatToExpect: [
            'Gentle ultrasonic scaling and stain polishing',
            'Comprehensive soft-tissue and enamel wear check',
            'Personalized brushing, interdental, and diet tips',
          ],
          typicalVisit: '45 min hygiene visit',
          iconName: 'ShieldCheck',
        },
      ],
    },
    doctors: {
      eyebrow: 'Meet Our Expert Dentists',
      headline: 'Specialists Dedicated to Thoughtful Dentistry.',
      subtitle:
        'Each profile below represents a fictional demonstration clinician created to showcase how dental team credentials and biographies appear.',
      demoBanner: 'Fictional Demo Profiles · Illustrative Team Showcase',
      viewProfile: 'View Profile',
      languagesLabel: 'Languages',
      focusLabel: 'Clinical Focus',
      bookWithDoctor: 'Request Visit with Specialist',
      items: [
        {
          id: 'dr-elizabeth-vance',
          name: 'Dr. Elizabeth Vance',
          specialization: 'Cosmetic & Aesthetic Dentistry',
          qualification: 'DDS, Aesthetic Prosthodontics Fellowship (Fictional Demo)',
          experienceNote: 'Demo Profile · 12 Years Fictional Practice',
          languages: 'English, French',
          intro:
            'Focuses on conservative smile design, ultra-thin porcelain veneers, and minimally invasive aesthetic rehabilitation.',
          fullBio:
            'Dr. Elizabeth Vance is a fictional lead cosmetic dentist created for this luxury studio demonstration. Her showcase biography highlights patient-centered smile design, detailed shade harmony, and conservative tooth preservation using digital mock-ups.',
          focusAreas: ['Porcelain Veneers', 'Digital Smile Design', 'Enamel-Safe Whitening', 'Composite Artistry'],
          imageKey: 'elena',
        },
        {
          id: 'dr-vikram-singh',
          name: 'Dr. Vikram Singh',
          specialization: 'Implantology & Restorative Surgery',
          qualification: 'MDS, Oral & Maxillofacial Implantology (Fictional Demo)',
          experienceNote: 'Demo Profile · 15 Years Fictional Practice',
          languages: 'English, हिन्दी, ગુજરાતી',
          intro:
            'Specializes in 3D-guided dental implants, full-arch restorative planning, and calm surgical care.',
          fullBio:
            'Dr. Vikram Singh is a fictional implant and restorative specialist representing multidisciplinary surgical planning in this demo website. His profile illustrates clear communication, 3D CBCT-guided workflows, and restorative longevity.',
          focusAreas: ['Guided Dental Implants', 'All-Ceramic Crowns', 'Full-Mouth Rehabilitation', 'Wisdom Tooth Care'],
          imageKey: 'vikram',
        },
        {
          id: 'dr-claire-laurent',
          name: 'Dr. Claire Laurent',
          specialization: 'Orthodontics & Clear Aligners',
          qualification: 'DMD, MS Orthodontics & Dentofacial Orthopedics (Fictional Demo)',
          experienceNote: 'Demo Profile · 9 Years Fictional Practice',
          languages: 'English, French',
          intro:
            'Designs discreet clear aligner and ceramic bracket programs tailored for balanced bite harmony and facial aesthetics.',
          fullBio:
            'Dr. Claire Laurent is a fictional orthodontic specialist showcasing modern digital alignment workflows. Her demonstration profile emphasizes calm consultations for teens and adults seeking comfortable, discreet orthodontic care.',
          focusAreas: ['Clear Aligner Therapy', 'Ceramic Braces', 'Adult Bite Alignment', 'Retention Planning'],
          imageKey: 'claire',
        },
      ],
    },
    gallery: {
      eyebrow: 'Advanced Smile Gallery',
      headline: 'Visualizing Harmonious Smile Craftsmanship.',
      subtitle:
        'Explore curated aesthetic themes across cosmetic, orthodontic, and restorative dental categories.',
      demoNotice:
        'Illustrative Demo Photography: These curated editorial images showcase design presentation only and do not represent real clinic patients or guaranteed clinical outcomes.',
      zoomHint: 'Click image to enlarge',
      prevLabel: 'Previous image',
      nextLabel: 'Next image',
      closeLabel: 'Close lightbox',
      categories: {
        all: 'All Categories',
        'smile-makeover': 'Smile Makeover',
        'teeth-whitening': 'Teeth Whitening',
        'dental-veneers': 'Dental Veneers',
        orthodontics: 'Orthodontic Treatment',
        'dental-implants': 'Dental Implants',
      },
      items: [
        {
          id: 'gal-1',
          category: 'smile-makeover',
          categoryLabel: 'Smile Makeover',
          title: 'Balanced Natural Smile Harmony',
          caption: 'Editorial portrait illustrating natural proportions and warm facial aesthetics.',
          note: 'Illustrative Demo Image · Not an actual patient record',
          imageKey: 'cosmeticSmile',
        },
        {
          id: 'gal-2',
          category: 'dental-veneers',
          categoryLabel: 'Dental Veneers',
          title: 'Porcelain Surface Luminosity',
          caption: 'Showcase visual highlighting subtle enamel translucency and symmetry.',
          note: 'Illustrative Demo Image · Not an actual patient record',
          imageKey: 'veneersPortrait',
        },
        {
          id: 'gal-3',
          category: 'teeth-whitening',
          categoryLabel: 'Teeth Whitening',
          title: 'Gentle Natural Shade Refresh',
          caption: 'Warm daylight editorial visual demonstrating refreshed natural brightness.',
          note: 'Illustrative Demo Image · Not an actual patient record',
          imageKey: 'smileMan',
        },
        {
          id: 'gal-4',
          category: 'orthodontics',
          categoryLabel: 'Orthodontic Treatment',
          title: 'Crystal-Clear Custom Aligner Craft',
          caption: 'Minimalist studio view of custom transparent orthodontic trays and matte case.',
          note: 'Illustrative Demo Image · Not an actual patient record',
          imageKey: 'alignerCare',
        },
        {
          id: 'gal-5',
          category: 'dental-implants',
          categoryLabel: 'Dental Implants',
          title: '3D Digital Scanning & Precision Suite',
          caption: 'Modern digital intraoral imaging and sterile surgical instrument preparation.',
          note: 'Illustrative Demo Image · Not an actual patient record',
          imageKey: 'dentalTech',
        },
      ],
    },
    whyChooseUs: {
      eyebrow: 'Why Choose Lumière',
      headline: 'Built Around Clarity, Comfort & Clinical Precision.',
      subtitle:
        'Six foundational principles guiding how our fictional luxury studio concept serves every guest.',
      items: [
        {
          number: '01',
          title: 'Modern Dental Technology',
          description:
            'Digital intraoral scanners and high-resolution imaging streamline diagnostics with minimal chairside discomfort.',
        },
        {
          number: '02',
          title: 'Personalized Treatment Planning',
          description:
            'Every care recommendation is thoughtfully tailored to your oral health priorities, timeline, and comfort preferences.',
        },
        {
          number: '03',
          title: 'Comfortable Clinic Environment',
          description:
            'Acoustic calm, natural daylight, and warm architectural textures transform the traditional dental visit.',
        },
        {
          number: '04',
          title: 'Patient-Centered Approach',
          description:
            'Unhurried appointments ensure time for questions, reassurance, and calm pacing at every step.',
        },
        {
          number: '05',
          title: 'Hygiene & Sterilization Standards',
          description:
            'Disciplined instrument sterilization, sealed barrier workflows, and spotless treatment rooms prioritize safety.',
        },
        {
          number: '06',
          title: 'Transparent Communication',
          description:
            'Clear visual explanations and upfront written treatment summaries leave no room for guesswork.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'Patient Testimonials & Reviews',
      headline: 'Kind Words from Fictional Demo Guests.',
      subtitle:
        'Sample review cards illustrating how patient appreciation appears on a luxury clinic website.',
      demoNotice: 'Sample Demo Reviews · Fictional Patient Feedback for Showcase Only',
      prevLabel: 'Previous testimonial',
      nextLabel: 'Next testimonial',
      items: [
        {
          id: 'rev-1',
          patientName: 'Ananya Patel',
          visitType: 'Sample Review · Clear Aligner Consultation',
          rating: 5,
          quote:
            'From the serene reception lounge to the digital 3D scan, everything felt calm and unhurried. Every stage of my demo consultation was explained clearly.',
        },
        {
          id: 'rev-2',
          patientName: 'Marcus Sterling',
          visitType: 'Sample Review · Preventive & Whitening Visit',
          rating: 5,
          quote:
            'I usually feel nervous visiting dental clinics, yet the warm architectural space and gentle communication made this sample experience remarkably comfortable.',
        },
        {
          id: 'rev-3',
          patientName: 'Priya Desai',
          visitType: 'Sample Review · Smile Design Preview',
          rating: 5,
          quote:
            'Seeing a digital visual of possible options before deciding gave me real confidence. The studio feels more like a boutique wellness sanctuary.',
        },
        {
          id: 'rev-4',
          patientName: 'Daniel Brooks',
          visitType: 'Sample Review · Restorative Consultation',
          rating: 5,
          quote:
            'Thoughtful scheduling meant zero waiting room stress, and the written summary made every option straightforward to understand.',
        },
      ],
    },
    appointment: {
      eyebrow: 'Appointment Request',
      headline: 'Reserve Your Consultation Time.',
      subtitle:
        'Complete the interactive request form below to preview how patients schedule visits. No real booking or clinic system is connected.',
      demoNotice:
        'Frontend Demo Experience: Submitting this form validates inputs and displays a sample confirmation receipt locally—no real appointment is booked.',
      whatsappTitle: 'Prefer Instant Messaging?',
      whatsappSubtitle:
        'Test our quick WhatsApp inquiry button with a pre-filled demo message for clinic reception.',
      whatsappButton: 'WhatsApp Appointment Inquiry',
      form: {
        nameLabel: 'Patient Name',
        namePlaceholder: 'e.g., Aarav Mehta',
        phoneLabel: 'Phone Number',
        phonePlaceholder: 'e.g., +1 (555) 014-8920',
        emailLabel: 'Email Address',
        emailPlaceholder: 'e.g., guest@example.com',
        treatmentLabel: 'Select Treatment',
        treatmentPlaceholder: 'Choose a dental service',
        dateLabel: 'Preferred Date',
        timeLabel: 'Preferred Time',
        timePlaceholder: 'Select a time window',
        messageLabel: 'Additional Message (Optional)',
        messagePlaceholder: 'Share any questions, comfort preferences, or preferred doctor...',
        submitButton: 'Book Appointment',
        timeSlots: ['09:30 AM', '11:00 AM', '01:30 PM', '03:30 PM', '05:00 PM'],
        errors: {
          nameRequired: 'Please enter the patient name (at least 2 characters).',
          phoneInvalid: 'Please enter a valid phone number (at least 7 digits).',
          emailInvalid: 'Please enter a valid email address.',
          treatmentRequired: 'Please select a dental treatment.',
          dateRequired: 'Please choose a preferred date.',
          timeRequired: 'Please choose a preferred time window.',
        },
        successTitle: 'Demo Appointment Request Received',
        successMessage:
          'Thank you! This is a frontend demonstration confirmation—no real clinic booking has been transmitted.',
        resetButton: 'Submit Another Demo Request',
      },
    },
    faq: {
      eyebrow: 'Dental Care FAQ',
      headline: 'Frequently Asked Questions.',
      subtitle:
        'General educational answers to common questions guests ask before scheduling a dental consultation.',
      educationalNote:
        'General educational information only; always consult a licensed dentist for personalized advice.',
      items: [
        {
          id: 'faq-1',
          question: 'What dental treatments do you offer?',
          answer:
            'This demonstration studio showcases twelve core dental disciplines including General Dentistry, Teeth Whitening, Dental Implants, Smile Makeovers, Root Canal Treatment, Braces, Clear Aligners, Dental Veneers, Crowns & Bridges, Pediatric Dentistry, Gum Treatment, and Preventive Care.',
        },
        {
          id: 'faq-2',
          question: 'How can I book an appointment?',
          answer:
            'In this interactive demo, you can select your preferred treatment, date, and time window using the Appointment Request section above, or click the WhatsApp Inquiry button to preview instant messaging.',
        },
        {
          id: 'faq-3',
          question: 'What should I bring to my first visit?',
          answer:
            'Typically, dental clinics appreciate a photo ID, a list of any current medications or allergies, and any recent dental radiographs if available so your clinician has complete context.',
        },
        {
          id: 'faq-4',
          question: 'How can I maintain healthy teeth between visits?',
          answer:
            'Consistent daily habits make the biggest difference: brushing gently twice daily with fluoride toothpaste, cleaning between teeth once a day with floss or interdental brushes, moderating sugary snacks, and attending routine preventive checkups.',
        },
        {
          id: 'faq-5',
          question: 'Do you provide cosmetic dental treatments?',
          answer:
            'Yes—cosmetic options featured in this showcase include supervised Teeth Whitening, Porcelain Veneers, Clear Aligners, and comprehensive Smile Makeover planning following a thorough oral health evaluation.',
        },
        {
          id: 'faq-6',
          question: 'How can I contact the clinic?',
          answer:
            'All phone numbers, email addresses, and street addresses shown in the Contact section below are clearly labeled fictional placeholders demonstrating how visitors reach a real practice.',
        },
      ],
    },
    contact: {
      eyebrow: 'Contact & Location',
      headline: 'Visit Our Flagship Studio Concept.',
      subtitle:
        'Explore our fictional location details, sample studio hours, interactive vector map, and direct inquiry form.',
      demoNotice: 'All clinic address, phone, email, and map coordinates below are fictional demonstration data.',
      details: {
        addressLabel: 'Studio Address (Demo)',
        addressValue: '420 Promenade Pavilion, Suite 300, Sample District, 00000',
        phoneLabel: 'Reception Line (Demo)',
        phoneValue: '+1 (555) 019-4820',
        emailLabel: 'Concierge Email (Demo)',
        emailValue: 'concierge@lumieredental-demo.example',
        hoursLabel: 'Opening Hours (Sample)',
        hoursValue: ['Mon – Fri: 09:00 AM – 06:30 PM', 'Saturday: 10:00 AM – 04:00 PM', 'Sunday: Closed'],
      },
      whatsappCta: 'Message on WhatsApp (Demo)',
      map: {
        title: 'Interactive Demo Studio Map',
        badge: 'Fictional Location Preview',
        district: 'Promenade Pavilion Quarter',
        directionsNote: 'Click landmarks or zoom controls to explore the sample architectural district.',
        zoomIn: 'Zoom in map',
        zoomOut: 'Zoom out map',
        centerPin: 'Center on studio pin',
        landmarks: ['Lumière Dental Studio (Demo Pin)', 'Pavilion Valet Entrance', 'Botanical Plaza Metro'],
      },
      form: {
        title: 'Send a Direct Inquiry',
        nameLabel: 'Your Name',
        namePlaceholder: 'Full name',
        emailLabel: 'Email Address',
        emailPlaceholder: 'you@example.com',
        subjectLabel: 'Subject',
        subjectPlaceholder: 'General inquiry or feedback',
        messageLabel: 'Message',
        messagePlaceholder: 'How may our demo concierge assist you?',
        submitButton: 'Send Demo Message',
        successMessage: 'Thank you! Your demo message was validated locally for preview purposes.',
        errors: {
          nameRequired: 'Please enter your name.',
          emailInvalid: 'Please provide a valid email address.',
          messageRequired: 'Please enter a brief message.',
        },
      },
    },
    footer: {
      description:
        'A luxury dental studio demonstration website showcasing modern healthcare architecture, multilingual experience, and serene patient hospitality. All clinic details are fictional.',
      quickLinksTitle: 'Studio Navigation',
      treatmentsTitle: 'Featured Care',
      contactTitle: 'Demo Contact',
      followTitle: 'Social Placeholders',
      demoBadge: 'Fictional Demonstration Project',
      privacyLink: 'Privacy Policy',
      termsLink: 'Terms & Conditions',
      copyright: '© 2026 Lumière Dental Studio (Demo Showcase). Fictional demonstration content.',
      creditPrefix: 'Website Designed & Developed by ',
      creditBrand: 'DIGWEB EXPERT',
    },
    legal: {
      privacyTitle: 'Privacy Policy (Demonstration Notice)',
      privacyBody: [
        'Lumière Dental Studio is a fictional demonstration website built solely to showcase luxury healthcare web design and frontend engineering capabilities.',
        'Any details entered into the Appointment Request or Contact forms remain strictly in your local browser session and are never transmitted to an external clinic, medical database, or third-party server.',
        'No real patient health information (PHI) is collected, stored, or processed by this demonstration website.',
      ],
      termsTitle: 'Terms & Conditions (Demonstration Notice)',
      termsBody: [
        'All clinic addresses, specialist biographies, qualifications, sample patient reviews, and studio photographs on this site are fictional or illustrative demonstration assets.',
        'Treatment summaries are provided strictly as general educational placeholders and do not constitute dental advice, diagnosis, or guaranteed clinical outcomes.',
        'For real dental care, please consult a licensed dental professional in your area.',
      ],
      close: 'Close',
    },
  },

  gu: {
    brand: {
      name: 'લ્યુમિએર ડેન્ટલ સ્ટુડિયો',
      shortName: 'લ્યુમિએર',
      tagline: 'સુંદર સ્મિત. અસાધારણ સંભાળ.',
      demoNote: 'ડેમોન્સ્ટ્રેશન શોકેસ · કાલ્પનિક ક્લિનિક માહિતી',
    },
    nav: {
      home: 'હોમ',
      about: 'અમારા વિશે',
      treatments: 'સારવાર',
      doctors: 'અમારા ડોક્ટરો',
      gallery: 'સ્માઇલ ગેલેરી',
      reviews: 'દર્દી સમીક્ષા',
      contact: 'સંપર્ક',
      bookCta: 'એપોઇન્ટમેન્ટ બુક કરો',
      phoneLabel: 'ડેમો ફોન પૂછપરછ',
      whatsappLabel: 'વોટ્સએપ ડેમો પૂછપરછ',
      menuOpen: 'મેનૂ ખોલો',
      menuClose: 'મેનૂ બંધ કરો',
    },
    hero: {
      eyebrow: 'લ્યુમિએર ડેન્ટલ સ્ટુડિયો · ડેમોન્સ્ટ્રેશન વેબસાઇટ',
      headline: 'તમારું સ્મિત અસાધારણ સંભાળને પાત્ર છે.',
      subheadline:
        'તમારા સ્મિતને સ્વસ્થ અને સુંદર રાખવા માટે રચાયેલ આધુનિક દંત ચિકિત્સા, વ્યક્તિગત સારવાર અને સહાનુભૂતિપૂર્ણ સંભાળનો અનુભવ કરો.',
      primaryCta: 'તમારી એપોઇન્ટમેન્ટ બુક કરો',
      secondaryCta: 'સારવાર જુઓ',
      floatingLabel: 'સ્ટુડિયો ફિલસૂફી',
      floatingTitle: 'શાંત અને ચોકસાઈપૂર્ણ દંત સંભાળ',
      floatingText: 'ઉતાવળ વિના પરામર્શ અને સૌમ્ય સારવાર માટે કુદરતી પ્રકાશથી સજ્જ ખાનગી સ્યુટ્સ.',
    },
    trust: {
      demoCaption: 'ઉદાહરણરૂપ ડેમો હાઇલાઇટ્સ · કાલ્પનિક ક્લિનિક પરિચય',
      items: [
        {
          metric: '૩ નિષ્ણાતો',
          title: 'અનુભવી દંત ચિકિત્સકો',
          description: 'રિસ્ટોરેટિવ, કોસ્મેટિક અને નિવારક દંત સંભાળમાં સમર્પિત કાલ્પનિક ટીમ.',
        },
        {
          metric: '૩D ડિજિટલ',
          title: 'આધુનિક ડેન્ટલ ટેકનોલોજી',
          description: 'વિચારપૂર્વક આયોજન માટે ડિજિટલ ઇન્ટ્રાઓરલ સ્કેનિંગ અને આધુનિક ઇમેજિંગ.',
        },
        {
          metric: 'વ્યક્તિગત',
          title: 'વ્યક્તિગત દર્દી સંભાળ',
          description: 'તમારી આરામદાયકતા અને મૌખિક સ્વાસ્થ્ય લક્ષ્યો અનુસાર પરામર્શ.',
        },
        {
          metric: 'શાંત સ્યુટ્સ',
          title: 'આરામદાયક સારવાર અનુભવ',
          description: 'શાંત વાતાવરણ અને સૌમ્ય ક્લિનિકલ પ્રક્રિયાઓ સાથે સુખદ અનુભવ.',
        },
      ],
    },
    about: {
      eyebrow: 'અમારા ડેન્ટલ સ્ટુડિયો વિશે',
      headline: 'દંત સંભાળના અનુભવને નવી ઓળખ.',
      lead: 'શાંત સ્થાપત્ય, કુદરતી પ્રકાશ અને ઉષ્માભરી મહેમાનગતિ સાથે આધુનિક ક્લિનિકલ ચોકસાઈ.',
      paragraphs: [
        'લ્યુમિએર ડેન્ટલ સ્ટુડિયોમાં દરેક મુલાકાત ઉતાવળને બદલે શાંત સંવાદથી શરૂ થાય છે. અમારું આ કાલ્પનિક ક્લિનિક મોડેલ આધુનિક ડિજિટલ નિદાનને શાંત આંતરિક રચના સાથે જોડે છે.',
        'સંપૂર્ણ સ્ટરિલાઇઝેશન વર્કફ્લોથી લઈને સૌમ્ય ટેકનિક સુધી, દરેક રૂમ દર્દીની સુવિધા, સ્પષ્ટ સંવાદ અને સ્વચ્છતાના ઊંચા ધોરણો માટે રચાયેલ છે.',
      ],
      pillars: [
        {
          title: 'સમર્પિત સ્ટરિલાઇઝેશન સ્યુટ',
          detail: 'દરેક સારવાર રૂમમાં વ્યવસ્થિત સાધન સ્વચ્છતા અને સુરક્ષા પ્રોટોકોલ.',
        },
        {
          title: 'આધુનિક ડિજિટલ ઉપકરણો',
          detail: 'આરામદાયક મૂલ્યાંકન માટે ઓછા રેડિયેશનવાળી ડિજિટલ ઇમેજિંગ અને ૩D સ્કેન.',
        },
        {
          title: 'દર્દી-પ્રથમ અભિગમ',
          detail: 'કોઈપણ સારવાર શરૂ કરતા પહેલા દરેક પગલાની સરળ અને પારદર્શક સમજૂતી.',
        },
      ],
      cta: 'અમારું ક્લિનિક જાણો',
      imageCaption: 'પેશન્ટ લાઉન્જ અને રિસેપ્શન · ઉદાહરણરૂપ સ્ટુડિયો કોન્સેપ્ટ',
    },
    treatments: {
      eyebrow: 'દંત સારવાર અને સેવાઓ',
      headline: 'એક જ છત નીચે સંપૂર્ણ દંત સંભાળ.',
      subtitle: 'ડેમોન્સ્ટ્રેશન હેતુ માટે રજૂ કરાયેલ ૧૨ કોસ્મેટિક, રિસ્ટોરેટિવ, ઓર્થોડોન્ટિક અને નિવારક સેવાઓ.',
      disclaimer:
        'માત્ર શૈક્ષણિક માહિતી માટે. યોગ્ય સારવારનો નિર્ણય હંમેશા પ્રત્યક્ષ દંત તપાસ પછી જ લેવામાં આવે છે.',
      learnMore: 'વધુ જાણો',
      bookThis: 'પરામર્શ વિનંતી કરો',
      typicalVisitLabel: 'સામાન્ય મુલાકાત સમય',
      whatToExpectLabel: 'શું અપેક્ષા રાખવી',
      closeModal: 'વિગતો બંધ કરો',
      categories: {
        all: 'બધી સારવાર',
        cosmetic: 'કોસ્મેટિક',
        restorative: 'રિસ્ટોરેટિવ',
        orthodontics: 'ઓર્થોડોન્ટિક્સ',
        preventive: 'નિવારક અને બાળકો',
      },
      items: [
        {
          id: 'general-dentistry',
          number: '01',
          category: 'preventive',
          name: 'જનરલ ડેન્ટિસ્ટ્રી',
          shortDescription: 'નિયમિત મૌખિક તપાસ, ડિજિટલ નિદાન અને દાંતની દૈનિક સંભાળ માટે સૌમ્ય સારવાર.',
          detailedOverview: 'જનરલ ડેન્ટિસ્ટ્રી લાંબા ગાળાના મૌખિક સ્વાસ્થ્યનો આધાર છે. મુલાકાતોમાં દાંત, પેઢાં અને બાઇટની સંપૂર્ણ તપાસ પર ધ્યાન આપવામાં આવે છે.',
          whatToExpect: ['દાંત અને પેઢાંની વિગતવાર ડિજિટલ તપાસ', 'દૈનિક સ્વચ્છતા અંગે વ્યક્તિગત માર્ગદર્શન', 'જરૂરિયાત મુજબ રક્ષણાત્મક ફિલિંગ આયોજન'],
          typicalVisit: '૪૫–૬૦ મિનિટ',
          iconName: 'Stethoscope',
        },
        {
          id: 'teeth-whitening',
          number: '02',
          category: 'cosmetic',
          name: 'ટીથ વ્હાઇટનિંગ',
          shortDescription: 'ઇનેમલની સંવેદનશીલતાનું ધ્યાન રાખીને દાંતના ડાઘ હળવા કરવાની દેખરેખ હેઠળની પદ્ધતિ.',
          detailedOverview: 'વ્યવસાયિક વ્હાઇટનિંગ મૂલ્યાંકનમાં દાંતના રંગ પરિવર્તનનું કારણ સમજીને યોગ્ય પદ્ધતિની ભલામણ કરવામાં આવે છે.',
          whatToExpect: ['સારવાર પહેલાં ઇનેમલ અને પેઢાંની તપાસ', 'સંવેદનશીલતા ઘટાડવા સૌમ્ય તૈયારી', 'ચમક જાળવવા માટે આહાર અને કાળજી ટીપ્સ'],
          typicalVisit: '૬૦ મિનિટ સેશન',
          iconName: 'Sun',
        },
        {
          id: 'dental-implants',
          number: '03',
          category: 'restorative',
          name: 'ડેન્ટલ ઇમ્પ્લાન્ટ્સ',
          shortDescription: 'ખૂટતા દાંત માટે કુદરતી દેખાવ અને ચાવવાની સુવિધા માટે આયોજિત પુનઃસ્થાપન ઉકેલ.',
          detailedOverview: 'ડેન્ટલ ઇમ્પ્લાન્ટ્સ બાયોકોમ્પેટિબલ પોસ્ટ અને કસ્ટમ ક્રાઉન દ્વારા કુદરતી દાંત જેવો આધાર આપે છે, જેનું આયોજન ૩D ઇમેજિંગથી થાય છે.',
          whatToExpect: ['૩D નિદાન ઇમેજિંગ અને બાઇટ મૂલ્યાંકન', 'તબક્કાવાર હીલિંગ સમયરેખાની સ્પષ્ટ સમજૂતી', 'કુદરતી રંગ સાથે મેળ ખાતો ક્રાઉન'],
          typicalVisit: 'તબક્કાવાર આયોજન',
          iconName: 'Layers',
        },
        {
          id: 'smile-makeover',
          number: '04',
          category: 'cosmetic',
          name: 'સ્માઇલ મેકઓવર',
          shortDescription: 'ચહેરાના પ્રમાણ અને કુદરતી સુંદરતા અનુસાર સંકલિત કોસ્મેટિક અને રિસ્ટોરેટિવ આયોજન.',
          detailedOverview: 'સ્માઇલ મેકઓવરમાં વ્હાઇટનિંગ, અલાઇનમેન્ટ કે વિનિયર્સ જેવી સારવારને ડિજિટલ પ્રિવ્યૂ સાથે સંકલિત કરવામાં આવે છે.',
          whatToExpect: ['ડિજિટલ ફોટોગ્રાફી અને સ્માઇલ એસેસમેન્ટ', 'સારવાર પહેલાં ડિજિટલ મોક-અપ પ્રિવ્યૂ', 'દાંતની સુરક્ષાને પ્રાથમિકતા આપતું આયોજન'],
          typicalVisit: 'મલ્ટિ-સ્ટેપ પ્લાનિંગ',
          iconName: 'Sparkles',
        },
        {
          id: 'root-canal',
          number: '05',
          category: 'restorative',
          name: 'રૂટ કેનાલ ટ્રીટમેન્ટ',
          shortDescription: 'ઊંડા દાંતના દુખાવામાં રાહત અને કુદરતી દાંત બચાવવા માટે સૌમ્ય એન્ડોડોન્ટિક સારવાર.',
          detailedOverview: 'આધુનિક રૂટ કેનાલ પ્રક્રિયામાં અસરકારક લોકલ એનેસ્થેસિયા અને સૂક્ષ્મ સાધનોનો ઉપયોગ કરીને દાંતના આંતરિક ચેપને સાફ કરવામાં આવે છે.',
          whatToExpect: ['ચોક્કસ ઇમેજિંગ અને આરામદાયક નમ્બિંગ', 'આંતરિક કેનાલની કાળજીપૂર્વક સફાઈ અને સીલિંગ', 'સુરક્ષા માટે ક્રાઉન અંગે સલાહ'],
          typicalVisit: '૬૦–૯૦ મિનિટ',
          iconName: 'HeartPulse',
        },
        {
          id: 'orthodontics-braces',
          number: '06',
          category: 'orthodontics',
          name: 'ઓર્થોડોન્ટિક્સ અને બ્રેસિસ',
          shortDescription: 'દાંત અને જડબાના સંતુલન માટે સિરામિક અથવા સ્લીક બ્રેકેટ્સ દ્વારા વ્યવસ્થિત ગોઠવણી.',
          detailedOverview: 'કિશોરો અને પુખ્ત વયના લોકો માટે જટિલ અંતર કે વાંકાચૂંકા દાંતની ગોઠવણી માટે સ્થિર બ્રેસિસ વિશ્વસનીય વિકલ્પ છે.',
          whatToExpect: ['ડિજિટલ મોડેલ્સ અને બાઇટ વિશ્લેષણ', 'સિરામિક અથવા મેટલ બ્રેકેટ્સની પસંદગી', 'નિયમિત ફોલો-અપ અને રિટેન્શન માર્ગદર્શન'],
          typicalVisit: 'નિયમિત પ્રોગ્રામ',
          iconName: 'SlidersHorizontal',
        },
        {
          id: 'invisalign-aligners',
          number: '07',
          category: 'orthodontics',
          name: 'ઇન્વિઝલાઇન અને ક્લિયર અલાઇનર્સ',
          shortDescription: 'વાયર કે બ્રેકેટ વગર ૩D સ્કેનથી બનેલા પારદર્શક અને સરળતાથી કાઢી શકાય તેવા અલાઇનર્સ.',
          detailedOverview: 'ક્લિયર અલાઇનર થેરાપી પારદર્શક ટ્રેની શ્રેણી દ્વારા ધીમે ધીમે દાંતને સંતુલિત સ્થિતિમાં લાવે છે, જેનાથી બ્રશ કરવું સરળ રહે છે.',
          whatToExpect: ['મોલ્ડ વગરનો આરામદાયક ૩D ઓપ્ટિકલ સ્કેન', 'દાંતની સંભવિત ગતિનો ડિજિટલ પ્રિવ્યૂ', 'દૈનિક પહેરવા યોગ્ય પારદર્શક ટ્રે'],
          typicalVisit: '૩D સ્કેન + ફોલો-અપ',
          iconName: 'Scan',
        },
        {
          id: 'dental-veneers',
          number: '08',
          category: 'cosmetic',
          name: 'ડેન્ટલ વિનિયર્સ',
          shortDescription: 'દાંતના આકાર, રંગ અને સમપ્રમાણતાને નિખારવા માટે અત્યંત પાતળા કસ્ટમ સિરામિક કવર.',
          detailedOverview: 'પોર્સેલેઇન અથવા કમ્પોઝિટ વિનિયર્સ તૂટેલી કિનારીઓ, નાના ગેપ અને રંગની અસમાનતાને કુદરતી રીતે સુધારવામાં મદદ કરે છે.',
          whatToExpect: ['શેડ મેચિંગ અને ચહેરાની સુમેળતા ચર્ચા', 'ઓછામાં ઓછી તૈયારી અને ટ્રાયલ પ્રિવ્યૂ', 'કસ્ટમ લેબ વિનિયર્સનું ચોકસાઈપૂર્વક બોન્ડિંગ'],
          typicalVisit: '૨–૩ મુલાકાતો',
          iconName: 'Gem',
        },
        {
          id: 'crowns-bridges',
          number: '09',
          category: 'restorative',
          name: 'ક્રાઉન્સ અને બ્રિજ',
          shortDescription: 'નબળા દાંતને મજબૂત કરવા અથવા ખૂટતા દાંતની જગ્યા ભરવા માટે કુદરતી સિરામિક રિસ્ટોરેશન.',
          detailedOverview: 'ઝિર્કોનિયા અને ઓલ-સિરામિક ક્રાઉન્સ નબળા દાંતનું રક્ષણ કરે છે, જ્યારે બ્રિજ ખાલી જગ્યાને સંતુલિત રીતે પૂર્ણ કરે છે.',
          whatToExpect: ['ચોક્કસ ફિટ માટે ડિજિટલ સ્કેનિંગ', 'બાજુના દાંત સાથે કુદરતી રંગ મિલાપ', 'અંતિમ સ્થાપન સમયે બાઇટ ચકાસણી'],
          typicalVisit: '૨ મુલાકાતો',
          iconName: 'Crown',
        },
        {
          id: 'pediatric-dentistry',
          number: '10',
          category: 'preventive',
          name: 'બાળ દંત ચિકિત્સા',
          shortDescription: 'બાળકો અને કિશોરોમાં ડર વિના દાંતની સારી આદતો વિકસાવતી ધીરજપૂર્ણ અને ઉષ્માભરી સંભાળ.',
          detailedOverview: 'નાની ઉંમરના સકારાત્મક અનુભવો જીવનભર મૌખિક સ્વાસ્થ્ય પ્રત્યે વિશ્વાસ વધારે છે. અમે બાળકો સાથે મિત્રતાપૂર્વક સંવાદ કરીએ છીએ.',
          whatToExpect: ['બાળકો માટે સૌમ્ય પરિચય અને શાંત વાતાવરણ', 'દાંતના વિકાસની તપાસ અને સીલન્ટ સુરક્ષા', 'માતા-પિતા અને બાળકો માટે બ્રશિંગ માર્ગદર્શન'],
          typicalVisit: '૩૦–૪૫ મિનિટ',
          iconName: 'Smile',
        },
        {
          id: 'gum-treatment',
          number: '11',
          category: 'preventive',
          name: 'પેઢાંની સારવાર',
          shortDescription: 'પેઢાંના સોજા ઘટાડવા અને દાંતના મૂળ આધારને સ્વસ્થ રાખવા માટે લક્ષિત પેરિઓડોન્ટલ સંભાળ.',
          detailedOverview: 'સ્વસ્થ પેઢાં દરેક સ્મિતનો મજબૂત પાયો છે. તપાસ બાદ જરૂર મુજબ ઊંડી સફાઈ અને જાળવણીનું આયોજન કરવામાં આવે છે.',
          whatToExpect: ['પેઢાંના સ્વાસ્થ્ય અને પોકેટ્સની વિગતવાર તપાસ', 'સૌમ્ય અલ્ટ્રાસોનિક સ્કેલિંગ', 'નિયમિત જાળવણી માટે વ્યક્તિગત સમયપત્રક'],
          typicalVisit: '૪૫–૬૦ મિનિટ',
          iconName: 'Activity',
        },
        {
          id: 'preventive-care',
          number: '12',
          category: 'preventive',
          name: 'નિવારક દંત સંભાળ',
          shortDescription: 'લાંબા ગાળાના સ્વાસ્થ્ય માટે નિયમિત પ્રોફેશનલ સફાઈ, ઇનેમલ સુરક્ષા અને વહેલી તપાસ.',
          detailedOverview: 'નિવારક સંભાળ તકલીફ શરૂ થાય તે પહેલાં જ નાના ફેરફારોને પકડી પાડે છે અને કુદરતી દાંતને મજબૂત રાખે છે.',
          whatToExpect: ['પ્લાક દૂર કરતી સૌમ્ય સફાઈ અને પોલિશિંગ', 'સંપૂર્ણ મૌખિક સ્વાસ્થ્ય અને ઇનેમલ તપાસ', 'દૈનિક સંભાળ માટે વ્યક્તિગત સલાહ'],
          typicalVisit: '૪૫ મિનિટ',
          iconName: 'ShieldCheck',
        },
      ],
    },
    doctors: {
      eyebrow: 'અમારા નિષ્ણાત ડોક્ટરોને મળો',
      headline: 'વિચારપૂર્વક દંત ચિકિત્સાને સમર્પિત નિષ્ણાતો.',
      subtitle:
        'નીચેની દરેક પ્રોફાઇલ ડેમોન્સ્ટ્રેશન હેતુ માટે બનાવેલ કાલ્પનિક ડોક્ટર પરિચય છે.',
      demoBanner: 'કાલ્પનિક ડેમો પ્રોફાઇલ્સ · ઉદાહરણરૂપ ટીમ શોકેસ',
      viewProfile: 'પ્રોફાઇલ જુઓ',
      languagesLabel: 'ભાષાઓ',
      focusLabel: 'મુખ્ય વિશેષતા',
      bookWithDoctor: 'નિષ્ણાત સાથે મુલાકાત વિનંતી કરો',
      items: [
        {
          id: 'dr-elizabeth-vance',
          name: 'ડૉ. એલિઝાબેથ વેન્સ',
          specialization: 'કોસ્મેટિક અને એસ્થેટિક ડેન્ટિસ્ટ્રી',
          qualification: 'DDS, એસ્થેટિક પ્રોસ્થોડોન્ટિક્સ ફેલોશિપ (કાલ્પનિક ડેમો)',
          experienceNote: 'ડેમો પ્રોફાઇલ · ૧૨ વર્ષ કાલ્પનિક અનુભવ',
          languages: 'English, French',
          intro: 'કુદરતી સ્માઇલ ડિઝાઇન, અલ્ટ્રા-થિન પોર્સેલેઇન વિનિયર્સ અને સૌમ્ય કોસ્મેટિક સુધારણામાં નિષ્ણાત.',
          fullBio:
            'ડૉ. એલિઝાબેથ વેન્સ આ લક્ઝરી ડેમો વેબસાઇટ માટે રચાયેલ કાલ્પનિક લીડ કોસ્મેટિક ડેન્ટિસ્ટ છે. તેમની પ્રોફાઇલ દર્દી-કેન્દ્રિત સ્માઇલ ડિઝાઇન અને ડિજિટલ મોક-અપ પ્રક્રિયાનું ઉદાહરણ રજૂ કરે છે.',
          focusAreas: ['પોર્સેલેઇન વિનિયર્સ', 'ડિજિટલ સ્માઇલ ડિઝાઇન', 'સૌમ્ય ટીથ વ્હાઇટનિંગ', 'કમ્પોઝિટ આર્ટિસ્ટ્રી'],
          imageKey: 'elena',
        },
        {
          id: 'dr-vikram-singh',
          name: 'ડૉ. વિક્રમ સિંહ',
          specialization: 'ઇમ્પ્લાન્ટોલોજી અને રિસ્ટોરેટિવ સર્જરી',
          qualification: 'MDS, ઓરલ એન્ડ મેક્સિલોફેશિયલ ઇમ્પ્લાન્ટોલોજી (કાલ્પનિક ડેમો)',
          experienceNote: 'ડેમો પ્રોફાઇલ · ૧૫ વર્ષ કાલ્પનિક અનુભવ',
          languages: 'English, हिन्दी, ગુજરાતી',
          intro: '૩D-ગાઇડેડ ડેન્ટલ ઇમ્પ્લાન્ટ્સ, ફુલ-આર્ચ રિસ્ટોરેશન અને શાંત સર્જિકલ સંભાળના નિષ્ણાત.',
          fullBio:
            'ડૉ. વિક્રમ સિંહ આ ડેમો વેબસાઇટમાં બહુ-વિદ્યાશાખાકીય રિસ્ટોરેટિવ પ્લાનિંગનું પ્રતિનિધિત્વ કરતા કાલ્પનિક નિષ્ણાત છે.',
          focusAreas: ['ગાઇડેડ ડેન્ટલ ઇમ્પ્લાન્ટ્સ', 'ઓલ-સિરામિક ક્રાઉન્સ', 'સંપૂર્ણ પુનઃસ્થાપન', 'વિઝડમ ટૂથ કેર'],
          imageKey: 'vikram',
        },
        {
          id: 'dr-claire-laurent',
          name: 'ડૉ. ક્લેર લોરેન્ટ',
          specialization: 'ઓર્થોડોન્ટિક્સ અને ક્લિયર અલાઇનર્સ',
          qualification: 'DMD, MS ઓર્થોડોન્ટિક્સ (કાલ્પનિક ડેમો)',
          experienceNote: 'ડેમો પ્રોફાઇલ · ૯ વર્ષ કાલ્પનિક અનુભવ',
          languages: 'English, French',
          intro: 'સંતુલિત બાઇટ અને ચહેરાના સુમેળ માટે પારદર્શક અલાઇનર અને સિરામિક બ્રેકેટ પ્રોગ્રામ તૈયાર કરે છે.',
          fullBio:
            'ડૉ. ક્લેર લોરેન્ટ આધુનિક ડિજિટલ ઓર્થોડોન્ટિક વર્કફ્લો દર્શાવતી કાલ્પનિક નિષ્ણાત પ્રોફાઇલ છે.',
          focusAreas: ['ક્લિયર અલાઇનર થેરાપી', 'સિરામિક બ્રેસિસ', 'પુખ્ત વયના બાઇટ સુધારણા', 'રિટેન્શન પ્લાનિંગ'],
          imageKey: 'claire',
        },
      ],
    },
    gallery: {
      eyebrow: 'એડવાન્સ્ડ સ્માઇલ ગેલેરી',
      headline: 'સુમેળભર્યા સ્મિતની દ્રશ્ય ઝલક.',
      subtitle: 'કોસ્મેટિક, ઓર્થોડોન્ટિક અને રિસ્ટોરેટિવ શ્રેણીઓમાં ઉદાહરણરૂપ દ્રશ્ય રજૂઆત.',
      demoNotice:
        'ઉદાહરણરૂપ ડેમો ફોટોગ્રાફી: આ તસવીરો માત્ર ડિઝાઇન પ્રદર્શન માટે છે અને વાસ્તવિક દર્દીઓ કે ખાતરીપૂર્વકના પરિણામો દર્શાવતી નથી.',
      zoomHint: 'મોટું જોવા ક્લિક કરો',
      prevLabel: 'પાછલી તસવીર',
      nextLabel: 'આગલી તસવીર',
      closeLabel: 'લાઇટબોક્સ બંધ કરો',
      categories: {
        all: 'બધી શ્રેણીઓ',
        'smile-makeover': 'સ્માઇલ મેકઓવર',
        'teeth-whitening': 'ટીથ વ્હાઇટનિંગ',
        'dental-veneers': 'ડેન્ટલ વિનિયર્સ',
        orthodontics: 'ઓર્થોડોન્ટિક સારવાર',
        'dental-implants': 'ડેન્ટલ ઇમ્પ્લાન્ટ્સ',
      },
      items: [
        {
          id: 'gal-1',
          category: 'smile-makeover',
          categoryLabel: 'સ્માઇલ મેકઓવર',
          title: 'સંતુલિત કુદરતી સ્મિત',
          caption: 'કુદરતી પ્રમાણ અને ચહેરાની સૌંદર્યશાસ્ત્ર દર્શાવતું એડિટોરિયલ પોટ્રેટ.',
          note: 'ઉદાહરણરૂપ ડેમો તસવીર · વાસ્તવિક દર્દી રેકોર્ડ નથી',
          imageKey: 'cosmeticSmile',
        },
        {
          id: 'gal-2',
          category: 'dental-veneers',
          categoryLabel: 'ડેન્ટલ વિનિયર્સ',
          title: 'પોર્સેલેઇન સમપ્રમાણતા',
          caption: 'સૂક્ષ્મ ચમક અને કુદરતી આકાર દર્શાવતું શોકેસ વિઝ્યુઅલ.',
          note: 'ઉદાહરણરૂપ ડેમો તસવીર · વાસ્તવિક દર્દી રેકોર્ડ નથી',
          imageKey: 'veneersPortrait',
        },
        {
          id: 'gal-3',
          category: 'teeth-whitening',
          categoryLabel: 'ટીથ વ્હાઇટનિંગ',
          title: 'તાજગીભરી કુદરતી ચમક',
          caption: 'કુદરતી ઉજ્જવળતા દર્શાવતી ડેલાઇટ એડિટોરિયલ તસવીર.',
          note: 'ઉદાહરણરૂપ ડેમો તસવીર · વાસ્તવિક દર્દી રેકોર્ડ નથી',
          imageKey: 'smileMan',
        },
        {
          id: 'gal-4',
          category: 'orthodontics',
          categoryLabel: 'ઓર્થોડોન્ટિક સારવાર',
          title: 'પારદર્શક કસ્ટમ અલાઇનર',
          caption: 'ક્લિયર અલાઇનર ટ્રે અને મેટ ડીપ-ટીલ કેસનું સ્ટુડિયો દ્રશ્ય.',
          note: 'ઉદાહરણરૂપ ડેમો તસવીર · વાસ્તવિક દર્દી રેકોર્ડ નથી',
          imageKey: 'alignerCare',
        },
        {
          id: 'gal-5',
          category: 'dental-implants',
          categoryLabel: 'ડેન્ટલ ઇમ્પ્લાન્ટ્સ',
          title: '૩D ડિજિટલ સ્કેનિંગ સ્યુટ',
          caption: 'આધુનિક ઇન્ટ્રાઓરલ સ્કેનર અને સ્ટરાઇલ સાધનોની તૈયારી.',
          note: 'ઉદાહરણરૂપ ડેમો તસવીર · વાસ્તવિક દર્દી રેકોર્ડ નથી',
          imageKey: 'dentalTech',
        },
      ],
    },
    whyChooseUs: {
      eyebrow: 'શા માટે લ્યુમિએર પસંદ કરો',
      headline: 'સ્પષ્ટતા, આરામ અને ચોકસાઈ પર આધારિત.',
      subtitle: 'અમારા કાલ્પનિક લક્ઝરી ડેન્ટલ સ્ટુડિયો કોન્સેપ્ટના છ મુખ્ય આધારસ્તંભ.',
      items: [
        {
          number: '01',
          title: 'આધુનિક ડેન્ટલ ટેકનોલોજી',
          description: 'ડિજિટલ ઇન્ટ્રાઓરલ સ્કેનર્સ અને ચોકસાઈપૂર્ણ ઇમેજિંગ ઓછી અગવડતા સાથે નિદાન સરળ બનાવે છે.',
        },
        {
          number: '02',
          title: 'વ્યક્તિગત સારવાર આયોજન',
          description: 'દરેક સારવાર ભલામણ તમારી જરૂરિયાત, સમય અને આરામને ધ્યાનમાં રાખીને તૈયાર થાય છે.',
        },
        {
          number: '03',
          title: 'આરામદાયક ક્લિનિક વાતાવરણ',
          description: 'શાંત વાતાવરણ અને કુદરતી પ્રકાશ પરંપરાગત દંત મુલાકાતને સુખદ બનાવે છે.',
        },
        {
          number: '04',
          title: 'દર્દી-કેન્દ્રિત અભિગમ',
          description: 'દરેક પ્રશ્ન અને શંકાના નિવારણ માટે પૂરતો સમય અને સંવેદનશીલ સંભાળ.',
        },
        {
          number: '05',
          title: 'સ્વચ્છતા અને સ્ટરિલાઇઝેશન ધોરણો',
          description: 'સખત સાધન સ્ટરિલાઇઝેશન અને સ્વચ્છ સારવાર કક્ષો સુરક્ષાને પ્રાથમિકતા આપે છે.',
        },
        {
          number: '06',
          title: 'પારદર્શક સંવાદ',
          description: 'સરળ દ્રશ્ય સમજૂતી અને લેખિત સારવાર સારાંશ દ્વારા સંપૂર્ણ સ્પષ્ટતા.',
        },
      ],
    },
    testimonials: {
      eyebrow: 'દર્દી સમીક્ષાઓ',
      headline: 'કાલ્પનિક ડેમો મહેમાનોના પ્રતિભાવો.',
      subtitle: 'લક્ઝરી ક્લિનિક વેબસાઇટ પર દર્દીના પ્રતિભાવો કેવી રીતે દેખાય તે દર્શાવતા નમૂના કાર્ડ્સ.',
      demoNotice: 'નમૂના ડેમો સમીક્ષાઓ · વાસ્તવિક દર્દી પ્રતિભાવો નથી',
      prevLabel: 'પાછલી સમીક્ષા',
      nextLabel: 'આગલી સમીક્ષા',
      items: [
        {
          id: 'rev-1',
          patientName: 'અનન્યા પટેલ',
          visitType: 'નમૂના સમીક્ષા · ક્લિયર અલાઇનર પરામર્શ',
          rating: 5,
          quote: 'શાંત રિસેપ્શનથી લઈને ૩D ડિજિટલ સ્કેન સુધી બધું જ અત્યંત સુવ્યવસ્થિત અને આરામદાયક લાગ્યું.',
        },
        {
          id: 'rev-2',
          patientName: 'માર્કસ સ્ટર્લિંગ',
          visitType: 'નમૂના સમીક્ષા · નિવારક અને વ્હાઇટનિંગ મુલાકાત',
          rating: 5,
          quote: 'સામાન્ય રીતે દંત ચિકિત્સાલયમાં મને ગભરાટ થાય છે, પરંતુ અહીંની શાંત ડિઝાઇન અને સૌમ્ય સંવાદે અનુભવ સરળ બનાવ્યો.',
        },
        {
          id: 'rev-3',
          patientName: 'પ્રિયા દેસાઈ',
          visitType: 'નમૂના સમીક્ષા · સ્માઇલ ડિઝાઇન પ્રિવ્યૂ',
          rating: 5,
          quote: 'નિર્ણય લેતા પહેલાં ડિજિટલ વિકલ્પો જોવાથી ઘણો વિશ્વાસ આવ્યો. સ્ટુડિયોનું વાતાવરણ અત્યંત પ્રીમિયમ છે.',
        },
        {
          id: 'rev-4',
          patientName: 'ડેનિયલ બ્રુક્સ',
          visitType: 'નમૂના સમીક્ષા · રિસ્ટોરેટિવ પરામર્શ',
          rating: 5,
          quote: 'સમયસર શેડ્યૂલિંગ અને સ્પષ્ટ લેખિત માહિતીને કારણે દરેક વિકલ્પ સમજવો ખૂબ સરળ બન્યો.',
        },
      ],
    },
    appointment: {
      eyebrow: 'એપોઇન્ટમેન્ટ વિનંતી',
      headline: 'તમારો પરામર્શ સમય આરક્ષિત કરો.',
      subtitle: 'દર્દીઓ કેવી રીતે મુલાકાત વિનંતી કરે છે તે જોવા નીચેનું ઇન્ટરેક્ટિવ ફોર્મ ભરો. કોઈ વાસ્તવિક ક્લિનિક બુકિંગ જોડાયેલ નથી.',
      demoNotice: 'ફ્રન્ટએન્ડ ડેમો અનુભવ: આ ફોર્મ ફક્ત બ્રાઉઝરમાં વેલિડેશન અને નમૂના રસીદ દર્શાવે છે.',
      whatsappTitle: 'ત્વરિત મેસેજ પસંદ છે?',
      whatsappSubtitle: 'પહેલેથી ભરેલા ડેમો સંદેશ સાથે અમારું વોટ્સએપ પૂછપરછ બટન અજમાવો.',
      whatsappButton: 'વોટ્સએપ એપોઇન્ટમેન્ટ પૂછપરછ',
      form: {
        nameLabel: 'દર્દીનું નામ',
        namePlaceholder: 'દા.ત., આરવ મહેતા',
        phoneLabel: 'ફોન નંબર',
        phonePlaceholder: 'દા.ત., +91 98000 00000',
        emailLabel: 'ઇમેઇલ સરનામું',
        emailPlaceholder: 'દા.ત., guest@example.com',
        treatmentLabel: 'સારવાર પસંદ કરો',
        treatmentPlaceholder: 'દંત સેવા પસંદ કરો',
        dateLabel: 'પસંદગીની તારીખ',
        timeLabel: 'પસંદગીનો સમય',
        timePlaceholder: 'સમય પસંદ કરો',
        messageLabel: 'વધારાનો સંદેશ (વૈકલ્પિક)',
        messagePlaceholder: 'તમારા પ્રશ્નો અથવા પસંદગીના ડોક્ટર વિશે લખો...',
        submitButton: 'એપોઇન્ટમેન્ટ બુક કરો',
        timeSlots: ['૦૯:૩૦ સવારે', '૧૧:૦૦ સવારે', '૦૧:૩૦ બપોરે', '૦૩:૩૦ બપોરે', '૦૫:૦૦ સાંજે'],
        errors: {
          nameRequired: 'કૃપા કરીને દર્દીનું નામ દાખલ કરો.',
          phoneInvalid: 'કૃપા કરીને માન્ય ફોન નંબર દાખલ કરો.',
          emailInvalid: 'કૃપા કરીને માન્ય ઇમેઇલ સરનામું દાખલ કરો.',
          treatmentRequired: 'કૃપા કરીને સારવાર પસંદ કરો.',
          dateRequired: 'કૃપા કરીને પસંદગીની તારીખ પસંદ કરો.',
          timeRequired: 'કૃપા કરીને સમય પસંદ કરો.',
        },
        successTitle: 'ડેમો એપોઇન્ટમેન્ટ વિનંતી પ્રાપ્ત થઈ',
        successMessage: 'આભાર! આ ફક્ત ફ્રન્ટએન્ડ ડેમો પુષ્ટિ છે — કોઈ વાસ્તવિક ક્લિનિક બુકિંગ મોકલવામાં આવ્યું નથી.',
        resetButton: 'બીજી ડેમો વિનંતી સબમિટ કરો',
      },
    },
    faq: {
      eyebrow: 'સામાન્ય પ્રશ્નો (FAQ)',
      headline: 'દંત સંભાળ વિશે વારંવાર પૂછાતા પ્રશ્નો.',
      subtitle: 'દંત પરામર્શ બુક કરતાં પહેલાં મહેમાનો દ્વારા પૂછાતા સામાન્ય પ્રશ્નોના શૈક્ષણિક જવાબો.',
      educationalNote: 'માત્ર સામાન્ય શૈક્ષણિક માહિતી; વ્યક્તિગત સલાહ માટે હંમેશા લાયકાત ધરાવતા દંત ચિકિત્સકની સલાહ લો.',
      items: [
        {
          id: 'faq-1',
          question: 'તમે કઈ કઈ દંત સારવાર પૂરી પાડો છો?',
          answer: 'આ ડેમો સ્ટુડિયોમાં જનરલ ડેન્ટિસ્ટ્રી, ટીથ વ્હાઇટનિંગ, ડેન્ટલ ઇમ્પ્લાન્ટ્સ, સ્માઇલ મેકઓવર, રૂટ કેનાલ, બ્રેસિસ, ક્લિયર અલાઇનર્સ, વિનિયર્સ, ક્રાઉન્સ, બાળ દંત ચિકિત્સા, પેઢાંની સારવાર અને નિવારક સંભાળ સહિત ૧૨ સેવાઓ દર્શાવવામાં આવી છે.',
        },
        {
          id: 'faq-2',
          question: 'હું એપોઇન્ટમેન્ટ કેવી રીતે બુક કરી શકું?',
          answer: 'આ ઇન્ટરેક્ટિવ ડેમોમાં તમે ઉપરના એપોઇન્ટમેન્ટ ફોર્મમાં સારવાર, તારીખ અને સમય પસંદ કરી શકો છો અથવા વોટ્સએપ પૂછપરછ બટન અજમાવી શકો છો.',
        },
        {
          id: 'faq-3',
          question: 'મારી પ્રથમ મુલાકાતે મારે શું સાથે લાવવું જોઈએ?',
          answer: 'સામાન્ય રીતે દંત ક્લિનિકમાં ઓળખપત્ર, હાલની દવાઓ અથવા એલર્જીની યાદી અને અગાઉના કોઈ ડેન્ટલ એક્સ-રે હોય તો તે સાથે રાખવા ઉપયોગી થાય છે.',
        },
        {
          id: 'faq-4',
          question: 'હું ઘરે દાંતને સ્વસ્થ કેવી રીતે રાખી શકું?',
          answer: 'દિવસમાં બે વાર ફ્લોરાઇડ ટૂથપેસ્ટથી સૌમ્ય બ્રશિંગ, રોજ ફ્લોસિંગ, મીઠા ખોરાકનું નિયંત્રણ અને નિયમિત દંત તપાસ દાંતને સ્વસ્થ રાખવામાં મદદ કરે છે.',
        },
        {
          id: 'faq-5',
          question: 'શું તમે કોસ્મેટિક દંત સારવાર પૂરી પાડો છો?',
          answer: 'હા — આ શોકેસમાં વ્હાઇટનિંગ, પોર્સેલેઇન વિનિયર્સ, ક્લિયર અલાઇનર્સ અને સ્માઇલ મેકઓવર પ્લાનિંગ જેવી કોસ્મેટિક સેવાઓ દર્શાવવામાં આવી છે.',
        },
        {
          id: 'faq-6',
          question: 'હું ક્લિનિકનો સંપર્ક કેવી રીતે કરી શકું?',
          answer: 'નીચેના સંપર્ક વિભાગમાં દર્શાવેલ તમામ ફોન નંબર, ઇમેઇલ અને સરનામું ફક્ત ડેમોન્સ્ટ્રેશન માટેના કાલ્પનિક ઉદાહરણો છે.',
        },
      ],
    },
    contact: {
      eyebrow: 'સંપર્ક અને સ્થાન',
      headline: 'અમારા ફ્લેગશિપ સ્ટુડિયો કોન્સેપ્ટની મુલાકાત લો.',
      subtitle: 'કાલ્પનિક સરનામું, નમૂના સમય, ઇન્ટરેક્ટિવ વેક્ટર મેપ અને સીધું સંપર્ક ફોર્મ.',
      demoNotice: 'નીચેનું સરનામું, ફોન, ઇમેઇલ અને નકશાની વિગતો સંપૂર્ણપણે કાલ્પનિક ડેમો માહિતી છે.',
      details: {
        addressLabel: 'સ્ટુડિયો સરનામું (ડેમો)',
        addressValue: '૪૨૦ પ્રોમેનેડ પેવેલિયન, સ્યુટ ૩૦૦, સેમ્પલ ડિસ્ટ્રિક્ટ, ૦૦૦૦૦',
        phoneLabel: 'રિસેપ્શન નંબર (ડેમો)',
        phoneValue: '+1 (555) 019-4820',
        emailLabel: 'કોન્સીયર્જ ઇમેઇલ (ડેમો)',
        emailValue: 'concierge@lumieredental-demo.example',
        hoursLabel: 'ક્લિનિક સમય (નમૂના)',
        hoursValue: ['સોમ – શુક્ર: સવારે ૦૯:૦૦ – સાંજે ૦૬:૩૦', 'શનિવાર: સવારે ૧૦:૦૦ – બપોરે ૦૪:૦૦', 'રવિવાર: બંધ'],
      },
      whatsappCta: 'વોટ્સએપ પર સંદેશ મોકલો (ડેમો)',
      map: {
        title: 'ઇન્ટરેક્ટિવ ડેમો સ્ટુડિયો મેપ',
        badge: 'કાલ્પનિક સ્થાન પ્રિવ્યૂ',
        district: 'પ્રોમેનેડ પેવેલિયન ક્વાર્ટર',
        directionsNote: 'નમૂના સ્થાન જોવા માટે ઝૂમ અથવા લેન્ડમાર્ક બટનો વાપરો.',
        zoomIn: 'મેપ ઝૂમ ઇન',
        zoomOut: 'મેપ ઝૂમ આઉટ',
        centerPin: 'સ્ટુડિયો પિન પર કેન્દ્રિત કરો',
        landmarks: ['લ્યુમિએર ડેન્ટલ સ્ટુડિયો (ડેમો પિન)', 'પેવેલિયન વેલેટ પ્રવેશ', 'બોટાનિકલ પ્લાઝા મેટ્રો'],
      },
      form: {
        title: 'સીધો સંદેશ મોકલો',
        nameLabel: 'તમારું નામ',
        namePlaceholder: 'પૂરું નામ',
        emailLabel: 'ઇમેઇલ સરનામું',
        emailPlaceholder: 'you@example.com',
        subjectLabel: 'વિષય',
        subjectPlaceholder: 'સામાન્ય પૂછપરછ',
        messageLabel: 'સંદેશ',
        messagePlaceholder: 'અમે તમને કેવી રીતે મદદ કરી શકીએ?',
        submitButton: 'ડેમો સંદેશ મોકલો',
        successMessage: 'આભાર! તમારો ડેમો સંદેશ પ્રિવ્યૂ માટે માન્ય થયો છે.',
        errors: {
          nameRequired: 'કૃપા કરીને તમારું નામ લખો.',
          emailInvalid: 'કૃપા કરીને માન્ય ઇમેઇલ દાખલ કરો.',
          messageRequired: 'કૃપા કરીને સંક્ષિપ્ત સંદેશ લખો.',
        },
      },
    },
    footer: {
      description:
        'આધુનિક હેલ્થકેર ડિઝાઇન, બહુભાષી અનુભવ અને પ્રીમિયમ દર્દી સંભાળ દર્શાવતી લક્ઝરી ડેન્ટલ સ્ટુડિયો ડેમો વેબસાઇટ. બધી ક્લિનિક વિગતો કાલ્પનિક છે.',
      quickLinksTitle: 'સ્ટુડિયો નેવિગેશન',
      treatmentsTitle: 'મુખ્ય સારવાર',
      contactTitle: 'ડેમો સંપર્ક',
      followTitle: 'સોશિયલ પ્લેસહોલ્ડર્સ',
      demoBadge: 'કાલ્પનિક ડેમોન્સ્ટ્રેશન પ્રોજેક્ટ',
      privacyLink: 'ગોપનીયતા નીતિ',
      termsLink: 'નિયમો અને શરતો',
      copyright: '© 2026 લ્યુમિએર ડેન્ટલ સ્ટુડિયો (ડેમો શોકેસ). કાલ્પનિક ડેમો સામગ્રી.',
      creditPrefix: 'Website Designed & Developed by ',
      creditBrand: 'DIGWEB EXPERT',
    },
    legal: {
      privacyTitle: 'ગોપનીયતા નીતિ (ડેમો સૂચના)',
      privacyBody: [
        'લ્યુમિએર ડેન્ટલ સ્ટુડિયો એક કાલ્પનિક ડેમોન્સ્ટ્રેશન વેબસાઇટ છે જે માત્ર લક્ઝરી હેલ્થકેર વેબ ડિઝાઇન દર્શાવવા માટે બનાવવામાં આવી છે.',
        'ફોર્મમાં દાખલ કરેલી કોઈપણ માહિતી ફક્ત તમારા બ્રાઉઝરમાં રહે છે અને કોઈ બાહ્ય ક્લિનિક કે સર્વર પર મોકલવામાં આવતી નથી.',
      ],
      termsTitle: 'નિયમો અને શરતો (ડેમો સૂચના)',
      termsBody: [
        'આ સાઇટ પરના તમામ સરનામાં, ડોક્ટર પ્રોફાઇલ્સ, સમીક્ષાઓ અને તસવીરો ફક્ત ડેમોન્સ્ટ્રેશન હેતુ માટે છે.',
        'વાસ્તવિક દંત સારવાર માટે કૃપા કરીને તમારા વિસ્તારના લાયકાત ધરાવતા દંત ચિકિત્સકનો સંપર્ક કરો.',
      ],
      close: 'બંધ કરો',
    },
  },

  hi: {
    brand: {
      name: 'ल्यूमियर डेंटल स्टूडियो',
      shortName: 'ल्यूमियर',
      tagline: 'सुंदर मुस्कान। असाधारण देखभाल।',
      demoNote: 'डेमोन्स्ट्रेशन शोकेस · काल्पनिक क्लिनिक विवरण',
    },
    nav: {
      home: 'होम',
      about: 'हमारे बारे में',
      treatments: 'उपचार',
      doctors: 'हमारे डॉक्टर',
      gallery: 'स्माइल गैलरी',
      reviews: 'रोगी समीक्षा',
      contact: 'संपर्क',
      bookCta: 'अपॉइंटमेंट बुक करें',
      phoneLabel: 'डेमो फ़ोन पूछताछ',
      whatsappLabel: 'व्हाट्सएप डेमो पूछताछ',
      menuOpen: 'मेनू खोलें',
      menuClose: 'मेनू बंद करें',
    },
    hero: {
      eyebrow: 'ल्यूमियर डेंटल स्टूडियो · डेमोन्स्ट्रेशन शोकेस',
      headline: 'आपकी मुस्कान असाधारण देखभाल की हकदार है।',
      subheadline:
        'आपकी मुस्कान को स्वस्थ और सुंदर बनाए रखने के लिए डिज़ाइन की गई आधुनिक दंत चिकित्सा, व्यक्तिगत उपचार और संवेदनशील देखभाल का अनुभव करें।',
      primaryCta: 'अपना अपॉइंटमेंट बुक करें',
      secondaryCta: 'उपचार देखें',
      floatingLabel: 'स्टूडियो दर्शन',
      floatingTitle: 'शांत और सटीक दंत चिकित्सा',
      floatingText: 'बिना जल्दबाज़ी परामर्श और सौम्य देखभाल के लिए प्राकृतिक रोशनी से सजे निजी सुइट्स।',
    },
    trust: {
      demoCaption: 'उदाहरणात्मक डेमो झलकियाँ · काल्पनिक क्लिनिक परिचय',
      items: [
        {
          metric: '3 विशेषज्ञ',
          title: 'अनुभवी दंत चिकित्सक',
          description: 'कॉस्मेटिक, रिस्टोरेटिव और निवारक दंत देखभाल के लिए समर्पित काल्पनिक टीम।',
        },
        {
          metric: '3D डिजिटल',
          title: 'आधुनिक डेंटल तकनीक',
          description: 'विचारशील उपचार योजना के लिए डिजिटल इंट्राओरल स्कैनिंग और आधुनिक इमेजिंग।',
        },
        {
          metric: 'व्यक्तिगत',
          title: 'व्यक्तिगत रोगी देखभाल',
          description: 'आपकी सुविधा और मौखिक स्वास्थ्य लक्ष्यों के अनुसार तैयार परामर्श।',
        },
        {
          metric: 'शांत सुइट्स',
          title: 'आरामदायक उपचार अनुभव',
          description: 'शांत वास्तुकला और सौम्य क्लिनिकल प्रक्रियाओं के साथ सहज वातावरण।',
        },
      ],
    },
    about: {
      eyebrow: 'हमारे डेंटल स्टूडियो के बारे में',
      headline: 'दंत देखभाल के अनुभव को नया रूप।',
      lead: 'शांत वास्तुकला, प्राकृतिक रोशनी और आत्मीय आतिथ्य के भीतर सटीक आधुनिक दंत चिकित्सा।',
      paragraphs: [
        'ल्यूमियर डेंटल स्टूडियो में हर मुलाक़ात जल्दबाज़ी की जगह शांत संवाद से शुरू होती है। हमारी यह काल्पनिक क्लिनिक अवधारणा आधुनिक डिजिटल निदान को सुकून भरे इंटीरियर के साथ जोड़ती है।',
        'समर्पित स्टरलाइज़ेशन प्रक्रियाओं से लेकर न्यूनतम इनवेसिव तकनीकों तक, हर कक्ष रोगी की सहजता, स्पष्ट संवाद और स्वच्छता मानकों के लिए व्यवस्थित है।',
      ],
      pillars: [
        {
          title: 'समर्पित स्टरलाइज़ेशन सुइट',
          detail: 'हर उपचार कक्ष में सुव्यवस्थित उपकरण स्वच्छता और सुरक्षा प्रोटोकॉल।',
        },
        {
          title: 'आधुनिक डिजिटल उपकरण',
          detail: 'आरामदायक मूल्यांकन के लिए कम-विकिरण डिजिटल इमेजिंग और ऑप्टिकल 3D स्कैनिंग।',
        },
        {
          title: 'रोगी-प्रथम दृष्टिकोण',
          detail: 'किसी भी प्रक्रिया से पहले हर चरण की पारदर्शी और सरल व्याख्या।',
        },
      ],
      cta: 'हमारा क्लिनिक जानें',
      imageCaption: 'पेशेंट लाउंज और रिसेप्शन · उदाहरणात्मक स्टूडियो अवधारणा',
    },
    treatments: {
      eyebrow: 'दंत उपचार और सेवाएं',
      headline: 'एक ही छत के नीचे संपूर्ण दंत देखभाल।',
      subtitle: 'डेमोन्स्ट्रेशन के लिए प्रस्तुत 12 कॉस्मेटिक, रिस्टोरेटिव, ऑर्थोडॉन्टिक और निवारक सेवाएं।',
      disclaimer: 'केवल शैक्षिक जानकारी के लिए। उपयुक्त उपचार का निर्णय हमेशा प्रत्यक्ष दंत परीक्षण के बाद ही लिया जाता है।',
      learnMore: 'और जानें',
      bookThis: 'परामर्श अनुरोध करें',
      typicalVisitLabel: 'सामान्य परामर्श अवधि',
      whatToExpectLabel: 'क्या अपेक्षा करें',
      closeModal: 'विवरण बंद करें',
      categories: {
        all: 'सभी उपचार',
        cosmetic: 'कॉस्मेटिक',
        restorative: 'रिस्टोरेटिव',
        orthodontics: 'ऑर्थोडॉन्टिक्स',
        preventive: 'निवारक और बाल',
      },
      items: [
        {
          id: 'general-dentistry',
          number: '01',
          category: 'preventive',
          name: 'जनरल डेंटिस्ट्री',
          shortDescription: 'संपूर्ण मौखिक परीक्षण, डिजिटल निदान और दीर्घकालिक स्वास्थ्य के लिए सौम्य नियमित देखभाल।',
          detailedOverview: 'जनरल डेंटिस्ट्री आजीवन मौखिक स्वास्थ्य की नींव है। इसमें दांतों, मसूड़ों और बाइट की विस्तृत जांच शामिल है।',
          whatToExpect: ['दांतों और मसूड़ों का विस्तृत डिजिटल परीक्षण', 'दैनिक देखभाल और निवारक प्राथमिकताओं पर चर्चा', 'आवश्यकतानुसार सुरक्षित फिलिंग योजना'],
          typicalVisit: '45–60 मिनट परामर्श',
          iconName: 'Stethoscope',
        },
        {
          id: 'teeth-whitening',
          number: '02',
          category: 'cosmetic',
          name: 'टीथ व्हाइटनिंग',
          shortDescription: 'इनेमल की संवेदनशीलता का सम्मान करते हुए सतह के दाग कम करने के पर्यवेक्षित विकल्प।',
          detailedOverview: 'पेशेवर व्हाइटनिंग मूल्यांकन में दाग के कारणों को समझकर संवेदनशीलता के अनुकूल विधि सुझाई जाती है।',
          whatToExpect: ['प्रक्रिया से पहले इनेमल और मसूड़ों की जांच', 'आरामदायक अनुभव के लिए संवेदनशीलता सुरक्षा', 'चमक बनाए रखने के लिए दैनिक सुझाव'],
          typicalVisit: '60 मिनट सत्र',
          iconName: 'Sun',
        },
        {
          id: 'dental-implants',
          number: '03',
          category: 'restorative',
          name: 'डेंटल इम्प्लांट्स',
          shortDescription: 'प्राकृतिक बाइट और संतुलन को सहारा देने के लिए सोच-समझकर तैयार दंत प्रतिस्थापन समाधान।',
          detailedOverview: 'डेंटल इम्प्लांट्स बायो-कम्पैटिबल पोस्ट और कस्टम क्राउन के माध्यम से खोए हुए दांत का प्राकृतिक आधार प्रदान करते हैं।',
          whatToExpect: ['3D डायग्नोस्टिक इमेजिंग और बाइट मूल्यांकन', 'चरणबद्ध हीलिंग समयरेखा की स्पष्ट जानकारी', 'पड़ोसी दांतों से मेल खाता कस्टम क्राउन'],
          typicalVisit: 'चरणबद्ध देखभाल योजना',
          iconName: 'Layers',
        },
        {
          id: 'smile-makeover',
          number: '04',
          category: 'cosmetic',
          name: 'स्माइल मेकओवर',
          shortDescription: 'डिजिटल स्माइल प्रिव्यू के साथ समन्वित कॉस्मेटिक और रिस्टोरेटिव सौंदर्य योजना।',
          detailedOverview: 'स्माइल मेकओवर चेहरे के अनुपात और प्राकृतिक दंत संरचना के अनुसार विभिन्न सौंदर्य उपचारों को एक साथ जोड़ता है।',
          whatToExpect: ['डिजिटल फोटोग्राफी और स्माइल अनुपात आकलन', 'उपचार से पहले डिजिटल मॉक-अप समीक्षा', 'दांत संरक्षण को प्राथमिकता देने वाली समयरेखा'],
          typicalVisit: 'मल्टी-स्टेप प्लानिंग',
          iconName: 'Sparkles',
        },
        {
          id: 'root-canal',
          number: '05',
          category: 'restorative',
          name: 'रूट कैनाल ट्रीटमेंट',
          shortDescription: 'गहरे दंत दर्द से राहत और आपके प्राकृतिक दांत को बचाने के लिए सौम्य एंडोडॉन्टिक देखभाल।',
          detailedOverview: 'आधुनिक रूट कैनाल तकनीक प्रभावी लोकल एनेस्थीसिया और सटीक उपकरणों से आंतरिक संक्रमण को शांत व आरामदायक ढंग से साफ करती है।',
          whatToExpect: ['सटीक निदान इमेजिंग और आरामदायक सुन्न प्रक्रिया', 'आंतरिक कैनाल की सावधानीपूर्वक सफाई और सीलिंग', 'सुरक्षा हेतु क्राउन परामर्श'],
          typicalVisit: '60–90 मिनट सत्र',
          iconName: 'HeartPulse',
        },
        {
          id: 'orthodontics-braces',
          number: '06',
          category: 'orthodontics',
          name: 'ऑर्थोडॉन्टिक्स और ब्रेसेस',
          shortDescription: 'दांतों और बाइट के संतुलन के लिए स्लीक सिरेमिक या लो-प्रोफाइल ब्रैकेट्स प्रणाली।',
          detailedOverview: 'किशोरों और वयस्कों में जटिल गैप या बाइट सुधार के लिए फिक्स्ड ब्रेसेस एक भरोसेमंद समाधान है।',
          whatToExpect: ['डिजिटल मॉडल और ऑर्थोडॉन्टिक बाइट विश्लेषण', 'सिरेमिक या परिष्कृत मेटल ब्रैकेट्स का विकल्प', 'नियमित समायोजन और रिटेंशन मार्गदर्शन'],
          typicalVisit: 'नियमित कार्यक्रम',
          iconName: 'SlidersHorizontal',
        },
        {
          id: 'invisalign-aligners',
          number: '07',
          category: 'orthodontics',
          name: 'इनविज़लाइन और क्लियर अलाइनर्स',
          shortDescription: 'बिना पारंपरिक तारों के 3D डिजिटल स्कैन से निर्मित पारदर्शी, निकालने योग्य कस्टम ट्रे।',
          detailedOverview: 'क्लियर अलाइनर थेरेपी पारदर्शी ट्रे के माध्यम से धीरे-धीरे दांतों को संतुलित करती है, जिससे ब्रश करना और भोजन करना सहज रहता है।',
          whatToExpect: ['बिना मोल्ड के आरामदायक 3D ऑप्टिकल स्कैन', 'संभावित दंत गति का डिजिटल प्रिव्यू', 'नियमित जांच के साथ दैनिक पहनने योग्य ट्रे'],
          typicalVisit: '3D स्कैन + फॉलो-अप',
          iconName: 'Scan',
        },
        {
          id: 'dental-veneers',
          number: '08',
          category: 'cosmetic',
          name: 'डेंटल विनीयर्स',
          shortDescription: 'दांतों के आकार, समरूपता और सतह के सौंदर्य को निखारने के लिए अति-पतले कस्टम सिरेमिक कवर।',
          detailedOverview: 'पोर्सिलेन या कम्पोजिट विनीयर्स घिसी हुई किनारियों, हल्के गैप और रंग असमानता को प्राकृतिक रूप से निखारने में सहायक होते हैं।',
          whatToExpect: ['विस्तृत शेड मैचिंग और चेहरे के सामंजस्य की चर्चा', 'न्यूनतम तैयारी और अस्थायी प्रिव्यू चरण', 'कस्टम लैब विनीयर्स की सटीक बॉन्डिंग'],
          typicalVisit: '2–3 स्टूडियो विज़िट',
          iconName: 'Gem',
        },
        {
          id: 'crowns-bridges',
          number: '09',
          category: 'restorative',
          name: 'क्राउन्स और ब्रिज',
          shortDescription: 'कमजोर दांतों को सहारा देने या रिक्त स्थान को प्राकृतिक रूप से भरने के लिए कस्टम सिरेमिक रेस्टोरेशन।',
          detailedOverview: 'ऑल-सिरेमिक और ज़िरकोनिया क्राउन्स कमजोर दांतों की रक्षा करते हैं, जबकि सटीक ब्रिज खाली स्थान को संतुलित करते हैं।',
          whatToExpect: ['सटीक फिट के लिए डिजिटल इंट्राओरल स्कैनिंग', 'आसपास के दांतों से मेल खाता प्राकृतिक शेड', 'अंतिम स्थापना पर संतुलित बाइट जांच'],
          typicalVisit: '2 स्टूडियो विज़िट',
          iconName: 'Crown',
        },
        {
          id: 'pediatric-dentistry',
          number: '10',
          category: 'preventive',
          name: 'बाल दंत चिकित्सा',
          shortDescription: 'बच्चों और किशोरों में सकारात्मक मौखिक स्वास्थ्य आदतें विकसित करने वाली धैर्यपूर्ण देखभाल।',
          detailedOverview: 'बचपन के सुखद क्लिनिक अनुभव जीवनभर के दंत स्वास्थ्य की नींव रखते हैं। हमारा सौम्य दृष्टिकोण बच्चों को सहज महसूस कराता है।',
          whatToExpect: ['बच्चों के लिए सरल और शांत परिचय', 'दांतों के विकास की निगरानी और सुरक्षात्मक सीलेंट', 'माता-पिता व बच्चों के लिए व्यावहारिक देखभाल टिप्स'],
          typicalVisit: '30–45 मिनट सत्र',
          iconName: 'Smile',
        },
        {
          id: 'gum-treatment',
          number: '11',
          category: 'preventive',
          name: 'मसूड़ों का उपचार',
          shortDescription: 'स्वस्थ मसूड़ों के ऊतकों को सहारा देने और सूजन कम करने के लिए केंद्रित पेरियोडॉन्टल देखभाल।',
          detailedOverview: 'स्वस्थ मसूड़े हर मुस्कान की आधारशिला हैं। विस्तृत जांच के बाद सौम्य डीप क्लीनिंग और रखरखाव योजना तैयार की जाती है।',
          whatToExpect: ['पेरियोडॉन्टल मैपिंग और मसूड़ों का मूल्यांकन', 'आरामदायक विकल्पों के साथ अल्ट्रासोनिक स्केलिंग', 'व्यक्तिगत रखरखाव अंतराल'],
          typicalVisit: '45–60 मिनट देखभाल',
          iconName: 'Activity',
        },
        {
          id: 'preventive-care',
          number: '12',
          category: 'preventive',
          name: 'निवारक दंत देखभाल',
          shortDescription: 'प्राकृतिक दांतों को दीर्घकाल तक सुरक्षित रखने के लिए नियमित सफाई, इनेमल सुरक्षा और जांच।',
          detailedOverview: 'निवारक देखभाल असुविधा शुरू होने से पहले ही सूक्ष्म बदलावों की पहचान करती है और दांतों को मजबूत बनाए रखती है।',
          whatToExpect: ['सौम्य अल्ट्रासोनिक स्केलिंग और पॉलिशिंग', 'इनेमल व कोमल ऊतकों की नियमित जांच', 'दैनिक ब्रशिंग और इंटरडेंटल देखभाल सुझाव'],
          typicalVisit: '45 मिनट हाइजीन विज़िट',
          iconName: 'ShieldCheck',
        },
      ],
    },
    doctors: {
      eyebrow: 'हमारे विशेषज्ञ डॉक्टरों से मिलें',
      headline: 'विचारशील दंत चिकित्सा के प्रति समर्पित विशेषज्ञ।',
      subtitle: 'नीचे दी गई प्रत्येक प्रोफ़ाइल केवल डेमोन्स्ट्रेशन के लिए बनाई गई काल्पनिक चिकित्सक जानकारी है।',
      demoBanner: 'काल्पनिक डेमो प्रोफ़ाइल · उदाहरणात्मक टीम शोकेस',
      viewProfile: 'प्रोफ़ाइल देखें',
      languagesLabel: 'भाषाएं',
      focusLabel: 'प्रमुख विशेषज्ञता',
      bookWithDoctor: 'विशेषज्ञ के साथ परामर्श अनुरोध करें',
      items: [
        {
          id: 'dr-elizabeth-vance',
          name: 'डॉ. एलिज़ाबेथ वेंस',
          specialization: 'कॉस्मेटिक और एस्थेटिक डेंटिस्ट्री',
          qualification: 'DDS, एस्थेटिक प्रोस्थोडॉन्टिक्स फेलोशिप (काल्पनिक डेमो)',
          experienceNote: 'डेमो प्रोफ़ाइल · 12 वर्ष काल्पनिक अनुभव',
          languages: 'English, French',
          intro: 'संरक्षणशील स्माइल डिज़ाइन, अति-पतले पोर्सिलेन विनीयर्स और सौम्य सौंदर्य पुनर्स्थापन में विशेषज्ञ।',
          fullBio: 'डॉ. एलिज़ाबेथ वेंस इस लक्ज़री डेमो वेबसाइट के लिए निर्मित एक काल्पनिक कॉस्मेटिक डेंटिस्ट हैं। उनकी प्रोफ़ाइल डिजिटल मॉक-अप और रोगी-केंद्रित स्माइल डिज़ाइन का उदाहरण प्रस्तुत करती है।',
          focusAreas: ['पोर्सिलेन विनीयर्स', 'डिजिटल स्माइल डिज़ाइन', 'सौम्य टीथ व्हाइटनिंग', 'कम्पोजिट आर्टिस्ट्री'],
          imageKey: 'elena',
        },
        {
          id: 'dr-vikram-singh',
          name: 'डॉ. विक्रम सिंह',
          specialization: 'इम्प्लांटोलॉजी और रिस्टोरेटिव सर्जरी',
          qualification: 'MDS, ओरल एंड मैक्सिलोफेशियल इम्प्लांटोलॉजी (काल्पनिक डेमो)',
          experienceNote: 'डेमो प्रोफ़ाइल · 15 वर्ष काल्पनिक अनुभव',
          languages: 'English, हिन्दी, ગુજરાતી',
          intro: '3D-गाइडेड डेंटल इम्प्लांट्स, फुल-आर्च रिस्टोरेशन और शांत सर्जिकल देखभाल में विशेषज्ञ।',
          fullBio: 'डॉ. विक्रम सिंह इस डेमो शोकेस में 3D इमेजिंग-आधारित रिस्टोरेटिव और इम्प्लांट योजना का प्रतिनिधित्व करने वाली काल्पनिक प्रोफ़ाइल हैं।',
          focusAreas: ['गाइडेड डेंटल इम्प्लांट्स', 'ऑल-सिरेमिक क्राउन्स', 'फुल-माउथ रिहैबिलिटेशन', 'विजडम टूथ केयर'],
          imageKey: 'vikram',
        },
        {
          id: 'dr-claire-laurent',
          name: 'डॉ. क्लेयर लॉरेंट',
          specialization: 'ऑर्थोडॉन्टिक्स और क्लियर अलाइनर्स',
          qualification: 'DMD, MS ऑर्थोडॉन्टिक्स (काल्पनिक डेमो)',
          experienceNote: 'डेमो प्रोफ़ाइल · 9 वर्ष काल्पनिक अनुभव',
          languages: 'English, French',
          intro: 'संतुलित बाइट और चेहरे के सामंजस्य के लिए पारदर्शी अलाइनर और सिरेमिक ब्रैकेट कार्यक्रम तैयार करती हैं।',
          fullBio: 'डॉ. क्लेयर लॉरेंट आधुनिक डिजिटल ऑर्थोडॉन्टिक वर्कफ़्लो को दर्शाने वाली एक काल्पनिक विशेषज्ञ प्रोफ़ाइल हैं।',
          focusAreas: ['क्लियर अलाइनर थेरेपी', 'सिरेमिक ब्रेसेस', 'वयस्क बाइट संरेखण', 'रिटेंशन योजना'],
          imageKey: 'claire',
        },
      ],
    },
    gallery: {
      eyebrow: 'एडवांस्ड स्माइल गैलरी',
      headline: 'संतुलित मुस्कान शिल्पकला की झलक।',
      subtitle: 'कॉस्मेटिक, ऑर्थोडॉन्टिक और रिस्टोरेटिव श्रेणियों में चुनिंदा दृश्य प्रस्तुति देखें।',
      demoNotice:
        'उदाहरणात्मक डेमो फ़ोटोग्राफ़ी: ये छवियां केवल डिज़ाइन प्रदर्शन के लिए हैं और वास्तविक क्लिनिक रोगियों या गारंटीकृत परिणामों का प्रतिनिधित्व नहीं करतीं।',
      zoomHint: 'बड़ा देखने के लिए क्लिक करें',
      prevLabel: 'पिछली छवि',
      nextLabel: 'अगली छवि',
      closeLabel: 'लाइटबॉक्स बंद करें',
      categories: {
        all: 'सभी श्रेणियां',
        'smile-makeover': 'स्माइल मेकओवर',
        'teeth-whitening': 'टीथ व्हाइटनिंग',
        'dental-veneers': 'डेंटल विनीयर्स',
        orthodontics: 'ऑर्थोडॉन्टिक उपचार',
        'dental-implants': 'डेंटल इम्प्लांट्स',
      },
      items: [
        {
          id: 'gal-1',
          category: 'smile-makeover',
          categoryLabel: 'स्माइल मेकओवर',
          title: 'संतुलित प्राकृतिक मुस्कान',
          caption: 'प्राकृतिक अनुपात और सौम्य सौंदर्य दर्शाता एडिटोरियल पोर्ट्रेट।',
          note: 'उदाहरणात्मक डेमो छवि · वास्तविक रोगी रिकॉर्ड नहीं',
          imageKey: 'cosmeticSmile',
        },
        {
          id: 'gal-2',
          category: 'dental-veneers',
          categoryLabel: 'डेंटल विनीयर्स',
          title: 'पोर्सिलेन सतह की चमक',
          caption: 'संतुलित आकार और प्राकृतिक पारदर्शिता दर्शाने वाला शोकेस दृश्य।',
          note: 'उदाहरणात्मक डेमो छवि · वास्तविक रोगी रिकॉर्ड नहीं',
          imageKey: 'veneersPortrait',
        },
        {
          id: 'gal-3',
          category: 'teeth-whitening',
          categoryLabel: 'टीथ व्हाइटनिंग',
          title: 'ताज़गी भरी प्राकृतिक चमक',
          caption: 'प्राकृतिक उज्ज्वलता दर्शाती डेलाइट एडिटोरियल छवि।',
          note: 'उदाहरणात्मक डेमो छवि · वास्तविक रोगी रिकॉर्ड नहीं',
          imageKey: 'smileMan',
        },
        {
          id: 'gal-4',
          category: 'orthodontics',
          categoryLabel: 'ऑर्थोडॉन्टिक उपचार',
          title: 'क्रिस्टल-क्लियर कस्टम अलाइनर',
          caption: 'पारदर्शी ऑर्थोडॉन्टिक ट्रे और मैट डीप-टील केस का स्टूडियो दृश्य।',
          note: 'उदाहरणात्मक डेमो छवि · वास्तविक रोगी रिकॉर्ड नहीं',
          imageKey: 'alignerCare',
        },
        {
          id: 'gal-5',
          category: 'dental-implants',
          categoryLabel: 'डेंटल इम्प्लांट्स',
          title: '3D डिजिटल स्कैनिंग सुइट',
          caption: 'आधुनिक इंट्राओरल स्कैनर और स्टरलाइज्ड उपकरणों की तैयारी।',
          note: 'उदाहरणात्मक डेमो छवि · वास्तविक रोगी रिकॉर्ड नहीं',
          imageKey: 'dentalTech',
        },
      ],
    },
    whyChooseUs: {
      eyebrow: 'ल्यूमियर क्यों चुनें',
      headline: 'स्पष्टता, आराम और क्लिनिकल सटीकता पर केंद्रित।',
      subtitle: 'हमारी काल्पनिक लक्ज़री स्टूडियो अवधारणा के छह प्रमुख आधार स्तंभ।',
      items: [
        {
          number: '01',
          title: 'आधुनिक डेंटल तकनीक',
          description: 'डिजिटल इंट्राओरल स्कैनर और उच्च-सटीकता इमेजिंग न्यूनतम असुविधा के साथ निदान आसान बनाती है।',
        },
        {
          number: '02',
          title: 'व्यक्तिगत उपचार योजना',
          description: 'हर देखभाल सुझाव आपकी मौखिक स्वास्थ्य प्राथमिकताओं और समय के अनुरूप तैयार किया जाता है।',
        },
        {
          number: '03',
          title: 'आरामदायक क्लिनिक वातावरण',
          description: 'शांत ध्वनि, प्राकृतिक रोशनी और सौम्य वास्तुकला दंत मुलाक़ात को सुकून भरा बनाती है।',
        },
        {
          number: '04',
          title: 'रोगी-केंद्रित दृष्टिकोण',
          description: 'बिना जल्दबाज़ी अपॉइंटमेंट्स हर प्रश्न और सहजता के लिए पर्याप्त समय देते हैं।',
        },
        {
          number: '05',
          title: 'स्वच्छता और स्टरलाइज़ेशन मानक',
          description: 'सुव्यवस्थित उपकरण स्टरलाइज़ेशन और स्वच्छ उपचार कक्ष सुरक्षा को सर्वोपरि रखते हैं।',
        },
        {
          number: '06',
          title: 'पारदर्शी संवाद',
          description: 'स्पष्ट दृश्य व्याख्या और लिखित उपचार सारांश हर विकल्प को सरल बनाते हैं।',
        },
      ],
    },
    testimonials: {
      eyebrow: 'रोगी समीक्षाएं',
      headline: 'काल्पनिक डेमो अतिथियों के अनुभव।',
      subtitle: 'लक्ज़री क्लिनिक वेबसाइट पर समीक्षा अनुभाग कैसा दिखता है, यह दर्शाने वाले नमूना कार्ड्स।',
      demoNotice: 'नमूना डेमो समीक्षाएं · वास्तविक रोगी प्रतिक्रिया नहीं',
      prevLabel: 'पिछली समीक्षा',
      nextLabel: 'अगली समीक्षा',
      items: [
        {
          id: 'rev-1',
          patientName: 'अनन्या पटेल',
          visitType: 'नमूना समीक्षा · क्लियर अलाइनर परामर्श',
          rating: 5,
          quote: 'शांत रिसेप्शन से लेकर 3D डिजिटल स्कैन तक, पूरा अनुभव बेहद सहज और व्यवस्थित रहा।',
        },
        {
          id: 'rev-2',
          patientName: 'मार्कस स्टर्लिंग',
          visitType: 'नमूना समीक्षा · निवारक एवं व्हाइटनिंग विज़िट',
          rating: 5,
          quote: 'आमतौर पर मुझे डेंटल क्लिनिक में घबराहट होती है, लेकिन इस स्टूडियो का शांत माहौल और सौम्य संवाद बेहद आरामदायक था।',
        },
        {
          id: 'rev-3',
          patientName: 'प्रिया देसाई',
          visitType: 'नमूना समीक्षा · स्माइल डिज़ाइन प्रिव्यू',
          rating: 5,
          quote: 'निर्णय लेने से पहले डिजिटल प्रिव्यू देखने से बहुत आत्मविश्वास मिला। स्टूडियो किसी बुटीक वेलनेस स्पेस जैसा लगता है।',
        },
        {
          id: 'rev-4',
          patientName: 'डेनियल ब्रूक्स',
          visitType: 'नमूना समीक्षा · रिस्टोरेटिव परामर्श',
          rating: 5,
          quote: 'बिना प्रतीक्षा के समयबद्ध मुलाक़ात और स्पष्ट लिखित सारांश ने हर विकल्प को समझना आसान बना दिया।',
        },
      ],
    },
    appointment: {
      eyebrow: 'अपॉइंटमेंट अनुरोध',
      headline: 'अपना परामर्श समय आरक्षित करें।',
      subtitle: 'विज़िट अनुरोध प्रक्रिया का प्रिव्यू देखने के लिए नीचे दिया इंटरैक्टिव फॉर्म भरें। कोई वास्तविक क्लिनिक सिस्टम जुड़ा नहीं है।',
      demoNotice: 'फ्रंटएंड डेमो अनुभव: फॉर्म सबमिट करने पर केवल स्थानीय ब्राउज़र में नमूना पुष्टि दिखाई जाती है।',
      whatsappTitle: 'त्वरित संदेश पसंद है?',
      whatsappSubtitle: 'प्री-फिल्ड डेमो संदेश के साथ हमारा व्हाट्सएप पूछताछ बटन आज़माएं।',
      whatsappButton: 'व्हाट्सएप अपॉइंटमेंट पूछताछ',
      form: {
        nameLabel: 'रोगी का नाम',
        namePlaceholder: 'उदा., आरव मेहता',
        phoneLabel: 'फ़ोन नंबर',
        phonePlaceholder: 'उदा., +91 98000 00000',
        emailLabel: 'ईमेल पता',
        emailPlaceholder: 'उदा., guest@example.com',
        treatmentLabel: 'उपचार चुनें',
        treatmentPlaceholder: 'एक दंत सेवा चुनें',
        dateLabel: 'पसंदीदा तिथि',
        timeLabel: 'पसंदीदा समय',
        timePlaceholder: 'समय चुनें',
        messageLabel: 'अतिरिक्त संदेश (वैकल्पिक)',
        messagePlaceholder: 'कोई प्रश्न, सुविधा प्राथमिकता या पसंदीदा डॉक्टर लिखें...',
        submitButton: 'अपॉइंटमेंट बुक करें',
        timeSlots: ['09:30 AM', '11:00 AM', '01:30 PM', '03:30 PM', '05:00 PM'],
        errors: {
          nameRequired: 'कृपया रोगी का नाम दर्ज करें।',
          phoneInvalid: 'कृपया मान्य फ़ोन नंबर दर्ज करें।',
          emailInvalid: 'कृपया मान्य ईमेल पता दर्ज करें।',
          treatmentRequired: 'कृपया एक उपचार चुनें।',
          dateRequired: 'कृपया पसंदीदा तिथि चुनें।',
          timeRequired: 'कृपया पसंदीदा समय चुनें।',
        },
        successTitle: 'डेमो अपॉइंटमेंट अनुरोध प्राप्त हुआ',
        successMessage: 'धन्यवाद! यह केवल एक फ्रंटएंड डेमो पुष्टि है — कोई वास्तविक क्लिनिक बुकिंग नहीं की गई है।',
        resetButton: 'एक और डेमो अनुरोध भेजें',
      },
    },
    faq: {
      eyebrow: 'सामान्य प्रश्न (FAQ)',
      headline: 'दंत देखभाल से जुड़े अक्सर पूछे जाने वाले प्रश्न।',
      subtitle: 'परामर्श से पहले अतिथियों द्वारा पूछे जाने वाले सामान्य प्रश्नों के शैक्षिक उत्तर।',
      educationalNote: 'केवल सामान्य शैक्षिक जानकारी; व्यक्तिगत सलाह के लिए हमेशा लाइसेंस प्राप्त दंत चिकित्सक से परामर्श लें।',
      items: [
        {
          id: 'faq-1',
          question: 'आप कौन-कौन से दंत उपचार प्रदान करते हैं?',
          answer: 'यह डेमो स्टूडियो जनरल डेंटिस्ट्री, टीथ व्हाइटनिंग, डेंटल इम्प्लांट्स, स्माइल मेकओवर, रूट कैनाल, ब्रेसेस, क्लियर अलाइनर्स, विनीयर्स, क्राउन्स व ब्रिज, बाल दंत चिकित्सा, मसूड़ों के उपचार और निवारक देखभाल सहित 12 सेवाएं प्रदर्शित करता है।',
        },
        {
          id: 'faq-2',
          question: 'मैं अपॉइंटमेंट कैसे बुक कर सकता हूँ?',
          answer: 'इस इंटरैक्टिव डेमो में आप ऊपर दिए गए अपॉइंटमेंट अनुरोध फॉर्म में उपचार, तिथि और समय चुन सकते हैं या व्हाट्सएप पूछताछ बटन देख सकते हैं।',
        },
        {
          id: 'faq-3',
          question: 'पहली मुलाक़ात में मुझे क्या साथ लाना चाहिए?',
          answer: 'आमतौर पर फोटो पहचान पत्र, वर्तमान दवाओं या एलर्जी की सूची और यदि उपलब्ध हों तो हाल के डेंटल एक्स-रे साथ लाना उपयोगी होता है।',
        },
        {
          id: 'faq-4',
          question: 'मैं घर पर दांतों को स्वस्थ कैसे रख सकता हूँ?',
          answer: 'दिन में दो बार फ्लोराइड टूथपेस्ट से सौम्य ब्रशिंग, रोज़ाना फ्लॉसिंग, मीठे खाद्य पदार्थों में संयम और नियमित जांच दांतों को स्वस्थ रखने में सहायक होती है।',
        },
        {
          id: 'faq-5',
          question: 'क्या आप कॉस्मेटिक दंत उपचार प्रदान करते हैं?',
          answer: 'जी हाँ — इस शोकेस में टीथ व्हाइटनिंग, पोर्सिलेन विनीयर्स, क्लियर अलाइनर्स और स्माइल मेकओवर जैसी कॉस्मेटिक सेवाएं शामिल हैं।',
        },
        {
          id: 'faq-6',
          question: 'मैं क्लिनिक से संपर्क कैसे कर सकता हूँ?',
          answer: 'नीचे संपर्क अनुभाग में दिए गए सभी फ़ोन नंबर, ईमेल और पते केवल डेमोन्स्ट्रेशन के लिए काल्पनिक उदाहरण हैं।',
        },
      ],
    },
    contact: {
      eyebrow: 'संपर्क और स्थान',
      headline: 'हमारे फ्लैगशिप स्टूडियो कॉन्सेप्ट से जुड़ें।',
      subtitle: 'काल्पनिक पता, नमूना समय, इंटरैक्टिव वेक्टर मानचित्र और सीधा संपर्क फॉर्म देखें।',
      demoNotice: 'नीचे दिया गया पता, फ़ोन, ईमेल और मानचित्र विवरण पूरी तरह काल्पनिक डेमो डेटा है।',
      details: {
        addressLabel: 'स्टूडियो पता (डेमो)',
        addressValue: '420 प्रोमेनेड पवेलियन, सुइट 300, सैंपल डिस्ट्रिक्ट, 00000',
        phoneLabel: 'रिसेप्शन नंबर (डेमो)',
        phoneValue: '+1 (555) 019-4820',
        emailLabel: 'कॉन्सीयरज ईमेल (डेमो)',
        emailValue: 'concierge@lumieredental-demo.example',
        hoursLabel: 'खुलने का समय (नमूना)',
        hoursValue: ['सोम – शुक्र: 09:00 AM – 06:30 PM', 'शनिवार: 10:00 AM – 04:00 PM', 'रविवार: बंद'],
      },
      whatsappCta: 'व्हाट्सएप पर संदेश भेजें (डेमो)',
      map: {
        title: 'इंटरैक्टिव डेमो स्टूडियो मैप',
        badge: 'काल्पनिक स्थान प्रिव्यू',
        district: 'प्रोमेनेड पवेलियन क्वार्टर',
        directionsNote: 'नमूना क्षेत्र देखने के लिए ज़ूम या लैंडमार्क नियंत्रण उपयोग करें।',
        zoomIn: 'मैप ज़ूम इन',
        zoomOut: 'मैप ज़ूम आउट',
        centerPin: 'स्टूडियो पिन पर केंद्रित करें',
        landmarks: ['ल्यूमियर डेंटल स्टूडियो (डेमो पिन)', 'पवेलियन वैलेट प्रवेश', 'बोटैनिकल प्लाज़ा मेट्रो'],
      },
      form: {
        title: 'सीधा संदेश भेजें',
        nameLabel: 'आपका नाम',
        namePlaceholder: 'पूरा नाम',
        emailLabel: 'ईमेल पता',
        emailPlaceholder: 'you@example.com',
        subjectLabel: 'विषय',
        subjectPlaceholder: 'सामान्य पूछताछ',
        messageLabel: 'संदेश',
        messagePlaceholder: 'हमारा डेमो कॉन्सीयरज आपकी कैसे सहायता कर सकता है?',
        submitButton: 'डेमो संदेश भेजें',
        successMessage: 'धन्यवाद! आपका डेमो संदेश प्रिव्यू के लिए मान्य हो गया है।',
        errors: {
          nameRequired: 'कृपया अपना नाम दर्ज करें।',
          emailInvalid: 'कृपया मान्य ईमेल पता दर्ज करें।',
          messageRequired: 'कृपया एक संक्षिप्त संदेश लिखें।',
        },
      },
    },
    footer: {
      description:
        'आधुनिक स्वास्थ्य सेवा वास्तुकला, बहुभाषी अनुभव और शांत अतिथि आतिथ्य को प्रदर्शित करने वाली लक्ज़री डेंटल स्टूडियो डेमो वेबसाइट। सभी क्लिनिक विवरण काल्पनिक हैं।',
      quickLinksTitle: 'स्टूडियो नेविगेशन',
      treatmentsTitle: 'प्रमुख उपचार',
      contactTitle: 'डेमो संपर्क',
      followTitle: 'सोशल प्लेसहोल्डर',
      demoBadge: 'काल्पनिक डेमोन्स्ट्रेशन प्रोजेक्ट',
      privacyLink: 'गोपनीयता नीति',
      termsLink: 'नियम एवं शर्तें',
      copyright: '© 2026 ल्यूमियर डेंटल स्टूडियो (डेमो शोकेस)। काल्पनिक डेमो सामग्री।',
      creditPrefix: 'Website Designed & Developed by ',
      creditBrand: 'DIGWEB EXPERT',
    },
    legal: {
      privacyTitle: 'गोपनीयता नीति (डेमो सूचना)',
      privacyBody: [
        'ल्यूमियर डेंटल स्टूडियो केवल लक्ज़री हेल्थकेयर वेब डिज़ाइन प्रदर्शित करने के लिए बनाई गई एक काल्पनिक डेमो वेबसाइट है।',
        'फॉर्म में दर्ज कोई भी जानकारी केवल आपके ब्राउज़र में रहती है और किसी बाहरी क्लिनिक या सर्वर पर नहीं भेजी जाती।',
      ],
      termsTitle: 'नियम एवं शर्तें (डेमो सूचना)',
      termsBody: [
        'इस साइट पर सभी पते, डॉक्टर प्रोफ़ाइल, समीक्षाएं और चित्र केवल डेमोन्स्ट्रेशन उद्देश्यों के लिए काल्पनिक हैं।',
        'वास्तविक दंत चिकित्सा के लिए कृपया अपने क्षेत्र के लाइसेंस प्राप्त दंत चिकित्सक से परामर्श लें।',
      ],
      close: 'बंद करें',
    },
  },
};
