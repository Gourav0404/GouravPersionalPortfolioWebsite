import SectionTitle from "../components/SectionTitle.jsx";
import SkillCard from "../components/SkillCard.jsx";
import skillCategories from "../data/skills.js";

export default function Skills() {
  return (
    <div className="container-page py-16 sm:py-20">
      <SectionTitle
        index="05"
        title="Skills"
        description="Grouped by how I actually use them — not everything here is equally polished, and that's on purpose."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillCategories.map((category, index) => (
          <SkillCard key={category.id} category={category} index={index} />
        ))}
      </div>
    </div>
  );
}
