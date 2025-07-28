import Grid from '@mui/material/Unstable_Grid2';
import Box from 'components/common/Box';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import ColorfulArc from '../ColorfulArc';
import Text from 'components/common/Text';
import { Link } from 'react-router-dom';
import { extractPercentage } from 'helpers/utills/utilityFunctions';

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
        <span style={{ fontWeight: '800' }}>
          {props?.percentage?.replace('%', '')}
        </span>
        %
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
            src="/Assets/icons/downGrowthIcon.png"
            alt=""
            height={30}
            width={40}
          />
        ) : (
          <img
            src="/Assets/icons/upGrowthIcon.png"
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
const BillTextgroup = (props) => {
  return (
    <div style={{ color: '#00000080', fontWeight: '600' }}>
      <span style={{ fontSize: '10px' }}>{props.title}</span> <br />
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
        fontSize: '0.8rem',
        padding: '20px 10px',
        // maxWidth: '12%'
      }}
    >
      {i == 1 ? (
        <GrayDot icon_url={'/Assets/icons/small_arrow_Down.png'} />
      ) : (
        <GrayDot />
      )}
      <div>
        <span style={{ textWrap: 'nowrap', fontSize: '10px' }}>
          {schedule.name}
        </span>{' '}
        <br />
        <span
          style={{ textWrap: 'nowrap', fontWeight: '600', fontSize: '1rem' }}
        >
          {schedule.value}
        </span>{' '}
        Hrs.
      </div>
    </Box>
  );
};
function LS_productivity({
  productivity_schedule = [],
  productivity_details = [],
  mobCardsData = [],
  govtBillCount = [],
  BottomRightChip,
  privateBillCount,
  pageData,
  loksabhaName,
}) {
  const Arc_progressData = [85, 91, 90, 87];
  return (
    <Box className="performanceSection">
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
          }}
          font={'Sora'}
          text={`Parliament Performance ${loksabhaName}`}
        />
        <Text
          sx={{
            fontSize: { xs: '1rem', md: '1.5rem' },
            letterSpacing: '-0.3px',
            fontWeight: 400,
            display: { xs: 'block', md: 'none' },
          }}
          font={'Sora'}
          text={'Lok Sabha Productivity'}
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
            // marginTop: '-4rem',
          }}
        >
          <ProgressMeter
            titleText={'Productivity'}
            percentText={`${extractPercentage(productivity_schedule[3]?.value?.toString())?.a}`|| '100'}
            subPercentText={`${extractPercentage(productivity_schedule[3]?.value?.toString())?.b}` || '.20%'}
            value={productivity_schedule[3]?.value?.replaceAll('%', '')}
            percentNumFontSize={'3.5rem'}
            dotPercentFontSize={'1.5rem'}
            width={230}
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
          height: '100px',
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
            bottom: '10%',
            left: '0px',
            border: '1px solid #D3D3D3',
          }}
        />
        <hr
          style={{
            position: 'absolute',
            width: '30%',
            bottom: '10%',
            border: '1px solid #D3D3D3',
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
                percentage={`${pageData?.attendance_percentage?.attendance_percentage}`}
                // percentage={'85'}
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
                width: '50%',
                textAlign: 'left',
                paddingLeft: '2rem',
                borderLeft: '2px solid #fff',
              }}
            >
              <ChartProgressTextgroup
                title={'DEBATES'}
                isRight={true}
                percentage={`${pageData?.debate_percentage?.debate_percentage}` || '89.5'}
                chartColor={'#b979a4'}
              />
              <ChartProgressTextgroup
                title={'PRIVATE MEMBER BILL'}
                percentage={`${pageData?.private_bill_performance?.bill_performance_percentage}`}
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
            src="/Assets/icons/Parliament-dot-image1.png"
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
              <Link to={`/parliament-performance/lok-sabha-performance/lok-sabha-${data?.title.replaceAll(" ", "-").toLowerCase()}`} key={i}>
               <Box
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
                  src={data?.image ?? "/Assets/icons/statueImg.png"}
                  alt="statueImg"
                  height={30}
                  width={30}
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
              </Link>
            );
          })}
        </Box>
        {BottomRightChip && (
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <BottomRightChip
            sectionDetailName={'lok-sabha-productivity'}
              chipLabal={'MPs Participation in Lok Sabha Productivity'}
            />
          </Box>
        )}
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
              subTiteText={'Now'}
              percentText={pageData?.passed_govt_bills_data?.passed_bill_percentage ||'100%'}
              value={pageData?.passed_govt_bills_data?.passed_bill_percentage?.replaceAll('%', '')}
              subPercentText={'Passes'}
              percentNumFontSize={'2.5rem'}
              dotPercentFontSize={'1.5rem'}
              width={230}
              height={270}
              innerRadius={98}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              padding: '1rem 0',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {govtBillCount?.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    padding: '10px 1rem',
                    borderRadius: '1rem',
                    backgroundColor: '#fff',
                    textAlign: 'left',
                    width: '40%',
                  }}
                >
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                    }}
                  />
                  <Text
                    text={data.title}
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textWrap: 'nowrap',
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
              subTiteText={'Now'}
              percentText={pageData?.passed_private_bills_data?.passed_bill_percentage ||'100%'}
              value={pageData?.passed_private_bills_data?.passed_bill_percentage?.replaceAll('%', '')}
              subPercentText={'Passes'}
              percentNumFontSize={'2.5rem'}
              dotPercentFontSize={'1.5rem'}
              width={230}
              height={270}
              innerRadius={98}
            />
          </div>
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              justifyContent: 'center',
              padding: '1rem 0',
              marginBottom: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {privateBillCount?.map((data, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'left',
                    padding: '10px 1rem',
                    borderRadius: '1rem',
                    backgroundColor: '#fff',
                    textAlign: 'left',
                    width: '40%',
                  }}
                >
                  <Text
                    text={data.value}
                    sx={{
                      fontSize: '1.5rem',
                      fontWeight: 600,
                    }}
                  />
                  <Text
                    text={data.name}
                    sx={{
                      fontSize: '0.8rem',
                      fontWeight: 600,
                      textWrap: 'nowrap',
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
        <Grid
          item
          xs={12}
          md={2}
          sx={{ textAlign: 'left', position: 'relative' }}
        >
          <div
            style={{
              display: 'flex',
              // gap: '4rem',
              flexDirection: 'row',
              justifyContent: 'start',
              position: 'absolute',
              left: '8px',
              gap: '1rem',
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
              paddingTop: '1rem',
              top: '4.5rem',
              position: 'relative',
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
                subTiteText={'Now'}
                percentText={pageData?.passed_govt_bills_data?.passed_bill_percentage ||'100%'}
                subPercentText={'Passes'}
                width={150}
                height={170}
              />
            </div>
            <Grid
              container
              spacing={2}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ position: 'absolute', left: '-2rem', width: '12rem' }}
            >
              <Grid item xs={6} md={6} sx={{ textAlign: 'right' }}>
                {govtBillCount.map((item, i) => {
                  switch (i) {
                    case 1:
                      return;
                    case 3:
                      return;
                    default:
                      break;
                  }
                  return (
                    <BillTextgroup title={item.title} percentage={item.value} />
                  );
                })}
              </Grid>
              <Grid item xs={6} md={6} sx={{ textAlign: 'left' }}>
                {govtBillCount.map((item, i) => {
                  switch (i) {
                    case 0:
                      return;
                    case 2:
                      return;
                    default:
                      break;
                  }
                  return (
                    <BillTextgroup title={item.title} percentage={item.value} />
                  );
                })}
              </Grid>
            </Grid>
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
                marginTop: '3rem',
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
                percentage={`${pageData?.debate_percentage?.debate_percentage}` || '89.5'}
                isRight={true}
                chartColor={'#b979a4'}
              />
              <ChartProgressTextgroup
                title={'PRIVATE MEMBER BILL'}
                percentage={`${pageData?.private_bill_performance?.bill_performance_percentage}`}
                isRight={true}
                chartColor={'#686091'}
              />
              {/* <span style={{ marginLeft: '-1.5rem' }}>100+</span> */}
            </Box>
          </div>
          <img
            src="/Assets/icons/Parliament-dot-image1.png"
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
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              position: 'absolute',
              right: '8px',
              gap: '1rem',
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
              marginTop: '4.5rem',
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
                subTiteText={'Now'}
                percentText={pageData?.passed_private_bills_data?.passed_bill_percentage || '100%'}
                subPercentText={'Passes'}
                width={150}
                height={170}
              />
            </div>
            <Grid
              container
              spacing={2}
              columns={{ xs: 12, sm: 12, md: 12 }}
              sx={{ position: 'absolute', right: '-2rem', width: '13rem' }}
            >
              <Grid item xs={6} md={6} sx={{ textAlign: 'right' }}>
                {privateBillCount?.map((item, i) => {
                  switch (i) {
                    case 1:
                      return;
                    case 3:
                      return;
                    default:
                      break;
                  }
                  return (
                    <BillTextgroup title={item.name} percentage={item.value} />
                  );
                })}
              </Grid>
              <Grid item xs={6} md={6} sx={{ textAlign: 'left' }}>
                {privateBillCount?.map((item, i) => {
                  switch (i) {
                    case 0:
                      return;
                    case 2:
                      return;
                    default:
                      break;
                  }
                  return (
                    <BillTextgroup title={item.name} percentage={item.value} />
                  );
                })}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LS_productivity;
