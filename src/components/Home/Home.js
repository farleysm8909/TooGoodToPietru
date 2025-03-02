import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Hero from '../../images/engagement/IMG_3527_crop.jpg';

const Home = () => {
  return (
    <div className="homePage">
      <div className="heading homeHeading">
        <h1>Samantha and Scott</h1>
        <p>Join us in celebrating our love on January 2, 2026!</p>
        <p>Bloomington, MN</p>
        <p>
          <Link to="/rsvp">
            <button id="rsvpBtn">RSVP</button>
          </Link>
        </p>
      </div>
      <img src={Hero} className="heroImg" alt="Sam and Scott" />
    </div>
  );
};

export default Home;
