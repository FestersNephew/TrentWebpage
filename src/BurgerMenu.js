import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link as ScrollLink } from 'react-scroll';
import './BurgerMenu.css';

const sections = [
  { id: 'real-estate', title: 'Real Estate' },
  { id: 'web-dev', title: 'Web Development' },
  { id: 'web3-dev', title: 'Web3 Development' },
  { id: 'farming', title: 'Farming' },
  { id: 'family', title: 'Family' },
  { id: 'reiki', title: 'Reiki Practice' },
];

const BurgerMenu = () => (
  <Menu right>
    {sections.map(section => (
      <ScrollLink key={section.id} to={section.id} smooth={true} duration={1000}>
        {section.title}
      </ScrollLink>
    ))}
  </Menu>
);

export default BurgerMenu;
