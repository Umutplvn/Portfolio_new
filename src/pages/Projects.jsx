import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import defi from "../assets/projects/defi.png";
import { FaGithub } from "react-icons/fa";
import connectify from "../assets/projects/connectify.png";
import { Link, useNavigate } from "react-router";

const Projects = () => {

  const [transform, setTransform] = useState(false);


  useEffect(() => {
    setTimeout(() => {
      setTransform(true);
    }, 400);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#EEEEEC",
        width: "100vw",
        minHeight: "80vh",
        pb: "20rem",
      }}
    >
      <Box sx={{ maxWidth: "1200px", m: "auto" }}>
        <section>
          <Box
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography
              component={"h1"}
              sx={{
                fontSize: { xs: "3rem", lg: "4rem" },
                fontWeight: "900",
                textAlign: "center",
                pt: "2rem",
                pb: { xs: "4rem", lg: "6rem" },
                lineHeight: "4rem",
                width: { xs: "100%", sm: "500px", md: "100%" },
                transform: transform ? "translateY(-1rem)" : "translateY(0)",
                color: transform ? "black" : "#EEEEEC",
                transition: "transform 1s ease-in-out, color 1s ease-in-out",
              }}
            >
              Imagination Trumps Knowledge!{" "}
            </Typography>
          </Box>
        </section>

        {/* DEFI Project */}
        <Box sx={{ padding: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: { xs: "1.5rem", sm: "3rem" },
              border: "1px solid black",
              boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
              borderRadius: "1rem",
        
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                overflow: "hidden",
                borderRadius: "1rem",
              }}
            >
              <Link to="https://defifitness.netlify.app/" target="_blank">
                <Box
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                    ":hover": { transform: "scale(1.1)" },
                  }}
                >
                  <img
                    src={defi}
                    alt="Fitness App"
                    style={{ width: "100%", minHeight: "100%" }}
                  />
                </Box>
              </Link>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: { xs: "1rem 0", sm: "0 0 0.5rem 1rem" },
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography
                  sx={{
                    color: "#b63e96",
                    fontWeight: "500",
                    fontSize: "1.1rem",
                  }}
                >
                  Fitness Application
                </Typography>
                <Typography
                  sx={{
                    fontWeight: "700",
                    fontSize: "1.5rem",
                    mb: "0.7rem",
                    ":hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                    color: "black",
                    textDecoration: "none",
                  }}
                  component="a"
                  href="https://defifitness.netlify.app/"
                  target="_blank"
                >
                  Defi
                </Typography>
                <Typography sx={{ mb: "0.5rem" }}>
                  A dynamic web app for personal trainers and clients, offering
                  customizable profiles, live chat, metric tracking, blogs, and
                  secure Stripe payments.
                </Typography>
                <Typography sx={{ color: "#646464" }}>
                  <strong>Powered By:</strong> Redux, JS, React, Stripe, and
                  more.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: "2rem",
                  display: "flex",
                  gap: "0.5rem",
                  alignItems: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",

                    fontSize: "2rem",
                    color: "black",
                    ":hover": {
                      cursor: "pointer",
                      transform: "scale(1.01)",
                      transition: "transform 0.3s ease-in-out",
                    },
                  }}
                  component="a"
                  href="https://github.com/Umutplvn/Defi_Fitness_Client"
                  target="_blank"
                >
                  <FaGithub />
                </Box>{" "}
                <Box
                  component="a"
                  href="https://defifitness.netlify.app/"
                  target="_blank"
                  sx={{
                    backgroundColor: "black",
                    color: "white",
                    ":hover": {
                      backgroundColor: "#181818",
                      boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                    },
                    height: "2rem",
                    textDecoration: "none",
                    p: "0 0.5rem",
                    borderRadius: "0.3rem",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transition: "all 0.3s ease-in-out",
                  }}
                >
                  Visit Project
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/*  */}

        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {/* Connectify */}
          <Box
            sx={{
              padding: "2rem 1rem 2rem 2rem",
              width: { xs: "100%", sm: "50%" },
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem" },
                border: "1px solid black",
                boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "1rem",
                }}
              >
                <Link to="https://connectify-umut.netlify.app/" target="_blank">
                  <Box
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      pb: "1rem",
                    }}
                  >
                    <img
                      src={connectify}
                      alt=""
                      style={{ width: "100%", minHeight: "100%" }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", sm: "0 0 0.5rem 1rem" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#b63e96",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                  >
                    Chatting Platform
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "1.5rem",
                      mb: "0.7rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                    component="a"
                    href="https://connectify-umut.netlify.app/"
                    target="_blank"
                  >
                    Connectify
                  </Typography>

                  <Typography sx={{ color: "#646464" }}>
                    <strong>Powered By:</strong> Redux, JS, React, and more
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "2rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",

                      fontSize: "2rem",
                      color: "black",
                      ":hover": {
                        cursor: "pointer",
                        transform: "scale(1.01)",
                        transition: "transform 0.3s ease-in-out",
                      },
                    }}
                    component="a"
                    href="https://github.com/Umutplvn/Connectify_Chat_Client"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
                  <Box
                    component="a"
                    href="https://connectify-umut.netlify.app/"
                    target="_blank"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#181818",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      },
                      height: "2rem",
                      textDecoration: "none",
                      p: "0 0.5rem",
                      borderRadius: "0.3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    Visit Project
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Another |Prject */}
          <Box
            sx={{
              padding: "2rem 2rem 2rem 1rem",
              width: { xs: "100%", sm: "50%" },
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem" },
                border: "1px solid black",
                boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
                borderRadius: "1rem",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  overflow: "hidden",
                  borderRadius: "1rem",
                }}
              >
                <Link to="https://connectify-umut.netlify.app/" target="_blank">
                  <Box
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      pb: "1rem",
                    }}
                  >
                    <img
                      src={connectify}
                      alt=""
                      style={{ width: "100%", minHeight: "100%" }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", sm: "0 0 0.5rem 1rem" },
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      color: "#b63e96",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                    }}
                  >
                    Chatting Platform
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "1.5rem",
                      mb: "0.7rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                    component="a"
                    href="https://connectify-umut.netlify.app/"
                    target="_blank"
                  >
                    Connectify
                  </Typography>

                  <Typography sx={{ color: "#646464" }}>
                    <strong>Powered By:</strong> Redux, JS, React, and more
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "2rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",

                      fontSize: "2rem",
                      color: "black",
                      ":hover": {
                        cursor: "pointer",
                        transform: "scale(1.01)",
                        transition: "transform 0.3s ease-in-out",
                      },
                    }}
                    component="a"
                    href="https://github.com/Umutplvn/Connectify_Chat_Client"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
                  <Box
                    component="a"
                    href="https://connectify-umut.netlify.app/"
                    target="_blank"
                    sx={{
                      backgroundColor: "black",
                      color: "white",
                      ":hover": {
                        backgroundColor: "#181818",
                        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
                      },
                      height: "2rem",
                      textDecoration: "none",
                      p: "0 0.5rem",
                      borderRadius: "0.3rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      transition: "transform 0.3s ease-in-out",
                    }}
                  >
                    Visit Project
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Projects;
