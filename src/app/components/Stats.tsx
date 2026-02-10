import { motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { Award, Users, CheckCircle, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: 2,
    suffix: "+",
    label: "Years Experience",
    color: "#78350f"
  },
  {
    icon: Users,
    value: 15,
    suffix: "+",
    label: "Concurrent Clients",
    color: "#92400e"
  },
  {
    icon: CheckCircle,
    value: 98,
    suffix: "%",
    label: "On-Time Delivery",
    color: "#78350f"
  },
  {
    icon: Award,
    value: 100,
    suffix: "+",
    label: "Projects Completed",
    color: "#92400e"
  }
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="py-20 px-4 bg-[#e8d9c5] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-amber-900/10 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-block">
            <div className="text-amber-800 text-3xl mb-2">✦</div>
            <h2 className="text-4xl text-amber-950 font-serif mb-2" style={{ fontVariant: 'small-caps' }}>
              Track Record
            </h2>
            <div className="w-32 h-px bg-amber-800/40 mx-auto" />
          </div>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -8, scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative group"
                >
                  {/* Vintage wax seal style badge */}
                  <div className="relative bg-[#f4e8d8] p-6 rounded-full aspect-square flex flex-col items-center justify-center border-4 border-amber-900/30 shadow-lg"
                       style={{ 
                         boxShadow: '0 8px 24px rgba(120, 80, 40, 0.25), inset 0 2px 8px rgba(255,255,255,0.5)' 
                       }}>
                    
                    {/* Inner circle */}
                    <div className="absolute inset-3 rounded-full border-2 border-amber-800/20" />
                    
                    {/* Decorative rays */}
                    {[...Array(8)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-px h-4 bg-amber-800/20"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${i * 45}deg) translateY(-50px)`,
                          transformOrigin: 'center'
                        }}
                      />
                    ))}

                    <div className="relative z-10 text-center">
                      <motion.div
                        className="mb-2"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="size-8 text-amber-900 mx-auto" />
                      </motion.div>
                      
                      <div className="text-4xl font-serif text-amber-950 mb-1" style={{ fontVariant: 'small-caps' }}>
                        <Counter value={stat.value} suffix={stat.suffix} />
                      </div>
                      
                      <div className="text-xs text-amber-900/80 font-serif leading-tight">
                        {stat.label}
                      </div>
                    </div>

                    {/* Wax seal texture overlay */}
                    <div className="absolute inset-0 rounded-full opacity-10 mix-blend-multiply pointer-events-none"
                         style={{ 
                           backgroundImage: `radial-gradient(circle at center, transparent 40%, rgba(120, 80, 40, 0.3) 100%)` 
                         }} 
                    />
                  </div>

                  {/* Vintage ribbon underneath */}
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-3 bg-amber-900/20 rounded-full blur-sm" />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
