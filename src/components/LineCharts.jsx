import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

const pData = [10, 4, 6, 5, 14, 14, 15]; // Percentages as data points
const xLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

export default function LineCharts({width}) {
  return (
    <ChartContainer
      width={width||450}
      height={250}
      series={[{ type: 'line', data: pData, curve: 'linear' }]} // Disable curve
      xAxis={[{ scaleType: 'point', data: xLabels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#FF9C93', // Light pink color for the line
          strokeWidth: 5,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#FF9C93', // Match the color of the line
          scale: '1',
          fill: '#FF9C93', // White center for the point
          strokeWidth: 1,
        },
      }}
    >
      {/* Line plot */}
      <LinePlot />

      {/* Mark plot */}
      <MarkPlot />

      {/* Custom labels */}
      {pData.map((y, index) => (
        <text
          key={index}
          x={((width || 450) / xLabels.length) * (index + 0.5)} // Dynamic x position
          y={index % 2 === 0 ? 190 - y * 10 :220 - y * 10 } // Dynamic y position (scaled for simplicity)
          textAnchor="middle"
          style={{
            fill: '#666', // Label color
            fontSize: '12px', // Font size
            fontWeight: 'bold', // Bold labels
          }}
        >
          {`${y}%`}
        </text>
      ))}
    </ChartContainer>
  );
}
