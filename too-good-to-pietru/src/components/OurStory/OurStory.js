import React from 'react';
import './OurStory.css';
import hinge from '../../images/icons/hinge_svg.svg';
import penguin from '../../images/icons/penguin.png';
import car from '../../images/icons/car.png';
import house from '../../images/icons/house.png';
import ring from '../../images/icons/ring.png';
import rings from '../../images/icons/rings.png';

const OurStory = () => {
  const items = [
    {
      title: 'Scott messages "bet" to Sam via Hinge DM',
      cardTitle: 'First contact',
      cardDetailedText:
        'Sam\'s profile contained the prompt "My simple pleasures" to which she shared her response as "Newspaper puzzles, walks outside and beating you in MarioKart.',
    },
  ];

  return (
    <div>
      <h1>Our Story</h1>
      <p>A timeline of Sam and Scott's history together.</p>
      <div className="timelineContainer">
        <section id="cd-timeline" className="cd-container cssanimations">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={hinge} className="icon regularIcon" alt="hinge logo" />
            </div>
            <div className="cd-timeline-content">
              <h3>March 2021</h3>
              <p>
                Scott messages the word "bet" to Sam via DM on the online dating
                app, Hinge, in response to one of her profile's prompts:
              </p>
              <p>
                <strong>Prompt:</strong> "My simple pleasures"
                <br />
                <strong>Sam's answer:</strong> "Newspaper puzzles, walks outside
                and beating you in Mario Kart."
              </p>
              <p>
                Sam and Scott go on their first virtual, FaceTime date on March
                26. Interestingly, Scott was living in Somerville, MA while Sam
                was living in Tower, MN. She had set her dating location to the
                Boston area a few months before moving there.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img
                src={penguin}
                className="icon regularIcon"
                alt="penguin icon"
              />
            </div>
            <div className="cd-timeline-content">
              <h3>April 2021</h3>
              <p>
                Sam was a coding instructor teaching remotely at Penguin Coding
                School during this time. She traveled on business to Boston for
                the first time for a week to meet her boss and prepare for being
                the summer camp director there.
              </p>
              <p>
                After work, Sam met Scott in person for the first time and saw
                him three times that week. They became exclusive not long after.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={car} className="icon smallIcon" alt="car icon" />
            </div>
            <div className="cd-timeline-content">
              <h3>June 2021</h3>
              <p>
                Sam drives ~24 hours from Tower, MN to Arlington, MA and moves
                in to a long-term Airbnb where she continues to date Scott.
                Since Scott had already lived in Boston for three years and was
                the only person Sam knew there aside from coworkers, he became
                her unofficial tour guide of the city.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={house} className="icon smallIcon" alt="house icon" />
            </div>
            <div className="cd-timeline-content">
              <h3>September 1, 2023</h3>
              <p>
                Scott moves into the Brighton duplex Sam had moved to after her
                summer in Arlington.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={ring} className="icon regularIcon" alt="ring icon" />
            </div>
            <div className="cd-timeline-content">
              <h3>August 23, 2024</h3>
              <p>
                Scott proposes to Sam by the lake at her family's cabin in
                Tower, MN, after a 24 mile bike ride. Friends and family showed
                up for the surprise and spent the weekend celebrating together
                at the cabin.
              </p>
              <p>
                Though Sam wasn't completely surprised as she had a hunch about
                the trip, it was a magical and unforgettable weekend.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={rings} className="icon smallIcon" alt="rings icon" />
            </div>
            <div className="cd-timeline-content">
              <h3>January 2, 2026</h3>
              <p>The day these two plan to get married!</p>
              <p>
                Sam and Scott are excited for this upcoming milestone in their
                relationship and look forward to celebrating it with their
                friends and family.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurStory;
