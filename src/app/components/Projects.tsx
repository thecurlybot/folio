import { Package, Users, BookOpen, Megaphone, Calendar, Pen, ClipboardList, Database, FileSpreadsheet } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { motion } from "motion/react";

const projects = [
  {
    icon: ClipboardList,
    title: "Multi-Client Operations Management",
    period: "2022 – Present (2+ years)",
    venue: "Freelance Operations",
    description: "Successfully coordinated 10-15+ concurrent clients maintaining 98% on-time delivery through efficient workflow systems and Excel tracking.",
    achievements: [
      "Managed 10-15+ concurrent clients simultaneously across different industries",
      "Maintained 98% on-time delivery rate through systematic workflow management",
      "Developed comprehensive Excel tracking systems for project timelines and deliverables",
      "Implemented efficient communication protocols reducing client response time by 40%",
      "Created standardized processes for onboarding, project management, and delivery"
    ],
    featured: true,
    category: "administrative"
  },
  {
    icon: Database,
    title: "Executive Support & Coordination",
    period: "2022 – Present",
    venue: "International Client Portfolio",
    description: "Managed calendars, email correspondence, and client communications across multiple time zones for international clients.",
    achievements: [
      "Coordinated executive calendars across multiple time zones (Philippine, Australian, US hours)",
      "Managed high-volume email correspondence with 24-hour response time standard",
      "Maintained organized filing systems for contracts, invoices, and project documentation",
      "Prepared weekly status reports and monthly performance summaries",
      "Facilitated smooth communication between clients, team members, and stakeholders"
    ],
    featured: true,
    category: "administrative"
  },
  {
    icon: FileSpreadsheet,
    title: "Data Management & Reporting Systems",
    period: "2022 – Present",
    venue: "Business Operations",
    description: "Created and maintained comprehensive tracking systems using Excel and Google Sheets for project management, budget monitoring, and performance reporting.",
    achievements: [
      "Designed custom Excel templates for project tracking, time logging, and budget management",
      "Implemented Google Sheets collaboration systems for real-time client updates",
      "Created automated reporting dashboards reducing manual reporting time by 60%",
      "Maintained accurate databases for client information, project history, and financial records",
      "Developed data analysis reports to inform business decisions and identify improvement areas"
    ],
    featured: true,
    category: "administrative"
  },
  {
    icon: Package,
    title: "Custom Marble Furniture Design & Production",
    period: "March – July 2024",
    venue: "Private Residential Client",
    description: "A bespoke marble furniture project combining structural engineering with artisan craftsmanship to create functional, elegant pieces for high-end residential installation.",
    achievements: [
      "Designed structurally sound marble furniture with precise weight distribution calculations",
      "Coordinated production with 3 local artisan sculptors across 4-month timeline",
      "Successfully delivered completed pieces to client location with zero damage",
      "Project completed on schedule with 100% client satisfaction"
    ],
    featured: false,
    category: "creative"
  },
  {
    icon: Users,
    title: "Original Character Design Series",
    period: "2021 – 2024",
    venue: "Long-term Client Commission",
    description: "A comprehensive character design project spanning three years, creating 14 unique original characters with distinct personalities, backstories, and visual identities for client's creative universe.",
    achievements: [
      "Delivered 14 complete original character designs with consistent art style",
      "Maintained 3-year client relationship through reliable delivery and quality work",
      "Each character developed with unique visual identity and personality traits",
      "Client returned for multiple iterations demonstrating trust and satisfaction"
    ],
    featured: false,
    category: "creative"
  },
  {
    icon: BookOpen,
    title: "Comic Strip Series",
    period: "2024 (2-month project)",
    venue: "Digital Publication",
    description: "A month-long comic strip series featuring sequential storytelling, character development, and visual narrative across multiple episodes.",
    achievements: [
      "Produced consistent weekly content maintaining artistic quality and deadlines",
      "Developed cohesive narrative arc across multiple strip episodes",
      "Demonstrated ability to balance storytelling with visual execution",
      "Completed full series on schedule with organized production workflow"
    ],
    featured: false,
    category: "creative"
  },
  {
    icon: Megaphone,
    title: "Social Media & Publication Management: LGBTQIAP+ National NGO",
    period: "2023 – 2024",
    venue: "National-Level Advocacy Organization",
    description: "Comprehensive digital content creation and messaging support for national LGBTQIAP+ advocacy campaigns, combining visual design with strategic communication.",
    achievements: [
      "Created publication materials and social media graphics for advocacy campaigns",
      "Wrote extensive articles and official organizational statements",
      "Maintained consistent brand identity across all digital platforms",
      "Contributed to national-level awareness and advocacy initiatives"
    ],
    featured: false,
    category: "creative"
  },
  {
    icon: Calendar,
    title: "Social Media Manager & Event Coordinator: Rotary Club",
    period: "November 2024 – Present",
    venue: "Community Service Organization",
    description: "Full social media management and creative direction for community service initiatives, from content creation to event coordination and execution.",
    achievements: [
      "Manage official social media presence and community engagement",
      "Organize and promote book donation drives for small libraries",
      "Coordinate community outreach programs and volunteer activities",
      "Design event logos, promotional materials, and documentation",
      "Successfully increased community participation through strategic social media campaigns"
    ],
    featured: false,
    category: "creative"
  },
  {
    icon: Megaphone,
    title: "Digital Artist & Content Creator: Cultural Mass Organization",
    period: "March – November 2024",
    venue: "Advocacy & Cultural NGO",
    description: "Multifaceted role combining graphic design, content writing, and theatrical performance to advance organizational mission and cultural programming.",
    achievements: [
      "Produced publication materials and social media content for advocacy campaigns",
      "Wrote articles and official statements supporting organizational objectives",
      "Performed in theater play as part of cultural awareness programming",
      "Balanced creative performance responsibilities with consistent design deliverables"
    ],
    featured: false,
    category: "creative"
  },
  {
    icon: Pen,
    title: "Digital Artist & Writer: AB Kalayaan Student Coalition",
    period: "2019 – 2020",
    venue: "University Student Advocacy Group",
    description: "Founded role as digital artist for student coalition addressing TOFI and campus issues—the project that launched professional design career.",
    achievements: [
      "Created publication materials for student advocacy campaigns",
      "Wrote extensive articles on student concerns and institutional reform",
      "Developed visual identity for coalition communications",
      "First experience combining design work with advocacy writing"
    ],
    featured: false,
    category: "creative"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#ebe0d0] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='5' /%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23paper)' opacity='0.5'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative border */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-transparent via-amber-800/20 to-transparent" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl text-center mb-4 text-amber-950 font-serif" style={{ fontVariant: 'small-caps' }}>
            Projects & Experience
          </h2>
          <div className="flex justify-center mb-4">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">❦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
          <p className="text-center text-amber-900/80 font-serif italic mb-12 max-w-2xl mx-auto">
            A track record of successful administrative coordination and creative project delivery
          </p>
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
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={index}
                  className="relative"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <div className="md:ml-20">
                    <motion.div
                      whileHover={{ scale: 1.01, y: -4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Card className={`relative overflow-hidden group bg-[#f4e8d8] shadow-lg ${
                        project.featured 
                          ? 'border-4 border-amber-900/30' 
                          : 'border-2 border-amber-900/20'
                      }`}
                            style={{ 
                              boxShadow: project.featured 
                                ? '0 6px 20px rgba(120, 80, 40, 0.25), inset 0 2px 4px rgba(255,255,255,0.4)'
                                : '0 4px 12px rgba(120, 80, 40, 0.15), inset 0 2px 4px rgba(255,255,255,0.4)' 
                            }}>
                        {/* Vintage accent bar */}
                        <div className={`absolute left-0 top-0 bottom-0 ${
                          project.featured ? 'w-3' : 'w-2'
                        } bg-gradient-to-b from-amber-700 via-amber-800 to-amber-900`} />
                        
                        {/* Featured badge and date stacking */}
                        {project.featured && (
                          <div className="absolute top-4 right-4 flex flex-col items-end gap-2">
                            <motion.div
                              className="bg-amber-900 text-amber-50 px-3 py-1 text-xs font-serif border-2 border-amber-950"
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              viewport={{ once: true }}
                              transition={{ type: "spring", delay: index * 0.1 + 0.3 }}
                            >
                              Featured
                            </motion.div>
                            <div className="text-sm px-3 py-1 bg-amber-100 border border-amber-800/30 text-amber-900 font-serif">
                              2022
                            </div>
                          </div>
                        )}
                        
                        {/* Corner ornaments */}
                        <div className={`absolute top-2 right-2 ${project.featured ? 'w-5 h-5' : 'w-4 h-4'} border-t-2 border-r-2 border-amber-800/30`} />
                        <div className={`absolute bottom-2 right-2 ${project.featured ? 'w-5 h-5' : 'w-4 h-4'} border-b-2 border-r-2 border-amber-800/30`} />

                        <CardContent className="pt-6 pl-8">
                          <div className="flex items-start gap-4">
                            <motion.div
                              className={`${project.featured ? 'w-14 h-14' : 'w-12 h-12'} rounded-full ${
                                project.featured ? 'bg-amber-900' : 'bg-amber-100'
                              } border-2 ${
                                project.featured ? 'border-amber-800' : 'border-amber-800/30'
                              } flex items-center justify-center flex-shrink-0`}
                              whileHover={{ rotate: 360 }}
                              transition={{ duration: 0.6 }}
                              style={{ 
                                boxShadow: project.featured 
                                  ? 'inset 0 2px 6px rgba(0,0,0,0.3)' 
                                  : 'inset 0 2px 6px rgba(120, 80, 40, 0.2)' 
                              }}
                            >
                              <Icon className={`${project.featured ? 'size-7' : 'size-6'} ${
                                project.featured ? 'text-amber-50' : 'text-amber-900'
                              }`} />
                            </motion.div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                                <h3 className={`${project.featured ? 'text-2xl' : 'text-xl'} text-amber-950 font-serif`}>
                                  {project.title}
                                </h3>
                                <motion.span
                                  className={`text-sm px-3 py-1 bg-amber-100 border border-amber-800/30 text-amber-900 w-fit font-serif ${
                                    project.featured ? 'text-base' : ''
                                  }`}
                                  whileHover={{ scale: 1.05 }}
                                  style={{ boxShadow: 'inset 0 1px 2px rgba(0,0,0,0.1)' }}
                                >
                                  {project.period}
                                </motion.span>
                              </div>
                              <p className="text-amber-800 mb-2 font-serif italic">{project.venue}</p>
                              <p className={`text-amber-900/80 mb-3 font-serif ${
                                project.featured ? 'text-base' : 'text-sm'
                              } leading-relaxed`}>{project.description}</p>
                              {project.achievements.length > 0 && (
                                <ul className="space-y-1">
                                  {project.achievements.map((achievement, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0, x: -10 }}
                                      whileInView={{ opacity: 1, x: 0 }}
                                      viewport={{ once: true }}
                                      transition={{ delay: index * 0.1 + i * 0.05 }}
                                      className={`text-amber-900/70 flex items-start gap-2 ${
                                        project.featured ? 'text-sm' : 'text-sm'
                                      } font-serif`}
                                    >
                                      <span className="text-amber-700 mt-0.5">{project.featured ? '●' : '❧'}</span>
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
                    className={`absolute left-6 top-6 ${
                      project.featured ? 'w-6 h-6' : 'w-5 h-5'
                    } rounded-full bg-amber-800 border-4 border-amber-100 hidden md:block shadow-md`}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 300 }}
                    whileHover={{ scale: 1.5 }}
                  >
                    <div className="absolute inset-0.5 rounded-full bg-amber-200" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}