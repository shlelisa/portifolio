"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Calendar,
  MapPin,
  Sparkles,
  Trophy,
  CheckCircle2,
  ChevronRight
} from "lucide-react";
import { experiences } from "@/data/portfolio-data";

export function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Work History</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            My career timeline delivering full-stack applications, database optimizations, and IT management.
          </p>
        </div>

        {/* Vertical Interactive Timeline */}
        <div className="relative border-l-2 border-indigo-200 dark:border-slate-800 ml-4 sm:ml-8 lg:ml-32 space-y-12 pr-2">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Timeline Marker Point */}
              <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-white dark:bg-slate-950 border-4 border-indigo-600 dark:border-cyan-400 flex items-center justify-center shadow-md">
                <div className="w-2 h-2 rounded-full bg-indigo-600 dark:bg-cyan-400" />
              </div>

              {/* Main Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
                
                {/* Role Header */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="space-y-1">
                    <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-cyan-300 tracking-wider">
                      {exp.type}
                    </span>
                    <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white pt-1">
                      {exp.jobTitle}
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                      <span className="font-semibold text-slate-700 dark:text-slate-300">
                        {exp.organization}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-indigo-500" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold text-slate-700 dark:text-slate-300 self-start md:self-auto">
                    <Calendar className="w-4 h-4 text-indigo-600 dark:text-cyan-400" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Key Responsibilities */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-2">
                    {exp.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <ChevronRight className="w-4 h-4 text-indigo-500 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Important Achievements */}
                {exp.achievements.length > 0 && (
                  <div className="p-4 rounded-2xl bg-amber-500/5 dark:bg-amber-500/10 border border-amber-500/20 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-bold text-amber-700 dark:text-amber-400 uppercase tracking-wider">
                      <Trophy className="w-4 h-4" />
                      <span>Key Achievements</span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.achievements.map((ach, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                          <span>{ach}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack Badges */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-[11px] font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider">
                    Technologies Utilized:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {exp.techUsed.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
