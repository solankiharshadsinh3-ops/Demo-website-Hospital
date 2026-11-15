import { useEffect, useState } from 'react';
import {
  Activity,
  ArrowUpRight,
  Check,
  Clock,
  Crown,
  Gem,
  HeartPulse,
  Layers,
  Scan,
  ShieldCheck,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Stethoscope,
  Sun,
  X,
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiteContent } from '../data/translations';
import { TreatmentCategory, TreatmentItem } from '../types';
import { TiltCard } from './TiltCard';

interface TreatmentsSectionProps {
  content: SiteContent;
  onSelectTreatmentForBooking: (treatmentName: string) => void;
}

const ICON_MAP: Record<string, typeof Stethoscope> = {
  Stethoscope,
  Sun,
  Layers,
  Sparkles,
  HeartPulse,
  SlidersHorizontal,
  Scan,
  Gem,
  Crown,
  Smile,
  Activity,
  ShieldCheck,
};

const CATEGORIES: TreatmentCategory[] = ['all', 'cosmetic', 'restorative', 'orthodontics', 'preventive'];

export function TreatmentsSection({
  content,
  onSelectTreatmentForBooking,
}: TreatmentsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>('all');
  const [selectedTreatment, setSelectedTreatment] = useState<TreatmentItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedTreatment(null);
      }
    };
    if (selectedTreatment) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedTreatment]);

  const filteredTreatments =
    activeCategory === 'all'
      ? content.treatments.items
      : content.treatments.items.filter((item) => item.category === activeCategory);

  return (
    <section id="treatments" className="bg-[#F8F7F3] py-16 dark:bg-[#0C1E21] lg:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#24565A] dark:text-[#D2B47A]">
              {content.treatments.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] dark:text-white sm:text-4xl">
              {content.treatments.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78 dark:text-[#C4D4D6]">
              {content.treatments.subtitle}
            </p>
          </div>

          {/* Interactive Category Filter Buttons */}
          <div
            role="tablist"
            aria-label="Filter dental treatments"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#E9ECEB] bg-white p-1.5 dark:border-[#244B52] dark:bg-[#153136]"
          >
            {CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveCategory(category)}
                  className={`btn-tactile min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A] ${
                    isActive
                      ? 'bg-[#183E43] text-white shadow-[0_6px_16px_-4px_rgba(24,62,67,0.35)] hover:bg-[#24565A] dark:bg-[#D2B47A] dark:text-[#183E43] dark:shadow-[0_6px_16px_-4px_rgba(210,180,122,0.4)] dark:hover:bg-[#E2C994]'
                      : 'text-[#252A2B]/75 hover:bg-[#183E43]/10 hover:text-[#183E43] hover:shadow-sm dark:text-[#C8DCDE] dark:hover:bg-[#D2B47A]/20 dark:hover:text-[#D2B47A]'
                  }`}
                >
                  {content.treatments.categories[category]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Educational Disclaimer */}
        <p className="mt-5 text-xs text-[#252A2B]/65 dark:text-[#B5C7C9]">{content.treatments.disclaimer}</p>

        {/* 12 Treatments Grid */}
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTreatments.map((item) => {
            const Icon = ICON_MAP[item.iconName] ?? Sparkles;
            return (
              <motion.article
                key={item.id}
                layout
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.35 }}
                className="h-full"
              >
                <TiltCard className="group flex h-full flex-col justify-between rounded-xl border border-[#E9ECEB] bg-white p-6 transition-colors duration-200 hover:border-[#D2B47A] dark:border-[#244B52] dark:bg-[#153136] dark:hover:border-[#D2B47A]">
                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#F8F7F3] text-[#183E43] transition-colors duration-200 group-hover:bg-[#183E43] group-hover:text-[#D2B47A] dark:bg-[#0E2327] dark:text-[#D2B47A] dark:group-hover:bg-[#D2B47A] dark:group-hover:text-[#183E43]">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#252A2B]/60 dark:text-[#B5C7C9]">
                        <span className="font-semibold tabular-nums text-[#D2B47A]">
                          {item.number}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span>{content.treatments.categories[item.category]}</span>
                      </div>
                    </div>

                    <h3 className="mt-5 font-serif text-xl font-semibold text-[#183E43] dark:text-[#F8F7F3]">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#252A2B]/78 dark:text-[#C4D4D6]">
                      {item.shortDescription}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-[#E9ECEB] pt-4 dark:border-[#244B52]">
                    <span className="text-xs font-medium text-[#24565A] dark:text-[#C8DCDE]">{item.typicalVisit}</span>
                    <button
                      type="button"
                      onClick={() => setSelectedTreatment(item)}
                      className="group/btn btn-tactile -mr-2.5 inline-flex min-h-[36px] items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-semibold text-[#183E43] hover:bg-[#183E43] hover:text-white hover:shadow-[0_8px_18px_-4px_rgba(24,62,67,0.32)] dark:text-[#D2B47A] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43] dark:hover:shadow-[0_8px_18px_-4px_rgba(210,180,122,0.42)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A]"
                    >
                      <span>{content.treatments.learnMore}</span>
                      <ArrowUpRight
                        className="h-4 w-4 text-[#D2B47A] transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 dark:group-hover/btn:text-[#183E43]"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </TiltCard>
              </motion.article>
            );
          })}
        </div>
      </div>

      {/* Treatment Detail Modal */}
      <AnimatePresence>
        {selectedTreatment && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#183E43]/60 dark:bg-black/70 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-labelledby="treatment-modal-title"
            onClick={() => setSelectedTreatment(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-xl overflow-y-auto rounded-2xl border border-[#E9ECEB] bg-white p-6 shadow-2xl dark:border-[#244B52] dark:bg-[#11292D] sm:p-8"
            >
              <button
                type="button"
                onClick={() => setSelectedTreatment(null)}
                aria-label={content.treatments.closeModal}
                className="btn-tactile absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E9ECEB] text-[#252A2B] hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-white hover:shadow-[0_8px_18px_-4px_rgba(24,62,67,0.3)] dark:border-[#244B52] dark:text-[#F8F7F3] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43] dark:hover:shadow-[0_8px_18px_-4px_rgba(210,180,122,0.4)]"
              >
                <X className="h-5 w-5" />
              </button>

              <p className="text-xs font-semibold text-[#24565A] dark:text-[#D2B47A]">
                {selectedTreatment.number} · {content.treatments.categories[selectedTreatment.category]}
              </p>

              <h3
                id="treatment-modal-title"
                className="mt-2 pr-10 font-display text-2xl font-semibold text-[#183E43] dark:text-white sm:text-3xl"
              >
                {selectedTreatment.name}
              </h3>

              <div className="mt-4 flex items-center gap-2 text-xs font-medium text-[#252A2B]/70 dark:text-[#C4D4D6]">
                <Clock className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
                <span>
                  {content.treatments.typicalVisitLabel}: {selectedTreatment.typicalVisit}
                </span>
              </div>

              <p className="mt-5 text-sm leading-relaxed text-[#252A2B]/85 dark:text-[#D2DFE0] sm:text-base">
                {selectedTreatment.detailedOverview}
              </p>

              <div className="mt-6 rounded-xl border border-[#E9ECEB] bg-[#F8F7F3] p-5 dark:border-[#244B52] dark:bg-[#153136]">
                <h4 className="text-sm font-semibold text-[#183E43] dark:text-[#F8F7F3]">
                  {content.treatments.whatToExpectLabel}
                </h4>
                <ul className="mt-3 space-y-2.5">
                  {selectedTreatment.whatToExpect.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-[#252A2B]/80 dark:text-[#C4D4D6]">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#24565A] dark:text-[#D2B47A]" aria-hidden="true" />
                      <span>{step}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-4 text-xs text-[#252A2B]/60 dark:text-[#B5C7C9]">{content.treatments.disclaimer}</p>

              <div className="mt-6 flex flex-wrap items-center justify-end gap-3 border-t border-[#E9ECEB] pt-5 dark:border-[#244B52]">
                <button
                  type="button"
                  onClick={() => setSelectedTreatment(null)}
                  className="btn-luxury min-h-[42px] rounded-md border border-[#183E43]/20 bg-white px-4 py-2 text-sm font-medium text-[#183E43] hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-white hover:shadow-[0_8px_20px_-4px_rgba(24,62,67,0.28)] dark:border-[#244B52] dark:bg-[#153136] dark:text-[#F8F7F3] dark:hover:border-[#D2B47A] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43]"
                >
                  <span>{content.treatments.closeModal}</span>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    const treatmentName = selectedTreatment.name;
                    setSelectedTreatment(null);
                    onSelectTreatmentForBooking(treatmentName);
                  }}
                  className="btn-luxury min-h-[42px] rounded-md border border-[#183E43] bg-gradient-to-r from-[#183E43] to-[#24565A] px-5 py-2 text-sm font-semibold text-white shadow-sm hover:border-[#D2B47A] hover:from-[#D2B47A] hover:to-[#E2C994] hover:text-[#183E43] hover:shadow-[0_12px_26px_-6px_rgba(210,180,122,0.52)] dark:border-[#D2B47A] dark:from-[#D2B47A] dark:to-[#DFC48E] dark:text-[#183E43] dark:hover:from-[#24565A] dark:hover:to-[#183E43] dark:hover:text-white"
                >
                  <span>{content.treatments.bookThis}</span>
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
