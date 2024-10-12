import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <h1>Welcome to Our Wedding</h1>
      <p>Join us in celebrating our love on [Date]!</p>
      <nav>
        <ul>
          {/* <li><Link to="/wedding-info">Wedding Info</Link></li> */}
          <li><Link to="/our-story">Our Story</Link></li>
          {/* <li><Link to="/attractions">Attractions</Link></li>
          <li><Link to="/registry">Registry</Link></li> */}
        </ul>
      </nav>
    </div>
  );
};

export default Home;
