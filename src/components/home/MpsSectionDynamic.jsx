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
  mps_Data,
  title,
  subTitle,
  linkTo,
  topMinisters_Data,
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
  const mpsData = isStateRank
    ? mpsDataStateRank(mps_Data)
    : mpsDataNetionalRank(mps_Data);
  const topMinistersData = isStateRank
    ? mpsDataStateRank(topMinisters_Data)
    : mpsDataNetionalRank(topMinisters_Data);
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
        spacing={{ md: 2, xs: 0 }}
        gap={{ xs: 1, md: 0 }}
        container
        padding={{ xs: '6px 2px', md: 1 }}
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData.slice(0, 6).map((mp, index) => (
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
        spacing={{ md: 2, xs: 0 }}
        gap={{ xs: 1, md: 0 }}
        padding={{ xs: '6px 2px', md: 1 }}
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
        spacing={{ md: 2, xs: 0 }}
        gap={{ xs: 1, md: 0 }}
        padding={{ xs: '6px 2px', md: 1 }}
        container
        flexWrap={{ md: 'wrap', xs: 'nowrap' }}
        overflow={'auto'}
      >
        {mpsData.length > 0 ? (
          mpsData.slice(12, 18).map((mp, index) => (
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

      {topMinistersData&& topMinisterTitle && (
        <>
          <SectionHeading title={topMinisterTitle} />
          <Grid
            container
            spacing={{ md: 2, xs: 0 }}
            gap={{ xs: 1, md: 0 }}
            padding={{ xs: '6px', md: 1 }}
            sx={{
              display: { md: 'grid', xs: 'flex' },
              flexWrap: { md: 'wrap', xs: 'nowrap' },
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' },
              overflowX: { xs: 'auto', md: 'unset' },
              justifyContent: 'space-around',
              // padding: '1rem 0',
            }}
          >
            {(topMinistersData ?? []).slice(0, 6).map((mp, i) => (
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
