import { Users, Lightbulb, Target, Heart } from 'lucide-react'

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: 'Community First',
      description: 'We believe in the power of communities to create positive change and meaningful connections.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best tools for community builders and managers.',
    },
    {
      icon: Target,
      title: 'Reliability',
      description: 'We're committed to providing a stable, secure, and reliable platform you can trust.',
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature is designed with our users in mind, based on real feedback and needs.',
    },
  ]

  const team = [
    { name: 'Alex Johnson', role: 'CEO & Co-founder', image: '👨‍💼' },
    { name: 'Sarah Chen', role: 'CTO & Co-founder', image: '👩‍💼' },
    { name: 'Marcus Williams', role: 'Head of Product', image: '👨‍💼' },
    { name: 'Emma Rodriguez', role: 'Head of Community', image: '👩‍💼' },
  ]

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Hero */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About Clubedge
          </h1>
          <p className="text-lg text-muted-foreground">
            We're building the future of communities, one connection at a time.
          </p>
        </div>

        {/* Mission Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-4">
                At Clubedge, we believe that communities are the foundation of human connection and growth. Our mission is to provide the most intuitive, powerful, and accessible platform for building and managing thriving communities.
              </p>
              <p className="text-lg text-muted-foreground">
                Whether you're a small group of friends or a global organization, Clubedge gives you the tools you need to connect, collaborate, and create meaningful impact together.
              </p>
            </div>
            <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border flex items-center justify-center">
              <Users size={64} className="text-primary opacity-50" />
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="p-8 rounded-lg border border-border bg-card">
                  <Icon size={32} className="text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="max-w-5xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center p-6 rounded-lg border border-border bg-card">
                <div className="text-5xl mb-4">{member.image}</div>
                <h3 className="font-semibold mb-1">{member.name}</h3>
                <p className="text-muted-foreground text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Story</h2>
          <div className="space-y-6 text-muted-foreground">
            <p>
              Clubedge was founded in 2023 by a group of community enthusiasts who saw a gap in the market. While there were many tools for communication and collaboration, none seemed to be built specifically for communities—with their unique needs, dynamics, and growth patterns.
            </p>
            <p>
              We spent months talking to community leaders, managers, and members to understand their biggest challenges. What we learned was clear: they needed a platform that was powerful enough for large organizations but simple enough for small groups. A platform that prioritized member experience while giving admins the tools they needed to manage effectively.
            </p>
            <p>
              That vision led to Clubedge. Since our launch, we've helped thousands of communities connect millions of members, and we're just getting started. Every day, we're inspired by the amazing communities being built on our platform and the positive impact they're making in the world.
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto py-12 border-t border-b border-border">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Communities</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500K+</div>
            <p className="text-muted-foreground">Members</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <p className="text-muted-foreground">Countries</p>
          </div>
        </div>

        {/* Join Us */}
        <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            We're Hiring!
          </h2>
          <p className="text-muted-foreground mb-6">
            Join our team and help us build the future of communities.
          </p>
          <a
            href="https://clubedge.com/careers"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            View Open Positions
          </a>
        </div>
      </div>
    </div>
  )
}
