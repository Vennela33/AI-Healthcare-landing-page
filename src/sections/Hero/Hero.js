import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./Hero.scss";
import CustomButton from "../../components/Button";

function Hero({ data }) {
  const herodata=data.find(item=>item.type==="hero")
  return (
    <Box className="hero-section">
      <Box className="hero-content">
        <Typography variant="h2">
          {herodata?.title}
        </Typography>

        <Typography variant="h6">
          {herodata?.subtitle}
        </Typography>

        <CustomButton
          title={herodata?.buttonText}
        />
      </Box>

      <Box className="hero-image">
        <img
          src={herodata?.image}
          alt="AI Healthcare"
        />
      </Box>
    </Box>
  );
}

export default Hero;