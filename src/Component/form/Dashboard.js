import React from 'react'
import Drawer1 from '../form/Drawer1';
import Box from '@mui/material/Box';

function Dashboard() {
    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <Drawer1 />
                <div className='mt-20'>
                    <h1>
                        dashbord
                    </h1>
                </div>c
            </Box>
        </>
    )
}

export default Dashboard
