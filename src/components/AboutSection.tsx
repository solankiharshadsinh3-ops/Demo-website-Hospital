import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';
import { MEDIA } from '../data/media';
import { SiteContent } from '../data/translations';
import { Magnetic } from './Magnetic';
import { ResilientImage } from './ResilientImage';

interface AboutSectionProps {
  content: SiteContent;
  onDiscoverClick: () => void;
}

export function AboutSection({ content, onDiscoverClick }: AboutSectionProps) {
  return (
    <section id="about" className="bg-white py-16 dark:bg-[#11292D] lg:py-24 transition-colors duration-300">
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
            <div className="animate-float-accent relative flex-1 overflow-hidden rounded-2xl border border-[#E9ECEB] bg-[#F8F7F3] dark:border-[#244B52] dark:bg-[#153136]">
              <ResilientImage
                src={MEDIA.aboutLounge}
                alt="Lumière Dental Studio calm patient reception lounge"
                className="h-full min-h-[340px] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <p className="mt-3 text-xs text-[#252A2B]/65 dark:text-[#B5C7C9]">{content.about.imageCaption}</p>
          </motion.div>

          {/* Editorial Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center lg:col-span-6"
          >
            <p className="text-xs font-semibold tracking-wider text-[#24565A] dark:text-[#D2B47A]">
              {content.about.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold leading-tight text-[#183E43] dark:text-white sm:text-4xl">
              {content.about.headline}
            </h2>
            <p className="mt-4 text-base font-medium leading-relaxed text-[#24565A] dark:text-[#C8DCDE] sm:text-lg">
              {content.about.lead}
            </p>

            <div className="mt-4 space-y-4 text-sm leading-relaxed text-[#252A2B]/80 dark:text-[#C4D4D6] sm:text-base">
              {content.about.paragraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-8 space-y-4 border-t border-[#E9ECEB] pt-6 dark:border-[#244B52]">
              {content.about.pillars.map((pillar) => (
                <div key={pillar.title} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#D2B47A]" aria-hidden="true" />
                  <div>
                    <h3 className="text-sm font-semibold text-[#183E43] dark:text-[#F8F7F3] sm:text-base">
                      {pillar.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-relaxed text-[#252A2B]/75 dark:text-[#B5C7C9]">
                      {pillar.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Magnetic>
                <button
                  type="button"
                  onClick={onDiscoverClick}
                  className="group btn-luxury inline-flex min-h-[46px] items-center gap-2 rounded-md border border-[#183E43] bg-gradient-to-r from-[#183E43] to-[#24565A] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_22px_-6px_rgba(24,62,67,0.35)] hover:border-[#D2B47A] hover:from-[#D2B47A] hover:to-[#E2C994] hover:text-[#183E43] hover:shadow-[0_14px_28px_-6px_rgba(210,180,122,0.5)] active:shadow-sm dark:border-[#D2B47A] dark:from-[#D2B47A] dark:to-[#DFC48E] dark:text-[#183E43] dark:hover:from-[#24565A] dark:hover:to-[#183E43] dark:hover:text-white dark:hover:shadow-[0_14px_28px_-6px_rgba(210,180,122,0.42)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
                >
                  <span>{content.about.cta}</span>
                  <ArrowRight
                    className="h-4 w-4 text-[#D2B47A] transition-all duration-200 group-hover:translate-x-1 group-hover:text-[#183E43] dark:text-[#183E43] dark:group-hover:text-[#D2B47A]"
                    aria-hidden="true"
                  />
                </button>
              </Magnetic>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
