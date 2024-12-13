import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <span className="text-2xl font-horror text-red-600">DRKS</span>
          <div className="flex gap-6">
            <a href="#how-to-buy" className="hover:text-red-500 transition-colors">How to Buy</a>
            <a href="#tokenomics" className="hover:text-red-500 transition-colors">Darknomics</a>
            <a href="#socials" className="hover:text-red-500 transition-colors">Socials</a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;