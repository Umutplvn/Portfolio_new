import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdContactMail } from "react-icons/md";

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const handleMouseEnter = (icon) => {
    setHoveredIcon(icon);
  };

  const handleMouseLeave = () => {
    setHoveredIcon(null);
  };

  return (
    <footer>
      <Box sx={{ backgroundColor: "#EEEEEC", borderTop: "2px solid black",}}>
        <Box
          sx={{
            position: "static",
            bottom:0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: "1.5rem 1rem",
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
            }}
          >
            2024 © All Rights Reserved.
          </Typography>

          <Typography
            sx={{
              display: { xs: "none", sm: "block" },
              maxWidth: "380px",
              textAlign: "center",
              fontWeight: "500",
            }}
          >
            Built by Umut
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
    </footer>
  );
};

export default Footer;
