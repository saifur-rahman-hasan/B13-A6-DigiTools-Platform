import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Footer() {
  return (
    <>
      <section className="bg-gradient-to-r from-violet-700 via-violet-600 to-fuchsia-600 px-4 py-24 text-center text-white md:px-8">
        <div className="mx-auto w-full max-w-3xl">
          <h2 className="text-5xl font-extrabold tracking-tight">Ready To Transform Your Workflow?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-violet-100">
            Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="btn h-12 min-h-0 rounded-full border-none bg-white px-8 text-sm font-bold text-violet-700 hover:bg-violet-50">
              Explore Products
            </button>
            <button className="btn h-12 min-h-0 rounded-full border border-violet-200 bg-transparent px-8 text-sm font-bold text-white hover:bg-violet-500/30">
              View Pricing
            </button>
          </div>
          <p className="mt-8 text-sm text-violet-100">14-day free trial • No credit card required • Cancel anytime</p>
        </div>
      </section>

      <footer className="bg-[#081028] px-4 pb-10 pt-16 text-[#c9d0e7] md:px-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-5">
            <div className="md:col-span-2">
              <h3 className="text-6xl font-extrabold tracking-tight text-white">DigiTools</h3>
              <p className="mt-6 max-w-md text-lg leading-relaxed">
                Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
              </p>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">Product</h4>
              <ul className="mt-5 space-y-3 text-base">
                <li><a href="#" className="transition hover:text-white">Features</a></li>
                <li><a href="#" className="transition hover:text-white">Pricing</a></li>
                <li><a href="#" className="transition hover:text-white">Templates</a></li>
                <li><a href="#" className="transition hover:text-white">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">Company</h4>
              <ul className="mt-5 space-y-3 text-base">
                <li><a href="#" className="transition hover:text-white">About</a></li>
                <li><a href="#" className="transition hover:text-white">Blog</a></li>
                <li><a href="#" className="transition hover:text-white">Careers</a></li>
                <li><a href="#" className="transition hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">Resources</h4>
              <ul className="mt-5 space-y-3 text-base">
                <li><a href="#" className="transition hover:text-white">Documentation</a></li>
                <li><a href="#" className="transition hover:text-white">Help Center</a></li>
                <li><a href="#" className="transition hover:text-white">Community</a></li>
                <li><a href="#" className="transition hover:text-white">Contact</a></li>
              </ul>
              <h4 className="mt-8 text-2xl font-bold text-white">Social Links</h4>
              <div className="mt-4 flex items-center gap-3">
                <button className="btn btn-circle btn-sm border-none bg-white text-[#081028] hover:bg-slate-100">
                  <FaInstagram className="h-4 w-4" />
                </button>
                <button className="btn btn-circle btn-sm border-none bg-white text-[#081028] hover:bg-slate-100">
                  <FaFacebookF className="h-4 w-4" />
                </button>
                <button className="btn btn-circle btn-sm border-none bg-white text-[#081028] hover:bg-slate-100">
                  <FaXTwitter className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 text-sm text-[#95a0c3] md:flex md:items-center md:justify-between">
            <p>© 2026 Digitools. All rights reserved.</p>
            <div className="mt-3 flex gap-6 md:mt-0">
              <a href="#" className="transition hover:text-white">Privacy Policy</a>
              <a href="#" className="transition hover:text-white">Terms of Service</a>
              <a href="#" className="transition hover:text-white">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
