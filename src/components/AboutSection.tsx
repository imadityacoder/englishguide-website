"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award, Users, BookOpen, Clock, Heart, Volume2, ShieldCheck } from "lucide-react";

const aboutItems = [
  {
    icon: Users,
    title: "Experienced Trainers",
    desc: "Learn under the guidance of skilled educators dedicated to your linguistic growth.",
  },
  {
    icon: Volume2,
    title: "Practical Spoken English Sessions",
    desc: "Focus on interactive dialogue and real-world conversations rather than static theories.",
  },
  {
    icon: BookOpen,
    title: "Daily Speaking Practice",
    desc: "Gain fluency and overcome hesitation with daily verbal drills and group speaking.",
  },
  {
    icon: Award,
    title: "Personality Development",
    desc: "Improve your body language, presentation, and communication demeanor.",
  },
  {
    icon: ShieldCheck,
    title: "Interview Preparation",
    desc: "Mock HR interviews, group discussions, and feedback for career readiness.",
  },
  {
    icon: Clock,
    title: "Flexible Timings",
    desc: "Select from several daily slots running between 7:00 AM and 8:30 PM.",
  },
  {
    icon: Heart,
    title: "Affordable Learning Environment",
    desc: "Premium resources and training structured to be accessible to all students.",
  },
];

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="about" className="py-24 bg-bg-brand overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold text-accent uppercase tracking-widest"
          >
            Why Choose English Guide?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Dedicated To Your Fluency and Confidence
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Image wrapper */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative order-last lg:order-first"
          >
            <div className="absolute -inset-4 bg-accent/10 rounded-2xl rotate-2 blur-md" />
            <div className="relative border-2 border-accent/30 rounded-2xl overflow-hidden shadow-2xl bg-white p-2">
              <Image
                src="/about.png"
                alt="Interactive Spoken English Class at English Guide Patna"
                loading="eager"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-xl"
                priority={true}
              />
            </div>
            {/* Overlay tag */}
            <div className="absolute -bottom-6 -right-4 bg-primary text-white p-4 rounded-2xl shadow-xl max-w-[200px] border border-accent/20 hidden sm:block">
              <p className="text-2xl font-bold text-accent">7+</p>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/90">
                Core Strengths Crafted For Success
              </p>
            </div>
          </motion.div>

          {/* Right Column: Features List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-7 space-y-6"
          >
            {aboutItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="flex gap-4 p-4 rounded-xl hover:bg-white/50 border border-transparent hover:border-accent/10 transition-all duration-300 group"
                >
                  <div className="shrink-0 p-3 bg-primary/5 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300 h-fit">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-brand-text/80 mt-1 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
