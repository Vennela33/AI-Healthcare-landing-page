import React from "react";
import { Box, Grid } from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";

import "./Testimonials.scss";

function Testimonials({ data }) {
  const testimonialsData = data.filter(item => item.type === "testimonial");
  return (
    <Box id="testimonials" className="testimonials-section">
      <SectionHeader title="Patient Testimonials" />

      <Grid container spacing={3}>
        {testimonialsData?.map((testimonial) => (
          <Grid
            key={testimonial.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Testimonials;