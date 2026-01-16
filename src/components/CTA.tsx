import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Content */}
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Accelerate Your <span className="text-gradient">Digital Journey</span>?
          </h2>
          <p className="text-muted-foreground text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Let's discuss how our expertise in cloud, security, and AI can transform your organization. Schedule a free consultation with our senior architects.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Free Strategy Call
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/videos/Zer0touch_Company_Overview.mp4" target="_blank" rel="noopener noreferrer">
                Watch Capabilities Deck
              </a>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-muted-foreground">
            <a href="mailto:hello@zer0touch.com" className="hover:text-primary transition-colors">
              hello@zer0touch.com
            </a>
            <span className="hidden sm:block">•</span>
            <a href="tel:+442075505638" className="hover:text-primary transition-colors">
              +44 20 7550 5638
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
