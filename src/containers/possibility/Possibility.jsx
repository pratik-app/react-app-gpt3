import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Checkout Projects</h4>
      <h1 className="gradient__text">Check My <br /> <a href='https://pratikmore.com'>Portfolio</a></h1>
      <p>The upcoming projects will be focused on React, as I embark on leveraging this powerful library for developing dynamic and engaging user interfaces. I am excited to dive into the world of React, exploring its vast potential to create innovative web applications that deliver seamless and immersive experiences.</p>
      <h4>Check Now!</h4>
    </div>
  </div>
);

export default Possibility;