import React from 'react';
import './Attractions.css';
import { Link } from 'react-router-dom';
import Moa from '../../images/attractions/mall_of_america.png';
import HHSA from '../../images/attractions/Hyland_Hills_Ski_Area_Logo.png';
import Mia from '../../images/attractions/mia_logo.png';
import Minnehaha from '../../images/attractions/minnehaha_falls.jpg';
import Walker from '../../images/attractions/walker.jpeg';
import Dakota from '../../images/attractions/dakota.jpg';

const Attractions = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>Attractions</h1>
            <p>
              Looking for things to do in the twin cities area while you're
              here? Check out these options!
            </p>
          </div>
        </div>
        <div className="gridContainer">
          <div className="gridItem attraction">
            <div className="gridImage">
              <Link to="https://www.mallofamerica.com/" target="_blank">
                <img src={Moa} alt="Mall of America star logo" />
              </Link>
            </div>
            <div className="gridText">
              <h3>Mall of America</h3>
              <p>
                Largest mall in the United States with over 520 stores, includes
                an indoor amusement park, aquarium, arcades and mini golf. There
                is something for everyone!
              </p>
            </div>
          </div>
          <div className="gridItem attraction">
            <div className="gridImage">
              <Link
                to="https://www.minneapolisparks.org/parks-destinations/parks-lakes/minnehaha_regional_park/"
                target="_blank"
              >
                <img src={Minnehaha} alt="Minnehaha Falls during winter" />
              </Link>
              <div className="gridText">
                <h3>Minnehaha Falls and Regional Park</h3>
                <p>
                  Enjoy 2+ miles of walking/hiking trails along with a view of
                  the stunning 53' Minnehaha--likely frozen--waterfall.
                </p>
              </div>
            </div>
          </div>
          <div className="gridItem attraction">
            <div className="gridImage">
              <Link href="https://new.artsmia.org/" target="_blank">
                <img src={Mia} alt="Minneapolis Institute of Art logo" />
              </Link>
              <div className="gridText">
                <h3>Minneapolis Institute of Art</h3>
                <p>
                  Home to more than 100,000 works of art representing 5,000
                  years of world history. General admission is free.
                </p>
              </div>
            </div>
          </div>
          <div className="gridItem attraction">
            <div className="gridImage">
              <Link href="https://www.dakotacooks.com/" target="_blank">
                <img src={Dakota} alt="Dakota jazz bar and restaurant" />
              </Link>
              <div className="gridText">
                <h3>Dakota Jazz Bar and Restaurant</h3>
                <p>
                  Intimate cabaret venue with live music every night, plus a
                  full-service American restaurant & bar. You may want to
                  purchase tickets in advance!
                </p>
              </div>
            </div>
          </div>
          <div className="gridItem attraction">
            <div className="gridImage">
              <Link
                href="https://www.threeriversparks.org/location/hyland-hills-ski-area"
                target="_blank"
              >
                <img src={HHSA} alt="Hyland Hills SKi Area logo" />
              </Link>
              <div className="gridText">
                <h3>Hyland Hills Ski Area</h3>
                <p>Hill for downhill skiing and snowboarding.</p>
              </div>
            </div>
          </div>
          <div className="gridItem attraction">
            <div className="gridImage">
              <Link href="https://walkerart.org/" target="_blank">
                <img
                  src={Walker}
                  alt="Walker Art Center spoon and cherry sculpture"
                />
              </Link>
              <div className="gridText">
                <h3>Walker Art Center</h3>
                <p>
                  Contemporary art museum (paid entry) and sculpture garden
                  (free). Their iconic outdoor sculpture garden is open 365 days
                  a year, is freely open to the public and features over 60
                  sculptures.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attractions;
