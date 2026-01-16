import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { blogPosts } from "@/data/blogPosts";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .slice(0, 2);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Header />

        {/* Article Header */}
        <section className="pt-32 pb-8 bg-gradient-to-b from-muted/50 to-background">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Blog
                </Link>

                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                  {post.category}
                </span>

                <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
                  {post.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <User className="w-5 h-5 text-primary" />
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div className="prose prose-invert prose-lg max-w-none">
                <div className="text-lg text-muted-foreground mb-8 border-l-4 border-primary pl-6 italic">
                  {post.excerpt}
                </div>
                
                <div 
                  className="
                    [&>h2]:font-display [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-foreground
                    [&>h3]:font-display [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-foreground
                    [&>h4]:font-display [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:mt-6 [&>h4]:mb-2 [&>h4]:text-foreground
                    [&>p]:text-muted-foreground [&>p]:mb-4 [&>p]:leading-relaxed
                    [&>ul]:text-muted-foreground [&>ul]:mb-4 [&>ul]:pl-6 [&>ul]:list-disc
                    [&>ol]:text-muted-foreground [&>ol]:mb-4 [&>ol]:pl-6 [&>ol]:list-decimal
                    [&>li]:mb-2
                    [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-6 [&>blockquote]:italic [&>blockquote]:text-muted-foreground [&>blockquote]:my-6
                    [&>strong]:text-foreground [&>strong]:font-semibold
                    [&_strong]:text-foreground [&_strong]:font-semibold
                  "
                  dangerouslySetInnerHTML={{ 
                    __html: post.content
                      .replace(/^## (.+)$/gm, '<h2>$1</h2>')
                      .replace(/^### (.+)$/gm, '<h3>$1</h3>')
                      .replace(/^#### (.+)$/gm, '<h4>$1</h4>')
                      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
                      .replace(/^> (.+)$/gm, '<blockquote>$1</blockquote>')
                      .replace(/^- (.+)$/gm, '<li>$1</li>')
                      .replace(/^(\d+)\. (.+)$/gm, '<li>$2</li>')
                      .replace(/(<li>.*<\/li>\n?)+/g, (match) => {
                        if (match.includes('1.')) return `<ol>${match}</ol>`;
                        return `<ul>${match}</ul>`;
                      })
                      .replace(/\n\n/g, '</p><p>')
                      .replace(/^(?!<[hublop])/gm, '<p>')
                      .replace(/(?<![>])$/gm, '</p>')
                  }} 
                />
              </div>
            </motion.article>
          </div>
        </section>

        {/* Related Posts */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="font-display text-2xl font-bold mb-8">Related Articles</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost, index) => (
                  <motion.article
                    key={relatedPost.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors"
                  >
                    <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-display text-lg font-semibold mt-3 mb-2 hover:text-primary transition-colors">
                      <Link to={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </motion.article>
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/blog">
                  <Button variant="outline">View All Articles</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default BlogPost;
