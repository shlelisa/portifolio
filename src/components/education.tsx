"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  MapPin,
  Trophy,
  BookOpen,
  Sparkles,
  Award
} from "lucide-react";
import { educationsData } from "@/data/portfolio-data";

export function Education() {
  return (
    <section id="education" className="py-20 lg:py-28 relative bg-slate-50/50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
            Education & <span className="gradient-text">Academic Excellence</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            My formal Software Engineering degree, specialized coursework, and academic milestones.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {educationsData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-8 relative overflow-hidden"
            >
              {/* Decorative Corner Ambient Glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-indigo-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400 flex-shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-indigo-600 dark:text-cyan-400 font-semibold text-base">
                      {edu.field}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium pt-0.5">
                      {edu.institution} • {edu.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-xs font-semibold text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                    {edu.graduationYear}
                  </span>
                  {edu.gpaOrHonors && (
                    <span className="px-3 py-1 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold flex items-center gap-1">
                      <Award className="w-3.5 h-3.5" />
                      {edu.gpaOrHonors}
                    </span>
                  )}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  <span>Academic Honors & Achievements</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200/60 dark:border-slate-800 text-xs sm:text-sm text-slate-700 dark:text-slate-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <BookOpen className="w-4 h-4 text-indigo-500 dark:text-cyan-400" />
                  <span>Key Coursework & Domains</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
