import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="w-full min-h-screen bg-white">
      <Navbar cartCount={cartCount} />
      {/* Banner will go here */}
      {/* Stats will go here */}
      {/* Main content area will go here */}
      {/* Steps section will go here */}
      {/* Pricing section will go here */}
      {/* Footer will go here */}
    </div>
  );
}
