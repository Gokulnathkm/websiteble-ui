import Hero from "./sections/Hero";
import Highlights from "./sections/Highlights";
import Growth from "./sections/Growth";
import Offerings from "./sections/Offerings";
import Testimonials from "./sections/Testimonials";
import Newsletter from "./sections/Newsletter";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="bg-white text-gray-900">
      <Hero />
      <Highlights />
      <Growth />
      <Offerings />
      <Testimonials />
      <Newsletter />
      <Footer />
    </main>
  );
}

export default App;

