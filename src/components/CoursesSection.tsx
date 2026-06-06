"use client";

import { motion } from "framer-motion";
import { MessageSquare, UserCheck, Briefcase, FileText, Check, ArrowUpRight } from "lucide-react";

const courses = [
  {
    icon: MessageSquare,
    title: "Spoken English",
    subtitle: "Fluency & Conversation",
    features: [
      "Beginner to Advanced Levels",
      "Interactive Conversation Practice",
      "Confidence Building Exercises",
      "Public Speaking Training",
    ],
    accent: "border-l-4 border-l-accent",
  },
  {
    icon: UserCheck,
    title: "Personality Development",
    subtitle: "Demeanor & Communication",
    features: [
      "Effective Communication Skills",
      "Body Language & Gestures",
      "Public Speaking & Presentation",
      "Social Etiquette Training",
    ],
    accent: "border-l-4 border-l-primary",
  },
  {
    icon: Briefcase,
    title: "Interview Preparation",
    subtitle: "Career & HR Readiness",
    features: [
      "HR Interview Drills & Mock QA",
      "Live Mock Sessions & Feedback",
      "Professional Workplace Comm",
      "Resume & Bio Building Tips",
    ],
    accent: "border-l-4 border-l-accent",
  },
  {
    icon: FileText,
    title: "English Grammar",
    subtitle: "Accuracy & Structure",
    features: [
      "Comprehensive Tense System",
      "Vocabulary Augmentation",
      "Sentence Formation Drills",
      "Common Error Correction",
    ],
    accent: "border-l-4 border-l-primary",
  },
];

export default function CoursesSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  const handleEnquire = (courseTitle: string) => {
    const selectElem = document.getElementById("course-select") as HTMLSelectElement | null;
    if (selectElem) {
      selectElem.value = courseTitle;
      selectElem.dispatchEvent(new Event("change", { bubbles: true }));
    }
    
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="courses" className="py-24 bg-[#F8F8F8] relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#7b1e2b03_1px,transparent_1px),linear-gradient(to_bottom,#7b1e2b03_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold text-accent uppercase tracking-widest"
          >
            Our Programs
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Explore Professional Courses
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {courses.map((course, idx) => {
            const Icon = course.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  boxShadow: "0 20px 40px rgba(123,30,43,0.06), 0 0 0 2px #D4A017",
                }}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-black/5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden group ${course.accent}`}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-full translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500 pointer-events-none" />

                <div>
                  <div className="p-3 bg-primary/5 rounded-xl text-primary w-fit mb-5 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-extrabold text-primary group-hover:text-accent transition-colors duration-300">
                    {course.title}
                  </h3>
                  <p className="text-xs font-semibold text-brand-text/50 uppercase tracking-wider mt-1">
                    {course.subtitle}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {course.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-sm text-brand-text/85">
                        <Check className="w-4 h-4 text-accent shrink-0 mt-0.5 mr-2" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-black/5">
                  <button
                    onClick={() => handleEnquire(course.title)}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-primary/5 hover:bg-primary text-primary hover:text-white font-bold text-sm rounded-xl transition-all duration-300 min-h-[48px] cursor-pointer"
                  >
                    Enquire Now
                    <ArrowUpRight className="w-4 h-4 ml-1.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
