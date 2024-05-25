import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Web3Dev.css';

const Web3Dev = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="web3-dev-section">
      <animated.div className="web3-dev-content" style={fadeIn}>
        <div className="web3-dev-item"> {/* Page 1 */}
          <h2>Web3 Development</h2>
          <p>Web3 development is my passion. I explore blockchain technology and decentralized applications...</p>
        </div>
        <div className="web3-dev-item"> {/* Page 2 */}
          <h2>Projects</h2>
          <img src="/images/web3-projects.jpg" alt="Web3 Projects" />
        </div>
        <div className="web3-dev-item"> {/* Page 3 */}
          <h2>Technologies</h2>
          <img src="/images/web3-technologies.jpg" alt="Web3 Technologies" />
        </div>
      </animated.div>
    </div>
  );
};

export default Web3Dev;
