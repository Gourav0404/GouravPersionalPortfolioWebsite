# Gourav Chouhan — Portfolio

A responsive personal portfolio built with React, Vite, Tailwind CSS,
React Router and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL in your browser. To build for production:

```bash
npm run build
npm run preview
```

## Where to edit things

Everything you're likely to want to change lives in one of these files —
you shouldn't need to touch component code for routine updates.

| What you want to change              | File                          |
|---------------------------------------|-------------------------------|
| Name, title, bio, email, phone, socials, resume link | `src/data/personalInfo.js` |
| Education & work experience           | `src/data/personalInfo.js` (bottom of the file) |
| Projects                              | `src/data/projects.js`        |
| Skills & skill levels                 | `src/data/skills.js`          |
| Certificates                          | `src/data/certificates.js`    |

## Adding your real images

Drop these files into `src/assets/` using the exact names below, and every
page will use them automatically — see `src/assets/README.md`:

- `profile.jpg`
- `project-1.jpg`, `project-2.jpg`, `project-3.jpg`
- `certificate-1.jpg`, `certificate-2.jpg`, `certificate-3.jpg`

Until you add a given image, that card shows a clean placeholder instead
of a broken image icon.

## Adding your resume

Place your resume PDF in the `public/` folder (e.g. `public/resume.pdf`)
and update `resumeUrl` in `src/data/personalInfo.js` to `/resume.pdf`.

## Connecting the contact form

The contact form is frontend-only right now — submitting it shows a
success message but doesn't send anything anywhere. The exact spot to
wire up a backend or a form service (like Formspree or EmailJS) is
commented inside `src/pages/Contact.jsx`, in the `handleSubmit` function.

## Theme

Dark/light mode is handled by `src/context/ThemeContext.jsx` and persisted
to `localStorage`, so a visitor's choice sticks across visits.
