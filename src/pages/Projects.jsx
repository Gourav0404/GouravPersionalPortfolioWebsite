import SectionTitle from "../components/SectionTitle.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import projects from "../data/projects.js";

export default function Projects() {
  return (
    <div className="container-page py-16 sm:py-20">
      <SectionTitle
        index="06"
        title="Projects"
        description="A few things I've built to practice React and put ideas into working interfaces."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
}
