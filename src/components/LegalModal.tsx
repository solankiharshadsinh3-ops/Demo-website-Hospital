import { useEffect } from 'react';
import { X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { SiteContent } from '../data/translations';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  content: SiteContent;
  onClose: () => void;
}

export function LegalModal({ type, content, onClose }: LegalModalProps) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [type, onClose]);

  const title = type === 'privacy' ? content.legal.privacyTitle : content.legal.termsTitle;
  const paragraphs = type === 'privacy' ? content.legal.privacyBody : content.legal.termsBody;

  return (
    <AnimatePresence>
      {type && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#183E43]/60 dark:bg-black/70 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-labelledby="legal-modal-title"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg rounded-2xl border border-[#E9ECEB] dark:border-[#244B52] bg-white dark:bg-[#11292D] p-6 shadow-2xl transition-colors duration-300 sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={content.legal.close}
              className="btn-tactile absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E9ECEB] dark:border-[#244B52] text-[#252A2B] dark:text-[#F8F7F3] hover:border-[#D2B47A] hover:bg-[#183E43] hover:text-white hover:shadow-[0_8px_18px_-4px_rgba(24,62,67,0.3)] dark:hover:bg-[#D2B47A] dark:hover:text-[#183E43] dark:hover:shadow-[0_8px_18px_-4px_rgba(210,180,122,0.4)]"
            >
              <X className="h-5 w-5" />
            </button>

            <h3
              id="legal-modal-title"
              className="pr-10 font-display text-2xl font-semibold text-[#183E43] dark:text-white"
            >
              {title}
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#252A2B]/80 dark:text-[#D2DFE0]">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex justify-end border-t border-[#E9ECEB] dark:border-[#244B52] pt-4">
              <button
                type="button"
                onClick={onClose}
                className="btn-luxury min-h-[40px] rounded-md border border-[#183E43] dark:border-[#D2B47A] bg-gradient-to-r from-[#183E43] to-[#24565A] dark:from-[#D2B47A] dark:to-[#DFC48E] px-5 py-2 text-sm font-semibold text-white dark:text-[#183E43] shadow-sm hover:border-[#D2B47A] hover:from-[#D2B47A] hover:to-[#E2C994] dark:hover:from-[#24565A] dark:hover:to-[#183E43] hover:text-[#183E43] dark:hover:text-white hover:shadow-[0_12px_26px_-6px_rgba(210,180,122,0.52)]"
              >
                <span>{content.legal.close}</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
