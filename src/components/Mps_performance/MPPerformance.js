import React, { useMemo, useState } from 'react';
import { Container, Grid, Box, Skeleton } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import MpsPerformanceCard from './cards/MpsPerformanceCard';
import { MpsSmallCardsSkeleton } from './cards/mpsCardsSkeleton';
import { mpsDataNetionalRank, mpsDataStateRank } from 'helpers/performanceConstants';

export default function MPPerformance({
  detailsPage,
  title,
  handleDetailsClick,
  handleOpenSharePopup,
  mps_Data
  // mpsDataStateRank,
  // mpsDataNetionalRank,
}) {
  const [isStateRank, setIsStateRank] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleStateRankClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsStateRank((prev) => !prev);
      setIsLoading(false);
    }, 300);
  };
  const mpsData = isStateRank ? mpsDataStateRank(mps_Data) : mpsDataNetionalRank(mps_Data);
  // const mpsData = useMemo(
  //   () => (isStateRank ? mpsDataStateRank : mpsDataNetionalRank),
  //   [isStateRank]
  // );

  return (
    <Container maxWidth="lg" sx={{ py: 2 }}>
      <Box
        display="flex"
        flexDirection={{ md: 'row', xs: 'column' }}
        justifyContent={{ md: 'space-between', xs: 'center' }}
        alignItems={'center'}
      >
        <Box display={{ xs: 'flex', md: 'none' }} textAlign={'center'}>
          <h3 style={{ margin: '0 auto 2rem' }}>{title} </h3>
        </Box>
        <Box display={{ xs: 'none', md: 'block' }} textAlign={'center'}>
          <SectionHeading title={title} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          mb={2}
        >
          <GrayButton
            onClick={() => handleStateRankClick(false)}
            fontWeight="600"
            bgColor="#fff"
            textColor="#00000080"
          >
            {!isStateRank ? 'Check State Ranking' : 'Back  to National Rank'}
          </GrayButton>
        </Box>
      </Box>
      <Grid
        spacing={{ md: 2, xs: 0 }}
        gap={{ xs: 1.5, md: 0 }}
        padding={{ xs: '6px', md: 1 }}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData?.slice(0, 6)?.map((mp, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <MpsPerformanceCard
                mpInfo={mp}
                index={index}
                handleOpenSharePopup={handleOpenSharePopup}
                isLoading={isLoading}
              />
            </Grid>
          ))
        ) : (
          <MpsSmallCardsSkeleton />
        )}
      </Grid>
      <Grid
        spacing={{md:2, xs: 0}}
        gap={{xs: 1.5, md:0}}
        padding={{xs:'6px', md:1}}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData?.slice(6, 12).map((mp, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              <MpsPerformanceCard
                mpInfo={mp}
                index={index}
                handleOpenSharePopup={handleOpenSharePopup}
                isLoading={isLoading}
              />
            </Grid>
          ))
        ) : (
          <MpsSmallCardsSkeleton />
        )}
      </Grid>

      <Box textAlign={{ xs: 'center', md: 'right' }} mt={3} mr={1}>
        <GrayButton onClick={() => handleDetailsClick(detailsPage)}>
          Load More
        </GrayButton>
      </Box>
    </Container>
  );
}
