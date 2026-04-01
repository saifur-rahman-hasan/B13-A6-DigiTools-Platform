import { toast } from 'react-toastify';
import { FiShoppingCart } from 'react-icons/fi';

export default function Cart({ cartItems, onRemoveFromCart, onCheckout }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleRemove = (index, itemName) => {
    onRemoveFromCart(index);
    toast.error(`${itemName} removed from cart`, {
      position: "top-right",
      autoClose: 3000,
    });
  };

  const handleCheckout = () => {
    onCheckout();
    toast.success('Order placed successfully! 🎉', {
      position: "top-right",
      autoClose: 3000,
    });
  };

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto w-full max-w-2xl px-4 py-6">
        <div className="rounded-2xl border border-slate-200 bg-white px-6 py-14 text-center shadow-sm md:px-10">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600">
            <FiShoppingCart className="h-8 w-8" />
          </div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-900">Your cart is empty</h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-slate-500 md:text-base">
            Add a product from the list below to start building your order.
          </p>

          <a
            href="#products"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-violet-700"
          >
            Browse products
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4">
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Your Cart</h2>
          <span className="rounded-full bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-700">
            {cartItems.length} item{cartItems.length === 1 ? '' : 's'}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          {cartItems.map((item, index) => (
            <div key={`${item.id}-${index}`} className="flex flex-col gap-4 rounded-3xl bg-slate-50 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-slate-200">
                  <img src={item.image} alt={item.name} className="h-11 w-11 object-contain" />
                </div>
                <div>
                  <div className="text-xl font-semibold text-slate-900">{item.name}</div>
                  <div className="mt-1 text-sm text-slate-500">${item.price}</div>
                </div>
              </div>

              <button
                onClick={() => handleRemove(index, item.name)}
                className="self-start text-base font-semibold text-pink-500 transition hover:text-pink-600 md:self-center"
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-200 pt-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-base text-slate-500">Total:</p>
          </div>
          <div className="text-3xl font-extrabold text-slate-900">${total}</div>
        </div>

        <button
          onClick={handleCheckout}
          className="mt-6 btn btn-block h-14 min-h-0 rounded-full border-none bg-linear-to-r from-violet-600 to-fuchsia-600 text-base font-bold text-white hover:from-violet-700 hover:to-fuchsia-700"
        >
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
}
