"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-950/80 text-indigo-700 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Skills & Technologies</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-white">
            My Technical <span className="gradient-text">Toolkit</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            A breakdown of my core software development skills, database systems, and modern IT tooling.
          </p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-indigo-600 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              All Skills
            </button>
            <button
              onClick={() => setActiveTab("frontend")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "frontend"
                  ? "bg-indigo-600 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Frontend
            </button>
            <button
              onClick={() => setActiveTab("backend")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "backend"
                  ? "bg-indigo-600 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Backend
            </button>
            <button
              onClick={() => setActiveTab("databases")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "databases"
                  ? "bg-indigo-600 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setActiveTab("programming")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "programming"
                  ? "bg-indigo-600 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Programming
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
                activeTab === "tools"
                  ? "bg-indigo-600 text-white dark:bg-cyan-400 dark:text-slate-950 shadow-md"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <AnimatePresence mode="popLayout">
            {categoriesToDisplay.map((category) => (
              <motion.div
                key={category.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl flex flex-col space-y-6"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 pb-4 border-b border-slate-100 dark:border-slate-800">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900/60 flex items-center justify-center">
                    {category.id === "frontend" && <Code className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />}
                    {category.id === "backend" && <Server className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />}
                    {category.id === "databases" && <Database className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />}
                    {category.id === "programming" && <Code className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />}
                    {category.id === "tools" && <Wrench className="w-6 h-6 text-indigo-600 dark:text-cyan-400" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {category.description}
                    </p>
                  </div>
                </div>

                {/* Skills Progress List */}
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs font-semibold">
                        <span className="text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 dark:text-cyan-400" />
                          {skill.name}
                        </span>
                        <div className="flex items-center gap-2">
                          {skill.badge && (
                            <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-indigo-50 dark:bg-indigo-950 text-indigo-700 dark:text-cyan-300">
                              {skill.badge}
                            </span>
                          )}
                          <span className="text-slate-400 dark:text-slate-500">{skill.level}%</span>
                        </div>
                      </div>

                      {/* Progress Bar Container */}
                      <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                          className="h-full rounded-full bg-gradient-to-r from-indigo-600 to-cyan-400 dark:from-indigo-500 dark:to-cyan-400"
                        />
                      </div>
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
