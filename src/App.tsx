import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { HowIBuild } from './components/HowIBuild';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { CaseStudy } from './components/CaseStudy';
import { Experience } from './components/Experience';
import { ProofOfWork } from './components/ProofOfWork';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResume = () => {
    setIsResumeModalOpen(false);
  };

  const handleScrollToCaseStudy = () => {
    const el = document.getElementById('case-study');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080c14] text-slate-100 selection:bg-blue-600/30 selection:text-blue-200 flex flex-col font-sans">
      {/* Sticky Top Navigation */}
      <Navbar onOpenResumeModal={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResumeModal={handleOpenResume} />
        <About />
        <HowIBuild />
        <Skills />
        <Projects onSelectCaseStudy={handleScrollToCaseStudy} />
        <CaseStudy />
        <Experience />
        <ProofOfWork />
        <ResumeSection onOpenResumeModal={handleOpenResume} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer onOpenResumeModal={handleOpenResume} />

      {/* Interactive Resume View/Print Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={handleCloseResume} />
    </div>
  );
}
