import { useEffect, useState } from 'react';
import { ArrowRight, GraduationCap, Languages, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { MEDIA } from '../data/media';
import { SiteContent } from '../data/translations';
import { DoctorItem } from '../types';
import { ResilientImage } from './ResilientImage';

interface DoctorsSectionProps {
  content: SiteContent;
  onBookWithDoctor: (doctorName: string) => void;
}

export function DoctorsSection({ content, onBookWithDoctor }: DoctorsSectionProps) {
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedDoctor(null);
      }
    };
    if (selectedDoctor) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedDoctor]);

  return (
    <section id="doctors" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#24565A]">
            {content.doctors.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] sm:text-4xl">
            {content.doctors.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78">
            {content.doctors.subtitle}
          </p>
          <p className="mt-3 text-xs font-medium text-[#24565A]">
            {content.doctors.demoBanner}
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {content.doctors.items.map((doctor) => (
            <motion.article
              key={doctor.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45 }}
              className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#E9ECEB] bg-[#F8F7F3] transition-all duration-200 hover:border-[#D2B47A] hover:shadow-md"
            >
              <div>
                <div className="aspect-[3/4] overflow-hidden bg-[#E9ECEB]">
                  <ResilientImage
                    src={MEDIA.doctors[doctor.imageKey]}
                    alt={`${doctor.name} — ${doctor.specialization}`}
                    fallbackTitle={doctor.name}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                <div className="p-6">
                  <p className="text-xs font-medium text-[#24565A]">{doctor.experienceNote}</p>
                  <h3 className="mt-2 font-serif text-2xl font-semibold text-[#183E43]">
                    {doctor.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#24565A]">
                    {doctor.specialization}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-[#252A2B]/65">
                    {doctor.qualification}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-[#252A2B]/80">{doctor.intro}</p>
                </div>
              </div>

              <div className="border-t border-[#E9ECEB] bg-white px-6 py-4">
                <button
                  type="button"
                  onClick={() => setSelectedDoctor(doctor)}
                  className="inline-flex min-h-[40px] w-full items-center justify-between text-sm font-semibold text-[#183E43] transition-colors hover:text-[#24565A] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
                >
                  <span>{content.doctors.viewProfile}</span>
                  <ArrowRight className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Doctor Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#183E43]/60 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="doctor-modal-title"
            onClick={() => setSelectedDoctor(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#E9ECEB] bg-white p-6 shadow-2xl sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedDoctor(null)}
                aria-label={content.treatments.closeModal}
                className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E9ECEB] text-[#252A2B] transition-colors hover:border-[#D2B47A] hover:bg-[#F8F7F3]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid gap-6 sm:grid-cols-12">
                <div className="sm:col-span-5">
                  <div className="aspect-[3/4] overflow-hidden rounded-xl border border-[#E9ECEB]">
                    <ResilientImage
                      src={MEDIA.doctors[selectedDoctor.imageKey]}
                      alt={selectedDoctor.name}
                      className="h-full w-full object-cover object-top"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-between sm:col-span-7">
                  <div>
                    <p className="text-xs font-medium text-[#24565A]">
                      {selectedDoctor.experienceNote}
                    </p>
                    <h3
                      id="doctor-modal-title"
                      className="mt-1 font-display text-2xl font-semibold text-[#183E43]"
                    >
                      {selectedDoctor.name}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-[#24565A]">
                      {selectedDoctor.specialization}
                    </p>

                    <div className="mt-4 space-y-2 border-y border-[#E9ECEB] py-3 text-xs text-[#252A2B]/80">
                      <div className="flex items-start gap-2">
                        <GraduationCap className="mt-0.5 h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                        <span>{selectedDoctor.qualification}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Languages className="mt-0.5 h-4 w-4 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                        <span>
                          {content.doctors.languagesLabel}: {selectedDoctor.languages}
                        </span>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-[#252A2B]/85">
                      {selectedDoctor.fullBio}
                    </p>

                    <div className="mt-4">
                      <p className="text-xs font-semibold text-[#183E43]">
                        {content.doctors.focusLabel}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-[#252A2B]/75">
                        {selectedDoctor.focusAreas.join(' · ')}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        const docName = selectedDoctor.name;
                        setSelectedDoctor(null);
                        onBookWithDoctor(docName);
                      }}
                      className="min-h-[44px] w-full rounded-md bg-[#183E43] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#24565A]"
                    >
                      {content.doctors.bookWithDoctor}
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
