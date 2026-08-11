"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Download,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Terminal,
  CheckCircle2,
  ExternalLink,
  Code
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
      const offset = 80;
      const elementPosition = elem.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center justify-center overflow-hidden"
    >
      {/* Dynamic Background Glow & Grid Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 right-10 w-[350px] h-[350px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[90px]" />
        {/* Fine background grid line pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start text-left space-y-6"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/80 dark:border-indigo-800/60 text-indigo-700 dark:text-cyan-400 text-xs font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Software Engineering Roles</span>
              <Sparkles className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Hi, I&apos;m{" "}
                <span className="gradient-text">
                  {profileData.name}
                </span>
              </h1>
              <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-indigo-600 dark:text-cyan-400">
                {profileData.title}
              </h2>
            </div>

            {/* Short Bio */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed">
              {profileData.bio}
            </p>

            {/* Core Tech Pill Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 mr-1 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5" /> Stack:
              </span>
              {["Next.js", "React", "TypeScript", "Node.js", "PHP", "PostgreSQL", "Tailwind"].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm gradient-bg-accent transition-all hover:scale-105 active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenCVModal}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 shadow-sm transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Channels */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 w-full">
              <span className="text-xs font-medium text-slate-500 dark:text-slate-400">Connect:</span>
              <a
                href={profileData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={profileData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${profileData.email}`}
                className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors"
                aria-label="Email Contact"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Avatar / Visual Frame Column */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Decorative Glowing Rings */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-indigo-600 to-cyan-400 rounded-3xl blur-xl opacity-40 dark:opacity-50 animate-pulse-slow" />

              {/* Main Avatar Card Frame */}
              <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden">
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-slate-100 to-indigo-50 dark:from-slate-950 dark:to-indigo-950/50 flex items-center justify-center">
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
                    /* Fallback Stylized Avatar Visual */
                    <div className="flex flex-col items-center justify-center p-8 text-center space-y-4">
                      <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 flex items-center justify-center shadow-lg">
                        <Code className="w-12 h-12 text-white" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                          Lelisa Shashura
                        </h3>
                        <p className="text-xs text-indigo-600 dark:text-cyan-400 font-semibold">
                          Software Engineer & IT
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Overlaid Micro Badges */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>CGPA: 3.88</span>
                  </div>

                  <div className="absolute bottom-3 left-3 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-slate-950/90 backdrop-blur-md border border-slate-200/80 dark:border-slate-800/80 shadow-md flex items-center gap-1.5 text-[11px] font-semibold text-slate-800 dark:text-slate-200">
                    <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
                    <span>Full-Stack & IT</span>
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
