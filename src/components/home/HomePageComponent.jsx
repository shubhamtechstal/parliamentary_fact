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
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';
import Loader from 'components/common/Loader';

function HomePageComponent() {
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  // const mpsData = [
  //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
  // ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPerformanceData());
    dispatch(fetchMpsPerformanceData());
  }, [dispatch]);
  const {
    mp_fund_data = [],
    top_performance = [],
    popular_mps,
    loading
  } = useSelector((state) => state?.mpsPerformance);
  return (
    <div>
      <Box sx={{ backgroundColor: '#fff', borderBottom: '2px solid #d3d2d2' }}>
        <Container
          sx={{
            display: 'flex',
            gap: 2,
            overflow: 'auto',
            pt: 2,
            textAlign: 'center',
            alignItems: 'top',
          }}
        >
          {loading ?
          <Box sx={{display: 'flex', justifyContent: 'center', width: '100%', height: '100px'}}>
            <Loader loading position='relative'/> 
          </Box>
          :
          popular_mps?.map((mps) => (
            <Link style={{textDecoration:'none', color:"inherit"}} to={mps?.mp_id ? `/mps-details/${mps?.name.replaceAll(" ", '-')?.toLowerCase() }_${mps?.mp_id}` : '#'}>
             <Box
                key={mps.mp_id}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar
                  sx={{ height: '50px', width: '50px' }}
                  alt="Test"
                  src={mps?.image}
                />
                <p
                  style={{
                    fontSize: '10px',
                    marginTop: '5px',
                    maxHeight: '2rem',
                    width: '90px',
                    textAlign: 'center',
                  }}
                >
                  {mps?.name}
                </p>
              </Box>
            </Link>
          ))}
        </Container>
      </Box>
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
      <HomeMpsPerformanceSection
        mp_fund_data={mp_fund_data}
        top_performance={top_performance}
      />
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
