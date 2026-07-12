import Link from 'next/link'
import { ArrowRight, Zap, Users, Rocket, Shield, BarChart, Workflow } from 'lucide-react'

export default function Home() {
  const features = [
    {
      icon: Users,
      title: 'Community First',
      description: 'Build and nurture communities around your interests and passions.',
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Work together seamlessly with instant updates and notifications.',
    },
    {
      icon: Rocket,
      title: 'Powerful Features',
      description: 'Access advanced tools built for modern community management.',
    },
    {
      icon: Shield,
      title: 'Secure & Private',
      description: 'Enterprise-grade security to protect your community data.',
    },
    {
      icon: BarChart,
      title: 'Analytics & Insights',
      description: 'Understand your community with detailed analytics and metrics.',
    },
    {
      icon: Workflow,
      title: 'Automation',
      description: 'Automate workflows and save time on repetitive tasks.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-sm font-medium">Introducing Clubedge</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Build Amazing Communities
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Connect, collaborate, and grow together. Clubedge is the modern platform for building engaged communities and meaningful connections.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/signup"
                className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                Get Started Free
                <ArrowRight size={20} />
              </Link>
              <Link
                href="/features"
                className="px-8 py-3 bg-secondary text-foreground rounded-lg font-semibold hover:bg-muted transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-border flex items-center justify-center">
              <div className="text-center">
                <Rocket size={48} className="mx-auto mb-4 text-primary opacity-50" />
                <p className="text-muted-foreground">Platform Dashboard Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Everything You Need
            </h2>
            <p className="text-lg text-muted-foreground">
              Powerful features designed to help you build, manage, and grow your community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-border bg-background hover:border-primary transition-colors"
                >
                  <Icon size={32} className="text-primary mb-4" />
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Your Community?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of communities already using Clubedge. Start free today.
            </p>
            <Link
              href="/signup"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get Started Free
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10K+</div>
              <p className="text-muted-foreground">Active Communities</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500K+</div>
              <p className="text-muted-foreground">Community Members</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">99.9%</div>
              <p className="text-muted-foreground">Uptime Guarantee</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
