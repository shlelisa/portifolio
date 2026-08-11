"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ExternalLink,
  Sparkles,
  Search,
  X,
  CheckCircle2,
  ArrowRight,
  Code
} from "lucide-react";
import { projectsData } from "@/data/portfolio-data";
import { Project } from "@/types/portfolio";

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const categories = ["All", "Management Systems", "Web Apps", "Enterprise IT"];

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleImgError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Featured Work</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            Software Systems &amp; <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Software management platforms, web applications, and enterprise IT security tools developed.
          </p>

          {/* Search & Category Filter Bar */}
          <div className="w-full max-w-3xl pt-6 space-y-4">
            {/* Search Input */}
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects by name or tech stack (e.g. Next.js, Node.js, PHP)..."
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

            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                    selectedCategory === cat
                      ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm shadow-blue-500/25"
                      : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="group rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-lg overflow-hidden flex flex-col hover:border-blue-500/50 transition-all card-hover"
              >
                {/* Project Image Frame */}
                <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                  {!imgErrors[project.id] ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      onError={() => handleImgError(project.id)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-slate-950 text-white text-center space-y-2">
                      <div className="p-3 rounded-2xl bg-blue-600/20 border border-blue-500/30">
                        <Code className="w-8 h-8 text-blue-400" />
                      </div>
                      <h4 className="font-heading font-bold text-sm text-blue-300">{project.title}</h4>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest">{project.category}</span>
                    </div>
                  )}

                  {/* Category Tag Overlay */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-xl bg-[#0b1120]/90 backdrop-blur-md border border-[#1e293b] text-[11px] font-semibold text-blue-400 shadow-md">
                    {project.category}
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-50 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                      {project.shortDescription}
                    </p>
                  </div>

                  {/* Key Tech Badges */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-[#0b1120] text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center gap-2 pt-3 border-t border-slate-100 dark:border-[#1e293b]">
                    <button
                      onClick={() => setActiveProjectModal(project)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-semibold bg-blue-50 dark:bg-[#0b1120] text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-[#1e293b] hover:bg-blue-100 dark:hover:bg-[#1e293b] transition-colors"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0b1120] border border-slate-200 dark:border-[#1e293b] text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      title="View GitHub Profile / Source"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>

                </div>
              </motion.div>
            ))}
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#0b1120]/80 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveProjectModal(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
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

              {/* Modal Title & Header */}
              <div className="space-y-2 pr-8">
                <span className="px-3 py-1 rounded-xl bg-blue-50 dark:bg-[#0b1120] text-xs font-bold text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-[#1e293b] uppercase tracking-wider">
                  {activeProjectModal.category}
                </span>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-slate-50">
                  {activeProjectModal.title}
                </h3>
              </div>

              {/* Full Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeProjectModal.fullDescription}
              </p>

              {/* Features List */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-xs uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  Key System Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeProjectModal.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technology Stack */}
              <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                <h4 className="font-heading font-bold text-xs uppercase text-slate-400 dark:text-slate-500 tracking-wider">
                  Technologies &amp; Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-[#0b1120] text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-[#1e293b]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-[#1e293b]">
                <a
                  href={activeProjectModal.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md shadow-blue-600/20"
                >
                  <Github className="w-4 h-4" />
                  <span>View GitHub Profile</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
