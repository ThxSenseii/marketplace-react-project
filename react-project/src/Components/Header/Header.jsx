/* import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {

  return (

    <div id="headerContainer">
      <h3><Link to="/">WELCOME TO BIKES</Link></h3> */
        /* <h2 id="headerTitle">Reboot Cocktails</h2> /}
         
        {/ <Link  reloadDocument  to="random"><p>Random</p></Link> /}
        {/ <Link to="categories"><p>Categories</p></Link> */
/*     </div>
  )
}

export default Header */

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { Link } from 'react-router-dom';
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const pages = ['Products', 'Pricing', 'Blog'];

function ResponsiveAppBar() {


  return (
    <AppBar position="static" sx={{backgroundColor: '#646cffaa'}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link} 
            to="/"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Bikes Paradise
          </Typography>

          <Box sx={{ flexGrow: 1 }}></Box>

          <Tooltip title="Go to User Page">
            <IconButton component={Link} to="/User" sx={{ p: 0 }}>
            <AccountCircleRoundedIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
