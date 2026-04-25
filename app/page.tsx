import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import CasesSection from "@/components/sections/CasesSection";
import BookLaunchSection from "@/components/sections/BookLaunchSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <CasesSection />
      <BookLaunchSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}