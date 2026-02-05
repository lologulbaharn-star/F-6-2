import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Community from './components/Community';
import Pixelgrade from './components/Pixelgrade';
import Stats from './components/Stats';
import Clients from './components/Clients';
import FooterDesign from './components/FooterDesign';
import Footer from './components/Footer';

import './styles/global.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Community />
      <Pixelgrade />
      <Stats />
      <Clients />
      <FooterDesign />
      <Footer />
    </>
  );
}

export default App;
