import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdContactMail } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEC",
        borderTop: "2px solid black",
        width: "100%",
        minHeight: "10vh",
        // position:"fixed",
        // bottom:0
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          p: "1.5rem 1.5rem",
          backgroundColor: "#EEEEEC",
          maxWidth: "1200px",
          m: "auto",
        }}
      >
        <Typography
          sx={{
            display: { xs: "none", sm: "block" },
            maxWidth: "380px",
            textAlign: "center",
            fontWeight: "500",
            color:"#5b5b5b"
          }}
        >
          2024 © All Rights Reserved.
        </Typography>

        <Typography
          sx={{
            display: { xs: "none", sm: "flex" },
            maxWidth: "380px",
            textAlign: "center",
            fontWeight: "500",
            color:"#5b5b5b", 
            justifyContent:"center",
             alignItems:"center"

          }}
        >
          
          Built with
          <FaRegHeart style={{color:"#B63E96", margin:"0 5px"}}/>
          by Umut
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.7rem",
            width: { xs: "100%", sm: "7rem" },
          }}
        >
          <Box
            sx={{
              fontSize: "1.7rem",
              color: "black",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            component="a"
            href="https://github.com/Umutplvn"
            target="_blank"
          >
            <FaGithub />
          </Box>

          <Box
            sx={{
              fontSize: "1.7rem",
              color: "#0B65C2",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            component="a"
            target="_blank"
            href="https://www.linkedin.com/in/umut-pehlivan-817b28174/"
          >
            <RxLinkedinLogo />
          </Box>

          <Box
            sx={{
              fontSize: "1.7rem",
              color: "#E24134",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            component="a"
            target="_blank"
            href="mailto:umutpehlivan2078@gmail.com"
          >
            <MdContactMail />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
