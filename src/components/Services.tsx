import { Cloud, Shield, Brain, Layers } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Design, migrate, and optimize your cloud architecture across AWS, Azure, and Google Cloud. Build scalable, resilient systems that grow with your business.",
    features: ["Multi-cloud Strategy", "Cost Optimization", "Infrastructure as Code", "24/7 Monitoring"],
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Protect your digital assets with enterprise-grade security solutions. From threat detection to compliance, we secure every layer of your technology stack.",
    features: ["Zero Trust Architecture", "SOC 2 Compliance", "Penetration Testing", "Incident Response"],
  },
  {
    icon: Brain,
    title: "AI Adoption",
    description: "Harness the power of artificial intelligence and machine learning. We help you identify opportunities, build models, and integrate AI into your workflows.",
    features: ["LLM Integration", "Predictive Analytics", "Process Automation", "Custom AI Solutions"],
  },
  {
    icon: Layers,
    title: "Digital Transformation",
    description: "Modernize your entire technology ecosystem. We guide your organization through comprehensive digital transformation initiatives.",
    features: ["Legacy Modernization", "DevOps Culture", "Agile Transformation", "Change Management"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 sm:py-32 bg-background relative">
      {/* Section Header */}
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Our Expertise</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            End-to-End Technology Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From strategy to implementation, we deliver comprehensive technology solutions that drive measurable business outcomes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-card-gradient border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-hover"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl sm:text-2xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="grid grid-cols-2 gap-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
