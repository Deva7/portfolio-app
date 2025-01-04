import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-50} duration={500}>
            <img src={`${process.env.PUBLIC_URL}/assets/Picture1.png`} alt="Logo" />
          </Link>
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          <Link activeClass='active' to='education-section' spy={true} smooth={true} offset={0} duration={500}>Education</Link>
          <Link activeClass='active' to='experience-section' spy={true} smooth={true} offset={0} duration={500}>Experience</Link>
          <Link activeClass='active' to='about-section' spy={true} smooth={true} offset={-50} duration={500}>About</Link>
        </div>
        <Link activeClass='active' to='contact-section' spy={true} smooth={true} offset={50} duration={500} className="contact-btn">Contact Me</Link>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
