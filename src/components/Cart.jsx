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
    <div className="w-full max-w-3xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Your Cart</h2>

      {/* Cart Items Table */}
      <div className="overflow-x-auto mb-6">
        <table className="table w-full">
          <tbody>
            {cartItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <tr key={index} className="hover">
                  <td className="flex gap-4 items-center">
                    <IconComponent className="w-8 h-8 text-primary" />
                    <div>
                      <div className="font-bold">{item.name}</div>
                      <div className="text-sm opacity-75">Premium Tool</div>
                    </div>
                  </td>
                  <td className="text-right">
                    <span className="text-lg font-bold text-primary">${item.price}</span>
                  </td>
                  <td className="text-right">
                    <button
                      onClick={() => handleRemove(index, item.name)}
                      className="btn btn-ghost btn-sm text-error"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="divider"></div>

      {/* Summary Section */}
      <div className="grid grid-cols-2 gap-4 mb-8 bg-base-200 p-6 rounded-lg">
        <div>
          <p className="text-sm font-semibold opacity-75">Total Items</p>
          <p className="text-3xl font-bold text-primary">{cartItems.length}</p>
        </div>
        <div className="text-right">
          <p className="text-sm font-semibold opacity-75">Total Price</p>
          <p className="text-3xl font-bold text-primary">${total}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="btn btn-primary btn-block btn-lg"
      >
        Proceed to Checkout
      </button>
    </div>
  );
}
