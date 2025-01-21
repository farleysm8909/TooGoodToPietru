import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Hero from '../../images/engagement/IMG_3527_crop.jpg';

const Home = () => {
  return (
    <div className="home">
      <h1>Samantha and Scott</h1>
      <p>Join us in celebrating our love on January 2, 2026!</p>
      <p>Bloomington, MN</p>
      <p>
        <Link to="/rsvp">RSVP</Link>
      </p>
      <img src={Hero} alt="Sam and Scott" />
    </div>
  );
};

export default Home;
