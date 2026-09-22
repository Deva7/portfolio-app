import React from 'react';
import './intro.css';
import { Link } from 'react-scroll';

const RESUME_URL = 'https://drive.google.com/file/d/1A8JF4Knubb7bbi3PAWBFNNiD1P9zEASK/view?usp=sharing';

const Intro = () => {
  const handleClick = () => {
    window.open(RESUME_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="intro">
      <div className="introContent">
        <span className='hello'>Hello,</span>
        <span className='introText'>I'm
          <span className='introName'> Deva Potarlanka</span> <br />Software Engineer
        </span>
        <p className='introPara'>I'm a skilled Software Engineer with experience in designing, developing, deploying and maintainance of applications.</p>
        <div className='introBtn'>
          <Link activeClass='active' to='contact-section' spy={true} smooth={true} offset={50} duration={500}>
            <button type='button' className='btn'>Hire Me</button>
          </Link>
          <button type='button' className='btn' onClick={handleClick}>View Resume</button>
        </div>
      </div>
      <img src={`${process.env.PUBLIC_URL}/assets/Main_logo.png`} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro