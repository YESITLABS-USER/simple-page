// src/components/ProductCard.js
import React, { useState } from 'react';
import AddToCartPopup from './AddToCartPopup';

const ProductCard = ({ product }) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md" />
      <h3 className="text-xl font-semibold mt-2">{product.name}</h3>
      <p className="text-gray-600 mt-1">${product.price}</p>
      <button
        className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 cursor-pointer"
        onClick={handleOpenPopup}
      >
        Add to Cart
      </button>

      {isPopupOpen && (
        <AddToCartPopup product={product} onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default ProductCard;
