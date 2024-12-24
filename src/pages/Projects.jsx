import { Box, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useState } from "react";
import defi from "../assets/projects/defi.png"
const Projects = () => {
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

<Box sx={{ padding:"2rem"}}>
        <Box sx={{display:"flex", justifyContent:"center", flexWrap:"wrap", padding:"3rem", border:"3px solid black",                boxShadow: "rgba(0, 0, 0, 1) 7px 7px 0px;", borderRadius:"1rem"
}}>
            <Box sx={{width:{xs:"100%", md:"50%"}, overflow:"hidden"}}>
                <img src={defi} alt=""  style={{width:"100%"}}/>
            </Box>
        </Box>

</Box>
      </Box>
    </Box>
  );
};

export default Projects;
