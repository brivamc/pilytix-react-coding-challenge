import React, { useEffect, useState } from "react";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import {
  css,
  List,
  ListItem,
  ListItemText,
  Tab,
  Typography,
  useMediaQuery
} from "@mui/material";
import _ from "lodash";

const tabStyle = css({
  fontWeight: "bold",
  fontSize: "14px",
  textTransform: "none"
});

const tabPanelStyle = css({
  width: "30vw"
});

const tabSelectedStyle = css({
  "&.Mui-selected": {
    color: "red"
  }
});

export const WinFactorTabs = ({ factors, isIncreasing }) => {
  const [value, setValue] = useState("0");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  useEffect(() => {
    if (setValue === "0") {
      return;
    }
    setValue("0");
  }, [factors]);

  if (factors === null) {
    return <Typography>No data recorded.</Typography>;
  }

  const groupedFactors = _(factors)
    .orderBy((factor) => factor.weight.value)
    .groupBy((factor) => factor.weight.description)
    .value();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <TabContext value={value.toString()}>
      <TabList
        variant={isSmallScreen ? "fullWidth" : "standard"}
        TabIndicatorProps={
          isIncreasing
            ? {}
            : {
                style: {
                  backgroundColor: "red"
                }
              }
        }
        onChange={handleChange}
      >
        {Object.entries(groupedFactors).map((factor, index) => (
          <Tab
            key={index}
            sx={[tabStyle, isIncreasing ? {} : tabSelectedStyle]}
            label={`${factor[0]} (${factor[1].length})`}
            value={index.toString()}
          />
        ))}
      </TabList>
      {Object.entries(groupedFactors).map((factor, index) => (
        <TabPanel
          sx={isSmallScreen ? {} : tabPanelStyle}
          key={index}
          value={index.toString()}
        >
          <List dense disablePadding>
            {factor[1].map((d) => (
              <ListItem key={d.name} dense>
                <ListItemText primary={d.name} secondary={d.message} />
              </ListItem>
            ))}
          </List>
        </TabPanel>
      ))}
    </TabContext>
  );
};
