import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrendyPlants from './components/TrendyPlants';
import TopSelling from './components/TopSelling';
import CustomerReviews from './components/CustomerReviews';
import O2Collection from './components/O2Collection';
import Footer from './components/Footer';
import CartDrawer from './components/modals/CartDrawer';
import SearchModal from './components/modals/SearchModal';
import VideoModal from './components/modals/VideoModal';
import ProductQuickViewModal from './components/modals/ProductQuickViewModal';
import PlantHero from './assets/plant-hero.png';
import { Check } from 'lucide-react';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Calathea plant',
      price: 359,
      quantity: 1,
      image: PlantHero,
    },
  ]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [selectedPlant, setSelectedPlant] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage('');
    }, 3000);
  };

  const handleAddToCart = (product) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + (product.quantity || 1) }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: product.quantity || 1,
        },
      ];
    });
    showToast(`Added ${product.name} to cart!`);
  };

  const handleUpdateQuantity = (id, newQty) => {
    if (newQty <= 0) {
      handleRemoveItem(id);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleBuyNow = (product) => {
    setSelectedPlant(product);
  };

  const totalCartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#121B13] text-white selection:bg-[#5E8356] selection:text-white font-sans antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 glass-card bg-emerald-950/90 border border-emerald-500/40 px-5 py-3 rounded-2xl flex items-center gap-3 shadow-2xl animate-slide-left text-sm font-medium text-emerald-200">
          <div className="w-5 h-5 rounded-full bg-emerald-500 text-[#121B13] flex items-center justify-center font-bold">
            <Check size={14} />
          </div>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Navigation */}
      <Navbar
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        cartCount={totalCartCount}
      />

      {/* Main Content Sections */}
      <main>
        <Hero
          onOpenVideo={() => setIsVideoOpen(true)}
          onAddToCart={handleAddToCart}
          onBuyNow={handleBuyNow}
        />

        <TrendyPlants onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />

        <TopSelling onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />

        <O2Collection onAddToCart={handleAddToCart} onBuyNow={handleBuyNow} />

        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals & Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onCheckout={() => {
          setIsCartOpen(false);
          showToast('Redirecting to secure checkout...');
        }}
      />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={(p) => {
          handleAddToCart(p);
        }}
        onBuyNow={(p) => {
          setIsSearchOpen(false);
          handleBuyNow(p);
        }}
      />

      <VideoModal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)} />

      <ProductQuickViewModal
        plant={selectedPlant}
        isOpen={!!selectedPlant}
        onClose={() => setSelectedPlant(null)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
