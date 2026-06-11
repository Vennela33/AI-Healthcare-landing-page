import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
} from "@mui/material";
import CustomButton from "../../components/Button";
import "./Header.scss";

function Header({ data }) {

  return (
    <AppBar
      position="sticky"
      className="header"
      elevation={1}
    >
      <Toolbar className="header-toolbar">

        <Typography
          variant="h6"
          className="logo"
        >
          {data?.logo}
        </Typography>

        <Box className="menu">
  {data?.menuItems?.map((item) => (
    <Button
  key={item.label}
  color="inherit"
  onClick={() => {
    if (item.path === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const section = document.querySelector(item.path);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  }}
>
  {item.label}
</Button>
  ))}
</Box>

        <CustomButton
          
          title={data?.ctaButtonText}
        />
      </Toolbar>
    </AppBar>
  );
}

export default Header;