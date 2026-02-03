import { useState } from "react";
import { Menu, X, Palette } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const navLinks = [
  { name: "About", href: "/#about", section: "about" },
  { name: "Gallery", href: "/gallery", section: null },
  { name: "Services", href: "/#services", section: "services" },
  { name: "Skills", href: "/#skills", section: "skills" },
  { name: "Projects", href: "/#projects", section: "projects" },
  { name: "Contact", href: "/#contact", section: "contact" }
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (link: typeof navLinks[0]) => {
    // If Gallery link, navigate to gallery page
    if (link.href === "/gallery") {
      navigate("/gallery");
      setIsOpen(false);
      return;
    }

    // If we're not on homepage, navigate to homepage first
    if (location.pathname !== "/") {
      navigate("/");
      // Wait for navigation, then scroll
      setTimeout(() => {
        scrollToSection(link.section!);
      }, 100);
    } else {
      // Already on homepage, just scroll
      scrollToSection(link.section!);
    }
    setIsOpen(false);
  };

  const scrollToSection = (section: string) => {
    const element = document.querySelector(`#${section}`);
    if (element) {
      const navHeight = 64;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleLogoClick = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#ebe0d0]/95 backdrop-blur-md border-b-2 border-amber-900/20 shadow-md"
      style={{ boxShadow: '0 4px 12px rgba(120, 80, 40, 0.15)' }}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.button
            onClick={handleLogoClick}
            className="flex items-center gap-2 text-xl text-amber-950 font-serif"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ fontVariant: 'small-caps' }}
          >
            <Palette className="size-5 text-amber-800" />
            Jayvert Corpuz
          </motion.button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link, index) => (
              <motion.button
                key={link.name}
                onClick={() => handleNavClick(link)}
                className="relative text-amber-900 hover:text-amber-950 transition-colors font-serif"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-px bg-amber-800"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-amber-900 hover:bg-amber-100/50"
            onClick={() => setIsOpen(!isOpen)}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="size-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="size-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden border-t-2 border-amber-900/20"
            >
              <div className="flex flex-col gap-2 py-4">
                {navLinks.map((link, index) => (
                  <motion.button
                    key={link.name}
                    onClick={() => handleNavClick(link)}
                    className="text-amber-900 hover:text-amber-950 transition-colors text-left px-4 py-2 hover:bg-amber-100/30 font-serif"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -20, opacity: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {link.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
