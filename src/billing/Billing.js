import React from 'react'
import Sidenav from '../share/Sidenav'
import Navbar from '../share/Navbar'
import Box from '@mui/material/Box';


const Billing = () => {
  return (
    <>
    <Navbar/>
    <Box height={40}/>
        <Box sx={{ display: 'flex' }}>

            <Sidenav/>

            <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <h1>billing</h1> 
            </Box>
        </Box>
      
    </>
  )
}

export default Billing
