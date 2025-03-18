import React, { useEffect } from 'react';
import { useLocation, Routes, Route } from 'react-router-dom'; 
import HomeNavBar from './Components/HomeNavBar';
import Footer from './Components/Footer';
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import TestimonialsPage from './Pages/TestimonialsPage';
import ContactUsPage from './Pages/ContactUsPage';
import ReferPage from './Pages/ReferPage';
import './App.css';

function App() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      <HomeNavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/refer" element={<ReferPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;