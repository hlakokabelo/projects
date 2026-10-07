import type { Project } from "../data/projects";

type Props = { project: Project };

export default function ProjectCard({ project }: Props) {
  return (
    <article className="group border border-slate-800 hover:border-slate-700 rounded-xl p-6 bg-slate-900/30 hover:bg-slate-900/60 transition-all flex flex-col">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <p className="text-sm text-slate-500 mt-0.5">{project.tagline}</p>
        </div>
        <div className="flex items-center gap-3 text-sm shrink-0">
          <a
            href={project.source}
            target="_blank"
            rel="noreferrer"
            className="text-slate-400 hover:text-white transition-colors"
            aria-label={`${project.name} source code`}
          >
            Code ↗
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:text-accent-light transition-colors"
              aria-label={`${project.name} live demo`}
            >
              Live ↗
            </a>
          )}
        </div>
      </div>

      <p className="text-sm text-slate-400 leading-relaxed mb-5 grow">
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span key={tech} className="tag">
            {tech}
          </span>
        ))}
      </div>
    </article>
  );
}
