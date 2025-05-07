import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Box from 'components/common/Box';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import Text from 'components/common/Text';
import ColorfulArc from 'components/pmt_performance/ColorfulArc';

const ChartProgressTextgroup = (props) => {
  return (
    <div
      style={{ color: '#00000080', fontWeight: '600', marginBottom: '1rem' }}
    >
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexDirection: props.isRight ? 'row-reverse' : 'row',
          justifyContent: 'flex-end',
        }}
      >
        {props.direction === 'down' ? (
          <img
            src="Assets/icons/downGrowthIcon.png"
            alt=""
            height={30}
            width={40}
          />
        ) : (
          <img
            src="Assets/icons/upGrowthIcon.png"
            alt=""
            height={30}
            width={40}
          />
        )}
        <span
          style={{
            color: props.chartColor || '#FF936F',
            fontSize: '1.5rem',
            fontWeight: '500',
            fontFamily: '"Sora", sans-serif',
          }}
        >
          <span style={{ fontWeight: '800' }}>
            {props.percentage.replace('%', '')}
          </span>
          %
        </span>
      </div>
      <span style={{ fontSize: '10px', textWrap: 'nowrap' }}>
        {props.title}
      </span>
    </div>
  );
};
const Productivity_bottomCards = ({ cardData }) => {
  return (
    <Box
      // className="performanceSection"
      sx={{
        position: 'relative',
        // padding: '2rem 10rem',
        display: { xs: 'none', md: 'block' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '-7.5rem',
          overflow: 'auto',
          alignItems: 'end',
        }}
      >
        {cardData?.map((data, i) => {
          if (i == 3) {
            return (
              <Box sx={{ background: 'rgb(238, 243, 247)' }}>
                <ProgressMeter
                  titleText={'Productivity'}
                  percentText={'100'}
                  subPercentText={'.20%'}
                  width={180}
                  height={200}
                  innerRadius={74}
                  value={97.9}
                />
              </Box>
            );
          }
          return (
            <div>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'start',
                  alignItems: 'left',
                  minWidth: '150px',
                  mb: 4,
                }}
              >
                <img
                  src="Assets/icons/statueImg.png"
                  alt="statueImg"
                  height={50}
                />
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'left',
                  }}
                >
                  <Text
                    text={data.title}
                    sx={{
                      fontSize: '0.6rem',
                      fontWeight: 600,
                    }}
                  />
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>
            </div>
          );
        })}
        <div>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'start',
              alignItems: 'left',
              minWidth: '150px',
              mb: 4,
            }}
          >
            <img src="Assets/icons/statueImg.png" alt="statueImg" height={50} />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'left',
              }}
            >
              <Text
                text={'QUORAM BELL'}
                sx={{
                  fontSize: '0.6rem',
                  fontWeight: 600,
                }}
              />
              <Text
                text={'TBA'}
                sx={{
                  fontSize: '1.5rem',
                  fontWeight: 600,
                }}
              />
            </Box>
          </Box>
        </div>
      </Box>
    </Box>
  );
};
const HomePmtPerformanceSection = ({ pageData, loksabhaName, loading }) => {
  const Arc_progressData = [85, 91, 90, 87];
  return loading ? (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <CircularProgress />
    </Box>
  ) : (
    <div>
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '0.8rem', md: '2rem' },
          flexDirection: { xs: 'column', md: 'row' },
          textAlign: { xs: 'center', md: 'left' },
          justifyContent: 'space-between',
        }}
      >
        <Text
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            letterSpacing: '-0.3px',
            fontWeight: 600,
            display: { md: 'block', xs: 'none' },
          }}
          font={'Sora'}
          text={`MPs Parliament Performance ${loksabhaName}`}
        />
        <Text
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            letterSpacing: '-0.3px',
            fontWeight: 700,
            display: { xs: 'block', md: 'none' },
          }}
          font={'Sora'}
          text={'MPs Parliament Performance' + loksabhaName ?? ''}
        />
        <Text
          sx={{
            display: { xs: 'flex', md: 'none' },
            justifyContent: 'center',
          }}
        >
          <span style={{ fontWeight: '600' }}>Till Now | </span> 23 September
          2020
        </Text>
        <Box
          sx={{
            color: '#00000080',
            borderBottom: '1px solid #D3D3D3',
            display: { md: 'flex', xs: 'none' },
            gap: '5px',
            alignItems: 'center',
            padding: '0 30px 5px',
          }}
        >
          <div
            style={{
              padding: '1px 7px',
              border: '1px solid #00000080',
              borderRadius: '50%',
              fontSize: '10px',
              height: '18px',
              width: '18px',
            }}
          >
            {' '}
            i
          </div>{' '}
          Read before check performance
        </Box>
      </Box>
      {/* ****Desktop*** */}
      <Grid
        container
        sx={{ display: { xs: 'none', md: 'flex' } }}
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid
          item
          xs={12}
          md={2}
          sx={{ textAlign: 'left', position: 'relative' }}
        >
          <Box
            sx={{
              //   borderTop: '2px solid #D3D3D3',
              width: { md: '70%', xs: '100%' },
              paddingTop: '1rem',
              top: '4.5rem',
              position: 'relative',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProgressMeter
                titleText={'Till'}
                subTiteText={'20 March 2024'}
                percentText={'100%'}
                subPercentText={'Passes'}
                width={150}
                height={170}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              <span>GOVT</span>
              <span>BILL</span>
            </div>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={8}
          sx={{
            position: 'relative',
          }}
        >
          <div className="colorfulArcBox">
            <Box
              sx={{
                textAlign: 'right',
                position: 'relative',
                top: '3rem',
                // right: '2rem',
              }}
            >
              <ChartProgressTextgroup
                title={'ATTANDANCE'}
                percentage={`${pageData?.attendance_percentage?.attendance_percentage}`}
                direction={'down'}
                chartColor={'#f5b797'}
              />
              <ChartProgressTextgroup
                title={'QUESTIONS'}
                percentage={`${pageData?.questions_percentage?.question_percentage}`}
                chartColor={'#e795a2'}
              />
              {/* <span style={{ marginRight: '-1.5rem' }}>0</span> */}
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'end',
                gap: '10px',
                marginTop: '1rem',
              }}
            >
              <p style={{ width: '2rem', textAlign: 'right', margin: '0 0' }}>
                0
              </p>
              <ColorfulArc progressValues={Arc_progressData} />
              <p style={{ width: '2rem', textAlign: 'right', margin: '0 0' }}>
                100+
              </p>
            </Box>
            <Box
              sx={{
                textAlign: 'left',
                position: 'relative',
                top: '3rem',
                // left: '2rem',
              }}
            >
              <ChartProgressTextgroup
                title={'DEBATES'}
                percentage={'89.5'}
                isRight={true}
                chartColor={'#b979a4'}
              />
              <ChartProgressTextgroup
                title={'PRIVATE MEMBER BILL'}
                percentage={`${pageData?.private_bill_percentage?.private_bill_percentage}`}
                isRight={true}
                chartColor={'#686091'}
              />
              {/* <span style={{ marginLeft: '-1.5rem' }}>100+</span> */}
            </Box>
          </div>
          <img
            style={{ height: '165px', bottom: '8%' }}
            src="Assets/icons/Parliament-dot-image1.png"
            // src="Assets/icons/pmt_whiteImage.png"
            className="parliamentCenterImgDesktop"
            alt="parliament"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={2}
          sx={{ textAlign: 'right', position: 'relative' }}
        >
          <Box
            sx={{
              //   borderTop: '2px solid #D3D3D3',
              width: { md: '70%', xs: '100%' },
              float: 'right',
              marginTop: '4.5rem',
              paddingTop: '1rem',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ProgressMeter
                titleText={'Till'}
                subTiteText={'20 March 2024'}
                percentText={'100%'}
                subPercentText={'Passes'}
                width={150}
                height={170}
              />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                textAlign: 'center',
                fontWeight: '600',
                fontSize: '14px',
              }}
            >
              <span>PRIVATE </span>
              <span>MEMBER BILL</span>
            </div>
          </Box>
        </Grid>
      </Grid>
      <Productivity_bottomCards
        cardData={pageData?.other_performing_data}
      />
    </div>
  );
};

export default HomePmtPerformanceSection;
