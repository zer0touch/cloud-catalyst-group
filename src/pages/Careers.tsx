import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Briefcase, Heart, Zap, Users, GraduationCap, ArrowRight } from "lucide-react";

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

  const openings = [
    {
      title: "Senior Cloud Architect",
      department: "Engineering",
      location: "London, UK (Remote)",
      type: "Full-time",
    },
    {
      title: "AI/ML Engineer",
      department: "AI & Data",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Security Analyst",
      department: "Cybersecurity",
      location: "London, UK (Hybrid)",
      type: "Full-time",
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
    },
    {
      title: "Solutions Architect",
      department: "Consulting",
      location: "Manchester, UK (Remote)",
      type: "Full-time",
    },
    {
      title: "Technical Project Manager",
      department: "Operations",
      location: "Remote",
      type: "Full-time",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Careers</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-muted-foreground text-lg mb-8">
              Help us shape the future of enterprise technology. We're looking for passionate individuals who thrive on solving complex challenges.
            </p>
            <Button size="lg">
              View Open Positions
            </Button>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Why Zer0touch?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're building something special—a company where exceptional talent meets meaningful work.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <Users className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Work with brilliant minds who are passionate about technology and committed to helping each other grow. Our flat structure means your ideas are heard and valued.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8">
                <Zap className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-display text-xl font-bold mb-3">Meaningful Impact</h3>
                <p className="text-muted-foreground">
                  Our work directly impacts how enterprises operate. You'll tackle real challenges for real companies, seeing the direct results of your contributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Benefits & Perks</h2>
              <p className="text-muted-foreground">
                We take care of our team so they can focus on doing their best work.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="positions" className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">
                Find your next opportunity with us.
              </p>
            </div>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors cursor-pointer group"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors hidden sm:block" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-muted-foreground mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button size="lg" variant="outline">
              Submit General Application
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Careers;