import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; // Optional CSS file for styling
import Home from './components/Home/Home';
import RSVP from './components/RSVP/RSVP';
import WeddingInfo from './components/WeddingInfo/WeddingInfo';
import OurStory from './components/OurStory/OurStory';
import Attractions from './components/Attractions/Attractions';
import Registry from './components/Registry/Registry';
import { NavBar } from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="rsvp" element={<RSVP />} />
          <Route path="/wedding-info" element={<WeddingInfo />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/attractions" element={<Attractions />} />
          <Route path="/registry" element={<Registry />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
