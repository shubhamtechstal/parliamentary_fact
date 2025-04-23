import { Box, Grid } from '@mui/material';
import BasicBarChart from 'components/common/charts/BasicBarChart';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import Text from 'components/common/Text';
import LineCharts from 'components/LineCharts';
import {
  getDateInMonthNameFormate,
  extractPercentage,
} from 'helpers/utills/utilityFunctions';

function LS_attendance({
  attendance_details,
  className,
  pageData,
  BottomRightChip,
}) {
  console.log('attendance_percentage attendance_details', attendance_details);
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
        <h3 style={{ textAlign: 'center', margin: '0' }}>
          Lok Sabha Attendance
        </h3>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <ProgressMeter
            titleText={'ATTENDANCE'}
            subTiteText={`LOK SABHA`}
            centerDate={'Till 20 March 2024'}
            percentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage ?? pageData?.value?.toString())?.a}`}
            subPercentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage ?? pageData?.value?.toString())?.b}`}
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
            flexWrap: 'wrap',
            justifyContent: 'space-around',
            padding: '1.5rem',
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
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <LineCharts
            data={[10, 4, 6, 5, 14, 14, 15]}
            labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
            width={350}
          />
        </Box>
        {BottomRightChip && (
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-4rem',
              marginBottom: '1rem',
            }}
          >
            <BottomRightChip
              sectionDetailName={'attendance-details'}
              chipLabal={'MPs Participation in Lok Sabha Attendance'}
            />
          </Box>
        )}
      </Box>

      {/* ******Desktop**** */}
      <Box
        className={className ?? ''}
        sx={{
          position: 'relative',
          display: { md: 'block', xs: 'none' },
        }}
      >
        <SectionHeading title={'Lok Sabha Attendance'} />
        <Grid
          container
          md={12}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-evenly',

            // padding:'0 8rem 0 0'
          }}
        >
          <Grid md={3}>
            <ProgressMeter
              titleText={'ATTENDANCE'}
              subTiteText={`LOK SABHA`}
              centerDate={'Till 20 March 2024'}
              percentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage ?? pageData?.value?.toString())?.a}`}
              subPercentText={`${extractPercentage(pageData?.attendance_percentage?.attendance_percentage ?? pageData?.value?.toString())?.b}`}
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
          <Grid
            Grid
            md={4}
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'start',
              justifyContent: 'space-between',
              gap: '2rem 0',
            }}
          >
            {attendance_details?.map((item, index) => (
              <Box
                key={index}
                sx={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}
              >
                {index == 0 || index == 1 ? (
                  <GrayDot icon_url={'Assets/icons/small_arrow_Up.png'} />
                ) : (
                  <GrayDot icon_url={'Assets/icons/small_arrow_Down.png'} />
                )}
                <Box>
                  <Text
                    sx={{
                      color: '#00000080',
                      fontSize: '0.6em',
                      fontWeight: 600,
                    }}
                    text={item?.title}
                  />
                  <Box
                    sx={{
                      display: 'flex',
                      gap: '5px',
                      alignItems: 'center',
                      marginTop: '0.3rem',
                    }}
                  >
                    <Text
                      sx={{
                        // color: '#434343',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                        lineHeight: 1,
                        textTransform: 'uppercase',
                      }}
                      text={item?.count}
                    />
                    <Text
                      sx={{
                        color: '#00000080',
                        fontSize: '0.6rem',
                        fontWeight: 500,
                      }}
                      text={getDateInMonthNameFormate(item?.date)}
                    />
                  </Box>
                </Box>
              </Box>
            ))}
          </Grid>
          <Grid md={5}>
            <LineCharts
              data={[90, 4, 66, 25, 14, 84, 45]}
              labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']}
              width={540}
            />
            {/* <BasicBarChart/> */}
          </Grid>
        </Grid>
        {BottomRightChip && (
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <BottomRightChip
              sectionDetailName={'attendance-details'}
              chipLabal={'MPs Participation in Lok Sabha Attendance'}
            />
          </Box>
        )}
      </Box>
    </>
  );
}

export default LS_attendance;
