import React from 'react';
import { useSpring, animated } from 'react-spring';
import './WebDev.css';

const WebDev = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="web-dev-section">
      <animated.div className="web-dev-content" style={fadeIn}>
        <div className="web-dev-item"> {/* Page 1 */}
          <h2>Web Development Career</h2>
          <p>As a web developer, I enjoy creating dynamic and responsive websites...</p>
        </div>
        <div className="web-dev-item"> {/* Page 2 */}
          <h2>Projects</h2>
          <img src={`${process.env.PUBLIC_URL}/images/projects.jpg`} alt="Projects" />
        </div>
        <div className="web-dev-item"> {/* Page 3 */}
          <h2>Technologies</h2>
          <img src={`${process.env.PUBLIC_URL}/images/technologies.jpg`} alt="Technologies" />
        </div>
      </animated.div>
    </div>
  );
};

export default WebDev;
