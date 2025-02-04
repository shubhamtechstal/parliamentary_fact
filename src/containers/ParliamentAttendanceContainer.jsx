import { Box, Button, Divider } from '@mui/material';
import {
  GaugeContainer,
  GaugeReferenceArc,
  GaugeValueArc,
} from '@mui/x-charts';
import StateAttendance from 'components/attendence/StateAttendance';
import ParliamentPerformanceCard from 'components/common/cards/ParliamentPerformanceCard';
import Text from 'components/common/Text';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import LineCharts from 'components/LineCharts';
import React, { useState } from 'react';

export default function ParliamentAttendanceContainer() {
  const [filter, setFilter] = useState(false);
  const handleFilterClick = () => {
    setFilter(!filter);
  };
  return (
    <>
      {/* <Box sx={{display:'flex'}}>
    <ParliamentPerformanceCard/>
    <StateAttendance/>
    </Box> */}

      <Box sx={{ width: '90%', margin: 'auto', marginTop: '2rem' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Box>
            <Text
              sx={{
                fontSize: '1.3rem',
                color: '#434343',
                letterSpacing: '-0.3px',
                fontWeight: 500,
              }}
              font={'Sora'}
              text={'MPS PARTICIPATION IN LOK SABHA ATTENDANCE'}
            />
            <Text
              sx={{
                fontSize: '1rem',
                marginTop: '1rem',
                color: '#434343',
                letterSpacing: '-0.3px',
                fontWeight: 500,
              }}
              font={'Sora'}
              text={'Lok Sabha Attendance'}
            />
          </Box>
          <Button
            className="MobileViewRemove"
            onClick={() => handleFilterClick()}
            sx={{
              background: '#b5b5b5',
              textTransform: 'none',
              color: '#fff',
              fontWeight: '600',
              fontSize: '12px',
              height: 'min-content',
              borderRadius: '18px',
              padding: '0.2rem 1rem',
              '&:hover': {
                background: 'grey',
                color: '#fff',
              },
              '.MuiButton-startIcon': {
                marginRight: '2px',
              },
              '.MuiButton-startIcon>*:nth-of-type(1)': {
                fontSize: '14px',
              },
            }}
            startIcon={<FilterAltOutlinedIcon />}
          >
            {filter ? 'Clear Filter' : 'Filter'}
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          <Box
            sx={{
              //   margin: { xs: '0 1rem 0 0', md: '3rem 1rem 0 1rem' },
              width: { xs: '47%', md: 'auto' },
            }}
          >
            <GaugeContainer
              width={230}
              height={250}
              startAngle={-130}
              innerRadius={98}
              sx={{ position: 'relative' }}
              endAngle={130}
              value={70}
            >
              <GaugeReferenceArc style={{ fill: '#DCDCDC' }} />{' '}
              {/* Set the color here */}
              <GaugeValueArc style={{ fill: '#FF936F' }} />{' '}
              {/* Set the color here */}
              <text
                x="40%"
                y="55%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#FF936F',
                  fontSize: '2.5rem',
                  fontWeight: '800',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                100.
              </text>
              <text
                x="72%"
                y="57%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#FF936F',
                  fontSize: '1.5rem',
                  fontWeight: '400',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                28%
              </text>
              <text
                x="50%"
                y="80%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.8rem',
                  fontWeight: '700',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`ATTENDANCE`}
              </text>
              <text
                x="50%"
                y="87%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`LOK SABHA`}
              </text>
              <text
                x="11%"
                y="86%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.6rem',
                  fontWeight: '500',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`0`}
              </text>
              <text
                x="93%"
                y="86%"
                textAnchor="middle"
                dominantBaseline="middle"
                style={{
                  fill: '#00000080',
                  fontSize: '0.6rem',
                  fontWeight: '500',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {`100+`}
              </text>
            </GaugeContainer>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              width: '450px',
              gap: '1rem',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              >
                <Box
                  sx={{
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    background: '#D3D3D3',
                  }}
                ></Box>
                <Box>
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                    text={'Highest Attendance Day'}
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
                        color: '#434343',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      text={'24.56'}
                    />
                    <Text
                      sx={{
                        color: '#00000080',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                      text={'15 AUG 2024'}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              >
                <Box
                  sx={{
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    background: '#D3D3D3',
                  }}
                ></Box>
                <Box>
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                    text={'Lowest Attendance Day  '}
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
                        color: '#434343',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      text={'24.56'}
                    />
                    <Text
                      sx={{
                        color: '#00000080',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                      text={'15 AUG 2024'}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              >
                <Box
                  sx={{
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    background: '#D3D3D3',
                  }}
                ></Box>
                <Box>
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                    text={'Highest Attendance Session'}
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
                        color: '#434343',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      text={'WINTER'}
                    />
                    <Text
                      sx={{
                        color: '#00000080',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                      text={'2024'}
                    />
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              >
                <Box
                  sx={{
                    height: '20px',
                    width: '20px',
                    borderRadius: '50%',
                    background: '#D3D3D3',
                  }}
                ></Box>
                <Box>
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.8rem',
                      fontWeight: 600,
                    }}
                    text={'Lowest Attendance Session'}
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
                        color: '#434343',
                        fontSize: '1.5rem',
                        fontWeight: 600,
                        lineHeight: 1,
                      }}
                      text={'BUDGET'}
                    />
                    <Text
                      sx={{
                        color: '#00000080',
                        fontSize: '0.9rem',
                        fontWeight: 500,
                      }}
                      text={'2024'}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <LineCharts />
        </Box>
        <Divider sx={{ margin: '1rem' }} />
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <Box
            sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
            className="MobileViewRemove"
          ></Box>
          <Text
            font={'Sora'}
            sx={{ fontWeight: '600', marginTop: '0.1rem' }}
            text={'State Wise'}
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            margin: '2rem 1rem',
            alignItems: 'center',
          }}
        >
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
              borderRight: '2px solid #00000050',
            }}
          >
            Current MPs <br />
            in LS
          </Text>
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
              borderRight: '2px solid #FF936F',
            }}
          >
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>540</span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>543</span>
          </Text>
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
              borderRight: '2px solid #00000050',
            }}
          >
            Eligible MPs <br />
            in Performance
          </Text>
          <Text
            font={'Sora'}
            sx={{
              fontWeight: '500',
              color: '#00000080',
              marginTop: '0.1rem',
              paddingRight: '1rem',
            }}
          >
            <span style={{ color: '#FF936F', fontSize: '1.5rem' }}>501</span>{' '}
            out of <span style={{ fontSize: '1.5rem' }}>540</span>
          </Text>
        </Box>
        <Box sx={{display:'flex',gap:'1rem',flexWrap:'wrap',justifyContent:'center'}}>
        {Array.from({ length: 20 }).map((_, index) => (
      <StateAttendance/>
    ))}
        </Box>
      </Box>
    </>
  );
}
