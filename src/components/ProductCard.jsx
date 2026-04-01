import { FiCheck } from 'react-icons/fi';

export default function ProductCard({ product, onAddToCart, isInCart }) {

  const badgeStyles = {
    'Best Seller': 'bg-amber-100 text-amber-700',
    Popular: 'bg-violet-100 text-violet-700',
    New: 'bg-emerald-100 text-emerald-700',
  };

  return (
    <article className="rounded-2xl border border-[#e5e3f1] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 flex items-start justify-between gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-[#f4f2ff]">
          <img src={product.image} alt={product.name} className="h-full w-full object-contain p-2" />
        </div>
        <span className={`rounded-full px-3 py-1 text-xs font-bold ${badgeStyles[product.tagType]}`}>{product.tagType}</span>
      </div>

      <h3 className="text-[2rem] font-extrabold leading-tight text-slate-900">{product.name}</h3>
      <p className="mt-3 min-h-14 text-sm leading-relaxed text-slate-500">{product.description}</p>
      <p className="mt-4 text-4xl font-extrabold leading-none text-slate-900">
        ${product.price}
        <span className="ml-1 text-lg font-medium text-slate-400">/{product.period}</span>
      </p>

      <ul className="mt-5 space-y-2.5">
        {product.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm font-medium text-slate-500">
            <FiCheck className="h-4 w-4 text-emerald-500" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={onAddToCart}
        disabled={isInCart}
        className={`btn mt-6 h-11 min-h-0 w-full rounded-full border-none text-sm font-bold text-white ${isInCart ? 'bg-emerald-600 hover:bg-emerald-600' : 'bg-violet-600 hover:bg-violet-700'}`}
      >
        {isInCart ? 'Added to Cart' : 'Buy Now'}
      </button>
    </article>
  );
}
