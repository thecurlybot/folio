import { Award, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "motion/react";

const experiences = [
  {
    type: "exhibition",
    title: "Solo Exhibition: \"Vintage Botanicals\"",
    venue: "Heritage Art Gallery",
    period: "2024",
    description: "A curated collection of 30 botanical illustrations inspired by 19th-century herbarium studies and vintage scientific drawings.",
    achievements: [
      "Sold 25 of 30 original pieces",
      "Featured in Art & Culture Magazine",
      "Acquired by 3 private collectors"
    ]
  },
  {
    type: "exhibition",
    title: "Group Show: \"Timeless Techniques\"",
    venue: "Modern Classics Gallery",
    period: "2023",
    description: "Contemporary artists exploring traditional and vintage artistic methods in digital medium.",
    achievements: [
      "Best Digital Artist Award",
      "5 pieces sold during opening night",
      "Positive reviews in local press"
    ]
  },
  {
    type: "commission",
    title: "Custom Portrait Series",
    venue: "Private Commission",
    period: "2022 - 2023",
    description: "Created a series of 12 vintage-style family portraits for distinguished clients, incorporating period costume and classical composition.",
    achievements: [
      "100% client satisfaction rate",
      "3 additional commissions from referrals",
      "Featured on Instagram Art page"
    ]
  },
  {
    type: "education",
    title: "Master of Fine Arts - Digital Illustration",
    venue: "Academy of Visual Arts",
    period: "2018 - 2020",
    description: "Specialized in bridging traditional artistic techniques with digital tools. Thesis: 'Nostalgia in the Digital Age: Recreating Vintage Aesthetics.'",
    achievements: []
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-[#ebe0d0] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl text-center mb-4 text-amber-950 font-serif" style={{ fontVariant: 'small-caps' }}>
            Exhibitions & Achievements
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">❦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
        </motion.div>

        <div className="relative">
          {/* Decorative timeline line */}
          <motion.div
            className="absolute left-8 top-0 bottom-0 w-px bg-amber-800/30 hidden md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            style={{ transformOrigin: "top", backgroundImage: 'repeating-linear-gradient(0deg, #78502840, #78502840 10px, transparent 10px, transparent 20px)' }}
          />
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
              >
                <div className="md:ml-20">
                  <motion.div
                    whileHover={{ scale: 1.01, y: -4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Card className="relative overflow-hidden group bg-[#f4e8d8] border-2 border-amber-900/20 shadow-lg"
                          style={{ boxShadow: '0 4px 12px rgba(120, 80, 40, 0.15), inset 0 2px 4px rgba(255,255,255,0.4)' }}>
                      {/* Vintage accent bar */}
                      <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900" />
                      
                      {/* Corner ornaments */}
                      <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-800/30" />
                      <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-800/30" />

                      <CardContent className="pt-6 pl-8">
                        <div className="flex items-start gap-4">
                          <motion.div
                            className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-800/30 flex items-center justify-center flex-shrink-0"
                            whileHover={{ rotate: 360 }}
                            transition={{ duration: 0.6 }}
                            style={{ boxShadow: 'inset 0 2px 6px rgba(120, 80, 40, 0.2)' }}
                          >
                            {exp.type === "education" ? (
                              <GraduationCap className="size-6 text-amber-900" />
                            ) : (
                              <Award className="size-6 text-amber-900" />
                            )}
                          </motion.div>
                          <div className="flex-1">
                            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                              <h3 className="text-xl text-amber-950 font-serif">{exp.title}</h3>
                              <motion.span
                                className="text-sm px-3 py-1 bg-amber-100 border border-amber-800/30 text-amber-900 w-fit font-serif"
                                whileHover={{ scale: 1.05 }}
                                style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}
                              >
                                {exp.period}
                              </motion.span>
                            </div>
                            <p className="text-amber-800 mb-2 font-serif italic">{exp.venue}</p>
                            <p className="text-amber-900/80 mb-3 font-serif text-sm leading-relaxed">{exp.description}</p>
                            {exp.achievements.length > 0 && (
                              <ul className="space-y-1">
                                {exp.achievements.map((achievement, i) => (
                                  <motion.li
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 + i * 0.1 }}
                                    className="text-amber-900/70 flex items-start gap-2 text-sm font-serif"
                                  >
                                    <span className="text-amber-700 mt-0.5">❧</span>
                                    {achievement}
                                  </motion.li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </div>

                {/* Timeline ornament */}
                <motion.div
                  className="absolute left-6 top-6 w-5 h-5 rounded-full bg-amber-800 border-4 border-amber-100 hidden md:block shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.2, type: "spring", stiffness: 300 }}
                  whileHover={{ scale: 1.5 }}
                >
                  <div className="absolute inset-0.5 rounded-full bg-amber-200" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}