// src/components/ContactSection.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-10 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-semibold mb-8">Contact Us</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-4 bg-gray-100 rounded-lg">
            <img src="/gallery12.jpg" alt="Gallery 1" className="w-full h-48 object-cover rounded-md" />
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <img src="/gallery2.jpg" alt="Gallery 2" className="w-full h-48 object-cover rounded-md" />
          </div>
          <div className="p-4 bg-gray-100 rounded-lg">
            <img src="/gallery3.jpg" alt="Gallery 3" className="w-full h-48 object-cover rounded-md" />
          </div>
        </div>

        <div className="mt-8">
          <p className="text-xl">For inquiries, reach us at:</p>
          <p className="text-lg text-gray-600 mt-2">Email: contact@yourstore.com</p>
          <p className="text-lg text-gray-600 mt-1">Phone: +1 234 567 890</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
