import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
//import WeddingInfo from './WeddingInfo';
import OurStory from './components/OurStory/OurStory';
// import Attractions from './Attractions';
// import Registry from './Registry';
import './App.css'; // Optional CSS file for styling

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          {/* <Route path="/wedding-info" element={WeddingInfo} /> */}
          <Route path="/our-story" element={<OurStory/>} />
          {/* <Route path="/attractions" element={Attractions} />
          <Route path="/registry" element={Registry} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
