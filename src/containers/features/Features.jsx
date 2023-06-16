import React from 'react';
import Feature from '../../components/feature/Features';
import './features.css';

const featuresData = [
  {
    title: 'LAMP Stack',
    text: 'Leveraging the power of the LAMP (Linux, Apache, MySQL, PHP) stack, I have acquired proficiency in building robust web applications. With expertise in Linux server administration, Apache web server configuration, MySQL database management, and PHP development, I harness the collective strength of these technologies to create secure, scalable, and high-performing web solutions.',
  },
  {
    title: 'Laravel Framework',
    text: 'With expertise in Laravel, I excel in crafting dynamic and business-centric web applications. Leveraging the power of this robust PHP framework, I create responsive, scalable, and feature-rich websites. From integrating APIs and optimizing database performance to implementing secure authentication systems, I harness Laravel capabilities to deliver exceptional user experiences and drive business success.',
  },
  {
    title: 'React Libraries',
    text: "Utilizing the power of the React library, I create engaging and interactive user interfaces. With a strong command over React, I develop dynamic web applications that deliver seamless user experiences. Leveraging React component-based architecture and virtual DOM, I build efficient and scalable front-end solutions. Let's bring your vision to life with the versatility of React.",
  },
  {
    title: 'What Next',
    text: 'As an aspiring full stack developer, I am actively expanding my skill set to master the art of building comprehensive web applications using Python. With a thirst for knowledge, I am constantly learning new frameworks, libraries, and technologies to enhance my proficiency in both front-end and back-end development.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">Embrace the Power of the Future and Seize the Opportunity. Unlock your Potential Today and Transform Possibilities into Reality.</h1>
      <p>Let's build application that will boost your business</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;