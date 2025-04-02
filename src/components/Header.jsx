import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="flex justify-between items-center px-10">
        <div className="text-2xl font-bold"> Deva Gallery</div>
        <nav className="space-x-8">
          <a href="#products" className="hover:text-gray-400">Products</a>
          <a href="#contact" className="hover:text-gray-400">Contact Us</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
