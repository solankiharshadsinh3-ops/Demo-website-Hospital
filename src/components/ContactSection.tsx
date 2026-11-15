import { useState } from 'react';
import {
  CheckCircle2,
  Clock,
  Crosshair,
  Mail,
  MapPin,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  Send,
} from 'lucide-react';
import { SiteContent } from '../data/translations';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  content: SiteContent;
}

type ContactErrors = Partial<Record<keyof ContactFormData, string>>;

export function ContactSection({ content }: ContactSectionProps) {
  const [zoom, setZoom] = useState<number>(1);
  const [activeLandmark, setActiveLandmark] = useState<number>(0);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<ContactErrors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const nextErrors: ContactErrors = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name = content.contact.form.errors.nameRequired;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = content.contact.form.errors.emailInvalid;
    }
    if (formData.message.trim().length < 5) {
      nextErrors.message = content.contact.form.errors.messageRequired;
    }

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      return;
    }
    setErrors({});
    setSent(true);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const whatsappUrl = `https://wa.me/15550194820?text=${encodeURIComponent(
    `Hello ${content.brand.name} (Demo Inquiry): I have a question from the contact section.`
  )}`;

  const inputClass =
    'w-full rounded-lg border border-[#E9ECEB] bg-[#F8F7F3]/50 px-4 py-3 text-sm text-[#252A2B] placeholder:text-[#252A2B]/45 transition-colors focus:border-[#183E43] focus:bg-white focus:outline-none';

  return (
    <section id="contact" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#24565A]">
            {content.contact.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] sm:text-4xl">
            {content.contact.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78">
            {content.contact.subtitle}
          </p>
          <p className="mt-2 text-xs font-medium text-[#24565A]">{content.contact.demoNotice}</p>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-12">
          {/* Left Column: Demo Contact Details + Interactive Vector Map */}
          <div className="space-y-6 lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#24565A]">
                  <MapPin className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                  <span>{content.contact.details.addressLabel}</span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#183E43]">
                  {content.contact.details.addressValue}
                </p>
              </div>

              <div className="rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#24565A]">
                  <Clock className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                  <span>{content.contact.details.hoursLabel}</span>
                </div>
                <ul className="mt-2 space-y-1 text-xs leading-relaxed text-[#183E43] tabular-nums">
                  {content.contact.details.hoursValue.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>

              <a
                href="tel:+15550194820"
                className="rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-5 transition-colors hover:border-[#D2B47A]"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#24565A]">
                  <Phone className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                  <span>{content.contact.details.phoneLabel}</span>
                </div>
                <p className="mt-2 text-sm font-semibold tabular-nums text-[#183E43]">
                  {content.contact.details.phoneValue}
                </p>
              </a>

              <a
                href={`mailto:${content.contact.details.emailValue}`}
                className="rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-5 transition-colors hover:border-[#D2B47A]"
              >
                <div className="flex items-center gap-2 text-xs font-semibold text-[#24565A]">
                  <Mail className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                  <span>{content.contact.details.emailLabel}</span>
                </div>
                <p className="mt-2 truncate text-sm font-semibold text-[#183E43]">
                  {content.contact.details.emailValue}
                </p>
              </a>
            </div>

            {/* Interactive Labeled Demo Map */}
            <div className="overflow-hidden rounded-2xl border border-[#E9ECEB] bg-[#F8F7F3]">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[#E9ECEB] bg-white px-5 py-3.5">
                <div>
                  <p className="text-sm font-semibold text-[#183E43]">{content.contact.map.title}</p>
                  <p className="text-xs text-[#252A2B]/65">
                    {content.contact.map.badge} · {content.contact.map.district}
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    aria-label={content.contact.map.zoomOut}
                    onClick={() => setZoom((z) => Math.max(0.85, Number((z - 0.15).toFixed(2))))}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E9ECEB] bg-[#F8F7F3] text-[#183E43] transition-colors hover:border-[#D2B47A]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={content.contact.map.centerPin}
                    onClick={() => {
                      setZoom(1);
                      setActiveLandmark(0);
                    }}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E9ECEB] bg-[#F8F7F3] text-[#183E43] transition-colors hover:border-[#D2B47A]"
                  >
                    <Crosshair className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label={content.contact.map.zoomIn}
                    onClick={() => setZoom((z) => Math.min(1.3, Number((z + 0.15).toFixed(2))))}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[#E9ECEB] bg-[#F8F7F3] text-[#183E43] transition-colors hover:border-[#D2B47A]"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              {/* Stylized Architectural Map Viewport */}
              <div className="relative h-64 overflow-hidden bg-[#E9ECEB]/60">
                <div
                  style={{ transform: `scale(${zoom})` }}
                  className="relative h-full w-full transition-transform duration-300"
                >
                  <svg viewBox="0 0 600 280" className="h-full w-full" aria-hidden="true">
                    <rect width="600" height="280" fill="#F2F0E9" />
                    <path d="M0 95H600M0 195H600M165 0V280M360 0V280M490 0V280" stroke="#FFFFFF" strokeWidth="14" />
                    <path d="M0 95H600M165 0V280" stroke="#D2B47A" strokeOpacity="0.45" strokeWidth="1.5" />
                    <rect x="200" y="116" width="132" height="62" rx="8" fill="#183E43" fillOpacity="0.1" stroke="#183E43" strokeOpacity="0.2" />
                    <rect x="382" y="24" width="88" height="52" rx="8" fill="#24565A" fillOpacity="0.1" />
                    <circle cx="96" cy="145" r="32" fill="#24565A" fillOpacity="0.12" />
                  </svg>

                  {/* Interactive Landmarks */}
                  <button
                    type="button"
                    onClick={() => setActiveLandmark(0)}
                    className={`absolute left-[44%] top-[48%] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-3 py-1.5 text-xs font-semibold shadow-sm transition-all ${
                      activeLandmark === 0
                        ? 'border-[#D2B47A] bg-[#183E43] text-white scale-105'
                        : 'border-[#183E43]/25 bg-white text-[#183E43]'
                    }`}
                  >
                    {content.contact.map.landmarks[0]}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveLandmark(1)}
                    className={`absolute left-[71%] top-[24%] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-2.5 py-1 text-xs font-medium shadow-sm transition-all ${
                      activeLandmark === 1
                        ? 'border-[#D2B47A] bg-[#183E43] text-white scale-105'
                        : 'border-[#E9ECEB] bg-white text-[#252A2B]'
                    }`}
                  >
                    {content.contact.map.landmarks[1]}
                  </button>

                  <button
                    type="button"
                    onClick={() => setActiveLandmark(2)}
                    className={`absolute left-[20%] top-[62%] -translate-x-1/2 -translate-y-1/2 rounded-lg border px-2.5 py-1 text-xs font-medium shadow-sm transition-all ${
                      activeLandmark === 2
                        ? 'border-[#D2B47A] bg-[#183E43] text-white scale-105'
                        : 'border-[#E9ECEB] bg-white text-[#252A2B]'
                    }`}
                  >
                    {content.contact.map.landmarks[2]}
                  </button>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3 bg-white px-5 py-3 text-xs text-[#252A2B]/70">
                <span>{content.contact.map.directionsNote}</span>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-semibold text-[#183E43] hover:text-[#24565A]"
                >
                  <MessageCircle className="h-3.5 w-3.5 text-[#D2B47A]" aria-hidden="true" />
                  <span>{content.contact.whatsappCta}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Contact Form */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-[#E9ECEB] bg-[#F8F7F3] p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-[#183E43]">
                {content.contact.form.title}
              </h3>

              {sent ? (
                <div className="mt-6 rounded-xl border border-[#E9ECEB] bg-white p-6 text-center">
                  <CheckCircle2 className="mx-auto h-10 w-10 text-[#24565A]" aria-hidden="true" />
                  <p className="mt-3 text-sm leading-relaxed text-[#183E43]">
                    {content.contact.form.successMessage}
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-5 min-h-[40px] rounded-md border border-[#183E43] px-4 py-2 text-xs font-semibold text-[#183E43] hover:bg-[#183E43] hover:text-white"
                  >
                    {content.appointment.form.resetButton}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="mt-5 space-y-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                    >
                      {content.contact.form.nameLabel} *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={content.contact.form.namePlaceholder}
                      className={inputClass}
                    />
                    {errors.name && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-700">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                    >
                      {content.contact.form.emailLabel} *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={content.contact.form.emailPlaceholder}
                      className={inputClass}
                    />
                    {errors.email && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                    >
                      {content.contact.form.subjectLabel}
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder={content.contact.form.subjectPlaceholder}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                    >
                      {content.contact.form.messageLabel} *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={content.contact.form.messagePlaceholder}
                      className={inputClass}
                    />
                    {errors.message && (
                      <p role="alert" className="mt-1 text-xs font-medium text-red-700">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[46px] w-full items-center justify-center gap-2 rounded-md bg-[#183E43] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#24565A]"
                  >
                    <Send className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                    <span>{content.contact.form.submitButton}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
