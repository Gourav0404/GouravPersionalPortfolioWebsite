import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Linkedin, Code2, Mail, Phone, MapPin, CheckCircle2 } from "lucide-react";
import SectionTitle from "../components/SectionTitle.jsx";
import Button from "../components/Button.jsx";
import personalInfo from "../data/personalInfo.js";

const INITIAL_FORM = { name: "", email: "", subject: "", message: "" };

const SOCIALS = [
  { label: "GitHub", href: personalInfo.socials.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.socials.linkedin, icon: Linkedin },
  { label: "LeetCode", href: personalInfo.socials.leetcode, icon: Code2 },
];

export default function Contact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ------------------------------------------------------------
    // This is a frontend-only form. To make it functional, connect
    // it to a backend or an email service here — for example:
    //   - a serverless function that emails the message, or
    //   - a form service such as Formspree / EmailJS / Getform.
    // Replace this block with that request, then clear the form
    // and show the success message on a successful response.
    // ------------------------------------------------------------

    setShowSuccess(true);
    setForm(INITIAL_FORM);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="container-page py-16 sm:py-20">
      <SectionTitle
        index="08"
        title="Let's Work Together"
        description="If you have an opportunity, project or collaboration in mind, feel free to get in touch with me."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        {/* Contact info */}
        <div className="space-y-4">
          <InfoRow icon={Mail} label="Email" value={personalInfo.email} />
          <InfoRow icon={Phone} label="Phone" value={personalInfo.phone} />
          <InfoRow icon={MapPin} label="Location" value={personalInfo.location} />

          <div className="flex gap-3 pt-2">
            {SOCIALS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink-300/60 text-ink-500 transition-colors hover:border-signal hover:text-signal dark:border-ink-600 dark:text-ink-300"
              >
                <Icon size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="rounded-xl border border-ink-200/70 bg-white p-6 shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Name" name="name" value={form.name} onChange={handleChange} required />
            <Field
              label="Email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
            />
            <Field
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="sm:col-span-2"
              required
            />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-100">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                value={form.message}
                onChange={handleChange}
                className="w-full rounded-lg border border-ink-200/70 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal dark:border-ink-600 dark:bg-ink-900 dark:text-paper-50"
              />
            </div>
          </div>

          <Button type="submit" variant="primary" className="mt-6 w-full sm:w-auto">
            Send Message
          </Button>

          <AnimatePresence>
            {showSuccess && (
              <motion.div
                role="status"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
                className="mt-4 flex items-center gap-2 rounded-lg bg-pulse/15 px-4 py-3 text-sm text-ink-700 dark:text-paper-50"
              >
                <CheckCircle2 size={17} className="text-signal" aria-hidden="true" />
                Thank you! Your message has been received.
              </motion.div>
            )}
          </AnimatePresence>
        </form>
      </div>
    </div>
  );
}

function InfoRow({ icon: Icon, label, value }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-ink-200/70 bg-white p-4 shadow-card dark:border-ink-700 dark:bg-ink-800 dark:shadow-card-dark">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-signal/10 text-signal">
        <Icon size={17} aria-hidden="true" />
      </span>
      <div>
        <p className="text-xs text-ink-400 dark:text-ink-400">{label}</p>
        <p className="text-sm font-medium text-ink-800 dark:text-paper-100">{value}</p>
      </div>
    </div>
  );
}

function Field({ label, name, type = "text", value, onChange, required, className = "" }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-ink-700 dark:text-ink-100">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
        className="w-full rounded-lg border border-ink-200/70 bg-paper-50 px-4 py-3 text-sm text-ink-900 outline-none transition-colors focus:border-signal dark:border-ink-600 dark:bg-ink-900 dark:text-paper-50"
      />
    </div>
  );
}
