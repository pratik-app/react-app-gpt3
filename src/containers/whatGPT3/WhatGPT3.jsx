import React from 'react';
import Feature from '../../components/feature/Features';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="About Pratik More" text="I'm Pratik More, a results-driven Full Stack Developer with expertise in PHP, C, C++, Java, Python, C#, and JavaScript. Skilled in LAMP stack, HTML5, CSS3, ES6 JavaScript, PHP, MySQL, and Bootstrap. With a passion for automating business processes and crafting responsive websites, I strive to contribute innovative solutions and foster business growth." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Hi! I'm Pratik More</h1>
      <a href='https://pratikmore.com'><p>Check my portfolio</p></a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Laravel App" text="I specialize in Laravel development, crafting responsive and business-tailored websites that meet your unique needs. With expertise in Laravel's robust framework, I create dynamic and scalable solutions that enhance user experience and drive business growth. Let me bring your vision to life with a Laravel-powered website." />
      <Feature title="Knowledgebase" text=" I curate a repository of my expertise in various programming languages, including PHP, C, C++, Java, Python, C#, and JavaScript. From web development to application programming, I offer practical insights, coding best practices, and tips for efficient and scalable code to support your development projects." />
      <Feature title="Education" text="I completed my Diploma in Computer Programming from Georgian College, where I achieved Dean's List recognition. Additionally, I earned a Bachelor's degree in Computer Engineering from Gujarat Technological University, gaining advanced knowledge in frameworks like Laravel, React, and Bootstrap. My education equipped me with a diverse skill set to tackle projects across multiple programming languages." />
    </div>
  </div>
);

export default WhatGPT3;