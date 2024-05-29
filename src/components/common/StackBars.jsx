import React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

const StackBars = ({ uData, pData, xLabels,yLabels}) => {
  return (
   
    <BarChart
    layout="horizontal"
    width={500}
    height={300}
    yAxis={[{ data: yLabels, scaleType: 'band' }]}
    // yAxis={[{ data: yLabels, scaleType: 'band' }]}
    series={[
      { data: pData, stack: 'stack1',color:'#142E56' },
      { data: uData, stack: 'stack1' ,color:'#9FC4FF'},
    ]}
    />
  );
}

export default StackBars;