import { useState } from 'react';
import { personalConfig, skillsCategories, featuredProjects, engineeringExperience } from '../data/portfolioData';
import { X, Download, Printer, Check, FileText, ExternalLink, Mail, Github, Linkedin, AlertCircle } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [downloadFailed, setDownloadFailed] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    // Attempt download of the configurable placeholder
    const link = document.createElement('a');
    link.href = personalConfig.resumeUrl;
    link.download = 'Aleem-AI-ML-Engineer-Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Provide a small check/notice in case the PDF hasn't been uploaded yet
    setTimeout(() => {
      setDownloadFailed(true);
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div className="relative w-full max-w-4xl bg-[#090d16] border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Modal Controls Header */}
        <div className="p-4 bg-slate-900/90 border-b border-slate-800 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-blue-400" />
            <span id="resume-modal-title" className="text-sm font-semibold text-white">
              Aleem — AI/ML Engineer Resume Preview
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="p-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 transition-colors flex items-center gap-1.5 cursor-pointer"
              title="Print formatted resume"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            <button
              type="button"
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors ml-2 cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Graceful PDF upload hint banner */}
        {downloadFailed && (
          <div className="bg-blue-950/80 border-b border-blue-800/80 px-4 py-2.5 text-xs text-blue-200 flex items-center justify-between gap-2 shrink-0">
            <div className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-blue-400 shrink-0" />
              <span>
                Note: PDF download requested from <code className="font-mono text-white bg-slate-900 px-1 py-0.5 rounded">{personalConfig.resumeUrl}</code>. You can also print/save this live formatted resume directly using the Print button!
              </span>
            </div>
            <button
              onClick={() => setDownloadFailed(false)}
              className="text-slate-400 hover:text-white text-xs px-1 cursor-pointer"
            >
              ✕
            </button>
          </div>
        )}

        {/* Formatted Resume Body */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-8 bg-slate-950 text-slate-200 font-sans text-xs sm:text-sm">
          {/* Header */}
          <div className="border-b border-slate-800 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  {personalConfig.name}
                </h1>
                <p className="text-base font-medium text-blue-400 mt-1">
                  {personalConfig.primaryTitle}
                </p>
              </div>
              <div className="text-xs text-slate-400 sm:text-right space-y-1">
                <div>{personalConfig.email}</div>
                <div>{personalConfig.locationStatus}</div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-4 pt-3 border-t border-slate-800/60 text-xs text-slate-400">
              <button
                onClick={handleCopyEmail}
                className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{copiedEmail ? 'Copied to clipboard!' : personalConfig.email}</span>
              </button>
              <a
                href={personalConfig.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>GitHub Profile</span>
              </a>
              <a
                href={personalConfig.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Professional Summary
            </h2>
            <p className="text-slate-300 leading-relaxed">
              AI/ML Engineer focused on turning predictive modeling, Generative AI, RAG pipelines, AI agents, and computer vision into robust, deployable software systems. Strong emphasis on end-to-end architectures: data validation, model fine-tuning, deterministic agent routing, high-performance FastAPI backends, and containerized Docker serving.
            </p>
          </div>

          {/* Core Technical Skills */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-3">
              Technical Stack & Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {skillsCategories.map((cat) => (
                <div key={cat.category} className="p-3 rounded-lg bg-slate-900/60 border border-slate-800">
                  <span className="font-semibold text-white block mb-1">
                    {cat.category}
                  </span>
                  <p className="text-slate-400 leading-relaxed font-mono text-[11px]">
                    {cat.skills.join(', ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Featured Engineering Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-4">
              Key Engineering Projects
            </h2>
            <div className="space-y-6">
              {featuredProjects.map((p) => (
                <div key={p.id} className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1.5">
                    <h3 className="text-sm font-bold text-white">{p.name}</h3>
                    <span className="text-xs font-mono text-slate-400">{p.category}</span>
                  </div>
                  <p className="text-xs text-slate-300 mb-2 leading-relaxed">
                    {p.description}
                  </p>
                  <div className="text-[11px] text-slate-400 space-y-1 mb-3">
                    <div>
                      <strong className="text-slate-300">Architecture:</strong>{' '}
                      <span className="font-mono">{p.architecture.join(' → ')}</span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {p.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Engineering Experience */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold mb-2">
              Engineering Practice
            </h2>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800">
              <div className="flex justify-between items-baseline mb-1">
                <span className="text-sm font-semibold text-white">
                  {engineeringExperience.roleTitle}
                </span>
                <span className="text-xs font-mono text-slate-400">Continuous Practice</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed mb-3">
                {engineeringExperience.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                <li>Architecting agentic workflows with LangGraph and deterministic tool dispatching</li>
                <li>Developing high-throughput REST APIs using FastAPI and Pydantic schema validation</li>
                <li>Implementing vector search and retrieval pipelines using ChromaDB and Qdrant</li>
                <li>Designing time-series forecasting models using Facebook Prophet and Scikit-learn</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
