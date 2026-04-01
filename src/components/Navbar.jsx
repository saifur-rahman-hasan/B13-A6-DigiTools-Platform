import { FiMenu, FiShoppingCart } from 'react-icons/fi';

export default function Navbar({ cartCount }) {
  const links = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

  return (
    <header className="border-b border-[#ececf3] bg-white">
      <nav className="mx-auto flex h-[84px] w-full max-w-[1126px] items-center justify-between px-4 md:px-8">
        <div className="flex items-center gap-3">
          <div className="dropdown lg:hidden">
            <button tabIndex={0} className="btn btn-ghost btn-circle" aria-label="Open menu">
              <FiMenu className="h-5 w-5" />
            </button>
            <ul tabIndex={0} className="menu dropdown-content z-20 mt-3 w-52 rounded-2xl border border-[#ecebfa] bg-white p-2 shadow-xl">
              {links.map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="font-semibold text-slate-700 hover:text-violet-600">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#" className="text-[3.1rem] font-extrabold leading-none tracking-tight text-violet-600 md:text-[3.35rem]">
            DigiTools
          </a>
        </div>

        <ul className="hidden items-center gap-9 lg:flex">
          {links.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} className="text-[15px] font-semibold text-slate-700 transition hover:text-violet-600">
                {item}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-5">
          <div className="indicator flex items-center gap-x-2">
            {cartCount > 0 ? <span className="badge badge-soft badge-primary">{cartCount}</span> : null}
            <FiShoppingCart className="size-5 text-slate-700" />
          </div>
          <a href="#" className="hidden text-[15px] font-semibold text-slate-700 transition hover:text-violet-600 md:inline-block">
            Login
          </a>
          <button className="btn h-11 min-h-0 rounded-full border-none bg-violet-600 px-6 text-[15px] font-bold text-white hover:bg-violet-700">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}
