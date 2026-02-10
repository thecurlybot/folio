import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { Stats } from "@/app/components/Stats";
import { SelectedWorks } from "@/app/components/SelectedWorks";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Skills } from "@/app/components/Skills";
import { Process } from "@/app/components/Process";
import { Projects } from "@/app/components/Projects";
import { Testimonials } from "@/app/components/Testimonials";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";
import { SectionDivider } from "@/app/components/SectionDivider";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4e8d8]">
      <Navigation />
      <main>
        <Hero />
        <Stats />
        <SectionDivider variant="ornate" />
        <SelectedWorks />
        <SectionDivider variant="simple" />
        <About />
        <SectionDivider variant="default" />
        <Services />
        <SectionDivider variant="simple" />
        <Skills />
        <SectionDivider variant="ornate" />
        <Process />
        <SectionDivider variant="default" />
        <Projects />
        <SectionDivider variant="ornate" />
        <Testimonials />
        <SectionDivider variant="simple" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}