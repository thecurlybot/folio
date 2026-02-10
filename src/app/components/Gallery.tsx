import { motion, AnimatePresence } from "motion/react";
import { Badge } from "@/app/components/ui/badge";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
const artworkImage = "https://via.placeholder.com/600x400/d4a574/ffffff?text=Gallery+Artwork";

const artworks = [
  {
    title: "No Name",
    description: "Created to honor the original character of my client in the game Mabinogi.",
    image: artworkImage,
    medium: "Digital Illustration",
    year: "2023",
    category: "artworks",
    tags: ["Digital Illustration", "Character Design", "Original Character"]
  }
];

const categories = [
  { id: "all", label: "All Works" },
  { id: "artworks", label: "Artworks" },
  { id: "mockups", label: "Mockups" },
  { id: "designs", label: "Designs" }
];

export function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredArtworks = selectedCategory === "all" 
    ? artworks 
    : artworks.filter(art => art.category === selectedCategory);

  const openLightbox = (artwork: typeof artworks[0], index: number) => {
    setSelectedArtwork(artwork);
    setCurrentIndex(index);
  };

  const closeLightbox = () => {
    setSelectedArtwork(null);
  };

  const nextArtwork = () => {
    const newIndex = (currentIndex + 1) % filteredArtworks.length;
    setCurrentIndex(newIndex);
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

  const prevArtwork = () => {
    const newIndex = (currentIndex - 1 + filteredArtworks.length) % filteredArtworks.length;
    setCurrentIndex(newIndex);
    setSelectedArtwork(filteredArtworks[newIndex]);
  };

  return (
    <section id="gallery" className="py-20 px-4 bg-[#f4e8d8] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Ink stains decoration */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-32 h-32 rounded-full bg-amber-900/5 blur-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 1,
          }}
        />
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl text-center mb-4 text-amber-950 font-serif" style={{ fontVariant: 'small-caps' }}>
            Gallery
          </h2>
          <div className="flex justify-center mb-8">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">✦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <motion.button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-6 py-2 rounded-sm border-2 font-serif transition-colors ${
                  selectedCategory === cat.id
                    ? "bg-amber-900 text-amber-50 border-amber-950"
                    : "bg-amber-100 text-amber-900 border-amber-800/30 hover:bg-amber-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ boxShadow: '0 2px 8px rgba(120, 80, 40, 0.15)' }}
              >
                {cat.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.length > 0 ? (
            filteredArtworks.map((artwork, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(artwork, index)}
                >
                  {/* Vintage paper card */}
                  <div className="relative bg-[#ebe0d0] p-6 rounded-sm border-4 border-amber-900/20 shadow-lg"
                       style={{ 
                         boxShadow: '0 8px 24px rgba(120, 80, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.5)' 
                       }}>
                    
                    {/* Corner decorations */}
                    <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-800/40" />
                    <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-800/40" />
                    <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-800/40" />
                    <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-800/40" />

                    <div className="relative overflow-hidden rounded-sm mb-4 border-2 border-amber-800/30">
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                      >
                        <img
                          src={artwork.image}
                          alt={artwork.title}
                          className="w-full h-64 object-cover sepia-[0.2] contrast-110"
                        />
                      </motion.div>
                      {/* Vintage overlay on hover */}
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-amber-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4"
                        initial={false}
                      >
                        <span className="text-amber-50 font-serif text-sm">Click to View</span>
                      </motion.div>
                    </div>

                    <div className="text-center">
                      <h3 className="text-xl mb-2 text-amber-950 font-serif italic">
                        {artwork.title}
                      </h3>
                      <p className="text-amber-900/70 text-sm mb-3 font-serif leading-relaxed">
                        {artwork.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 justify-center mb-3">
                        {artwork.tags.map((tag, i) => (
                          <Badge key={i} className="bg-amber-100 text-amber-900 border border-amber-800/30 font-serif text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <div className="text-amber-800/60 text-sm font-serif">
                        {artwork.year}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center py-12"
            >
              <p className="text-amber-900 font-serif text-lg">This category is coming soon — feel free to explore others</p>
            </motion.div>
          )}
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedArtwork && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25 }}
                className="relative max-w-6xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <motion.button
                  onClick={closeLightbox}
                  className="absolute -top-12 right-0 text-white hover:text-amber-300 transition-colors"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="size-8" />
                </motion.button>

                <div className="grid md:grid-cols-2 gap-8 bg-[#ebe0d0] p-8 rounded-sm border-4 border-amber-900/40 shadow-2xl">
                  {/* Image side */}
                  <div className="relative">
                    <div className="relative rounded-sm overflow-hidden border-4 border-amber-800/30">
                      <img
                        src={selectedArtwork.image}
                        alt={selectedArtwork.title}
                        className="w-full h-auto sepia-[0.2] contrast-110"
                      />
                    </div>
                    
                    {/* Navigation arrows */}
                    {filteredArtworks.length > 1 && (
                      <>
                        <motion.button
                          onClick={(e) => { e.stopPropagation(); prevArtwork(); }}
                          className="absolute left-2 top-1/2 -translate-y-1/2 bg-amber-900/80 text-amber-50 p-3 rounded-full hover:bg-amber-800"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronLeft className="size-6" />
                        </motion.button>
                        <motion.button
                          onClick={(e) => { e.stopPropagation(); nextArtwork(); }}
                          className="absolute right-2 top-1/2 -translate-y-1/2 bg-amber-900/80 text-amber-50 p-3 rounded-full hover:bg-amber-800"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ChevronRight className="size-6" />
                        </motion.button>
                      </>
                    )}
                  </div>

                  {/* Info side */}
                  <div className="flex flex-col justify-center">
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-4xl mb-4 text-amber-950 font-serif italic"
                    >
                      {selectedArtwork.title}
                    </motion.h3>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className="space-y-4"
                    >
                      <p className="text-amber-900/80 font-serif leading-relaxed text-lg">
                        {selectedArtwork.description}
                      </p>

                      <div className="border-t-2 border-amber-800/20 pt-4">
                        <div className="grid grid-cols-2 gap-4 mb-4">
                          <div>
                            <p className="text-amber-800/60 text-sm font-serif mb-1">Medium</p>
                            <p className="text-amber-950 font-serif">{selectedArtwork.medium}</p>
                          </div>
                          <div>
                            <p className="text-amber-800/60 text-sm font-serif mb-1">Year</p>
                            <p className="text-amber-950 font-serif">{selectedArtwork.year}</p>
                          </div>
                        </div>

                        <div>
                          <p className="text-amber-800/60 text-sm font-serif mb-2">Tags</p>
                          <div className="flex flex-wrap gap-2">
                            {selectedArtwork.tags.map((tag, i) => (
                              <Badge key={i} className="bg-amber-100 text-amber-900 border border-amber-800/30 font-serif">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="pt-4 text-center"
                      >
                        <div className="text-amber-700 text-2xl">❦</div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* View more section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-block">
            <div className="text-amber-800 text-3xl mb-4">❦</div>
            <p className="text-amber-900 font-serif italic">More artworks available upon request</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
