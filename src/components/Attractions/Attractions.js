import React from 'react';
import './Attractions.css';
import Moa from '../../images/attractions/mall_of_america.png';
import HHSA from '../../images/attractions/Hyland_Hills_Ski_Area_Logo.png';
import Mia from '../../images/attractions/mia_logo.png';
// import MFalls from '../../images/attractions/minnehaha_falls.jpg';
import ParksAndRec from '../../images/attractions/parks_logo.jpg';

const Attractions = () => {
  return (
    <div className="attractionsPage">
      <div className="headingContainer">
        <div className="headingContent">
          <h1>Attractions</h1>
          <p>
            Looking for things to do in the twin cities area while you're here?
            Check out these options!
          </p>
        </div>
      </div>
      <div className="gridContainer">
        <div className="gridItem attraction">
          <h3>Mall of America</h3>
          <p>
            Largest mall in the United States with over 520 stores, includes an
            indoor amusement park, an aquarium, arcades and mini golf.
          </p>
          <a href="https://www.mallofamerica.com/" target="_blank">
            <img src={Moa} alt="Mall of America star logo" />
          </a>
        </div>
        <div className="gridItem attraction">
          <h3>Minnehaha Falls and Regional Park</h3>
          <p>
            Enjoy 2+ miles of walking/hiking trails along with a view of the
            stunning 53' Minnehaha--likely frozen--waterfall.
          </p>
          <a
            href="https://www.minneapolisparks.org/parks-destinations/parks-lakes/minnehaha_regional_park/"
            target="_blank"
          >
            <img src={ParksAndRec} alt="Minnehaha Falls during winter" />
          </a>
        </div>
        <div className="gridItem attraction">
          <h3>Minneapolis Institute of Art</h3>
          <p>
            Home to more than 100,000 works of art representing 5,000 years of
            world history. General admission is free.
          </p>
          <a href="https://new.artsmia.org/" target="_blank">
            <img src={Mia} alt="Minneapolis Institute of Art logo" />
          </a>
        </div>
        <div className="gridItem attraction">
          <h3>Mall of America</h3>
          <p>
            Largest mall in the United States with over 520 stores, includes an
            indoor amusement park, an aquarium, arcades and mini golf.
          </p>
          <a href="https://www.mallofamerica.com/" target="_blank">
            <img src={Moa} alt="Mall of America star logo" />
          </a>
        </div>
        <div className="gridItem attraction">
          <h3>Hyland Hills Ski Area</h3>
          <p>Hill for downhill skiing and snowboarding.</p>
          <a
            href="https://www.threeriversparks.org/location/hyland-hills-ski-area"
            target="_blank"
          >
            <img src={HHSA} alt="Hyland Hills SKi Area logo" />
          </a>
        </div>
        <div className="gridItem attraction">
          <h3>Minneapolis Institute of Art</h3>
          <p>
            Home to more than 100,000 works of art representing 5,000 years of
            world history. General admission is free.
          </p>
          <a href="https://new.artsmia.org/" target="_blank">
            <img src={Mia} alt="Minneapolis Institute of Art logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
