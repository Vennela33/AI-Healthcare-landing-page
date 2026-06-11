import { Typography } from "@mui/material";
import React from "react";

function SectionHeader({ title }) {
  return (
    <Typography
      variant="h4"
      textAlign="center"
      mb={4}
    >
      {title}
    </Typography>
  );
}

export default SectionHeader;