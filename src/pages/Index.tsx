import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProfileSection } from "@/components/ProfileSection";
import { AboutSection } from "@/components/AboutSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProfileSection />
      <AboutSection />
      <AchievementsSection />
      <ProjectsSection />
      <Footer />
    </main>
  );
};

export default Index;
