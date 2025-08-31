import React from 'react';
import { Link } from 'react-router-dom';
import './RSVP.css';

const RSVP = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>RSVP</h1>
            <p>
              {/* We are still working on our RSVPs. We appreciate your patience and
              hope to have this page available soon! */}
              Please submit your RSVP by <strong>November 15, 2025</strong> to
              confirm your attendance at our wedding. We hope to see you there!
            </p>
            {/* <p>
              In the meantime, consider booking your hotel room at our venue,
              the InterContinental. We have a room block with discounted rate
              (access via link below), but it is subject to room availability.
              We anticipate the majority of our guests will stay at this hotel
              as it is where our rehearsal dinner, ceremony and reception will
              be, so be sure to book your stay as soon as possible!
            </p> */}
            <div className="buttonContainer">
              <p>
                <Link
                  to="https://docs.google.com/forms/d/e/1FAIpQLSeILiTqgo-DgrQslNxv1rOkrVgMDvaGCVWW_6J7Y3RlxVABEQ/viewform?usp=header"
                  target="_blank"
                >
                  <button id="rsvpBtn">Open RSVP in new tab</button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeILiTqgo-DgrQslNxv1rOkrVgMDvaGCVWW_6J7Y3RlxVABEQ/viewform?embedded=true"
          width="100%"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default RSVP;
