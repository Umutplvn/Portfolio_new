import React, { useState, useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import brainImg from "../assets/Brainn.webp";
import CountUpPage from "../components/CountUp";
import Skills from "../components/Skills";
import Experience from "./Experience";

const About = () => {
  const [inView, setInView] = useState(false);
  const countUpRef = useRef(null);
  const [inView1, setInView1] = useState(false);
  const countUpRef1 = useRef(null);
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


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => {
      if (countUpRef.current) {
        observer.unobserve(countUpRef.current);
      }
    };
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry.isIntersecting); 
        if (entry.isIntersecting) {
          setInView1(true);
        }
      },
      { threshold: 0.5 } 
    );

    if (countUpRef1.current) {
      observer.observe(countUpRef1.current);
    }

    return () => {
      if (countUpRef1.current) {
        observer.unobserve(countUpRef1.current);
      }
    };
  }, []);


return (
    <>
      <Box
        sx={{
          backgroundColor: "#EEEEEC",
          width: "100vw",
          minHeight: "80vh",
          pb: "50rem",
        }}
      >
        <Box sx={{ maxWidth: "1200px", m: "auto" }}>
          {/*Main Title */}
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
              Passion Fuels Purpose!
            </Typography>
          </Box>

          {/* Second Section */}
          <Box
            sx={{
              width: "100%",
              display: "flex",
              flexWrap: "wrap",
              gap: "2rem",
              alignItems: "flex-start",
              padding:{xs: "0 2rem", lg:"0"},
              justifyContent:{xs: "center", lg:"space-around"},
            }}
          >
            <Box
              sx={{
                maxWidth: "35rem",
                width: { xs: "100%", md: "40%", lg: "40%" },
                padding: "1rem",
                border: "2px solid black",
                borderRadius: "1rem",
                boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
                display: { xs: "flex", lg: "none" },
                transform: transform2 ? "translateY(-0.5rem)" : "translateY(0)",
                opacity: transform2 ? "1" : "0",
                transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
              }}
            >
              <img
                src={brainImg}
                alt="developer"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>

            <Box
              sx={{
                width: { xs: "100%", md: "50%", lg: "35%" },
                maxWidth: "35rem",
              }}
            >
              <Typography
                sx={{
                  color: "#515151",
                  fontSize: { xs: "1.1rem", sm: "1.3rem" },
                  fontWeight: "600",
                  transform: transform1 ? "translateY(0)" : "translateY(-1rem)",
                  color: transform1 ? "#585858" : "#EEEEEC",
                  transition: "transform 1s ease-in-out, color 1s ease-in-out",
                  mb:"0.5rem"
                }}
              >
                BIOGRAPHY
              </Typography>{" "}
              <Typography
                sx={{
                  fontSize: "1rem",
                  transform: transform1 ? "translateY(0)" : "translateY(-1rem)",
                  color: transform1 ? "black" : "#EEEEEC",
                  transition: "transform 1s ease-in-out, color 1s ease-in-out",
                }}
              >
                Hi, I'm <strong>Umut</strong>, a web developer with a passion
                for creating beautiful, functional, and user-centered digital
                experiences. With +2 years of experience in the field. I am
                always looking for new and innovative ways to bring my clients'
                visions to life. <br /> <br /> I believe that design is about
                more than just making things look pretty – it's about solving
                problems and creating intuitive, enjoyable experiences for
                users. <br /> <br /> Whether I'm working on a website, or other
                digital product, I bring my commitment to design excellence and
                user-centered thinking to every project I work on. I look
                forward to the opportunity to bring my skills and passion to
                your next project.
              </Typography>
            </Box>

            {/* Screen Large Image */}
            <Box
              sx={{
                width: { xs: "100%", md: "45%", lg: "35%" },
                padding: "1rem",
                border: "2px solid black",
                borderRadius: "1rem",
                boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
                display: { xs: "none", lg: "flex" },
                transform: transform1 ? "translateY(0)" : "translateY(-1rem)",
                opacity: transform2 ? "1" : "0",
                transition: "transform 1s ease-in-out, opacity 1s ease-in-out",
              }}
            >
              <img
                src={brainImg}
                alt="developer"
                style={{ width: "100%", borderRadius: "1rem" }}
              />
            </Box>

            {/* Count Up Section */}
            <Box
              ref={countUpRef}
              sx={{
                display: "flex",
                width: { xs: "100%", lg: "20%" },
                flexDirection: { xs: "row", lg: "column" },
                alignItems: "center",
              }}
            >
              {inView && <CountUpPage />}
            </Box>

            {/* Skills */}
            <Box
              ref={countUpRef1}
              sx={{
                position: "relative",
                width: "100%",
                overflow: "hidden",
                display: "flex",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "35rem",
                  position: "relative",
                }}
              >
                <Typography
                  sx={{
                    fontSize: { xs: "3rem", lg: "4rem" },
                    fontWeight: "900",
                    textAlign: "center",
                    pt: "2rem",
                    color:"black"
                  }}
                >
                  Skills
                </Typography>

                {inView1 && <Skills />}
              </Box>
            </Box>

            {/* Experience */}

            <Box
              sx={{
                width: "100%",
                height: "75rem",
                position: "relative",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "3rem", lg: "4rem" },
                  fontWeight: "900",
                  textAlign: "center",
                  pt: "2rem",
                  color:"black"
                }}
              >
                Experience
              </Typography>

              <Experience />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default About;
