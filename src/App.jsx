import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import Router
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Banner from "./components/Banner/Banner.jsx";
import MapComponent from "./components/Maps/MapComponent.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Navbar /> {/* Navbar tetap ditampilkan di semua halaman */}

        {/* Routing */}
        <Routes>
          <Route path="/" element={<Home />} /> {/* Halaman utama */}
          <Route path="/cart" element={<Cart />} /> {/* Halaman Cart */}
        </Routes>

        <Footer /> {/* Footer tetap di semua halaman */}
      </div>
    </Router>
  );
};

// Komponen Home untuk menampilkan konten utama
const Home = () => {
  return (
    <>
      <Hero />
      <Services />
      <Banner />
      <MapComponent />
      <Testimonials />
    </>
  );
};

export default App;