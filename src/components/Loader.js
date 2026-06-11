import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import React from "react";

function Loader() {
  return (
    <Box textAlign="center" py={5}>
      <CircularProgress />
    </Box>
  );
}

export default Loader;