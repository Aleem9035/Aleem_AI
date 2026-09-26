import { personalConfig } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, FileText } from 'lucide-react';

interface FooterProps {
  onOpenResumeModal: () => void;
}

export function Footer({ onOpenResumeModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-slate-800/80 bg-slate-950 py-12 text-slate-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          {/* Brand & Positioning */}
          <div className="text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight">
              {personalConfig.name}
            </div>
            <div className="text-xs text-blue-400 font-mono mt-0.5">
              {personalConfig.primaryTitle}
            </div>
            <p className="text-xs text-slate-400 mt-2 max-w-sm">
              "Building practical AI systems."
            </p>
          </div>

          {/* Site Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium">
            <a
              href={personalConfig.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>

            <a
              href={personalConfig.linkedinUrl}
              target="_blank"
              rel="noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>

            <a
              href={`mailto:${personalConfig.email}`}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              type="button"
              onClick={onOpenResumeModal}
              className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
            </button>
          </div>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors cursor-pointer flex items-center gap-1.5 text-xs"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Quiet Copyright Row */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div>
            © 2026 {personalConfig.name}. All rights reserved.
          </div>
          <div className="text-[11px] font-mono text-slate-400">
            Open to remote & Saudi/Gulf opportunities
          </div>
        </div>
      </div>
    </footer>
  );
}
