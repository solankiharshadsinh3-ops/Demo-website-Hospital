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
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { SectionDivider } from './components/SectionDivider';
import { SmileGallerySection } from './components/SmileGallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { TreatmentsSection } from './components/TreatmentsSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { TRANSLATIONS } from './data/translations';
import { Language } from './types';

type Theme = 'light' | 'dark';
const THEME_STORAGE_KEY = 'lumiere-theme';

function getInitialTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  try {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === 'dark' || stored === 'light') return stored;
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  } catch {
    // Fallback to DOM class if storage is restricted
  }
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

export default function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [preselectedTreatment, setPreselectedTreatment] = useState<string>('');
  const [preselectedNote, setPreselectedNote] = useState<string>('');
  const [legalType, setLegalType] = useState<'privacy' | 'terms' | null>(null);

  const content = TRANSLATIONS[language];

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (event: MediaQueryListEvent) => {
      try {
        if (!window.localStorage.getItem(THEME_STORAGE_KEY)) {
          setTheme(event.matches ? 'dark' : 'light');
        }
      } catch {
        setTheme(event.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, []);

  const handleToggleTheme = () => {
    setTheme((prev) => {
      const next: Theme = prev === 'dark' ? 'light' : 'dark';
      try {
        window.localStorage.setItem(THEME_STORAGE_KEY, next);
      } catch {
        // Ignore storage errors in private contexts
      }
      return next;
    });
  };

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
    <div className="min-h-screen bg-[#F8F7F3] text-[#252A2B] dark:bg-[#0C1E21] dark:text-[#E3EAEB] overflow-x-clip transition-colors duration-300">
      <ScrollProgressBar />
      <Header
        content={content}
        language={language}
        onLanguageChange={setLanguage}
        onBookClick={() => scrollToSection('#appointment')}
        theme={theme}
        onToggleTheme={handleToggleTheme}
      />

      <main>
        <Hero
          content={content}
          onBookClick={() => scrollToSection('#appointment')}
          onExploreClick={() => scrollToSection('#treatments')}
        />

        <SectionDivider
          variant="architectural-arch"
          topBg="bg-[#F8F7F3] dark:bg-[#0C1E21]"
          bottomFill="fill-white dark:fill-[#11292D]"
        />

        <AboutSection
          content={content}
          onDiscoverClick={() => scrollToSection('#treatments')}
        />

        <SectionDivider
          variant="silk-wave"
          topBg="bg-white dark:bg-[#11292D]"
          bottomFill="fill-[#F8F7F3] dark:fill-[#0C1E21]"
        />

        <TreatmentsSection
          content={content}
          onSelectTreatmentForBooking={handleSelectTreatmentForBooking}
        />

        <SectionDivider
          variant="champagne-crest"
          topBg="bg-[#F8F7F3] dark:bg-[#0C1E21]"
        />

        <DoctorsSection content={content} onBookWithDoctor={handleBookWithDoctor} />

        <SectionDivider
          variant="enamel-contour"
          topBg="bg-white dark:bg-[#11292D]"
        />

        <SmileGallerySection content={content} />

        <SectionDivider variant="teal-cornice" />

        <WhyChooseUsSection content={content} />

        <SectionDivider variant="radial-horizon" />

        <TestimonialsSection content={content} />

        <SectionDivider
          variant="champagne-crest"
          topBg="bg-[#F8F7F3] dark:bg-[#0C1E21]"
        />

        <AppointmentSection
          content={content}
          preselectedTreatment={preselectedTreatment}
          preselectedNote={preselectedNote}
        />

        <SectionDivider
          variant="silk-wave"
          topBg="bg-white dark:bg-[#11292D]"
          bottomFill="fill-[#F8F7F3] dark:fill-[#0C1E21]"
        />

        <FaqSection content={content} />

        <SectionDivider
          variant="architectural-arch"
          topBg="bg-[#F8F7F3] dark:bg-[#0C1E21]"
          bottomFill="fill-white dark:fill-[#11292D]"
        />

        <ContactSection content={content} />
      </main>

      <Footer content={content} onOpenLegal={setLegalType} />

      <LegalModal type={legalType} content={content} onClose={() => setLegalType(null)} />
    </div>
  );
}
