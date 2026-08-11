"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Building2,
  BookOpen,
  Code
} from "lucide-react";
import { useProfileQuery } from "@/hooks/use-portfolio-queries";

export function About() {
  const { data: profile } = useProfileQuery();
  const paragraphs = profile?.aboutParagraphs || [];

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
            About <span className="text-blue-600 dark:text-blue-400">{profile?.name || "Lelisa Shashura"}</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Software Engineering graduate from Bule Hora University (CGPA: 3.88) working as an IT Trainee under the Development Team at Amhara Bank.
          </p>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Story Column */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-md space-y-5">
              
              <div className="flex items-center gap-3.5 pb-4 border-b border-slate-100 dark:border-[#1e293b]">
                <div className="p-3 rounded-2xl bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-[#1e293b]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-50">
                    Software Engineering Graduate &amp; IT Professional
                  </h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                    Bule Hora University • CGPA: 3.88
                  </p>
                </div>
              </div>

              {paragraphs.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed"
                >
                  {paragraph}
                </p>
              ))}

            </div>
          </motion.div>

          {/* Key Facts Summary Cards */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4 flex flex-col justify-between gap-4"
          >
            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                <BookOpen className="w-4 h-4" />
                <span>Education</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-50">
                B.Sc. Software Engineering
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Bule Hora University (2020 – 2024)
              </p>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 pt-1">
                CGPA: 3.88
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Building2 className="w-4 h-4" />
                <span>Current Role</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-50">
                IT Trainee — Dev Team
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Amhara Bank (June 2026 – Present)
              </p>
              <div className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                Enterprise Application Support &amp; Development
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider">
                <Code className="w-4 h-4" />
                <span>Past Role</span>
              </div>
              <h4 className="font-heading font-bold text-base text-slate-900 dark:text-slate-50">
                IT Officer
              </h4>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Oromia Construction Corp (Dec 2024 – Jun 2026)
              </p>
              <div className="text-xs text-slate-600 dark:text-slate-300 pt-1">
                IT Support, ERP, &amp; Networking Support
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
