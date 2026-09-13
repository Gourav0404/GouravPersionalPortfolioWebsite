import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, X, ZoomIn } from "lucide-react";

export default function CertificateCard({ certificate, index = 0 }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
        className="overflow-hidden rounded-xl border border-ink-200/70 bg-white shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-paper-100 dark:bg-ink-900">
          {!imageFailed ? (
            <img
              src={certificate.image}
              alt={`${certificate.title} certificate`}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-300 dark:text-ink-600">
              <Award size={28} aria-hidden="true" />
              <span className="font-mono text-xs">image not added yet</span>
            </div>
          )}
        </div>
        <div className="p-5">
          <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper-50">
            {certificate.title}
          </h3>
          <p className="mt-1 text-sm text-ink-400 dark:text-ink-300">
            {certificate.issuer} · {certificate.date}
          </p>
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-signal hover:text-signal-dark"
          >
            <ZoomIn size={15} aria-hidden="true" />
            View Certificate
          </button>
        </div>
      </motion.article>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${certificate.title} certificate preview`}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="absolute inset-0 bg-ink-950/80"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-ink-800"
            >
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close certificate preview"
                className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950/60 text-white hover:bg-ink-950/80"
              >
                <X size={18} />
              </button>
              {!imageFailed ? (
                <img
                  src={certificate.image}
                  alt={`${certificate.title} certificate, full size`}
                  className="max-h-[80vh] w-full object-contain"
                />
              ) : (
                <div className="flex h-64 w-full flex-col items-center justify-center gap-2 text-ink-300 dark:text-ink-600">
                  <Award size={32} aria-hidden="true" />
                  <span className="font-mono text-xs">image not added yet</span>
                </div>
              )}
              <div className="border-t border-ink-200/70 p-5 dark:border-ink-700">
                <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper-50">
                  {certificate.title}
                </h3>
                <p className="mt-1 text-sm text-ink-400 dark:text-ink-300">
                  {certificate.issuer} · {certificate.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
