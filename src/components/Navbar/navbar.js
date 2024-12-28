// 'rafce' Tab for creating a basic component structure
import React from 'react'
import './navbar.css'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt='logo' className='logo'/>
        <div className="desktopMenu">
            <Link className='desktopMenuListItem'>Home</Link>
            <Link className='desktopMenuListItem'>About</Link>
            <Link className='desktopMenuListItem'>Skills</Link>
            <Link className='desktopMenuListItem'>Experience</Link>
        </div>
        <button className='desktopMenuBtn'>
            {/* <img src="" alt="contact me" class="desktopMenuImg"/>Contact Me */}
            <Link className='desktopContactBtn'>Contact Me</Link>
        </button>
    </nav>
  )
}

export default Navbar