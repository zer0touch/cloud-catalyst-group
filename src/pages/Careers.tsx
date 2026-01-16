import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Clock, Heart, Zap, Users, GraduationCap, Mail } from "lucide-react";

const Careers = () => {
  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive medical, dental, and vision coverage for you and your family.",
    },
    {
      icon: Clock,
      title: "Flexible Working",
      description: "Remote-first culture with flexible hours to support work-life balance.",
    },
    {
      icon: GraduationCap,
      title: "Learning Budget",
      description: "Annual learning and development budget for courses, conferences, and certifications.",
    },
    {
      icon: Zap,
      title: "Latest Tech",
      description: "Top-of-the-line equipment and tools to help you do your best work.",
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
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Careers</span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Help us shape the future of enterprise technology. We're looking for passionate individuals who thrive on solving complex challenges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl font-bold mb-4">Why Zer0touch?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  We're building something special—a company where exceptional talent meets meaningful work.
                </p>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-8"
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
                >
                  <Users className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">Collaborative Culture</h3>
                  <p className="text-muted-foreground">
                    Work with brilliant minds who are passionate about technology and committed to helping each other grow. Our flat structure means your ideas are heard and valued.
                  </p>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
                >
                  <Zap className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold mb-3">Meaningful Impact</h3>
                  <p className="text-muted-foreground">
                    Our work directly impacts how enterprises operate. You'll tackle real challenges for real companies, seeing the direct results of your contributions.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-12"
              >
                <h2 className="font-display text-3xl font-bold mb-4">Benefits & Perks</h2>
                <p className="text-muted-foreground">
                  We take care of our team so they can focus on doing their best work.
                </p>
              </motion.div>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/30 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground text-sm">{benefit.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* No Open Positions */}
        <section id="positions" className="py-16">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl font-bold mb-4">Open Positions</h2>
              <div className="bg-card border border-border rounded-2xl p-12 mt-8">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-3">No Open Positions</h3>
                <p className="text-muted-foreground mb-6">
                  We don't have any open positions at the moment, but we're always interested in hearing from talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <Button size="lg" asChild>
                  <a href="mailto:careers@zer0touch.com" className="inline-flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Send Your Resume
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl mx-auto text-center"
            >
              <h2 className="font-display text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-muted-foreground mb-8">
                Follow us on LinkedIn to be the first to know when new positions open up.
              </p>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://www.linkedin.com/company/zer0touch" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Follow Us on LinkedIn
                </a>
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Careers;
