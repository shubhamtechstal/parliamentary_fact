import { Box } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
import React from 'react';

function MpsPmtPerformance() {
  const mpNationalDomy = {
    rank: '001',
    name: 'Amit Kumar Singh',
    constituency: 'Varanasi',
    performance: '78.2',
    rankTitle: 'National Rank:',
    image: 'https://via.placeholder.com/50',
    partyName: 'BJP',
  };
  const mpStateDomy = {
    rank: '001',
    name: 'Amit Kumar Singh',
    constituency: 'Varanasi',
    performance: '78.2',
    rankTitle: 'State Rank:',
    image: '/Assets/icons/mpGirlImage.png',
    partyName: 'BJP',
  };
  const sections = [
    { name: 'Attendance', mpStateDomy, mpNationalDomy },
    { name: 'Questions', mpStateDomy, mpNationalDomy },
    { name: 'Debates', mpStateDomy, mpNationalDomy },
    { name: 'Private Member Bill', mpStateDomy, mpNationalDomy },
    // 'Questions',
    // 'Debates',
    // 'Private Member Bill',
  ];
  return (
    <Box sx={{padding: { md: '2rem', xs: '1rem' },}}>
      {sections.map((section, i) => {
        return (
          <Box key={i} mb={3}>
            <span
              style={{
                borderBottom: '2px solid red',
                margin: '0 0',
                fontSize: '18px',
                fontWeight: 'bold',
              }}
            >
              {section.name}
            </span>
            <Box
              sx={{
                display: 'flex',
                gap: { md: 3, xs: 2 },
                alignItems: 'center',
                overflow: 'auto',
                p: 1,
                pb: 2,
              }}
            >
              <Box>
                <p style={{margin:"0 0 10px 10px"}}>National Ranking</p>
                <Box minWidth={310} margin={'auto'}>
                  <MpsTopPerformanceCard
                    mp={section.mpNationalDomy}
                    cardCatagory={section.name}
                    // isLoading={isRankLoading}
                  />
                </Box>
              </Box>
              <Box>
                <p style={{margin:"0 0 10px 10px"}}>State Ranking</p>
                <Box minWidth={310} margin={'auto'}>
                  <MpsTopPerformanceCard
                    cardCatagory={section.name}
                    mp={section.mpStateDomy}
                  />
                </Box>
              </Box>
            </Box>
            <GrayButton bgColor={'#E39A00'}> View More </GrayButton>
          </Box>
        );
      })}
    </Box>
  );
}

export default MpsPmtPerformance;
