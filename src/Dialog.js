import React from "react";
import {
  Button,
  css,
  Dialog as MuiDialog,
  DialogActions,
  DialogContent,
  Grid
} from "@mui/material";
import { Card } from "./Card";
import { DialogTitle } from "./DialogTitle";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";

const paperStyle = css({
  minWidth: "80vw",
  height: "100vh",
  padding: "20px"
});

const buttonStyle = css({
  color: "white",
  borderRadius: "8px",
  padding: "5px 20px"
});

export const Dialog = ({
  data,
  open,
  onClose,
  onNext,
  onPrev,
  isNextClickable,
  isPrevClickable
}) => {
  if (data === undefined) {
    return <></>;
  }

  const handleKeyDown = (event) => {
    const keyCode = event.key.toLocaleLowerCase();
    if (keyCode === "arrowleft") {
      onPrev();
    } else if (keyCode === "arrowright") {
      onNext();
    }
  };

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
      onKeyDown={handleKeyDown}
      PaperProps={{ sx: paperStyle, elevation: 0 }}
      fullWidth
    >
      <DialogTitle
        oppDetails={data.oppName}
        amount={data.amount}
        product={data.product}
        tier={data.pilytixTier}
        oppStage={data.stage}
      />
      <DialogContent>
        <Card data={data} />
      </DialogContent>
      <DialogActions>
        <Grid container direction="row" justifyContent="space-between">
          <Grid item>
            <Button
              disabled={!isPrevClickable}
              onClick={onPrev}
              sx={buttonStyle}
              startIcon={<ArrowBackOutlinedIcon />}
              color="secondary"
              variant="contained"
              disableElevation
            >
              Prev
            </Button>
          </Grid>
          <Grid item>
            <Button
              sx={buttonStyle}
              onClick={onClose}
              variant="contained"
              disableElevation
            >
              Close
            </Button>
          </Grid>
          <Grid item>
            <Button
              disabled={!isNextClickable}
              sx={buttonStyle}
              onClick={onNext}
              endIcon={<ArrowForwardOutlinedIcon />}
              color="secondary"
              variant="contained"
              disableElevation
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </DialogActions>
    </MuiDialog>
  );
};
