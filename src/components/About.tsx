import React from 'react'
import "../app/styles/about.css"

const About = () => {
  return (
    <div id='about' className='about-container'>
      <h2 className='about-heading' data-aos="zoom-in-up">About Me.</h2>
      <p className='about-text' data-aos="zoom-in-up">
        I&apos;m a student at GIAIC, pursuing a course in Artificia
        l Intelligence, Web 3.0 and Metaverse.
        Passionate about technology and constantly learning new skills to stay up-to-date with the latest innovations.
      </p>
    </div>
  );
};

export default About;