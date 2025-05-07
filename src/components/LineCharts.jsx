import * as React from 'react';
import { ChartContainer } from '@mui/x-charts/ChartContainer';
import {
  LinePlot,
  MarkPlot,
  lineElementClasses,
  markElementClasses,
} from '@mui/x-charts/LineChart';

export default function LineCharts({ width = 450, data = [], labels = [] }) {
  const chartHeight = 250;
  const paddingTop = 45;
  const paddingBottom = 40;
  const maxY = Math.max(...data, 10);
  const labelAreaHeight = chartHeight - paddingTop - paddingBottom;

  return (
    <ChartContainer
      width={width}
      height={chartHeight}
      series={[{ type: 'line', data, curve: 'linear' }]}
      xAxis={[{ scaleType: 'point', data: labels }]}
      sx={{
        [`& .${lineElementClasses.root}`]: {
          stroke: '#FF9C93',
          strokeWidth: 5,
        },
        [`& .${markElementClasses.root}`]: {
          stroke: '#FF9C93',
          fill: '#FF9C93',
          strokeWidth: 1,
        },
      }}
    >
      <LinePlot />
      <MarkPlot />

      {/* Custom zig-zag labels */}
      {data.map((y, index) => {
        const x = (width / labels.length) * (index + 0.5);
        const dotY = chartHeight - paddingBottom - (y / maxY) * labelAreaHeight;

        const labelYOffset = index % 2 === 0 ? -10 : 20; // alternate above/below
        const labelY = dotY + labelYOffset;

        return (
          <text
            key={index}
            x={x}
            y={labelY}
            textAnchor="middle"
            style={{
              fill: '#444',
              fontSize: '12px',
              fontWeight: 'bold',
            }}
          >
            {`${y}%`}
          </text>
        );
      })}
    </ChartContainer>
  );
}
