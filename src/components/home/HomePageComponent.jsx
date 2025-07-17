import { Avatar, Box, Container } from '@mui/material';
import HomeHeroSection from './HomeHeroSection';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';
import AdvertiseSection from 'components/addLayout/HorizontalAdvertiseSection';
import NewsSectionHome from 'components/news/NewsSectionHome';
import HomePmtPerformanceSection from './HomePmtPerformanceSection';
import HomeMpsPerformanceSection from './HomeMpsPerformanceSection';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPerformanceData } from 'stores/redux/apiSlices/pmt_PerformanceSlice';
import { useEffect } from 'react';
import HomeTopSectionMpsList from './HomeTopSectionMpsList';

function HomePageComponent() {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  // const mpsData = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  // ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerformanceData());
}, [dispatch]);
  return (
    <div>
      <HomeTopSectionMpsList />
      <Container sx={{ mt: 5 }}>
        <HomePmtPerformanceSection />
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
          <Link
            to={
              '/parliament-performance/lok-sabha-performance/lok-sabha-productivity'
            }
          >
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
      <HomeMpsPerformanceSection/>
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
