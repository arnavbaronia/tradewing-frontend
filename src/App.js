import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeNavBar from './Components/HomeNavBar';
import Footer from './Components/Footer'; // Import Footer
import HomePage from './Pages/HomePage';
import ServicesPage from './Pages/ServicesPage';
import TestimonialsPage from './Pages/TestimonialsPage';
import ContactUsPage from './Pages/ContactUsPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <HomeNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/contact" element={<ContactUsPage />} />
        </Routes>
        <Footer /> {/* Footer added here */}
      </div>
    </Router>
  );
}

export default App;