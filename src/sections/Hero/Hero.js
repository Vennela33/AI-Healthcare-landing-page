import React from "react";
import { Box, Typography, Button } from "@mui/material";
import "./Hero.scss";
import CustomButton from "../../components/Button";

function Hero({ data }) {

  return (
    <Box className="hero-section">
      <Box className="hero-content">
        <Typography variant="h2">
          {data?.title}
        </Typography>

        <Typography variant="h6">
          {data?.subtitle}
        </Typography>

        <CustomButton
          title={data?.buttonText}
        />
      </Box>

      <Box className="hero-image">
        <img
          src={data?.image}
          alt="AI Healthcare"
        />
      </Box>
    </Box>
  );
}

export default Hero;