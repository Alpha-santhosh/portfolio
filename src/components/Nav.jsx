import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const [active, setactive] = useState('');
  return (
    <>
      <header>
        <div className="logo">
          S
        </div>
        <nav>
          <ul className='nav_ul'>
            <li className='nav_li' style={(active === 'home') ? { color: "rgb(100, 255, 218)" } : { color: "rgb(204, 214, 246)" }}>
              <Link to='/' onClick={() => { setactive('home') }}>Home</Link>
            </li>
            <li className='nav_li' style={(active === 'about') ? { color: "rgb(100, 255, 218)" } : { color: "rgb(204, 214, 246)" }}>
              <Link to='/about' onClick={() => { setactive('about') }}>About</Link>
            </li>
            <li className='nav_li' style={(active === 'skills') ? { color: "rgb(100, 255, 218)" } : { color: "rgb(204, 214, 246)" }}>
              <Link to='/skills' onClick={() => { setactive('skills') }}>Skills</Link>
            </li>
            <li className='nav_li' style={(active === 'project') ? { color: "rgb(100, 255, 218)" } : { color: "rgb(204, 214, 246)" }}>
              <Link to='/projects' onClick={() => { setactive('project') }}>Projects</Link>
            </li>
            <li className='nav_li' style={(active === 'contact') ? { color: "rgb(100, 255, 218)" } : { color: "rgb(204, 214, 246)" }}>
              <Link to='/contact' onClick={() => { setactive('contact') }}>Contact</Link>
            </li>
          </ul>
          <a href="" className='resume_btn'>Resume</a>
        </nav>
        <div className="social_section">
          <div className="right_link">
            <ul className='ul_of_links'>
              <li><a href="https://github.com/Alpha-santhosh" target='_blank'><i class="fa-brands fa-github"></i></a></li>
              <li><a href="https://www.linkedin.com/in/santhosh-subramani/" target='_blank'><i class="fa-brands fa-linkedin"></i></a></li>
              <li><a href="mailto:subramanisanthosh00@gmail.com"><i class="fa-solid fa-envelope"></i></a></li>
              <li><a href="https://www.instagram.com/santhosh_subramani_20/" target='_blank'><i class="fa-brands fa-instagram"></i></a></li>
            </ul>
            <div className="r_line"></div>
          </div>
          <div className="left_link">
            <a className='email_rotate' href="mailto:subramanisanthosh00@gmail.com" target='_blank'>subramanisanthosh00@gmail.com</a>
            <div className="l_line"></div>
          </div>
        </div>
      </header >
    </>
  )
}

export default Nav