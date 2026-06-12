import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Rating,
} from "@mui/material";

import "./TestimonialCard.scss";

function TestimonialCard({ testimonial }) {
  return (
    <Card className="testimonial-card">
      <CardContent>
        <Typography
          variant="body1"
          className="feedback"
        >
          "{testimonial.review}"
        </Typography>

        <Rating
          value={Number(testimonial.rating)}
          readOnly
        />

        <Typography
          variant="h6"
          className="patient-name"
        >
          {testimonial.name}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default TestimonialCard;