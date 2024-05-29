// stockAllocationPieChart.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = { height: 200, margin: { right: 5 } };

function getRandomBlueShade() {
  const blueShades = [
    "#0000FF",
    "#007FFF",
    "#4682B4",
    "#6495ED",
    "#87CEEB",
    "#87CEFA",
    "#ADD8E6",
    "#B0E0E6",
    "#AFEEEE",
    "#00BFFF",
    "#1E90FF",
    "#4169E1",
    "#5F9EA0",
    "#6495ED",
    "#87CEEB",
  ];

  return blueShades[Math.floor(Math.random() * blueShades.length)];
}

function AllocationPieChart({ data }) {
  const totalAllocation = data.reduce(
    (acc, item) => acc + parseFloat(item.allocation_percent),
    0
  );
  const cashAllocation = 100 - totalAllocation;

  const seriesData = data.map((item) => ({
    value: parseFloat(item.allocation_percent),
    label: item.symbol,
    color: getRandomBlueShade(),
  }));

  seriesData.push({
    value: cashAllocation,
    label: "Cash",
    color: getRandomBlueShade(),
  });

  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart
          series={[{ data: seriesData }]}
          {...pieParams}
          labelStyle={{ fontSize: "14px" }} 
        />
      </Box>
    </Stack>
  );
}

export default AllocationPieChart;
