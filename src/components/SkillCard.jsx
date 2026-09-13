import { motion } from "framer-motion";

const LEVEL_STYLES = {
  Confident: "bg-signal text-white",
  Comfortable: "bg-signal/15 text-signal-dark dark:text-signal-light",
  "Currently Learning": "bg-pulse/20 text-ink-700 dark:text-pulse",
  "Basic Knowledge": "border border-ink-300/60 text-ink-400 dark:border-ink-600 dark:text-ink-300",
};

export default function SkillCard({ category, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="rounded-xl border border-ink-200/70 bg-white p-6 shadow-card transition-colors dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark"
    >
      <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper-50">
        {category.title}
      </h3>
      <p className="mt-1 text-sm text-ink-400 dark:text-ink-300">{category.description}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-2 rounded-lg border border-ink-200/70 px-3 py-2 text-sm text-ink-700 transition-colors hover:border-signal dark:border-ink-600 dark:text-ink-100"
          >
            {skill.name}
            <span
              className={`rounded px-1.5 py-0.5 text-[10px] font-medium ${LEVEL_STYLES[skill.level] ?? LEVEL_STYLES["Basic Knowledge"]}`}
            >
              {skill.level}
            </span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
