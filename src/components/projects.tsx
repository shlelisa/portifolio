"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  GraduationCap,
  Sparkles,
  Search,
  X,
  CheckCircle2,
  ArrowRight,
  Code2,
  AlertCircle,
  Lightbulb,
  Layers,
  UserCheck,
  FileCode2,
  ExternalLink,
  Globe,
  Github
} from "lucide-react";
import { useProjectsQuery } from "@/hooks/use-portfolio-queries";
import { Project } from "@/types/portfolio";

export function Projects() {
  const { data: projectsData = [] } = useProjectsQuery();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories = ["All", "Web Apps", "Academic Projects"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" ||
      project.category === selectedCategory ||
      (selectedCategory === "Web Apps" && (project.category === "Web Apps" || project.projectType === "Professional Project")) ||
      (selectedCategory === "Academic Projects" && (project.category === "Academic Projects" || project.projectType === "Academic Project"));

    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.solution.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Featured &amp; Engineering Projects</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            Featured <span className="text-blue-600 dark:text-blue-400">Software Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            A showcase of production-ready AI web applications, multilingual tools, and academic software engineering systems.
          </p>

          {/* Filter Pills & Search Bar */}
          <div className="w-full max-w-3xl pt-6 space-y-4">
            {/* Category Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                      : "bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] text-slate-600 dark:text-slate-300 hover:border-blue-500"
                  }`}
                >
                  {cat === "All" && "All Projects"}
                  {cat === "Web Apps" && "🌐 Web Apps & AI"}
                  {cat === "Academic Projects" && "🎓 Academic Projects"}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects by title, tech stack (Next.js, AI, PHP, MySQL) or keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-10 py-3 rounded-2xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] text-sm text-slate-900 dark:text-slate-50 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const isAcademic = project.category === "Academic Projects" || project.projectType === "Academic Project";

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="group rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-md p-6 sm:p-7 flex flex-col justify-between space-y-6 hover:border-blue-500/50 transition-all"
                >
                  <div className="space-y-4">
                    
                    {/* Project Header Tag & Badge */}
                    <div className="flex items-center justify-between gap-2 pb-3 border-b border-slate-100 dark:border-[#1e293b]">
                      <span
                        className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-xl text-[11px] font-semibold ${
                          isAcademic
                            ? "bg-blue-50 dark:bg-[#0b1120] border border-blue-100 dark:border-[#1e293b] text-blue-600 dark:text-blue-400"
                            : "bg-emerald-50 dark:bg-[#06241b] border border-emerald-200 dark:border-emerald-800/50 text-emerald-700 dark:text-emerald-400"
                        }`}
                      >
                        {isAcademic ? (
                          <>
                            <GraduationCap className="w-3.5 h-3.5" />
                            <span>Academic Project</span>
                          </>
                        ) : (
                          <>
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Live Web App · AI Suite</span>
                          </>
                        )}
                      </span>
                      <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">
                        {project.period}
                      </span>
                    </div>

                    {/* Project Preview Illustration / Banner */}
                    {project.image && (
                      <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 dark:border-[#1e293b]">
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute top-3 right-3 px-2.5 py-1 rounded-lg bg-blue-600/90 hover:bg-blue-600 text-white text-[11px] font-semibold flex items-center gap-1 backdrop-blur-sm shadow-md transition-all"
                          >
                            <Globe className="w-3 h-3" />
                            <span>Live App</span>
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        )}
                      </div>
                    )}

                    {/* Project Title & Short Description */}
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.shortDescription}
                      </p>
                    </div>

                    {/* Problem & Solution Text Brief */}
                    <div className="space-y-2 text-xs">
                      <div className="p-3 rounded-2xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] space-y-1">
                        <span className="font-bold text-slate-500 dark:text-slate-400 block text-[10px] uppercase tracking-wider">
                          Objective &amp; Solution:
                        </span>
                        <p className="text-slate-700 dark:text-slate-300 line-clamp-2">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-1.5">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 block">
                        Technologies Used:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {project.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-lg text-[11px] font-semibold bg-slate-100 dark:bg-[#0b1120] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e293b]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-slate-100 dark:border-[#1e293b] space-y-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-700 text-white transition-colors shadow-sm"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        <span>Open Live App ({project.liveUrl.replace(/^https?:\/\//, '')})</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm"
                    >
                      <span>View Architecture &amp; Journey</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Detail Modal Overlay */}
      <AnimatePresence>
        {activeProjectModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1120]/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveProjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-2xl p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 dark:bg-[#0b1120] text-slate-500 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-[#1e293b]"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="space-y-2 pr-8">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-bold border flex items-center gap-1.5 ${
                      activeProjectModal.category === "Academic Projects" || activeProjectModal.projectType === "Academic Project"
                        ? "bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border-blue-100 dark:border-[#1e293b]"
                        : "bg-emerald-50 dark:bg-[#06241b] text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50"
                    }`}
                  >
                    {activeProjectModal.category === "Academic Projects" || activeProjectModal.projectType === "Academic Project" ? (
                      <>
                        <GraduationCap className="w-3.5 h-3.5" />
                        <span>Academic Project</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>Live Production Web Application</span>
                      </>
                    )}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                    {activeProjectModal.period}
                  </span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50">
                  {activeProjectModal.title}
                </h3>
              </div>

              {/* Live App Link Banner in Modal */}
              {activeProjectModal.liveUrl && (
                <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-600/10 via-indigo-600/10 to-emerald-600/10 border border-blue-500/20 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex items-center gap-3 text-left">
                    <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="font-bold text-sm text-slate-900 dark:text-slate-50">
                        Live Web Application Online
                      </h5>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        Experience the interactive trilingual CV builder &amp; ATS diagnostics live.
                      </p>
                    </div>
                  </div>
                  <a
                    href={activeProjectModal.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-md shadow-blue-500/20 whitespace-nowrap"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              )}

              {/* Project Description */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b]">
                <h4 className="text-xs font-bold uppercase text-slate-400 dark:text-slate-500 tracking-wider mb-1">
                  Project Description
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed">
                  {activeProjectModal.fullDescription}
                </p>
              </div>

              {/* Problem & Solution Breakdown */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-amber-500/5 border border-amber-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-amber-600 dark:text-amber-400 uppercase tracking-wider">
                    <AlertCircle className="w-4 h-4" />
                    <span>Problem Addressed</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeProjectModal.problem}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 space-y-1.5">
                  <div className="flex items-center gap-1.5 font-bold text-xs text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                    <Lightbulb className="w-4 h-4" />
                    <span>System Solution</span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeProjectModal.solution}
                  </p>
                </div>
              </div>

              {/* Development Journey (Phases) */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                <h4 className="flex items-center gap-2 font-heading font-bold text-xs uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  <Layers className="w-4 h-4 text-blue-500" />
                  <span>Development Journey &amp; Architecture Phases</span>
                </h4>

                <div className="space-y-2.5">
                  {activeProjectModal.phases.map((phaseItem, i) => (
                    <div
                      key={i}
                      className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] space-y-1"
                    >
                      <span className="font-bold text-xs text-blue-600 dark:text-blue-400 block">
                        {phaseItem.phase}
                      </span>
                      <p className="text-xs text-slate-600 dark:text-slate-300">
                        {phaseItem.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                <h4 className="font-heading font-bold text-xs uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  Key Features &amp; Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProjectModal.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* My Contribution */}
              <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                <h4 className="flex items-center gap-2 font-heading font-bold text-xs uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  <UserCheck className="w-4 h-4 text-blue-500" />
                  <span>Technical Implementation &amp; Contribution</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeProjectModal.contribution.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies Used */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                <h4 className="font-heading font-bold text-xs uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0b1120] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e293b]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Outcome */}
              <div className="p-4 rounded-2xl bg-slate-100 dark:bg-[#0b1120] border border-slate-200 dark:border-[#1e293b] text-xs space-y-1">
                <span className="font-bold text-slate-900 dark:text-slate-50 uppercase tracking-wider text-[10px] block">
                  Project Outcome
                </span>
                <p className="text-slate-600 dark:text-slate-300">
                  {activeProjectModal.outcome}
                </p>
              </div>

              {/* Footer Note & Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-slate-100 dark:border-[#1e293b] text-xs text-slate-500">
                <div className="inline-flex items-center gap-1.5 font-semibold text-slate-600 dark:text-slate-400">
                  <FileCode2 className="w-4 h-4 text-blue-500" />
                  <span>{activeProjectModal.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  {activeProjectModal.liveUrl && (
                    <a
                      href={activeProjectModal.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                    >
                      <span>Open Live Site</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0b1120] hover:bg-slate-200 dark:hover:bg-[#1e293b] text-slate-800 dark:text-slate-200 font-semibold text-xs transition-colors"
                  >
                    Close Details
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

