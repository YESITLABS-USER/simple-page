// src/App.js
import React from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Footer from './components/Footer';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="font-sans antialiased">
      <Header />
      <Section />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
