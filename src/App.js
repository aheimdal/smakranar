import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Splash from './components/Splash';
import AboutUs from './components/AboutUs';
import Employees from './components/Employees';
import Equipment from './components/Equipment';
import ProjectGallery from './components/ProjectGallery';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header className="App-header" />
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/employees" element={<Employees />} />            
        <Route path="/equipment" element={<Equipment />} />
        <Route path="/projects" element={<ProjectGallery />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;