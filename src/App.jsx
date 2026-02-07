import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Community from './components/Community';
import Pixelgrade from './components/Pixelgrade';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FooterDesign from './components/FooterDesign';
import Footer from './components/Footer';
import './styles/global.css';

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Pixelgrade />
      <Stats />
      <Testimonials />
      <Blog />
      <FooterDesign />
      <Footer />
    </main>
  );
}

export default App;