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
        <p>Minneapolis, MN</p>
        <p>
          {/* <Link to="/rsvp">
            <button id="rsvpBtn">RSVP</button>
          </Link> */}
          <Link
            to="https://www.intercontinental.com/redirect?path=rates&brandCode=IC&localeCode=en&regionCode=1&hotelCode=MSPHA&checkInDate=30&checkInMonthYear=112025&checkOutDate=04&checkOutMonthYear=002026&_PMID=99801505&GPC=FPW&cn=no&viewfullsite=true"
            target="_blank"
          >
            <button id="rsvpBtn">Reserve a Room</button>
          </Link>
        </p>
      </div>
      <img src={Hero} className="heroImg" alt="Sam and Scott" />
    </div>
  );
};

export default Home;
