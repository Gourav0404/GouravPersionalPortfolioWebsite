import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, FileCode } from "lucide-react";
import Button from "./Button.jsx";

export default function ProjectCard({ project, index = 0 }) {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: "easeOut" }}
      className="group flex flex-col overflow-hidden rounded-xl border border-ink-200/70 bg-white shadow-card transition-transform duration-300 hover:-translate-y-1 dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-paper-100 dark:bg-ink-900">
        {!imageFailed ? (
          <img
            src={project.image}
            alt={`Preview of the ${project.name} project`}
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-300 dark:text-ink-600">
            <FileCode size={28} aria-hidden="true" />
            <span className="font-mono text-xs">image not added yet</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50">
          {project.name}
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-ink-400 dark:text-ink-300">
          {project.description}
        </p>

        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="rounded-md bg-signal/10 px-2.5 py-1 font-mono text-[11px] text-signal-dark dark:text-signal-light"
            >
              {tech}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex gap-3">
          <Button href={project.githubUrl} variant="secondary" icon={Github} className="flex-1">
            Code
          </Button>
          <Button href={project.liveUrl} variant="primary" icon={ExternalLink} className="flex-1">
            Live Demo
          </Button>
        </div>
      </div>
    </motion.article>
  );
}
