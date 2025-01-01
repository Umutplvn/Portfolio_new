import "../styles/Scroll.css";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Box, Typography } from "@mui/material";
import { FaExternalLinkAlt } from "react-icons/fa";

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
      style={{ width: "100%", maxWidth: "40rem", height: "5rem" }}
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
            height: lineHeight,
          }}
        />
      )}
      {children}
    </motion.div>
  );
}



export default function Certifications() {


  return (
    <Box
      sx={{
        padding: { xs: "0 0 0 1rem", md: "0" },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        flexDirection: "column",
      }}
    >
         <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Algorithms
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>
              Stanford University |
            </Typography>
            <Typography
              component="a"
              href="https://www.coursera.org/account/accomplishments/specialization/EPV4X4MV0ENG"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>
      
      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Web Development Essentials{" "}
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Clarusway | </Typography>
            <Typography
              component="a"
              href="https://app.diplomade.com/user/badge-detail/41-0x269216b27f0883973AA9eCD2555f3B3F2E8C9885"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Web Development with React{" "}
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Clarusway |</Typography>
            <Typography
              component="a"
              href="https://app.diplomade.com/user/badge-detail/42-0x269216b27f0883973AA9eCD2555f3B3F2E8C9885"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Backend Development{" "}
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Clarusway |</Typography>
            <Typography
              component="a"
              href="https://app.diplomade.com/user/badge-detail/14128032861131-0x269216b27f0883973AA9eCD2555f3B3F2E8C9885"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            SQL and Relational Databases
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>IBM |</Typography>
            <Typography
              component="a"
              href="https://courses.cognitiveclass.ai/certificates/798f47c93246430bbe3c740759b01ee5"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Docker Essentials
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>IBM |</Typography>
            <Typography
              component="a"
              href="https://courses.cognitiveclass.ai/certificates/40f7b749b25344a4a63c36e65c90613a"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            MongoDB & Node.js Connection
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>MongoDB |</Typography>
            <Typography
              component="a"
              href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b97b2c2b-ad39-4a14-9aee-f57de5114ec6-umut-pehlivan-67f05598-cebc-429c-9ebb-bd45331b989c-certificate.pdf"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Using MongoDB with Node.js{" "}
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>MongoDB |</Typography>
            <Typography
              component="a"
              href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b97b2c2b-ad39-4a14-9aee-f57de5114ec6-umut-pehlivan-53b2bdca-b3ab-4c86-9c6d-8daff00fbf6a-certificate.pdf"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Node.js MongoDB CRUD
          </Typography>
          <Box>
            <Box sx={{ display: "flex", gap: "0.5rem" }}>
              <Typography sx={{ color: "#515151" }}>MongoDB |</Typography>
              <Typography
                component="a"
                href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b97b2c2b-ad39-4a14-9aee-f57de5114ec6-umut-pehlivan-f84d3dec-9b6a-46c5-b949-b13268108a7c-certificate.pdf"
                target="_blank"
                sx={{
                  backgroundColor: "#EEEEEC",
                  color: "#323232",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  ":hover": {
                    color: "black",
                  },
                }}
              >
                View
                <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
              </Typography>
            </Box>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Node.js MongoDB Aggregation
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>MongoDB |</Typography>
            <Typography
              component="a"
              href="https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/b97b2c2b-ad39-4a14-9aee-f57de5114ec6-umut-pehlivan-ae521f84-6a91-429e-981d-1d3aabf34f02-certificate.pdf"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Responsive Web Design
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>freeCodeCamp |</Typography>
            <Typography
              component="a"
              href="https://www.freecodecamp.org/certification/fcc35612d2e-b928-4320-b83d-c792a9ee45fb/responsive-web-design"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Graph Developer - Associate
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Apollo GraphQL |</Typography>
            <Typography
              component="a"
              href="https://www.apollographql.com/tutorials/certifications/cb0af055-6950-4ade-8307-7881c047ed1e"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            ReactJS Tutorial
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Great Learning |</Typography>
            <Typography
              component="a"
              href="https://www.mygreatlearning.com/certificate/KVYARGRA"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Frontend Development - CSS
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Great Learning |</Typography>
            <Typography
              component="a"
              href="https://www.mygreatlearning.com/certificate/WRMNVKPR"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            Frontend Development - HTML
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Great Learning |</Typography>
            <Typography
              component="a"
              href="https://www.mygreatlearning.com/certificate/ACTBRWHW"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            AWS Certifications
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Great Learning |</Typography>
            <Typography
              component="a"
              href="https://www.mygreatlearning.com/certificate/AYVZTDZM"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>

      <Item isLastItem={true}>
        <Box
          sx={{
            padding: "0 0 4rem 3rem",
            mt: "-40px",
            maxWidth: "40rem",
            width: "100%",
          }}
        >
          <Typography
            sx={{ fontSize: { xs: "1.1rem", sm: "1.3rem" }, fontWeight: "600" }}
          >
            MongoDB Tutorial
          </Typography>
          <Box sx={{ display: "flex", gap: "0.5rem" }}>
            <Typography sx={{ color: "#515151" }}>Great Learning |</Typography>
            <Typography
              component="a"
              href="https://www.mygreatlearning.com/certificate/KRKLWYUB"
              target="_blank"
              sx={{
                backgroundColor: "#EEEEEC",
                color: "#323232",
                textDecoration: "none",
                display: "flex",
                alignItems: "center",
                ":hover": {
                  color: "black",
                },
              }}
            >
              View
              <FaExternalLinkAlt style={{ marginLeft: "0.5rem" }} />
            </Typography>
          </Box>
        </Box>
      </Item>
    </Box>
  );
}
