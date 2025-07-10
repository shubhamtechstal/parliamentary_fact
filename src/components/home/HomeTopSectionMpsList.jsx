import { Box, Container } from '@mui/material';
import Avatar from 'components/common/Avatar';
import Loader from 'components/common/Loader';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchMpsPerformanceData } from 'stores/redux/apiSlices/mps_PerformanceSlice';

function HomeTopSectionMpsList() {
  const dispatch = useDispatch();
  useEffect(() => {
    // dispatch(fetchPerformanceData());
    dispatch(fetchMpsPerformanceData({ datasets: ['popular_mps'], limit: 20 }));
  }, [dispatch]);
  const { partial } = useSelector((state) => state?.mpsPerformance);
  const popular_mps = partial?.popular_mps || [];
  return (
    popular_mps?.length > 0 && (
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
    )
  );
}

export default HomeTopSectionMpsList;
