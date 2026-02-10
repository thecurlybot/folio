import { motion } from "motion/react";

interface VintageStampProps {
  text: string;
  rotation?: number;
  color?: "amber" | "red" | "green";
}

export function VintageStamp({ text, rotation = 15, color = "amber" }: VintageStampProps) {
  const colorClasses = {
    amber: "text-amber-800 border-amber-800",
    red: "text-red-800 border-red-800",
    green: "text-green-800 border-green-800"
  };

  return (
    <motion.div
      initial={{ scale: 0, rotate: rotation - 90 }}
      whileInView={{ scale: 1, rotate: rotation }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
      className="inline-block"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <div 
        className={`px-6 py-3 border-4 ${colorClasses[color]} font-serif uppercase tracking-wider text-sm opacity-60`}
        style={{
          borderStyle: 'dashed',
          fontWeight: 800,
          letterSpacing: '0.15em',
          textShadow: '1px 1px 2px rgba(0,0,0,0.1)'
        }}
      >
        <div className="relative">
          {text}
          {/* Stamp texture */}
          <div 
            className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='2' /%3E%3C/filter%3E%3Crect width='20' height='20' filter='url(%23noise)' /%3E%3C/svg%3E")`
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
