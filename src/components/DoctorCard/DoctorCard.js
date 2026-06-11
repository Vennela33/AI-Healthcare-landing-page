import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Box,
} from "@mui/material";

function DoctorCard({ doctor }) {
  return (
    <Card elevation={3}>
      <CardMedia
        component="img"
        height="250"
        image={doctor.image}
        alt={doctor.name}
      />

      <CardContent>
        <Typography variant="h6">
          {doctor.name}
        </Typography>

        <Typography color="primary">
          {doctor.specialization}
        </Typography>

        <Typography>
          Experience: {doctor.experience}
        </Typography>

        <Box mt={2}>
          <Chip
            label={doctor.availability}
            color={
              doctor.availability === "Available"
                ? "success"
                : "warning"
            }
          />
        </Box>
      </CardContent>
    </Card>
  );
}

export default DoctorCard;