import React from "react";
import { Grid, Box } from "@mui/material";
import ServiceCard from "../../components/ServiceCard/ServiceCard";
import SectionHeader from "../../components/SectionHeader/SectionHeader";

import "./Services.scss";

function Services({ data }) {
  const servicesData = data.filter(item => item.type === "service");
  return (
    <Box id="services" className="services-section">
      <SectionHeader title="Our Services" />

      <Grid container spacing={3}>
  {servicesData?.map((service) => (
    <Grid
      key={service.id}
      size={{
        xs: 12,
        sm: 6,
        md: 4,
      }}
    >
      <ServiceCard service={service} />
    </Grid>
  ))}
</Grid>
    </Box>
  );
}

export default Services;