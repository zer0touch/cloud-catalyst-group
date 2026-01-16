import pythonLogo from "@/assets/logos/python.svg";
import golangLogo from "@/assets/logos/golang.svg";
import nodejsLogo from "@/assets/logos/nodejs.svg";
import javaLogo from "@/assets/logos/java.svg";
import mongodbLogo from "@/assets/logos/mongodb.svg";
import postgresqlLogo from "@/assets/logos/postgresql.svg";
import opentelemetryLogo from "@/assets/logos/opentelemetry.svg";
import grafanaLogo from "@/assets/logos/grafana.svg";
import datadogLogo from "@/assets/logos/datadog.svg";
import jenkinsLogo from "@/assets/logos/jenkins.svg";
import ansibleLogo from "@/assets/logos/ansible.svg";
import gitlabLogo from "@/assets/logos/gitlab.svg";
import redisLogo from "@/assets/logos/redis.svg";
import pineconeLogo from "@/assets/logos/pinecone.svg";
import qdrantLogo from "@/assets/logos/qdrant.svg";
import geminiLogo from "@/assets/logos/gemini.svg";
import claudeLogo from "@/assets/logos/claude.svg";
import openaiLogo from "@/assets/logos/openai.svg";

const technologies = [
  {
    name: "Python",
    category: "Languages",
    logo: pythonLogo,
  },
  {
    name: "Golang",
    category: "Languages",
    logo: golangLogo,
  },
  {
    name: "Node.js",
    category: "Languages",
    logo: nodejsLogo,
  },
  {
    name: "Java",
    category: "Languages",
    logo: javaLogo,
  },
  {
    name: "MongoDB",
    category: "Databases",
    logo: mongodbLogo,
  },
  {
    name: "PostgreSQL",
    category: "Databases",
    logo: postgresqlLogo,
  },
  {
    name: "OpenTelemetry",
    category: "Observability",
    logo: opentelemetryLogo,
  },
  {
    name: "Grafana",
    category: "Observability",
    logo: grafanaLogo,
  },
  {
    name: "Datadog",
    category: "Observability",
    logo: datadogLogo,
  },
  {
    name: "Jenkins",
    category: "CI/CD",
    logo: jenkinsLogo,
  },
  {
    name: "Ansible",
    category: "Automation",
    logo: ansibleLogo,
  },
  {
    name: "GitLab",
    category: "CI/CD",
    logo: gitlabLogo,
  },
  {
    name: "Redis",
    category: "Databases",
    logo: redisLogo,
  },
  {
    name: "Pinecone",
    category: "Vector DB",
    logo: pineconeLogo,
  },
  {
    name: "Qdrant",
    category: "Vector DB",
    logo: qdrantLogo,
  },
  {
    name: "Gemini",
    category: "AI/ML",
    logo: geminiLogo,
  },
  {
    name: "Claude",
    category: "AI/ML",
    logo: claudeLogo,
  },
  {
    name: "OpenAI",
    category: "AI/ML",
    logo: openaiLogo,
  },
];

const CoreTechnologies = () => {
  return (
    <section id="core-technologies" className="py-24 sm:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Core Technologies</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Technology Stack Expertise
          </h2>
          <p className="text-muted-foreground text-lg">
            We leverage cutting-edge technologies across the full stack to deliver robust, scalable solutions for our clients.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 text-center"
            >
              {/* Logo */}
              <div className="w-12 h-12 mx-auto mb-3 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <img
                  src={tech.logo}
                  alt={`${tech.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Name */}
              <h3 className="font-medium text-sm text-foreground">{tech.name}</h3>
              <p className="text-[10px] text-muted-foreground mt-1">{tech.category}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTechnologies;
