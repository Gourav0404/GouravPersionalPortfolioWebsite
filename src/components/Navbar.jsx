import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle.jsx";
import personalInfo from "../data/personalInfo.js";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Skills", to: "/skills" },
  { label: "Projects", to: "/projects" },
  { label: "Certificates", to: "/certificates" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu whenever the viewport is resized back up
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const linkClasses = ({ isActive }) =>
    `relative px-1 py-2 text-sm font-medium transition-colors ${isActive
      ? "text-ink-900 dark:text-paper-50"
      : "text-ink-400 hover:text-ink-900 dark:text-ink-300 dark:hover:text-paper-50"
    }`;

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled
          ? "bg-paper-50/85 backdrop-blur-md shadow-[0_1px_0_rgba(15,17,22,0.06)] dark:bg-ink-950/85 dark:shadow-[0_1px_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
        }`}
    >
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <NavLink
          to="/"
          className="flex items-center gap-2 font-mono text-sm text-ink-900 dark:text-paper-50"
          onClick={() => setIsOpen(false)}
        >
          <span className="flex h-6 w-6 items-center justify-center rounded bg-signal text-xs font-semibold text-white">
            G
          </span>
          <span className="hidden sm:inline">{personalInfo.name.toLowerCase().replace(" ", "-")}</span>
        </NavLink>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.to}>
              <NavLink to={link.to} className={linkClasses} end={link.to === "/"}>
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 right-0 h-[2px] rounded-full bg-signal"
                      />
                    )}
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <ThemeToggle className="hidden md:flex" />
          <button
            type="button"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-ink-300/60 text-ink-600 dark:border-ink-600 dark:text-ink-200 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-t border-ink-200/60 bg-paper-50 dark:border-ink-700 dark:bg-ink-950 md:hidden"
          >
            <ul className="container-page flex flex-col gap-1 py-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === "/"}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3 text-base font-medium ${isActive
                        ? "bg-signal/10 text-signal"
                        : "text-ink-600 dark:text-ink-200"
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
              <li className="mt-2 flex items-center justify-between px-3">
                <span className="text-sm text-ink-400">Theme</span>
                <ThemeToggle />
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
