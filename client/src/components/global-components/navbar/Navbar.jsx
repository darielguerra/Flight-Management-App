import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenuIcon } from '../../../assets/svg-icons-new/HamburgerMenuIcon';
import './Navbar.css';

export const Navbar = () => {
 
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState(false);

   return (
    <nav className="nav">     
    {/*   
      <a className="title" href="/"> 
          <div className="heading-underline">
            <h1 className="heading">Zenith Airlines</h1>
          </div>
          <h3 className="subheading">Flight Management App</h3>
      </a>
    */} 

      <a className="nav-title" href="/"> 
        <img className="nav-logo-img" src="images/NavBarWingMatchingBlue300pxWide.png" alt="Zenith Airlines" />
        <div className="nav-title-initials">ZA</div>
        <div className="nav-title-name">Fligth Management App</div>
      </a>

      <div className="hamburger-menu-icon-container"
           onClick={() => setOpenHamburgerMenu(!openHamburgerMenu)}>
        <HamburgerMenuIcon />
      </div>

      <div>        
        <ul className="nav-links">
            {/*<li><Link to="/createaflight">Create A Flight</Link></li>*/}

            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/airports">Airports</Link></li>
            <li><Link to="/pilots">Pilots</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </div>
      
      {openHamburgerMenu && (
        <div onClick={() =>setOpenHamburgerMenu(!openHamburgerMenu)} className="overlay">
        <div onClick={(e) => e.stopPropagation()} className="hamburger-menu-window">
          <ul className="hamburger-menu-nav-links">
            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/airports">Airports</Link></li>
            <li><Link to="/pilots">Pilots</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>
        </div>
        </div>
      )}

    </nav>
    );   
}

