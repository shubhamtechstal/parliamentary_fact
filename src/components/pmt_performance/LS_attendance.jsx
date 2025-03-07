import { Box } from '@mui/material';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import LineCharts from 'components/LineCharts';

function LS_attendance({ BottomRightChip }) {
  return (
    <div
      style={{
        position: 'relative',
        padding: '2rem 10rem',
      }}
    >
      <SectionHeading title={'Lok Sabha Attendance'} />
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <Box
          sx={{
            width: { xs: '47%', md: 'auto' },
          }}
        >
          <ProgressMeter
            titleText={'ATTENDANCE'}
            subTiteText={`LOK SABHA`}
            centerDate={'Till 20 March 2024'}
            percentText={'100.'}
            subPercentText={'20%'}
            width={230}
            height={250}
            innerRadius={98}
            percentNumFontSize={'2.5rem'}
            percent_x="40%"
            percent_y="55%"
            dotPercentFontSize={'1.5rem'}
            dotPercent_x="72%"
            dotPercent_y="57%"
          />
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <GrayDot />
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <GrayDot />
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <GrayDot />
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
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <GrayDot />
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
      {BottomRightChip && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <BottomRightChip />
        </Box>
      )}
    </div>
  );
}

export default LS_attendance;
