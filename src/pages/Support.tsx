import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, FileText, Phone, Mail, HelpCircle, BookOpen, Clock, CheckCircle } from "lucide-react";

const Support = () => {
  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      available: true,
    },
    {
      icon: FileText,
      title: "Submit a Ticket",
      description: "Create a support ticket for detailed assistance",
      action: "Create Ticket",
      available: true,
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with a support engineer",
      action: "+44 20 7550 5638",
      available: true,
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed email about your issue",
      action: "support@zer0touch.com",
      available: true,
    },
  ];

  const faqs = [
    {
      question: "What are your support hours?",
      answer: "Our support team is available 24/7 for critical issues. Standard support is available Monday-Friday, 9 AM - 6 PM GMT.",
    },
    {
      question: "How quickly can I expect a response?",
      answer: "Critical issues receive a response within 1 hour. Standard tickets are addressed within 4 business hours.",
    },
    {
      question: "Do you offer on-site support?",
      answer: "Yes, for enterprise clients we offer on-site support and dedicated account managers.",
    },
    {
      question: "How do I escalate an urgent issue?",
      answer: "Enterprise clients have direct access to our emergency hotline. Others can mark tickets as urgent for priority handling.",
    },
  ];

  const resources = [
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Comprehensive guides and API references",
    },
    {
      icon: HelpCircle,
      title: "Knowledge Base",
      description: "FAQs and troubleshooting guides",
    },
    {
      icon: FileText,
      title: "Release Notes",
      description: "Latest updates and changes",
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
              <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Support</span>
              <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                How Can We Help?
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Our dedicated support team is here to ensure your success.
              </p>
              <div className="max-w-xl mx-auto relative">
                <Input
                  placeholder="Search for help articles..."
                  className="h-14 pl-6 pr-32 text-lg"
                />
                <Button className="absolute right-2 top-1/2 -translate-y-1/2">
                  Search
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-bold mb-8 text-center"
              >
                Contact Support
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {supportOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <option.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{option.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4">{option.description}</p>
                    <span className="text-primary font-medium text-sm">{option.action}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* SLA Info */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-bold mb-8 text-center"
              >
                Service Level Agreement
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-3 gap-6"
              >
                <motion.div 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <Clock className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">&lt; 1 hour</div>
                  <div className="text-muted-foreground text-sm">Critical Issue Response</div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <CheckCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-muted-foreground text-sm">Uptime Guarantee</div>
                </motion.div>
                <motion.div 
                  variants={itemVariants}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <MessageCircle className="w-10 h-10 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-muted-foreground text-sm">Enterprise Support</div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-bold mb-8 text-center"
              >
                Frequently Asked Questions
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-4"
              >
                {faqs.map((faq, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <h3 className="font-semibold mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground text-sm">{faq.answer}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-bold mb-8 text-center"
              >
                Self-Service Resources
              </motion.h2>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid sm:grid-cols-3 gap-6"
              >
                {resources.map((resource, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <resource.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{resource.title}</h3>
                    <p className="text-muted-foreground text-sm">{resource.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Support;
