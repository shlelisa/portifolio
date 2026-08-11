"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Sparkles,
  Award,
  BookOpen,
  CheckCircle2
} from "lucide-react";
import { useEducationsQuery } from "@/hooks/use-portfolio-queries";

export function Education() {
  const { data: educationsData = [] } = useEducationsQuery();

  return (
    <section id="education" className="py-20 lg:py-28 relative bg-[#f8fafc] dark:bg-[#0b1120]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            Education &amp; <span className="text-blue-600 dark:text-blue-400">Academic Honors</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            My formal Software Engineering degree from Bule Hora University with high academic distinction.
          </p>
        </div>

        {/* Education Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {educationsData.map((edu) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-xl space-y-8 relative overflow-hidden"
            >
              {/* Header Info */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-[#1e293b]">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-[#1e293b] flex-shrink-0">
                    <GraduationCap className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-50">
                      {edu.institution}
                    </h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold text-base">
                      {edu.degree} in {edu.field}
                    </p>
                    <p className="text-xs text-slate-500 dark:text-slate-400 font-medium pt-0.5">
                      {edu.location}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col items-start sm:items-end gap-1.5">
                  <span className="px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#0b1120] text-xs font-semibold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {edu.graduationYear}
                  </span>
                  {edu.gpaOrHonors && (
                    <span className="px-3.5 py-1 rounded-xl bg-blue-50 dark:bg-[#0b1120] border border-blue-200 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-bold flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5" />
                      {edu.gpaOrHonors}
                    </span>
                  )}
                </div>
              </div>

              {/* Academic Highlights */}
              <div className="space-y-3">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <Award className="w-4 h-4 text-blue-500" />
                  <span>Academic Honors &amp; Achievements</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {edu.highlights.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] text-xs sm:text-sm text-slate-700 dark:text-slate-300 flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coursework */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Relevant Coursework &amp; Topics</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {edu.relevantCoursework.map((course) => (
                    <span
                      key={course}
                      className="px-3 py-1.5 rounded-xl text-xs font-medium bg-slate-100 dark:bg-[#0b1120] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b]"
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
