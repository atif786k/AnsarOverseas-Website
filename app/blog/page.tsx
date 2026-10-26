import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Glass Manufacturing Insights & Buyer Guides",
  description:
    "Sourcing guides for B2B glass buyers: choosing a manufacturer in India, custom vs standard products, and why Firozabad leads the glass industry.",
  path: "/blog",
  image: "/og-blog.jpg",
  imageAlt: "Quality inspection at the Ansar Overseas glass factory",
});

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="inline-block border border-accent/40 px-4 py-1.5">
              <span className="text-xs font-mono tracking-widest text-accent uppercase">
                Insights & Guides
              </span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-light leading-tight text-balance">
              Glass manufacturing{" "}
              <span className="font-semibold italic">insights</span>
            </h1>
            <p className="text-lg font-mono text-muted-foreground leading-relaxed">
              Industry knowledge, buyer guides, and expert articles to help you
              make informed sourcing decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="pb-20 lg:pb-32">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-4xl mx-auto space-y-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="block group border border-border hover:border-accent/50 p-8 transition-colors"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-xs font-mono text-accent tracking-widest uppercase">
                    {post.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-2xl font-light mb-3 group-hover:text-accent transition-colors">
                  {post.title}
                </h2>
                <p className="text-sm font-mono text-muted-foreground leading-relaxed mb-4">
                  {post.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-mono text-accent">
                  Read article
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
