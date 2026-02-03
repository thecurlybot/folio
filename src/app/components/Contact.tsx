import { Mail, MapPin, Instagram } from "lucide-react";
import { Card, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Label } from "@/app/components/ui/label";
import { motion } from "motion/react";
import { useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const message = formData.get("message") as string;

    // Create mailto link
    const mailtoLink = `mailto:admin.cairen@proton.me?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open mail client
    window.location.href = mailtoLink;

    // Reset form after a short delay
    setTimeout(() => {
      form.reset();
      setIsSubmitting(false);
      setSubmitStatus("success");
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 px-4 bg-[#f4e8d8] relative overflow-hidden">
      {/* Paper texture */}
      <div className="absolute inset-0 opacity-20 mix-blend-multiply" 
           style={{ 
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.4'/%3E%3C/svg%3E")` 
           }} 
      />

      {/* Decorative elements */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-amber-800/10 text-5xl font-serif"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            rotate: [0, 10, -10, 0],
            opacity: [0.05, 0.15, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        >
          ❦
        </motion.div>
      ))}

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl text-center mb-4 text-amber-950 font-serif" style={{ fontVariant: 'small-caps' }}>
            Commission Inquiries
          </h2>
          <div className="flex justify-center mb-12">
            <div className="w-24 h-px bg-amber-800/40" />
            <div className="mx-4 text-amber-800 text-2xl">✦</div>
            <div className="w-24 h-px bg-amber-800/40" />
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {[
            { Icon: Mail, title: "Email", value: "admin.cairen@proton.me" },
            { Icon: Instagram, title: "Instagram", value: "@vescair" },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="relative overflow-hidden bg-[#ebe0d0] border-2 border-amber-900/20 shadow-lg"
                      style={{ boxShadow: '0 4px 12px rgba(120, 80, 40, 0.15), inset 0 2px 4px rgba(255,255,255,0.4)' }}>
                  <CardContent className="pt-6 text-center relative">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-amber-100 border-2 border-amber-800/30 flex items-center justify-center mx-auto mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      style={{ boxShadow: 'inset 0 2px 6px rgba(120, 80, 40, 0.2)' }}
                    >
                      <item.Icon className="size-6 text-amber-900" />
                    </motion.div>
                    <h3 className="mb-2 text-amber-950 font-serif">{item.title}</h3>
                    <p className="text-amber-800/80 text-sm font-serif">{item.value}</p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Card className="relative overflow-hidden bg-[#ebe0d0] border-4 border-amber-900/20 shadow-lg"
                style={{ boxShadow: '0 8px 24px rgba(120, 80, 40, 0.2), inset 0 2px 4px rgba(255,255,255,0.4)' }}>
            {/* Corner ornaments */}
            <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-amber-800/40" />
            <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-amber-800/40" />
            <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-amber-800/40" />
            <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-amber-800/40" />

            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-amber-950 font-serif">Name</Label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Your name" 
                      required 
                      className="bg-amber-50/50 border-2 border-amber-800/20 focus:border-amber-800 font-serif" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-amber-950 font-serif">Email</Label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                      className="bg-amber-50/50 border-2 border-amber-800/20 focus:border-amber-800 font-serif" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-amber-950 font-serif">Subject</Label>
                  <Input 
                    id="subject" 
                    name="subject"
                    placeholder="Commission inquiry" 
                    required 
                    className="bg-amber-50/50 border-2 border-amber-800/20 focus:border-amber-800 font-serif" 
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-amber-950 font-serif">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message"
                    placeholder="Tell me about your vision for a custom artwork..." 
                    className="min-h-32 bg-amber-50/50 border-2 border-amber-800/20 focus:border-amber-800 font-serif" 
                    required 
                  />
                </div>
                
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 border-2 border-green-200 rounded text-green-800 font-serif text-sm text-center"
                  >
                    Your email client should open shortly. Thank you for your inquiry!
                  </motion.div>
                )}

                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-amber-900 hover:bg-amber-800 text-amber-50 font-serif shadow-lg border-2 border-amber-950/20 disabled:opacity-50"
                  >
                    {isSubmitting ? "Opening Email Client..." : "Send Inquiry"}
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12 text-amber-900/70 font-serif italic text-lg max-w-2xl mx-auto"
        >
          Currently accepting projects for administrative support, social media management, and custom digital design
        </motion.p>
      </div>
    </section>
  );
}