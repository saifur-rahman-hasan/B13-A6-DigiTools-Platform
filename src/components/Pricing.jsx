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
      <div className="mx-auto w-full max-w-7xl">
        <h2 className="text-center text-[2.7rem] font-extrabold tracking-tight text-[#121a2f] md:text-[4rem]">
          Simple, Transparent Pricing
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-[17px] leading-relaxed text-slate-500">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricingTiers.map((tier) => (
            <article
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-[0_1px_0_rgba(15,23,42,0.03)] ${tier.highlighted ? 'border-violet-600 bg-linear-to-b from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-200/50' : 'border-[#ececf3] bg-white text-[#121a2f]'}`}
            >
              {tier.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#ffe9aa] px-4 py-1.5 text-sm font-medium text-[#c96c00] shadow-sm">
                  {tier.badge}
                </span>
              )}
              <h3 className={`text-[2.15rem] font-bold tracking-tight ${tier.highlighted ? 'text-white' : 'text-[#121a2f]'}`}>
                {tier.name}
              </h3>
              <p className={`mt-2 text-[1.05rem] ${tier.highlighted ? 'text-violet-100/90' : 'text-slate-500'}`}>{tier.description}</p>

              <p className={`mt-8 flex items-end font-extrabold leading-none ${tier.highlighted ? 'text-white' : 'text-[#121a2f]'}`}>
                <span className="text-[3.4rem] tracking-tight md:text-[4rem]">
                  {tier.price}
                </span>
                {tier.price}
                <span className={`ml-1 pb-1 text-[1.3rem] font-medium ${tier.highlighted ? 'text-violet-100/90' : 'text-slate-400'}`}>{tier.period}</span>
              </p>

              <ul className="mt-8 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className={`flex items-center gap-3 text-[1.02rem] ${tier.highlighted ? 'text-violet-50' : 'text-slate-500'}`}>
                    <MdCheck className={`h-5 w-5 shrink-0 ${tier.highlighted ? 'text-white' : 'text-emerald-500'}`} />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`btn mt-10 h-14 min-h-0 w-full rounded-full border-none px-5 text-[1.02rem] font-bold ${tier.highlighted ? 'bg-white text-violet-700 hover:bg-violet-50' : 'bg-linear-to-r from-violet-600 to-fuchsia-600 text-white hover:from-violet-700 hover:to-fuchsia-700'}`}
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
