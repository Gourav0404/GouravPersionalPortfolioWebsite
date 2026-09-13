import { NavLink } from "react-router-dom";
import { Github, Linkedin, Code2 } from "lucide-react";
import personalInfo from "../data/personalInfo.js";

const FOOTER_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

const SOCIALS = [
  { label: "GitHub", href: personalInfo.socials.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.socials.linkedin, icon: Linkedin },
  { label: "LeetCode", href: personalInfo.socials.leetcode, icon: Code2 },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-200/60 bg-paper-100 dark:border-ink-700 dark:bg-ink-900">
      <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold text-ink-900 dark:text-paper-50">
            {personalInfo.name}
          </p>
          <p className="mt-2 max-w-xs text-sm text-ink-400 dark:text-ink-300">
            {personalInfo.title} | Learning MERN Stack
          </p>
          <div className="mt-5 flex gap-3">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-300/60 text-ink-500 transition-colors hover:border-signal hover:text-signal dark:border-ink-600 dark:text-ink-300"
              >
                <Icon size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow-mono">Navigate</p>
          <ul className="mt-4 space-y-2">
            {FOOTER_LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  className="text-sm text-ink-500 transition-colors hover:text-signal dark:text-ink-300"
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="eyebrow-mono">Get in touch</p>
          <ul className="mt-4 space-y-2 text-sm text-ink-500 dark:text-ink-300">
            <li>{personalInfo.email}</li>
            <li>{personalInfo.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-200/60 py-6 dark:border-ink-700">
        <p className="container-page text-center text-xs text-ink-400 dark:text-ink-400">
          © {year} {personalInfo.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
