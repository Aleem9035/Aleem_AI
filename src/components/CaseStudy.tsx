import { useState } from 'react';
import { caseStudyDetail } from '../data/portfolioData';
import { BookOpen, Layers, Terminal, Sparkles, CheckCircle2, ChevronRight, FileText, Cpu, ArrowUpRight } from 'lucide-react';

export function CaseStudy() {
  const [activeSection, setActiveSection] = useState<number>(0);

  return (
    <section id="case-study" className="py-20 border-t border-slate-800/60 bg-slate-950/40 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-blue-950/60 border border-blue-900/40 text-blue-400 text-xs font-mono mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Deep Dive</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {caseStudyDetail.subtitle}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {caseStudyDetail.summary}
          </p>
        </div>

        {/* Case Study Card with Sidebar Navigation and Reading Pane */}
        <div className="rounded-2xl bg-slate-900/60 border border-slate-800 overflow-hidden shadow-xl shadow-black/30">
          <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-sm font-semibold text-white">
                Flagship Case Study: {caseStudyDetail.projectTitle}
              </span>
              <span className="text-xs font-mono text-slate-500 hidden sm:inline">
                / production-design.md
              </span>
            </div>
            <div className="text-xs font-mono text-slate-400">
              10 Engineering Dimensions
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Sidebar with all 10 sections */}
            <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-slate-800/80 p-3 sm:p-4 bg-slate-950/60">
              <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block px-3 py-2">
                System Breakdown
              </span>
              <nav className="space-y-1">
                {caseStudyDetail.sections.map((sec, idx) => {
                  const isActive = activeSection === idx;
                  return (
                    <button
                      key={sec.title}
                      type="button"
                      onClick={() => setActiveSection(idx)}
                      className={`w-full text-left px-3 py-2.5 rounded-lg text-xs font-medium transition-colors flex items-center justify-between cursor-pointer ${
                        isActive
                          ? 'bg-blue-600/20 text-white border border-blue-500/50 shadow-sm'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/60'
                      }`}
                    >
                      <span className="flex items-center gap-2.5">
                        <span className="text-[10px] font-mono text-slate-500">
                          {String(idx + 1).padStart(2, '0')}
                        </span>
                        <span>{sec.title}</span>
                      </span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 text-blue-400" />}
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Reading Pane */}
            <div className="lg:col-span-8 p-6 sm:p-8 flex flex-col justify-between min-h-[380px]">
              <div>
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-blue-400 px-2 py-0.5 rounded bg-blue-950/80 border border-blue-900/50">
                      Section {String(activeSection + 1).padStart(2, '0')} of 10
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      {caseStudyDetail.sections[activeSection].title}
                    </h3>
                  </div>
                  <span className="text-xs font-mono text-slate-500">
                    Kisaan Market AI
                  </span>
                </div>

                <div className="prose prose-invert max-w-none text-slate-300 text-sm sm:text-base leading-relaxed space-y-4">
                  <p>{caseStudyDetail.sections[activeSection].content}</p>
                </div>
              </div>

              {/* Bottom Pagination Controls */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  type="button"
                  disabled={activeSection === 0}
                  onClick={() => setActiveSection((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  ← Previous Dimension
                </button>

                <div className="text-xs font-mono text-slate-500">
                  {activeSection + 1} / {caseStudyDetail.sections.length}
                </div>

                <button
                  type="button"
                  disabled={activeSection === caseStudyDetail.sections.length - 1}
                  onClick={() =>
                    setActiveSection((prev) =>
                      Math.min(caseStudyDetail.sections.length - 1, prev + 1)
                    )
                  }
                  className="px-3 py-1.5 rounded text-xs font-medium text-slate-400 hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                >
                  Next Dimension →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
