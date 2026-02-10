import { motion } from "motion/react";

interface WaxSealProps {
  position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  size?: "sm" | "md" | "lg";
  symbol?: string;
}

export function WaxSeal({ position = "top-right", size = "md", symbol = "✦" }: WaxSealProps) {
  const sizeClasses = {
    sm: "w-12 h-12 text-sm",
    md: "w-16 h-16 text-base",
    lg: "w-20 h-20 text-lg"
  };

  const positionClasses = {
    "top-left": "top-4 left-4",
    "top-right": "top-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "bottom-right": "bottom-4 right-4"
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileInView={{ scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
      className={`absolute ${positionClasses[position]} ${sizeClasses[size]} z-20`}
    >
      <div className="relative w-full h-full">
        {/* Wax seal base */}
        <div 
          className="absolute inset-0 rounded-full bg-amber-900 border-2 border-amber-950 shadow-lg"
          style={{ 
            boxShadow: '0 4px 12px rgba(120, 80, 40, 0.4), inset 0 2px 4px rgba(0,0,0,0.3)',
            background: 'radial-gradient(circle at 30% 30%, #92400e, #78350f)'
          }}
        />
        
        {/* Inner circle */}
        <div className="absolute inset-2 rounded-full border border-amber-700/50" />
        
        {/* Symbol */}
        <div className="absolute inset-0 flex items-center justify-center text-amber-200 font-serif">
          {symbol}
        </div>

        {/* Wax drip effect */}
        <div 
          className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-3 bg-amber-900/80 rounded-b-full"
          style={{ clipPath: 'polygon(30% 0, 70% 0, 100% 100%, 0 100%)' }}
        />
      </div>
    </motion.div>
  );
}
