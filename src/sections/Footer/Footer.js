import React from "react";
import {
  Box,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./Footer.scss";

function Footer({ data }) {
  const footerData = data.find(item => item.type === "footer");



  return (
    <Box className="footer">
      <Grid container spacing={4}>
        
        <Grid size={{ xs:12,md:4}}>
          <Typography variant="h6">
            {footerData?.company}
          </Typography>

          <Typography>
            {footerData?.description}
          </Typography>
        </Grid>

        <Grid size={{ xs:12, md:4}}>
          <Typography variant="h6">
            Contact
          </Typography>

          <Typography>
            Email: {footerData?.email}
          </Typography>

          <Typography>
            Phone: {footerData?.phone}
          </Typography>
          <Box className="social-links">
            <Link
              href={footerData?.socialLinks?.facebook}
              target="_blank"
            >
              <FacebookIcon />
            </Link>

            <Link
              href={footerData?.socialLinks?.linkedin}
              target="_blank"
            >
              <LinkedInIcon />
            </Link>

            <Link
              href={footerData?.socialLinks?.twitter}
              target="_blank"
            >
              <TwitterIcon />
            </Link>

            <Link
              href={footerData?.socialLinks?.instagram}
              target="_blank"
            >
              <InstagramIcon />
            </Link>
          </Box>
        </Grid>

        <Grid size={{ xs:12,md:4}}>
          <Typography variant="h6">
            Quick Links
          </Typography>

          {footerData?.quickLinks?.map((link, index) => (
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
        © 2026 {footerData?.company}. All Rights Reserved.
      </Typography>
    </Box>
  );
}

export default Footer;