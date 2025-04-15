import { useEffect, useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import MpsPerformanceCard from './cards/MpsPerformanceCard';
import MpsPerformanceAttandanceCard from './cards/MpsPerformanceAttandanceCard';

export default function MpsPerformanceInAttandance({
  title,
  handleOpenSharePopup,
  mpsData,
  handleStepperChange,
  activeSection,
  sections,
}) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        display={'flex'}
        justifyContent={'space-between'}
        alignItems={'center'}
      >
        <SectionHeading title={title} />
        <Box display={{ md: 'block', xs: 'none' }}>
          <GrayButton bgColor="#fff" textColor="#00000080">
            Know More
          </GrayButton>
        </Box>
      </Box>
      {sections?.map((section) => (
        <button
          key={section.id}
          onClick={() => handleStepperChange(section.id)}
          style={{
            margin: '5px',
            borderTop: 'none',
            borderRight: 'none',
            borderLeft: 'none',
            borderBottom:
              activeSection == section.id ? '3px solid #f1807c' : 'none',
            background: 'transparent',
            paddingBottom: '5px',
          }}
        >
          {section.title}
        </button>
      ))}

      <Grid
        container
        gap={{ xs: 2, md: 0 }}
        spacing={{ xs: 0, md: 2 }}
        sx={{ py: 4 }}
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData?.slice(0, 3)?.map((mp, index) => (
          <MpsPerformanceAttandanceCard
            handleOpenSharePopup={handleOpenSharePopup}
            mp={mp}
            index={index}
          />
        ))}
      </Grid>
      <Grid
        container
        gap={{ xs: 3, md: 0 }}
        spacing={{ xs: 0, md: 2 }}
        py={1}
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData?.slice(3, 9)?.map((mp, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <MpsPerformanceCard
              handleOpenSharePopup={handleOpenSharePopup}
              mp={mp}
              index={index}
            />
          </Grid>
        ))}
      </Grid>
      <Box
        display={{ md: 'none', xs: 'flex' }}
        justifyContent={'center'}
        alignItems={'center'}
        mt={3}
      >
        <GrayButton>Know More</GrayButton>
      </Box>
    </Container>
  );
}
