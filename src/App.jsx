import Navbar from './components/Navbar/Navbar';
import Hero from './sections/Hero/Hero';
import Clients from './sections/Clients/Clients';
import Community from './sections/Community/Community';
import Footer from './sections/Footer/Footer';
import './app.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Clients />
      <Community />
      <Footer />
    </>
  );
}

export default App;
