// import React from 'react';
// import './navbar.css';
// import { Link } from 'react-scroll';

// const Navbar = () => {
//   return (
//     <nav className='navbar'>
//       <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logo' className='logo' />
//       <div className="desktopMenu">
//         <Link to='home' className='desktopMenuListItem'>Home</Link>
//         <Link to='education' className='desktopMenuListItem'>Education</Link>
//         <Link to='experience' className='desktopMenuListItem'>Experience</Link>
//         <Link to='about' className='desktopMenuListItem'>About</Link>
//       </div>
//       <button className='desktopMenuBtn'>
//         <Link to='contact' className='desktopContactBtn'>Contact Me</Link>
//       </button>
//     </nav>
//   );
// }

// export default Navbar;


import React, { useState } from 'react';
import './navbar.css';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
        </div>
        <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          <a href="#home">Home</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#about">About</a>
        </div>
        <a href="#contact" className="contact-btn">Contact Me</a>
        <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
          ☰
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
