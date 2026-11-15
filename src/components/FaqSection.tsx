import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiteContent } from '../data/translations';

interface FaqSectionProps {
  content: SiteContent;
}

export function FaqSection({ content }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(content.faq.items[0]?.id ?? null);

  return (
    <section id="faq" className="bg-[#F8F7F3] py-16 lg:py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold tracking-wider text-[#24565A]">
            {content.faq.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] sm:text-4xl">
            {content.faq.headline}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-[#252A2B]/78">
            {content.faq.subtitle}
          </p>
          <p className="mt-2 text-xs text-[#252A2B]/60">{content.faq.educationalNote}</p>
        </div>

        <div className="mt-10 divide-y divide-[#E9ECEB] overflow-hidden rounded-2xl border border-[#E9ECEB] bg-white">
          {content.faq.items.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="flex min-h-[60px] w-full items-center justify-between gap-4 px-6 py-4 text-left transition-colors hover:bg-[#F8F7F3]/60 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#183E43]"
                >
                  <span className="font-serif text-lg font-medium text-[#183E43]">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-[#D2B47A] transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5 pt-1 text-sm leading-relaxed text-[#252A2B]/80 sm:text-base"
                    >
                      {item.answer}
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
