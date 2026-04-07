import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import HelpProgress from './sections/HelpProgress';
import Offerings from './sections/Offerings';
import Testimonials from './sections/Testimonials';
import Newsletter from './sections/Newsletter';
import Footer from './sections/Footer';

function App() {
  return (
    <main className="bg-white text-gray-900 min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <HelpProgress />
      <Offerings />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;
