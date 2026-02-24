import { HomeCtaSection } from "./HomeCtaSection";
import { HomeHeroSection } from "./HomeHeroSection";
import { HomeQuickLinksSection } from "./HomeQuickLinksSection";
import { HomeSegmentsSection } from "./HomeSegmentsSection";
import { HomeStructureProjectsSection } from "./HomeStructureProjectsSection";
import { HomeValueSection } from "./HomeValueSection";

export function HomeContent() {
  return (
    <>
      <HomeHeroSection />
      <HomeValueSection />
      <HomeQuickLinksSection />
      <HomeSegmentsSection />
      <HomeStructureProjectsSection />
      <HomeCtaSection />
    </>
  );
}

