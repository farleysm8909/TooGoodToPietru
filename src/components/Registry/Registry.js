import React from 'react';
import './Registry.css';
import knot from '../../images/registry/the_knot_pink.jpg';
import amazon from '../../images/registry/amazon.png';
import depot from '../../images/registry/home_depot.png';

const Registry = () => {
  return (
    <div className="registryPageContainer">
      <div className="registryPageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>Our Registry</h1>
            <p>We are registered under the following stores:</p>
            <div className="registryItems">
              <div className="registryItem">
                <a href="" target="_blank">
                  <img
                    src={depot}
                    className="smallContent"
                    alt="home depot logo"
                  />
                </a>
                <p>
                  Check out our Home Depot shopping list{' '}
                  <a href="" target="_blank">
                    here
                  </a>
                  .
                </p>
              </div>
              <div className="registryItem">
                <a
                  href="https://registry.theknot.com/-january-2026-mn/71022212"
                  target="_blank"
                >
                  <img
                    src={knot}
                    className="smallContent"
                    alt="the knot logo"
                  />
                </a>
                <p>
                  Check out our shopping list on The Knot{' '}
                  <a
                    href="https://registry.theknot.com/-january-2026-mn/71022212"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
              <div className="registryItem">
                <a
                  href="https://www.amazon.com/wedding/registry/3LGE6OG7JD97J"
                  target="_blank"
                >
                  <img
                    src={amazon}
                    className="smallContent"
                    alt="amazon logo"
                  />
                </a>
                <p>
                  Check out our Amazon shopping list{' '}
                  <a
                    href="https://www.amazon.com/wedding/registry/3LGE6OG7JD97J"
                    target="_blank"
                  >
                    here
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registry;
