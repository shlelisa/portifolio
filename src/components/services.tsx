"use client";

import { motion } from "framer-motion";
import {
  Layout,
  Code,
  Server,
  Database,
  ShieldCheck,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { servicesData } from "@/data/portfolio-data";

interface ServicesProps {
  onSelectServiceSubject: (subjectTag: string) => void;
}

const serviceIconMap: Record<string, React.ReactNode> = {
  Layout: <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Code: <Code className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Server: <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Database: <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  ShieldCheck: <ShieldCheck className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-600 dark:text-blue-400" />
};

export function Services({ onSelectServiceSubject }: ServicesProps) {
  const handleEnquire = (subjectTag: string) => {
    onSelectServiceSubject(subjectTag);
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-[#111827] border border-blue-200/80 dark:border-[#1e293b] text-blue-600 dark:text-blue-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Capabilities</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-slate-900 dark:text-slate-50">
            What I Can <span className="text-blue-600 dark:text-blue-400">Do For You</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl">
            Software engineering services spanning full-stack web applications, REST APIs, databases, and IT systems.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white dark:bg-[#111827] border border-slate-200 dark:border-[#1e293b] shadow-lg flex flex-col justify-between space-y-6 card-hover"
            >
              <div className="space-y-4">
                {/* Service Icon */}
                <div className="w-11 h-11 rounded-2xl bg-blue-50 dark:bg-[#0b1120] border border-blue-100 dark:border-[#1e293b] flex items-center justify-center">
                  {serviceIconMap[service.iconName] || <Layout className="w-5 h-5 text-blue-600 dark:text-blue-400" />}
                </div>

                {/* Service Title */}
                <h3 className="font-heading font-bold text-xl text-slate-900 dark:text-slate-50">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2 pt-2 border-t border-slate-100 dark:border-[#1e293b]">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                    Key Deliverables:
                  </span>
                  <ul className="space-y-1.5">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleEnquire(service.subjectTag)}
                className="w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-xs font-semibold bg-slate-100 dark:bg-[#0b1120] border border-slate-200 dark:border-[#1e293b] text-slate-800 dark:text-slate-200 hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 dark:hover:text-white transition-all group"
              >
                <span>Request Service</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
