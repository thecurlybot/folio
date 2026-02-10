import { motion } from "motion/react";
import { ArrowRight, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";
const artworkImage = "https://via.placeholder.com/400x400/d4a574/ffffff?text=Artwork";

const selectedWorks = [
  {
    title: "No Name",
    category: "Character Design",
    image: artworkImage,
    year: "2023"
  },
  {
    title: "Administrative Excellence",
    category: "Professional Services",
    image: null, // Placeholder for administrative work
    year: "2024"
  },
  {
    title: "Creative Solutions",
    category: "Design & Branding",
    image: null, // Placeholder
    year: "2024"
  }
];

export function SelectedWorks() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-4 bg-[#f4e8d8] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-15 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative flourishes */}
      <div className="absolute top-10 left-10 text-6xl text-amber-800/10 font-serif">❦</div>
      <div className="absolute bottom-10 right-10 text-6xl text-amber-800/10 font-serif">❦</div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 200 }}
            className="inline-block mb-4"
          >
            <Sparkles className="size-8 text-amber-800 mx-auto" />
          </motion.div>
          
          <h2 className="text-5xl text-amber-950 font-serif mb-4" style={{ fontVariant: 'small-caps' }}>
            Selected Works
          </h2>
          
          <div className="flex justify-center mb-4">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">✦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
          
          <p className="text-amber-900/80 font-serif italic max-w-2xl mx-auto">
            A glimpse into recent projects combining administrative precision with creative vision
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {selectedWorks.map((work, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <motion.div
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group cursor-pointer"
                onClick={() => navigate("/gallery")}
              >
                {/* Vintage frame card */}
                <div className="relative bg-[#ebe0d0] p-4 border-4 border-amber-900/30 shadow-lg"
                     style={{ 
                       boxShadow: '0 10px 30px rgba(120, 80, 40, 0.25), inset 0 2px 6px rgba(255,255,255,0.5)' 
                     }}>
                  
                  {/* Corner ornaments */}
                  <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-800/40" />
                  <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-800/40" />
                  <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-800/40" />
                  <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-800/40" />

                  {/* Image or placeholder */}
                  <div className="relative overflow-hidden mb-4 border-2 border-amber-800/30 aspect-square">
                    {work.image ? (
                      <motion.img
                        src={work.image}
                        alt={work.title}
                        className="w-full h-full object-cover sepia-[0.2] contrast-110"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-6xl text-amber-800/30 mb-2">✦</div>
                          <div className="text-amber-900/60 font-serif text-sm">{work.category}</div>
                        </div>
                      </div>
                    )}
                    
                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-amber-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6"
                      initial={false}
                    >
                      <span className="text-amber-50 font-serif text-sm flex items-center gap-2">
                        View in Gallery <ArrowRight className="size-4" />
                      </span>
                    </motion.div>
                  </div>

                  {/* Info */}
                  <div className="text-center">
                    <h3 className="text-xl text-amber-950 font-serif mb-1">
                      {work.title}
                    </h3>
                    <p className="text-amber-800/70 text-sm font-serif italic mb-2">
                      {work.category}
                    </p>
                    <div className="text-amber-900/60 text-xs font-serif">
                      {work.year}
                    </div>
                  </div>

                  {/* Vintage stamp effect */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-full border-2 border-amber-800/30 opacity-0 group-hover:opacity-100 transition-opacity"
                       style={{ 
                         transform: 'rotate(15deg)',
                         boxShadow: 'inset 0 0 10px rgba(120, 80, 40, 0.3)' 
                       }}>
                    <div className="w-full h-full flex items-center justify-center text-amber-800/60 text-xs font-serif">
                      ✓
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* View full gallery link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="text-center"
        >
          <motion.button
            onClick={() => navigate("/gallery")}
            className="group inline-flex items-center gap-2 px-8 py-3 bg-amber-900 text-amber-50 border-2 border-amber-950 font-serif shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            style={{ boxShadow: '0 6px 20px rgba(120, 80, 40, 0.3)' }}
          >
            View Full Gallery
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="size-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
