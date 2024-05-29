// stockAllocationPieChart.jsx
import * as React from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import { PieChart } from "@mui/x-charts/PieChart";

const pieParams = { height: 200, margin: { right: 5 } };
const palette = ["red", "blue", "green"];

function stockAllocationPieChart({ data }) {
  const seriesData = data.map((item) => ({
    value: parseFloat(item.allocation_percent),
  }));

  return (
    <Stack direction="row" width="100%" textAlign="center" spacing={2}>
      <Box flexGrow={1}>
        <Typography>Palette</Typography>
        <PieChart colors={palette} series={[{ data: seriesData }]} {...pieParams} />
      </Box>
    </Stack>
  );
}

export default stockAllocationPieChart;
