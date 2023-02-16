import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Avatar, Chip, css, Grid, Typography } from "@mui/material";

const avatarStyle = css({
  width: 150,
  height: 150
});

const chipStyle = css({
  color: "white"
});

export const RepAvatar = ({ repName }) => {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      direction="column"
      spacing={2}
    >
      <Grid item>
        <Avatar sx={avatarStyle} variant="rounded">
          <PersonIcon sx={avatarStyle} />
        </Avatar>
      </Grid>
      <Grid item>
        <Typography variant="h5">
          {repName}{" "}
          <Chip sx={chipStyle} size="small" label="Rep" color="secondary" />
        </Typography>
      </Grid>
    </Grid>
  );
};
