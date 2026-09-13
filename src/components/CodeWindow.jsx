import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CODE_LINES = [
  { indent: 0, text: "const developer = {" },
  { indent: 1, text: "name: \"Gourav Chouhan\"," },
  { indent: 1, text: "role: \"Frontend Developer\"," },
  { indent: 1, text: "stack: [\"React\", \"JavaScript\", \"Tailwind\"]," },
  { indent: 1, text: "learning: \"MERN Stack\"," },
  { indent: 1, text: "available: true," },
  { indent: 0, text: "};" },
];

/**
 * A small code-editor mockup used in the hero section. Types the
 * developer's details out line by line, echoing the "code as
 * identity" idea instead of a generic photo-and-headline hero.
 */
export default function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);
  }, []);

  useEffect(() => {
    if (reduceMotion) {
      setVisibleLines(CODE_LINES.length);
      return;
    }
    if (visibleLines >= CODE_LINES.length) return;
    const timer = setTimeout(() => {
      setVisibleLines((prev) => prev + 1);
    }, 260);
    return () => clearTimeout(timer);
  }, [visibleLines, reduceMotion]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
      className="w-full max-w-md overflow-hidden rounded-xl border border-ink-200/70 bg-white shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark animate-float"
    >
      <div className="flex items-center gap-2 border-b border-ink-200/70 bg-paper-100 px-4 py-3 dark:border-ink-700 dark:bg-ink-900">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-xs text-ink-400 dark:text-ink-300">
          developer.js
        </span>
      </div>
      <pre className="px-5 py-6 font-mono text-[13px] leading-7 text-ink-700 dark:text-ink-100">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} style={{ paddingLeft: `${line.indent * 1.25}rem` }}>
            <span className="mr-3 select-none text-ink-300 dark:text-ink-500">
              {String(i + 1).padStart(2, "0")}
            </span>
            <SyntaxLine text={line.text} />
          </div>
        ))}
        {visibleLines < CODE_LINES.length && (
          <span
            className="ml-8 inline-block h-4 w-2 bg-signal animate-blink align-middle"
            aria-hidden="true"
          />
        )}
      </pre>
    </motion.div>
  );
}

function SyntaxLine({ text }) {
  // Very small, purely decorative syntax highlight: strings get the
  // accent color, everything else stays neutral.
  const parts = text.split(/("(?:[^"\\]|\\.)*")/g);
  return (
    <span>
      {parts.map((part, i) =>
        part.startsWith('"') ? (
          <span key={i} className="text-[#3A5FDB] dark:text-signal-light">
            {part}
          </span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
}
