import React from 'react';
import { useSpring, animated } from 'react-spring';
import './RealEstate.css';

const RealEstate = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="real-estate-section">
      <animated.div className="real-estate-content" style={fadeIn}>
        <div className="real-estate-item">
          <h2>Real Estate Career</h2>
          <p>Welcome to my real estate world! I am a dedicated real estate agent in southern Vermont...</p>
        </div>
        <div className="real-estate-item">
          <h2>Recent Sales</h2>
          <img src={`${process.env.PUBLIC_URL}/images/recent-sales.jpg`} alt="Recent Sales" />
        </div>
        <div className="real-estate-item">
          <h2>Sales and Client Base</h2>
          <img src={`${process.env.PUBLIC_URL}/images/sales-chart.jpg`} alt="Sales Chart" />
        </div>
      </animated.div>
    </div>
  );
};

export default RealEstate;
