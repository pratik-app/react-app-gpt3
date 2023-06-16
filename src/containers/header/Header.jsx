import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const handleClick = () => {
  window.location.href = 'mailto:morepratik1616@gmail.com';
};
const Header = () => (
  
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something using React Like this!</h1>
      <p>Are you passionate about React and eager to embark on a transformative journey of coding and creation? Look no further! Join me as we dive into the exciting realm of React, where innovation and limitless possibilities await. Together, we'll unleash the power of this cutting-edge technology to craft remarkable digital experiences that leave a lasting impact. From dynamic web applications to stunning user interfaces, we'll explore the depths of React's versatility and harness its potential to build something truly extraordinary. Are you ready to embark on this collaborative adventure? Let's come together, share our expertise, and make our mark in the React ecosystem. Get ready to join me on a thrilling React journey as we build something truly remarkable!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button" onClick={handleClick}>Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Let's talk!</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;