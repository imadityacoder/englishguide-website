"use client";

import { motion } from "framer-motion";
import { Star, MessageSquare, Calendar, Award } from "lucide-react";

const stats = [
  {
    icon: Star,
    value: "4.8 / 5",
    label: "Google Rating",
    description: "Highly rated by students",
    color: "text-accent",
  },
  {
    icon: MessageSquare,
    value: "557+",
    label: "Verified Reviews",
    description: "Patna's trusted spoken English institute",
    color: "text-accent",
  },
  {
    icon: Calendar,
    value: "Daily Classes",
    label: "Flexible Batches",
    description: "Regular sessions for steady growth",
    color: "text-accent",
  },
  {
    icon: Award,
    value: "Professional",
    label: "Training Methodology",
    description: "Personality & career-oriented",
    color: "text-accent",
  },
];

export default function TrustSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12,
      },
    },
  };

  return (
    <section className="relative z-20 px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-16 max-w-7xl mx-auto">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {stats.map((stat, idx) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ y: -6, scale: 1.02 }}
              className="bg-white/85 backdrop-blur-lg border border-white/50 rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(123,30,43,0.08)] transition-shadow duration-300 flex flex-col items-center text-center group"
            >
              <div className="p-3.5 bg-primary/5 rounded-xl group-hover:bg-primary/10 transition-colors duration-300 mb-4">
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <h3 className="text-2xl font-extrabold text-primary tracking-tight">
                {stat.value}
              </h3>
              <p className="text-sm font-semibold text-brand-text/90 mt-1 uppercase tracking-wider">
                {stat.label}
              </p>
              <p className="text-xs text-brand-text/65 mt-1.5">
                {stat.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
