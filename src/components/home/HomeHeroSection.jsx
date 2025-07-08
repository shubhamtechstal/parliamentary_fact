import React from 'react';
import { Box, Grid, Typography, Card } from '@mui/material';
import MultiColorProgressRings from './MultiColorProgressRings';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const HomeHeroSection = () => {
    const { loksabhaName, pageData, loading } = useSelector(
      (state) => state?.pmtPerformance
    );


const performanceData = [
  { label: 'Attendance', value: pageData?.attendance_percentage?.attendance_percentage || '52.25%', color: '#ff9383', subtitle: 'Att.' },
  { label: 'Question', value: pageData?.questions_percentage?.question_percentage || '52.25%', color: '#ff7e9d', subtitle: 'Qs' },
  { label: 'Debates', value: pageData?.debate_percentage?.debate_percentage || '52.25%', color: '#c27ac4', subtitle: 'Dbt' },
  {
    label: 'Pvt Member Bill',
    value: pageData?.private_bill_percentage?.private_bill_percentage || '52.25%',
    color: '#87629a',
    subtitle: 'Pmb.',
  },
  { label: 'MPlads', value: pageData?.mpLads_percentage?.mpLads_percentage || '52.25%', color: '#59597d', subtitle: 'Mpf' },
  { label: 'Know More', value: '', color: '#ccc', isCTA: true },
];

const rings = [
  { progress: Number(pageData?.attendance_percentage?.attendance_percentage), color: "#FFB5B5" },
  { progress: Number(pageData?.questions_percentage?.question_percentage), color: "#FF7B9C" },
  { progress: Number(pageData?.debate_percentage?.debate_percentage) || 52.25, color: "#D16E82" },
  { progress: Number(pageData?.private_bill_percentage?.private_bill_percentage), color: "#956784" },
  { progress: Number(pageData?.mpLads_percentage?.mpLads_percentage) || 50 , color: "#4A5776" }
];
  return (
    <>
      <Grid container spacing={{xs:1, md:5}} alignItems={'center'}>
        <Grid item xs={12} md={5}>
          <MultiColorProgressRings rings={rings} />
          <Box display={'flex'} justifyContent="space-between" flexWrap={'wrap'} gap={2} mb={2}>
            {performanceData.map((item, index) => {
              if (item.isCTA) return null;
              return (
                <Box
                  display={'flex'}
                  alignItems="center"
                  fontSize={'0.8rem'}
                  gap={1}
                  key={index}
                >
                  <Box
                    sx={{
                      backgroundColor: item.color,
                      borderRadius: 1,
                      height: 10,
                      width: 10,
                    }}
                  />{' '}
                  {item.label}
                </Box>
              );
            })}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1} mt={2}>
            {performanceData.map((item, index) => (
              <Grid item xs={4} key={index}>
                <Card
                  sx={{
                    backgroundColor:  item.isCTA ? '#d6d6d6' : '#fff',
                    borderRadius: 3,
                    height: 100,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    color: item.isCTA ? '#000' : '#fff',
                    cursor: item.isCTA ? 'pointer' : 'default',
                    boxShadow: item.isCTA ? '0 0 8px rgba(0,0,0,0.2)' : 'none',
                  }}
                >
                  {item.isCTA ? (
                     <Link style={{textDecoration:'none'}} to={'/parliament-performance/lok-sabha-performance'}>
                       <Typography fontWeight="bold" fontSize={12} color={'#fff'} textAlign={'center'} >▶ <br /> Know More</Typography>
                      </Link>
                  ) : (
                    <>
                      <Typography variant="h6" fontWeight="bold" color={'black'}>
                        {item.value}
                      </Typography>
                      <Typography fontSize={12} color={item.color}>
                        {item.subtitle}.
                      </Typography>
                      <Typography fontSize={12} color={item.color} textAlign={'center'}>
                        <strong>{item.label}</strong>
                      </Typography>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default HomeHeroSection;
