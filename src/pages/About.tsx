import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Users, Target, Award, Lightbulb } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're committed to empowering businesses with technology that drives real, measurable results.",
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve, continuously exploring new technologies to deliver cutting-edge solutions.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We build lasting relationships, working alongside our clients as true partners in their success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We hold ourselves to the highest standards, delivering quality in everything we do.",
    },
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "Chief Executive Officer",
      bio: "20+ years in enterprise technology and digital transformation.",
    },
    {
      name: "Marcus Williams",
      role: "Chief Technology Officer",
      bio: "Former Principal Engineer at leading cloud platforms.",
    },
    {
      name: "Elena Rodriguez",
      role: "VP of Engineering",
      bio: "Expert in distributed systems and AI/ML infrastructure.",
    },
    {
      name: "James Thompson",
      role: "Head of Security",
      bio: "15+ years in cybersecurity across financial services.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center"
            >
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">About Us</span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Pioneering Digital Excellence
              </h1>
              <p className="text-muted-foreground text-lg">
                Since 2015, we've been helping enterprises navigate the complex landscape of digital transformation.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="font-display text-3xl font-bold mb-6">Our Story</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>
                      Zer0touch was founded with a clear vision: to bridge the gap between cutting-edge technology and practical business outcomes. We saw enterprises struggling to keep pace with rapid technological change and knew there had to be a better way.
                    </p>
                    <p>
                      Today, we've grown into a trusted partner for businesses across the globe, helping them harness the power of cloud infrastructure, AI, and automation to stay competitive in an ever-evolving digital landscape.
                    </p>
                    <p>
                      Our name reflects our philosophy—delivering seamless, frictionless technology experiences that just work, allowing our clients to focus on what matters most: their business.
                    </p>
                  </div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl p-8 space-y-6"
                >
                  <div>
                    <div className="text-4xl font-bold text-primary">200+</div>
                    <div className="text-muted-foreground">Enterprise Clients</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">50+</div>
                    <div className="text-muted-foreground">Countries Served</div>
                  </div>
                  <div>
                    <div className="text-4xl font-bold text-primary">99.9%</div>
                    <div className="text-muted-foreground">Client Retention</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="font-display text-3xl font-bold mb-4">Our Values</h2>
              <p className="text-muted-foreground">
                The principles that guide everything we do.
              </p>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mb-12"
            >
              <h2 className="font-display text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground">
                Meet the experts driving innovation at Zer0touch.
              </p>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
            >
              {team.map((member, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg">{member.name}</h3>
                  <p className="text-primary text-sm mb-2">{member.role}</p>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
