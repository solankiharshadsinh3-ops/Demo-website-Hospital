import { ArrowRight, CalendarCheck, Cpu, HeartHandshake, Shield, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { MEDIA } from '../data/media';
import { SiteContent } from '../data/translations';
import { Magnetic } from './Magnetic';
import { ResilientImage } from './ResilientImage';

interface HeroProps {
  content: SiteContent;
  onBookClick: () => void;
  onExploreClick: () => void;
}

const TRUST_ICONS = [Shield, Cpu, HeartHandshake, Sparkles];

export function Hero({ content, onBookClick, onExploreClick }: HeroProps) {
  return (
    <section id="home" className="relative overflow-hidden bg-[#F8F7F3] dark:bg-[#0C1E21] transition-colors duration-300">
      {/* Subtle architectural gradient ambiance */}
      <div
        className="pointer-events-none absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-[#D2B47A]/12 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-12 left-0 h-[320px] w-[320px] rounded-full bg-[#183E43]/8 blur-3xl"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 lg:px-8 lg:pb-16 lg:pt-12">
        {/* 2-Column Editorial Hero Split */}
        <div className="grid items-stretch gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-6 lg:py-6"
          >
            <p className="mb-4 text-xs font-semibold tracking-wider text-[#24565A] dark:text-[#D2B47A] sm:text-sm">
              {content.hero.eyebrow}
            </p>

            <h1 className="font-display text-4xl font-semibold leading-[1.12] tracking-tight text-[#183E43] dark:text-white sm:text-5xl lg:text-[3.5rem]">
              {content.hero.headline}
            </h1>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-[#252A2B]/80 dark:text-[#D2DFE0] sm:text-lg">
              {content.hero.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Magnetic>
                <button
                  type="button"
                  onClick={onBookClick}
                  className="group btn-luxury inline-flex min-h-[48px] items-center gap-2.5 rounded-md border border-[#183E43] bg-gradient-to-r from-[#183E43] to-[#24565A] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_-6px_rgba(24,62,67,0.38)] hover:border-[#D2B47A] hover:from-[#D2B47A] hover:to-[#E2C994] hover:text-[#183E43] hover:shadow-[0_14px_30px_-6px_rgba(210,180,122,0.55)] active:shadow-sm dark:border-[#D2B47A] dark:from-[#D2B47A] dark:to-[#DFC48E] dark:text-[#183E43] dark:hover:from-[#24565A] dark:hover:to-[#183E43] dark:hover:text-white dark:hover:shadow-[0_14px_30px_-6px_rgba(210,180,122,0.42)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2B47A]"
                >
                  <CalendarCheck
                    className="h-4 w-4 text-[#D2B47A] transition-colors duration-200 group-hover:text-[#183E43] dark:text-[#183E43] dark:group-hover:text-[#D2B47A]"
                    aria-hidden="true"
                  />
                  <span>{content.hero.primaryCta}</span>
                </button>
              </Magnetic>

              <button
                type="button"
                onClick={onExploreClick}
                className="group btn-luxury inline-flex min-h-[48px] items-center gap-2 rounded-md border border-[#183E43]/25 bg-white px-6 py-3 text-sm font-semibold text-[#183E43] shadow-sm hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-white hover:shadow-[0_12px_26px_-6px_rgba(24,62,67,0.35)] active:shadow-sm dark:border-[#D2B47A]/40 dark:bg-[#153136] dark:text-[#F8F7F3] dark:hover:border-[#D2B47A] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43] dark:hover:shadow-[0_12px_26px_-6px_rgba(210,180,122,0.45)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43]"
              >
                <span>{content.hero.secondaryCta}</span>
                <ArrowRight
                  className="h-4 w-4 text-[#D2B47A] transition-all duration-200 group-hover:translate-x-1 dark:group-hover:text-[#183E43]"
                  aria-hidden="true"
                />
              </button>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E9ECEB] dark:border-[#244B52] pt-5 text-xs text-[#252A2B]/70 dark:text-[#B5C7C9]">
              <span className="font-medium text-[#183E43] dark:text-[#F8F7F3]">{content.brand.tagline}</span>
              <span aria-hidden="true" className="text-[#D2B47A]">
                ·
              </span>
              <span>{content.brand.demoNote}</span>
            </div>
          </motion.div>

          {/* Right Photography Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative lg:col-span-6"
          >
            <div className="animate-float-hero relative h-full min-h-[320px] overflow-hidden rounded-2xl border border-[#E9ECEB] dark:border-[#244B52] bg-white dark:bg-[#153136] shadow-sm sm:min-h-[420px] lg:min-h-[480px]">
              <ResilientImage
                src={MEDIA.heroSuite}
                alt="Lumière Dental Studio architectural dental treatment suite"
                loading="eager"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
              />
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#183E43]/55 via-transparent to-transparent"
                aria-hidden="true"
              />

              {/* Subtle floating studio note */}
              <div className="animate-float-overlay absolute bottom-5 left-5 right-5 rounded-xl border border-white/25 bg-[#183E43]/88 p-4 text-white backdrop-blur-md sm:left-6 sm:right-auto sm:max-w-sm">
                <p className="text-xs font-semibold tracking-wide text-[#D2B47A]">
                  {content.hero.floatingLabel}
                </p>
                <p className="mt-1 font-serif text-base font-medium text-white">
                  {content.hero.floatingTitle}
                </p>
                <p className="mt-1 text-xs leading-relaxed text-white/85">
                  {content.hero.floatingText}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Trust & Clinic Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5 }}
          className="mt-12 border-t border-[#E9ECEB] dark:border-[#244B52] pt-8"
        >
          <p className="mb-5 text-xs font-medium text-[#252A2B]/65 dark:text-[#B5C7C9]">{content.trust.demoCaption}</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {content.trust.items.map((item, idx) => {
              const IconComponent = TRUST_ICONS[idx % TRUST_ICONS.length];
              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-[#E9ECEB] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#D2B47A]/70 hover:shadow-sm dark:border-[#244B52] dark:bg-[#153136] dark:hover:border-[#D2B47A]/70"
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#F8F7F3] text-[#183E43] transition-colors group-hover:bg-[#183E43] group-hover:text-[#D2B47A] dark:bg-[#0E2327] dark:text-[#D2B47A] dark:group-hover:bg-[#D2B47A] dark:group-hover:text-[#183E43]">
                      <IconComponent className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-xs font-semibold tabular-nums text-[#24565A] dark:text-[#D2B47A]">
                      {item.metric}
                    </span>
                  </div>
                  <h2 className="mt-4 font-serif text-lg font-semibold text-[#183E43] dark:text-[#F8F7F3]">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-[#252A2B]/75 dark:text-[#C4D4D6]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
