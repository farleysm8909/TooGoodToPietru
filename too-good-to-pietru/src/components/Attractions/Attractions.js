import React from 'react';
import './Attractions.css';
import Moa from '../../images/icons/mall_of_america.png';

const Attractions = () => {
  return (
    <div>
      <h1>Attractions</h1>
      <p>
        Looking for things to do in the twin cities area while you're here?
        Check out these options!
      </p>
      <div className="attractions">
        <div className="attraction">
          <h3>Mall of America</h3>
          <img src={Moa} alt="mall of america logo" />
          <p>
            Largest mall in the United States with over 520 stores, includes an
            indoor amusement park, an aquarium, arcades and mini golf.
          </p>
        </div>
        <div className="attraction">
          <h3>Hyland Hills Ski Area</h3>
          <p>Hill for downhill skiing and snowboarding.</p>
        </div>
        <div className="attraction">
          <h3>Minneapolis Institute of Art</h3>
          <p>
            Home to more than 100,000 works of art representing 5,000 years of
            world history. General admission is free.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
