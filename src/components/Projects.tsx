import { useState } from 'react';
import { featuredProjects, ProjectItem, personalConfig } from '../data/portfolioData';
import { Github, ExternalLink, ArrowRight, Layers, AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Code2 } from 'lucide-react';

interface ProjectsProps {
  onSelectCaseStudy: () => void;
}

export function Projects({ onSelectCaseStudy }: ProjectsProps) {
  const [expandedArchitecture, setExpandedArchitecture] = useState<string | null>(null);
  const [demoNotification, setDemoNotification] = useState<string | null>(null);

  const toggleArchitecture = (id: string) => {
    setExpandedArchitecture(expandedArchitecture === id ? null : id);
  };

  const handleDemoClick = (project: ProjectItem) => {
    if (project.demoUrl) {
      window.open(project.demoUrl, '_blank');
    } else {
      setDemoNotification(`Live demo environment for ${project.name} is currently staged in private preview. Code is available on GitHub.`);
      setTimeout(() => setDemoNotification(null), 5000);
    }
  };

  return (
    <section id="projects" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
              Featured Systems
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              Production-Oriented AI Projects
            </h2>
            <p className="text-sm text-slate-400 max-w-2xl">
              Concrete implementations spanning multi-modal agents, time-series forecasting, vector retrieval pipelines, and containerized backend architectures.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Open Source & Reproducible</span>
          </div>
        </div>

        {/* Demo status alert notification */}
        {demoNotification && (
          <div className="mb-8 p-3.5 rounded-lg bg-blue-950/60 border border-blue-800/60 text-xs text-blue-200 flex items-center justify-between transition-all">
            <div className="flex items-center gap-2.5">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0" />
              <span>{demoNotification}</span>
            </div>
            <button
              onClick={() => setDemoNotification(null)}
              className="text-slate-400 hover:text-white px-2 py-0.5 rounded cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Projects List */}
        <div className="space-y-12">
          {featuredProjects.map((project, idx) => (
            <div
              key={project.id}
              className="rounded-2xl bg-slate-900/50 border border-slate-800 overflow-hidden hover:border-slate-700/80 transition-all shadow-lg shadow-black/20"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Media Column */}
                <div className="lg:col-span-5 relative bg-slate-950 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800/80 overflow-hidden group">
                  <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full min-h-[260px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={`${project.name} technical preview`}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />
                    
                    {/* Category Label */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 text-[11px] font-mono font-medium rounded bg-slate-900/90 border border-slate-700/80 text-blue-300 backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>

                    {/* Badge */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                      <span className="text-slate-300 font-medium">{project.badge}</span>
                      <span className="text-[11px] font-mono text-slate-400">0{idx + 1} / 03</span>
                    </div>
                  </div>
                </div>

                {/* Content Column */}
                <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    {/* Title & Description */}
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {project.name}
                      </h3>
                      {project.id === 'kisaan-market-ai' && (
                        <button
                          type="button"
                          onClick={onSelectCaseStudy}
                          className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 cursor-pointer self-start sm:self-auto"
                        >
                          <span>Read Full Case Study</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      )}
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Problem vs Solution Split */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 pt-4 border-t border-slate-800/60 text-xs">
                      <div className="p-3.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                        <span className="font-semibold text-rose-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">
                          The Problem
                        </span>
                        <p className="text-slate-300 leading-normal">
                          {project.problem}
                        </p>
                      </div>

                      <div className="p-3.5 rounded-lg bg-slate-950/50 border border-slate-800/80">
                        <span className="font-semibold text-emerald-400 block mb-1 font-mono uppercase tracking-wider text-[10px]">
                          The Solution
                        </span>
                        <p className="text-slate-300 leading-normal">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Highlights list */}
                    <div className="mb-6">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
                        Key Engineering Highlights
                      </span>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                        {project.highlights.map((highlight, hIdx) => (
                          <li key={hIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Architecture diagram toggle & viewer */}
                    <div className="mb-6">
                      <button
                        type="button"
                        onClick={() => toggleArchitecture(project.id)}
                        className="w-full flex items-center justify-between p-3 rounded-lg bg-slate-950/70 border border-slate-800 text-xs text-slate-300 hover:text-white hover:border-slate-700 transition-colors cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <Layers className="w-3.5 h-3.5 text-blue-400" />
                          <span className="font-semibold">System Architecture Flow</span>
                          <span className="text-slate-500 font-mono">({project.architecture.length} nodes)</span>
                        </div>
                        {expandedArchitecture === project.id ? (
                          <ChevronUp className="w-4 h-4 text-slate-400" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-slate-400" />
                        )}
                      </button>

                      {expandedArchitecture === project.id && (
                        <div className="mt-2 p-4 rounded-lg bg-slate-950 border border-slate-800/80 text-xs font-mono">
                          <div className="flex flex-wrap items-center gap-1.5 text-slate-300">
                            {project.architecture.map((node, nodeIdx) => (
                              <div key={nodeIdx} className="flex items-center gap-1.5">
                                <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200 text-[11px]">
                                  {node}
                                </span>
                                {nodeIdx < project.architecture.length - 1 && (
                                  <span className="text-blue-500">→</span>
                                )}
                              </div>
                            ))}
                          </div>
                          {project.note && (
                            <p className="mt-3 text-[11px] text-slate-400 italic font-sans border-t border-slate-800 pt-2">
                              Note: {project.note}
                            </p>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-slate-800/70 text-slate-300 border border-slate-700/60"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions: GitHub & Live Demo */}
                  <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-slate-800/80">
                    <div className="flex items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Repository</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => handleDemoClick(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900/60 hover:bg-slate-800/80 rounded-lg border border-slate-800 transition-colors cursor-pointer"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                        <span>Live Demo</span>
                      </button>
                    </div>

                    <span className="text-[11px] text-slate-500 font-mono">
                      Placeholder URL Configurable
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* PROJECT 4: More Projects Card */}
          <div className="p-8 rounded-2xl bg-gradient-to-r from-slate-900/40 via-slate-900/70 to-slate-900/40 border border-slate-800 text-center flex flex-col items-center justify-center max-w-3xl mx-auto">
            <div className="p-3 rounded-full bg-slate-800/80 border border-slate-700 text-blue-400 mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">
              Continuous Engineering & Research
            </h3>
            <p className="text-sm text-slate-400 max-w-md mb-6 leading-relaxed">
              More experiments and engineering projects are continuously being added.
            </p>
            <a
              href={personalConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 active:bg-slate-900 rounded-lg border border-slate-700 transition-colors shadow-sm"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
