import { MdCheck } from 'react-icons/md';

export default function Pricing() {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$0',
      period: '/Month',
      description: 'Perfect for getting started',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      button: 'Get Started Free',
    },
    {
      name: 'Pro',
      price: '$29',
      period: '/Month',
      description: 'Best for professionals',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      button: 'Start Pro Trial',
      highlighted: true,
      badge: 'Most Popular',
    },
    {
      name: 'Enterprise',
      price: '$99',
      period: '/Month',
      description: 'For teams and businesses',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      button: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="bg-[#f7f8fb] px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">Simple, Transparent Pricing</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-slate-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm ${tier.highlighted ? 'border-violet-500 bg-gradient-to-b from-violet-600 to-violet-700 text-white' : 'border-[#e5e3f1] bg-white'}`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-amber-200 px-3 py-1 text-xs font-bold text-amber-800">
                  {tier.badge}
                </span>
              )}
              <h3 className="text-3xl font-extrabold">{tier.name}</h3>
              <p className={`mt-2 text-sm ${tier.highlighted ? 'text-violet-100' : 'text-slate-500'}`}>{tier.description}</p>

              <p className="mt-5 text-5xl font-extrabold leading-none">
                {tier.price}
                <span className={`ml-1 text-xl font-medium ${tier.highlighted ? 'text-violet-100' : 'text-slate-400'}`}>{tier.period}</span>
              </p>

              <ul className="mt-6 space-y-2.5">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-2 text-sm font-medium ${tier.highlighted ? 'text-violet-100' : 'text-slate-500'}`}>
                    <MdCheck className={`h-4 w-4 ${tier.highlighted ? 'text-white' : 'text-emerald-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn mt-8 h-11 min-h-0 w-full rounded-full border-none px-5 text-sm font-bold ${tier.highlighted ? 'bg-white text-violet-700 hover:bg-violet-50' : 'bg-violet-600 text-white hover:bg-violet-700'}`}
              >
                {tier.button}
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
