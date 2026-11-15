import { useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { SiteContent } from '../data/translations';

interface FaqSectionProps {
  content: SiteContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  const [openIds, setOpenIds] = useState<string[]>(() =>
    content.faq.items[0]?.id ? [content.faq.items[0].id] : []
  );
  const triggerRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const prefersReducedMotion = useReducedMotion();

  const toggleItem = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const total = content.faq.items.length;
    if (total === 0) return;

    let nextIndex: number | null = null;
    if (event.key === 'ArrowDown') {
      nextIndex = (index + 1) % total;
    } else if (event.key === 'ArrowUp') {
      nextIndex = (index - 1 + total) % total;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = total - 1;
    }

    if (nextIndex !== null) {
      event.preventDefault();
      triggerRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <section id="faq" className="bg-[#F8F7F3] dark:bg-[#0C1E21] py-16 transition-colors duration-300 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wider text-[#24565A] dark:text-[#D2B47A]">
            {content.faq.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] dark:text-white sm:text-4xl">
            {content.faq.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#252A2B]/78 dark:text-[#D2DFE0]">
            {content.faq.subtitle}
          </p>
          <p className="mt-2 text-xs text-[#252A2B]/60 dark:text-[#B5C7C9]">{content.faq.educationalNote}</p>
        </div>

        <div className="mt-10 space-y-3.5">
          {content.faq.items.map((item, idx) => {
            const isOpen = openIds.includes(item.id);
            const triggerId = `faq-trigger-${item.id}`;
            const panelId = `faq-panel-${item.id}`;
            const indexLabel = String(idx + 1).padStart(2, '0');

            return (
              <div
                key={item.id}
                className={`overflow-hidden rounded-2xl border bg-white dark:bg-[#153136] transition-colors duration-200 ${
                  isOpen
                    ? 'border-[#D2B47A] shadow-[0_10px_28px_-14px_rgba(24,62,67,0.14)] dark:shadow-[0_12px_30px_-14px_rgba(0,0,0,0.45)]'
                    : 'border-[#E9ECEB] dark:border-[#244B52] hover:border-[#D2B47A]/60 dark:hover:border-[#D2B47A]/60'
                }`}
              >
                <h3>
                  <button
                    ref={(el) => {
                      triggerRefs.current[idx] = el;
                    }}
                    id={triggerId}
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => toggleItem(item.id)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className="group flex min-h-[64px] w-full items-center justify-between gap-4 px-5 py-4 text-left transition-all duration-200 hover:bg-[#F8F7F3]/85 dark:hover:bg-[#193B40]/85 active:scale-[0.992] sm:px-7 sm:py-5 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A]"
                  >
                    <span className="flex items-baseline gap-3.5 sm:gap-4">
                      <span
                        aria-hidden="true"
                        className={`text-xs font-semibold tabular-nums transition-colors duration-200 ${
                          isOpen
                            ? 'text-[#D2B47A]'
                            : 'text-[#24565A]/65 dark:text-[#98B2B5] group-hover:text-[#D2B47A]'
                        }`}
                      >
                        {indexLabel}
                      </span>
                      <span className="font-serif text-lg font-medium leading-snug text-[#183E43] dark:text-[#F8F7F3] transition-colors duration-200 group-hover:text-[#24565A] dark:group-hover:text-[#D2B47A] sm:text-xl">
                        {item.question}
                      </span>
                    </span>

                    {/* Animated Plus / Minus Indicator */}
                    <span
                      aria-hidden="true"
                      className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-all duration-200 ${
                        isOpen
                          ? 'border-[#183E43] dark:border-[#D2B47A] bg-[#183E43] dark:bg-[#D2B47A] text-[#D2B47A] dark:text-[#183E43] shadow-[0_4px_12px_-2px_rgba(210,180,122,0.35)]'
                          : 'border-[#E9ECEB] dark:border-[#244B52] bg-[#F8F7F3] dark:bg-[#0E2327] text-[#183E43] dark:text-[#F8F7F3] group-hover:border-[#D2B47A] group-hover:bg-[#183E43] dark:group-hover:bg-[#D2B47A] group-hover:text-[#D2B47A] dark:group-hover:text-[#183E43] group-hover:shadow-[0_4px_12px_-2px_rgba(210,180,122,0.4)]'
                      }`}
                    >
                      <span className="absolute h-[1.5px] w-3.5 rounded-full bg-current transition-transform duration-250" />
                      <span
                        className={`absolute h-3.5 w-[1.5px] rounded-full bg-current transition-all duration-250 ease-out ${
                          isOpen ? 'rotate-90 scale-y-0 opacity-0' : 'rotate-0 scale-y-100 opacity-100'
                        }`}
                      />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={panelId}
                      role="region"
                      aria-labelledby={triggerId}
                      initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={
                        prefersReducedMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }
                      }
                      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={
                        prefersReducedMotion
                          ? { duration: 0.01 }
                          : {
                              height: { duration: 0.28, ease: [0.16, 1, 0.3, 1] },
                              opacity: { duration: 0.22, ease: 'easeOut' },
                            }
                      }
                      className="overflow-hidden"
                    >
                      <div className="border-t border-[#E9ECEB]/80 dark:border-[#244B52] px-5 pb-6 pt-4 text-sm leading-relaxed text-[#252A2B]/82 dark:text-[#D2DFE0] sm:px-7 sm:pl-[3.65rem] sm:text-base">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
