export default function Banner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Supercharge Your<br />Digital Workflow
          </h1>
          <p className="text-lg text-purple-100 leading-relaxed">
            Unlock the power of premium digital tools designed to streamline your productivity and elevate your creative process. From design to collaboration, we have everything you need.
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Get Started
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition">
              Learn More
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-sm bg-purple-500 rounded-lg p-6">
            {/* Placeholder for banner image */}
            <div className="bg-purple-400 rounded-lg aspect-square flex items-center justify-center">
              <svg className="w-32 h-32 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
