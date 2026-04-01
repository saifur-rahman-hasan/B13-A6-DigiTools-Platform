import { FiBox, FiUser } from 'react-icons/fi';
import { MdOutlineRocketLaunch } from 'react-icons/md';

export default function Steps() {
  const steps = [
    {
      number: 1,
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: FiUser,
    },
    {
      number: 2,
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: FiBox,
    },
    {
      number: 3,
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: MdOutlineRocketLaunch,
    },
  ];

  return (
    <section id="features" className="bg-white px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">Get Started In 3 Steps</h2>
        <p className="mx-auto mt-4 max-w-xl text-center text-base text-slate-500">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          {steps.map((step) => {
            const IconComponent = step.icon;
            return (
              <article key={step.number} className="relative rounded-2xl border border-[#e7e5f1] bg-[#fcfcff] p-8 text-center shadow-sm">
                <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-xs font-extrabold text-white">
                  {String(step.number).padStart(2, '0')}
                </span>
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                  <IconComponent className="h-10 w-10" />
                </div>
                <h3 className="mt-8 text-3xl font-extrabold text-slate-900">{step.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">{step.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
