import Grid from '@mui/material/Unstable_Grid2';
import Box from 'components/common/Box';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import ColorfulArc from './ColorfulArc';
import Text from 'components/common/Text';

const PercentageTextgroup = (props) => {
  return (
    <div style={{ color: '#00000080', fontWeight: '600' }}>
      <span style={{ fontSize: '12px', textWrap: 'nowrap' }}>
        {props.title}
      </span>{' '}
      <br />
      <span
        style={{
          color: '#FF936F',
          fontSize: '1.5rem',
          fontWeight: '500',
          fontFamily: '"Sora", sans-serif',
        }}
      >
        <span style={{ fontWeight: '800' }}>{props.percentage}</span>
      </span>
    </div>
  );
};
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
          <span style={{ fontWeight: '800' }}>{props.percentage}</span>%
        </span>
      </div>
      <span style={{ fontSize: '12px', textWrap: 'nowrap' }}>
        {props.title}
      </span>
    </div>
  );
};
const BillTextgroup = (props) => {
  return (
    <div style={{ color: '#00000080', fontWeight: '600' }}>
      <span style={{ fontSize: '12px' }}>{props.title}</span> <br />
      <span
        style={{
          fontSize: '1rem',
          fontWeight: '800',
          fontFamily: '"Sora", sans-serif',
        }}
      >
        {props.percentage}
      </span>
    </div>
  );
};
const ScheduleTimeTextgroup = ({ schedule, i }) => {
  return (
    <Box
      key={i}
      sx={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        fontSize: '0.9rem',
        padding: '20px 10px',
      }}
    >
      <GrayDot />
      <div>
        <span style={{ textWrap: 'nowrap' }}>{schedule.name}</span> <br />
        <span
          style={{ textWrap: 'nowrap', fontWeight: '600', fontSize: '1rem' }}
        >
          {schedule.value} Hrs.
        </span>
      </div>
    </Box>
  );
};
function LS_productivity({
  productivity_schedule,
  productivity_details = [],
  mobCardsData = [],
  BottomRightChip,
}) {
  const Arc_progressData = [85, 91, 90, 87];
  return (
    <Box className="performanceSection" >
      {/* <Box className="performanceSection" sx={{ padding: { md: '0rem 2rem', xs: '0rem  1rem 10px' } }}> */}
      <Box sx={{ display: { md: 'block', xs: 'none' } }}>
        <SectionHeading title={'Lok Sabha Productivity'} />
        <pre
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '20px',
            margin: '0px',
          }}
        >
          <h3>Till Now | </h3>23 September 2020
        </pre>
      </Box>
      {/* **** mobile **** */}
      <Box
        sx={{
          display: { md: 'none', xs: 'flex' },
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            marginTop: '-4rem',
          }}
        >
          <ProgressMeter
            titleText={'Productivity'}
            percentText={'100'}
            subPercentText={'.20%'}
            width={240}
            height={270}
            // width={180}
            // height={200}
            innerRadius={98}
          />
        </Box>
        <Box
          sx={{
            display: { md: 'none', xs: 'flex' },
            justifyContent: 'space-between',
            alignItems: 'center',
            position: 'relative',
            overflow: 'auto',
            borderBottom: '2px solid #D3D3D3',
            marginBottom: '20px',
          }}
        >
          {productivity_schedule.map((schedule, i) => {
            if (i == 3) {
              return;
            }
            return <ScheduleTimeTextgroup schedule={schedule} i={i} />;
          })}
        </Box>
      </Box>
      {/* **** desktop **** */}
      <Box
        sx={{
          display: { md: 'flex', xs: 'none' },
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          height: '150px',
        }}
      >
        {productivity_schedule.map((schedule, i) => {
          if (i == 3) {
            return (
              <ProgressMeter
                titleText={schedule.name || 'Productivity'}
                percentText={schedule.value || '100'}
                // subPercentText={schedule.value ||'.20%'}
                width={180}
                height={200}
                innerRadius={74}
                value={schedule.value.replaceAll('%', '')}
              />
            );
          }
          return <ScheduleTimeTextgroup schedule={schedule} i={i} />;
        })}
        <hr
          style={{
            position: 'absolute',
            width: '30%',
            bottom: '30%',
            left: '0px',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            width: '30%',
            bottom: '30%',
            right: '0px',
          }}
        />
      </Box>
      {/* ****Mobile*** */}
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box>
          <div
            style={{
              display: 'flex',
              overflow: 'auto',
              gap: '2rem',
            }}
          >
            {productivity_details?.map((item, i) => {
              return (
                <PercentageTextgroup
                  key={i}
                  title={item.title}
                  percentage={item.value}
                />
              );
            })}
            {/* <PercentageTextgroup title={'ZERO HOUR'} percentage={'8'} />
            <PercentageTextgroup
              title={'LEGISTATIVE BUSINESS'}
              percentage={'85.1'}
            />
            <PercentageTextgroup title={'OTHER BUSINESS'} percentage={'10'} /> */}
          </div>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              borderTop: '2px solid #D3D3D3',
              marginTop: '1rem',
              paddingTop: '1rem',
            }}
          >
            <Box
              sx={{
                width: '50%',
                textAlign: 'right',
                paddingRight: '2rem',
                borderRight: '2px solid #fff',
              }}
            >
              <ChartProgressTextgroup
                title={'ATTANDANCE'}
                percentage={'85'}
                direction={'down'}
                chartColor={'#f5b797'}
              />
              <ChartProgressTextgroup
                title={'QUESTIONS'}
                percentage={'91'}
                chartColor={'#e795a2'}
              />
              {/* <span style={{ marginRight: '-1.5rem' }}>0</span> */}
            </Box>
            <Box
              sx={{
                width: '50%',
                textAlign: 'left',
                paddingLeft: '2rem',
                borderLeft: '2px solid #fff',
              }}
            >
              <ChartProgressTextgroup
                title={'DEBATES'}
                isRight={true}
                percentage={'89.5'}
                chartColor={'#b979a4'}
              />
              <ChartProgressTextgroup
                title={'PRIVATE MEMBER BILL'}
                percentage={'87'}
                isRight={true}
                chartColor={'#686091'}
              />
              {/* <span style={{ marginLeft: '-1.5rem' }}>100+</span> */}
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ColorfulArc
              progressValues={Arc_progressData}
              width={300}
              height={150}
            />
          </Box>
          <img
            src="Assets/icons/Parliament-dot-image1.png"
            alt="parliament"
            style={{
              width: '28rem',
              position: 'relative',
              top: '-3rem',
            }}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            overflow: 'auto',
            paddingBottom: '2rem',
            position: 'relative',
            zIndex: '1',
          }}
        >
          {mobCardsData?.map((data, i) => {
            return (
              <Box
                key={i}
                sx={{
                  padding: '5px 10px',
                  borderRadius: '1rem',
                  backgroundColor: '#fff',
                  // boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.1)',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'left',
                  minWidth: '120px',
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
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textWrap: 'nowrap',
                    }}
                  />
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <BottomRightChip />
        </Box>
        {/* Govt bill */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderTop: '2px solid #D3D3D3',
            flexDirection: 'column',
            marginTop: '1rem',
            paddingTop: '1rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontWeight: 'bold',
              borderBottom: '4px solid #D3D3D3',
              width: '6rem',
              margin: 'auto',
            }}
          >
            GOVT BILL
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '-1rem',
            }}
          >
            <ProgressMeter
              titleText={'Till'}
              subTiteText={'20 March 2024'}
              percentText={'100%'}
              subPercentText={'Passes'}
              width={150}
              height={170}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              padding: '1rem 0',
              marginBottom: '1rem',
            }}
          >
            {[
              { title: 'INTRODUCE', value: '12.5' },
              { title: 'PENDING', value: '8' },
              { title: 'PASSED', value: '12.5' },
              { title: 'WITHDRAWN', value: '8' },
            ]?.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    padding: '10px 10px',
                    borderRadius: '1rem',
                    backgroundColor: '#fff',
                    textAlign: 'left',
                  }}
                >
                  <Text
                    text={data.title}
                    sx={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textWrap: 'nowrap',
                    }}
                  />
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
        {/* Private bill */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            borderTop: '2px solid #D3D3D3',
            flexDirection: 'column',
            marginTop: '1rem',
            paddingTop: '1rem',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontWeight: 'bold',
              borderBottom: '4px solid #D3D3D3',
              width: '9rem',
              margin: 'auto',
            }}
          >
            PRIVATE MEMBER BILL
          </p>
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
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              padding: '1rem 0',
              marginBottom: '1rem',
            }}
          >
            {[
              { title: 'INTRODUCE', value: '12.5' },
              { title: 'PENDING', value: '8' },
              { title: 'PASSED', value: '12.5' },
              { title: 'WITHDRAWN', value: '8' },
            ]?.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    padding: '10px 10px',
                    borderRadius: '1rem',
                    backgroundColor: '#fff',
                    textAlign: 'left',
                  }}
                >
                  <Text
                    text={data.title}
                    sx={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      textWrap: 'nowrap',
                    }}
                  />
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.2rem',
                      fontWeight: 600,
                    }}
                  />
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>

      {/* ****Desktop*** */}
      <Grid
        container
        sx={{ display: { xs: 'none', md: 'flex' } }}
        spacing={2}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12} md={3}>
          <div
            style={{
              display: 'flex',
              gap: '4rem',
              flexDirection: 'row',
              justifyContent: 'start',
            }}
          >
            {productivity_details.map((item, i) => {
              switch (i) {
                case 2:
                  return;
                case 3:
                  return;
                default:
                  break;
              }
              return (
                <PercentageTextgroup
                  key={i}
                  title={item.title}
                  percentage={item.value}
                />
              );
            })}
          </div>
          <Box
            sx={{
              borderTop: '2px solid #D3D3D3',
              width: { md: '70%', xs: '100%' },
              marginTop: '1rem',
              paddingTop: '1rem',
            }}
          >
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
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
              <Grid item xs={6} md={6} sx={{ textAlign: 'right' }}>
                <BillTextgroup title={'INTRODUCE'} percentage={'12.5'} />
                <BillTextgroup title={'PENDING'} percentage={'8'} />
              </Grid>
              <Grid item xs={6} md={6} sx={{ textAlign: 'left' }}>
                <BillTextgroup title={'PASSED'} percentage={'12.5'} />
                <BillTextgroup title={'WITHDRAWN'} percentage={'8'} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          sx={{
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'relative',
              left: '-5%',
              top: '2rem',
            }}
          >
            <Box
              sx={{
                textAlign: 'right',
                position: 'relative',
                top: '3rem',
                right: '2rem',
              }}
            >
              <ChartProgressTextgroup
                title={'ATTANDANCE'}
                percentage={'85'}
                direction={'down'}
                chartColor={'#f5b797'}
              />
              <ChartProgressTextgroup
                title={'QUESTIONS'}
                percentage={'91'}
                chartColor={'#e795a2'}
              />
              <span style={{ marginRight: '-1.5rem' }}>0</span>
            </Box>
            <Box>
              <ColorfulArc progressValues={Arc_progressData} />
            </Box>
            <Box
              sx={{
                textAlign: 'left',
                position: 'relative',
                top: '3rem',
                left: '2rem',
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
                percentage={'87'}
                isRight={true}
                chartColor={'#686091'}
              />
              <span style={{ marginLeft: '-1.5rem' }}>100+</span>
            </Box>
          </div>
          <img
            src="Assets/icons/Parliament-dot-image1.png"
            className='parliamentCenterImgDesktop'
            alt="parliament"
            // style={{
            //   position: 'relative',
            //   bottom: '7%',
            //   left: '10%',
            //   width: '40vw',
            // }}
          />
        </Grid>
        <Grid item xs={12} md={3} sx={{ textAlign: 'right' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            {' '}
            {productivity_details.map((item, i) => {
              switch (i) {
                case 0:
                  return;
                case 1:
                  return;
                default:
                  break;
              }
              return (
                <PercentageTextgroup
                  key={i}
                  title={item.title}
                  percentage={item.value}
                />
              );
            })}
          </div>
          <Box
            sx={{
              borderTop: '2px solid #D3D3D3',
              width: { md: '70%', xs: '100%' },
              float: 'right',
              marginTop: '1rem',
              paddingTop: '1rem',
            }}
          >
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
            <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12 }}>
              <Grid item xs={6} md={6} sx={{ textAlign: 'right' }}>
                <BillTextgroup title={'INTRODUCE'} percentage={'12.5'} />
                <BillTextgroup title={'PENDING'} percentage={'8'} />
              </Grid>
              <Grid item xs={6} md={6} sx={{ textAlign: 'left' }}>
                <BillTextgroup title={'PASSED'} percentage={'12.5'} />
                <BillTextgroup title={'WITHDRAWN'} percentage={'8'} />
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LS_productivity;
