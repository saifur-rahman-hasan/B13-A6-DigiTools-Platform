import { FiPlay } from 'react-icons/fi';

export default function Banner() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="bg-white px-4 pb-14 pt-12 md:px-8 lg:pt-20">
      <div className="mx-auto grid w-full max-w-281.5 grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <div>
          <div className="mb-6 inline-flex items-center rounded-full bg-violet-100 px-4 py-2 text-[14px] font-semibold text-violet-600">
            New: AI-Powered Tools Available
          </div>
          <h1 className="max-w-140 text-balance text-5xl font-extrabold leading-[1.08] tracking-tight text-[#242b43] md:text-[76px]">
            Supercharge Your Digital Workflow
          </h1>
          <p className="mt-6 max-w-140 text-[16px] leading-relaxed text-slate-500 md:text-[17px]">
            Access premium AI tools, design assets, templates, and productivity software all in one place. Start creating faster today.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollToSection('products')}
              className="btn h-12.5 min-h-0 rounded-full border-none bg-violet-600 px-7 text-[15px] font-bold text-white hover:bg-violet-700"
            >
              Explore Products
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('pricing')}
              className="btn h-12.5 min-h-0 rounded-full border border-violet-300 bg-transparent px-7 text-[15px] font-bold text-violet-700 hover:bg-violet-50"
            >
              <span className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full border border-violet-400">
                <FiPlay className="h-3 w-3" />
              </span>
              Watch Demo
            </button>
          </div>
        </div>

        <div className="relative">
          <img
            src="/assets/banner.png"
            alt="AI digital workflow"
            className="h-140 w-full rounded-lg border border-[#ececf3] object-cover shadow-sm sm:h-140"
          />
        </div>
      </div>
    </section>
  );
}
