import { useEffect, useState } from 'react';
import { Globe, Menu, MessageCircle, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiteContent } from '../data/translations';
import { Language } from '../types';

interface HeaderProps {
  content: SiteContent;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  onBookClick: () => void;
}

const LANGUAGE_OPTIONS: Array<{ code: Language; label: string; short: string }> = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'gu', label: 'ગુજરાતી', short: 'ગુજ' },
  { code: 'hi', label: 'हिन्दी', short: 'हिं' },
];

export function Header({ content, language, onLanguageChange, onBookClick }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: content.nav.home },
    { href: '#about', label: content.nav.about },
    { href: '#treatments', label: content.nav.treatments },
    { href: '#doctors', label: content.nav.doctors },
    { href: '#gallery', label: content.nav.gallery },
    { href: '#reviews', label: content.nav.reviews },
    { href: '#contact', label: content.nav.contact },
  ];

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappUrl = `https://wa.me/15550194820?text=${encodeURIComponent(
    `Hello ${content.brand.name} (Demo Inquiry): I would like to inquire about a dental consultation.`
  )}`;

  const activeLang = LANGUAGE_OPTIONS.find((item) => item.code === language) ?? LANGUAGE_OPTIONS[0];

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#E9ECEB] bg-white/95 shadow-sm backdrop-blur-md'
          : 'border-b border-[#E9ECEB]/70 bg-[#F8F7F3]/92 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-[74px] lg:px-8">
        {/* Luxury Brand Wordmark */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('#home');
          }}
          className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183E43]"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
            className="shrink-0 text-[#183E43] transition-transform duration-300 group-hover:scale-105"
            aria-hidden="true"
          >
            <rect x="1.5" y="1.5" width="29" height="29" rx="6" stroke="#D2B47A" strokeWidth="1.2" />
            <path
              d="M11 10.5C11 8.8 12.6 8 14 9C15.2 9.8 16.8 9.8 18 9C19.4 8 21 8.8 21 10.5C21 14 19.6 18 18.6 22.2C18.3 23.2 17.3 23.3 16.9 22.3L16 19.6L15.1 22.3C14.7 23.3 13.7 23.2 13.4 22.2C12.4 18 11 14 11 10.5Z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-serif text-lg font-semibold tracking-wider text-[#183E43] sm:text-xl">
            {content.brand.name}
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="relative py-1 text-sm font-medium text-[#252A2B]/85 transition-colors duration-200 hover:text-[#183E43] whitespace-nowrap shrink-0 after:absolute after:bottom-0 after:left-0 after:h-[1.5px] after:w-0 after:bg-[#D2B47A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#183E43]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions: Quick Contact Icons, Language Switcher, Book CTA */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Phone & WhatsApp clickable icons */}
          <div className="hidden items-center gap-1.5 sm:flex">
            <a
              href="tel:+15550194820"
              aria-label={content.nav.phoneLabel}
              title={content.nav.phoneLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E9ECEB] bg-white text-[#183E43] transition-colors duration-200 hover:border-[#D2B47A] hover:bg-[#F8F7F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={content.nav.whatsappLabel}
              title={content.nav.whatsappLabel}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E9ECEB] bg-white text-[#24565A] transition-colors duration-200 hover:border-[#D2B47A] hover:bg-[#F8F7F3] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          {/* Language Selector Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-expanded={langMenuOpen}
              aria-haspopup="listbox"
              aria-label="Select language"
              className="inline-flex h-10 items-center gap-1.5 rounded-md border border-[#E9ECEB] bg-white px-2.5 text-xs font-semibold text-[#183E43] transition-colors duration-200 hover:border-[#D2B47A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
            >
              <Globe className="h-3.5 w-3.5 text-[#D2B47A]" aria-hidden="true" />
              <span>{activeLang.short}</span>
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
                  className="absolute right-0 z-20 mt-2 w-36 overflow-hidden rounded-lg border border-[#E9ECEB] bg-white py-1 shadow-lg"
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
                        className={`flex w-full items-center justify-between px-3.5 py-2.5 text-left text-sm transition-colors ${
                          language === option.code
                            ? 'bg-[#183E43] font-semibold text-white'
                            : 'text-[#252A2B] hover:bg-[#F8F7F3]'
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

          {/* Primary CTA */}
          <button
            type="button"
            onClick={onBookClick}
            className="hidden h-10 items-center justify-center rounded-md bg-[#183E43] px-4 text-xs font-semibold tracking-wide text-white shadow-sm transition-all duration-200 hover:bg-[#24565A] hover:shadow-md active:scale-[0.99] sm:inline-flex md:px-5 md:text-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
          >
            {content.nav.bookCta}
          </button>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? content.nav.menuClose : content.nav.menuOpen}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#E9ECEB] bg-white text-[#183E43] transition-colors hover:border-[#D2B47A] xl:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Smooth Mobile Navigation Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-t border-[#E9ECEB] bg-white px-4 pb-6 pt-4 shadow-lg xl:hidden"
          >
            <nav aria-label="Mobile navigation" className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex min-h-[44px] items-center rounded-md px-3 text-base font-medium text-[#252A2B] transition-colors hover:bg-[#F8F7F3] hover:text-[#183E43]"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-4 flex flex-col gap-3 border-t border-[#E9ECEB] pt-4">
              <button
                type="button"
                onClick={() => {
                  setMobileOpen(false);
                  onBookClick();
                }}
                className="flex min-h-[46px] w-full items-center justify-center rounded-md bg-[#183E43] px-5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#24565A]"
              >
                {content.nav.bookCta}
              </button>

              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="tel:+15550194820"
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-[#E9ECEB] bg-[#F8F7F3] px-3 text-sm font-medium text-[#183E43]"
                >
                  <Phone className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                  <span>+1 (555) 019-4820</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-center gap-2 rounded-md border border-[#E9ECEB] bg-[#F8F7F3] px-3 text-sm font-medium text-[#24565A]"
                >
                  <MessageCircle className="h-4 w-4 text-[#24565A]" aria-hidden="true" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
