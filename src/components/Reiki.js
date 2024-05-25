import React from 'react';
import { useSpring, animated } from 'react-spring';
import './Reiki.css';

const Reiki = () => {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="reiki-section">
      <animated.div className="reiki-content" style={fadeIn}>
        <div className="reiki-item"> {/* Page 1 */}
          <h2>Reiki Practice</h2>
          <p>I am a Reiki practitioner, providing healing energy sessions to promote wellness and balance in life...</p>
        </div>
        <div className="reiki-item"> {/* Page 2 */}
          <h2>Healing Sessions</h2>
          <img src="/images/reiki-session.jpg" alt="Reiki Sessions" />
        </div>
        <div className="reiki-item"> {/* Page 3 */}
          <h2>Benefits of Reiki</h2>
          <p>Reiki has been a transformative practice for me and I love sharing its benefits with others. It helps reduce stress, promote relaxation, and enhance overall well-being...</p>
        </div>
      </animated.div>
    </div>
  );
};

export default Reiki;
