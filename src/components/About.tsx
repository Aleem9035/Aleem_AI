import { aboutData } from '../data/portfolioData';
import { Cpu, Layers, Bot, Activity, Eye, Cloud } from 'lucide-react';

export function About() {
  const focusIcons = [
    Cpu,      // Production AI Engineering
    Layers,   // Generative AI & RAG
    Bot,      // Agentic AI
    Activity, // Machine Learning
    Eye,      // Computer Vision
    Cloud,    // MLOps & Cloud
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Introduction */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
                Engineering Identity
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                {aboutData.heading}
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />
              <p className="text-sm text-slate-400 leading-relaxed">
                Transforming experimental intelligence into resilient software components, with equal rigor applied to data pipelines, model constraints, and deployment ergonomics.
              </p>
            </div>
          </div>

          {/* Narrative & Focus Grid */}
          <div className="lg:col-span-8 space-y-10">
            {/* Humanized Prose */}
            <div className="space-y-5 text-base sm:text-lg text-slate-300 leading-relaxed">
              {aboutData.paragraphs.map((p, index) => (
                <p key={index} className="text-pretty">
                  {p}
                </p>
              ))}
            </div>

            {/* Currently Focused On */}
            <div className="pt-6 border-t border-slate-800/80">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-semibold tracking-wide text-white uppercase font-mono">
                  Currently Focused On
                </h3>
                <span className="text-xs text-slate-500 font-mono">Active Technical Depth</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {aboutData.currentlyFocusedOn.map((item, idx) => {
                  const Icon = focusIcons[idx % focusIcons.length];
                  return (
                    <div
                      key={item.title}
                      className="p-4 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-900/40 text-blue-400 shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium text-white">{item.title}</h4>
                          <p className="text-xs text-slate-400 mt-1 leading-normal">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
