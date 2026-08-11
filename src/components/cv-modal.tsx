"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, Printer } from "lucide-react";
import { profileData, skillCategories, experiences, educationsData } from "@/data/portfolio-data";

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CVModal({ isOpen, onClose }: CVModalProps) {
  if (!isOpen) return null;

  const handlePrintPDF = () => {
    const printWindow = window.open("", "_blank");
    if (!printWindow) return;

    printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${profileData.name} - Curriculum Vitae</title>
          <style>
            body { font-family: 'Helvetica Neue', Arial, sans-serif; padding: 40px; color: #0f172a; line-height: 1.6; max-width: 800px; margin: 0 auto; }
            h1 { font-size: 26px; margin-bottom: 2px; color: #0f172a; }
            h2 { font-size: 16px; color: #2563eb; margin-top: 0; margin-bottom: 12px; }
            h3 { font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; border-bottom: 2px solid #e2e8f0; padding-bottom: 4px; color: #475569; margin-top: 20px; margin-bottom: 10px; }
            .meta { font-size: 12px; color: #64748b; margin-bottom: 16px; }
            .section { margin-bottom: 14px; }
            .role-title { font-weight: bold; font-size: 14px; display: flex; justify-content: space-between; }
            .company { font-weight: 600; color: #2563eb; font-size: 12px; margin-bottom: 4px; }
            ul { margin-top: 4px; padding-left: 18px; margin-bottom: 0; }
            li { font-size: 12px; margin-bottom: 3px; color: #334155; }
            .skill-item { font-size: 12px; margin-bottom: 4px; }
            @media print {
              body { padding: 0; }
            }
          </style>
        </head>
        <body>
          <h1>${profileData.name}</h1>
          <h2>${profileData.title}</h2>
          <div class="meta">${profileData.email} | ${profileData.phone} | ${profileData.location}</div>
          <div class="meta">GitHub: ${profileData.github} | LinkedIn: ${profileData.linkedin}</div>

          <h3>Professional Summary</h3>
          <p style="font-size: 12px; color: #334155; margin: 0;">${profileData.bio}</p>

          <h3>Technical Skills</h3>
          ${skillCategories.map(cat => `<div class="skill-item"><strong>${cat.title}:</strong> ${cat.skills.map(s => s.name).join(", ")}</div>`).join("")}

          <h3>Professional Experience</h3>
          ${experiences.map(exp => `
            <div class="section">
              <div class="role-title"><span>${exp.jobTitle}</span> <span style="font-weight: normal; color: #64748b;">${exp.period}</span></div>
              <div class="company">${exp.organization} • ${exp.location}</div>
              <ul>
                ${exp.responsibilities.map(r => `<li>${r}</li>`).join("")}
              </ul>
            </div>
          `).join("")}

          <h3>Education</h3>
          <div class="section">
            <div class="role-title"><span>${educationsData[0].degree} in ${educationsData[0].field}</span> <span style="font-weight: normal; color: #64748b;">${educationsData[0].graduationYear}</span></div>
            <div class="company">${educationsData[0].institution} (${educationsData[0].gpaOrHonors})</div>
          </div>
          <script>
            window.onload = function() {
              setTimeout(function() {
                window.print();
              }, 300);
            }
          </script>
        </body>
      </html>
    `);
    printWindow.document.close();
  };

  const handleDownloadTxt = () => {
    const cvText = `
==================================================
LELISA SHASHURA - CURRICULUM VITAE
Software Engineer | IT Professional
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
    link.download = "Lelisa_Shashura_CV.txt";
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
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1120]/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          className="relative w-full max-w-4xl rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-2xl p-6 sm:p-10 space-y-6 max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar Actions */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-[#1e293b]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-[#0b1120] border border-blue-100 dark:border-[#1e293b] text-blue-600 dark:text-blue-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-50">
                  Curriculum Vitae Preview
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  Lelisa Shashura • Software Engineer | IT Professional
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrintPDF}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 shadow-md shadow-blue-600/20 transition-all hover:scale-105"
                title="Save as PDF using browser print dialog"
              >
                <Printer className="w-4 h-4" />
                <span>Save as PDF</span>
              </button>

              <button
                onClick={handleDownloadTxt}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0b1120] border border-slate-200 dark:border-[#1e293b] text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-[#1e293b] transition-all"
                title="Download plain text CV"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">TXT</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-full bg-slate-100 dark:bg-[#0b1120] text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#1e293b]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable / Viewable Resume Document Body */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] space-y-6 text-slate-800 dark:text-slate-200 text-xs sm:text-sm">
            
            {/* Resume Header */}
            <div className="text-center space-y-1 pb-4 border-b border-slate-200 dark:border-[#1e293b]">
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-slate-50">
                {profileData.name}
              </h2>
              <p className="font-semibold text-blue-600 dark:text-blue-400 text-sm">
                {profileData.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                {profileData.email} • {profileData.phone} • {profileData.location}
              </p>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-[#1e293b] pb-1">
                Professional Summary
              </h4>
              <p className="leading-relaxed text-slate-600 dark:text-slate-300">
                {profileData.bio}
              </p>
            </div>

            {/* Core Technical Competencies */}
            <div className="space-y-2">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-[#1e293b] pb-1">
                Technical Stack &amp; Skills
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {skillCategories.map(cat => (
                  <div key={cat.id}>
                    <strong className="text-slate-900 dark:text-slate-100">{cat.title}:</strong>{" "}
                    <span className="text-slate-600 dark:text-slate-300">{cat.skills.map(s => s.name).join(", ")}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4">
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-[#1e293b] pb-1">
                Professional Experience
              </h4>
              {experiences.map(exp => (
                <div key={exp.id} className="space-y-1.5">
                  <div className="flex justify-between items-baseline">
                    <strong className="text-slate-900 dark:text-slate-100 text-sm">{exp.jobTitle}</strong>
                    <span className="text-xs text-slate-500">{exp.period}</span>
                  </div>
                  <div className="text-xs text-blue-600 dark:text-blue-400 font-medium">
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
              <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 border-b border-slate-200 dark:border-[#1e293b] pb-1">
                Education
              </h4>
              <div>
                <strong className="text-slate-900 dark:text-slate-100">{educationsData[0].degree} in {educationsData[0].field}</strong>
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
