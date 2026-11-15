import { useEffect, useState } from 'react';
import { AboutSection } from './components/AboutSection';
import { AppointmentSection } from './components/AppointmentSection';
import { ContactSection } from './components/ContactSection';
import { DoctorsSection } from './components/DoctorsSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { LegalModal } from './components/LegalModal';
import { SectionDivider } from './components/SectionDivider';
import { SmileGallerySection } from './components/SmileGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TRANSLATIONS } from './data/translations';
import { Language } from './types';

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [preselectedTreatment, setPreselectedTreatment] = useState<string>('');
  const [preselectedNote, setPreselectedNote] = useState<string>('');
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const content = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const scrollToSection = (selector: string) => {
    const target = document.querySelector(selector);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectTreatmentForBooking = (treatmentName: string) => {
    setPreselectedTreatment(treatmentName);
    scrollToSection('#appointment');
  };

  const handleBookWithDoctor = (doctorName: string) => {
    setPreselectedNote(`Preferred specialist: ${doctorName}`);
    scrollToSection('#appointment');
  };

  return (
    <div className="min-h-screen bg-[#F8F7F3] text-[#252A2B] overflow-x-clip">
      <Header
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        onBookClick={() => scrollToSection('#appointment')}
      />

      <main>
        <Hero
          content={content}
          onBookClick={() => scrollToSection('#appointment')}
          onExploreClick={() => scrollToSection('#treatments')}
        />

        <SectionDivider variant="architectural-arch" topBg="bg-[#F8F7F3]" bottomBg="bg-white" />

        <AboutSection
          content={content}
          onDiscoverClick={() => scrollToSection('#treatments')}
        />

        <SectionDivider variant="silk-wave" topBg="bg-white" bottomBg="bg-[#F8F7F3]" />

        <TreatmentsSection
          content={content}
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        <SectionDivider variant="champagne-crest" topBg="bg-[#F8F7F3]" bottomBg="bg-white" />

        <DoctorsSection content={content} onBookWithDoctor={handleBookWithDoctor} />

        <SectionDivider variant="enamel-contour" topBg="bg-white" bottomBg="bg-[#F8F7F3]" />

        <SmileGallerySection content={content} />

        <SectionDivider variant="teal-cornice" />

        <WhyChooseUsSection content={content} />

        <SectionDivider variant="radial-horizon" />

        <TestimonialsSection content={content} />

        <SectionDivider variant="champagne-crest" topBg="bg-[#F8F7F3]" bottomBg="bg-white" />

        <AppointmentSection
          content={content}
          preselectedTreatment={preselectedTreatment}
          preselectedNote={preselectedNote}
        />

        <SectionDivider variant="silk-wave" topBg="bg-white" bottomBg="bg-[#F8F7F3]" />

        <FaqSection content={content} />

        <SectionDivider variant="architectural-arch" topBg="bg-[#F8F7F3]" bottomBg="bg-white" />

        <ContactSection content={content} />
      </main>

      <Footer content={content} onOpenLegal={setLegalType} />

      <LegalModal type={legalType} content={content} onClose={() => setLegalType(null)} />
    </div>
  );
}
