import { Box, Typography } from "@mui/material";
import { Link } from "react-router";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import defi from "../assets/projects/defi.png";
import { FaGithub } from "react-icons/fa";
import connectify from "../assets/projects/connectifychat.png";
import legere from "../assets/projects/legere.png";
import stockapp from "../assets/projects/stockApp.png";
import movieapp from "../assets/projects/movieapp.png";
import nbalegends from "../assets/projects/nbalegends.png";
import howtosell from "../assets/projects/howtosell.png";
import portfolio from "../assets/projects/portfolio1.png";
import githublogo from "../assets/projects/github.png";
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const [transform, setTransform] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTransform(true);
    }, 400);
  }, []);

  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true, 
    threshold: 0.2,
  });
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref3, inView: inView3 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref4, inView: inView4 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref5, inView: inView5 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref6, inView: inView6 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref7, inView: inView7 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  const { ref: ref8, inView: inView8 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  
  const { ref: ref9, inView: inView9 } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });
  

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
                pb: { xs: "0", md: "2rem", lg: "4rem" },
                lineHeight: "4rem",
                width: { xs: "100%", sm: "500px", md: "100%" },
                transform: transform ? "translateY(-0.5rem)" : "translateY(0)",
                color: transform ? "black" : "#EEEEEC",
                transition: "transform 1s ease-in-out, color 1s ease-in-out",
              }}
            >
              Imagination Trumps Knowledge!{" "}
            </Typography>
          </Box>
        </section>

        {/* 1st Part - Connectify Project */}
        <Box
        ref={ref1}
        sx={{ padding: "2rem" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              padding: { xs: "1.5rem", sm: "3rem" },
              border: "1px solid black",
              boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
              borderRadius: "1rem",
              opacity: inView1 ? 1 : 0,
              transform: inView1 ? "translateY(0)" : "translateY(1rem)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            }}
          >
            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                overflow: "hidden",
                borderRadius: "1rem",
              }}
            >
              <Link to="https://connectify-umut.netlify.app" target="_blank">
                <Box
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                    ":hover": { transform: "scale(1.3) translateY(0.3rem)" }, 
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    transform: "scale(1.2) translateY(0.5rem)",                    

                                    }}
                >
                  <img
                    src={connectify}
                    alt="Fitness App"
                    style={{
                      width: "100%",
                      borderRadius: "1rem",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Link>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: { xs: "1rem 0", md: "0 0 0.5rem 1rem" },
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
                  Social Media Platform
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
                  href="https://connectify-umut.netlify.app"
                  target="_blank"
                >
                  Connectify
                </Typography>
                <Typography sx={{ mb: "0.5rem" }}>
                Connectify is a social platform where users share photos and notes in a story format to build meaningful connections and share experiences.
                </Typography>
                <Typography sx={{ color: "#646464" }}>
                  <strong>Powered By:</strong> Redux, JS, React, Socketio, and
                  more.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: "2rem",
                  display: "flex",
                  gap: "1rem",
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
                  href="https://github.com/Umutplvn/connectify_frontend"
                  target="_blank"
                >
                  <FaGithub />
                </Box>{" "}
                <Box
                  component="a"
                  href="https://connectify-umut.netlify.app"
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

        {/*2nd Part - HowtoSell - MovieApp */}
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {/* How to Sell */}
          <Box
          ref={ref2}
            sx={{
              padding: { xs: "2rem", md: "2rem 1rem 2rem 2rem" },
              width: { xs: "100%", md: "50%" },
              opacity: inView2 ? 1 : 0,
              transform: inView2 ? "translateY(0)" : "translateY(1rem)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem 3rem 1rem 3rem" },
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
                <Link to="https://howtosell.io/" target="_blank">
                  <Box
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={howtosell}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", md: "1rem 0 0.5rem 0" },
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
                    Sales Coaching Platform
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
                    href="https://howtosell.io/"
                    target="_blank"
                  >
                    How To Sell
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
         
                  <Typography
                    component="a"
                    href="https://howtosell.io/"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Visit
                  </Typography>
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
                    href="https://github.com/Umutplvn/howtosell_client"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Movie App */}
          <Box
          ref={ref3}
            sx={{
              padding: { xs: "2rem", md: "2rem 2rem 2rem 1rem" },
              width: { xs: "100%", md: "50%" },
              opacity: inView3 ? 1 : 0,
              transform: inView3 ? "translateY(0)" : "translateY(1rem)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem 3rem 1rem 3rem" },
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
                <Link
                  to="https://movie-web-app-umut.netlify.app/"
                  target="_blank"
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={movieapp}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", md: "1rem 0 0.5rem 0" },
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
                    Video Streaming Platform
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
                    href="https://movie-web-app-umut.netlify.app/"
                    target="_blank"
                  >
                    Movie App
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
          
                  <Typography
                    component="a"
                    href="https://movie-web-app-umut.netlify.app/"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Visit
                  </Typography>
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
                    href="https://github.com/Umutplvn/Movie_Web_APP"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 3th Part - Stock App */}
        <Box 
        ref={ref4}
        sx={{ padding: "2rem",
        opacity: inView4 ? 1 : 0,
        transform: inView4 ? "translateY(0)" : "translateY(1rem)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
        }}>
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
              <Link to="https://stockapp-umut.netlify.app/" target="_blank">
                <Box
                  sx={{
                    width: "100%",
                    cursor: "pointer",
                    transition: "transform 0.3s ease-in-out",
                    ":hover": { transform: "scale(1.1)" },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={stockapp}
                    alt="Fitness App"
                    style={{
                      width: "100%",
                      borderRadius: "1rem",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Link>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: { xs: "1rem 0", md: "0 0 0.5rem 1rem" },
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
                  Financial MAnagament Application
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
                  href="https://stockapp-umut.netlify.app/"
                  target="_blank"
                >
                  Stock App
                </Typography>
                <Typography sx={{ mb: "0.5rem" }}>
                A financial management app to track income, expenses, and budgets, offering valuable insights for better financial control.



</Typography>
                <Typography sx={{ color: "#646464" }}>
                  <strong>Powered By:</strong> Redux, JS, React, and more.
                </Typography>
              </Box>
              <Box
                sx={{
                  mt: "2rem",
                  display: "flex",
                  gap: "1rem",
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
                  href="https://github.com/Umutplvn/Stock_App_V2"
                  target="_blank"
                >
                  <FaGithub />
                </Box>{" "}
                <Box
                  component="a"
                  href="https://stockapp-umut.netlify.app/"
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

        {/* 4th Part Legere - NBA Legends */}
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {/* Legere */}
          <Box
          ref={ref5}

            sx={{
              padding: { xs: "2rem", md: "2rem 1rem 2rem 2rem" },
              opacity: inView5 ? 1 : 0,
        transform: inView5 ? "translateY(0)" : "translateY(1rem)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem 3rem 1rem 3rem" },
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
                <Link to="https://legere.netlify.app/" target="_blank">
                  <Box
                    sx={{
                      backgroundColor: "white",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      display: "flex",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={legere}
                      alt="Responsive"
                      style={{
                        width: "100%",

                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", md: "1rem 0 0.5rem 0" },
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
                    Blogging Platform
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
                    href="https://legere.netlify.app/"
                    target="_blank"
                  >
                    Legere
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
           
                  <Typography
                    component="a"
                    href="https://legere.netlify.app/"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Visit
                  </Typography>
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
                    href="https://github.com/Umutplvn/Legere_BlogApp_V3_Client"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
                </Box>
              </Box>
            </Box>
          </Box>

          {/* NBA Legends */}
          <Box
          ref={ref6}
            sx={{
              padding: { xs: "2rem", md: "2rem 2rem 2rem 1rem" },

              width: { xs: "100%", md: "50%" },
              opacity: inView6 ? 1 : 0,
        transform: inView6 ? "translateY(0)" : "translateY(1rem)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem 3rem 1rem 3rem" },
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
                <Link
                  to="https://nba-legends-umut.netlify.app/"
                  target="_blank"
                >
                  <Box
                    sx={{
                      backgroundColor: "white",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      display: "flex",
                      justifyContent: "center",
                      overflow: "hidden",
                    }}
                  >
                    <img
                      src={nbalegends}
                      alt="Responsive"
                      style={{
                        width: "100%",

                        objectFit: "cover",
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", md: "1rem 0 0.5rem 0" },
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
                    Sports Platform
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
                    href="https://nba-legends-umut.netlify.app/"
                    target="_blank"
                  >
                    NBA Legends
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
             
                  <Typography
                    component="a"
                    href="https://nba-legends-umut.netlify.app/"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Visit
                  </Typography>
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
                    href="https://github.com/Umutplvn/NBA-legends-APP"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* 5th Part - DEFI Project */}
        <Box
        ref={ref7}

        sx={{ padding: "2rem",
        opacity: inView7 ? 1 : 0,
        transform: inView7 ? "translateY(0)" : "translateY(1rem)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
        }}>
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
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={defi}
                    alt="Fitness App"
                    style={{
                      width: "100%",
                      borderRadius: "1rem",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </Link>
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%" },
                padding: { xs: "1rem 0", md: "0 0 0.5rem 1rem" },
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
                  gap: "1rem",
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

        {/* 6th Part Portfolio-  Github Profile */}
        <Box sx={{ width: "100%", display: "flex", flexWrap: "wrap" }}>
          {/* Portfolio */}
          <Box
          ref={ref8}
            sx={{
              padding: { xs: "2rem", md: "2rem 1rem 2rem 2rem" },
              width: { xs: "100%", md: "50%",
              opacity: inView8 ? 1 : 0,
        transform: inView8 ? "translateY(0)" : "translateY(1rem)",
        transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
            },
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem 3rem 1rem 3rem" },
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
                <Link to="https://portfolio-umut.netlify.app/" target="_blank">
                  <Box
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={portfolio}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", md: "1rem 0 0.5rem 0" },
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
                    Showcase Website
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
                    href="https://portfolio-umut.netlify.app/"
                    target="_blank"
                  >
                    Portfolio
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                             <Typography
                    component="a"
                    href="https://portfolio-umut.netlify.app/"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Visit
                  </Typography>
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
                    href="https://github.com/Umutplvn/Portfoilo_Client"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
       
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Github Profile */}
          <Box
          ref={ref9}
            sx={{
              padding: { xs: "2rem", md: "2rem 2rem 2rem 1rem" },
              width: { xs: "100%", md: "50%" },
              opacity: inView9 ? 1 : 0,
              transform: inView9 ? "translateY(0)" : "translateY(1rem)",
              transition: "opacity 1s ease-in-out, transform 1s ease-in-out"
            }}
          >
            <Box
              sx={{
                justifyContent: "center",
                flexWrap: "wrap",
                padding: { xs: "1.5rem", sm: "3rem 3rem 1rem 3rem" },
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
                <Link to="https://github.com/Umutplvn" target="_blank">
                  <Box
                    sx={{
                      backgroundColor: "white",
                      width: "100%",
                      cursor: "pointer",
                      transition: "transform 0.3s ease-in-out",
                      ":hover": { transform: "scale(1.1)" },
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <img
                      src={githublogo}
                      alt=""
                      style={{
                        width: "100%",
                      }}
                    />
                  </Box>
                </Link>
              </Box>

              <Box
                sx={{
                  width: "100%",
                  padding: { xs: "1rem 0", md: "1rem 0 0.5rem 0" },
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
                    <br />
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
                    href="https://github.com/Umutplvn"
                    target="_blank"
                  >
                    Github Profile
                  </Typography>
                </Box>
                <Box
                  sx={{
                    mt: "1rem",
                    display: "flex",
                    gap: "0.5rem",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
       
                  <Typography
                    component="a"
                    href="https://github.com/Umutplvn"
                    target="_blank"
                    sx={{
                      textDecoration: "none",
                      fontWeight: "500",
                      fontSize: "1.1rem",
                      ":hover": {
                        textDecoration: "underline",
                        cursor: "pointer",
                      },
                      color: "black",
                      textDecoration: "none",
                    }}
                  >
                    Visit
                  </Typography>
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
                    href="https://github.com/Umutplvn"
                    target="_blank"
                  >
                    <FaGithub />
                  </Box>{" "}
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
