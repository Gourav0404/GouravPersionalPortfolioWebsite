// ============================================================
// SKILLS DATA
// Levels are intentionally qualitative rather than fake
// percentages. Keep "Currently Learning" / "Basic Knowledge"
// for anything you're not confident calling advanced yet.
// ============================================================

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    description: "What I use to build interfaces day to day.",
    skills: [
      { name: "HTML5", level: "Confident" },
      { name: "CSS3", level: "Confident" },
      { name: "JavaScript", level: "Confident" },
      { name: "React.js", level: "Confident" },
      { name: "Tailwind CSS", level: "Confident" },
      { name: "Bootstrap", level: "Comfortable" },
      { name: "React Router", level: "Comfortable" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Learning",
    description: "The MERN pieces I'm actively building up.",
    skills: [
      { name: "Node.js", level: "Currently Learning" },
      { name: "Express.js", level: "Currently Learning" },
      { name: "MongoDB", level: "Currently Learning" },
      { name: "REST API", level: "Basic Knowledge" },
      { name: "JWT", level: "Basic Knowledge" },
    ],
  },
  {
    id: "programming",
    title: "Programming",
    description: "Core language and fundamentals work.",
    skills: [
      { name: "C++", level: "Comfortable" },
      { name: "OOP Concepts", level: "Comfortable" },
      { name: "Data Structures & Algorithms Fundamentals", level: "Basic Knowledge" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    description: "What's set up in my everyday workflow.",
    skills: [
      { name: "Git", level: "Comfortable" },
      { name: "GitHub", level: "Comfortable" },
      { name: "VS Code", level: "Confident" },
      { name: "npm", level: "Comfortable" },
      { name: "Vite", level: "Comfortable" },
    ],
  },
];

export default skillCategories;
