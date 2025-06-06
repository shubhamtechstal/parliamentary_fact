// Sample JSON data
const yearlyData = [
  {
    month: 'January 2022',
    rank: 400,
    expenditure: '8.3CR',
    percentage: '52.2',
    rating: '000',
  },
  {
    month: 'February 2022',
    rank: 400,
    expenditure: '8.3CR',
    percentage: '52.2',
    rating: '000',
  },
  {
    month: 'March 2022',
    rank: 400,
    expenditure: '8.3CR',
    percentage: '52.2',
    rating: '000',
  },
  {
    month: 'April 2022',
    rank: 400,
    expenditure: '8.3CR',
    percentage: '52.2',
    rating: '000',
  },
];

import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid,
  Avatar,
  CircularProgress,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Gauge, gaugeClasses } from '@mui/x-charts';

const StatCard = ({ item, isSmall, key }) => (
  <Card
    key={key}
    sx={{
      mb: 2,
      borderRadius: 4,
      boxShadow: 2,
      background: '#70707033 0% 0% no-repeat padding-box',
      border: '2px solid #D6D6D6',
    }}
  >
    <CardContent>
      <Grid container alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle2" color="textSecondary" mb={1}>
          {item.month}
        </Typography>
        <IconButton size="small">
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid
        container
        spacing={2}
        alignItems="center"
      >
        <Grid item xs={3}>
          <Typography variant="caption" sx={{ fontSize: isSmall ? '0.8rem' : '1rem' }}>National Rank</Typography>
          <Typography variant="h6" color="orange">
            {item.rank}
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption" sx={{ fontSize: isSmall ? '0.8rem' : '1rem' }}>Expenditure</Typography>
          <Typography variant="h6" color="orange">
            {item.expenditure}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            8.3cr
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Gauge
            width={isSmall ? 70 : 100}
            height={isSmall ? 70 : 100}
            value={item.percentage}
            cornerRadius="50%"
            sx={{
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: { md: 18, xs: 10 },
                fontWeight: 'bold',
                transform: 'translate(0px, 0px)',
                color: 'rgb(0 0 0 / 50%)',
                fontFamily: "'Saira', sans-serif",
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: '#E59B00',
              },
            }}
            text={({ value }) => `${value}%`}
          />
          {/* <Box position="relative" display="inline-flex">
              <CircularProgress variant="determinate" value={52.2} size={50} thickness={5} sx={{ color: "orange" }} />
              <Box
                top={0}
                left={0}
                bottom={0}
                right={0}
                position="absolute"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Typography variant="caption" component="div">
                  {item.percentage}
                </Typography>
              </Box>
            </Box> */}
        </Grid>
        <Grid item xs={3}>
          <Typography variant="caption" sx={{ fontSize: isSmall ? '0.8rem' : '1rem' }}>Rating</Typography>
          <Avatar
            sx={{
              bgcolor: 'orange',
              width: 40,
              height: 40,
              fontSize: isSmall ? '0.8rem' : '1rem',
            }}
          >
            {item.rating}
          </Avatar>
        </Grid>
      </Grid>
    </CardContent>
  </Card>
);

export default function YearlyStatsCards({ isSmall }) {
  return (
    <Box p={2}>
      {/* <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold", color: "orange" }}>
          1st Year
        </Typography> */}
      {yearlyData.map((item, index) => (
        <StatCard key={index} isSmall={isSmall} item={item} />
      ))}
    </Box>
  );
}
