import { Grid, Rating, Typography } from "@mui/material";
import React from "react";

export const TierRating = ({ rating, includeLabel = false }) => {
  const ratingValue = Number(rating.split(" ")[0]);
  const label = "PX Tier";
  return (
    <Grid>
      {includeLabel && <Typography component="legend">{label}</Typography>}
      <Rating name={label} value={ratingValue} readOnly />
    </Grid>
  );
};
