import React from 'react'
import Drawer1 from '../form/Drawer1';
import { Box } from '@mui/material';

function About() {
  return (
    <>
    <Box sx={{ display: 'flex '  }}>
  <Drawer1/>
   <div className='mt-20'>
   <h1>
        about
    </h1>
   </div>
    </Box>
  </>
  )
}

export default About
