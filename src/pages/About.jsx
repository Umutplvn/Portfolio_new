import { Box, Typography } from "@mui/material";
import React from "react";
import brainImg from "../assets/Brainn.webp";

const About = () => {
  return (

    <Box sx={{ backgroundColor: "#EEEEEC", width: "100vw", pb: "4rem" }}>
      <Box sx={{       maxWidth: "1200px",
          m: "auto",
          }}>
        {/* HEADER */}
        <Box sx={{width:"100%", display:"flex", justifyContent:"center"}}>
        <Typography
          component={"h1"}
          sx={{
            fontSize: {xs:"4rem", lg:"5rem"},
            fontWeight: "900",
            textAlign:"center",
            pt: "2rem",
            pb:{xs:"4rem",lg:"6rem" },
            lineHeight: "4rem",  
            width:{xs:"100%", sm:"500px", md:"100%"}    

          }}
        >
          Passion Fuels Purpose!
        </Typography>

        </Box>

        {/* Second Section */}
      <Box sx={{  width: "100%", display: "flex", flexWrap: "wrap", gap: "2rem", alignItems: "flex-start", padding:"0 2rem", justifyContent:"center" }}>
  <Box
    sx={{
      maxWidth: "35rem",
      width: { xs: "100%", md: "40%", lg:"40%"},
      padding: "1rem",
      border: "2px solid black",
      borderRadius: "1rem",
      boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;",
      display:{xs:"flex", lg:"none"}
    }}
  >
    <img
      src={brainImg}
      alt="developer"
      style={{ width: "100%", borderRadius: "1rem" }}
    />
  </Box>

  <Box sx={{  width: { xs: "100%", md: "50%", lg: "35%" } , maxWidth:"35rem" }}>
    <Typography sx={{fontSize:"1.1rem"}}>
      <strong style={{ color: "#515151", fontSize: "1.2rem" }}>
        BIOGRAPHY
      </strong>{" "}
      <br /> <br />
      Hi, I'm <strong>Umut</strong>, a web developer with a passion for
      creating beautiful, functional, and user-centered digital
      experiences. With +2 years of experience in the field. I am always
      looking for new and innovative ways to bring my clients' visions
      to life. <br /> <br /> I believe that design is about more than just making
      things look pretty – it's about solving problems and creating
      intuitive, enjoyable experiences for users. <br /> <br /> Whether I'm working on
      a website, or other digital product, I bring my commitment to
      design excellence and user-centered thinking to every project I
      work on. I look forward to the opportunity to bring my skills and
      passion to your next project.
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
      display:{xs:"none", lg:"flex"}
    }}
  >
    <img
      src={brainImg}
      alt="developer"
      style={{ width: "100%", borderRadius: "1rem" }}
    />
  </Box>


  <Box sx={{ pt: "2rem", width: { xs: "100%",lg: "20%" } }}>
    <Typography sx={{textAlign:"center"}}>
      Customer projects sssasdasd asdasd
    </Typography>
  </Box>
</Box>

      </Box>
    </Box>
  );
};

export default About;
