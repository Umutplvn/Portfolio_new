import React from "react";
import { Box, Typography } from "@mui/material";
import CountUp from "react-countup";
import { useState } from "react";
import { useEffect } from "react";

const CountUpPage = () => {
  const [transform, setTransform] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setTransform(true);
    }, 400);
  }, []);
  return (
    <Box
      sx={{
        width: { xs: "100%", lg: "20%" },
        display: "flex",
        gap: "1rem",
        justifyContent: "center",
        alignItems: "flex-start",
        flexDirection: {
          xs: "row",
          lg: "column",
          transform: transform ? "translateY(0)" : "translateY(-1rem)",
          color: transform ? "black" : "#EEEEEC",
          transition: "transform 1s ease-in-out, color 1s ease-in-out",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width:"100px"

        }}
      >
        <Typography sx={{ fontWeight: "800", fontSize: "3rem",   }}>
          <CountUp
            start={0}
            end={30}
            delay={0}
            duration={4}
            separator=" "
            suffix="+"
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "#515151", transform: transform ? "translateY(0)" : "translateY(-1rem)",
              color: transform ? "black" : "#EEEEEC",
              transition: "transform 1s ease-in-out, color 1s ease-in-out", textAlign:"center" }}>
          Projects <br /> Completed
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          
        }}
      >
        <Typography sx={{ fontWeight: "800", fontSize: "3rem" }}>
          <CountUp
            start={0}
            end={10}
            delay={0}
            duration={4}
            separator=" "
            suffix="+"
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "#515151",  transform: transform ? "translateY(0)" : "translateY(-1rem)",
              color: transform ? "black" : "#EEEEEC",
              transition: "transform 1s ease-in-out, color 1s ease-in-out", textAlign:"center"  }}>
          Technologies <br /> Mastered
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width:"100px"
        }}
      >
        <Typography sx={{ fontWeight: "800", fontSize: "3rem" }}>
          <CountUp
            start={0}
            end={3}
            delay={0}
            duration={4}
            separator=" "
            suffix="+"
          >
            {({ countUpRef }) => (
              <div>
                <span ref={countUpRef} />
              </div>
            )}
          </CountUp>
        </Typography>
        <Typography sx={{ fontSize: "1rem", color: "#515151",  transform: transform ? "translateY(0)" : "translateY(-1rem)",
              color: transform ? "black" : "#EEEEEC",
              transition: "transform 1s ease-in-out, color 1s ease-in-out", textAlign:"center"  }}>
          Years of <br /> Experience
        </Typography>
      </Box>
    </Box>
  );
};

export default CountUpPage;
