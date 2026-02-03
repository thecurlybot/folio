import { Navigation } from "@/app/components/Navigation";
import { Hero } from "@/app/components/Hero";
import { About } from "@/app/components/About";
import { Services } from "@/app/components/Services";
import { Skills } from "@/app/components/Skills";
import { Projects } from "@/app/components/Projects";
import { Contact } from "@/app/components/Contact";
import { Footer } from "@/app/components/Footer";

export function HomePage() {
  return (
    <div className="min-h-screen bg-[#f4e8d8]">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
