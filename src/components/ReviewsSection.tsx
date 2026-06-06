"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const reviews = [
  {
    author: "Student Review 1",
    rating: 5,
    text: "English Guide is by far the best coaching institute in Patna for spoken English and communication skills. The trainers are incredibly supportive and focus heavily on practical speaking sessions rather than just writing in class. I joined a month ago and have already noticed a massive improvement in my confidence and grammar.",
  },
  {
    author: "Student Review 2",
    rating: 5,
    text: "If you want to clear your English grammar doubts and improve your interview presentation skills, this is the place to be. The mock interviews and personality development classes helped me crack my campus interview. The timing slots are very flexible, making it easy to balance my college schedule.",
  },
  {
    author: "Student Review 3",
    rating: 5,
    text: "A truly professional and affordable environment for learning. The daily speaking practice sessions are highly interactive, encouraging every student to participate and speak on stage. I highly recommend English Guide to anyone looking to improve their public speaking and communication skills in Patna.",
  },
];

export default function ReviewsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" className="py-24 bg-[#F8F8F8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold text-accent uppercase tracking-widest"
          >
            Testimonials
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            What Our Students Say
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Carousel Frame */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative min-h-[320px] sm:min-h-[260px] bg-white border border-primary/5 shadow-xl rounded-3xl p-8 sm:p-12 overflow-hidden">
            {/* Background Quotes */}
            <Quote className="absolute top-8 left-8 w-20 h-20 text-accent/5 pointer-events-none" />
            <Quote className="absolute bottom-8 right-8 w-20 h-20 text-accent/5 rotate-180 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col items-center text-center justify-between h-full"
              >
                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  {[...Array(reviews[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent stroke-accent" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-base sm:text-lg text-brand-text/90 italic font-medium leading-relaxed max-w-2xl">
                  "{reviews[activeIndex].text}"
                </blockquote>

                {/* Author Info */}
                <cite className="block not-italic text-primary font-bold text-lg mt-6">
                  {reviews[activeIndex].author}
                  <span className="block text-xs font-semibold text-brand-text/50 uppercase tracking-widest mt-1">
                    Verified Student
                  </span>
                </cite>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center items-center gap-6 mt-8">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/10 hover:border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-md cursor-pointer min-h-[48px]"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    i === activeIndex ? "bg-accent scale-125" : "bg-primary/20 hover:bg-primary/40"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-primary/10 hover:border-primary text-primary bg-white hover:bg-primary hover:text-white transition-all duration-300 shadow-md cursor-pointer min-h-[48px]"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
