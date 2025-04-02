// src/components/AddToCartPopup.js
import React, { useState } from 'react';

const AddToCartPopup = ({ product, onClose, onPurchase }) => {
  const [email, setEmail] = useState('');
  const [showThanks, setShowThanks] = useState(false);

  const handleSubmit = () => {
    // You can add any logic here to send the email or product details
    console.log(`Product: ${product.name}, Email: ${email}`);

    setShowThanks(true); // Show the "Thank You" message after submission
    setTimeout(() => {
      setShowThanks(false);
      onClose(); // Close the popup after a few seconds
    }, 3000); // Show the thanks for 3 seconds
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-lg w-80">
        {!showThanks ? (
          <>
            <h3 className="text-xl font-semibold mb-4">Enter your Email to Complete the Purchase</h3>
            <p className="mb-4">Product: {product.name}</p>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 border border-gray-300 rounded-lg mb-4"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400"
              onClick={handleSubmit}
            >
              Send
            </button>
            <button
              className="mt-2 w-full py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-200"
              onClick={onClose}
            >
              Close
            </button>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-4">Thank you for your purchase!</h3>
            <button className="w-full py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-200" onClick={onClose}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddToCartPopup;
