import React from 'react';
import './Registry.css';
import knot from '../../images/registry/the_knot_pink.jpg';
import amazon from '../../images/registry/amazon.png';
import myregistry from '../../images/registry/myregistry.png';

const Registry = () => {
  return (
    <div className="pageContainer">
      <div className="pageContent">
        <div className="headingContainer">
          <div className="headingContent">
            <h1>Our Registry</h1>
            <p>We are registered under the following stores:</p>
            <div className="registryItems">
              <div className="registryItem">
                <a
                  href="https://www.myregistry.com/wedding-registry/samantha-farley-and-scott-pietruniak-boston-ma/4745275"
                  target="_blank"
                >
                  <img
                    src={myregistry}
                    className="smallContent"
                    alt="home depot logo"
                  />
                </a>
                <p>
                  Check out our MyRegistry.com shopping list{' '}
                  <a
                    href="https://www.myregistry.com/wedding-registry/samantha-farley-and-scott-pietruniak-boston-ma/4745275"
                    target="_blank"
                  >
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
