import { Typography } from "@mui/material";
import React from "react";
import {
  VictoryArea,
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryGroup,
  VictoryLabel
} from "victory";
import { themePalette } from "../theme";

export const ProbabilityHistoryChart = ({ data }) => {
  if (data === null) {
    return <Typography>No probability history recorded</Typography>;
  }

  const makeVictoryData = () => {
    const pxData = [];
    const repData = [];
    for (var i = 0; i < data.length; i++) {
      const currentData = data[i];
      const currentDaysAgo = Number(currentData.daysAgo);
      pxData.push({
        x: currentDaysAgo,
        y: currentData.pilytixProb * 100
      });
      repData.push({
        x: currentDaysAgo,
        y: currentData.repProb * 100
      });
    }
    return {
      pxData: pxData,
      repData: repData
    };
  };

  const victoryData = makeVictoryData();

  const makeVictoryChart = () => {
    const pxStyle = {
      data: {
        fill: themePalette.primary.main,
        stroke: themePalette.primary.main,
        opacity: 0.5
      }
    };
    const repStyle = {
      data: {
        fill: themePalette.secondary.main,
        stroke: themePalette.secondary.main,
        opacity: 0.5
      }
    };
    if (data.length === 1) {
      const allDaysAgo = data.map((d) => Number(d.daysAgo));
      const maxProbabilities = data.map(
        (d) => Math.max(d.pilytixProb, d.repProb) * 100
      );
      const xDomain = [0, Math.max(...allDaysAgo) + 10];
      const yDomain = [0, Math.max(...maxProbabilities) + 1];

      return (
        <VictoryGroup offset={12} domain={{ x: xDomain, y: yDomain }}>
          <VictoryBar barWidth={10} style={pxStyle} data={victoryData.pxData} />
          <VictoryBar
            barWidth={10}
            style={repStyle}
            data={victoryData.repData}
          />
          <VictoryAxis
            axisLabelComponent={<VictoryLabel dy={10} />}
            label="Days Ago"
            tickCount={10}
          />
          <VictoryAxis
            tickCount={5}
            dependentAxis
            tickFormat={(t) => `${Math.round(t)}%`}
          />
        </VictoryGroup>
      );
    }

    return (
      <VictoryGroup>
        <VictoryArea
          interpolation="natural"
          style={pxStyle}
          data={victoryData.pxData}
        />
        <VictoryArea
          interpolation="natural"
          style={repStyle}
          data={victoryData.repData}
        />
        <VictoryAxis
          axisLabelComponent={<VictoryLabel dy={10} />}
          label="Days Ago"
        />
        <VictoryAxis dependentAxis tickFormat={(t) => `${Math.round(t)}%`} />
      </VictoryGroup>
    );
  };

  return <VictoryChart>{makeVictoryChart()}</VictoryChart>;
};
