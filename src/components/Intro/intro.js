import React from 'react'
import './intro.css'
import { Link } from 'react-scroll'

const Intro = () => {
  return (
    <section id="intro">
        <div class="introContent">
            <span className='hello'>Hello,</span>
            <span className='introText'>I'm
                <span className='introName'> Deva</span> <br />Software Engineer
            </span>
            <p className='introPara'>I'm a skilled Software Engineer with experience in designing, developing, deploying and <br />maintainance of applications.</p>
            <Link><button className='btn'>Hire Me</button></Link>
        </div>
        <img src={`${process.env.PUBLIC_URL}/assets/profil.png`} alt="Profile" class="bg" />
    </section>
  )
}

export default Intro