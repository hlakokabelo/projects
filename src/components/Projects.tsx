import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <p className="section-subtitle">
        A selection of full-stack applications and APIs I've built. Source code
        is available on GitHub. personal{" "}
        <a href="https://kabelodev.vercel.app/" className="text-blue-500">
          site
        </a>
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <ProjectCard key={p.name} project={p} />
        ))}
      </div>
    </section>
  );
}
