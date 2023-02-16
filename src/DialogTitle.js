import React from "react";
import { DialogTitle as MuiDialogTitle, Grid, Typography } from "@mui/material";
import { OppChip, OpportunityStage, TierRating } from "./components";
import { formatAmount, parseOppDetails } from "./util";

export const DialogTitle = ({
  oppDetails,
  amount,
  product,
  tier,
  oppStage
}) => {
  const parsedOpp = parseOppDetails(oppDetails);
  const marketingType = parsedOpp[0];
  const year = parsedOpp[1];
  const oppName = parsedOpp[2];
  const formattedAmount = formatAmount(amount);

  return (
    <MuiDialogTitle>
      <Grid container direction="column" spacing={1}>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            spacing={3}
          >
            <Grid item>
              <Typography variant="h4">
                {oppName} <OppChip size="small" marketingType={marketingType} />
              </Typography>
            </Grid>
            <Grid item>
              <Typography>
                {year} / {product} / {formattedAmount}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            spacing={1}
          >
            <Grid item>
              <OpportunityStage stage={oppStage} />
            </Grid>
            <Grid item>
              <TierRating rating={tier} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </MuiDialogTitle>
  );
};
