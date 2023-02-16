import React from "react";
import { Grid, Typography } from "@mui/material";
import {
  CircularProbability,
  ProbabilityHistoryChart,
  RepAvatar,
  WinFactors
} from "./components";

export const Card = ({ data }) => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        <Grid container direction="column" spacing={3}>
          <Grid item>
            <WinFactors
              increasingFactors={data.pilytixFactorsIncreasingWin}
              decreasingFactors={data.pilytixFactorsDecreasingWin}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item>
            <RepAvatar repName={data.salesRepName} />
          </Grid>
          <Grid item>
            <Grid container direction="row" spacing={2}>
              <Grid item>
                <CircularProbability
                  probability={data.pilytixProbability}
                  type="px"
                  showLabel
                />
              </Grid>
              <Grid item>
                <CircularProbability
                  probability={data.repProbability}
                  type="rep"
                  showLabel
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Typography variant="h5">Probability History</Typography>
            <ProbabilityHistoryChart data={data.probabilityHistory} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
