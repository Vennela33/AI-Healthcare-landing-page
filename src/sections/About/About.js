import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import "./About.scss";

function About({ data }) {
  const aboutdata=data.find(item=>item.type==="about")
  return (
    <Box id="about" className="about-section">
      <SectionHeader
        title={aboutdata?.heading}
      />
      <Typography
        variant="body1"
        className="about-description"
      >
        {aboutdata?.description}
      </Typography>
    </Box>
  );
}

export default About;