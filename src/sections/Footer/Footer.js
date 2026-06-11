import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
} from "@mui/material";

import "./Footer.scss";

function Footer({ data }) {
  return (
    <Box className="footer">
      <Grid container spacing={4}>
        
        {/* Company Info */}
        <Grid size={{ xs:12,md:4}}>
          <Typography variant="h6">
            {data?.company}
          </Typography>

          <Typography>
            {data?.description}
          </Typography>
        </Grid>

        {/* Contact Details */}
        <Grid size={{ xs:12, md:4}}>
          <Typography variant="h6">
            Contact
          </Typography>

          <Typography>
            Email: {data?.email}
          </Typography>

          <Typography>
            Phone: {data?.phone}
          </Typography>
        </Grid>

        {/* Quick Links */}
        <Grid size={{ xs:12,md:4}}>
          <Typography variant="h6">
            Quick Links
          </Typography>

          {data?.quickLinks?.map((link, index) => (
            <Typography key={index}>
              <Link href="#">
                {link}
              </Link>
            </Typography>
          ))}
        </Grid>

      </Grid>

      <Typography
        align="center"
        className="copyright"
      >
        © 2026 {data?.company}. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;