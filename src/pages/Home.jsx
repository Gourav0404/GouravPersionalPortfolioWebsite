import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, Radio } from "lucide-react";
import Button from "../components/Button.jsx";
import CodeWindow from "../components/CodeWindow.jsx";
import ProfileImage from "../components/ProfileImage.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import personalInfo from "../data/personalInfo.js";
import projects from "../data/projects.js";

export default function Home() {
  const featuredProjects = projects.slice(0, 2);

  return (
    <>
      {/* HERO */}
      <section className="container-page grid items-center gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-2 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
        >
          <p className="eyebrow-mono">Hello, I'm</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] text-ink-900 dark:text-paper-50 sm:text-5xl lg:text-6xl">
            {personalInfo.name}
          </h1>
          <p className="mt-4 text-xl font-medium text-signal">{personalInfo.title}</p>
          <p className="mt-2 font-mono text-sm text-ink-400 dark:text-ink-300">
            {personalInfo.tagline}
          </p>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ink-500 dark:text-ink-300">
            {personalInfo.introShort}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/projects" variant="primary" icon={ArrowRight}>
              View My Projects
            </Button>
            <Button to="/contact" variant="secondary">
              Contact Me
            </Button>
            <Button href={personalInfo.resumeUrl} variant="ghost" icon={Download}>
              Download Resume
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5 text-sm text-ink-400 dark:text-ink-300">
            <span className="flex items-center gap-1.5">
              <MapPin size={15} aria-hidden="true" /> {personalInfo.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Radio size={15} className="text-signal" aria-hidden="true" /> Open to
              opportunities
            </span>
          </div>
        </motion.div>

        <div className="relative flex justify-center lg:justify-end">
          <ProfileImage />
          <div className="absolute -bottom-8 -left-4 hidden w-64 scale-90 sm:block lg:-left-10">
            <CodeWindow />
          </div>
        </div>
      </section>

      {/* SELECTED WORK TEASER */}
      <section className="border-t border-ink-200/60 bg-paper-100/60 py-20 dark:border-ink-700 dark:bg-ink-900/40">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionTitle
              index="01"
              title="Selected work"
              description="A couple of projects I've built while learning React and the tools around it."
            />
            <Button to="/projects" variant="ghost" icon={ArrowRight}>
              View all projects
            </Button>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
