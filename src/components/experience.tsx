"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  Sparkles,
  ChevronRight,
  GraduationCap,
  Building2,
  ArrowRight
} from "lucide-react";
import { experiences } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-[#f8fafc] dark:bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            Professional <span className="text-blue-600 dark:text-blue-400">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            My transition from software engineering studies to IT infrastructure support and enterprise application development.
          </p>
        </div>

        {/* Career Progression Flow Card */}
        <div className="max-w-4xl mx-auto mb-16 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-md space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-[#1e293b]">
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-50 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <span>Career Roadmap</span>
            </h3>
            <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-[#0b1120] px-3 py-1 rounded-full border border-blue-200 dark:border-[#1e293b]">
              Bule Hora CGPA: 3.88
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Step 1 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] space-y-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-[#1e293b] text-blue-700 dark:text-blue-300">
                2020 – 2024
              </span>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-50 pt-1">
                Bule Hora University
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                B.Sc. Software Engineering (3.88 CGPA)
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] space-y-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 dark:bg-[#1e293b] text-blue-700 dark:text-blue-300">
                Dec 2024 – Jun 2026
              </span>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-50 pt-1">
                Oromia Construction Corp
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-300">
                IT Officer (IT Support &amp; ERP)
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-2xl bg-blue-50/80 dark:bg-[#0b1120] border border-blue-200 dark:border-blue-900/60 space-y-1">
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-600 text-white dark:bg-blue-500">
                June 2026 – Present
              </span>
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-slate-50 pt-1">
                Amhara Bank
              </h4>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                IT Trainee — Development Team
              </p>
            </div>
          </div>
        </div>

        {/* Detailed Work Experience Cards */}
        <div className="relative border-l-2 border-blue-200 dark:border-[#1e293b] ml-4 sm:ml-8 lg:ml-32 space-y-10 pr-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-[#0b1120] border-4 border-blue-600 dark:border-blue-500 flex items-center justify-center shadow-sm">
                <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500" />
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-md space-y-5">
                
                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-[#1e293b]">
                  <div className="space-y-1">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-[#1e293b] tracking-wider">
                      {exp.organization}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-slate-50 pt-1">
                      {exp.jobTitle}
                    </h3>
                  </div>

                  <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-[#0b1120] text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] self-start md:self-auto">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Responsibilities &amp; Tasks
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Used */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Technologies &amp; Scope:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#0b1120] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
