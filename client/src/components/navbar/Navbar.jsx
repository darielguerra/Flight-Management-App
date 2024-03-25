import React from 'react';
import './NavbarStyles.css';

export const Navbar = () => {
   return (
        <nav className="nav">
    
          <a className="logo" href="http://localhost:3000/" >
            <img className="logo-image" src="images/Plane.png" alt="plane" />
           <h1 className="logo-name">DGI Airlines</h1>
          </a>
 
          <div>
            <ul className="nav-links">
                <li><a href="http://localhost:3000/createaflight">Create A Flight</a></li>
                <li><a href="http://localhost:3000/editaflight">Edit A Flight</a></li>
            </ul>
          </div>
        </nav>
    );
}