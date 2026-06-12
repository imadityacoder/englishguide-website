"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Courses", href: "#courses" },
  { name: "Benefits", href: "#benefits" },
  { name: "Reviews", href: "#reviews" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
        : "bg-transparent py-5"
        }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between"
        aria-label="Main Navigation"
      >
        {/* Logo */}
        <Link
          href="#home"
          className="flex items-center space-x-2 bg-white/85 backdrop-blur-md rounded-[32px] p-2 shadow-sm transition-all duration-300 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <Image
            src="/logo.png"
            alt="English Guide Logo"
            width={40}
            height={40}
            className="w-10 h-10 object-contain group-hover:scale-105 transition-transform duration-200"
          />
          <div className="flex items-center px-1">
            <span className="font-extrabold text-2xl tracking-wider text-accent group-hover:text-blue-700 transition-colors duration-200">
              ENGLISH
            </span>
            <span className="font-extrabold text-2xl tracking-wider text-blue-700 group-hover:text-accent transition-colors duration-200 ml-1">
              GUIDE
            </span>
          </div>
        </Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white/95 hover:text-accent font-medium transition-colors duration-200 text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="tel:+917903229506"
            onClick={() => trackEvent("call_now_click", { event_category: "CTA", event_label: "Header Desktop" })}
            className="inline-flex items-center justify-center px-6 py-2.5 bg-accent hover:bg-white text-primary hover:text-primary font-bold text-sm rounded-full shadow-md hover:shadow-xl transition-all duration-300 min-h-[48px]"
          >
            <Phone className="w-4 h-4 mr-2" />
            Call Now
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            type="button"
            className="text-white hover:text-accent focus:outline-none p-2"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/95 hover:text-accent font-medium text-lg py-2.5 border-b border-white/5"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4">
                <a
                  href="tel:+917903229506"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    trackEvent("call_now_click", { event_category: "CTA", event_label: "Header Mobile" });
                  }}
                  className="w-full inline-flex items-center justify-center px-6 py-3 bg-accent text-primary font-bold text-base rounded-full shadow-md min-h-[48px]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
