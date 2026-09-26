import { engineeringExperience } from '../data/portfolioData';
import { Briefcase, CheckCircle, Globe, Terminal, Shield, ArrowUpRight } from 'lucide-react';

export function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Section Header Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-28">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
                Work History & Readiness
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
                {engineeringExperience.title}
              </h2>
              <div className="w-12 h-1 bg-blue-600 rounded-full mb-6" />
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Transparent and honest presentation of technical background. I focus on tangible implementations, clean codebases, and production readiness rather than inflating job titles.
              </p>

              {/* Status Box */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Immediate Availability</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Ready to contribute directly to engineering teams building AI agents, RAG applications, ML forecasting models, or backend services.
                </p>
              </div>
            </div>
          </div>

          {/* Details Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Primary Experience Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-4 border-b border-slate-800/80">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {engineeringExperience.roleTitle}
                  </h3>
                  <span className="text-xs font-mono text-blue-400">
                    Self-Directed Engineering & Applied Research
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-400 px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/60 w-fit">
                  {engineeringExperience.period}
                </span>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {engineeringExperience.description}
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
                {engineeringExperience.narrative}
              </p>

              {/* Core Engineering Mindset Practices */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800/60">
                {engineeringExperience.engineeringPractices.map((practice) => (
                  <div
                    key={practice.title}
                    className="p-3.5 rounded-lg bg-slate-950/60 border border-slate-800/80 text-xs"
                  >
                    <span className="font-semibold text-white block mb-1">
                      {practice.title}
                    </span>
                    <p className="text-slate-400 leading-normal">
                      {practice.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* "Open To" Specification Box */}
            <div className="p-6 rounded-2xl bg-slate-900/30 border border-slate-800/80">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 font-mono mb-4 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-blue-400" />
                <span>Open To Opportunities</span>
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Target Roles */}
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-2.5">
                    Target Engineering Roles:
                  </span>
                  <ul className="space-y-2">
                    {engineeringExperience.openToRoles.map((role) => (
                      <li key={role} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{role}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Locations */}
                <div>
                  <span className="text-xs text-slate-400 font-mono block mb-2.5">
                    Work Arrangement & Regions:
                  </span>
                  <ul className="space-y-2">
                    {engineeringExperience.locations.map((loc) => (
                      <li key={loc} className="flex items-center gap-2 text-xs text-slate-300">
                        <Globe className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{loc}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-3 border-t border-slate-800/60 text-[11px] text-slate-400">
                    Specifically receptive to remote roles globally and positions across Saudi Arabia (Riyadh / Jeddah / NEOM) and the broader GCC region.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
