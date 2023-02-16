import { Chip, css } from "@mui/material";
import React from "react";

const b2bStyle = css({
  backgroundColor: "black",
  color: "white"
});

const b2cStyle = css({
  backgroundColor: "coral",
  color: "white"
});

export const OppChip = ({ marketingType, size = "medium" }) => {
  return (
    <Chip
      sx={marketingType === "B2B" ? b2bStyle : b2cStyle}
      label={marketingType}
      size={size}
    />
  );
};
