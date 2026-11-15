import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Expand, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { MEDIA } from '../data/media';
import { SiteContent } from '../data/translations';
import { GalleryCategory } from '../types';
import { ResilientImage } from './ResilientImage';
import { TiltCard } from './TiltCard';

interface SmileGallerySectionProps {
  content: SiteContent;
}

const GALLERY_CATEGORIES: GalleryCategory[] = [
  'all',
  'smile-makeover',
  'teeth-whitening',
  'dental-veneers',
  'orthodontics',
  'dental-implants',
];

export function SmileGallerySection({ content }: SmileGallerySectionProps) {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === 'all'
      ? content.gallery.items
      : content.gallery.items.filter((item) => item.category === activeCategory);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (event.key === 'Escape') {
        setLightboxIndex(null);
      } else if (event.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev === null ? null : (prev + 1) % filteredItems.length));
      } else if (event.key === 'ArrowLeft') {
        setLightboxIndex((prev) =>
          prev === null ? null : (prev - 1 + filteredItems.length) % filteredItems.length
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const activeLightboxItem = lightboxIndex !== null ? filteredItems[lightboxIndex] : null;

  return (
    <section id="gallery" className="bg-[#F8F7F3] py-16 dark:bg-[#0C1E21] lg:py-24 transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-wider text-[#24565A] dark:text-[#D2B47A]">
              {content.gallery.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold text-[#183E43] dark:text-white sm:text-4xl">
              {content.gallery.headline}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#252A2B]/78 dark:text-[#C4D4D6]">
              {content.gallery.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter smile gallery"
            className="flex flex-wrap items-center gap-1.5 rounded-lg border border-[#E9ECEB] bg-white p-1.5 dark:border-[#244B52] dark:bg-[#153136]"
          >
            {GALLERY_CATEGORIES.map((category) => {
              const isActive = activeCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => {
                    setActiveCategory(category);
                    setLightboxIndex(null);
                  }}
                  className={`btn-tactile min-h-[38px] rounded-md px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A] ${
                    isActive
                      ? 'bg-[#183E43] text-white shadow-[0_6px_16px_-4px_rgba(24,62,67,0.35)] hover:bg-[#24565A] dark:bg-[#D2B47A] dark:text-[#183E43] dark:shadow-[0_6px_16px_-4px_rgba(210,180,122,0.4)] dark:hover:bg-[#E2C994]'
                      : 'text-[#252A2B]/75 hover:bg-[#183E43]/10 hover:text-[#183E43] hover:shadow-sm dark:text-[#C8DCDE] dark:hover:bg-[#D2B47A]/20 dark:hover:text-[#D2B47A]'
                  }`}
                >
                  {content.gallery.categories[category]}
                </button>
              );
            })}
          </div>
        </div>

        {/* Clear Illustrative Notice */}
        <p className="mt-5 rounded-lg border border-[#E9ECEB] bg-white px-4 py-3 text-xs leading-relaxed text-[#252A2B]/75 dark:border-[#244B52] dark:bg-[#153136] dark:text-[#C4D4D6]">
          {content.gallery.demoNotice}
        </p>

        {/* Gallery Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35 }}
              className="h-full"
            >
              <TiltCard className="h-full rounded-2xl border border-[#E9ECEB] bg-white transition-colors duration-200 hover:border-[#D2B47A] dark:border-[#244B52] dark:bg-[#153136] dark:hover:border-[#D2B47A]">
                <button
                  type="button"
                  onClick={() => setLightboxIndex(idx)}
                  className="group flex h-full w-full flex-col overflow-hidden rounded-2xl text-left transition-transform duration-150 active:scale-[0.985] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#183E43] dark:focus-visible:outline-[#D2B47A]"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#E9ECEB] dark:bg-[#0E2327]">
                    <ResilientImage
                      src={MEDIA.gallery[item.imageKey]}
                      alt={`${item.title} — ${item.note}`}
                      fallbackTitle={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#183E43]/70 via-transparent to-transparent opacity-80 transition-opacity group-hover:opacity-95"
                      aria-hidden="true"
                    />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                      <span className="text-xs font-medium text-[#D2B47A]">
                        {item.categoryLabel}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-white/90">
                        <Expand className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{content.gallery.zoomHint}</span>
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 p-5">
                    <h3 className="font-serif text-lg font-semibold text-[#183E43] dark:text-[#F8F7F3]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#252A2B]/75 dark:text-[#C4D4D6]">
                      {item.caption}
                    </p>
                    <p className="mt-3 text-xs text-[#252A2B]/55 dark:text-[#98B2B5]">{item.note}</p>
                  </div>
                </button>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Preview Modal */}
      <AnimatePresence>
        {activeLightboxItem && lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#183E43]/88 dark:bg-black/85 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={activeLightboxItem.title}
            onClick={() => setLightboxIndex(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-2xl border border-white/15 bg-white shadow-2xl dark:border-[#244B52] dark:bg-[#11292D]"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(null)}
                aria-label={content.gallery.closeLabel}
                className="btn-tactile absolute right-4 top-4 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#D2B47A]/40 bg-[#183E43]/85 text-white shadow-md hover:border-[#D2B47A] hover:bg-[#D2B47A] hover:text-[#183E43] hover:shadow-[0_8px_20px_-4px_rgba(210,180,122,0.5)]"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/10] w-full bg-[#F8F7F3] dark:bg-[#0C1E21]">
                <ResilientImage
                  src={MEDIA.gallery[activeLightboxItem.imageKey]}
                  alt={activeLightboxItem.title}
                  className="h-full w-full object-cover"
                />

                {filteredItems.length > 1 && (
                  <>
                    <button
                      type="button"
                      aria-label={content.gallery.prevLabel}
                      onClick={() =>
                        setLightboxIndex(
                          (lightboxIndex - 1 + filteredItems.length) % filteredItems.length
                        )
                      }
                      className="btn-tactile-centered absolute left-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9ECEB] bg-white/95 text-[#183E43] shadow-md hover:scale-105 hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-[#D2B47A] hover:shadow-[0_8px_22px_-4px_rgba(210,180,122,0.45)] active:scale-95 dark:border-[#244B52] dark:bg-[#11292D]/95 dark:text-[#F8F7F3] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43]"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      aria-label={content.gallery.nextLabel}
                      onClick={() => setLightboxIndex((lightboxIndex + 1) % filteredItems.length)}
                      className="btn-tactile-centered absolute right-4 top-1/2 inline-flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-[#E9ECEB] bg-white/95 text-[#183E43] shadow-md hover:scale-105 hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-[#D2B47A] hover:shadow-[0_8px_22px_-4px_rgba(210,180,122,0.45)] active:scale-95 dark:border-[#244B52] dark:bg-[#11292D]/95 dark:text-[#F8F7F3] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43]"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              <div className="flex flex-col justify-between gap-3 p-6 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs font-semibold text-[#24565A] dark:text-[#D2B47A]">
                    {activeLightboxItem.categoryLabel} · {activeLightboxItem.note}
                  </p>
                  <h3 className="mt-1 font-serif text-xl font-semibold text-[#183E43] dark:text-white">
                    {activeLightboxItem.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#252A2B]/80 dark:text-[#C4D4D6]">{activeLightboxItem.caption}</p>
                </div>
                <span className="text-xs font-semibold tabular-nums text-[#252A2B]/60 dark:text-[#B5C7C9] shrink-0">
                  {lightboxIndex + 1} / {filteredItems.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
