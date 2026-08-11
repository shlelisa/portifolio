"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle,
  Briefcase
} from "lucide-react";
import { profileData } from "@/data/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />,
  Database: <Database className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />,
  Server: <Server className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />,
  Cpu: <Cpu className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />
};

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
            Engineering Solutions with <span className="gradient-text">Purpose & Passion</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            A software engineer dedicated to building scalable digital systems and resolving complex technical challenges.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
          
          {/* Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    Software Engineering Graduate & IT Specialist
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    B.Sc. Degree • Full-Stack Focus • IT Infrastructure
                  </p>
                </div>
              </div>

              {profileData.aboutStory.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Full-Stack Web Engineering</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Database Query Optimization</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>RESTful API Development</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                  <span>Enterprise Gate Access Control</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Metrics Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 grid grid-cols-2 gap-4"
          >
            {profileData.stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg text-center flex flex-col items-center justify-center space-y-1 hover:border-indigo-500 dark:hover:border-cyan-500 transition-colors"
              >
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-indigo-600 dark:text-cyan-400">
                  {stat.value}
                </span>
                <span className="font-heading font-semibold text-sm text-slate-900 dark:text-white">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center">
                {iconMap[pillar.icon] || <Cpu className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />}
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                {pillar.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
