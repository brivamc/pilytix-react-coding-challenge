import { Grid, Typography } from "@mui/material";
import React from "react";
import { parseOppDetails } from "../util";
import { OppChip } from "./OppChip";

export const OpportunityTitle = ({ oppDetails }) => {
  const parsedOpp = parseOppDetails(oppDetails);
  const marketingType = parsedOpp[0];
  const year = parsedOpp[1];
  const oppName = parsedOpp[2];
  return (
    <Grid
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      container
      spacing={1}
    >
      <Grid item>
        <Typography variant="h6">
          <OppChip marketingType={marketingType} size="small" /> {oppName}
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="right">{year}</Typography>
      </Grid>
    </Grid>
  );
};
