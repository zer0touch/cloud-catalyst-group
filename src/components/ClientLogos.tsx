const clients = [
  { name: "Microsoft", initial: "M" },
  { name: "IBM", initial: "IBM" },
  { name: "Oracle", initial: "O" },
  { name: "SAP", initial: "SAP" },
  { name: "Cisco", initial: "C" },
  { name: "Dell", initial: "D" },
  { name: "VMware", initial: "V" },
  { name: "Salesforce", initial: "SF" },
  { name: "Adobe", initial: "A" },
  { name: "Splunk", initial: "S" },
];

const ClientLogos = () => {
  return (
    <section id="partners" className="py-20 bg-secondary/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Trusted Partners</span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold">
            Enterprise Clients We've Empowered
          </h2>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-slide-left">
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-32 h-20 rounded-xl glass flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                    <span className="font-display font-bold text-xl text-muted-foreground group-hover:text-foreground transition-colors">
                      {client.initial}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
