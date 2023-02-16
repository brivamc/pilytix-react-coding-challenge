import { Grid, CircularProgress, css, Typography } from "@mui/material";
import React from "react";

const gridStyle = css({
  position: "relative",
  display: "inline-flex"
});

const progressStyle = css({
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  position: "absolute",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

const rootStyle = css({
  boxShadow:
    "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
  padding: ".5em"
});

export const CircularProbability = ({
  probability,
  type,
  showLabel = false,
  removeBorder = false
}) => {
  const percentageValue = Number(probability) * 100;
  const formattedType =
    type === "rep"
      ? type.charAt(0).toUpperCase() + type.slice(1)
      : type.toUpperCase();
  return (
    <Grid container sx={removeBorder ? {} : rootStyle} direction="column">
      {showLabel && (
        <Grid item>
          <Typography variant="subtitle2">{formattedType}</Typography>
        </Grid>
      )}
      <Grid item>
        <Grid sx={gridStyle}>
          <CircularProgress
            variant="determinate"
            size={60}
            thickness={6}
            value={Number(probability) * 100}
            color={type === "rep" ? "secondary" : "primary"}
          />
          <Grid sx={progressStyle}>
            <Typography fontWeight={800} variant="caption" component="div">
              {`${Math.round(percentageValue)}%`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
