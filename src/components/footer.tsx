"use client";

import { Code2, ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { useProfileQuery } from "@/hooks/use-portfolio-queries";

export function Footer() {
  const { data: profile } = useProfileQuery();
  const name = profile?.name || "Lelisa Shashura";
  const title = profile?.title || "Software Engineer | IT Professional";
  const email = profile?.email || "lelisashashura@gmail.com";
  const github = profile?.github || "https://github.com/shlelisa";
  const linkedin = profile?.linkedin || "https://www.linkedin.com/in/lelisa-shashura-4935a2259/";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0b1120] text-slate-400 border-t border-[#1e293b] py-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#1e293b] items-start">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white">
                <Code2 className="w-5 h-5" />
              </div>
              <span className="font-heading font-bold text-xl text-slate-50">
                Lelisa<span className="text-blue-500">.Shashura</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              {title} advancing from IT operations toward full-stack enterprise software application development.
            </p>
          </div>

          {/* Navigation Links Column */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs font-medium">
              <a href="#hero" className="hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="hover:text-blue-400 transition-colors">About Me</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
              <a href="#education" className="hover:text-blue-400 transition-colors">Education</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">Services</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>

          {/* Social Links & Back to Top Column */}
          <div className="md:col-span-3 space-y-4 flex flex-col md:items-end">
            <h4 className="font-heading font-bold text-sm text-slate-100 uppercase tracking-wider">
              Connect
            </h4>
            <div className="flex items-center gap-3">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#111827] border border-[#1e293b] text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#111827] border border-[#1e293b] text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${email}`}
                className="p-2.5 rounded-xl bg-[#111827] border border-[#1e293b] text-slate-300 hover:text-blue-400 transition-colors"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-2 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] border border-[#1e293b] hover:bg-blue-600 hover:text-white text-slate-300 text-xs font-semibold transition-all hover:scale-105"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© {new Date().getFullYear()} {name}. All rights reserved.</p>
          <p>Designed with Next.js, TypeScript, Tailwind CSS &amp; TanStack Query</p>
        </div>

      </div>
    </footer>
  );
}
