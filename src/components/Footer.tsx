const Footer = () => {
  const links = {
    services: [
      { name: "Cloud Infrastructure", href: "#services" },
      { name: "Cybersecurity", href: "#services" },
      { name: "AI Adoption", href: "#services" },
      { name: "Digital Transformation", href: "#services" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Case Studies", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Contact", href: "#" },
    ],
    resources: [
      { name: "Blog", href: "#" },
      { name: "Whitepapers", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Support", href: "#" },
    ],
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <span className="font-display font-bold text-xl text-foreground">Zer</span>
                <div className="w-7 h-7 rounded-full border-2 border-primary flex items-center justify-center mx-0.5">
                  <span className="font-display font-bold text-primary text-sm">0</span>
                </div>
                <span className="font-display font-bold text-xl text-foreground">touch</span>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Empowering enterprises with cutting-edge cloud, security, and AI solutions since 2015.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "GitHub"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-secondary/80 transition-colors"
                >
                  <span className="text-xs font-medium">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {links.services.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {links.company.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3">
              {links.resources.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© 2024 Zer0touch. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
