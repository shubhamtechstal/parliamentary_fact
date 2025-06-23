import { Box } from '@mui/material';
import GrayButton from 'components/common/GrayButton';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import Text from 'components/common/Text';
import MpsTopPerformanceCard from 'components/Mps_performance/cards/MpsTopPerformanceCard';
import { attendance_details } from 'helpers/performanceConstants';
import { getDateInMonthNameFormate } from 'helpers/utills/utilityFunctions';
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
    <Box sx={{ padding: { md: '2rem', xs: '1rem' } }}>
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
                justifyContent: 'start',
                overflow: 'auto',
                p: 1,
                pb: 2,
              }}
            >
              <Box>
                <p style={{ margin: '0 0 10px 10px' }}>National Ranking</p>
                <Box minWidth={310} margin={'auto'}>
                  <MpsTopPerformanceCard
                    mp={section.mpNationalDomy}
                    cardCatagory={section.name}
                    // isLoading={isRankLoading}
                  />
                </Box>
              </Box>
              <Box>
                <p style={{ margin: '0 0 10px 10px' }}>State Ranking</p>
                <Box minWidth={310} margin={'auto'}>
                  <MpsTopPerformanceCard
                    cardCatagory={section.name}
                    mp={section.mpStateDomy}
                  />
                </Box>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap',
                    justifyContent: 'space-around',
                  }}
                >
                  {attendance_details?.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.8rem',
                        padding: '10px 10px',
                        width: '15rem',
                      }}
                    >
                      <GrayDot />
                      <Box>
                        <Text
                          sx={{
                            color: '#00000080',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                          }}
                          text={`${item?.title}`}
                        />
                        <Box
                          sx={{
                            display: 'flex',
                            gap: '5px',
                            alignItems: 'end',
                            marginTop: '0.3rem',
                          }}
                        >
                          <Text
                            sx={{
                              // color: '#434343',
                              fontSize: '1rem',
                              fontWeight: 600,
                              lineHeight: 1,
                            }}
                            text={`${item?.count ?? ''}`}
                          />
                          {item?.date && (
                            <Text
                              sx={{
                                color: '#00000080',
                                fontSize: '0.9rem',
                                fontWeight: 500,
                                textWrap: 'nowrap',
                              }}
                              text={getDateInMonthNameFormate(item?.date)}
                            />
                          )}
                        </Box>
                      </Box>
                    </Box>
                  ))}
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
