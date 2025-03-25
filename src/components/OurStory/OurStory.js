import React from 'react';
import './OurStory.css';
import hinge from '../../images/icons/hinge_svg.svg';
import penguin from '../../images/icons/penguin.png';
import car from '../../images/icons/car.png';
import house from '../../images/icons/house.png';
import ring from '../../images/icons/ring.png';
import rings from '../../images/icons/rings.png';

const OurStory = () => {
  return (
    <div className="storyPageContainer">
      <div className="storyPageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>Our Story</h1>
            <p>A timeline of Sam and Scott's history together.</p>
          </div>
        </div>
        <section id="cd-timeline" className="cd-container cssanimations">
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={hinge} className="icon regularIcon" alt="hinge logo" />
            </div>
            <div className="cd-timeline-content">
              <h3>March 2021</h3>
              <p>
                Scott was living in Somerville, MA while Sam was living in
                Tower, MN. She had set her dating location on Hinge to the
                Boston area a few months before intending to move there, with
                the following on her profile:
              </p>
              <p>
                <strong>Prompt:</strong> "My simple pleasures"
                <br />
                <strong>Sam's answer:</strong> "Newspaper puzzles, walks outside
                and beating you in Mario Kart."
              </p>
              <p>
                Scott replied with the DM "bet," sure that a girl this cute
                would never reply anyway. After exchanging messages the length
                of short novels, they decided a FaceTime might be worthwhile and
                had their first virtual date on March 26.
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
                School. She traveled on business to Boston for the first time
                for a week to meet her boss and prepare for being the summer
                camp director there.
              </p>
              <p>
                After work, Sam met Scott in person for the first time and saw
                him thrice that week. Scott asked to be exclusive on their
                second in-person date. Sam said, "I thought we already were"...
                surprisingly, it wasn't that awkward.
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
              <p>
                They went to Cheeky Monkey, got street meat outside of Fenway
                Park, kayaked on the Charles, ate dinner at the Liberty Hotel
                (foreshadowing perhaps?).
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={car} className="icon smallIcon" alt="car icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>August 2021</h3>
              <p>
                Scott met Sam's family for the first time when they took a trip
                out to Marshfield, MA.
              </p>
              <p>
                Sam and Scott also attended their first Green Day concert
                together.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={car} className="icon smallIcon" alt="car icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>September 2021</h3>
              <p>
                Sam met Scott's parents for the first time when they took a trip
                out to Salem, MA and saw her first Patriots game that weekend.
                She met Scott's brother later in Vegas... for her second Green
                Day concert.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={car} className="icon smallIcon" alt="car icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>July 2022</h3>
              <p>
                Scott visits the cabin on Lake Vermilion in Tower, MN, for the
                first time for his and Cathy's (Sam's mom) birthday on 7/11.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={car} className="icon smallIcon" alt="car icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>January 2023</h3>
              <p>
                Scott surprises Sam for Christmas by flying out to the cabin for
                snowmobiling and family time. This is one of Sam's all-time
                favorite memories.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={car} className="icon smallIcon" alt="car icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>July 2023</h3>
              <p>
                Scott and Sam went to Eau Claire, WI for the Country Jam music
                festival and to visit Sam's old stomping grounds at UW-Eau
                Claire. Highlights included seeing Lee Brice, Scott going
                full-country and getting very drunk and dancey, a legendary
                foosball game and Scott getting the shuttle bus riders to sing
                "Friends in Low Places" on the ride home... twice.
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
                A big month! Scott moved into the Brighton duplex Sam had moved
                to after her summer in Arlington, and he started a new job after
                five years at Ernst and Young. They also shared Labor Day
                weekend with the Syracuse gang, saw All Time Low again, and
                vacationed in Portland, ME.
              </p>
              <p>
                Next month would be a big month too as the Farleys met the
                Pietruniaks for Steve and Katelyn's wedding.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              <img src={house} className="icon smallIcon" alt="house icon" />
            </div>
            <div className="cd-timeline-content">
              <h3>Winter 2023</h3>
              <p>
                Sam and Scott spent the holidays together for the first time.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={house} className="icon smallIcon" alt="house icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>June 2024</h3>
              <p>
                Sam and Scott get granola and go camping for the first time! It
                rained the entire weekend but they had an absolute blast.
              </p>
              <p>
                They still found time to attend the Celtics NBA Championship
                parade.
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
              <p>
                P.S. Another Green Day concert. We lost count which one it was
                for Sam.
              </p>
            </div>
          </div>
          <div className="cd-timeline-block">
            <div className="cd-timeline-img">
              {/* <img src={house} className="icon smallIcon" alt="house icon" /> */}
            </div>
            <div className="cd-timeline-content">
              <h3>2025</h3>
              <p>
                The year of love! Scott and Sam will attend six--of which Sam
                will be in three--weddings before their own at the end of the
                year.
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
        <section id="tooGoodToPietru">
          <h2>What is Too Good to Pietru?</h2>
          <p>
            This is the wedding hashtag Sam came up with while listening to her
            favorite band, Rascal Flatts, on the way to Sam and Scott's first
            camping trip in New Hampshire. The band has a song called "Too Good
            is True" which has a cute message and conveniently rhymes with part
            of Scott's last name, Pietruniak. Give it a listen!
          </p>
          <iframe
            width="650"
            height="350"
            src="https://www.youtube.com/embed/U9F1LLHEbpc?si=Y93aoKFBW8yuPCQD"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </section>
      </div>
    </div>
  );
};

export default OurStory;
