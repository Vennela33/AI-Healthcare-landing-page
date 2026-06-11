import React from "react";
import {
  Card,
  CardContent,
  Typography,
} from "@mui/material";

import "./ServiceCard.scss";

function ServiceCard({ service }) {
  return (
    <Card className="service-card">
      <CardContent>
        <Typography
          variant="h6"
          gutterBottom
        >
          {service.name}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {service.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default ServiceCard;