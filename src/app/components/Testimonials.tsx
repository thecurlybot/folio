import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "Jayvert's administrative support has been invaluable. Their attention to detail and ability to manage multiple projects simultaneously is impressive. The 98% on-time delivery rate speaks for itself.",
    author: "Sarah Mitchell",
    role: "Business Owner",
    company: "Digital Marketing Agency",
    rating: 5
  },
  {
    quote: "Working with Jayvert for our character design project was a dream. Three years of consistent quality and creative vision. They truly understand the balance between artistic expression and client needs.",
    author: "Alex Chen",
    role: "Creative Director",
    company: "Independent Studio",
    rating: 5
  },
  {
    quote: "The organizational systems Jayvert implemented transformed our workflow. Their Excel tracking templates and communication protocols saved us countless hours and improved our team coordination significantly.",
    author: "Maria Rodriguez",
    role: "Operations Manager",
    company: "International Consulting Firm",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 px-4 bg-[#e8d9c5] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-25 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Vintage ink spots */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-24 h-24 rounded-full bg-amber-900/5 blur-2xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            delay: i * 1,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl text-amber-950 font-serif mb-4" style={{ fontVariant: 'small-caps' }}>
            Client Testimonials
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">❦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
          <p className="text-amber-900/80 font-serif italic max-w-2xl mx-auto">
            Words from satisfied clients across various industries
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ y: -8, rotate: index % 2 === 0 ? 2 : -2 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="h-full"
              >
                {/* Vintage letter/note style card */}
                <div className="relative h-full bg-[#f4e8d8] p-6 border-2 border-amber-900/20 shadow-lg"
                     style={{ 
                       boxShadow: '0 8px 24px rgba(120, 80, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.5)',
                       transform: `rotate(${index % 2 === 0 ? '0.5deg' : '-0.5deg'})`
                     }}>
                  
                  {/* Wax seal decoration */}
                  <div className="absolute -top-4 right-6 w-10 h-10 rounded-full bg-amber-900 border-2 border-amber-950 flex items-center justify-center shadow-md"
                       style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.3)' }}>
                    <div className="w-6 h-6 rounded-full border border-amber-700 flex items-center justify-center">
                      <div className="text-amber-200 text-xs font-serif">✓</div>
                    </div>
                  </div>

                  {/* Quote mark */}
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 + 0.2, type: "spring" }}
                    className="mb-4"
                  >
                    <Quote className="size-8 text-amber-800/40" />
                  </motion.div>

                  {/* Rating stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + 0.3 + i * 0.05 }}
                      >
                        <Star className="size-4 fill-amber-800 text-amber-800" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Quote text */}
                  <p className="text-amber-900/80 font-serif italic leading-relaxed mb-6 text-sm">
                    "{testimonial.quote}"
                  </p>

                  {/* Signature line */}
                  <div className="border-t-2 border-amber-800/20 pt-4 mt-auto">
                    <p className="text-amber-950 font-serif mb-1">
                      {testimonial.author}
                    </p>
                    <p className="text-amber-800/70 text-sm font-serif">
                      {testimonial.role}
                    </p>
                    <p className="text-amber-800/60 text-xs font-serif italic">
                      {testimonial.company}
                    </p>
                  </div>

                  {/* Vintage paper fold effect */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-l-2 border-t-2 border-amber-800/20"
                       style={{ 
                         clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                         background: 'linear-gradient(135deg, rgba(212, 165, 116, 0.2) 0%, transparent 100%)'
                       }} 
                  />

                  {/* Corner decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-t border-l border-amber-800/30" />
                  <div className="absolute top-3 right-3 w-4 h-4 border-t border-r border-amber-800/30" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom flourish */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, type: "spring" }}
          className="text-center mt-12"
        >
          <div className="text-amber-800 text-3xl">❦</div>
        </motion.div>
      </div>
    </section>
  );
}
