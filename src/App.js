import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Support from './components/Support';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main className="main-content">
        <Hero />
        <Features />
        <Support />
      </main>
      <Footer />
    </div>
  );
};

export default App;
