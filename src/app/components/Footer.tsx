import { Instagram, Mail, Palette } from "lucide-react";
import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-b from-amber-900 to-amber-950 text-amber-100 py-12 px-4 relative overflow-hidden">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative ornaments */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-700/10 text-4xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontFamily: "serif",
            }}
            animate={{
              opacity: [0.05, 0.15, 0.05],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: i * 0.6,
            }}
          >
            ❋
          </motion.div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl mb-2 text-amber-100 font-serif" style={{ fontVariant: 'small-caps' }}>
              Jayvert Corpuz
            </h3>
            <div className="flex items-center gap-2 justify-center md:justify-start mb-1">
              <div className="h-px w-8 bg-amber-700" />
              <p className="text-amber-300 font-serif italic text-sm">Digital Artist & Designer</p>
              <div className="h-px w-8 bg-amber-700" />
            </div>
            <p className="text-amber-400 text-xs font-serif">Creating meaningful visual experiences</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            {[
              { Icon: Instagram, href: "https://instagram.com/vescair" },
              { Icon: Palette, href: "#gallery" },
              { Icon: Mail, href: "mailto:admin.cairen@proton.me" },
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full bg-amber-100/10 backdrop-blur-sm border-2 border-amber-700/30 flex items-center justify-center hover:bg-amber-100/20 transition-colors"
                whileHover={{ 
                  scale: 1.15, 
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 4px 12px rgba(251, 191, 36, 0.3)" 
                }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon className="size-5 text-amber-200" />
              </motion.a>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-8 pt-8 border-t-2 border-amber-800/30 text-center"
        >
          <div className="flex justify-center mb-3">
            <div className="w-16 h-px bg-amber-700/40" />
            <div className="mx-3 text-amber-600">❦</div>
            <div className="w-16 h-px bg-amber-700/40" />
          </div>
          <p className="flex items-center justify-center gap-2 text-amber-300/80 text-sm font-serif">
            Crafted with care © {new Date().getFullYear()} · All artwork protected
          </p>
        </motion.div>
      </div>
    </footer>
  );
}