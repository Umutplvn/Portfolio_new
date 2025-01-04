import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import responsiveImg from "../assets/deneme.png";
import bulb from "../assets/bulbwhite.svg";
import { FaExternalLinkAlt } from "react-icons/fa";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [transform, setTransform] = useState(false);
  const [transform1, setTransform1] = useState(false);
  const [transform2, setTransform2] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransform(true);
    }, 400);
    setTimeout(() => {
      setTransform1(true);
    }, 700);
    setTimeout(() => {
      setTransform2(true);
    }, 600);
  }, []);

  return (
    <>
      <PageTransition />
      <Box
        sx={{
          backgroundColor: "#FAFAFA ",
          width: "100vw",
          pb: { xs: "15rem", sm: "0" },
          pt: { xs: "0", sm: "5rem" },
          minHeight: "80vh",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#FAFAFA ",
            width: "100vw",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "1200px",
            m: "auto",
          }}
        >
          {/*Main Image */}
          <Box
            sx={{
              backgroundColor: "#FAFAFA ",
              width: { xs: "100%", sm: "80%", md: "50%" },
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              transform: transform2 ? "translateY(0)" : "translateY(-0.5rem)",
              opacity: transform2 ? "1" : "0",
              transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
            }}
          >
            <img
              src={responsiveImg}
              alt="responsive"
              style={{ maxWidth: "35rem", width: "100%", padding: "2rem" }}
            />
          </Box>

          <Box sx={{ width: { xs: "100%", md: "50%" }, p: "0 2rem" }}>
            {/* Main Text  */}
            <Box sx={{ m: "auto", maxWidth: "30rem" }}>
              <Typography
                sx={{
                  fontSize: "2.5rem",
                  fontWeight: "800",
                  textAlign: { xs: "center", md: "left" },
                  lineHeight: "50px",
                  fontFamily: "sans-serif",
                  transform: transform ? "translateY(0)" : "translateY(-1rem)",
                  color: transform ? "black" : "#FAFAFA ",
                  transition: "transform 1s ease-in-out, color 1s ease-in-out",
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
                  transform: transform1 ? "translateY(-1rem)" : "translateY(0)",
                  color: transform1 ? "black" : "#FAFAFA ",
                  transition: "transform 1s ease-in-out, color 1s ease-in-out",
                }}
              >
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </Typography>
              <Box
                sx={{
                  height: "3rem",
                  mt: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  justifyContent: { xs: "center", md: "left" },
                  opacity: transform2 ? "1" : "0",
                  transition: "opacity 1s ease-in-out",
                }}
              >
                <Button
                  variant="outlined"
                  sx={{
                    backgroundColor: "black",
                    color: "#FAFAFA ",
                    ":hover": {
                      backgroundColor: "#FAFAFA ",
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
                  sx={{
                    width: "4.3rem",
                    overflow: "hidden",
                    textDecoration: "none",
                    color: "black",
                    flexDirection: "column",
                  }}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                  component="a"
                  target="_blank"
                  href="mailto:umut.codes@gmail.com"
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
                      transform: hover
                        ? "translateX(0)"
                        : "translateX(-4.4rem)",
                      borderBottom: "1.5px solid black",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  />
                </Box>
              </Box>
            </Box>

            {/* Image For Large Screen */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "absolute",
                right: "3rem",
                width: { md: "7rem", lg: "8rem" },
                opacity: transform2 ? "1" : "0",
                transition: "opacity 1s ease-in-out",
              }}
            >
              <img src={bulb} alt="bulb" style={{ width: "100%" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
