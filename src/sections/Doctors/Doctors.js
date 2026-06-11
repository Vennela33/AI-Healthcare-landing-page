import React from "react";
import { Box, Grid } from "@mui/material";
import SectionHeader from "../../components/SectionHeader/SectionHeader";
import DoctorCard from "../../components/DoctorCard/DoctorCard";
import "./Doctors.scss";

function Doctors({ data }) {
  return (
    <Box
      id="doctors"
      className="doctors-section"
    >
      <SectionHeader title="Our Doctors" />

      <Grid container spacing={3}>
        {data?.map((doctor) => (
          <Grid
            key={doctor.id}
            size={{
              xs: 12,
              sm: 6,
              md: 4,
            }}
          >
            <DoctorCard doctor={doctor} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Doctors;