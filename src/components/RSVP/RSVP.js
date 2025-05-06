import React from 'react';
import './RSVP.css';

const RSVP = () => {
  return (
    <div className="rsvpPageContainer">
      <div className="rsvpPageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>RSVP</h1>
            <p>
              We are still working on our RSVPs. We appreciate your patience and
              hope to have this page available soon!
              {/* Please submit your RSVP by October 2, 2026 to confirm your
              attendance at our wedding. We hope to see you there! */}
            </p>
          </div>
        </div>
        {/* <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSeILiTqgo-DgrQslNxv1rOkrVgMDvaGCVWW_6J7Y3RlxVABEQ/viewform?embedded=true"
          width="100%"
          height="1400"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe> */}
      </div>
    </div>
  );
};

export default RSVP;
