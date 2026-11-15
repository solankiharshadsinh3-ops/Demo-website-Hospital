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
    <section id="reviews" className="bg-[#F8F7F3] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#24565A]">
              {content.testimonials.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] sm:text-4xl">
              {content.testimonials.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78">
              {content.testimonials.subtitle}
            </p>
            <p className="mt-2 text-xs font-medium text-[#24565A]">
              {content.testimonials.demoNotice}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={handlePrev}
              aria-label={content.testimonials.prevLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E9ECEB] bg-white text-[#183E43] transition-colors hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              aria-label={content.testimonials.nextLabel}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#E9ECEB] bg-white text-[#183E43] transition-colors hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Featured Active Testimonial Spotlight */}
        <div className="mt-8 rounded-2xl border border-[#E9ECEB] bg-white p-6 sm:p-10">
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
                <blockquote className="mt-4 font-serif text-xl leading-relaxed text-[#183E43] sm:text-2xl">
                  “{items[activeIndex].quote}”
                </blockquote>
              </div>
              <div className="flex flex-col justify-center border-t border-[#E9ECEB] pt-5 lg:col-span-4 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="flex items-center gap-1 text-[#D2B47A]" aria-label="5 out of 5 illustrative stars">
                  {Array.from({ length: items[activeIndex].rating }).map((_, idx) => (
                    <Star key={idx} className="h-4 w-4 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="mt-3 font-serif text-lg font-semibold text-[#183E43]">
                  {items[activeIndex].patientName}
                </p>
                <p className="mt-1 text-xs text-[#252A2B]/65">{items[activeIndex].visitType}</p>
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
                className={`rounded-xl border p-5 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] ${
                  isSelected
                    ? 'border-[#D2B47A] bg-white shadow-sm'
                    : 'border-[#E9ECEB] bg-white/70 hover:border-[#D2B47A]/60 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="font-serif text-base font-semibold text-[#183E43]">
                    {item.patientName}
                  </span>
                  <span className="text-xs font-semibold tabular-nums text-[#D2B47A]">
                    5.0 ★
                  </span>
                </div>
                <p className="mt-1 text-xs text-[#24565A]">{item.visitType}</p>
                <p className="mt-2.5 line-clamp-2 text-xs leading-relaxed text-[#252A2B]/75">
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
