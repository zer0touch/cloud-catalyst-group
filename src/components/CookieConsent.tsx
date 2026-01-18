import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Cookie, Shield, BarChart3, X } from "lucide-react";

const CONSENT_KEY = "zer0touch_cookie_consent";

type ConsentStatus = "pending" | "accepted" | "declined";

const loadGoogleAnalytics = () => {
  // Only load if not already loaded
  if (document.querySelector('script[src*="googletagmanager"]')) return;

  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = "https://www.googletagmanager.com/gtag/js?id=G-Y5H4RN5M3L";
  document.head.appendChild(script1);

  const script2 = document.createElement("script");
  script2.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-Y5H4RN5M3L');
  `;
  document.head.appendChild(script2);
};

const CookieConsent = () => {
  const [consentStatus, setConsentStatus] = useState<ConsentStatus>("pending");
  const [showBanner, setShowBanner] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      setConsentStatus("accepted");
      loadGoogleAnalytics();
    } else if (stored === "declined") {
      setConsentStatus("declined");
    } else {
      // Small delay to prevent flash on page load
      const timer = setTimeout(() => setShowBanner(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    setConsentStatus("accepted");
    setShowBanner(false);
    loadGoogleAnalytics();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, "declined");
    setConsentStatus("declined");
    setShowBanner(false);
  };

  if (!showBanner || consentStatus !== "pending") return null;

  return (
    <>
      {/* Cookie Banner */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/95 backdrop-blur-sm border-t border-border shadow-lg animate-in slide-in-from-bottom-5 duration-300">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="flex items-start gap-3 flex-1">
              <Cookie className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div className="space-y-1">
                <h3 className="font-semibold text-foreground">Cookie Consent</h3>
                <p className="text-sm text-muted-foreground">
                  We use cookies and analytics to understand how you use our website and to improve your experience. 
                  Your data helps us optimize our services.{" "}
                  <button
                    onClick={() => setShowDetails(true)}
                    className="text-primary hover:underline font-medium"
                  >
                    Learn more
                  </button>
                </p>
              </div>
            </div>
            <div className="flex gap-3 w-full md:w-auto">
              <Button
                variant="outline"
                onClick={handleDecline}
                className="flex-1 md:flex-initial"
              >
                Decline
              </Button>
              <Button
                onClick={handleAccept}
                className="flex-1 md:flex-initial"
              >
                Accept All
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Details Dialog */}
      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              Cookie & Privacy Information
            </DialogTitle>
            <DialogDescription>
              Detailed information about the data we collect and how we use it
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-6 py-4">
            {/* What We Collect */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground flex items-center gap-2">
                <BarChart3 className="h-4 w-4 text-primary" />
                Analytics Data We Collect
              </h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li className="list-disc">
                  <strong>Page views and navigation:</strong> Which pages you visit and how you navigate through our site
                </li>
                <li className="list-disc">
                  <strong>Device information:</strong> Browser type, operating system, and screen resolution
                </li>
                <li className="list-disc">
                  <strong>Geographic location:</strong> Country and city-level location (not precise location)
                </li>
                <li className="list-disc">
                  <strong>Referral source:</strong> How you arrived at our website
                </li>
                <li className="list-disc">
                  <strong>Session duration:</strong> How long you spend on our site
                </li>
              </ul>
            </div>

            {/* Purpose */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Purpose of Data Collection</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li className="list-disc">
                  Improve website performance and user experience
                </li>
                <li className="list-disc">
                  Understand which content is most valuable to visitors
                </li>
                <li className="list-disc">
                  Identify and fix technical issues
                </li>
                <li className="list-disc">
                  Make informed decisions about website improvements
                </li>
              </ul>
            </div>

            {/* Third Parties */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Third-Party Services</h4>
              <p className="text-sm text-muted-foreground">
                We use <strong>Google Analytics</strong> to collect and process this data. Google may use this 
                information in accordance with their own privacy policy. No personally identifiable information 
                is shared with third parties for marketing purposes.
              </p>
            </div>

            {/* Your Rights */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Your Rights (GDPR)</h4>
              <ul className="text-sm text-muted-foreground space-y-2 ml-6">
                <li className="list-disc">
                  <strong>Right to decline:</strong> You can decline cookies and still use our website
                </li>
                <li className="list-disc">
                  <strong>Right to withdraw consent:</strong> Clear your browser cookies to reset your preference
                </li>
                <li className="list-disc">
                  <strong>Right to access:</strong> Contact us to request information about your data
                </li>
                <li className="list-disc">
                  <strong>Right to erasure:</strong> Contact us to request deletion of your data
                </li>
              </ul>
            </div>

            {/* Data Retention */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Data Retention</h4>
              <p className="text-sm text-muted-foreground">
                Analytics data is retained for 26 months in accordance with Google Analytics default settings. 
                Your cookie consent preference is stored locally in your browser.
              </p>
            </div>

            {/* Contact */}
            <div className="space-y-3">
              <h4 className="font-semibold text-foreground">Contact Us</h4>
              <p className="text-sm text-muted-foreground">
                For any questions about our privacy practices, please visit our{" "}
                <a href="/privacy" className="text-primary hover:underline">
                  Privacy Policy
                </a>{" "}
                or{" "}
                <a href="/contact" className="text-primary hover:underline">
                  contact us
                </a>
                .
              </p>
            </div>
          </div>

          <div className="flex gap-3 justify-end pt-4 border-t">
            <Button variant="outline" onClick={handleDecline}>
              Decline All
            </Button>
            <Button onClick={handleAccept}>
              Accept All
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default CookieConsent;
