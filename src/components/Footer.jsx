import { Box, Typography } from "@mui/material";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMailBulk } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const Footer = () => {

  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEC",
        borderTop: "2px solid black",
        width: "100%",
        minHeight: "10vh",
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
            alignItems:"center",
            gap: "0.7rem",
            width: { xs: "100%", sm: "7rem" },
          }}
        >
          <Box
            sx={{
              fontSize: "1.7rem",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems:"bottom",
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
              display: "flex",
              justifyContent: "center",
              alignItems:"bottom",
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
            <FaLinkedin />
          </Box>

          <Box
            sx={{
              fontSize: "1.7rem",
              color: "#d33f35",
              display: "flex",
              justifyContent: "center",
              alignItems:"bottom",
              ":hover": {
                cursor: "pointer",
                transform: "scale(1.05)",
                transition: "transform 0.3s ease-in-out",
              },
            }}
            component="a"
            target="_blank"
            href="mailto:umut.codes@gmail.com"
          >
            <FaMailBulk />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
