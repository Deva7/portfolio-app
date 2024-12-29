import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logo' className='logo' />
      <div className="desktopMenu">
        <Link to='home' className='desktopMenuListItem'>Home</Link>
        <Link to='about' className='desktopMenuListItem'>About</Link>
        <Link to='education' className='desktopMenuListItem'>Education</Link>
        <Link to='experience' className='desktopMenuListItem'>Experience</Link>
      </div>
      <button className='desktopMenuBtn'>
        <Link to='contact' className='desktopContactBtn'>Contact Me</Link>
      </button>
    </nav>
  );
}

export default Navbar;