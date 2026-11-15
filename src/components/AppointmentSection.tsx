import { useEffect, useState } from 'react';
import { Calendar, CheckCircle2, Clock, MessageCircle, Send } from 'lucide-react';
import { motion } from 'motion/react';
import { SiteContent } from '../data/translations';
import { AppointmentFormData } from '../types';

interface AppointmentSectionProps {
  content: SiteContent;
  preselectedTreatment: string;
  preselectedNote: string;
}

type FormErrors = Partial<Record<keyof AppointmentFormData, string>>;

export function AppointmentSection({
  content,
  preselectedTreatment,
  preselectedNote,
}: AppointmentSectionProps) {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    preferredDate: '',
    preferredTime: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submittedRecord, setSubmittedRecord] = useState<AppointmentFormData | null>(null);

  useEffect(() => {
    if (preselectedTreatment) {
      setFormData((prev) => ({ ...prev, treatment: preselectedTreatment }));
      setSubmittedRecord(null);
    }
  }, [preselectedTreatment]);

  useEffect(() => {
    if (preselectedNote) {
      setFormData((prev) => ({ ...prev, message: preselectedNote }));
      setSubmittedRecord(null);
    }
  }, [preselectedNote]);

  const todayIso = new Date().toISOString().split('T')[0];

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (formData.name.trim().length < 2) {
      nextErrors.name = content.appointment.form.errors.nameRequired;
    }
    const digits = formData.phone.replace(/\D/g, '');
    if (digits.length < 7) {
      nextErrors.phone = content.appointment.form.errors.phoneInvalid;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = content.appointment.form.errors.emailInvalid;
    }
    if (!formData.treatment) {
      nextErrors.treatment = content.appointment.form.errors.treatmentRequired;
    }
    if (!formData.preferredDate) {
      nextErrors.preferredDate = content.appointment.form.errors.dateRequired;
    }
    if (!formData.preferredTime) {
      nextErrors.preferredTime = content.appointment.form.errors.timeRequired;
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSubmittedRecord({ ...formData });
  };

  const handleReset = () => {
    setSubmittedRecord(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      treatment: '',
      preferredDate: '',
      preferredTime: '',
      message: '',
    });
  };

  const whatsappUrl = `https://wa.me/15550194820?text=${encodeURIComponent(
    `Hello ${content.brand.name} (Demo Inquiry): I would like to request a consultation${
      formData.treatment ? ` for ${formData.treatment}` : ''
    }.`
  )}`;

  const inputBaseClass =
    'w-full rounded-lg border border-[#E9ECEB] bg-[#F8F7F3]/50 px-4 py-3 text-sm text-[#252A2B] placeholder:text-[#252A2B]/45 transition-colors focus:border-[#183E43] focus:bg-white focus:outline-none';

  return (
    <section id="appointment" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Studio Booking Guidance & WhatsApp Card */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="text-xs font-semibold tracking-wider text-[#24565A]">
                {content.appointment.eyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] sm:text-4xl">
                {content.appointment.headline}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78">
                {content.appointment.subtitle}
              </p>

              <p className="mt-5 rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-4 text-xs leading-relaxed text-[#252A2B]/75">
                {content.appointment.demoNotice}
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-[#183E43]/15 bg-[#183E43] p-6 text-white sm:p-8">
              <p className="text-xs font-semibold tracking-wide text-[#D2B47A]">
                WhatsApp Concierge · Demo
              </p>
              <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                {content.appointment.whatsappTitle}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {content.appointment.whatsappSubtitle}
              </p>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[46px] w-full items-center justify-center gap-2.5 rounded-md bg-[#D2B47A] px-5 py-3 text-sm font-semibold text-[#183E43] transition-all duration-200 hover:bg-[#dec38e] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                <MessageCircle className="h-4 w-4" aria-hidden="true" />
                <span>{content.appointment.whatsappButton}</span>
              </a>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#E9ECEB] bg-white p-6 shadow-sm sm:p-8">
              {submittedRecord ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-6 text-center sm:px-6"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#183E43] text-[#D2B47A]">
                    <CheckCircle2 className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-semibold text-[#183E43]">
                    {content.appointment.form.successTitle}
                  </h3>
                  <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#252A2B]/80">
                    {content.appointment.form.successMessage}
                  </p>

                  <div className="mt-6 rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-5 text-left text-sm">
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div>
                        <span className="text-xs text-[#252A2B]/60">
                          {content.appointment.form.nameLabel}
                        </span>
                        <p className="font-semibold text-[#183E43]">{submittedRecord.name}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#252A2B]/60">
                          {content.appointment.form.treatmentLabel}
                        </span>
                        <p className="font-semibold text-[#183E43]">{submittedRecord.treatment}</p>
                      </div>
                      <div>
                        <span className="text-xs text-[#252A2B]/60">
                          {content.appointment.form.dateLabel}
                        </span>
                        <p className="font-semibold tabular-nums text-[#183E43]">
                          {submittedRecord.preferredDate}
                        </p>
                      </div>
                      <div>
                        <span className="text-xs text-[#252A2B]/60">
                          {content.appointment.form.timeLabel}
                        </span>
                        <p className="font-semibold tabular-nums text-[#183E43]">
                          {submittedRecord.preferredTime}
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-md border border-[#183E43] px-5 py-2.5 text-sm font-semibold text-[#183E43] transition-colors hover:bg-[#183E43] hover:text-white"
                  >
                    {content.appointment.form.resetButton}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="appt-name"
                        className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                      >
                        {content.appointment.form.nameLabel} *
                      </label>
                      <input
                        id="appt-name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={content.appointment.form.namePlaceholder}
                        className={inputBaseClass}
                      />
                      {errors.name && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appt-phone"
                        className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                      >
                        {content.appointment.form.phoneLabel} *
                      </label>
                      <input
                        id="appt-phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={content.appointment.form.phonePlaceholder}
                        className={inputBaseClass}
                      />
                      {errors.phone && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="appt-email"
                        className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                      >
                        {content.appointment.form.emailLabel} *
                      </label>
                      <input
                        id="appt-email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={content.appointment.form.emailPlaceholder}
                        className={inputBaseClass}
                      />
                      {errors.email && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.email}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appt-treatment"
                        className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                      >
                        {content.appointment.form.treatmentLabel} *
                      </label>
                      <select
                        id="appt-treatment"
                        value={formData.treatment}
                        onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                        className={inputBaseClass}
                      >
                        <option value="">{content.appointment.form.treatmentPlaceholder}</option>
                        {content.treatments.items.map((item) => (
                          <option key={item.id} value={item.name}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                      {errors.treatment && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.treatment}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="appt-date"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#183E43]"
                      >
                        <Calendar className="h-3.5 w-3.5 text-[#D2B47A]" aria-hidden="true" />
                        <span>{content.appointment.form.dateLabel} *</span>
                      </label>
                      <input
                        id="appt-date"
                        type="date"
                        min={todayIso}
                        value={formData.preferredDate}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredDate: e.target.value })
                        }
                        className={`${inputBaseClass} tabular-nums`}
                      />
                      {errors.preferredDate && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.preferredDate}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="appt-time"
                        className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-[#183E43]"
                      >
                        <Clock className="h-3.5 w-3.5 text-[#D2B47A]" aria-hidden="true" />
                        <span>{content.appointment.form.timeLabel} *</span>
                      </label>
                      <select
                        id="appt-time"
                        value={formData.preferredTime}
                        onChange={(e) =>
                          setFormData({ ...formData, preferredTime: e.target.value })
                        }
                        className={inputBaseClass}
                      >
                        <option value="">{content.appointment.form.timePlaceholder}</option>
                        {content.appointment.form.timeSlots.map((slot) => (
                          <option key={slot} value={slot}>
                            {slot}
                          </option>
                        ))}
                      </select>
                      {errors.preferredTime && (
                        <p role="alert" className="mt-1.5 text-xs font-medium text-red-700">
                          {errors.preferredTime}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="appt-message"
                      className="mb-1.5 block text-xs font-semibold text-[#183E43]"
                    >
                      {content.appointment.form.messageLabel}
                    </label>
                    <textarea
                      id="appt-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder={content.appointment.form.messagePlaceholder}
                      className={inputBaseClass}
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-md bg-[#183E43] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#24565A] hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
                  >
                    <Send className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                    <span>{content.appointment.form.submitButton}</span>
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
