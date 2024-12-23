import "../styles/Scroll.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";

function Item({ children, isLastItem }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["center end", "center center"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (

      <div ref={ref} className="progress-container">
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
                opacity: [ 0.1, 1],
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
        
          <motion.div
            className="connecting-line"
            style={{
              height: lineHeight
            }}
          />
        {children}
      </div>
  );
}

export default function Experience() {
  return (
    <Box sx={{ padding:{xs:"0 2rem", md:"0"}, display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
      <Item>
        <Box sx={{ maxWidth: "40rem" }}>
          <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}>Full Stack Developer <strong style={{ color: "#B53D95" }}>@Gravitad</strong></Typography>
          <Typography sx={{ color: "#515151" }}>2024–Present | Dublin, Ireland</Typography>
          <Typography>
            Develop backend (Node.js) and frontend (React, JavaScript) components, implement features, optimize performance, and collaborate with teams to meet user needs and business goals.
          </Typography>
        </Box>
      </Item>

      <Item>
        <Box sx={{ maxWidth: "40rem" }}>
          <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}>Front Desk Associate <strong style={{ color: "#B53D95" }}>@MCR</strong></Typography>
          <Typography sx={{ color: "#515151" }}>Feb 2022–Present | Dublin, Ireland</Typography>
          <Typography>
            Manage customer inquiries and assist with daily office tasks on a temporary part-time basis to meet visa requirements, ensuring smooth operations and positive client interactions.
          </Typography>
        </Box>
      </Item>

      <Item>
        <Box sx={{ maxWidth: "40rem" }}>
          <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}>Full Stack Developer <strong style={{ color: "#B53D95" }}>@Freelance</strong></Typography>
          <Typography sx={{ color: "#515151" }}>Sep 2023–Sep 2024 | Dublin, Ireland</Typography>
          <Typography>
            Develop responsive web and software solutions, collaborating with clients to deliver tailored, high-quality projects on time and meeting specific requirements.
          </Typography>
        </Box>
      </Item>

      <Item>
        <Box sx={{ maxWidth: "40rem" }}>
          <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}>Mechanical Service Engineer <strong style={{ color: "#B53D95" }}>@Bririm Makina</strong></Typography>
          <Typography sx={{ color: "#515151" }}>May 2019 – Jul 2021 | Izmir, Turkey</Typography>
          <Typography>
            Handle repair, troubleshooting, and installation of hydraulic and PLC-based systems, addressing mechanical and software issues, and maintaining communication with domestic and international clients.
          </Typography>
        </Box>
      </Item>

      <Item isLastItem>
        <Box sx={{ maxWidth: "40rem" }}>
          <Typography sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}>Production Engineering Specialist <strong style={{ color: "#B53D95" }}>@Elkon CCBP</strong></Typography>
          <Typography sx={{ color: "#515151" }}>Aug 2018–Apr 2019 | Tekirdag, Turkey</Typography>
          <Typography>
            Work on the software integration and installation of Fanuc, Kuka, and ABB robots into factory production systems, collaborating with professional teams to ensure successful installations.
          </Typography>
        </Box>
      </Item>
    </Box>
  );
}