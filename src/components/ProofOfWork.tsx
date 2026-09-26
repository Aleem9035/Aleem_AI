import { proofOfWork, personalConfig } from '../data/portfolioData';
import { Github, FileText, Layers, Terminal, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export function ProofOfWork() {
  const iconList = [Github, Layers, FileText, Terminal];

  return (
    <section className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
            Verification & Artifacts
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
            {proofOfWork.heading}
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            {proofOfWork.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {proofOfWork.cards.map((card, idx) => {
            const Icon = iconList[idx % iconList.length];
            return (
              <div
                key={card.title}
                className="p-5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-blue-950/60 border border-blue-900/40 text-blue-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 px-2 py-0.5 rounded bg-slate-800/60 border border-slate-700/60">
                      {card.tag}
                    </span>
                  </div>

                  <h3 className="text-sm font-semibold text-white mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6">
                    {card.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <a
                    href={card.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>{card.linkText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
