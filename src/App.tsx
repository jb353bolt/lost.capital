import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductJourney from './components/ProductJourney';
import About from './components/About';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Hero />
        <ProductJourney />
        <About />
        <Features />
      </main>
    </div>
  );
}

export default App;