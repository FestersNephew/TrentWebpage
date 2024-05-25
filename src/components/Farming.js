import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Farming.css';

const Farming = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="farming-section">
      <animated.div className="farming-content" style={fadeIn}>
        <div className="farming-item"> {/* Page 1 */}
          <h2>Farming Life</h2>
          <p>Farming is not just a job, but a way of life for me and my family. We raise rabbits, chickens, and sheep on our farm...</p>
        </div>
        <div className="farming-item"> {/* Page 2 */}
          <h2>Our Animals</h2>
          <img src="/images/farm-animals.jpg" alt="Farm Animals" />
        </div>
        <div className="farming-item"> {/* Page 3 */}
          <h2>Organic Practices</h2>
          <p>We are committed to sustainable and organic farming practices to ensure the health of our land and animals...</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Farming;
