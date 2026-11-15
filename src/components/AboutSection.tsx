import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MEDIA } from '../data/media';
import { SiteContent } from '../data/translations';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  content: SiteContent;
  onDiscoverClick: () => void;
}

export function AboutSection({ content, onDiscoverClick }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Photography Column */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:col-span-6"
          >
            <div className="animate-float-accent relative flex-1 overflow-hidden rounded-2xl border border-[#E9ECEB] bg-[#F8F7F3]">
              <ResilientImage
                src={MEDIA.aboutLounge}
                alt="Lumière Dental Studio calm patient reception lounge"
                className="h-full min-h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-xs text-[#252A2B]/65">{content.about.imageCaption}</p>
          </motion.div>

          {/* Editorial Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-wider text-[#24565A]">
              {content.about.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#183E43] sm:text-4xl">
              {content.about.headline}
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-[#24565A] sm:text-lg">
              {content.about.lead}
            </p>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#252A2B]/80 sm:text-base">
              {content.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-[#E9ECEB] pt-6">
              {content.about.pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#183E43] sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#252A2B]/75">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <button
                type="button"
                onClick={onDiscoverClick}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-md bg-[#183E43] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#24565A] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
              >
                <span>{content.about.cta}</span>
                <ArrowRight className="h-4 w-4 text-[#D2B47A]" aria-hidden="true" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
