import rackspaceLogo from "@/assets/logos/rackspace.svg";
import hsbcLogo from "@/assets/logos/hsbc.svg";
import lloydsLogo from "@/assets/logos/lloyds.svg";
import nyseLogo from "@/assets/logos/nyse.svg";
import aimiaLogo from "@/assets/logos/aimia.svg";

const clients = [
  { name: "Rackspace", logo: rackspaceLogo },
  { name: "HSBC", logo: hsbcLogo },
  { name: "Lloyds Bank", logo: lloydsLogo },
  { name: "New York Stock Exchange", logo: nyseLogo },
  { name: "Aimia", logo: aimiaLogo },
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
              {[...clients, ...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-8 group"
                >
                  <div className="w-40 h-24 rounded-xl glass flex items-center justify-center p-4 transition-all duration-300 group-hover:border-primary/50 group-hover:shadow-glow">
                    <img 
                      src={client.logo} 
                      alt={`${client.name} logo`}
                      className="max-w-full max-h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
                    />
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
