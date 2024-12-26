import { Box, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import { Divide as Hamburger } from "hamburger-react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { ReactTyped } from "react-typed";


const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [innerText, setInnerText] = useState("");

  const navigate = useNavigate();
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname == "/") {
      setInnerText("Home");
    } else if (pathname == "/about") {
      setInnerText("About");
    } else if (pathname == "/projects") {
      setInnerText("Projects");
    }
  }, []);


  const handleLinkClick = (e) => {
    setOpen(false);
    setInnerText(e.target.innerText);
  };

  const handleClickCL = () => {
    setOpen(false);
    navigate("/");
    setInnerText("Home");
  };


  

  return (
    <header>
    <Box sx={{  backgroundColor: "#EEEEEC",  minHeight:"10vh"
  }}>
    <Box sx={{ maxWidth:"1200px",
    m:"auto"}}>
      {/* Hamburger Icon for small screens */}
      <Box
        sx={{
          display: {
            xs: "flex",
            sm: "none",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "1rem",
            backgroundColor: "#EEEEEC",
            position: "relative",
            zIndex: "3",
           
          },
        }}
      >
        <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
        <Box
          sx={{
            p: "0.8rem",
            backgroundImage: isHovered
              ? 'url("https://media.giphy.com/media/l0MYwXxKiwW39Dwcw/giphy.gif")'
              : "none",
            backgroundColor: isHovered ? "transparent" : "black",
            transition: "background-image 1s, background-color 1s",
            backgroundSize: "cover",
            borderRadius: "50%",
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClickCL}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography
            sx={{ color: "white", fontWeight: "700", fontSize: "1.2rem" }}
          >
            UP
          </Typography>
        </Box>
          </Box>

      {/* Navigation links for large screens */}
      <Box
        sx={{
          display: { xs: "none", sm: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "#EEEEEC",
          color: "black",
          padding: "1rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          {/* Home Link */}
          <Box sx={{ overflow: "hidden", width: "2.8rem" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
              onClick={(e) => handleLinkClick(e)}
            >
              Home
            </Link>
            <Box
              style={{
                border: "0.5px solid black",
                width: "2.8rem",
                fontWeight: "900",
                transform:
                  innerText == "Home" ? "translateX(0)" : "translateX(-3rem)",
                transition: "0.3s",
              }}
            />

          </Box>

          {/* About Link */}
          <Box sx={{ overflow: "hidden", width: "2.8rem" }}>
            <Link
              to="/about"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
              onClick={(e) => handleLinkClick(e)}
            >
              About
            </Link>
            <Box
              style={{
                border: "0.5px solid black",
                width: "2.8rem",
                fontWeight: "900",
                transform:
                  innerText == "About" ? "translateX(0)" : "translateX(-3rem)",
                transition: "0.3s",
              }}
            />
          </Box>
          {/* Projects */}

          <Box sx={{ overflow: "hidden", width: "3.7rem" }}>
            <Link
              to="/projects"
              style={{
                textDecoration: "none",
                color: "black",
                cursor: "pointer",
              }}
              onClick={(e) => handleLinkClick(e)}
            >
              Projects
            </Link>
            <Box
              style={{
                border: "0.5px solid black",
                width: "3.7rem",
                fontWeight: "900",
                transform:
                  innerText == "Projects"
                    ? "translateX(0)"
                    : "translateX(-3.8rem)",
                transition: "0.3s",
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            p: "0.8rem",
            backgroundImage: isHovered
              ? 'url("https://media.giphy.com/media/l0MYwXxKiwW39Dwcw/giphy.gif")'
              : "none",
            backgroundColor: isHovered ? "transparent" : "black",
            transition: "background-image 1s, background-color 1s",
            backgroundSize: "cover",
            borderRadius: "50%",
            cursor: "pointer",
            width: "3rem",
            height: "3rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={handleClickCL}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Typography
            sx={{ color: "white", fontWeight: "700", fontSize: "1.2rem" }}
          >
            UP
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
            width:"9rem",
          }}
        >
      <Typography
        sx={{
          fontSize: '1rem',
          fontWeight:"550",
          background: 'linear-gradient(to right, #9b59b6, #8e44ad, #6a1b9a, #4a148c)',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        <ReactTyped
          strings={[
            "Web Developer",
            "Scalable Apps",
            "Tech Enthusiast",
            "Code with Passion",
            "Let's Connect"
                    ]}
          typeSpeed={100}
          backSpeed={100}
          loop
        />
      </Typography>
     
        </Box>
      </Box>

      <Box
        sx={{
          display: { xs: "flex", sm: "none" },
          position: "absolute",
          top: "4.5rem",
          left: 0,
          right: 0,
          backgroundColor: "rgba(42, 42, 40, 0.9)",
          transition: "top 0.9s ease-in-out",
          zIndex: 1,
          padding: "1rem",
          top: isOpen ? "5rem" : "-100%",
          borderBottom: "1px solid #bcbcbc",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",

        }}
      >
        {/* Home Link */}
        <Box sx={{ overflow: "hidden", width: "2.8rem", mb: "0.5rem" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            onClick={(e) => handleLinkClick(e)}
          >
            Home
          </Link>
          <Box
            style={{
              border: "0.5px solid white",
              width: "2.8rem",
              fontWeight: "900",
              transform:
                innerText == "Home" ? "translateX(0)" : "translateX(-3rem)",
              transition: "0.3s",
            }}
          />
        </Box>
        {/* About Link */}
        <Box sx={{ overflow: "hidden", width: "2.8rem", mb: "0.5rem" }}>
          <Link
            to="/about"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            onClick={(e) => handleLinkClick(e)}
          >
            About
          </Link>
          <Box
            style={{
              border: "0.5px solid white",
              width: "2.8rem",
              fontWeight: "900",
              transform:
                innerText == "About" ? "translateX(0)" : "translateX(-3rem)",
              transition: "0.3s",
            }}
          />
        </Box>
        {/* Projects */}

        <Box sx={{ overflow: "hidden", width: "3.7rem" }}>
          <Link
            to="/projects"
            style={{
              textDecoration: "none",
              color: "white",
              cursor: "pointer",
            }}
            onClick={(e) => handleLinkClick(e)}
          >
            Projects
          </Link>
          <Box
            style={{
              border: "0.5px solid white",
              width: "3.7rem",
              fontWeight: "900",
              transform:
                innerText == "Projects"
                  ? "translateX(0)"
                  : "translateX(-3.8rem)",
              transition: "0.3s",
            }}
          />
        </Box>
      </Box>
    </Box>

    </Box>
    </header>
  );
};

export default Header;
