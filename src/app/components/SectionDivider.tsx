import { motion } from "motion/react";

interface SectionDividerProps {
  variant?: "default" | "ornate" | "simple";
}

export function SectionDivider({ variant = "default" }: SectionDividerProps) {
  if (variant === "ornate") {
    return (
      <div className="relative py-8 overflow-hidden">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center gap-4"
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-800/40 to-amber-800/40" />
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            className="flex items-center gap-3"
          >
            <div className="text-amber-800/60 text-2xl">❧</div>
            <div className="w-3 h-3 rounded-full bg-amber-800/40" />
            <div className="text-amber-800 text-3xl">✦</div>
            <div className="w-3 h-3 rounded-full bg-amber-800/40" />
            <div className="text-amber-800/60 text-2xl">❧</div>
          </motion.div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-800/40 to-amber-800/40" />
        </motion.div>
      </div>
    );
  }

  if (variant === "simple") {
    return (
      <div className="relative py-6">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2"
        >
          <div className="flex-1 h-px bg-amber-800/30" />
          <div className="text-amber-800/50 text-xl">❦</div>
          <div className="flex-1 h-px bg-amber-800/30" />
        </motion.div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="relative py-8">
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="flex items-center justify-center gap-3"
      >
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-amber-800/30 to-amber-800/40" />
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          whileInView={{ scale: 1, rotate: 360 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="w-8 h-8 rounded-full border-2 border-amber-800/40 flex items-center justify-center bg-amber-100/50"
        >
          <div className="text-amber-800 text-sm">✦</div>
        </motion.div>
        <div className="flex-1 h-px bg-gradient-to-l from-transparent via-amber-800/30 to-amber-800/40" />
      </motion.div>
    </div>
  );
}
