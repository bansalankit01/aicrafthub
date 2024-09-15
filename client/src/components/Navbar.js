import React, { useEffect } from "react";
import { Box, Typography, Toolbar } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { keyframes } from "@emotion/react";
import toast from "react-hot-toast";
import useTypewriter from "../customhook/useTypewriter";
// import { useTheme } from '@mui/material/styles';

const Navbar = () => {
  const navigate = useNavigate();
  const loggedIn = JSON.parse(localStorage.getItem("authToken"));

  const location = useLocation();

  // handle logout
  const handleLogout = async () => {
    try {
      await axios.post("/api/v1/auth/logout");
      localStorage.removeItem("authToken");
      toast.success("Logout Successfully");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    if(!loggedIn) {
      if(location.pathname === "/register") {
        navigate("/register");
        return
      }
      navigate("/login");
    }
  },[loggedIn,location.pathname,navigate])

  const navlinkStyle = {
    margin: 0,
  };

  // Define keyframes for animations

  const floatAnimation = keyframes`
    0% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0); }
  `;

  return (
    <Toolbar
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        position: "sticky",
        top: 0,
        zIndex: 999,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background:
            "linear-gradient(270deg, #535C91, rgba(30, 3, 66, 0.5), rgba(19, 93, 102, 0.5), rgba(60, 7, 83, 0.5))",
          backdropFilter: "blur(10px)",
          padding: "1.5rem",
          borderRadius: "70px",
          boxShadow: "0 20px 18px 0 rgba(255, 20, 147, 0.5)",
          animation: `${floatAnimation} 2.5s ease-in-out infinite`,
          transition: "all 0.2s ease-in-out",
          marginTop: "2.5rem",
          width: "90%",
          heigth: "fit-content",
        }}
      >
        <div className="logoTextCont">
          <img
            alt="logo"
            src="project_logo.png"
            style={{ height: "4.5rem", width: "4.5rem", borderRadius: "50%" }}
          />
          <Typography
            variant="h1"
            sx={{
              color: "#2CD3E1",
              fontWeight: "bold",
              fontFamily: "sans-serif",
              fontSize: "2.5rem",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3)",
              letterSpacing: "0.2rem",
              transform: "perspective(1000px) rotateY(15deg)",
            }}
          >
            {/* {typedText} */}
            AI Craft Hub
          </Typography>
        </div>
        <Box sx={{ display: "flex", gap: "1.5rem", padding: "0 3rem" }}>
          {loggedIn ? (
            <>
              <NavLink to="/" style={navlinkStyle}>
                Home
              </NavLink>
              <NavLink to="/login" onClick={handleLogout} style={navlinkStyle}>
                Logout
              </NavLink>
            </>
          ) : (
            <>
              <NavLink to="/register" style={navlinkStyle}>
                Sign Up
              </NavLink>
              <NavLink to="/login" style={navlinkStyle}>
                Sign In
              </NavLink>
            </>
          )}
        </Box>
      </Box>
    </Toolbar>
  );
};

export default Navbar;
