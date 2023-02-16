import React from "react";
import SquareIcon from "@mui/icons-material/Square";
import { css, Grid, Typography } from "@mui/material";
import { themePalette } from "../theme";

const squareStyle = css({
  color: themePalette.secondary.main
});

const squareAltStyle = css({
  color: "#bdbdbd"
});

export const OpportunityStage = ({ stage }) => {
  const maxStages = 10; // assuming that the highest stage is 10
  const stageArr = [];
  const parsedStage = stage.split(".");
  const stageNumber = parsedStage[0];
  const description = parsedStage[1].trim();

  for (var i = 0; i < maxStages; i++) {
    if (i < stageNumber) {
      stageArr.push(true);
    } else {
      stageArr.push(false);
    }
  }

  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        {stageArr.map((stage, index) =>
          stage === true ? (
            <SquareIcon key={index} sx={squareStyle} />
          ) : (
            <SquareIcon key={index} sx={squareAltStyle} />
          )
        )}
        <Typography>{description}</Typography>
      </Grid>
    </Grid>
  );
};
