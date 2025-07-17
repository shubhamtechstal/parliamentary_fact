// MUIBarChart.jsx
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Typography } from '@mui/material';

const MUIBarChart = ({ data = [], barName='Attendance', width }) => {
  const chartData = data.map((item) =>
    parseFloat(item.percentage.replace('%', ''))
  );
  const xLabels = data.map((item) => item.session_name);

  return (
    <Box sx={{ p: 2, backgroundColor: 'transparent' }}>
      <BarChart
        xAxis={[{ scaleType: 'band', data: xLabels }]}
        series={[
          {
            data: chartData,
            color: '#f27045',
            label: barName +' %' ,
            barWidth: 10, // thin bars (default is 30-40)
          },
        ]}
        grid={{ horizontal: true }}
        sx={{
          '.MuiChartsLegend-root': { display: 'none' },
          backgroundColor: 'transparent', 
        }}
        width={width || 400}
        height={300}
      />
    </Box>
  );
};

export default MUIBarChart;

// import * as React from 'react';
// import { BarChart } from '@mui/x-charts/BarChart';

// export default function BasicBarChart() {
//   return (
//     <BarChart
//       xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
//       series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 9, 6] }]}
//       height={300}
//     />
//   );
// }
