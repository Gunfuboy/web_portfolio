import React from 'react';
import { Box } from '@mui/material';
import {Link} from 'react-router-dom';
import '../styles/NavBar.css';

function NavigationBar() {
  return(
    <div className='navbar'>
      <Box className='container'>

        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/experience">Experience</Link>
        <Link className='link' to="/projects">Projects</Link>

      </Box>
    </div>
  )
}

export default NavigationBar;
