import React from 'react';
import './Home.css';
import Hero from '../../images/IMG_3527_crop.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Samantha and Scott</h1>
      <p>Join us in celebrating our love on January 2, 2026!</p>
      <p>Venue details here</p>
      <p>Address</p>
      <p>etc.</p>
      <img src={Hero} alt="Sam and Scott" />
    </div>
  );
};

export default Home;
