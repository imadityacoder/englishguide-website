"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions() {
  return (
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
  );
}
