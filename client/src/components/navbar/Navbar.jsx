import React from 'react';
import './Navbar.css';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import { Link } from 'react-router-dom';


export const Navbar = () => {

   const theme = useTheme();

   return (

    <nav className="nav">          
      <a className="logo" href="http://localhost:3000/" >
        <img className="logo-image" src="images/logo 11.png" alt="logo" />
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



      /*

       <Box sex={{ flexGrow: 1}}>
         <AppBar position="fixed" className="nav" style={{ backgroundColor: theme.palette.primary.main }}>
          <Toolbar>
          <a className="logo" href="http://localhost:3000/" >
        <img className="logo-image" src="images/logo.png" alt="logo" />
      </a>
            
            <Typography variant="h3" textAlign="center" component="div" sx={{ flexGrow: 1 }} className="title">
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


*/