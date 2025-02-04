import React from 'react';
import './WeddingInfo.css';
import Moa from '../../images/attractions/mall_of_america.png';
import HHSA from '../../images/attractions/Hyland_Hills_Ski_Area_Logo.png';
import Mia from '../../images/attractions/mia_logo.png';
// import MFalls from '../../images/attractions/minnehaha_falls.jpg';
import ParksAndRec from '../../images/attractions/parks_logo.jpg';

const WeddingInfo = () => {
  return (
    <div className="weddingPage">
      <div className="headingContainer">
        <div className="headingContent">
          <h1>Wedding Information</h1>
          <p>Check out the plan for our day here!</p>
        </div>
      </div>
      <section className="infoBlockContainer">
        <div className="infoBlock">
          <h2>Ceremony and Reception</h2>
          <p>[Name of hotel] Hotel</p>
          <p>[Hotel address line 1]</p>
          <p>[Hotel address line 2]</p>
        </div>
        <div className="infoBlock">
          <h2>Directions</h2>
          <p>Google maps iFrame to location here.</p>
        </div>
        <div className="infoBlock">
          <h2>Accommodations</h2>
          <p>Hotel + others nearby.</p>
        </div>
        <div className="infoBlock">
          <h2>Bridal Party</h2>
          <div className="gridContainer">
            <div className="gridItem party">
              <h3>Anna Schmidt</h3>
              <p>Maid of Honor</p>
              <p>Best friend of the bride</p>
              <a href="https://www.mallofamerica.com/" target="_blank">
                <img src={Moa} alt="Mall of America star logo" />
              </a>
            </div>
            <div className="gridItem party">
              <h3>Oriana Vile</h3>
              <p>Bridesmaid</p>
              <p>Best friend of the bride</p>
              <a
                href="https://www.minneapolisparks.org/parks-destinations/parks-lakes/minnehaha_regional_park/"
                target="_blank"
              >
                <img src={ParksAndRec} alt="Minnehaha Falls during winter" />
              </a>
            </div>
            <div className="gridItem party">
              <h3>Minneapolis Institute of Art</h3>
              <p>
                Home to more than 100,000 works of art representing 5,000 years
                of world history. General admission is free.
              </p>
              <a href="https://new.artsmia.org/" target="_blank">
                <img src={Mia} alt="Minneapolis Institute of Art logo" />
              </a>
            </div>
            <div className="gridItem party">
              <h3>Mall of America</h3>
              <p>
                Largest mall in the United States with over 520 stores, includes
                an indoor amusement park, an aquarium, arcades and mini golf.
              </p>
              <a href="https://www.mallofamerica.com/" target="_blank">
                <img src={Moa} alt="Mall of America star logo" />
              </a>
            </div>
            <div className="gridItem party">
              <h3>Hyland Hills Ski Area</h3>
              <p>Hill for downhill skiing and snowboarding.</p>
              <a
                href="https://www.threeriversparks.org/location/hyland-hills-ski-area"
                target="_blank"
              >
                <img src={HHSA} alt="Hyland Hills SKi Area logo" />
              </a>
            </div>
            <div className="gridItem party">
              <h3>Minneapolis Institute of Art</h3>
              <p>
                Home to more than 100,000 works of art representing 5,000 years
                of world history. General admission is free.
              </p>
              <a href="https://new.artsmia.org/" target="_blank">
                <img src={Mia} alt="Minneapolis Institute of Art logo" />
              </a>
            </div>
          </div>
        </div>
        <div className="infoBlock">
          <h2>Groomsmen</h2>
          <p>Grid of folks in the bridal party here.</p>
        </div>
        <div className="infoBlock">
          <h2>Extra Help</h2>
          <p>Grid of Madi, Livy and Amelia here.</p>
        </div>
      </section>
    </div>
  );
};

export default WeddingInfo;
