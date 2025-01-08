import React from 'react';
import { Link } from 'react-router-dom';
import { HamburgerMenu } from '../../../assets/svg-icons-new/HamburgerMenu';
import './Navbar.css';

export const Navbar = () => {
   return (
    <nav className="nav">          
      <a className="title" href="/"> 
          <div className="heading-underline">
            <h1 className="heading">Zenith Airlines</h1>
          </div>
          <h3 className="subheading">Flight Management App</h3>
      </a>

      <div>        
        <ul className="nav-links">
            {/*<li><Link to="/createaflight">Create A Flight</Link></li>*/}
            <div className="nav-hamburger-menu">
              <HamburgerMenu />
            </div>
            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/airports">Airports</Link></li>
            <li><Link to="/pilots">Pilots</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    );   
}

