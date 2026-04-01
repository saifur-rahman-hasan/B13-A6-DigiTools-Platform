import { useState } from 'react';
import { toast } from 'react-toastify';
import Cart from './Cart';
import ProductCard from './ProductCard';
import { products } from '../data/products';

export default function MainSection({ cartCount, setCartCount, cartItems, setCartItems }) {
  const [activeTab, setActiveTab] = useState('Products');
  const visibleProducts = products;

  const handleAddToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
    setCartCount((prev) => prev + 1);
    toast.success(`${product.name} added to cart`, {
      position: 'top-right',
      autoClose: 2000,
    });
  };

  const handleRemoveFromCart = (removeIndex) => {
    setCartItems((prev) => prev.filter((_, index) => index !== removeIndex));
    setCartCount((prev) => Math.max(prev - 1, 0));
  };

  const handleCheckout = () => {
    setCartItems([]);
    setCartCount(0);
  };

  return (
    <section id="products" className="bg-[#f7f8fb] px-4 py-24 md:px-8">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-5xl font-extrabold tracking-tight text-slate-900">Premium Digital Tools</h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-relaxed text-slate-500">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex rounded-full border border-[#e4e3ef] bg-white p-1.5">
            <button
              onClick={() => setActiveTab('Products')}
              className={`btn h-11 min-h-0 rounded-full border-none px-8 text-sm font-bold ${activeTab === 'Products' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-transparent text-slate-600 hover:bg-[#f3f2fd]'}`}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab('Cart')}
              className={`btn h-11 min-h-0 rounded-full border-none px-8 text-sm font-bold ${activeTab === 'Cart' ? 'bg-violet-600 text-white hover:bg-violet-700' : 'bg-transparent text-slate-600 hover:bg-[#f3f2fd]'}`}
            >
              Cart ({cartCount})
            </button>
          </div>
        </div>

        {activeTab === 'Products' ? (
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard
                key={`${product.id}-${activeTab}`}
                product={product}
                onAddToCart={() => handleAddToCart(product)}
                inCartTab={false}
              />
            ))}
          </div>
        ) : (
          <div className="mt-12">
            <Cart
              cartItems={cartItems}
              onRemoveFromCart={handleRemoveFromCart}
              onCheckout={handleCheckout}
            />
          </div>
        )}
      </div>
    </section>
  );
}
