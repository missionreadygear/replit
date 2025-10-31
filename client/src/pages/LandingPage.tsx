import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import CategoriesSection from "@/components/CategoriesSection";
import SocialSection from "@/components/SocialSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SkipToContent from "@/components/SkipToContent";
import ThemeToggle from "@/components/ThemeToggle";

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <SkipToContent />
      
      <header className="fixed top-0 right-0 z-40 p-4">
        <ThemeToggle />
      </header>
      
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <AboutSection />
        <CategoriesSection />
        <SocialSection />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
}
