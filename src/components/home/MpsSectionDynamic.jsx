import { Box, Container, Grid } from '@mui/material';
import Button from 'components/common/Button';
import MpsStartRatingCard from 'components/common/cards/MpsStartRatingCard';
import GrayButton from 'components/common/GrayButton';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import { MpsSmallCardsSkeleton } from 'components/Mps_performance/cards/mpsCardsSkeleton';
import MpsPerformanceCard from 'components/Mps_performance/cards/MpsPerformanceCard';
import {
  mpsDataNetionalRank,
  mpsDataStateRank,
} from 'helpers/performanceConstants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function MpsSectionDynamic({
  //   mpsData,
  title,
  subTitle,
  linkTo,
  topMinistersData,
  topMinisterTitle,
  isRatingCard,
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
  const mpsData = isStateRank ? mpsDataStateRank : mpsDataNetionalRank;
  return (
    <Container>
      {/* <h2>{title}</h2> */}
      <Text
        variant="h2"
        mt={5}
        sx={{
          fontSize: { xs: '1.5rem' },
          fontWeight: '600',
          textAlign: { xs: 'center', md: 'left' },
        }}
        text={title}
      />
      {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <Box
          sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
        ></Box>
        <Text sx={{ fontWeight: '600', marginTop: '0.1rem' }} text={subTitle} />
      </Box> */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: { xs: 'center', md: 'space-between' },
          alignItems: 'center',
          flexDirection: { md: 'row', xs: 'column' },
        }}
        mb={2}
      >
        <SectionHeading title={subTitle} />
        <GrayButton
          onClick={() => handleStateRankClick(false)}
          fontWeight="600"
          bgColor="#fff"
          textColor="#00000080"
        >
          {!isStateRank ? 'Check State Ranking' : 'Back  to National Rank'}
        </GrayButton>
      </Box>
      <Grid
        p={1}
        spacing={2}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData.slice(0, 12).map((mp, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              {isRatingCard ? (
                <MpsStartRatingCard isLoading={isLoading} mpInfo={mp} />
              ) : (
                <MpsPerformanceCard isLoading={isLoading} mpInfo={mp} />
              )}
            </Grid>
          ))
        ) : (
          <MpsSmallCardsSkeleton />
        )}
      </Grid>
      <Grid
        p={1}
        spacing={2}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData.slice(6, 12).map((mp, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              {isRatingCard ? (
                <MpsStartRatingCard isLoading={isLoading} mpInfo={mp} />
              ) : (
                <MpsPerformanceCard isLoading={isLoading} mpInfo={mp} />
              )}
            </Grid>
          ))
        ) : (
          <MpsSmallCardsSkeleton />
        )}
      </Grid>
      <Grid
        p={1}
        spacing={2}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData.slice(6, 12).map((mp, index) => (
            <Grid item xs={6} sm={4} md={3} lg={2} key={index}>
              {isRatingCard ? (
                <MpsStartRatingCard isLoading={isLoading} mpInfo={mp} />
              ) : (
                <MpsPerformanceCard isLoading={isLoading} mpInfo={mp} />
              )}
            </Grid>
          ))
        ) : (
          <MpsSmallCardsSkeleton />
        )}
      </Grid>

      {topMinistersData && (
        <>
          <SectionHeading title={topMinisterTitle} />
          <Grid
            container
            spacing={2}
            sx={{
              display: { md: 'grid', xs: 'flex' },
              flexWrap: { md: 'wrap', xs: 'nowrap' },
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' },
              overflowX: { xs: 'auto', md: 'unset' },
              justifyContent: 'space-around',
              padding: '1rem 0',
            }}
          >
            {(mpsData ?? topMinistersData).slice(0, 6).map((mp, i) => (
              <Grid item key={i}>
                {isRatingCard ? (
                  <MpsStartRatingCard isLoading={isLoading} mpInfo={mp} />
                ) : (
                  <MpsPerformanceCard isLoading={isLoading} mpInfo={mp} />
                )}
              </Grid>
            ))}
          </Grid>
        </>
      )}

      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'flex-end',
          my: 3,
        }}
      >
        <Link to={linkTo}>
          <Button
            sx={{
              background: 'gray',
              color: '#fff',
              fontWeight: '600',
              borderRadius: '18px',
              marginBottom: '1rem',
              padding: '0.2rem 3rem',
              '&:hover': {
                background: 'gray',
                color: '#fff',
              },
            }}
          >
            Load more
          </Button>
        </Link>
      </Box>
    </Container>
  );
}

export default MpsSectionDynamic;
