import React from 'react';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Ready to elevate your business? Let's build a cutting-edge web application powered by React to unlock its full potential</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p><a href="https://app.greminders.com/c/pratikmore/meetingwithprat?bv=1bf128e3-0f68-4c99-b895-e9ac9f8ee7fd">Book Appointment Now</a></p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src="https://pratikmore.com/assets/img/logo.png" alt="pratikmorelogo" />
        <p>Crafted with Passion <br /> © All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><a href='https://pratikmore.com'>Portfolio</a></p>
        <p><a href='https://linkedin.com/in/pratikmore2796'>LinkedIn</a></p>
        <p><a href='https://github.com/pratik-app'>GitHub</a></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>Ontario, Canada</p>
        <p>developer@pratikmore.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2023 pratikmore.com All rights reserved.</p>
    </div>
  </div>
);

export default Footer;