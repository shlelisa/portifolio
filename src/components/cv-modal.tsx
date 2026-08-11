"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, Briefcase, GraduationCap, Code } from "lucide-react";
import { profileData, skillCategories, experiences, educationsData } from "@/data/portfolio-data";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handleDownload = () => {
    // Generate a simple dynamic text blob file download for Lelisa's CV
    const cvText = `
==================================================
LELISA SHASHURA - CURRICULUM VITAE
Software Engineer & IT Professional
==================================================
Email: ${profileData.email}
Phone: ${profileData.phone}
Location: ${profileData.location}
GitHub: ${profileData.github}
LinkedIn: ${profileData.linkedin}

PROFESSIONAL SUMMARY
--------------------------------------------------
${profileData.bio}

SKILLS & CORE COMPETENCIES
--------------------------------------------------
${skillCategories.map(cat => `${cat.title}: ${cat.skills.map(s => s.name).join(', ')}`).join('\n')}

WORK EXPERIENCE
--------------------------------------------------
${experiences.map(exp => `
Role: ${exp.jobTitle} (${exp.type})
Company: ${exp.organization} | ${exp.location}
Period: ${exp.period}
Responsibilities:
${exp.responsibilities.map(r => `  - ${r}`).join('\n')}
Achievements:
${exp.achievements.map(a => `  - ${a}`).join('\n')}
`).join('\n--------------------------------------------------\n')}

EDUCATION
--------------------------------------------------
Degree: ${educationsData[0].degree} in ${educationsData[0].field}
Institution: ${educationsData[0].institution} (${educationsData[0].graduationYear})
Honors: ${educationsData[0].gpaOrHonors}
Coursework: ${educationsData[0].relevantCoursework.join(', ')}
==================================================
`;

    const blob = new Blob([cvText], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = profileData.resumeDownloadName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar Actions */}
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-indigo-50 dark:bg-indigo-950 text-indigo-600 dark:text-cyan-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                  Curriculum Vitae Preview
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Lelisa Shashura • Software Engineer & IT Professional
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleDownload}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white gradient-bg-accent shadow-md transition-all hover:scale-105"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">Download CV</span>
              </button>
              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 hover:text-slate-900 dark:hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200/80 dark:border-slate-800 space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
            
            {/* Resume Header */}
            <div className="text-center space-y-1 pb-4 border-b border-slate-200 dark:border-slate-800">
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white">
                {profileData.name}
              </h2>
              <p className="font-semibold text-indigo-600 dark:text-cyan-400 text-sm">
                {profileData.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.email} • {profileData.phone} • {profileData.location}
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Summary
              </h4>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                {profileData.bio}
              </p>
            </div>

            {/* Core Technical Competencies */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Technical Stack & Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skillCategories.map(cat => (
                  <div key={cat.id}>
                    <strong className="text-slate-900 dark:text-white">{cat.title}:</strong>{" "}
                    <span className="text-slate-600 dark:text-slate-300">{cat.skills.map(s => s.name).join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Professional Experience
              </h4>
              {experiences.map(exp => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-slate-900 dark:text-white text-sm">{exp.jobTitle}</strong>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs text-indigo-600 dark:text-cyan-400 font-medium">
                    {exp.organization} • {exp.location}
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-600 dark:text-slate-300 text-xs">
                    {exp.responsibilities.map((r, i) => (
                      <li key={i}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Education */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-slate-800 pb-1">
                Education
              </h4>
              <div>
                <strong className="text-slate-900 dark:text-white">{educationsData[0].degree} in {educationsData[0].field}</strong>
                <p className="text-slate-600 dark:text-slate-300 text-xs">
                  {educationsData[0].institution} • {educationsData[0].graduationYear} ({educationsData[0].gpaOrHonors})
                </p>
              </div>
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
