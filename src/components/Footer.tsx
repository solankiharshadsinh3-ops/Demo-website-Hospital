import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from 'lucide-react';
import { SiteContent } from '../data/translations';

interface FooterProps {
  content: SiteContent;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

const FOOTER_SERVICE_IDS = [
  'general-dentistry',
  'dental-implants',
  'teeth-whitening',
  'smile-makeover',
  'root-canal',
  'orthodontics-braces',
  'dental-veneers',
];

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

  const dentalServices = FOOTER_SERVICE_IDS.map((id) =>
    content.treatments.items.find((item) => item.id === id)
  ).filter((item): item is NonNullable<typeof item> => Boolean(item));

  const whatsappUrl = `https://wa.me/15550194820?text=${encodeURIComponent(
    `Hello ${content.brand.name} (Demo Inquiry): I would like to inquire about dental services.`
  )}`;

  const handleSmoothLink = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer
      style={{
        background: 'linear-gradient(135deg, #122F33 0%, #183E43 52%, #21494C 100%)',
      }}
      className="relative overflow-hidden border-t border-[#D2B47A]/35 text-[#F8F7F3]"
    >
      {/* Subtle Decorative Gold Geometric Elements */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1440 420"
        fill="none"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-20"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="1320" cy="70" r="210" stroke="#D2B47A" strokeWidth="0.75" strokeOpacity="0.45" />
        <circle cx="1320" cy="70" r="150" stroke="#D2B47A" strokeWidth="0.6" strokeOpacity="0.3" />
        <path
          d="M-60 360C260 220 580 410 960 290C1180 220 1340 260 1500 330"
          stroke="#D2B47A"
          strokeWidth="0.8"
          strokeOpacity="0.35"
        />
        <path
          d="M120 40L132 52L120 64L108 52L120 40Z"
          stroke="#D2B47A"
          strokeWidth="0.8"
          strokeOpacity="0.4"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-16 sm:px-6 lg:px-8 lg:pt-20">
        {/* Four-Column Luxury Footer Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Column 1 – Brand Identity */}
          <div className="lg:col-span-4">
            <a
              href="#home"
              onClick={(e) => handleSmoothLink(e, '#home')}
              className="group inline-flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B47A]"
            >
              <svg
                width="30"
                height="30"
                viewBox="0 0 32 32"
                fill="none"
                className="shrink-0 text-[#D2B47A] transition-transform duration-300 group-hover:scale-105"
                aria-hidden="true"
              >
                <rect x="1.5" y="1.5" width="29" height="29" rx="7" stroke="currentColor" strokeWidth="1.25" />
                <path
                  d="M11 10.5C11 8.8 12.6 8 14 9C15.2 9.8 16.8 9.8 18 9C19.4 8 21 8.8 21 10.5C21 14 19.6 18 18.6 22.2C18.3 23.2 17.3 23.3 16.9 22.3L16 19.6L15.1 22.3C14.7 23.3 13.7 23.2 13.4 22.2C12.4 18 11 14 11 10.5Z"
                  stroke="#FFFFFF"
                  strokeWidth="1.45"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-serif text-xl font-semibold tracking-[0.06em] text-white">
                {content.brand.name}
              </span>
            </a>

            <p className="mt-2.5 text-xs font-semibold tracking-wide text-[#D2B47A]">
              {content.brand.tagline}
            </p>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[#F8F7F3]/85">
              {content.footer.description}
            </p>

            <div className="mt-6">
              <p className="text-xs font-semibold tracking-wide text-[#D2B47A]">
                {content.footer.followTitle}
              </p>
              <div className="mt-3 flex items-center gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothLink(e, '#contact')}
                  aria-label="Instagram Demo Placeholder"
                  title="Instagram (Demo Placeholder)"
                  className="btn-tactile inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D2B47A]/35 bg-white/8 text-white hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.48)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
                >
                  <Instagram className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothLink(e, '#contact')}
                  aria-label="Facebook Demo Placeholder"
                  title="Facebook (Demo Placeholder)"
                  className="btn-tactile inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D2B47A]/35 bg-white/8 text-white hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.48)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
                >
                  <Facebook className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleSmoothLink(e, '#contact')}
                  aria-label="YouTube Demo Placeholder"
                  title="YouTube (Demo Placeholder)"
                  className="btn-tactile inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#D2B47A]/35 bg-white/8 text-white hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.48)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
                >
                  <Youtube className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 – Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-lg font-semibold text-white">
              {content.footer.quickLinksTitle}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-[#D2B47A]">
              {content.brand.shortName}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothLink(e, link.href)}
                    className="relative inline-block py-0.5 text-white/90 transition-colors duration-200 hover:text-[#D2B47A] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D2B47A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B47A]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 – Dental Services */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold text-white">
              {content.footer.treatmentsTitle}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-[#D2B47A]">
              {content.treatments.eyebrow}
            </p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {dentalServices.map((service) => (
                <li key={service.id}>
                  <a
                    href="#treatments"
                    onClick={(e) => handleSmoothLink(e, '#treatments')}
                    className="relative inline-block py-0.5 text-white/90 transition-colors duration-200 hover:text-[#D2B47A] after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D2B47A] after:transition-all after:duration-200 hover:after:w-full focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B47A]"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 – Contact Information (Fictional Demo Data) */}
          <div className="lg:col-span-3">
            <h3 className="font-serif text-lg font-semibold text-white">
              {content.footer.contactTitle}
            </h3>
            <p className="mt-0.5 text-xs font-medium text-[#D2B47A]">
              {content.footer.demoBadge}
            </p>

            <ul className="mt-4 space-y-3.5 text-sm text-[#F8F7F3]">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <span className="leading-relaxed text-[#F8F7F3]/90">
                  {content.contact.details.addressValue}
                </span>
              </li>

              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <a
                  href="tel:+15550194820"
                  className="tabular-nums text-white transition-colors hover:text-[#D2B47A]"
                >
                  {content.contact.details.phoneValue}
                </a>
              </li>

              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <a
                  href={`mailto:${content.contact.details.emailValue}`}
                  className="truncate text-white transition-colors hover:text-[#D2B47A]"
                >
                  {content.contact.details.emailValue}
                </a>
              </li>

              <li className="flex items-start gap-2.5">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                <div className="space-y-0.5 text-xs leading-relaxed text-[#CBD5D6] tabular-nums">
                  {content.contact.details.hoursValue.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
              </li>
            </ul>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group btn-luxury mt-5 inline-flex min-h-[40px] items-center gap-2 rounded-md border border-[#D2B47A]/50 bg-white/8 px-4 py-2 text-xs font-semibold text-white hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_10px_24px_-4px_rgba(210,180,122,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
            >
              <MessageCircle className="h-4 w-4 text-[#D2B47A] transition-colors group-hover:text-[#183E43]" aria-hidden="true" />
              <span>{content.contact.whatsappCta}</span>
            </a>
          </div>
        </div>

        {/* Premium Footer Bottom Bar */}
        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[#D2B47A]/25 pt-7 text-xs text-[#CBD5D6] lg:flex-row lg:items-center">
          {/* Left: Copyright */}
          <p className="text-[#F8F7F3]/85">
            Copyright © 2026 LUMIÈRE DENTAL STUDIO. All Rights Reserved.
          </p>

          {/* Center: Legal Links */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="btn-tactile rounded-md px-2.5 py-1 text-white/85 hover:bg-white/10 hover:text-[#D2B47A] hover:shadow-[0_4px_12px_-4px_rgba(210,180,122,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
            >
              {content.footer.privacyLink}
            </button>
            <span aria-hidden="true" className="text-[#D2B47A]/50">
              |
            </span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="btn-tactile rounded-md px-2.5 py-1 text-white/85 hover:bg-white/10 hover:text-[#D2B47A] hover:shadow-[0_4px_12px_-4px_rgba(210,180,122,0.35)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
            >
              {content.footer.termsLink}
            </button>
          </div>

          {/* Right: Developer Credit */}
          <p className="text-[#CBD5D6]">
            {content.footer.creditPrefix}
            <a
              href="https://www.instagram.com/digweb___expert___18/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative font-semibold text-[#D2B47A] transition-colors duration-200 hover:text-white after:absolute after:-bottom-0.5 after:left-0 after:h-px after:w-full after:bg-[#D2B47A]/60 after:transition-colors hover:after:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D2B47A]"
            >
              {content.footer.creditBrand}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
