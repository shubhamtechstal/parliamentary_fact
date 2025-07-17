import { Box, Container, Skeleton } from '@mui/material';
import Avatar from 'components/common/Avatar';
import Loader from 'components/common/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPopulerMpsData } from 'stores/redux/apiSlices/mps_PerformanceSlice';

function HomeTopSectionMpsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPopulerMpsData());
  }, [dispatch]);
  const { popular_mps, isLoading } = useSelector((state) => state?.populerMps);
 
  return isLoading ? (
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
        {Array.from({ length: 12 }).map((i) => (
          <Box
            key={i}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="text" width={90} height={40} />
          </Box>
        ))}
      </Container>
    </Box>
  ) : (
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
        {popular_mps?.map((mps) => (
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={
              mps?.mp_id
                ? `/mps-details/${mps?.name.replaceAll(' ', '-')?.toLowerCase()}_${mps?.mp_id}`
                : '#'
            }
          >
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
  );
}

export default HomeTopSectionMpsList;
