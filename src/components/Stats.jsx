export default function Stats() {
  const stats = [
    {
      number: '50K+',
      label: 'Active Users',
    },
    {
      number: '200+',
      label: 'Premium Tools',
    },
    {
      number: '4.9',
      label: 'Rating',
    },
  ];

  return (
    <section className="bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-600 px-4 py-0 text-white md:px-8">
      <div className="mx-auto grid w-full max-w-[1126px] grid-cols-1 overflow-hidden md:grid-cols-3">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className={`flex min-h-[240px] flex-col items-center justify-center py-8 text-center ${index < stats.length - 1 ? 'border-b border-white/15 md:border-b-0 md:border-r md:border-white/25' : ''}`}
          >
            <p className="text-6xl font-extrabold tracking-tight md:text-[56px]">{stat.number}</p>
            <p className="mt-3 text-[16px] font-semibold text-white/90 md:text-[17px]">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
