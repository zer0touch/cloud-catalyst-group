import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    slug: "ai-transforming-enterprise-operations",
    title: "How AI is Transforming Enterprise Operations in 2024",
    excerpt: "Artificial intelligence is no longer a futuristic concept—it's reshaping how enterprises operate today. From automating routine tasks to providing predictive insights, AI is becoming the backbone of modern business operations.",
    author: "Sarah Chen",
    date: "January 10, 2024",
    readTime: "8 min read",
    category: "AI & Automation",
  },
  {
    id: 2,
    slug: "digital-transformation-roadmap",
    title: "Building a Successful Digital Transformation Roadmap",
    excerpt: "Digital transformation isn't just about adopting new technologies—it's about fundamentally reimagining how your organization creates value. Learn the key steps to building a roadmap that drives real results.",
    author: "Marcus Williams",
    date: "January 5, 2024",
    readTime: "10 min read",
    category: "Digital Transformation",
  },
  {
    id: 3,
    slug: "ai-cybersecurity-revolution",
    title: "The Role of AI in Modern Cybersecurity",
    excerpt: "As cyber threats become more sophisticated, traditional security measures are no longer sufficient. Discover how AI-powered security solutions are changing the game in threat detection and response.",
    author: "James Thompson",
    date: "December 28, 2023",
    readTime: "7 min read",
    category: "Cybersecurity",
  },
  {
    id: 4,
    slug: "cloud-migration-strategies",
    title: "Cloud Migration Strategies: Lessons from 100+ Enterprise Projects",
    excerpt: "After helping over 100 enterprises migrate to the cloud, we've learned what works and what doesn't. Here are the strategies that consistently lead to successful cloud transformations.",
    author: "Elena Rodriguez",
    date: "December 20, 2023",
    readTime: "12 min read",
    category: "Cloud Infrastructure",
  },
  {
    id: 5,
    slug: "future-of-work-ai-automation",
    title: "The Future of Work: How AI and Automation Are Reshaping Jobs",
    excerpt: "The rise of AI and automation is creating both challenges and opportunities for the workforce. Explore how organizations can prepare their teams for the jobs of tomorrow while maximizing the benefits of intelligent automation.",
    author: "Sarah Chen",
    date: "December 15, 2023",
    readTime: "9 min read",
    category: "AI & Automation",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">Blog</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Insights & Perspectives
            </h1>
            <p className="text-muted-foreground text-lg">
              Expert insights on digital transformation, AI, cloud infrastructure, and the future of enterprise technology.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <article
                key={post.id}
                className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors"
              >
                <div className="flex flex-wrap gap-4 items-center mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
                
                <h2 className="font-display text-2xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="flex items-center gap-1 text-primary font-medium text-sm hover:gap-2 transition-all"
                  >
                    Read more <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;