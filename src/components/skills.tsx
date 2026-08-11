"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Terminal,
  CheckCircle2
} from "lucide-react";
import { skillCategories } from "@/data/portfolio-data";

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>("all");

  const categoriesToDisplay = activeTab === "all"
    ? skillCategories
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Technical Background</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            Skills &amp; <span className="text-blue-600 dark:text-blue-400">Technologies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            A practical overview of technologies, database systems, and development tools I work with.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm"
                  : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "frontend"
                  ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm"
                  : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "backend"
                  ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm"
                  : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("databases")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "databases"
                  ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm"
                  : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setActiveTab("programming")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "programming"
                  ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm"
                  : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "tools"
                  ? "bg-blue-600 text-white dark:bg-blue-500 shadow-sm"
                  : "bg-slate-100 dark:bg-[#111827] text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-[#1e293b] hover:bg-slate-200 dark:hover:bg-[#1e293b]"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {categoriesToDisplay.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-md flex flex-col justify-between space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-[#1e293b]">
                  <div className="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-[#0b1120] border border-blue-100 dark:border-[#1e293b] flex items-center justify-center">
                    {category.id === "frontend" && <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    {category.id === "backend" && <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    {category.id === "databases" && <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    {category.id === "programming" && <Terminal className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                    {category.id === "tools" && <Wrench className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-slate-50">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Clean Skill Chips */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="px-3 py-2 rounded-xl bg-slate-50 dark:bg-[#0b1120] border border-slate-200/80 dark:border-[#1e293b] text-xs font-semibold text-slate-800 dark:text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
