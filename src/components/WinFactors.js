import React, { useEffect, useState } from "react";
import ArrowUpwardOutlinedIcon from "@mui/icons-material/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Button, css, Grid, Typography } from "@mui/material";
import { WinFactorTabs } from "./WinFactorTabs";

const factorsDecreasingStyle = css({
  backgroundColor: "red",
  "&:hover": {
    backgroundColor: "darkred"
  }
});

const buttonStyle = css({
  fontSize: "20px",
  textTransform: "none",
  color: "white"
});

export const WinFactors = ({ increasingFactors, decreasingFactors }) => {
  const hasDecreasingFactors = decreasingFactors !== null;
  const hasIncreasingFactors = increasingFactors !== null;
  const [isIncreasing, setIsIncreasing] = useState(
    hasIncreasingFactors ? true : false
  );

  useEffect(() => {
    setIsIncreasing(hasIncreasingFactors ? true : false);
  }, [hasIncreasingFactors]);

  if (!hasDecreasingFactors && !hasIncreasingFactors) {
    return <Typography>No win factor data recorded.</Typography>;
  }

  const handleClick = () => {
    setIsIncreasing((prev) => !prev);
  };

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <Grid container direction="row" alignItems="center" spacing={2}>
          <Grid item>
            <Button
              sx={[buttonStyle, isIncreasing ? {} : factorsDecreasingStyle]}
              onClick={handleClick}
              disableElevation
              variant="contained"
            >
              {isIncreasing ? (
                <ArrowUpwardOutlinedIcon />
              ) : (
                <ArrowDownwardOutlinedIcon />
              )}
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="h6">
              {isIncreasing
                ? "Factors Increasing Win"
                : "Factors Decreasing Win"}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <WinFactorTabs
          factors={isIncreasing ? increasingFactors : decreasingFactors}
          isIncreasing={isIncreasing}
        />
      </Grid>
    </Grid>
  );
};
