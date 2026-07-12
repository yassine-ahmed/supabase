import Link from 'next/link'
import { Calendar, User, ArrowRight } from 'lucide-react'

export default function BlogPage() {
  const posts = [
    {
      id: 1,
      title: 'Building Engaged Communities in 2024',
      excerpt: 'Learn the best practices for building and maintaining engaged communities in the modern era.',
      author: 'Sarah Chen',
      date: 'March 15, 2024',
      readTime: '5 min read',
      category: 'Community Building',
      slug: 'building-engaged-communities',
    },
    {
      id: 2,
      title: 'The Future of Community Platforms',
      excerpt: 'Exploring emerging trends and technologies that are shaping the future of online communities.',
      author: 'Alex Rivera',
      date: 'March 10, 2024',
      readTime: '8 min read',
      category: 'Trends',
      slug: 'future-of-community-platforms',
    },
    {
      id: 3,
      title: '10 Features Your Community Needs',
      excerpt: 'Essential features every modern community platform should have to ensure member satisfaction.',
      author: 'Jordan Martinez',
      date: 'March 5, 2024',
      readTime: '6 min read',
      category: 'Features',
      slug: '10-features-community-needs',
    },
    {
      id: 4,
      title: 'Scaling Your Community to 10K Members',
      excerpt: 'Practical tips and strategies for scaling your community while maintaining quality interactions.',
      author: 'Emma Wilson',
      date: 'February 28, 2024',
      readTime: '7 min read',
      category: 'Growth',
      slug: 'scaling-community-10k-members',
    },
    {
      id: 5,
      title: 'Community Moderation Best Practices',
      excerpt: 'How to establish and maintain a healthy, welcoming community culture through effective moderation.',
      author: 'David Kim',
      date: 'February 20, 2024',
      readTime: '9 min read',
      category: 'Moderation',
      slug: 'community-moderation-best-practices',
    },
    {
      id: 6,
      title: 'Member Retention Strategies That Work',
      excerpt: 'Data-driven approaches to keep members engaged and reduce churn in your community.',
      author: 'Lisa Anderson',
      date: 'February 15, 2024',
      readTime: '6 min read',
      category: 'Retention',
      slug: 'member-retention-strategies',
    },
  ]

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Clubedge Blog
          </h1>
          <p className="text-lg text-muted-foreground">
            Tips, insights, and stories about building amazing communities.
          </p>
        </div>

        {/* Featured Post */}
        {posts.length > 0 && (
          <div className="max-w-4xl mx-auto mb-16">
            <div className="rounded-lg overflow-hidden border border-border bg-card hover:border-primary transition-colors">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-muted-foreground">Featured Article</span>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {posts[0].category}
                  </span>
                </div>
                <h2 className="text-3xl font-bold mb-4">{posts[0].title}</h2>
                <p className="text-muted-foreground mb-6">{posts[0].excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <User size={16} />
                    {posts[0].author}
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    {posts[0].date}
                  </div>
                  <span>{posts[0].readTime}</span>
                </div>
                <Link
                  href={`/blog/${posts[0].slug}`}
                  className="inline-flex items-center gap-2 text-primary hover:gap-3 transition-all font-semibold"
                >
                  Read Article
                  <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Posts Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="rounded-lg border border-border bg-card hover:border-primary hover:shadow-lg transition-all p-6 group"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                    {post.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                  <span>{post.author}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.date}</span>
                  <span className="hidden sm:inline">•</span>
                  <span>{post.readTime}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Newsletter CTA */}
        <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-muted-foreground mb-6">
            Get the latest community building tips and insights delivered to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
