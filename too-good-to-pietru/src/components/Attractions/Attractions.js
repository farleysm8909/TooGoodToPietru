import React from 'react';
import './Attractions.css';
import Moa from '../../images/icons/mall_of_america.png';
import HHSA from '../../images/icons/Hyland_Hills_Ski_Area_Logo.png';
import Mia from '../../images/icons/mia_logo.png';

const Attractions = () => {
  return (
    <div className="attractionsPage">
      <div className="heading">
        <h1>Attractions</h1>
        <p>
          Looking for things to do in the twin cities area while you're here?
          Check out these options!
        </p>
      </div>
      <div className="attractions">
        <div className="attraction">
          <h3>Mall of America</h3>
          <p>
            Largest mall in the United States with over 520 stores, includes an
            indoor amusement park, an aquarium, arcades and mini golf.
          </p>
          <img src={Moa} alt="Mall of America star logo" />
        </div>
        <div className="attraction">
          <h3>Hyland Hills Ski Area</h3>
          <p>Hill for downhill skiing and snowboarding.</p>
          <img src={HHSA} alt="Hyland Hills SKi Area logo" />
        </div>
        <div className="attraction">
          <h3>Minneapolis Institute of Art</h3>
          <p>
            Home to more than 100,000 works of art representing 5,000 years of
            world history. General admission is free.
          </p>
          <img src={Mia} alt="Minneapolis Institute of Art logo" />
        </div>
      </div>
    </div>
  );
};

export default Attractions;
