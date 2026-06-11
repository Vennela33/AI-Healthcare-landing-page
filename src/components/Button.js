import Button from "@mui/material/Button";
import React from "react";

function CustomButton({
  title,
  onClick,
  type = "button",
}) {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      type={type}
    >
      {title}
    </Button>
  );
}

export default CustomButton;