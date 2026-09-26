import { useState } from 'react';
import { personalConfig } from '../data/portfolioData';
import { Download, Eye, FileText, CheckCircle2, AlertCircle, Sparkles } from 'lucide-react';

interface ResumeSectionProps {
  onOpenResumeModal: () => void;
}

export function ResumeSection({ onOpenResumeModal }: ResumeSectionProps) {
  const [downloadNotice, setDownloadNotice] = useState<string | null>(null);

  const handleDownload = () => {
    // Attempt download of the configured path
    const link = document.createElement('a');
    link.href = personalConfig.resumeUrl;
    link.download = 'Aleem-AI-ML-Engineer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Provide friendly notice if PDF is yet to be placed
    setDownloadNotice(
      `Download initiated from "${personalConfig.resumeUrl}". If your browser blocks local file downloads or the file is pending upload, click "View Resume" to inspect or print the verified full resume text!`
    );
    setTimeout(() => {
      setDownloadNotice(null);
    }, 8000);
  };

  return (
    <section id="resume" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-gradient-to-br from-slate-900/90 via-slate-900/60 to-slate-950 border border-slate-800 p-8 sm:p-12 relative overflow-hidden shadow-xl shadow-black/20">
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 blur-[100px] pointer-events-none rounded-full" />

          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
              Curriculum Vitae
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-3">
              Resume
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6">
              Interested in my technical background and project experience?
            </p>
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-8">
              Review my technical qualifications, core engineering stack, project architectures, and methodologies in a concise format tailored for engineering leads and recruiters.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <button
                type="button"
                onClick={handleDownload}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors flex items-center gap-2 shadow-sm shadow-blue-500/25 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              <button
                type="button"
                onClick={onOpenResumeModal}
                className="px-6 py-3 text-xs sm:text-sm font-semibold text-slate-200 bg-slate-800/90 hover:bg-slate-700 hover:text-white border border-slate-700 rounded-lg transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Eye className="w-4 h-4 text-blue-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Graceful notification banner */}
            {downloadNotice && (
              <div className="p-3.5 rounded-lg bg-blue-950/70 border border-blue-800/70 text-xs text-blue-200 flex items-start gap-2.5 mb-6">
                <AlertCircle className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{downloadNotice}</span>
              </div>
            )}

            {/* Key verification metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80 text-xs font-mono">
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Verified Clean Architecture</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Zero Exaggerated Claims</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                <span>Printer & PDF Compatible</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
