import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-8">
            Privacy Policy
          </h1>
          <p className="text-muted-foreground mb-12">Last updated: January 15, 2025</p>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Zer0touch is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services or visit our website.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Company information (company name, job title, industry)</li>
                <li>Technical data (IP address, browser type, device information)</li>
                <li>Usage data (pages visited, time spent on site, referring pages)</li>
                <li>Communication records (emails, support tickets, meeting notes)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Provide and maintain our services</li>
                <li>Communicate with you about projects and services</li>
                <li>Send you relevant updates and marketing communications</li>
                <li>Improve our website and service offerings</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">4. Data Security</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement industry-standard security measures to protect your personal information. This includes encryption, secure servers, access controls, and regular security audits. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">5. Data Sharing</h2>
              <p className="text-muted-foreground leading-relaxed">
                We do not sell your personal information. We may share your data with trusted third-party service providers who assist us in operating our business, subject to confidentiality agreements. We may also disclose information when required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website uses cookies and similar tracking technologies to enhance your browsing experience. You can control cookie preferences through your browser settings. Disabling cookies may affect some website functionality.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">8. Data Retention</h2>
              <p className="text-muted-foreground leading-relaxed">
                We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">9. Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>

            <section>
              <h2 className="font-display text-2xl font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy or wish to exercise your rights, please contact us at{" "}
                <a href="mailto:privacy@zer0touch.com" className="text-primary hover:underline">
                  privacy@zer0touch.com
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

export default PrivacyPolicy;
