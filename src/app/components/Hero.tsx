import { Instagram, Mail, Palette } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useNavigate();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden bg-[#f4e8d8]">
      {/* Vintage paper texture overlay */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Floating vintage elements */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-amber-800/30 text-6xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontFamily: "serif",
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            ❋
          </motion.div>
        ))}
      </div>

      {/* Ink stains */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-amber-900/5 blur-3xl"
        animate={{
          x: mousePosition.x - 192,
          y: mousePosition.y - 192,
        }}
        transition={{ type: "spring", stiffness: 20, damping: 20 }}
      />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8"
        >
          <div className="relative w-40 h-40 mx-auto mb-8">
            {/* Vintage frame effect */}
            <div className="absolute inset-0 border-4 border-amber-800/40 rounded-full" 
                 style={{ 
                   boxShadow: 'inset 0 0 20px rgba(120, 80, 40, 0.3), 0 4px 8px rgba(0,0,0,0.2)' 
                 }} 
            />
            <div className="absolute inset-2 rounded-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center overflow-hidden">
              <Palette className="size-16 text-amber-900" />
            </div>
            {/* Decorative corners */}
            <motion.div
              className="absolute -top-3 -right-3 text-amber-800"
              animate={{ rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L15 9L22 9L16.5 14L19 21L12 16.5L5 21L7.5 14L2 9L9 9L12 2Z" />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl mb-2 text-amber-950 font-serif" 
              style={{ 
                textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                fontVariant: 'small-caps' 
              }}>
            Jayvert Corpuz
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-16 bg-amber-800/30" />
            <p className="text-2xl md:text-3xl text-amber-900 font-serif italic">
              Administrative Virtual Assistant & Designer
            </p>
            <div className="h-px w-16 bg-amber-800/30" />
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg text-amber-900/80 mb-8 max-w-2xl mx-auto font-serif leading-relaxed"
        >
          Providing comprehensive administrative support and creative solutions for businesses worldwide
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex gap-4 justify-center mb-8"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              className="gap-2 bg-amber-900 hover:bg-amber-800 text-amber-50 shadow-lg border-2 border-amber-950/20"
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                if (contactSection) {
                  const navHeight = 64;
                  const elementPosition = contactSection.getBoundingClientRect().top + window.pageYOffset;
                  const offsetPosition = elementPosition - navHeight;
                  window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }
              }}
            >
              <Mail className="size-4" />
              Commission Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 border-2 border-amber-900 text-amber-900 hover:bg-amber-100"
              onClick={() => navigate("/gallery")}
            >
              View Gallery
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex gap-4 justify-center"
        >
          {[
            { Icon: Instagram, href: "https://www.instagram.com/vescaie/", external: true },
            { Icon: Palette, href: "/gallery", external: false },
            { Icon: Mail, href: "mailto:admin.cairen@proton.me", external: true },
          ].map(({ Icon, href, external }, index) => (
            external ? (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full shadow-md flex items-center justify-center text-amber-900 border-2 border-amber-800/20 hover:text-amber-950 transition-colors"
                style={{ backgroundColor: "#fef3c7" }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#d4a574",
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 8px 16px rgba(120, 80, 40, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="size-5" />
              </motion.a>
            ) : (
              <motion.button
                key={index}
                onClick={() => navigate(href)}
                className="w-12 h-12 rounded-full shadow-md flex items-center justify-center text-amber-900 border-2 border-amber-800/20 hover:text-amber-950 transition-colors"
                style={{ backgroundColor: "#fef3c7" }}
                whileHover={{
                  scale: 1.1,
                  backgroundColor: "#d4a574",
                  rotate: [0, -5, 5, 0],
                  boxShadow: "0 8px 16px rgba(120, 80, 40, 0.3)",
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="size-5" />
              </motion.button>
            )
          ))}
        </motion.div>
      </div>

      {/* Vintage scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="text-amber-900/60 font-serif text-sm">↓ Scroll ↓</div>
      </motion.div>
    </section>
  );
}