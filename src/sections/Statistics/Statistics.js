import React from "react";
import {
  Box,
  Grid,
  Paper,
  Typography,
} from "@mui/material";

import SectionHeader from "../../components/SectionHeader/SectionHeader";

import "./Statistics.scss";

function Statistics({ data }) {
  const statisticsData = data.filter(item => item.type === "stat");
  return (
    <Box className="statistics-section">
      <SectionHeader title="Our Achievements" />

      <Grid container spacing={3}>
        {statisticsData?.map((item) => (
          <Grid
            key={item.id}
            size={{
              xs: 12,
              sm: 6,
              md: 3,
            }}
          >
            <Paper
              elevation={3}
              className="stat-card"
            >
              <Typography
                variant="h4"
                className="stat-count"
              >
                {item.value}
              </Typography>

              <Typography
                variant="body1"
                className="stat-title"
              >
                {item.label}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Statistics;