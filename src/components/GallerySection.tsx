"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Eye, Sparkles, BookOpen, Users, Trophy, Play } from "lucide-react";

const galleryItems = [
  {
    id: 1,
    category: "Classroom",
    title: "Modern Interactive Classroom",
    description: "Our classrooms are equipped to foster a highly interactive, circular discussion layout to ensure every student participates and communicates openly.",
    icon: BookOpen,
    image: "/gallery_1.jpg",
    type: "image" as const,
  },
  {
    id: 2,
    category: "Training Sessions",
    title: "1-on-1 Practice Sessions",
    description: "Individual spoken drills and feedback discussions. Trainers work directly with you to eliminate grammar mistakes and refine your accent.",
    icon: Users,
    image: "/gallery_2.jpg",
    type: "image" as const,
  },
  {
    id: 3,
    category: "Student Activities",
    title: "Confidence & Group Debates",
    description: "Active group activities including public debates, extempore speeches, and role-plays designed to naturally wash away stage fright.",
    icon: Sparkles,
    image: "/gallery_3.jpg",
    type: "image" as const,
  },
  {
    id: 4,
    category: "Events",
    title: "Seminars & Awards Days",
    description: "Celebrations of student achievements, certificates distribution, and professional seminars conducted by guest communicators.",
    icon: Trophy,
    image: "/gallery_4.jpg",
    type: "image" as const,
  },
  {
    id: 5,
    category: "Performance",
    title: "Student Performance Highlights",
    description: "Watch our students showcase their improved English speaking skills, confidence, and presentation abilities in live performances.",
    icon: Play,
    image: "/performance.mp4",
    type: "video" as const,
  },
];

export default function GallerySection() {
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold text-accent uppercase tracking-widest"
          >
            Campus Life
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Gallery & Training Highlights
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        {/* Grid Layout - 2 large on top, 3 smaller on bottom */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item.id * 0.08 }}
                whileHover={{ y: -8 }}
                onClick={() => setSelectedItem(item)}
                className={`bg-bg-brand border border-primary/5 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group ${
                  item.id <= 2 ? "lg:col-span-1" : ""
                }`}
              >
                {/* Image / Video Frame */}
                <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                  {item.type === "video" ? (
                    <>
                      <video
                        src={item.image}
                        muted
                        playsInline
                        loop
                        autoPlay
                        className="w-full h-full object-cover"
                      />
                      {/* Play icon overlay */}
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-7 h-7 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white scale-75 group-hover:scale-100 transition-transform duration-300">
                      <Eye className="w-6 h-6" />
                    </div>
                  </div>

                  {/* Category Badge */}
                  <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3.5 py-1 text-xs font-bold text-primary rounded-full shadow-sm">
                    {item.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-5">
                  <div className="flex items-center space-x-2 text-accent">
                    <Icon className="w-4 h-4" />
                    <span className="text-xs font-extrabold uppercase tracking-widest">{item.category}</span>
                  </div>
                  <h3 className="text-lg font-bold text-primary mt-2 group-hover:text-accent transition-colors duration-200">
                    {item.title}
                  </h3>
                  <p className="text-xs text-brand-text/75 mt-1.5 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedItem(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-6 right-6 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-200 cursor-pointer min-h-[48px] min-w-[48px] flex items-center justify-center z-10"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", stiffness: 120, damping: 18 }}
              className="bg-white rounded-3xl max-w-3xl w-full overflow-hidden shadow-2xl border border-white/10 text-brand-text"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top Image/Video */}
              <div className="relative w-full aspect-video bg-primary/10">
                {selectedItem.type === "video" ? (
                  <video
                    src={selectedItem.image}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <Image
                    src={selectedItem.image}
                    alt={selectedItem.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 768px"
                  />
                )}
              </div>

              {/* Text info */}
              <div className="p-8">
                <div className="flex items-center space-x-2 text-accent">
                  <selectedItem.icon className="w-5 h-5" />
                  <span className="text-sm font-extrabold uppercase tracking-widest">{selectedItem.category}</span>
                </div>
                <h3 className="text-2xl font-extrabold text-primary mt-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-brand-text/85 mt-4 leading-relaxed">
                  {selectedItem.description}
                </p>
                
                <button
                  onClick={() => {
                    const cat = selectedItem.category;
                    setSelectedItem(null);
                    let courseMapping = "Spoken English";
                    if (cat === "Training Sessions") courseMapping = "English Grammar";
                    if (cat === "Student Activities") courseMapping = "Personality Development";
                    if (cat === "Events") courseMapping = "Interview Preparation";
                    
                    const selectElem = document.getElementById("course-select") as HTMLSelectElement | null;
                    if (selectElem) {
                      selectElem.value = courseMapping;
                      selectElem.dispatchEvent(new Event("change", { bubbles: true }));
                    }
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="mt-6 inline-flex items-center justify-center px-6 py-2.5 bg-accent hover:bg-primary text-primary hover:text-white font-bold text-sm rounded-xl transition-all duration-300 min-h-[48px] cursor-pointer"
                >
                  Learn More About This
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
