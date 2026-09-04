"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Award,
  Building2,
  Code,
  ArrowRight
} from "lucide-react";
import { useProfileQuery } from "@/hooks/use-portfolio-queries";

interface HeroProps {
  onOpenCVModal: () => void;
}

export function Hero({ onOpenCVModal }: HeroProps) {
  const { data: profile } = useProfileQuery();
  const [imgError, setImgError] = useState(false);

  const name = profile?.name || "Lelisa Shashura";
  const title = profile?.title || "Software Engineer | IT Professional";
  const github = profile?.github || "https://github.com/shlelisa";
  const linkedin = profile?.linkedin || "https://www.linkedin.com/in/lelisa-shashura-4935a2259/";
  const phone = profile?.phone || "+251969642103";
  const avatarUrl = profile?.avatarUrl || "/images/avatar.svg";

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
      className="relative min-h-[85vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center bg-tech-grid"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#111827] border border-[#1e293b] text-blue-400 text-xs font-semibold shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span>IT Trainee — Amhara Bank Development Team</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-slate-50 leading-[1.1]">
                {name}
              </h1>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-blue-600 dark:text-blue-400">
                {title}
              </h2>
            </div>

            {/* Natural Introduction Statement */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              Software Engineering graduate from <strong className="text-slate-900 dark:text-slate-100 font-semibold">Bule Hora University</strong> (CGPA: <span className="text-blue-600 dark:text-blue-400 font-bold">3.88</span>). Advancing from practical IT support as an IT Officer at OCC toward software application development on Amhara Bank&apos;s Development Team.
            </p>

            {/* Career Journey Sequence */}
            <div className="w-full max-w-2xl p-4 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-sm space-y-2">
              <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Career Journey
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#0b1120] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e293b]">
                  B.Sc. Student (3.88 CGPA)
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-[#0b1120] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e293b]">
                  IT Officer (OCC)
                </span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                <span className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-[#1e293b]">
                  IT Trainee (Amhara Bank)
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-blue-600 hover:bg-blue-700 text-white transition-all shadow-sm"
              >
                <span>View Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-[#111827] text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-[#1e293b] hover:bg-slate-50 dark:hover:bg-[#1e293b] transition-all"
              >
                <Download className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>View &amp; Save CV</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-3 border-t border-slate-200 dark:border-[#1e293b] w-full">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Connect:</span>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1e293b] transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1e293b] transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 border border-slate-200 dark:border-[#1e293b] transition-colors text-xs font-semibold"
                aria-label="Call Phone"
              >
                {phone}
              </a>
            </div>

          </motion.div>

          {/* Avatar Visual Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[360px]">
              <div className="relative rounded-3xl bg-white dark:bg-[#111827] p-4 border border-slate-200 dark:border-[#1e293b] shadow-xl overflow-hidden">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center">
                  {!imgError ? (
                    <Image
                      src={avatarUrl}
                      alt={name}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover object-center"
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
                          {name}
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
