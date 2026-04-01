export default function Navbar({ cartCount }) {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-purple-600">DigiTools</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex gap-8">
            <a href="#home" className="text-gray-700 hover:text-purple-600 transition">Home</a>
            <a href="#features" className="text-gray-700 hover:text-purple-600 transition">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-purple-600 transition">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Contact</a>
          </div>

          {/* Cart Icon */}
          <div className="relative">
            <button className="relative p-2">
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
