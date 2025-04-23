import "../styles/Scroll.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

function Item({ children, isLastItem }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);


  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: "3rem" }}
      whileInView={{ opacity: 1, y: "0rem" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="progress-container"
    >
      <figure className="progress">
        <svg id="progress" width="35" height="35" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
          <motion.circle
            cx="50"
            cy="50"
            r="30"
            pathLength="1"
            className="indicator"
            style={{ pathLength: scrollYProgress }}
          />
          <motion.circle
            cx="50"
            cy="50"
            r="15"
            className="pulse-dot"
            animate={{
              opacity: [0.1, 1],
              scale: [0.8, 4.5, 0.8],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </svg>
      </figure>
      {!isLastItem && (
        <motion.div
          className="connecting-line"
          style={{
            height: lineHeight
          }}
        />
      )}
      {children}
    </motion.div>
  );
}

export default function Education() {
  return (
    <Box
      sx={{
        padding: { xs: "0 0 0 1rem", md: "0" },
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Full Stack Developer Course
          </Typography>
          <Typography sx={{ color: "#515151" }}>
            Nov 2022 – Sep 2023 | Clarusway IT School
          </Typography>
          <Typography>
            Certificates in Backend Development, Web Development with
            React, and Web Development Essentials have been
            awarded by Clarusway. Advanced skills in backend technologies,
            React.js, and essential web development concepts were acquired.
            Robust and user-friendly web applications are now developed
            proficiently.{" "}
          </Typography>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Bachelor’s Degree in Mechanical Engineering
          </Typography>
          <Typography sx={{ color: "#515151" }}>
            Jun 2014 –Jun 2018 | Ege University | Izmir, Turkey
          </Typography>
          <Typography>
            A Bachelor's Degree in Mechanical Engineering was completed at Ege
            University, demonstrating a comprehensive understanding of
            mechanical systems, engineering principles, and practical
            applications.
          </Typography>
        </Box>
      </Item>
    </Box>
  );
}
