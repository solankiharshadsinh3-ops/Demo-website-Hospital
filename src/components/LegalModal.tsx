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
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#183E43]/60 p-4 backdrop-blur-sm"
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
            className="relative w-full max-w-lg rounded-2xl border border-[#E9ECEB] bg-white p-6 shadow-2xl sm:p-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label={content.legal.close}
              className="absolute right-5 top-5 inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#E9ECEB] text-[#252A2B] hover:border-[#D2B47A]"
            >
              <X className="h-5 w-5" />
            </button>

            <h3
              id="legal-modal-title"
              className="pr-10 font-display text-2xl font-semibold text-[#183E43]"
            >
              {title}
            </h3>

            <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#252A2B]/80">
              {paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            <div className="mt-6 flex justify-end border-t border-[#E9ECEB] pt-4">
              <button
                type="button"
                onClick={onClose}
                className="min-h-[40px] rounded-md bg-[#183E43] px-5 py-2 text-sm font-semibold text-white hover:bg-[#24565A]"
              >
                {content.legal.close}
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
