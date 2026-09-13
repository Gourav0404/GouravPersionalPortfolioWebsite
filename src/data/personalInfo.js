// ============================================================
// CENTRAL PERSONAL DATA
// Edit this file to update the content across the entire site.
// Every value marked with [ ] brackets is a placeholder — swap
// it for your real information whenever you're ready.
// ============================================================

const personalInfo = {
  name: "Gourav Chouhan",
  title: "Frontend Developer",
  tagline: "React.js | JavaScript | Tailwind CSS | Learning MERN Stack",

  // Short paragraph used in the hero section
  introShort:
    "I am a passionate Frontend Developer with hands-on experience in React.js, JavaScript, HTML, CSS and Tailwind CSS. I enjoy building responsive and user-friendly web applications. Currently, I am learning backend technologies and improving my skills toward becoming a MERN Stack Developer.",

  // Longer paragraph(s) used on the About page
  aboutParagraphs: [
    "I'm a Frontend Developer focused on building clean, responsive interfaces with React.js, JavaScript, HTML, CSS and Tailwind CSS. I care about writing components that are easy to read, easy to reuse and pleasant for people to actually use.",
    "Right now I'm expanding into the MERN stack — learning Node.js, Express.js and MongoDB so I can build and understand the backend side of the applications I create. I'm still early in that journey, so I'd describe my backend knowledge as foundational rather than production-ready.",
    "Alongside web development, I've built a base in C++ and object-oriented programming, which has helped me think more clearly about structure and logic when I write JavaScript. I enjoy picking apart a problem, building a small project around it, and learning from what breaks.",
  ],

  email: "gouravchouhan6103@gmail.com",
  phone: "+91 9368963104",
  location: "Ghaziabad, Uttar Pradesh, India",

  // Social + external links — replace with your real profiles
  socials: {
    github: "https://github.com/Gourav0404",
    linkedin: "https://www.linkedin.com/in/gaurav-chauhan-9817b8371/",
    leetcode: "https://leetcode.com/u/gouravchouhan6103/",
  },

  // Path to your resume file — drop your PDF into /public and update this
  resumeUrl: "./src/assets/GouravChouhanResume.pdf",

  // Replace with an image at src/assets/profile.jpg
  profileImage: "/src/assets/GouravChouhanImage.jpeg",
};

export const education = {
  degree: "B.Tech in Computer Science",
  institute: "DR K N Modi Institute of Engineering & Technology, Modinagar",
  year: "2022-2026",
  cgpa: "8.2",
};

export const experience = [
  {
    id: "exp-1",
    role: "Frontend Developer Intern",
    company: "State InfoTech Noida",
    duration: "3 months",
    responsibilities: [
      "Built responsive interfaces using React.js",
      "Developed reusable UI components",
      "Worked with JavaScript, React.js and Tailwind CSS",
      "Improved responsive design and user experience",
    ],
  },
];

export default personalInfo;
