import { useEffect, useState } from 'react';
import { ChevronDown, Globe, Menu, Moon, Sun, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiteContent } from '../data/translations';
import { Language } from '../types';
import { Magnetic } from './Magnetic';

interface HeaderProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: () => void;
  theme: 'light' | 'dark';
  onToggleTheme: () => void;
}

const LANGUAGE_OPTIONS: Array<{ code: Language; label: string; short: string }> = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'gu', label: 'ગુજરાતી', short: 'ગુજ' },
  { code: 'hi', label: 'हिन्दी', short: 'हिं' },
];

const SECTION_IDS = ['home', 'about', 'treatments', 'doctors', 'gallery', 'reviews', 'contact'];

export function Header({
  content,
  language,
  onLanguageChange,
  onBookClick,
  theme,
  onToggleTheme,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);

      const scrollMarker = window.scrollY + 140;
      let current = 'home';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollMarker) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', href: '#home', label: content.nav.home },
    { id: 'about', href: '#about', label: content.nav.about },
    { id: 'treatments', href: '#treatments', label: content.nav.treatments },
    { id: 'doctors', href: '#doctors', label: content.nav.doctors },
    { id: 'gallery', href: '#gallery', label: content.nav.gallery },
    { id: 'reviews', href: '#reviews', label: content.nav.reviews },
    { id: 'contact', href: '#contact', label: content.nav.contact },
  ];

  const handleNavClick = (id: string, href: string) => {
    setActiveSection(id);
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeLang = LANGUAGE_OPTIONS.find((item) => item.code === language) ?? LANGUAGE_OPTIONS[0];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ease-out backdrop-blur-[16px] ${
        scrolled
          ? 'border-b border-[#D2B47A]/45 bg-[#122F33]/94 dark:bg-[#09171A]/94 shadow-[0_10px_30px_rgba(18,47,51,0.22)]'
          : 'border-b border-[#D2B47A]/30 bg-[#183E43]/88 dark:bg-[#0C1E21]/88'
      }`}
    >
      <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[74px] lg:px-8">
        {/* Left: Luxury Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('home', '#home');
          }}
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B47A]"
        >
          <svg
            width="30"
            height="30"
            viewBox="0 0 32 32"
            fill="none"
            className="shrink-0 text-[#F8F7F3] transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <rect
              x="1.5"
              y="1.5"
              width="29"
              height="29"
              rx="7"
              stroke="#D2B47A"
              strokeWidth="1.25"
            />
            <path
              d="M11 10.5C11 8.8 12.6 8 14 9C15.2 9.8 16.8 9.8 18 9C19.4 8 21 8.8 21 10.5C21 14 19.6 18 18.6 22.2C18.3 23.2 17.3 23.3 16.9 22.3L16 19.6L15.1 22.3C14.7 23.3 13.7 23.2 13.4 22.2C12.4 18 11 14 11 10.5Z"
              stroke="currentColor"
              strokeWidth="1.45"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-serif text-base font-semibold tracking-[0.06em] text-white transition-colors duration-200 group-hover:text-[#D2B47A] sm:text-lg lg:text-xl">
            {content.brand.name}
          </span>
        </a>

        {/* Center: Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex 2xl:gap-6">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.id, link.href);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-1.5 text-sm font-medium transition-colors duration-200 whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:bg-[#D2B47A] after:transition-all after:duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B47A] ${
                  isActive
                    ? 'font-semibold text-[#D2B47A] after:w-full'
                    : 'text-[#F8F7F3]/90 hover:text-[#D2B47A] after:w-0 hover:after:w-full'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right: Theme Switch, Language Selector & Book Appointment CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Light / Dark Theme Toggle */}
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
            className="group btn-tactile inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#D2B47A]/40 bg-white/10 text-[#F8F7F3] backdrop-blur-md hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.5)] shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
          >
            {theme === 'dark' ? (
              <Sun className="h-4 w-4 text-[#D2B47A] transition-colors group-hover:text-[#183E43]" aria-hidden="true" />
            ) : (
              <Moon className="h-4 w-4 text-[#D2B47A] transition-colors group-hover:text-[#183E43]" aria-hidden="true" />
            )}
          </button>

          {/* Language Selector */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-expanded={langMenuOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
              className="group btn-tactile inline-flex h-10 items-center gap-1.5 rounded-md border border-[#D2B47A]/40 bg-white/10 px-2.5 text-xs font-semibold text-[#F8F7F3] backdrop-blur-md hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.5)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
            >
              <Globe className="h-3.5 w-3.5 text-[#D2B47A] transition-colors group-hover:text-[#183E43]" aria-hidden="true" />
              <span>{activeLang.short}</span>
              <ChevronDown
                className={`h-3 w-3 text-[#F8F7F3]/75 transition-all duration-200 group-hover:text-[#183E43] ${
                  langMenuOpen ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>

            {langMenuOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  aria-hidden="true"
                  onClick={() => setLangMenuOpen(false)}
                />
                <ul
                  role="listbox"
                  aria-label="Language options"
                  className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-lg border border-[#D2B47A]/40 bg-[#14353A]/96 dark:bg-[#0C1E21]/96 py-1 shadow-xl backdrop-blur-[16px]"
                >
                  {LANGUAGE_OPTIONS.map((option) => (
                    <li key={option.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={language === option.code}
                        onClick={() => {
                          onLanguageChange(option.code);
                          setLangMenuOpen(false);
                        }}
                        className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm transition-all duration-150 active:scale-[0.98] ${
                          language === option.code
                            ? 'bg-[#D2B47A] font-semibold text-[#183E43]'
                            : 'text-[#F8F7F3] hover:bg-[#D2B47A]/20 hover:text-[#D2B47A]'
                        }`}
                      >
                        <span>{option.label}</span>
                        <span className="text-xs opacity-75">{option.short}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>

          {/* Primary CTA: Champagne Gold -> Deep Teal Gradient Hover */}
          <Magnetic className="hidden sm:inline-flex shrink-0">
            <button
              type="button"
              onClick={onBookClick}
              className="btn-luxury inline-flex h-10 items-center justify-center rounded-md border border-[#D2B47A] bg-gradient-to-r from-[#D2B47A] to-[#DFC48E] px-4 text-xs font-semibold tracking-wide text-[#183E43] shadow-[0_6px_18px_-4px_rgba(210,180,122,0.38)] hover:from-[#24565A] hover:to-[#183E43] hover:text-white hover:shadow-[0_12px_28px_-4px_rgba(210,180,122,0.55)] active:shadow-[0_3px_10px_-2px_rgba(210,180,122,0.4)] md:px-5 md:text-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F8F7F3]"
            >
              <span>{content.nav.bookCta}</span>
            </button>
          </Magnetic>

          {/* Mobile/Tablet Hamburger Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? content.nav.menuClose : content.nav.menuOpen}
            className="btn-tactile inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#D2B47A]/40 bg-white/10 text-[#F8F7F3] backdrop-blur-md hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.45)] xl:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Deep Teal Frosted Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="border-t border-[#D2B47A]/30 bg-[#14353A]/96 dark:bg-[#09171A]/96 px-4 pb-6 pt-4 shadow-[0_18px_40px_rgba(12,32,35,0.35)] backdrop-blur-[16px] xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id, link.href);
                    }}
                    aria-current={isActive ? 'page' : undefined}
                    className={`flex min-h-[46px] items-center justify-between rounded-lg px-3.5 text-base font-medium transition-colors ${
                      isActive
                        ? 'bg-white/10 font-semibold text-[#D2B47A]'
                        : 'text-[#F8F7F3]/90 hover:bg-white/8 hover:text-[#D2B47A]'
                    }`}
                  >
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="h-[2px] w-5 bg-[#D2B47A]" aria-hidden="true" />
                    )}
                  </a>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-[#D2B47A]/25 pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onBookClick();
                }}
                className="btn-luxury flex min-h-[48px] w-full items-center justify-center rounded-md border border-[#D2B47A] bg-gradient-to-r from-[#D2B47A] to-[#DFC48E] px-5 text-sm font-semibold text-[#183E43] shadow-[0_6px_18px_-4px_rgba(210,180,122,0.38)] hover:from-[#24565A] hover:to-[#183E43] hover:text-white hover:shadow-[0_12px_28px_-4px_rgba(210,180,122,0.55)]"
              >
                <span>{content.nav.bookCta}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
