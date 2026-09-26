import { useState } from 'react';
import { personalConfig } from '../data/portfolioData';
import { ArrowDown, FileText, Sparkles, Terminal, ShieldCheck, Mail, ArrowRight, User } from 'lucide-react';

interface HeroProps {
  onOpenResumeModal: () => void;
}

export function Hero({ onOpenResumeModal }: HeroProps) {
  const [customAvatar, setCustomAvatar] = useState<string | null>(null);

  const handleAvatarUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setCustomAvatar(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient illumination */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-[300px] h-[300px] bg-cyan-500/5 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Core Positioning & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/80 border border-slate-800 text-xs text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{personalConfig.availability}</span>
              <span className="text-slate-600">·</span>
              <span className="text-slate-400">Remote & Saudi / Gulf</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15] text-balance mb-6">
              {personalConfig.headline}
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
              {personalConfig.subheadline}
            </p>

            {/* Core Domain Competencies (Unboxed text with separators) */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-400 mb-9 py-2.5 px-3.5 rounded-lg bg-slate-900/40 border border-slate-800/60 font-mono">
              <span className="text-blue-400 font-medium">Core Focus:</span>
              <span>Machine Learning</span>
              <span className="text-slate-700">/</span>
              <span>Generative AI & RAG</span>
              <span className="text-slate-700">/</span>
              <span>AI Agents</span>
              <span className="text-slate-700">/</span>
              <span>Computer Vision</span>
              <span className="text-slate-700">/</span>
              <span>FastAPI</span>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <a
                href="#projects"
                className="px-6 py-3 text-sm font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500 active:bg-blue-700 transition-colors shadow-sm shadow-blue-500/25 flex items-center gap-2 group"
              >
                <span>View My Work</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>

              <a
                href="#contact"
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-900/90 border border-slate-700 rounded-lg hover:bg-slate-800 hover:text-white transition-colors flex items-center gap-2"
              >
                <Mail className="w-4 h-4 text-blue-400" />
                <span>Let's Work Together</span>
              </a>
            </div>

            {/* Secondary Resume Action */}
            <div className="flex items-center gap-4 text-xs text-slate-400 pt-1">
              <button
                type="button"
                onClick={onOpenResumeModal}
                className="hover:text-blue-400 underline underline-offset-4 decoration-slate-700 hover:decoration-blue-400 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Download Resume</span>
              </button>
              <span className="text-slate-700">·</span>
              <a
                href="#how-i-build"
                className="hover:text-slate-200 transition-colors flex items-center gap-1 text-slate-400"
              >
                <span>Read Engineering Approach</span>
                <ArrowDown className="w-3 h-3 text-slate-500" />
              </a>
            </div>
          </div>

          {/* Right Column: Professional Profile Visual Area (Placeholder for real photo, zero fake stock imagery) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-sm rounded-2xl bg-gradient-to-b from-slate-900/90 to-slate-950 border border-slate-800 p-6 relative shadow-xl shadow-black/40">
              {/* Header of the visual card */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800/80">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                  <span className="text-xs font-mono text-slate-400">profile.py</span>
                </div>
                <div className="text-[11px] text-slate-500 font-mono">
                  Verified Candidate
                </div>
              </div>

              {/* Avatar Holder Container */}
              <div className="relative group mx-auto mb-5 w-44 h-44 rounded-xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center">
                {customAvatar ? (
                  <img
                    src={customAvatar}
                    alt="Aleem - AI/ML Engineer profile"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center text-center p-4 bg-gradient-to-br from-slate-900 via-[#0b1220] to-slate-950">
                    <div className="w-16 h-16 rounded-full bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-2">
                      <span className="text-2xl font-bold font-mono">A</span>
                    </div>
                    <span className="text-xs font-medium text-slate-300">Aleem</span>
                    <span className="text-[11px] text-slate-500 mt-0.5">AI/ML Engineer</span>
                    <span className="text-[10px] text-slate-600 mt-2 italic">Photo Placeholder</span>
                  </div>
                )}

                {/* Optional interactive custom photo tester */}
                <label className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center cursor-pointer p-2 text-center">
                  <User className="w-5 h-5 text-blue-400 mb-1" />
                  <span className="text-[11px] text-white font-medium">Upload Headshot</span>
                  <span className="text-[9px] text-slate-400">(Preview in browser)</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleAvatarUpload}
                    className="sr-only"
                    aria-label="Upload personal headshot photo"
                  />
                </label>
              </div>

              {/* Quick Profile Summary Points */}
              <div className="space-y-2.5 text-xs">
                <div className="flex items-center justify-between py-1.5 px-3 rounded-md bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400">Position</span>
                  <span className="text-white font-medium">AI / ML Engineer</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded-md bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400">Specialization</span>
                  <span className="text-slate-200">RAG, Agents & ML Pipelines</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded-md bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400">Primary Stack</span>
                  <span className="text-blue-400 font-mono">Python · FastAPI · PyTorch</span>
                </div>
                <div className="flex items-center justify-between py-1.5 px-3 rounded-md bg-slate-900/60 border border-slate-800/60">
                  <span className="text-slate-400">Target Markets</span>
                  <span className="text-slate-200">Global Remote & Saudi / GCC</span>
                </div>
              </div>

              {/* Bottom engineering note */}
              <p className="mt-4 text-[11px] text-slate-500 leading-normal text-center">
                Focused on deployable AI architectures, deterministic guardrails, and real business value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
