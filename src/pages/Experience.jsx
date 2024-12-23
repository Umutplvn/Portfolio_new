import { Box, Typography } from '@mui/material'
import React from 'react'

const Experience = () => {
  return (
    <Box sx={{width:"100%", display:"flex", justifyContent:"center", pt:"2rem", flexDirection:"column", alignItems:"center"}}>
        <Box sx={{ mb:"2rem", maxWidth:"35rem"}}>
            <Typography sx={{fontSize:{xs:"1.2rem", sm:"1.5rem"}, fontWeight:"600"}}>Full Stack Developer <strong style={{color:"#B53D95"}}>@Gravitad</strong></Typography>
            <Typography sx={{color:"#515151"}}>2024–Present | Dublin, Ireland	</Typography>
            <Typography>
            Develop backend (Node.js) and frontend (React, JavaScript) components, implement features, optimize performance, and collaborate with teams to meet user needs and business goals.
            </Typography>
        </Box>

        <Box sx={{ mb:"2rem", maxWidth:"35rem"}}>
            <Typography sx={{fontSize:{xs:"1.2rem", sm:"1.5rem"}, fontWeight:"600"}}>Front Desk Associate <strong style={{color:"#B53D95"}}>@MCR</strong></Typography>
            <Typography sx={{color:"#515151"}}>Feb 2022–Present | Dublin, Ireland	</Typography>
            <Typography>
            Manage customer inquiries and assist with daily office tasks on a temporary part-time basis to meet visa requirements, ensuring smooth operations and positive client interactions.
            </Typography>
        </Box>

        <Box sx={{ mb:"2rem", maxWidth:"35rem"}}>
            <Typography sx={{fontSize:{xs:"1.2rem", sm:"1.5rem"}, fontWeight:"600"}}>Full Stack Developer <strong style={{color:"#B53D95"}}>@Freelance</strong></Typography>
            <Typography sx={{color:"#515151"}}>Sep 2023–Sep 2024 | Dublin, Ireland	</Typography>
            <Typography>
            Develop responsive web and software solutions, collaborating with clients to deliver tailored, high-quality projects on time and meeting specific requirements
            </Typography>
        </Box>

        <Box sx={{ mb:"2rem", maxWidth:"35rem"}}>
            <Typography sx={{fontSize:{xs:"1.2rem", sm:"1.5rem"}, fontWeight:"600"}}>Mechanical Service Engineer <strong style={{color:"#B53D95"}}>@Bririm Makina</strong></Typography>
            <Typography sx={{color:"#515151"}}>May 2019 – Jul 2021 | Izmir, Turkey	</Typography>
            <Typography>
            Handle repair, troubleshooting, and installation of hydraulic and PLC-based systems, addressing mechanical and software issues, and maintaining communication with domestic and international clients.
            </Typography>
        </Box>

        <Box sx={{ mb:"2rem", maxWidth:"35rem"}}>
            <Typography sx={{fontSize:{xs:"1.2rem", sm:"1.5rem"}, fontWeight:"600"}}>Production Engineering Specialist <strong style={{color:"#B53D95"}}>@Elkon CCBP</strong></Typography>
            <Typography sx={{color:"#515151"}}>Aug 2018–Apr 2019 | Tekirdag, Turkey	</Typography>
            <Typography>
            Work on the software integration and installation of Fanuc, Kuka, and ABB robots into factory production systems, collaborating with professional teams to ensure successful installations.
            </Typography>
        </Box>
    </Box>
  )
}

export default Experience