import { React, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  css
} from "@mui/material";
import { Dialog } from "./Dialog";
import _ from "lodash";

import * as opportunities from "./opportunities.json";
import {
  CircularProbability,
  OpportunityStage,
  OpportunityTitle,
  TierRating
} from "./components";
import { formatAmount } from "./util";

const tableHeaderStyle = css({
  fontWeight: "bold",
  fontSize: "15px"
});

const tableRowStyle = css({
  cursor: "pointer",
  "&:last-child td, &:last-child th": {
    border: 0
  }
});

export const BasicTable = () => {
  /**
   * A basic table to display all non-nested information from opportunities.json
   */
  const [open, setOpen] = useState(false);
  const [selectedData, setSelectedData] = useState();
  const data = opportunities.default;
  const currentTabIndex = _.findIndex(data, selectedData);
  const isNextClickable = data.includes(data[currentTabIndex + 1]);
  const isPrevClickable = data.includes(data[currentTabIndex - 1]);

  const handleRowClick = (event, row) => {
    setOpen(() => {
      setSelectedData(row);
      return true;
    });
  };

  const handleClose = () => {
    setOpen(() => {
      setSelectedData(undefined);
      return false;
    });
  };

  const handlePrev = () => {
    if (!isPrevClickable) {
      return;
    }
    setSelectedData(data[currentTabIndex - 1]);
  };

  const handleNext = () => {
    if (!isNextClickable) {
      return;
    }
    setSelectedData(data[currentTabIndex + 1]);
  };

  return (
    <>
      <Dialog
        data={selectedData}
        open={open}
        onClose={handleClose}
        onNext={handleNext}
        onPrev={handlePrev}
        isNextClickable={isNextClickable}
        isPrevClickable={isPrevClickable}
      />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={tableHeaderStyle} align="center">
                Opp Name
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="center">
                Opp Stage
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="center">
                Rep Probability
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="center">
                PX Probability
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="center">
                PX Tier
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="right">
                Amount
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="center">
                Product
              </TableCell>
              <TableCell sx={tableHeaderStyle} align="center">
                Sales Rep
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={tableRowStyle}
              >
                <TableCell component="th" scope="row">
                  <OpportunityTitle oppDetails={row.oppName} />
                </TableCell>
                <TableCell align="center">
                  <OpportunityStage stage={row.stage} />
                </TableCell>
                <TableCell align="center">
                  <CircularProbability
                    probability={row.repProbability}
                    type="rep"
                    removeBorder
                  />
                </TableCell>
                <TableCell align="center">
                  <CircularProbability
                    probability={row.pilytixProbability}
                    type="px"
                    removeBorder
                  />
                </TableCell>
                <TableCell align="center">
                  <TierRating rating={row.pilytixTier} />
                </TableCell>
                <TableCell align="right">{formatAmount(row.amount)}</TableCell>
                <TableCell align="center">{row.product}</TableCell>
                <TableCell align="center">{row.salesRepName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
