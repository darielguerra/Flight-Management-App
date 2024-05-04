import React from 'react';
import './Navbar.css';

export const Navbar = () => {
   return (
        <nav className="nav">
    
          <a className="logo" href="http://localhost:3000/" >
            <img className="logo-image" src="images/logo.png" alt="logo" />
          </a>
            <h1 className="logo-name"><strong>Zenith Airlines</strong></h1>
          <div>
            <ul className="nav-links">
                <li><a href="http://localhost:3000/createaflight">Create A Flight</a></li>
            </ul>
          </div>
        </nav>
    );
}