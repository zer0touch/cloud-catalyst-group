import awsLogo from "@/assets/logos/aws.svg";
import azureLogo from "@/assets/logos/azure.svg";
import gcpLogo from "@/assets/logos/gcp.svg";
import kubernetesLogo from "@/assets/logos/kubernetes.svg";
import terraformLogo from "@/assets/logos/terraform.svg";
import isoLogo from "@/assets/logos/iso.svg";

const certifications = [
  {
    name: "AWS",
    fullName: "Amazon Web Services",
    level: "Advanced Partner",
    logo: awsLogo,
  },
  {
    name: "Azure",
    fullName: "Microsoft Azure",
    level: "Gold Partner",
    logo: azureLogo,
  },
  {
    name: "GCP",
    fullName: "Google Cloud",
    level: "Premier Partner",
    logo: gcpLogo,
  },
  {
    name: "K8s",
    fullName: "Kubernetes",
    level: "Certified Provider",
    logo: kubernetesLogo,
  },
  {
    name: "TF",
    fullName: "Terraform",
    level: "Certified Partner",
    logo: terraformLogo,
  },
  {
    name: "ISO",
    fullName: "ISO 27001",
    level: "Certified",
    logo: isoLogo,
  },
];

const Certifications = () => {
  return (
    <section id="certifications" className="py-24 sm:py-32 bg-background relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Certifications</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Industry-Leading Credentials
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team holds the highest certifications from major cloud providers and technology platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              {/* Logo */}
              <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img 
                  src={cert.logo} 
                  alt={`${cert.fullName} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="font-display font-semibold text-foreground mb-1">{cert.fullName}</h3>
              <p className="text-xs text-muted-foreground">{cert.level}</p>
            </div>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>SOC 2 Type II Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>HIPAA Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>PCI DSS Certified</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
