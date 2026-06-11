import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./About.scss";

function About({ data }) {
  return (
    <Box id="about" className="about-section">
      <SectionHeader
        title={data?.heading}
      />
      <Typography
        variant="body1"
        className="about-description"
      >
        {data?.description}
      </Typography>
    </Box>
  );
}

export default About;