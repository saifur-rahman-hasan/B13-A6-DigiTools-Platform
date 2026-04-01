import { useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Stats from '../components/Stats';
import MainSection from '../components/MainSection';
import Steps from '../components/Steps';
import Pricing from '../components/Pricing';
import Footer from '../components/Footer';

export default function Home() {
  const [cartCount, setCartCount] = useState(0);
  const [cartItems, setCartItems] = useState([]);

  return (
    <div className="w-full min-h-screen bg-[#f7f8fb]">
      <Navbar cartCount={cartCount} />
      <Banner />
      <Stats />
      <MainSection
        cartCount={cartCount}
        setCartCount={setCartCount}
        cartItems={cartItems}
        setCartItems={setCartItems}
      />
      <Steps />
      <Pricing />
      <Footer />
    </div>
  );
}
