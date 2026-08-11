"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Sparkles,
  Award,
  Building2,
  GraduationCap,
  Code,
  ArrowRight
} from "lucide-react";
import { profileData } from "@/data/portfolio-data";

interface HeroProps {
  onOpenCVModal: () => void;
}

export function Hero({ onOpenCVModal }: HeroProps) {
  const [imgError, setImgError] = useState(false);

  const scrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById("projects");
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden bg-tech-grid"
    >
      {/* Soft Blue Radial Background Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px]" />
        <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-blue-400/10 dark:bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
              </span>
              <span>IT Trainee — Amhara Bank Development Team</span>
              <Sparkles className="w-3.5 h-3.5 text-blue-500" />
            </div>

            {/* Main Confident Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="text-blue-600 dark:text-blue-500">
                  {profileData.name}
                </span>
              </h1>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-slate-700 dark:text-slate-300">
                Software Engineer <span className="text-slate-400 dark:text-slate-600">|</span> IT Professional
              </h2>
            </div>

            {/* Transition Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Software Engineering graduate from <strong className="text-slate-900 dark:text-slate-100 font-semibold">Bule Hora University</strong> (CGPA: <span className="text-blue-600 dark:text-blue-400 font-bold">3.88</span>). Advancing from practical IT operations as an IT Officer at OCC toward full-stack software application engineering on Amhara Bank&apos;s Development Team.
            </p>

            {/* Career Progression Flow Preview */}
            <div className="w-full max-w-2xl p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-sm space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Professional Journey &amp; Progression
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#1e293b] text-slate-800 dark:text-slate-200">
                  B.Sc. Student (3.88 CGPA)
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#1e293b] text-slate-800 dark:text-slate-200">
                  IT Officer (OCC)
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/80 text-blue-600 dark:text-blue-400 border border-blue-200/80 dark:border-blue-900/80">
                  IT Trainee (Amhara Bank)
                </span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/20 transition-all hover:scale-105 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-[#1e293b] hover:bg-slate-50 dark:hover:bg-[#1e293b] shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View &amp; Save CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-[#1e293b] w-full">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1e293b] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1e293b] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${profileData.phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1e293b] transition-colors text-xs font-semibold"
                aria-label="Call Phone"
              >
                {profileData.phone}
              </a>
            </div>

          </motion.div>

          {/* Avatar Visual Frame Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Subtle Glowing Ring */}
              <div className="absolute -inset-1.5 bg-blue-600/30 rounded-3xl blur-xl opacity-40 animate-pulse-slow" />

              {/* Main Card Frame */}
              <div className="relative rounded-3xl bg-white dark:bg-[#111827] p-4 border border-slate-200 dark:border-[#1e293b] shadow-2xl overflow-hidden">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src={profileData.avatarUrl}
                      alt={profileData.name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center shadow-lg">
                        <Code className="w-10 h-10 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-50">
                          Lelisa Shashura
                        </h3>
                        <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                          Software Engineer
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Overlaid Badges */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-[#0b1120]/90 backdrop-blur-md border border-[#1e293b] shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-blue-400">
                    <Award className="w-3.5 h-3.5 text-blue-400" />
                    <span>CGPA: 3.88</span>
                  </div>

                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-[#0b1120]/90 backdrop-blur-md border border-[#1e293b] shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-slate-200">
                    <Building2 className="w-3.5 h-3.5 text-blue-400" />
                    <span>Amhara Bank</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
