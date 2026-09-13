import { motion } from "framer-motion";

/**
 * Consistent section heading used across pages.
 * `index` is an optional two-digit reference number (e.g. "02")
 * used sparingly, only where content is genuinely sequential.
 */
export default function SectionTitle({ index, title, description, align = "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <div className="flex items-center gap-3">
        {index && <span className="eyebrow-mono">{index}</span>}
        <span className="h-px flex-1 max-w-[40px] bg-ink-300/60 dark:bg-ink-600" />
      </div>
      <h2 className="mt-3 font-display text-3xl font-semibold text-ink-900 dark:text-paper-50 sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-base text-ink-400 dark:text-ink-300">{description}</p>
      )}
    </motion.div>
  );
}
