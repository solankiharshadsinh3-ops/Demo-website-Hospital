import { Cpu, FileText, HeartHandshake, ShieldCheck, Sliders, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { SiteContent } from '../data/translations';

interface WhyChooseUsSectionProps {
  content: SiteContent;
}

const PILLAR_ICONS = [Cpu, Sliders, Sparkles, HeartHandshake, ShieldCheck, FileText];

export function WhyChooseUsSection({ content }: WhyChooseUsSectionProps) {
  return (
    <section className="bg-[#183E43] py-16 text-white lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-wider text-[#D2B47A]">
            {content.whyChooseUs.eyebrow}
          </p>
          <h2 className="mt-2 font-display text-3xl font-semibold text-white sm:text-4xl">
            {content.whyChooseUs.headline}
          </h2>
          <p className="mt-3 text-base leading-relaxed text-white/80">
            {content.whyChooseUs.subtitle}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {content.whyChooseUs.items.map((item, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="group rounded-2xl border border-white/12 bg-[#24565A]/55 p-6 transition-all duration-200 hover:border-[#D2B47A]/60 hover:bg-[#24565A]"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#D2B47A]/35 bg-[#183E43] text-[#D2B47A]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-serif text-lg font-medium tabular-nums text-[#D2B47A]/80">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-5 font-serif text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
