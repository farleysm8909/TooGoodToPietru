import React from 'react';
import './WeddingInfo.css';

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
          <p>Grid of folks in the bridal party here.</p>
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
