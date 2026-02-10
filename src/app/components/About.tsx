import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { motion } from "motion/react";
import { WaxSeal } from "@/app/components/WaxSeal";
import { VintageStamp } from "@/app/components/VintageStamp";
import profileImage from "figma:asset/022e9c73efe9a227f2e908103171579e79de209d.png";

export function About() {
  return (
    <section id="about" className="py-20 px-4 bg-[#ebe0d0] relative overflow-hidden">
      {/* Vintage paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative border elements */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl text-center mb-12 text-amber-950 font-serif"
          style={{ fontVariant: 'small-caps' }}
        >
          About Me
        </motion.h2>
        
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="w-24 h-px bg-amber-800/40" />
          <div className="mx-4 text-amber-800 text-2xl">❦</div>
          <div className="w-24 h-px bg-amber-800/40" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              whileHover={{ scale: 1.02, rotate: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              {/* Vintage frame */}
              <div className="absolute -inset-4 border-4 border-amber-900/30 rounded-sm" 
                   style={{ 
                     background: 'linear-gradient(135deg, #d4a574 0%, #c9985f 100%)',
                     boxShadow: 'inset 0 0 30px rgba(0,0,0,0.2), 0 8px 16px rgba(0,0,0,0.3)' 
                   }} 
              />
              <div className="relative rounded-sm overflow-hidden border-8 border-amber-100" 
                   style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                <img
                  src={profileImage}
                  alt="Jayvert Corpuz"
                  className="w-full h-auto sepia-[0.3] contrast-110"
                />
              </div>
              {/* Corner ornaments */}
              <div className="absolute -top-2 -left-2 text-amber-900 text-3xl">❧</div>
              <div className="absolute -top-2 -right-2 text-amber-900 text-3xl transform rotate-90">❧</div>
              <div className="absolute -bottom-2 -left-2 text-amber-900 text-3xl transform -rotate-90">❧</div>
              <div className="absolute -bottom-2 -right-2 text-amber-900 text-3xl transform rotate-180">❧</div>
            </motion.div>
          </motion.div>

          <div className="space-y-4">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base text-amber-950/90 font-serif leading-relaxed first-letter:text-5xl first-letter:font-bold first-letter:text-amber-900 first-letter:mr-2 first-letter:float-left"
            >
              I originally enrolled in Bachelor of Arts in Philosophy at De La Salle University - Dasmariñas. My journey into art started unexpectedly when I joined and helped found our school's coalition addressing TOFI and other student concerns. We needed someone to produce publication materials, and I stepped in to learn digital design out of necessity rather than formal training.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base text-amber-950/90 font-serif leading-relaxed"
            >
              Then the pandemic hit. Our family's business in the Middle East took a significant financial hit, and I had to stop my studies to help support my sisters' education. That's when I started seriously exploring digital art and illustration—not as a hobby, but as a way to contribute and earn.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base text-amber-950/90 font-serif leading-relaxed"
            >
              Over the years, I naturally explored different facets of digital work. What started as creative projects evolved into comprehensive administrative support. I created character illustrations for clients, designed project blueprints for robotics teams, worked on furniture design concepts like the marble project, and eventually upskilled myself in UI/UX design using Figma to stay adaptable in the industry.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-base text-amber-950/90 font-serif leading-relaxed"
            >
              Along the way, I picked up administrative skills that came with being a freelancer—managing schedules, coordinating with clients, handling invoices, organizing documentation. Running my own operations for years taught me that creative work and operational work aren't separate—they both require the same attention to detail, systematic thinking, and follow-through.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="text-base text-amber-950/90 font-serif leading-relaxed"
            >
              Today, I'm an Administrative Virtual Assistant and Graphic Designer with 2+ years of professional experience managing operations for multiple clients. I specialize in administrative coordination, project management, and creative content creation. With a proven track record of 98% on-time delivery across 10-15+ concurrent clients, I'm proficient in Microsoft Excel, Google Workspace, and cloud-based business tools, with strong English communication skills (C1 proficiency) and experience working Australian business hours.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-amber-800/20"
            >
              {[
                { value: "2+", label: "Years Experience" },
                { value: "98%", label: "On-Time Delivery" },
                { value: "15+", label: "Concurrent Clients" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-4 bg-amber-100/40 rounded border-2 border-amber-800/20"
                  whileHover={{ scale: 1.05, boxShadow: "0 8px 16px rgba(120, 80, 40, 0.2)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)' }}
                >
                  <motion.div
                    className="text-3xl text-amber-900 mb-1 font-serif"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-sm text-amber-800 font-serif">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}