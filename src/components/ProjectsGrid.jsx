import ProjectCard from "./ProjectCard";
import { useProjects } from "../hooks/useProjects";

export default function ProjectsGrid({ cardsActive, cardDelay }) {
  const projects = useProjects();

  return (
    <section id="projects" className="projects-section" aria-label="Projects">
      <div className="section-header">
        <span className="section-header__label">// PROJECTS</span>
        <div className="section-header__line" />
      </div>

      <div className="projects-grid" role="list">
        {projects.map((project, i) => (
          <div key={project.slug} role="listitem">
            <ProjectCard
              project={project}
              active={cardsActive}
              delay={cardDelay(i)}
              index={i}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
