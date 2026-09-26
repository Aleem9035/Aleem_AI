import { useState } from 'react';
import { personalConfig } from '../data/portfolioData';
import { Mail, Linkedin, Github, Send, Copy, Check, MapPin, Globe, Sparkles } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrSubject: '',
    message: '',
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalConfig.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatusMessage('Please fill in your name, email, and message.');
      return;
    }

    const subject = encodeURIComponent(
      formData.roleOrSubject.trim()
        ? `[Portfolio Inquiry] ${formData.roleOrSubject} - ${formData.name}`
        : `[Portfolio Inquiry] Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Hi Aleem,\n\nName: ${formData.name}\nEmail: ${formData.email}\nSubject/Role: ${formData.roleOrSubject || 'N/A'}\n\nMessage:\n${formData.message}\n`
    );

    // Trigger direct mail client
    window.location.href = `mailto:${personalConfig.email}?subject=${subject}&body=${body}`;

    setStatusMessage(
      'Opening your email client to send your message. You can also copy my email directly!'
    );
  };

  return (
    <section id="contact" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Information Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-2">
                Get In Touch
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-4">
                Let's Build Something Useful.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                I'm open to AI/ML opportunities, interesting technical collaborations, and projects where AI can solve a real business problem.
              </p>

              {/* Status Callout */}
              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 mb-8 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Available for remote opportunities</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Open to full-time engineering roles, technical contract work, and forward-thinking AI teams across the Gulf and global ecosystems.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="space-y-4">
                {/* Email Direct */}
                <div className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] font-mono text-slate-500 block uppercase">
                        Email
                      </span>
                      <a
                        href={`mailto:${personalConfig.email}`}
                        className="text-xs text-white hover:text-blue-400 transition-colors truncate block font-mono"
                      >
                        {personalConfig.email}
                      </a>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors shrink-0 cursor-pointer"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* LinkedIn */}
                <a
                  href={personalConfig.linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-blue-950/60 text-blue-400 shrink-0">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      LinkedIn
                    </span>
                    <span className="text-xs text-white group-hover:text-blue-400 transition-colors">
                      Connect on LinkedIn
                    </span>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href={personalConfig.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 flex items-center gap-3 transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-slate-800 text-slate-200 shrink-0">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-500 block uppercase">
                      GitHub
                    </span>
                    <span className="text-xs text-white group-hover:text-blue-400 transition-colors">
                      Review Source Repositories
                    </span>
                  </div>
                </a>
              </div>
            </div>

            <div className="pt-8 text-xs text-slate-500 font-mono hidden lg:block">
              Response timeframe: Usually within 24 hours.
            </div>
          </div>

          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 shadow-xl shadow-black/20">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800/80">
                <h3 className="text-base font-semibold text-white">
                  Send a Message
                </h3>
                <span className="text-xs font-mono text-slate-500">
                  Direct Mail Integration
                </span>
              </div>

              {statusMessage && (
                <div className="mb-6 p-3 rounded-lg bg-blue-950/60 border border-blue-800/60 text-xs text-blue-200 flex items-center justify-between">
                  <span>{statusMessage}</span>
                  <button
                    type="button"
                    onClick={() => setStatusMessage(null)}
                    className="text-slate-400 hover:text-white ml-2 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Your Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Sarah Al-Rashid"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-medium text-slate-300 mb-1.5"
                    >
                      Email Address <span className="text-rose-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="name@organization.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Subject or Role Opportunity
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. AI/ML Engineer Role / Project Consultation"
                    value={formData.roleOrSubject}
                    onChange={(e) =>
                      setFormData({ ...formData, roleOrSubject: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-medium text-slate-300 mb-1.5"
                  >
                    Message <span className="text-rose-400">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    placeholder="Tell me about your team, challenge, or project..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-3.5 py-2.5 text-xs rounded-lg bg-slate-950 border border-slate-800 text-white placeholder:text-slate-500 focus:border-blue-500 focus:outline-none transition-colors resize-y leading-relaxed"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm shadow-blue-500/25 cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message</span>
                  </button>

                  <p className="text-[11px] text-slate-400 text-center sm:text-right">
                    Direct mailto integration — zero third-party tracking.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
