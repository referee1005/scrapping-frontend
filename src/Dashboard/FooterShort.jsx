import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
const FooterShort = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isDialogClick, setDialogClick] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseClick = () => {
    setDialogClick(!isDialogClick);
  };
  const imageStyle = {
    position: "absolute",
    bottom: "10px",
    right: "40px",
    cursor: "pointer",
    transition: "width 0.3s ease-in-out", // Adding a transition effect for smooth size change
  };

  return (
    <>
      {isDialogClick ? (
        <Box
          sx={{
            width: "408px",
            height: "578px",
            borderRadius: "10px",
            border: "1px solid #d9e0e8",
            zIndex: 100,
            backgroundColor: "#fff",
            position: "absolute",
            bottom: "100px",
            right: "40px",
          }}
        >
          <Box
            sx={{
              backgroundColor: "rgb(0, 43, 92)",
              borderRadius: "10px",
              borderBottomLeftRadius: "0",
              borderBottomRightRadius: "0",
              height: "64px",
            }}
          >
            <Typography
              fontSize="20px"
              color="#fff"
              fontWeight="700"
              textAlign="center"
              align="left"
              display="flex"
              padding={2}
            >
              Help
            </Typography>
          </Box>
          <Box sx={{backgroundColor:'rgb(245, 248, 250)', display:'flex', flexDirection:'column'}}>
             <Box sx={{borderRadius:'4px',backgroundColor:'#fff', padding:"20px,10px,10px"}}>
                fdafadf
             </Box>
          </Box>
        </Box>
      ) : (
        ""
      )}
      <img
        src="live_chat.png"
        width={isHovered ? "70px" : "60px"}
        style={imageStyle}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        alt=""
        onClick={handleMouseClick}
      />
    </>
  );
};

export default FooterShort;
