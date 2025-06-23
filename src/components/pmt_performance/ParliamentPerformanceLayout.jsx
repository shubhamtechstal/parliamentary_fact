import React, { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import PerformanceChips from './PerformanceChips';
import { performace_chipList } from 'helpers/performanceConstants';
import { Box, Container } from '@mui/material';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import Text from 'components/common/Text';

const ParliamentPerformanceLayout = () => {
      const navigate = useNavigate();
    
  const SabhaSectionComponets = [
    {
      id: 'Lok Sabha',
      url: 'lok-sabha-performance',
    },
    {
      id: 'Rajya Sabha',
      url: 'rajya-sabha-performance',
    },
  ];

  return (
    <AdvertisementLayout>
      <Box
        sx={{
          background: '#fff',
          display: 'flex',
          borderBottom: '1px solid #ddd',
        }}
      >
        <Container sx={{ display: 'flex', gap: '10px',   opacity: 0.8}}>
          {SabhaSectionComponets.map((val, index) => {
            const isActive = window.location.pathname.includes(val?.url);
            return (
              <div
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#F44336' : 'inherit',
                  borderBottom: isActive
                    ? '4px solid rgb(241, 128, 124)'
                    : 'none',
                  padding: '10px 0 6px 0',
                }}
                onClick={() => {
                  navigate(`/parliament-performance/${val.url}`);
                }}
                key={index}
              >
                <Text
                  text={val.id}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                />
              </div>
            );
          })}
        </Container>
      </Box>
      <PerformanceChips sections={performace_chipList} />
      <Outlet />
    </AdvertisementLayout>
  );
};

export default ParliamentPerformanceLayout;
