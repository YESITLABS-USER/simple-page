// src/components/Section.js
import React from 'react';
import ProductCard from './ProductCard';

const products = [
  { id: 1, name: 'Product 1', price: 29.99, image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/product3.jpg' },
  { id: 4, name: 'Product 4', price: 39.99, image: '/product4.jpg' },
  { id: 1, name: 'Product 1', price: 29.99, image: '/product5.jpg' },
  { id: 2, name: 'Product 2', price: 49.99, image: '/product6.jpg' },
  { id: 3, name: 'Product 3', price: 19.99, image: '/product7.jpg' },
  { id: 4, name: 'Product 4', price: 39.99, image: '/product8.jpg' },
];

const Section = () => {
  return (
    <section id="products" className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
