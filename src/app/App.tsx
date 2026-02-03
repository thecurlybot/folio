import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/app/pages/HomePage";
import { GalleryPage } from "@/app/pages/GalleryPage";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Set favicon with vintage paper aesthetic
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23d4a574' width='100' height='100'/><path fill='%238b6914' d='M20 30 Q50 20 80 30 L80 70 Q50 80 20 70 Z'/><circle cx='50' cy='50' r='15' fill='%23fef3c7'/></svg>`;
    } else {
      const link = document.createElement("link");
      link.rel = "icon";
      link.href = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect fill='%23d4a574' width='100' height='100'/><path fill='%238b6914' d='M20 30 Q50 20 80 30 L80 70 Q50 80 20 70 Z'/><circle cx='50' cy='50' r='15' fill='%23fef3c7'/></svg>`;
      document.head.appendChild(link);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gallery" element={<GalleryPage />} />
      </Routes>
    </BrowserRouter>
  );
}
