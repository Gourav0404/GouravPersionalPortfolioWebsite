import { useState } from "react";
import { motion } from "framer-motion";
import personalInfo from "../data/personalInfo.js";

/**
 * Hero profile photo, framed in a rounded panel with a soft accent
 * ring behind it. Falls back to a simple initials badge if
 * /src/assets/profile.jpg hasn't been added yet.
 */
export default function ProfileImage() {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = personalInfo.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      className="relative mx-auto w-full max-w-sm"
    >
      {/* Soft accent shape behind the frame */}
      <div
        aria-hidden="true"
        className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-signal/20 via-pulse/10 to-transparent blur-2xl"
      />

      <div className="animate-float overflow-hidden rounded-[1.75rem] border border-ink-200/70 bg-white p-2 shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark">
        <div className="aspect-[4/5] w-full overflow-hidden rounded-[1.4rem] bg-paper-100 dark:bg-ink-900">
          {!imageFailed ? (
            <img
              src={personalInfo.profileImage}
              alt={`Portrait of ${personalInfo.name}`}
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-ink-300 dark:text-ink-600">
              <span className="flex h-20 w-20 items-center justify-center rounded-full bg-signal/10 font-display text-2xl font-semibold text-signal">
                {initials}
              </span>
              <span className="font-mono text-xs">
                add src/assets/profile.jpg
              </span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
