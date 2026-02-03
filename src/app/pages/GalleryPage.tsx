import { Navigation } from "@/app/components/Navigation";
import { Gallery } from "@/app/components/Gallery";
import { Footer } from "@/app/components/Footer";

export function GalleryPage() {
  return (
    <div className="min-h-screen bg-[#f4e8d8]">
      <Navigation />
      <main>
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
