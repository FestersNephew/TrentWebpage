import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Family.css';

const Family = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="family-section">
      <animated.div className="family-content" style={fadeIn}>
        <div className="family-item"> {/* Page 1 */}
          <h2>My Family</h2>
          <p>I am a proud father of two teenagers and husband to an amazing hippy farmer wife...</p>
        </div>
        <div className="family-item"> {/* Page 2 */}
          <h2>Family Activities</h2>
          <img src={`${process.env.PUBLIC_URL}/images/family-activities.jpg`} alt="Family Activities" />
        </div>
        <div className="family-item"> {/* Page 3 */}
          <h2>Family Values</h2>
          <p>Our family values love, sustainability, and community. We enjoy spending time together on our farm...</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Family;
