import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Terms of Service
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: January 15, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Zer0touch's services, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Services Description</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zer0touch provides cloud infrastructure, cybersecurity, AI adoption, and digital transformation consulting services. Our services are designed to help enterprises modernize their technology infrastructure and operations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to provide accurate information when engaging our services, maintain the confidentiality of any credentials provided, and use our services in compliance with all applicable laws and regulations.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content, methodologies, and deliverables created by Zer0touch remain our intellectual property unless explicitly transferred through a written agreement. Client data and pre-existing materials remain the property of the client.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Confidentiality</h2>
              <p className="text-muted-foreground leading-relaxed">
                We are committed to maintaining the confidentiality of all client information. We will not disclose any confidential information to third parties without prior written consent, except as required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zer0touch shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services. Our total liability shall not exceed the fees paid for the specific services giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                Either party may terminate the service agreement with written notice as specified in individual contracts. Upon termination, all outstanding fees become immediately due and payable.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which Zer0touch operates, without regard to conflict of law principles.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                For questions regarding these Terms of Service, please contact us at{" "}
                <a href="mailto:legal@zer0touch.com" className="text-primary hover:underline">
                  legal@zer0touch.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
