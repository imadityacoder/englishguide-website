import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustSection from "@/components/TrustSection";
import AboutSection from "@/components/AboutSection";
import CoursesSection from "@/components/CoursesSection";
import BenefitsSection from "@/components/BenefitsSection";
import ReviewsSection from "@/components/ReviewsSection";
import GallerySection from "@/components/GallerySection";
import ContactSection from "@/components/ContactSection";
import FloatingActions from "@/components/FloatingActions";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustSection />
        <AboutSection />
        <GallerySection />
        <CoursesSection />
        <BenefitsSection />
        <ReviewsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
