import { Box, Grid } from '@mui/material';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import LineCharts from 'components/LineCharts';
import { extractPercentage, formattedDate } from 'helpers/performanceConstants';

function LS_attendance({ attendance_details, className, pageData, BottomRightChip }) {
  return (
    <>
      {/* **********Mobile********** */}
      <Box
        sx={{
          position: 'relative',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <h3 style={{ textAlign: 'center' }}>Lok Sabha Attendance</h3>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-3rem',
          }}
        >
          <ProgressMeter
            titleText={'ATTENDANCE'}
            subTiteText={`LOK SABHA`}
            centerDate={'Till 20 March 2024'}
            percentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage)?.a }`}
            subPercentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage)?.b }`}            
            width={230}
            height={250}
            innerRadius={98}
            percentNumFontSize={'2.5rem'}
            percent_x="42%"
            percent_y="55%"
            dotPercentFontSize={'1.5rem'}
            dotPercent_x="68%"
            dotPercent_y="57%"
          />
        </Box>

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            flexWrap:'wrap',
            justifyContent:"start",
            padding:'1.5rem'
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
                // width:'12rem'
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
                    text={`${item?.count}`}
                  />
                 {item?.date&&
                 <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                      textWrap: 'nowrap',
                    }}
                    text={formattedDate(item?.date)}
                  />
                 } 
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LineCharts width={350} />
        </Box>
        {BottomRightChip&&
          <Box sx={{display:"flex", justifyContent:'center', marginTop:'-4rem', marginBottom:"1rem"}} >
            <BottomRightChip/>
          </Box>
        }
      </Box>

      {/* ******Desktop**** */}
      <Box  className={className ?? ''}
        sx={{
          position: 'relative',
          display: { md: 'block', xs: 'none' },
        }}
      >
        <SectionHeading title={'Lok Sabha Attendance'} />
        <Grid container md={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            padding:'0 8rem 0 0'
          }}
        >
          <Grid md={3}
            sx={{
              width: { xs: '47%', md: 'auto' },
            }}
          >
            <ProgressMeter
              titleText={'ATTENDANCE'}
              subTiteText={`LOK SABHA`}
              centerDate={'Till 20 March 2024'}
              percentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage)?.a }`}
              subPercentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage)?.b }`}
              // percentText={'100.'}
              // subPercentText={'20%'}
              width={230}
              height={250}
              innerRadius={98}
              percentNumFontSize={'2.5rem'}
              percent_x="42%"
              percent_y="55%"
              dotPercentFontSize={'1.5rem'}
              dotPercent_x="68%"
              dotPercent_y="57%"
            />
          </Grid>
          <Grid Grid md={5}  sx={{ display: 'flex', flexWrap:'wrap', alignItems: 'start', justifyContent:'space-between', gap:'1rem' }}>
          {attendance_details?.map((item, index) => (
            <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem', width:'48%' }}>
              <GrayDot />
              <Box>
                <Text
                  sx={{
                    color: '#00000080',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                  }}
                  text={item?.title}
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
                    text={item?.count}
                  />
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.9rem',
                      fontWeight: 500,
                    }}
                    text={formattedDate(item?.date)}
                  />
                </Box>
              </Box>
            </Box>
          ))}
          </Grid>
          <Grid md={4}>
            <LineCharts />
          </Grid>
        </Grid>
        {BottomRightChip && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <BottomRightChip />
          </Box>
        )}
      </Box>
    </>
  );
}

export default LS_attendance;
