export default function Stats() {
  const stats = [
    {
      number: "500+",
      label: "Premium Tools",
      icon: "📦"
    },
    {
      number: "200+",
      label: "Happy Users",
      icon: "👥"
    },
    {
      number: "4.9",
      label: "Average Rating",
      icon: "⭐"
    }
  ];

  return (
    <section className="bg-purple-600 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{stat.icon}</div>
              <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
              <p className="text-purple-100 text-lg">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
