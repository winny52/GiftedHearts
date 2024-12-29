import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';

// Import components
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import OurProjects from './components/OurProjects';
import GetInvolved from './components/GetInvolved';
import ContactUs from './components/ContactUs';
import Navbar from './components/Navbar';
import OurStory from './components/OurStory';
import Footer from './components/Footer';
import ScrollToTop from './components/SCrollToTop';
const App = () => {
  return (
    <Router>
      {/* Navbar is now a separate component for navigation */}
      <Navbar />

      {/* Main content is wrapped in Routes */}
      <div className="content">
        <ScrollToTop/>
        <Routes>
          {/* Home Page Route */}
          <Route path="/" element={<HomePage />} />
          
          {/* About Us Page Route */}
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/our-story" element={<OurStory />} />

          {/* Mission, Vision, Values Page Route */}
          {/* <Route path="/mission" element={<MissionVisionValues />} /> */}
          
          {/* Our Projects Page Route */}
          <Route path="/projects" element={<OurProjects />} />
          
          {/* Get Involved Page Route */}
          <Route path="/get-involved" element={<GetInvolved />} />
          
          {/* Contact Us Page Route */}
          <Route path="/contact" element={<ContactUs />} />

          
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
};

export default App;
