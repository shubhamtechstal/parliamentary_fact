import React from 'react';
import { Box, Button, Typography, Chip, Divider } from '@mui/material';
import LineCharts from 'components/LineCharts';
import FilterController from 'components/common/modals/FilterController';
import Text from 'components/common/Text';
import LS_attendance from 'components/pmt_performance/pmt_prfrmc_home/LS_attendance';
import { attendance_details } from 'helpers/performanceConstants';
import ListTableComponent from 'components/pmt_performance/ListTableComponent';
// import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const tableData = Array(5).fill({
  rank: '001',
  name:
    'Ayurveda, Yoga and Naturopathy, Unani, Siddha and Homoeopathy (AYUSH)',
  percentage: '85%',
  questions: '80/ 80',
});
const headers = {
  cal1: 'Ranking',
  cal2: 'Question Topic',
  cal3: 'Questions %',
  cal4: 'Questions Number',
};
export default function LokSabhaQuestionTopics() {
  return (
    <Box sx={{ p: 4, fontFamily: 'Arial' }}>
      <Box
        sx={{
          display: { md: 'flex', xs: 'block' },
          justifyContent: 'space-between',
          alignItems: 'center',
          textAlign: { xs: 'right', md: 'left' },
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: '1.3rem',
              color: '#434343',
              letterSpacing: '-0.3px',
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={'Lok Sabha Question Topics'}
          />
          <Text
            sx={{
              fontSize: '0.8rem',
              color: '#434343',
              mt: 1,
              fontWeight: 500,
              textAlign: { xs: 'center', md: 'left' },
            }}
            font={'Sora'}
            text={'Till 20 March 2024'}
          />
        </Box>
        <Box
          sx={{
            position: { xs: 'absolute', md: 'static' },
            right: 11,
            top: 11,
          }}
        >
          <FilterController />
        </Box>
      </Box>
      <LS_attendance
        attendance_details={attendance_details}
        percentageValue={'89.30%'}
      />
      <Divider sx={{ my: 3 }} />

        <ListTableComponent headers={headers} ministries={tableData} />
    </Box>
  );
}
