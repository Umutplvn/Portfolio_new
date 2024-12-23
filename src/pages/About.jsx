import { Box, Typography } from '@mui/material'
import React from 'react'
import brainImg from "../assets/Brainn.webp"

const About = () => {
  return (
    <Box sx={{height:"100vh", width:"100vw", backgroundColor:"#EEEEEC"}}>
   
   <Box>
    <Typography component={"h1"} sx={{fontSize:"4rem", fontWeight:"900", textAlign:"center", pt:"2rem", lineHeight:"4rem"}}>Passion Fuels Purpose! 
</Typography>
<Box>
  <img src={brainImg} alt="developer" />
</Box>
   </Box>
      </Box>
  )
}

export default About