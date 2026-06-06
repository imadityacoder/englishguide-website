"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Phone, ArrowRight, MessageSquare, GraduationCap, Award } from "lucide-react";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/hero_background.jpg"
        alt="English Guide Institute Campus"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        quality={90}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a0e]/90 via-[#5A141D]/80 to-[#7B1E2B]/60" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            className="text-white space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Trust Badges */}
            <motion.div
              variants={itemVariants}
              className="inline-flex flex-wrap items-center gap-2 bg-white/10 backdrop-blur-md px-3 py-2 rounded-full border border-white/10 text-xs sm:text-sm"
            >
              <span className="flex items-center text-accent font-bold gap-1">
                <Star className="w-4 h-4 fill-accent stroke-accent" />
                4.8+ Rating
              </span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <span className="font-medium">557+ Reviews</span>
              <span className="w-1.5 h-1.5 bg-white/40 rounded-full" />
              <span className="text-accent font-medium">Daily Classes</span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight"
              >
                Speak English with <span className="text-accent">Confidence.</span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl text-white/90 font-light leading-relaxed max-w-2xl"
              >
                Join Patna&apos;s trusted spoken English coaching institute and improve communication skills, confidence, grammar, personality development, and interview performance.
              </motion.p>
            </div>

            {/* Call To Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-2"
            >
              <a
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-white text-primary hover:text-primary font-bold text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] group"
              >
                Book Free Demo Class
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="tel:+917903229506"
                className="inline-flex items-center justify-center px-8 py-4 bg-transparent hover:bg-white/10 text-white font-bold text-base rounded-full border-2 border-white/80 hover:border-white transition-all duration-300 min-h-[48px]"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </motion.div>

            {/* Features Tags */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 border-t border-white/10 pt-6 max-w-lg"
            >
              <div className="flex items-center space-x-2 text-white/85">
                <GraduationCap className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Expert Trainers</span>
              </div>
              <div className="flex items-center space-x-2 text-white/85">
                <MessageSquare className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Daily Practice</span>
              </div>
              <div className="flex items-center space-x-2 text-white/85">
                <Award className="w-5 h-5 text-accent shrink-0" />
                <span className="text-xs sm:text-sm font-medium">Assured Growth</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
