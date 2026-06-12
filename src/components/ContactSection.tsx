"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Clock, Send, CheckCircle } from "lucide-react";
import { trackEvent } from "@/lib/analytics";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    course: "Spoken English",
    message: "",
  });

  const [website, setWebsite] = useState(""); // Honeypot field to trap bots
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      tempErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      tempErrors.name = "Name must be at least 2 characters";
    }

    const phoneRegex = /^[6-9]\d{9}$/;
    if (!formData.phone.trim()) {
      tempErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-+]/g, ""))) {
      tempErrors.phone = "Please enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
          website: website, // Send honeypot field
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setIsSubmitted(true);
        // Track Conversion Event
        trackEvent("form_submission_success", {
          event_category: "Lead Generation",
          event_label: formData.course,
        });

        setFormData({
          name: "",
          phone: "",
          course: "Spoken English",
          message: "",
        });
        setWebsite("");
      } else {
        setErrors((prev) => ({
          ...prev,
          submit: data.message || "Something went wrong. Please try again.",
        }));
        trackEvent("form_submission_failed", {
          event_category: "Lead Generation",
          error_message: data.message || "Unknown error",
        });
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        submit: "Failed to submit. Please check your network connection and try again.",
      }));
      trackEvent("form_submission_error", {
        event_category: "Lead Generation",
        error_message: "Network exception",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-bg-brand relative scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-base font-extrabold text-accent uppercase tracking-widest"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-3xl sm:text-4xl font-extrabold text-primary tracking-tight"
          >
            Start Your Journey Today
          </motion.p>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "80px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="h-1.5 bg-accent mx-auto mt-4 rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Side: Contact Information & Map */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-primary/5 space-y-6">
              <h3 className="text-xl font-bold text-primary">Contact Details</h3>
              <div className="space-y-6">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 bg-primary/5 rounded-xl text-primary h-fit">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text/50 uppercase tracking-wider">Location</h4>
                    <p className="text-base font-medium text-brand-text mt-1 leading-relaxed">
                      The Campus of Blue Star Collection, <br />
                      6 Ashok Rajpath Road, Opposite Ammu Exide Battery Shop, <br />
                      Sultanganj, Tripolia, Patna, Bihar 800006
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 bg-primary/5 rounded-xl text-primary h-fit">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text/50 uppercase tracking-wider">Call Us</h4>
                    <a
                      href="tel:+917903229506"
                      className="text-lg font-bold text-primary hover:text-accent transition-colors duration-200 mt-1 block"
                    >
                      +91 79032 29506
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex gap-4">
                  <div className="shrink-0 p-3 bg-primary/5 rounded-xl text-primary h-fit">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-brand-text/50 uppercase tracking-wider">Office Hours</h4>
                    <p className="text-base font-medium text-brand-text mt-1">
                      7:00 AM - 8:30 PM Daily
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Frame */}
            <div className="rounded-3xl overflow-hidden shadow-md border-2 border-white relative aspect-[4/3] bg-primary/5">
              <iframe
                title="English Guide Location Map Patna"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.553974533038!2d85.18236667554904!3d25.6152536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58cc60553197%3A0x7fc14359ba1fb6f3!2sEnglish%20Guide%20%7C%20Best%20English%20Coaching%20In%20Patna%20%7C%20Best%20Spoken%20English%20Classes%20In%20Patna%20%7C%20Top%20Rated%20English%20Coaching!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right Side: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-primary/5">
            <h3 className="text-2xl font-extrabold text-primary mb-6">Quick Admission Inquiry</h3>
            
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-12 flex flex-col items-center text-center space-y-4"
                >
                  <CheckCircle className="w-16 h-16 text-accent" />
                  <h4 className="text-2xl font-bold text-primary">Inquiry Submitted!</h4>
                  <p className="text-sm text-brand-text/75 max-w-sm">
                    Thank you for your interest. A counselor from English Guide will contact you shortly on your provided number.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="inline-flex items-center px-6 py-2.5 bg-primary text-white font-bold text-sm rounded-xl transition-all duration-300 min-h-[48px] cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field to trap bots */}
                  <div className="hidden" aria-hidden="true">
                    <input
                      type="text"
                      name="website"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="block text-sm font-bold text-brand-text/80">
                      Your Full Name <span className="text-primary">*</span>
                    </label>
                    <input
                      id="name-input"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3.5 bg-[#F8F8F8] border rounded-xl font-medium text-brand-text focus:bg-white focus:ring-2 transition-all duration-200 ${
                        errors.name ? "border-primary focus:ring-primary/20" : "border-black/10 focus:ring-accent/20"
                      }`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-xs font-semibold text-primary">
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-2">
                    <label htmlFor="phone-input" className="block text-sm font-bold text-brand-text/80">
                      Phone Number <span className="text-primary">*</span>
                    </label>
                    <input
                      id="phone-input"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 7903229506"
                      className={`w-full px-4 py-3.5 bg-[#F8F8F8] border rounded-xl font-medium text-brand-text focus:bg-white focus:ring-2 transition-all duration-200 ${
                        errors.phone ? "border-primary focus:ring-primary/20" : "border-black/10 focus:ring-accent/20"
                      }`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-xs font-semibold text-primary">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  {/* Course Interested dropdown */}
                  <div className="space-y-2">
                    <label htmlFor="course-select" className="block text-sm font-bold text-brand-text/80">
                      Select Course Interested In <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="course-select"
                        name="course"
                        value={formData.course}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 bg-[#F8F8F8] border border-black/10 rounded-xl font-medium text-brand-text focus:bg-white focus:ring-2 focus:ring-accent/20 transition-all duration-200 appearance-none cursor-pointer"
                      >
                        <option value="Spoken English">Spoken English</option>
                        <option value="Personality Development">Personality Development</option>
                        <option value="Interview Preparation">Interview Preparation</option>
                        <option value="English Grammar">English Grammar</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-brand-text/60">
                        ▼
                      </div>
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message-input" className="block text-sm font-bold text-brand-text/80">
                      Write Your Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message-input"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your questions or batch preferences..."
                      className={`w-full px-4 py-3.5 bg-[#F8F8F8] border rounded-xl font-medium text-brand-text focus:bg-white focus:ring-2 transition-all duration-200 resize-y ${
                        errors.message ? "border-primary focus:ring-primary/20" : "border-black/10 focus:ring-accent/20"
                      }`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? "message-error" : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="text-xs font-semibold text-primary">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <p className="text-sm font-semibold text-primary text-center">
                      {errors.submit}
                    </p>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center px-6 py-4 bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white font-bold text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 min-h-[48px] cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="w-6 h-6 border-3 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <>
                        Submit Inquiry
                        <Send className="w-5 h-5 ml-2" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
