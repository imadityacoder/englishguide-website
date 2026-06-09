"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function FloatingActions() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const homeEl = document.getElementById("home");
    const contactEl = document.getElementById("contact");

    if (!homeEl || !contactEl) {
      const handleScroll = () => {
        const scrolled = window.scrollY;
        setIsVisible(scrolled > 500 && scrolled < document.documentElement.scrollHeight - 1200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }

    let isHomeIntersecting = true;
    let isContactIntersecting = false;

    const updateVisibility = () => {
      setIsVisible(!isHomeIntersecting && !isContactIntersecting);
    };

    const homeObserver = new IntersectionObserver(
      ([entry]) => {
        isHomeIntersecting = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0.1 }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        isContactIntersecting = entry.isIntersecting;
        updateVisibility();
      },
      { threshold: 0.1 }
    );

    homeObserver.observe(homeEl);
    contactObserver.observe(contactEl);

    updateVisibility();

    return () => {
      homeObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <>
      {/* Book Class Floating Button (Left Side) */}
      <AnimatePresence>
        {isVisible && (
          <motion.a
            href="#contact"
            initial={{ opacity: 0, scale: 0.8, x: -20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: -20 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="fixed bottom-6 left-6 z-40 inline-flex items-center gap-2.5 px-5 py-3.5 bg-primary hover:bg-primary/95 text-white font-extrabold text-sm sm:text-base rounded-full shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] cursor-pointer border border-white/10"
            aria-label="Book a free class"
          >
            <Calendar className="w-5 h-5" />
            <span>Book Free Class</span>
          </motion.a>
        )}
      </AnimatePresence>

      {/* Social Contact Buttons (Right Side) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <motion.a
          href="https://wa.me/917903229506?text=Hi%2C%20I%20am%20interested%20in%20spoken%20English%20classes%20at%20English%20Guide."
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[48px] group cursor-pointer"
          aria-label="Contact us on WhatsApp"
        >
          <MessageCircle className="w-7 h-7 fill-current text-white group-hover:scale-115 transition-transform duration-300" />
        </motion.a>

        {/* Direct Call Button */}
        <motion.a
          href="tel:+917903229506"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-accent hover:bg-[#c29112] text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl transition-all duration-300 min-h-[48px] group cursor-pointer"
          aria-label="Call English Guide"
        >
          <Phone className="w-6 h-6 fill-white stroke-none group-hover:rotate-12 transition-transform duration-300" />
        </motion.a>
      </div>
    </>
  );
}
