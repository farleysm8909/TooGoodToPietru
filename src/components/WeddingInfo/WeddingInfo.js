import React from 'react';
import './WeddingInfo.css';
import Moa from '../../images/attractions/mall_of_america.png';
import HHSA from '../../images/attractions/Hyland_Hills_Ski_Area_Logo.png';
import Mia from '../../images/attractions/mia_logo.png';
// import MFalls from '../../images/attractions/minnehaha_falls.jpg';
import ParksAndRec from '../../images/attractions/parks_logo.jpg';
import hotel from '../../images/weddingInfo/intercontinental.jpg';

const WeddingInfo = () => {
  return (
    <div className="weddingPage">
      <div className="headingContainer">
        <div className="headingContent">
          <h1>Wedding Information</h1>
        </div>
      </div>
      <section className="infoBlockContainer">
        <div className="infoBlock">
          <h2>Ceremony and Reception</h2>
          <img
            src={hotel}
            className="mediumContent"
            alt="intercontinental hotel"
          />
          <div className="hotelDetails">
            <a href="https://www.intercontinentalmsp.com/" target="_blank">
              <h4>InterContinental Minneapolis - St. Paul Airport</h4>
            </a>
            <p>5005 Glumack Dr, Minneapolis, MN 55450</p>
            <p>(612)-725-0500</p>
          </div>
        </div>
        <div className="infoBlock">
          <h2>Directions</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d90468.74169469772!2d-93.28375872547178!3d44.8796333738846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x87f62ecb25946c01%3A0xb98bb7b79a3d5dcf!2s5005%20Glumack%20Dr%2C%20Minneapolis%2C%20MN%2055450!3m2!1d44.879663!2d-93.2013581!5e0!3m2!1sen!2sus!4v1742944822701!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <p>
            If you are arriving from the airport, follow these steps from the
            hotel's FAQ page to get to the hotel:
          </p>
          <ul className="directions mediumContent">
            <li>
              <strong>From terminal 2:</strong> go to the hotel/taxi cab/shuttle
              pick up area and call hotel to schedule a pick-up.
            </li>
            <br />
            <li>
              <strong>From terminal 1:</strong> leave blue ramp via walkway into
              gold ramp where ground transportation is located. Go to hotel/taxi
              cab/ shuttle pick up area-you will head to the side closest to the
              super shuttles-look for the sign with the Intercontinental logo on
              it.
            </li>
          </ul>
        </div>
        <div className="infoBlock">
          <h2>Parking</h2>
          <p>
            Parking is available in a ramp at the hotel for a daily fee which
            will be discounted--just be sure to mention our wedding!
          </p>
        </div>
        <div className="infoBlock">
          <h2>Accommodations</h2>
          <div className="mediumContent">
            <p>
              The closest option is the Intercontinental itself! Other nearby
              options include the{' '}
              <a
                href="https://www.hyatt.com/hyatt-regency/en-US/msprb-hyatt-regency-bloomington-minneapolis"
                target="_blank"
              >
                Hyatt Regency Bloomington - Minneapolis
              </a>{' '}
              and the{' '}
              <a
                href="https://www.marriott.com/en-us/hotels/mspel-element-bloomington-mall-of-america/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                target="_blank"
              >
                Element Bloomington Mall of America
              </a>{' '}
              to name a few. There are many options in the area!
            </p>
          </div>
        </div>
        <div className="infoBlock">
          <h2>Bridal Party</h2>
          <div className="gridContainer">
            <div className="gridItem party">
              <h3>Anna Schmidt</h3>
              <p>Maid of Honor</p>
              <p>Hometown friend</p>
              {/* <img src={Moa} alt="Mall of America star logo" /> */}
            </div>
            <div className="gridItem party">
              <h3>Gen Farley</h3>
              <p>Bridesmaid</p>
              <p>Sister in law</p>
              {/* <img src={Moa} alt="Mall of America star logo" /> */}
            </div>
            <div className="gridItem party">
              <h3>Katelyn Leets Pietruniak</h3>
              <p>Bridesmaid</p>
              <p>Sister in law</p>
              {/* <img src={Mia} alt="Minneapolis Institute of Art logo" /> */}
            </div>
            <div className="gridItem party">
              <h3>Katie Farley</h3>
              <p>Bridesmaid</p>
              <p>Sister in law</p>
              {/* <img src={HHSA} alt="Hyland Hills SKi Area logo" /> */}
            </div>
            <div className="gridItem party">
              <h3>Megan Boland</h3>
              <p>Bridesmaid</p>
              <p>College friend</p>
              {/* <img src={Mia} alt="Minneapolis Institute of Art logo" /> */}
            </div>
            <div className="gridItem party">
              <h3>Oriana Vile</h3>
              <p>Bridesmaid</p>
              <p>College friend</p>
              {/* <img src={ParksAndRec} alt="Minnehaha Falls during winter" /> */}
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
