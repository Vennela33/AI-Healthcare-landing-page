import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";

import { useNavigate } from "react-router-dom";

import CustomButton from "../../components/Button";

import "./Header.scss";

function Header({ data }) {
  const headerData = data.find(item => item.type === "header");

  const navigate = useNavigate();

  return (
    <AppBar
      position="sticky"
      className="header"
      elevation={1}
    >
      <Toolbar className="header-toolbar">

        {/* Logo */}
        <Typography
          variant="h6"
          className="logo"
        >
          {headerData?.logo}
        </Typography>

        {/* Menu */}
        <Box className="menu">

          {headerData?.menuItems?.map((item) => (

            <Button
              key={item.label}
              color="inherit"
              href={item.path}
            >
              {item.label}
            </Button>

          ))}

        </Box>

        {/* CTA */}
        <CustomButton
          title={headerData?.ctaButtonText}
        />

      </Toolbar>
    </AppBar>
  );
}

export default Header;