import { motion } from "motion/react";
import { MessageSquare, FileText, Zap, CheckCircle, RefreshCw } from "lucide-react";

const processSteps = [
  {
    icon: MessageSquare,
    title: "Initial Consultation",
    description: "We discuss your needs, goals, and project scope. I ask questions to understand your vision and requirements thoroughly.",
    time: "30-60 min"
  },
  {
    icon: FileText,
    title: "Planning & Organization",
    description: "I create detailed project timelines, set up tracking systems, and establish clear communication protocols for smooth execution.",
    time: "1-2 days"
  },
  {
    icon: Zap,
    title: "Execution & Updates",
    description: "Regular progress updates, transparent communication, and efficient task management ensure you're always in the loop.",
    time: "Ongoing"
  },
  {
    icon: CheckCircle,
    title: "Quality Review",
    description: "Thorough review process to ensure everything meets standards before delivery. Your feedback is incorporated promptly.",
    time: "24-48 hours"
  },
  {
    icon: RefreshCw,
    title: "Delivery & Support",
    description: "Final delivery with documentation, followed by post-project support and adjustments as needed.",
    time: "Same day"
  }
];

export function Process() {
  return (
    <section className="py-20 px-4 bg-[#ebe0d0] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative compass rose in background */}
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 opacity-5"
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 100 100" className="w-full h-full text-amber-900">
          <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 5 L50 95 M5 50 L95 50 M15 15 L85 85 M85 15 L15 85" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="50" cy="50" r="3" fill="currentColor" />
        </svg>
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-amber-950 font-serif mb-4" style={{ fontVariant: 'small-caps' }}>
            How I Work
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">✦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
          <p className="text-amber-900/80 font-serif italic max-w-2xl mx-auto">
            A transparent, efficient workflow designed for your peace of mind
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connecting line */}
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-amber-800/20 via-amber-800/40 to-amber-800/20 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ transformOrigin: "top" }}
          />

          <div className="space-y-12">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-6 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}>
                    {/* Content card */}
                    <motion.div
                      className="flex-1 w-full"
                      whileHover={{ scale: 1.02, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="bg-[#f4e8d8] p-6 border-3 border-amber-900/25 shadow-lg relative"
                           style={{ 
                             boxShadow: '0 8px 20px rgba(120, 80, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.5)' 
                           }}>
                        
                        {/* Step number badge */}
                        <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-amber-900 border-4 border-amber-100 flex items-center justify-center shadow-md"
                             style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}>
                          <span className="text-amber-50 font-serif text-lg">
                            {index + 1}
                          </span>
                        </div>

                        {/* Corner decorations */}
                        <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-amber-800/30" />
                        <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-amber-800/30" />

                        <div className="flex items-start gap-4">
                          <motion.div
                            className="w-14 h-14 rounded-full bg-amber-100 border-2 border-amber-800/30 flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            style={{ boxShadow: 'inset 0 2px 6px rgba(120, 80, 40, 0.2)' }}
                          >
                            <Icon className="size-7 text-amber-900" />
                          </motion.div>

                          <div className="flex-1">
                            <div className="flex items-start justify-between gap-2 mb-2">
                              <h3 className="text-xl text-amber-950 font-serif">
                                {step.title}
                              </h3>
                              <span className="text-xs text-amber-800/70 font-serif bg-amber-100 px-3 py-1 border border-amber-800/20 whitespace-nowrap">
                                {step.time}
                              </span>
                            </div>
                            <p className="text-amber-900/80 font-serif text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Center ornament (visible only on desktop) */}
                    <motion.div
                      className="hidden md:block w-16 h-16 rounded-full bg-amber-800 border-4 border-amber-100 shadow-lg flex-shrink-0 relative"
                      initial={{ scale: 0, rotate: -180 }}
                      whileInView={{ scale: 1, rotate: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3, type: "spring", stiffness: 200 }}
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      style={{ boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)' }}
                    >
                      <div className="absolute inset-0.5 rounded-full bg-amber-200 flex items-center justify-center">
                        <div className="text-amber-900 text-2xl">✦</div>
                      </div>
                    </motion.div>

                    {/* Spacer for alternating layout */}
                    <div className="flex-1 hidden md:block" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-[#f4e8d8] px-8 py-4 border-2 border-amber-900/20 shadow-md"
               style={{ boxShadow: '0 4px 12px rgba(120, 80, 40, 0.15)' }}>
            <p className="text-amber-900 font-serif italic text-sm">
              Every project is unique — timelines are adjusted to fit your specific needs
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
