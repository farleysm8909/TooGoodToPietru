import React from 'react';
import './WeddingInfo.css';
import { Link } from 'react-router-dom';
import hotel from '../../images/weddingInfo/intercontinental.jpg';
import Anna from '../../images/party/anna.jpeg';
import Katelyn from '../../images/party/katelyn_crop.jpeg';
import Ori from '../../images/party/ori.jpeg';
import Gen from '../../images/party/gen.jpeg';
import Megan from '../../images/party/megan.jpg';
import Katie from '../../images/party/katie_crop.jpg';
import Girls from '../../images/party/girls.jpg';
import Thomas from '../../images/party/thomas_fish.jpg';
import Shawn from '../../images/party/shawn.jpg';
import Ian from '../../images/party/ian.jpg';
import Ryan from '../../images/party/ryan_crop.jpg';
import Steve from '../../images/party/steve.jpg';
import Ken from '../../images/party/ken.jpg';
import Nick from '../../images/party/nick.jpeg';
import Ben from '../../images/party/ben.JPG';
import parking from '../../images/weddingInfo/parking.jpg';
import airport from '../../images/weddingInfo/airport.jpg';

const WeddingInfo = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>Wedding Information</h1>
          </div>
        </div>
        <div className="gridContainer">
          <div className="infoBlock">
            <h2>Ceremony and Reception</h2>
            <img
              src={hotel}
              className="mediumContent"
              alt="intercontinental hotel"
            />
            <div className="hotelDetails gridText">
              <Link to="https://www.intercontinentalmsp.com/" target="_blank">
                <h4>InterContinental Minneapolis - St. Paul Airport</h4>
              </Link>
              <p>5005 Glumack Dr, Minneapolis, MN 55450</p>
              <p>(612)-725-0500</p>
            </div>
          </div>
          <div className="infoBlock">
            <h2>Directions</h2>
            <p>
              See details below and/or check out the{' '}
              <a
                href="https://www.intercontinentalmsp.com/discover/parking"
                target="_blank"
              >
                hotel's information
              </a>
              .
            </p>
            <iframe
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d90468.74169469772!2d-93.28375872547178!3d44.8796333738846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x87f62ecb25946c01%3A0xb98bb7b79a3d5dcf!2s5005%20Glumack%20Dr%2C%20Minneapolis%2C%20MN%2055450!3m2!1d44.879663!2d-93.2013581!5e0!3m2!1sen!2sus!4v1742944822701!5m2!1sen!2sus"
            ></iframe>
            <div className="gridText">
              <h3>If You Are Flying</h3>
              <p>
                If you are arriving from the airport, follow these steps to get
                to the hotel:
              </p>
              <ul className="directions mediumContent">
                <li>
                  <strong>From Terminal 1, Option A (no checked bag):</strong>{' '}
                  If you don't have a checked bag, it may be easiest to use the
                  skybridge near gate section A. If you arrive in gate section D
                  or C, there is a tram in the airport that will take you to
                  gate section A. If you arrive in gate sections E, F or G,
                  there are walking paths to this tram as well or you may opt
                  for Option B below. The skybridge will take you directly into
                  the hotel and on the third floor. From there, take the
                  elevator down to the first floor to check in at the lobby. See
                  map of the airpot below.
                </li>
                <br />
                <li>
                  <strong>
                    From Terminal 1, Option B (with checked bag or you are not
                    close to gate section A):
                  </strong>{' '}
                  Go to the hotel/taxi cab/shuttle pick up area and call the
                  hotel at (612)-725-0500 to schedule a pick-up. It should take
                  10 or 15 minutes for the shuttle to arrive after calling. The
                  shuttle should run automatically every 20 minutes as well.
                </li>
                <br />
                <li>
                  <strong>From Terminal 2:</strong> Go to the hotel/taxi
                  cab/shuttle pick up area and call the hotel at (612)-725-0500
                  to schedule a pick-up. It should take 10 or 15 minutes for the
                  shuttle to arrive after calling. The shuttle should run
                  automatically every 20 minutes as well.
                </li>
              </ul>
            </div>
            <img
              src={airport}
              className="mediumContent"
              alt="intercontinental hotel"
            />
            <div className="gridText">
              <h3>If You Are Driving</h3>
              <p>
                When heading towards the airport, follow signs initially for
                rental car, then follow signs for Hotel. See more detailed
                instructions below:
              </p>
              <h4>From Minneapolis</h4>
              <p className="directions mediumContent">
                Take I-35W south to I-494 east. Travel east on I-494 to the
                MN-5/ MSP Terminal 1 exit. From MN-5, follow the blue Post
                Road/Truck Route/Hotel signs and exit onto Post Road/Truck Route
                exit. From the Post Road exit, take a left over the bridge to
                the stoplight. At the stoplight, turn right onto Northwest Drive
                to follow the blue Truck Route/Post Office/Hotel signage to the
                hotel. Continue on Northwest Drive and follow the blue
                Hotel/Truck Route/Post Office signs to the hotel, approximately
                1 mile away.
              </p>
              <h4>From St. Paul</h4>
              <p className="directions mediumContent">
                Take I-35E south to the W. 7th Street/MN-5 exit. Turn right onto
                W. 7th Street/MN-5. Continue traveling west on MN Highway 5. Go
                past the Terminal 1 exit off MN-5 to the Post Road/Truck Route
                exit. From the Post Road/Truck Route exit, follow the blue hotel
                sign with a sharp hairpin turn onto the Northwest Drive/Truck
                Route/Post Office/Hotel frontage road. Follow the blue hotel
                signs, Truck Route, and Post Office signs on Northwest Drive to
                the hotel, approximately one mile away.
              </p>
              <h4>From the Southeast</h4>
              <p className="directions mediumContent">
                From I-35E, travel north to I-494 west. Exit onto I-494 and
                travel west to the MN-5/Terminal 1 exit. From MN-5, follow the
                Post Road/Truck Route/Hotel signs and exit onto Post Road/Truck
                Route exit. From the Post Road exit, take a left over the bridge
                to the stoplight. At the stoplight, turn right onto Northwest
                Drive to follow the blue Truck Route/Post Office/Hotel signage
                to the hotel. Continue on Northwest Drive and follow the blue
                Hotel/Truck Route/Post Office signs to the hotel, approximately
                1 mile away.
              </p>
              <h4>From the Southwest</h4>
              <p className="directions mediumContent">
                From I-494, travel east to MN-5. From MN-5, follow the Post
                Road/Truck Route signs and exit onto Post Road/Truck Route exit.
                From the Post Road exit, take a left over the bridge to the
                stoplight. At the stoplight, turn right onto Northwest Drive to
                follow the blue Truck Route/Post Office/Hotel signage to the
                hotel. Continue on Northwest Drive and follow the blue
                Hotel/Truck Route/Post Office/Hotel signs to the hotel,
                approximately one mile.
              </p>
            </div>
          </div>
          <div className="infoBlock">
            <h2>Parking</h2>
            <div className="gridText">
              <p>
                Parking is available in a ramp across the street from the hotel
                for a daily fee which will be discounted--just be sure to
                mention our wedding!
              </p>
            </div>
            <img
              src={parking}
              className="mediumContent"
              alt="intercontinental hotel"
            />
          </div>
          <div className="infoBlock">
            <h2>Accommodations</h2>
            <div className="mediumContent">
              <div className="gridText">
                <p>
                  The closest option is the InterContinental itself! Other
                  nearby options include the{' '}
                  <Link
                    href="https://www.hyatt.com/hyatt-regency/en-US/msprb-hyatt-regency-bloomington-minneapolis"
                    target="_blank"
                  >
                    Hyatt Regency Bloomington - Minneapolis
                  </Link>{' '}
                  and the{' '}
                  <Link
                    href="https://www.marriott.com/en-us/hotels/mspel-element-bloomington-mall-of-america/overview/?scid=f2ae0541-1279-4f24-b197-a979c79310b0"
                    target="_blank"
                  >
                    Element Bloomington Mall of America
                  </Link>{' '}
                  to name a few. There are many options in the area!
                </p>
                <div className="buttonContainer">
                  <p>
                    <Link
                      to="https://www.intercontinental.com/redirect?path=rates&brandCode=IC&localeCode=en&regionCode=1&hotelCode=MSPHA&checkInDate=30&checkInMonthYear=112025&checkOutDate=04&checkOutMonthYear=002026&_PMID=99801505&GPC=FPW&cn=no&viewfullsite=true"
                      target="_blank"
                    >
                      <button id="rsvpBtn">Reserve at InterContinental</button>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="infoBlock">
            <h2>Bridal Party</h2>
            <div className="gridContainer">
              <div className="gridItem party">
                <h3>Anna Schmidt</h3>
                <p>maid of honor & hometown friend</p>
                <div className="gridImage">
                  <img src={Anna} alt="Anna Schmidt" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Gen Farley</h3>
                <p>bridesmaid & sister in law</p>
                <div className="gridImage">
                  <img src={Gen} alt="Gen Farley" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Katelyn Leets Pietruniak</h3>
                <p>bridesmaid & sister in law</p>
                <div className="gridImage">
                  <img src={Katelyn} alt="Katelyn Leets Pietruniak" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Katie Farley</h3>
                <p>bridesmaid & sister in law</p>
                <div className="gridImage">
                  <img src={Katie} alt="Katie Farley" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Megan Boland</h3>
                <p>bridesmaid & college friend</p>
                <div className="gridImage">
                  <img src={Megan} alt="Megan Boland" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Oriana Vile</h3>
                <p>bridesmaid & college friend</p>
                <div className="gridImage">
                  <img src={Ori} alt="Oriana Vile" />
                </div>
              </div>
            </div>
          </div>
          <div className="infoBlock">
            <h2>Groomsmen</h2>
            <div className="gridContainer">
              <div className="gridItem party">
                <h3>Steve Pietruniak</h3>
                <p>best man & brother</p>
                <div className="gridImage">
                  <img src={Steve} alt="Steve Pietruniak" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Ben Farley</h3>
                <p>groomsman & brother in law</p>
                <div className="gridImage">
                  <img src={Ben} alt="Ben Farley" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Ian Potash</h3>
                <p>groomsman & hometown friend</p>
                <div className="gridImage">
                  <img src={Ian} alt="Ian Potash" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Ken Brill</h3>
                <p>groomsman & hometown friend</p>
                <div className="gridImage">
                  <img src={Ken} alt="Ken Brill" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Nick Waldron</h3>
                <p>groomsman & college friend</p>
                <div className="gridImage">
                  <img src={Nick} alt="Nick Waldron" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Ryan Fitzpatrick</h3>
                <p>groomsman & hometown friend</p>
                <div className="gridImage">
                  <img src={Ryan} alt="Ryan Fitzpatrick" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Shawn Davern</h3>
                <p>groomsman & hometown friend</p>
                <div className="gridImage">
                  <img src={Shawn} alt="Shawn Davern" />
                </div>
              </div>
              <div className="gridItem party">
                <h3>Thomas Farley</h3>
                <p>groomsman & brother in law</p>
                <div className="gridImage">
                  <img src={Thomas} alt="Thomas Farley" />
                </div>
              </div>
            </div>
          </div>
          <div className="infoBlock">
            <h2>Extra Help</h2>
            <div className="gridContainer">
              <div className="gridItem party">
                <h3>Madi, Livy & Amelia Farley</h3>
                <p>flower girls & nieces</p>
                <div className="gridImage">
                  <img src={Girls} alt="Madi, Livy, and Amelia Farley" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeddingInfo;
