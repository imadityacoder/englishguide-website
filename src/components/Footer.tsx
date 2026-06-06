import Link from "next/link";
import { Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Institute Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-extrabold text-accent tracking-wider">
              ENGLISH GUIDE
            </h3>
            <p className="text-sm text-white/80 leading-relaxed font-light">
              Speak English with Confidence. Join Patna's most trusted spoken English coaching institute to refine grammar, public speaking, and interviews.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="#home" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white/80 hover:text-accent transition-colors duration-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#courses" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Courses
                </Link>
              </li>
              <li>
                <Link href="#benefits" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Benefits
                </Link>
              </li>
              <li>
                <Link href="#reviews" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white/80 hover:text-accent transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
              Contact Info
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex gap-2.5 items-start">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span className="text-white/80 leading-relaxed">
                  Blue Star Collection Campus, 6 Ashok Rajpath Road, Opposite Ammu Exide Battery Shop, Tripolia, Patna 800006
                </span>
              </li>
              <li className="flex gap-2.5 items-center">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a
                  href="tel:+917903229506"
                  className="text-white/80 hover:text-accent transition-colors duration-200"
                >
                  +91 79032 29506
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-white border-b border-white/10 pb-2">
              Operating Hours
            </h4>
            <div className="flex gap-2.5 items-start">
              <Clock className="w-5 h-5 text-accent shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-white">Daily Batches</p>
                <p className="text-sm text-white/80 mt-1">7:00 AM - 8:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-xs text-white/60">
          <p>© {currentYear} English Guide. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
