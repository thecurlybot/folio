import { Users, Palette, Award, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { motion } from "motion/react";

const skillCategories = [
  {
    icon: Users,
    title: "Administrative & Operations",
    featured: true,
    items: [
      "Multi-client Coordination (10-15+ concurrent clients)",
      "Microsoft Excel (formulas, data tracking, pivot tables, reporting)",
      "Google Workspace (Sheets, Docs, Calendar, Gmail, Drive)",
      "Calendar & Email Management",
      "Project Coordination & Time Management",
      "Client Communication & Relations",
      "Document Preparation & Reporting",
      "Remote Team Collaboration"
    ]
  },
  {
    icon: Palette,
    title: "Creative & Design",
    featured: false,
    items: [
      "Canva (social media graphics, marketing materials)",
      "Figma (design, prototyping, presentations)",
      "Autodesk Sketchbook (illustration, digital art)",
      "Digital illustration & character design",
      "Brand identity & visual design",
      "Publication & layout design"
    ]
  },
  {
    icon: Award,
    title: "Professional Attributes",
    featured: true,
    items: [
      "98% on-time delivery rate",
      "Detail-oriented & analytical",
      "Proactive problem solver",
      "C1 English proficiency (written & verbal)",
      "Available for Australian business hours"
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden bg-[#f4e8d8]">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative ink spots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-amber-800/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 bg-amber-700/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.05, 0.15],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-5xl text-center mb-4 text-amber-950 font-serif" style={{ fontVariant: 'small-caps' }}>
            Skills & Expertise
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">✦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
        </motion.div>

        <div className="space-y-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isFeatured = category.featured;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className={`relative overflow-hidden group bg-[#ebe0d0] shadow-lg ${
                    isFeatured 
                      ? 'border-4 border-amber-900/30' 
                      : 'border-2 border-amber-900/20'
                  }`}
                        style={{ 
                          boxShadow: isFeatured 
                            ? '0 6px 20px rgba(120, 80, 40, 0.25), inset 0 2px 4px rgba(255,255,255,0.4)'
                            : '0 4px 12px rgba(120, 80, 40, 0.15), inset 0 2px 4px rgba(255,255,255,0.4)' 
                        }}>
                    
                    {/* Featured border accent */}
                    {isFeatured && (
                      <div className="absolute inset-0 border-2 border-amber-800/20" />
                    )}
                    
                    {/* Corner decorations */}
                    <div className={`absolute top-2 left-2 ${isFeatured ? 'w-6 h-6' : 'w-4 h-4'} border-t-2 border-l-2 border-amber-800/40`} />
                    <div className={`absolute top-2 right-2 ${isFeatured ? 'w-6 h-6' : 'w-4 h-4'} border-t-2 border-r-2 border-amber-800/40`} />
                    <div className={`absolute bottom-2 left-2 ${isFeatured ? 'w-6 h-6' : 'w-4 h-4'} border-b-2 border-l-2 border-amber-800/40`} />
                    <div className={`absolute bottom-2 right-2 ${isFeatured ? 'w-6 h-6' : 'w-4 h-4'} border-b-2 border-r-2 border-amber-800/40`} />

                    <CardHeader className="relative pb-3">
                      <div className="flex items-center gap-4">
                        <motion.div
                          className={`${isFeatured ? 'w-20 h-20' : 'w-16 h-16'} rounded-full ${
                            isFeatured ? 'bg-amber-900' : 'bg-amber-100'
                          } border-2 ${
                            isFeatured ? 'border-amber-800' : 'border-amber-800/30'
                          } flex items-center justify-center`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.6 }}
                          style={{ boxShadow: isFeatured ? 'inset 0 2px 6px rgba(0,0,0,0.3)' : 'inset 0 2px 6px rgba(120, 80, 40, 0.2)' }}
                        >
                          <Icon className={`${isFeatured ? 'size-10' : 'size-8'} ${isFeatured ? 'text-amber-50' : 'text-amber-900'}`} />
                        </motion.div>
                        <CardTitle className={`text-amber-950 font-serif ${isFeatured ? 'text-3xl' : 'text-2xl'}`}>
                          {category.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="relative">
                      <div className={`grid ${category.items.length > 6 ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-3`}>
                        {category.items.map((item, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + i * 0.03 }}
                            className={`flex items-start gap-3 ${
                              isFeatured ? 'p-2 bg-amber-50/50 rounded border border-amber-800/10' : ''
                            }`}
                          >
                            <span className={`${isFeatured ? 'text-amber-700 text-lg' : 'text-amber-700'} mt-0.5`}>
                              {isFeatured ? '●' : '❧'}
                            </span>
                            <span className={`text-amber-950 font-serif ${isFeatured ? 'text-base' : 'text-sm'}`}>
                              {item}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
