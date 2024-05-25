import React from 'react';
import { Element } from 'react-scroll';
import { useSpring, animated } from 'react-spring';
import BurgerMenu from './BurgerMenu';
import RealEstate from './components/RealEstate';
import WebDev from './components/WebDev';
import Web3Dev from './components/Web3Dev';
import Farming from './components/Farming';
import Family from './components/Family';
import Reiki from './components/Reiki';
import './App.css';

const sections = [
  { id: 'real-estate', component: <RealEstate /> },
  { id: 'web-dev', component: <WebDev /> },
  { id: 'web3-dev', component: <Web3Dev /> },
  { id: 'farming', component: <Farming /> },
  { id: 'family', component: <Family /> },
  { id: 'reiki', component: <Reiki /> },
];

function App() {
  const fadeIn = useSpring({ from: { opacity: 0 }, to: { opacity: 1 }, config: { duration: 2000 } });

  return (
    <div className="App">
      <header>
        <BurgerMenu />
      </header>

      {sections.map(section => (
        <Element key={section.id} name={section.id} className="section">
          <animated.div style={fadeIn}>
            {section.component}
          </animated.div>
        </Element>
      ))}

      <footer>
        <p>© 2024 Trent Stephens. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
