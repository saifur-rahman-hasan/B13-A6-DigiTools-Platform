import { products } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductList({ onAddToCart }) {
  return (
    <div className="w-full">
      <h2 className="text-3xl font-bold mb-12 text-center">Premium Digital Tools</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-max">
        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
}
