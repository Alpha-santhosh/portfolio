import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
      <header>
        <div className="logo">
          S
        </div>
        <nav>
          <ol type='01' className='nav_ul'>
            <li className='nav_li'>
              <Link to='/'>Home</Link>
            </li>
            <li className='nav_li'>
              <Link to='/about'>About</Link>
            </li>
            <li className='nav_li'>
              <Link to='/skills'>Skills</Link>
            </li>
            <li className='nav_li'>
              <Link to='/projects'>Projects</Link>
            </li>
            <li className='nav_li'>
              <Link to='/contact'>Contact</Link>
            </li>
          </ol>
          <a href="" className='resume_btn'>Resume</a>
        </nav>
      </header>
    </>
  )
}

export default Nav