"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Experience } from "@/components/experience";
import { Projects } from "@/components/projects";
import { Education } from "@/components/education";
import { Services } from "@/components/services";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { CVModal } from "@/components/cv-modal";

export default function Home() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const [contactPrefilledSubject, setContactPrefilledSubject] = useState("");

  const handleSelectServiceSubject = (subjectTag: string) => {
    setContactPrefilledSubject(subjectTag);
  };

  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Sticky Header Navbar */}
      <Navbar />

      {/* Hero Banner */}
      <Hero onOpenCVModal={() => setIsCVModalOpen(true)} />

      {/* About Section */}
      <About />

      {/* Skills Showcase */}
      <Skills />

      {/* Experience Timeline */}
      <Experience />

      {/* Featured Projects Showcase */}
      <Projects />

      {/* Academic Education */}
      <Education />

      {/* Services Capabilities */}
      <Services onSelectServiceSubject={handleSelectServiceSubject} />

      {/* Contact Section */}
      <Contact prefilledSubject={contactPrefilledSubject} />

      {/* Footer */}
      <Footer />

      {/* Downloadable CV Viewer Modal */}
      <CVModal isOpen={isCVModalOpen} onClose={() => setIsCVModalOpen(false)} />
    </main>
  );
}
