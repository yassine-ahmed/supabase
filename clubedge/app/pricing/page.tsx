import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'

export default function PricingPage() {
  const plans = [
    {
      name: 'Starter',
      price: 29,
      description: 'Perfect for getting started',
      features: [
        'Up to 1,000 members',
        '5 communities',
        'Basic analytics',
        'Email support',
        '1 GB file storage',
        'Community branding',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: 99,
      description: 'For growing communities',
      features: [
        'Unlimited members',
        'Unlimited communities',
        'Advanced analytics',
        'Priority email support',
        '100 GB file storage',
        'Custom domain',
        'API access',
        'Advanced moderation tools',
      ],
      cta: 'Start Free Trial',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: null,
      description: 'Custom solutions',
      features: [
        'Everything in Professional',
        'Custom integrations',
        '24/7 phone support',
        'Unlimited storage',
        'Dedicated account manager',
        'SLA guarantee',
        'Custom features',
        'On-premise option',
      ],
      cta: 'Contact Sales',
      highlighted: false,
    },
  ]

  return (
    <div className="min-h-screen py-20 md:py-32">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your community. All plans include a 14-day free trial.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-lg border transition-all ${
                plan.highlighted
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 ring-2 ring-primary'
                  : 'border-border bg-card hover:border-primary'
              } p-8 flex flex-col`}
            >
              {plan.highlighted && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4 w-fit">
                  Most Popular
                </div>
              )}

              <h2 className="text-2xl font-bold mb-2">{plan.name}</h2>
              <p className="text-muted-foreground mb-6">{plan.description}</p>

              <div className="mb-6">
                {plan.price !== null ? (
                  <div>
                    <span className="text-4xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </div>
                ) : (
                  <div className="text-2xl font-bold">Custom Pricing</div>
                )}
              </div>

              <Link
                href="/signup"
                className={`w-full py-3 rounded-lg font-semibold transition-all mb-8 ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:opacity-90'
                    : 'bg-secondary text-foreground hover:bg-muted'
                }`}
              >
                {plan.cta}
              </Link>

              <ul className="space-y-3 flex-1">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check size={20} className="text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I change plans anytime?',
                answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes take effect on your next billing cycle.',
              },
              {
                question: 'Is there a free trial?',
                answer: 'Yes, all plans include a 14-day free trial with full access to features. No credit card required.',
              },
              {
                question: 'What payment methods do you accept?',
                answer: 'We accept all major credit cards, PayPal, and bank transfers for Enterprise customers.',
              },
              {
                question: 'Do you offer discounts for annual billing?',
                answer: 'Yes, switch to annual billing to get 20% off the monthly price.',
              },
            ].map((faq, index) => (
              <div key={index} className="border border-border rounded-lg p-6 bg-card">
                <h3 className="font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto mt-20 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 rounded-2xl p-12 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Join thousands of communities already using Clubedge.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Start Your Free Trial
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  )
}
