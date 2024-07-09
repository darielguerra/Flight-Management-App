import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export const Navbar = () => {
   return (
    <nav className="nav">          
      <a className="logo" href="/">
        <img className="logo-image" src="images/Logo11.png" alt="logo" />
      </a>
      <div className="title">
        <h1 className="logo-name"><strong>Zenith</strong></h1>
        <h1 className="logo-name"><strong>Airlines</strong></h1>
      </div>
      <div>
        <ul className="nav-links">
            <li><Link to="/createaflight">Create A Flight</Link></li>
            <li><Link to="/about">About</Link></li>
        </ul>
      </div>
    </nav>
    );   
}

