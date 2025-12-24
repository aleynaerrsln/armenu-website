import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Showcase3D from './components/Showcase3D';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Showcase3D />
      <Features />
      <HowItWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;