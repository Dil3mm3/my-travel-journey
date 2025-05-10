import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Tips from './pages/Tips';
import Journeys from './pages/Journeys';
import JourneyDetail from './pages/JourneyDetail';
import Footer from './components/Footer';

const App = () => {
  return (
      <div className="flex flex-col min-h-screen">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/journeys" element={<Journeys />} />
          <Route path="/journeys/:slug" element={<JourneyDetail />} />
        </Routes>
        <Footer />
      </div>
  );
};

export default App;
