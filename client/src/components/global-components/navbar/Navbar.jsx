import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
   return (
    <nav className="nav">          
      <a className="logo" href="/">
          <h1 className="title">Zenith Airlines</h1>
      </a>

      <div>
        <ul className="nav-links">
            {/*<li><Link to="/createaflight">Create A Flight</Link></li>*/}
            <li><Link to="/flights">Flights</Link></li>
            <li><Link to="/airports">Airports</Link></li>
            <li><Link to="/pilots">Pilots</Link></li>
        </ul>
      </div>
    </nav>
    );   
}

