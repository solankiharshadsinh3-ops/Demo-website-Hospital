import { Facebook, Instagram, Mail, MapPin, Phone, Youtube } from 'lucide-react';
import { SiteContent } from '../data/translations';

interface FooterProps {
  content: SiteContent;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export function Footer({ content, onOpenLegal }: FooterProps) {
  const quickLinks = [
    { href: '#home', label: content.nav.home },
    { href: '#about', label: content.nav.about },
    { href: '#treatments', label: content.nav.treatments },
    { href: '#doctors', label: content.nav.doctors },
    { href: '#gallery', label: content.nav.gallery },
    { href: '#reviews', label: content.nav.reviews },
    { href: '#contact', label: content.nav.contact },
  ];

  const featuredTreatments = content.treatments.items.slice(0, 6);

  return (
    <footer className="border-t border-[#D2B47A]/30 bg-[#183E43] text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4">
            <a href="#home" className="inline-flex items-center gap-2.5">
              <svg
                width="28"
                height="28"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0 text-[#D2B47A]"
                aria-hidden="true"
              >
                <rect x="1.5" y="1.5" width="29" height="29" rx="6" stroke="currentColor" strokeWidth="1.2" />
                <path
                  d="M11 10.5C11 8.8 12.6 8 14 9C15.2 9.8 16.8 9.8 18 9C19.4 8 21 8.8 21 10.5C21 14 19.6 18 18.6 22.2C18.3 23.2 17.3 23.3 16.9 22.3L16 19.6L15.1 22.3C14.7 23.3 13.7 23.2 13.4 22.2C12.4 18 11 14 11 10.5Z"
                  stroke="white"
                  strokeWidth="1.4"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif text-xl font-semibold tracking-wider text-white">
                {content.brand.name}
              </span>
            </a>
            <p className="mt-2 text-xs font-medium text-[#D2B47A]">{content.brand.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/75">
              {content.footer.description}
            </p>
            <p className="mt-4 text-xs font-medium text-white/60">{content.footer.demoBadge}</p>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-base font-semibold text-[#D2B47A]">
              {content.footer.quickLinksTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/78 transition-colors hover:text-[#D2B47A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Treatments */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-[#D2B47A]">
              {content.footer.treatmentsTitle}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {featuredTreatments.map((item) => (
                <li key={item.id}>
                  <a
                    href="#treatments"
                    className="text-white/78 transition-colors hover:text-[#D2B47A]"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Fictional Contact & Demo Social Links */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-base font-semibold text-[#D2B47A]">
              {content.footer.contactTitle}
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-white/80">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <span>{content.contact.details.addressValue}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <span className="tabular-nums">{content.contact.details.phoneValue}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <span className="truncate">{content.contact.details.emailValue}</span>
              </li>
            </ul>

            <div className="mt-6">
              <p className="text-xs font-semibold text-white/65">{content.footer.followTitle}</p>
              <div className="mt-2.5 flex items-center gap-2.5">
                <a
                  href="#contact"
                  aria-label="Instagram Demo Placeholder"
                  title="Instagram (Demo Placeholder)"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#24565A]/50 text-white transition-colors hover:border-[#D2B47A] hover:text-[#D2B47A]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  aria-label="Facebook Demo Placeholder"
                  title="Facebook (Demo Placeholder)"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#24565A]/50 text-white transition-colors hover:border-[#D2B47A] hover:text-[#D2B47A]"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  aria-label="YouTube Demo Placeholder"
                  title="YouTube (Demo Placeholder)"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-[#24565A]/50 text-white transition-colors hover:border-[#D2B47A] hover:text-[#D2B47A]"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Credit Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-8 text-xs text-white/70 sm:flex-row sm:items-center">
          <div className="space-y-1.5">
            <p>{content.footer.copyright}</p>
            <p>
              {content.footer.creditPrefix}
              <a
                href="https://www.instagram.com/digweb___expert___18/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-[#D2B47A] underline decoration-[#D2B47A]/50 underline-offset-4 transition-colors hover:text-white"
              >
                {content.footer.creditBrand}
              </a>
            </p>
          </div>

          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="text-white/75 transition-colors hover:text-[#D2B47A]"
            >
              {content.footer.privacyLink}
            </button>
            <span aria-hidden="true" className="text-white/30">
              ·
            </span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="text-white/75 transition-colors hover:text-[#D2B47A]"
            >
              {content.footer.termsLink}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
