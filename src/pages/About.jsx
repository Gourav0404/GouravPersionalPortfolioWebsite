import { motion } from "framer-motion";
import { GraduationCap, Briefcase } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import personalInfo, { education, experience } from "../data/personalInfo.js";

export default function About() {
  return (
    <div className="container-page py-16 sm:py-20">
      <SectionTitle index="02" title="About Me" />

      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Bio */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="space-y-5"
        >
          {personalInfo.aboutParagraphs.map((paragraph, i) => (
            <p key={i} className="text-base leading-relaxed text-ink-500 dark:text-ink-300">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Quick facts card */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="h-fit rounded-xl border border-ink-200/70 bg-white p-6 shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark"
        >
          <p className="eyebrow-mono">At a glance</p>
          <dl className="mt-4 space-y-3 text-sm">
            <Row label="Focus" value="Frontend Development" />
            <Row label="Core stack" value="React.js, JavaScript, Tailwind CSS" />
            <Row label="Currently learning" value="Node.js, Express.js, MongoDB" />
            <Row label="Also comfortable with" value="C++, OOP fundamentals" />
            <Row label="Location" value={personalInfo.location} />
          </dl>
        </motion.div>
      </div>

      {/* Education */}
      <div className="mt-20">
        <SectionTitle index="03" title="Education" />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex items-start gap-4 rounded-xl border border-ink-200/70 bg-white p-6 shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark"
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <div>
            <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper-50">
              {education.degree}
            </h3>
            <p className="mt-1 text-sm text-ink-400 dark:text-ink-300">
              {education.institute} · {2022 - 2026}
            </p>
            <p className="mt-1 text-sm text-ink-400 dark:text-ink-300">
              CGPA: {education.cgpa}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Experience */}
      <div className="mt-20">
        <SectionTitle index="04" title="Experience" />
        <div className="space-y-6">
          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="flex items-start gap-4 rounded-xl border border-ink-200/70 bg-white p-6 shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
                <Briefcase size={20} aria-hidden="true" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-base font-semibold text-ink-900 dark:text-paper-50">
                    {job.role}
                  </h3>
                  <span className="font-mono text-xs text-ink-400 dark:text-ink-400">
                    {job.duration}
                  </span>
                </div>
                <p className="mt-1 text-sm text-ink-400 dark:text-ink-300">{job.company}</p>
                <ul className="mt-3 space-y-1.5 text-sm text-ink-500 dark:text-ink-300">
                  {job.responsibilities.map((item, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-ink-200/60 pb-3 last:border-0 last:pb-0 dark:border-ink-700">
      <dt className="text-ink-400 dark:text-ink-400">{label}</dt>
      <dd className="text-right font-medium text-ink-700 dark:text-ink-100">{value}</dd>
    </div>
  );
}
