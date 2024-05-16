import React from 'react';
import './Navbar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';



export const Navbar = () => {
   return (

       <Box sex={{ flexGrow: 1}}>
         <AppBar position="static" className="nav" color="primary">
          <Toolbar>
          <a className="logo" href="http://localhost:3000/" >
        <img className="logo-image" src="images/logo.png" alt="logo" />
      </a>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} className="title">
               Zenith Airlines
            </Typography> 
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
          </Toolbar>
         </AppBar>
       </Box>





    );    


}



      /*
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
      </nav>*/