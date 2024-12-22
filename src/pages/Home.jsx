import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import responsiveImg from "../assets/responsive.webp";
import bulb from "../assets/bulb.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Home = () => {
  const [hover, setHover] = useState(false);

  return (
    <Box sx={{ backgroundColor: "#EEEEEC", width: "100vw", pb:"4rem" }}>
      <Box
        sx={{
          backgroundColor: "#EEEEEC",
          width: "100vw",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "1200px",
          m: "auto",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#EEEEEC",
            width: { xs: "100%", sm: "80%", md: "50%" },
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={responsiveImg}
            alt="responsive"
            style={{ maxWidth: "35rem", width: "100%", padding: "2rem" }}
          />
        </Box>

        <Box sx={{ width: { xs: "100%", md: "50%" }, p: "0 2rem" }}>
          <Box sx={{ m: "auto", maxWidth: "30rem" }}>
            <Typography
              sx={{
                fontSize: "2.5rem",
                fontWeight: "800",
                textAlign: { xs: "center", md: "left" },
                lineHeight: "50px",
                fontFamily: "sans-serif",
              }}
            >
              Turning Vision Into Reality With Code and Creativity
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "500",
                textAlign: { xs: "center", md: "left" },
                fontFamily: "sans-serif",
                mt: "1rem",
              }}
            >
              As a skilled full-stack developer, I am dedicated to turning ideas
              into innovative web applications. Explore my latest projects and
              articles, showcasing my expertise in React.js and web development.
            </Typography>
            <Box
              sx={{
                height: "3rem",
                mt: "1rem",
                display: "flex",
                alignItems: "center",
                gap: "1.5rem",
              }}
            >
              <Button
                variant="outlined"
                sx={{
                  backgroundColor: "black",
                  color: "white",
                  ":hover": {
                    backgroundColor: "white",
                    color: "black",
                    borderColor: "black",
                  },
                }}
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/Resume.pdf";  
                  link.download = "Resume.pdf"; 
                  link.click();
                }}
              >
                Resume
                <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
              </Button>

              <Box
                sx={{ width: "4.3rem", overflow: "hidden", textDecoration:"none", color:"black", flexDirection:"column" }}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                component="a"
                target="_blank"
                href="mailto:umutpehlivan2078@gmail.com"
              >
                <Typography
                  style={{
                    color: "black",
                    fontWeight: "500",
                    textDecoration: "none",
                    fontSize: "1.2rem",
                    
                  }}
                >
                  Contact
                </Typography>
                <Box
                  sx={{
                    transform: hover ? "translateX(0)":"translateX(-4.4rem)",
                    borderBottom: "1.5px solid black",
                    transition: "transform 0.3s ease-in-out",
                  }}
                />
              </Box>
            </Box>
          </Box>

          <Box sx={{ display:{xs:"none", md:"block"}, position: "absolute", right: "3rem", width:{md:"5rem", lg:"7rem"} }}>
            <img src={bulb} alt="bulb" style={{ width: "100%" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
