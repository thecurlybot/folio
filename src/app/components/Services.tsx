import { ClipboardCheck, Palette, CheckSquare, FileText } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card";
import { motion } from "motion/react";

const adminServices = [
  "Executive & Calendar Management",
  "Email Management & Client Correspondence",
  "Data Entry & Database Management",
  "Report Preparation & Documentation",
  "Project Coordination & Timeline Management",
  "Client Communication & Follow-up",
  "Spreadsheet Management (Excel/Google Sheets)"
];

const creativeServices = [
  "Social media graphics & content creation",
  "Marketing materials & brand identity",
  "Publication design & layout",
  "Presentation design",
  "Product design (packaging, technical blueprints, furniture design)",
  "Digital illustration & character design"
];

export function Services() {
  return (
    <section id="services" className="py-20 px-4 bg-[#f4e8d8] relative overflow-hidden">
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
            Services
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">✦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Administrative Services - Featured First */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative overflow-hidden group bg-[#ebe0d0] border-4 border-amber-900/30 shadow-xl"
                    style={{ boxShadow: '0 6px 20px rgba(120, 80, 40, 0.25), inset 0 2px 4px rgba(255,255,255,0.4)' }}>
                {/* Prominent border accent */}
                <div className="absolute inset-0 border-4 border-amber-800/20" />
                
                {/* Corner decorations */}
                <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-800/40" />
                <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-800/40" />
                <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-800/40" />
                <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-800/40" />

                <CardHeader className="relative pb-3">
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      className="w-20 h-20 rounded-full bg-amber-900 border-3 border-amber-800 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{ boxShadow: 'inset 0 2px 6px rgba(0,0,0,0.3)' }}
                    >
                      <ClipboardCheck className="size-10 text-amber-50" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-amber-950 font-serif text-3xl mb-1">Administrative Services</CardTitle>
                      <p className="text-amber-800 font-serif italic text-sm">Core Business Support Solutions</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid md:grid-cols-2 gap-3">
                    {adminServices.map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.05 }}
                        className="flex items-start gap-2 p-2 bg-amber-50/50 rounded border border-amber-800/10"
                      >
                        <CheckSquare className="size-4 text-amber-700 flex-shrink-0 mt-0.5" />
                        <span className="text-amber-950 font-serif text-sm">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Creative Services */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="md:col-span-2"
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Card className="relative overflow-hidden group bg-[#ebe0d0] border-3 border-amber-900/20 shadow-lg"
                    style={{ boxShadow: '0 4px 16px rgba(120, 80, 40, 0.15), inset 0 2px 4px rgba(255,255,255,0.4)' }}>
                {/* Corner decorations */}
                <div className="absolute top-1 left-1 w-4 h-4 border-t-2 border-l-2 border-amber-800/30" />
                <div className="absolute top-1 right-1 w-4 h-4 border-t-2 border-r-2 border-amber-800/30" />
                <div className="absolute bottom-1 left-1 w-4 h-4 border-b-2 border-l-2 border-amber-800/30" />
                <div className="absolute bottom-1 right-1 w-4 h-4 border-b-2 border-r-2 border-amber-800/30" />

                <CardHeader className="relative pb-3">
                  <div className="flex items-center gap-4 mb-3">
                    <motion.div
                      className="w-16 h-16 rounded-full bg-amber-100 border-2 border-amber-800/30 flex items-center justify-center"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      style={{ boxShadow: 'inset 0 2px 6px rgba(120, 80, 40, 0.2)' }}
                    >
                      <Palette className="size-8 text-amber-900" />
                    </motion.div>
                    <div>
                      <CardTitle className="text-amber-950 font-serif text-2xl mb-1">Creative Services</CardTitle>
                      <p className="text-amber-800 font-serif italic text-sm">Design & Visual Content</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid md:grid-cols-2 gap-3">
                    {creativeServices.map((service, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + i * 0.05 }}
                        className="flex items-start gap-2"
                      >
                        <span className="text-amber-700 mt-0.5">✓</span>
                        <span className="text-amber-900/80 font-serif text-sm">{service}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
