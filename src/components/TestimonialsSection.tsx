import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiteContent } from '../data/translations';

interface TestimonialsSectionProps {
  content: SiteContent;
}

export function TestimonialsSection({ content }: TestimonialsSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const items = content.testimonials.items;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % items.length);
  };

  return (
    <section id="reviews" className="bg-[#F8F7F3] dark:bg-[#0C1E21] py-16 transition-colors duration-300 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#24565A] dark:text-[#D2B47A]">
              {content.testimonials.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] dark:text-white sm:text-4xl">
              {content.testimonials.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78 dark:text-[#D2DFE0]">
              {content.testimonials.subtitle}
            </p>
            <p className="mt-2 text-xs font-medium text-[#24565A] dark:text-[#C8DCDE]">
              {content.testimonials.demoNotice}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={content.testimonials.prevLabel}
              className="btn-tactile inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E9ECEB] dark:border-[#244B52] bg-white dark:bg-[#153136] text-[#183E43] dark:text-[#F8F7F3] shadow-sm hover:border-[#D2B47A] dark:hover:border-[#D2B47A] hover:bg-[#183E43] dark:hover:bg-[#D2B47A] hover:text-[#D2B47A] dark:hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(24,62,67,0.3)] dark:hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={content.testimonials.nextLabel}
              className="btn-tactile inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E9ECEB] dark:border-[#244B52] bg-white dark:bg-[#153136] text-[#183E43] dark:text-[#F8F7F3] shadow-sm hover:border-[#D2B47A] dark:hover:border-[#D2B47A] hover:bg-[#183E43] dark:hover:bg-[#D2B47A] hover:text-[#D2B47A] dark:hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(24,62,67,0.3)] dark:hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.45)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Active Testimonial Spotlight */}
        <div className="mt-8 rounded-2xl border border-[#E9ECEB] dark:border-[#244B52] bg-white dark:bg-[#153136] p-6 transition-colors duration-300 sm:p-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={items[activeIndex].id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25 }}
              className="grid gap-6 lg:grid-cols-12 lg:items-center"
            >
              <div className="lg:col-span-8">
                <Quote className="h-8 w-8 text-[#D2B47A]" aria-hidden="true" />
                <blockquote className="mt-4 font-serif text-xl leading-relaxed text-[#183E43] dark:text-white sm:text-2xl">
                  “{items[activeIndex].quote}”
                </blockquote>
              </div>
              <div className="flex flex-col justify-center border-t border-[#E9ECEB] dark:border-[#244B52] pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center gap-1 text-[#D2B47A]" aria-label="5 out of 5 illustrative stars">
                  {Array.from({ length: items[activeIndex].rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 font-serif text-lg font-semibold text-[#183E43] dark:text-[#F8F7F3]">
                  {items[activeIndex].patientName}
                </p>
                <p className="mt-1 text-xs text-[#252A2B]/65 dark:text-[#B5C7C9]">{items[activeIndex].visitType}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Quick Selector Grid of All 4 Sample Reviews */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, idx) => {
            const isSelected = idx === activeIndex;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveIndex(idx)}
                className={`btn-tactile rounded-xl border p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A] ${
                  isSelected
                    ? 'border-[#D2B47A] bg-white dark:bg-[#153136] shadow-[0_10px_24px_-8px_rgba(24,62,67,0.16)] dark:shadow-[0_10px_24px_-8px_rgba(210,180,122,0.2)]'
                    : 'border-[#E9ECEB] dark:border-[#244B52] bg-white/70 dark:bg-[#153136]/65 hover:border-[#D2B47A] hover:bg-white dark:hover:bg-[#193B40] hover:shadow-[0_10px_24px_-8px_rgba(24,62,67,0.16)] dark:hover:shadow-[0_10px_24px_-8px_rgba(210,180,122,0.22)]'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-base font-semibold text-[#183E43] dark:text-[#F8F7F3]">
                    {item.patientName}
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-[#D2B47A]">
                    5.0 ★
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#24565A] dark:text-[#D2B47A]">{item.visitType}</p>
                <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-[#252A2B]/75 dark:text-[#C4D4D6]">
                  {item.quote}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
