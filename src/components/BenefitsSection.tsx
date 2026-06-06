"use client";

import { motion } from "framer-motion";
import { MessageSquare, Sparkles, BookMarked, PenTool, Mic, Briefcase } from "lucide-react";

const benefits = [
  {
    icon: MessageSquare,
    title: "Fluent Communication",
    description: "Express your thoughts clearly and seamlessly in any social or professional setting.",
  },
  {
    icon: BookMarked,
    title: "Vocabulary Improvement",
    description: "Expand your lexicon with word-association drills, idioms, and contextual phrases.",
  },
  {
    icon: Sparkles,
    title: "Confidence Building",
    description: "Eliminate public speaking fear through progressive exercises and supportive classrooms.",
  },
  {
    icon: PenTool,
    title: "Grammar Mastery",
    description: "Achieve structural accuracy with active parsing of tenses and syntax corrections.",
  },
  {
    icon: Mic,
    title: "Public Speaking",
    description: "Develop presence, tone variation, and audience control for speeches and debates.",
  },
  {
    icon: Briefcase,
    title: "Interview Readiness",
    description: "Perfect your self-introduction, answer formulation, and non-verbal cues.",
  },
];

export default function BenefitsSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section id="benefits" className="py-24 bg-bg-brand relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold text-accent uppercase tracking-widest"
          >
            Core Benefits
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Transform Your Communication Skills
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  backgroundColor: "#ffffff",
                  borderColor: "rgba(212, 160, 23, 0.4)",
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
                }}
                className="p-8 rounded-2xl border-2 border-primary/5 bg-white/40 backdrop-blur-sm transition-all duration-300 group flex flex-col items-start"
              >
                <div className="p-3 bg-primary/5 rounded-xl text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 mb-6 border border-primary/10">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="text-xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-sm text-brand-text/75 mt-3 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
