"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Server,
  Cpu,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Building2,
  Award
} from "lucide-react";
import { profileData } from "@/data/portfolio-data";

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Server: <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Database: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
};

export function About() {
  return (
    <section id="about" className="py-20 lg:py-28 relative bg-[#f8fafc] dark:bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            Software Engineering &amp; <span className="text-blue-600 dark:text-blue-400">IT Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            A Software Engineering graduate from Bule Hora University (CGPA: 3.88) advancing from IT operations to enterprise software development.
          </p>
        </div>

        {/* Narrative & Stats Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-16">
          
          {/* Main Narrative Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-lg space-y-5 h-full flex flex-col justify-between">
              
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-[#1e293b]">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-[#1e293b]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-50">
                    B.Sc. Software Engineering Graduate
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Bule Hora University • CGPA: <span className="font-bold">3.88</span>
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

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Full-Stack Web Development</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>REST APIs &amp; Server Logic</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Database Engineering (SQL &amp; NoSQL)</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0" />
                  <span>Enterprise IT &amp; ERP Support</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Scannable Stat Metric Cards */}
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
                className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-md text-center flex flex-col items-center justify-center space-y-2 hover:border-blue-500/50 transition-all card-hover"
              >
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-blue-600 dark:text-blue-400">
                  {stat.value}
                </span>
                <span className="font-heading font-bold text-sm text-slate-900 dark:text-slate-50">
                  {stat.label}
                </span>
                <span className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                  {stat.subtext}
                </span>
              </div>
            ))}
          </motion.div>

        </div>

        {/* 4 Pillars Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {profileData.pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-sm card-hover space-y-3"
            >
              <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-[#0b1120] border border-blue-100 dark:border-[#1e293b] flex items-center justify-center">
                {iconMap[pillar.icon] || <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
              </div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-slate-50">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
