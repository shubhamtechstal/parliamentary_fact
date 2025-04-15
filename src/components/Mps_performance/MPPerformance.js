import React, { useState } from 'react';
import { Container, Grid, Box } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import MpsPerformanceCard from './cards/MpsPerformanceCard';

export default function MPPerformance({
  detailsPage,
  title,
  handleDetailsClick,
  handleOpenSharePopup,
  mpsData,
}) {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box display={{xs: 'flex', md:'none' }} textAlign={'center'}>
        <h3 style={{margin:'0 auto 2rem',}} >{title} </h3>
      </Box>
      <Box display={{ xs: 'none', md: 'flex' }}>
        <SectionHeading title={title} />
      </Box>
      <Grid
        py={1}
        gap={{ xs: 3, md: 0 }}
        spacing={{ xs: 0, md: 2 }}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.slice(0, 12).map((mp, index) => (
          <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
            <MpsPerformanceCard
              mp={mp}
              index={index}
              handleOpenSharePopup={handleOpenSharePopup}
            />
          </Grid>
        ))}
      </Grid>

      <Box textAlign={{ xs: 'center', md: 'right' }} mt={3} mr={1}>
        <GrayButton onClick={() => handleDetailsClick(detailsPage)}>
          Load More
        </GrayButton>
      </Box>
    </Container>
  );
}
