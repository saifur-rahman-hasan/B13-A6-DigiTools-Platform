import { FiMenu, FiShoppingCart } from 'react-icons/fi';

export default function Navbar({ cartCount }) {
  const links = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

  return (
    <header className="border-b border-[#ececf3] bg-white">
      <div className="navbar mx-auto h-21 w-full max-w-281.5 px-4 md:px-8">
        <div className="navbar-start gap-3">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle" aria-label="Open menu">
              <FiMenu className="h-5 w-5" />
            </div>
            <ul tabIndex={0} className="menu dropdown-content z-20 mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
              {links.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-semibold text-slate-700 hover:text-violet-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <a href="#" className="text-[2.5rem] font-extrabold leading-none tracking-tight text-violet-600 md:text-[3rem]">
            DigiTools
          </a>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-4 px-1">
            {links.map((item) => (
              <li key={item}>
                <a href={`#${item.toLowerCase()}`} className="text-[15px] font-semibold text-slate-700 transition hover:text-violet-600">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="navbar-end gap-2 sm:gap-5">
          <div className="dropdown dropdown-end">
            <button
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle border border-transparent transition-all duration-200 hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300"
            >
              <div className="indicator">
                <FiShoppingCart className="h-5 w-5 text-slate-700 transition-colors duration-200" />
                {cartCount > 0 ? <span className="badge badge-sm indicator-item border-none bg-red-500 text-white">{cartCount}</span> : null}
              </div>
            </button>
            <div tabIndex={0} className="card card-compact dropdown-content z-10 mt-3 w-52 bg-base-100 shadow">
              <div className="card-body">
                <span className="text-lg font-bold">{cartCount} Items</span>
                <span className="text-info">Browse your cart below</span>
              </div>
            </div>
          </div>

          <a href="#" className="hidden text-[15px] font-semibold text-slate-700 transition hover:text-violet-600 md:inline-block">
            Login
          </a>
          <button className="btn h-11 min-h-0 rounded-full border-none bg-violet-600 px-6 text-[15px] font-bold text-white hover:bg-violet-700">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
