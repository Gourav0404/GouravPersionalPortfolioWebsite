// ============================================================
// PROJECTS DATA
// Add, remove or edit projects here — the Projects page maps
// over this array automatically. Replace image, githubUrl and
// liveUrl with your real links whenever they're ready.
// ============================================================

import ProjectImage1 from '../assets/ProjectImage1.png'
import ProjectImage2 from '../assets/ProjectImage2.png'
import ProjectImage3 from '../assets/ProjectImage3.png'
import ProjectImage4 from '../assets/ProjectImage4.png'

const projects = [
  {
    id: "project-1",
    name: "Night Marathon Project (React.js)",
    description:
      "Participated in the QSpiders Night Marathon and worked on a project with guidance from my mentor. I contributed to theproject development, understood the requirements, and learned to complete a project within a limited time",
    image: ProjectImage1,
    technologies: ["React.js", "JavaScript", "Tailwind CSS", "Node.js and Express.js", "MongoDB"],
    githubUrl: "https://github.com/Gourav0404/NIGHT-CODING-MARATHON",
    liveUrl: "https://night-coding-marathon-nine.vercel.app/",
  },
  {
    id: "project-2",
    name: "Blog Website for Student",
    description:
      "Developed a basic blog website for B.Tech and BCA students as part of the NotesHub college project, providing learningcontent multiple Programming like HTML, CSS, C, C++, and React.js with theory, fundamentals, and code examples.",
    image: ProjectImage2,
    technologies: ["React.js", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/Gourav0404/blog_website",
    liveUrl: "hhttps://blog-website-zh3q.vercel.app/",
  },
  {
    id: "project-3",
    name: "Figma Design Task Website",
    description:
      "Developed a website based on a Figma design task, showcasing my ability to translate design concepts into functional web pages. This project demonstrates my skills in front-end development and attention to detail in implementing design specifications.",
    image: ProjectImage3,
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Gourav0404/AssDesignFegma",
    liveUrl: "https://ass-design-fegma-23of.vercel.app/",
  },
  {
    id: "project-4",
    name: "Face & Location Verification System",
    description:
      "A frontend-based verification website that allows users to register and verifies their face and location during the registration process. The project focuses on user verification, location detection, and a simple responsive user interface.",
    image: ProjectImage4,
    technologies: ["React.js", "JavaScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Gourav0404/face-detection-Emp",
    liveUrl: "https://face-detection-emp.vercel.app/",
  },
];

export default projects;
