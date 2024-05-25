import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Trent Stephens</h1>
        <nav>
          <a href="#real-estate">Real Estate</a>
          <a href="#web-dev">Web Dev</a>
          <a href="#web3-dev">Web3 Dev</a>
          <a href="#farming">Farming</a>
          <a href="#family">Family</a>
        </nav>
      </header>

      <section id="real-estate">
        <h2 className="section-header">Real Estate</h2>
        <p>Welcome to my real estate world! I am a dedicated real estate agent in southern Vermont. Whether you're looking to buy, sell, or rent, I am here to help you every step of the way.</p>
      </section>

      <section id="web-dev">
        <h2 className="section-header">Web Development</h2>
        <p>As a web developer, I enjoy creating dynamic and responsive websites. My skills in HTML, CSS, and JavaScript allow me to build user-friendly and visually appealing web pages.</p>
      </section>

      <section id="web3-dev">
        <h2 className="section-header">Web3 Development</h2>
        <p>Web3 development is my passion. I explore blockchain technology and decentralized applications. My projects often involve Ethereum, IPFS, and smart contracts.</p>
      </section>

      <section id="farming">
        <h2 className="section-header">Farming</h2>
        <p>Farming is not just a job, but a way of life for me and my family. We raise rabbits, chickens, and sheep on our farm. We are committed to sustainable and organic farming practices.</p>
      </section>

      <section id="family">
        <h2 className="section-header">Family</h2>
        <p>I am a proud father of two teenagers and husband to an amazing hippy farmer wife. Our family values love, sustainability, and community.</p>
      </section>

      <footer>
        <p>© 2024 Trent Stephens. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
