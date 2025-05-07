import { Box, Container, Grid } from '@mui/material';
import HomeHeroSection from './HomeHeroSection';
import MultiColorProgressRings from './MultiColorProgressRings';
import LS_productivity from 'components/pmt_performance/LS_productivity';
import Text from 'components/common/Text';
import MpsStartRatingCard from 'components/common/cards/MpsStartRatingCard';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import MpsPerformanceCard from 'components/Mps_performance/cards/MpsPerformanceCard';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import NewsSectionHome from 'components/news/NewsSectionHome';
import { MpsSmallCardsSkeleton } from 'components/Mps_performance/cards/mpsCardsSkeleton';
import MpsSectionDynamic from './MpsSectionDynamic';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPerformanceData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import HomePmtPerformanceSection from './HomePmtPerformanceSection';
import ProgressMeter from 'components/common/ProgressMeter';

function HomePageComponent() {
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const mpsData = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerformanceData());
  }, [dispatch]);
  const { loksabhaName, pageData, loading } = useSelector(
    (state) => state?.pmtPerformance
  );

  return (
    <div style={{ position: 'relative', top: '2rem' }}>
      <Container>
        <HomePmtPerformanceSection
          pageData={pageData}
          loksabhaName={loksabhaName}
          loading={loading}
        />
        <Container sx={{ display: { xs: 'block', md: 'none' }, mb: 4 }}>
          <HomeHeroSection />
        </Container>
        <Box
          sx={{
            width: '100%',
            display: { xs: 'none', md: 'flex' },
            // my: 4,
            justifyContent: 'flex-end',
          }}
        >
          <Link to={'/parliament-performance'}>
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
              Know More
            </Button>
          </Link>
        </Box>
      </Container>

      <AdvertiseSection />
      <MpsSectionDynamic
        mpsData={mpsData}
        title={'MPs Parliament Performance'}
        subTitle={'Top Ranking MPs'}
        linkTo={'/mps-performance'}
      />
      <AdvertiseSection />
      <MpsSectionDynamic
        mpsData={mpsData}
        title={'MPs Constituency Performance'}
        subTitle={'Top Ranking MPs in Fund Spending'}
        linkTo={'/mps-constituency'}
        topMinistersData={data}
        topMinisterTitle={'Top Ranking Ministers'}
      />
      <AdvertiseSection />
      {/* Mps Rating cars  section  */}
      <MpsSectionDynamic
        mpsData={mpsData}
        title={'MPs Public Rating'}
        subTitle={'Top Rated MPs'}
        linkTo={'/mps-public-rating'}
        topMinistersData={data}
        topMinisterTitle={'Top Rated Ministers'}
        isRatingCard={true}
      />
      <AdvertiseSection />
      <Box
        style={{
          background: '#fff',
          borderTop: '1px solid cornflowerblue',
          paddingTop: '2rem',
        }}
      >
        <Container>
          <NewsSectionHome />
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              my: 3,
            }}
          >
            <Link to={'/news'}>
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
      </Box>
    </div>
  );
}

export default HomePageComponent;
