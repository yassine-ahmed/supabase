import { Check } from 'lucide-react'

export default function FeaturesPage() {
  const featureSets = [
    {
      title: 'Community Management',
      description: 'Complete tools for managing and growing your community.',
      features: [
        'Unlimited member profiles',
        'Role-based permissions',
        'Moderation tools',
        'Member activity tracking',
        'Community analytics',
        'Member verification',
      ],
    },
    {
      title: 'Communication & Collaboration',
      description: 'Stay connected with real-time communication features.',
      features: [
        'Direct messaging',
        'Group channels',
        'Threaded discussions',
        'Voice & video chat',
        'File sharing',
        'Notifications & alerts',
      ],
    },
    {
      title: 'Content & Events',
      description: 'Create and manage engaging content and events.',
      features: [
        'Event scheduling',
        'Calendar integration',
        'Content library',
        'Resource sharing',
        'Announcement boards',
        'Newsletter integration',
      ],
    },
    {
      title: 'Analytics & Insights',
      description: 'Data-driven decisions with comprehensive analytics.',
      features: [
        'Engagement metrics',
        'Member growth tracking',
        'Activity analytics',
        'Custom reports',
        'Export data',
        'API access',
      ],
    },
  ]

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powerful Features for Modern Communities
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to build, manage, and grow your community at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {featureSets.map((set, index) => (
            <div key={index} className="p-8 rounded-lg border border-border bg-card">
              <h2 className="text-2xl font-bold mb-2">{set.title}</h2>
              <p className="text-muted-foreground mb-6">{set.description}</p>
              <ul className="space-y-3">
                {set.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4">Feature</th>
                  <th className="text-center py-4 px-4">Starter</th>
                  <th className="text-center py-4 px-4">Professional</th>
                  <th className="text-center py-4 px-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Basic Communities',
                  'Up to 1,000 Members',
                  'Community Analytics',
                  'Email Support',
                  'Custom Branding',
                  'Advanced Moderation',
                  'API Access',
                  'Priority Support',
                  'SLA Guarantee',
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-4 px-4">{feature}</td>
                    <td className="text-center py-4 px-4">
                      {[true, false, false, false, false, false, false, false, false][index] && (
                        <Check size={20} className="text-primary mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      {[true, true, true, true, true, true, false, false, false][index] && (
                        <Check size={20} className="text-primary mx-auto" />
                      )}
                    </td>
                    <td className="text-center py-4 px-4">
                      <Check size={20} className="text-primary mx-auto" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
