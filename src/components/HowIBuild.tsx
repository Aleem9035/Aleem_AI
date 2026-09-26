import { useState } from 'react';
import { howIBuildData } from '../data/portfolioData';
import { ArrowRight, CheckCircle2, ChevronRight, Server, Database, Brain, Network, ShieldCheck, Container, LineChart } from 'lucide-react';

export function HowIBuild() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stageIcons = [
    Database,   // Data
    Brain,      // Model
    Server,     // API
    Network,    // Integration
    ShieldCheck,// Validation
    Container,  // Deployment
    LineChart,  // Monitoring
  ];

  return (
    <section id="how-i-build" className="py-20 border-t border-slate-800/60 bg-gradient-to-b from-transparent via-slate-950/40 to-transparent">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
            Engineering Methodology
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
            {howIBuildData.heading}
          </h2>
          <p className="text-lg font-medium text-blue-300 mb-3">
            "{howIBuildData.subheading}"
          </p>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {howIBuildData.description}
          </p>
        </div>

        {/* 4 Core Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {howIBuildData.steps.map((step) => (
            <div
              key={step.number}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-slate-700 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold text-blue-400 px-2 py-0.5 rounded bg-blue-950/60 border border-blue-900/40">
                    {step.number}
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-blue-400 transition-colors" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {step.summary}
                </p>
              </div>
              <div className="pt-3 border-t border-slate-800/60 text-[11px] text-slate-400 italic">
                {step.details}
              </div>
            </div>
          ))}
        </div>

        {/* Production AI Lifecycle Flow: Data -> Model -> API -> Integration -> Validation -> Deployment -> Monitoring */}
        <div className="rounded-2xl bg-slate-900/80 border border-slate-800 p-6 md:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div>
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <span>The Production AI Pipeline</span>
                <span className="text-xs font-normal text-slate-400 font-mono">
                  (Architecture Lifecycle)
                </span>
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Every resilient intelligent system requires a continuous cycle from raw observations to monitored deployment.
              </p>
            </div>
            <div className="text-xs font-mono text-blue-400 flex items-center gap-1.5">
              <span>Interactive Pipeline</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Pipeline Nodes Flow (Horizontal on desktop, scrollable on mobile) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-thin">
            {howIBuildData.pipelineStages.map((stage, index) => {
              const Icon = stageIcons[index % stageIcons.length];
              const isSelected = activeStage === index;
              return (
                <div key={stage.name} className="flex items-center shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveStage(index)}
                    className={`flex items-center gap-2 px-3.5 py-2.5 rounded-xl border text-xs font-medium transition-all cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-blue-600/20 border-blue-500/60 text-white shadow-sm shadow-blue-500/20'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-blue-400' : 'text-slate-500'}`} />
                    <span>{stage.name}</span>
                  </button>

                  {index < howIBuildData.pipelineStages.length - 1 && (
                    <div className="px-1 text-slate-600">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active Stage Callout */}
          <div className="mt-4 p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <div>
                <span className="font-semibold text-white">
                  Stage {activeStage + 1}: {howIBuildData.pipelineStages[activeStage].name}
                </span>
                <span className="text-slate-400 ml-2">
                  — {howIBuildData.pipelineStages[activeStage].description}
                </span>
              </div>
            </div>
            <span className="text-slate-500 font-mono text-[11px]">
              System Invariant: Verified
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
