import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Support from './components/Support';
import Footer from './components/Footer';
import backgroundImage from './components/112.jpg'; // Import the image
import './App.css';

const App = () => {
  const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  return (
    <div className="App" style={appStyle}>
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
