import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { SkillsSection } from "@/components/sections/skills";
import { ProjectsSection } from "@/components/sections/projects";
import { ExperienceSection } from "@/components/sections/experience";
import { AchievementsSection } from "@/components/sections/achievements";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark-primary text-text-primary">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <AchievementsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-dark-accent">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-text-secondary">
            © 2025 Sumedha Chukka. Designed and developed with ❤️ using modern web technologies.
          </p>
        </div>
      </footer>
    </div>
  );
}
