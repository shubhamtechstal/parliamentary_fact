import Grid from '@mui/material/Unstable_Grid2';
import StateAttendance from 'components/attendence/StateAttendance';
import Box from 'components/common/Box';
import GrayDot from 'components/common/GrayDot';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import ColorfulArc from './ColorfulArc';

const PercentageTextgroup = (props) => {
  return (
    <div style={{ color: '#00000080', fontWeight: '600' }}>
      <span style={{ fontSize: '12px' }}>{props.title}</span> <br />
      <span
        style={{
          color: '#FF936F',
          fontSize: '1.5rem',
          fontWeight: '500',
          fontFamily: '"Sora", sans-serif',
        }}
      >
        <span style={{ fontWeight: '800' }}>{props.percentage}</span>%
      </span>
    </div>
  );
};
const ChartProgressTextgroup = (props) => {
  return (
    <div style={{ color: '#00000080', fontWeight: '600',  marginBottom:'1rem'  }}>
      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
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
      <span style={{ fontSize: '12px', textWrap:'nowrap'}}>{props.title}</span>
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
    <div
      key={i}
      style={{
        display: 'flex',
        gap: '1rem',
        alignItems: 'center',
        fontSize: '0.9rem',
        borderBottom: i == 2 || i == 4 ? 'none' : '2px solid #f6f1f1',
        padding: '0 10px 30px',
      }}
    >
      <GrayDot />
      <div>
        <span>{schedule.title}</span> <br />
        <span>{schedule.time}</span>
      </div>
    </div>
  );
};
function LS_productivity({ productivity_schedule }) {
  const Arc_progressData = [85, 91, 90, 87];
  return (
    <div style={{padding: '0rem 10rem',}}>
      <SectionHeading title={'Lok Sabha Productivity'} />
      <pre style={{ display: 'flex', alignItems: 'center', height: '20px', margin:"0px" }}>
        <h3>Till Now | </h3>23 September 2020
      </pre>
      <Box
        sx={{
          display: 'flex',
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
                titleText={'Productivity'}
                percentText={'100'}
                subPercentText={'.20%'}
                width={180}
                height={200}
                innerRadius={74}
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
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} md={3}>
          <div
            style={{
              display: 'flex',
              gap: '4rem',
              flexDirection: 'row',
              justifyContent: 'start',
            }}
          >
            <PercentageTextgroup title={'QUESTION HOUR'} percentage={'12.5'} />
            <PercentageTextgroup title={'ZERO HOUR'} percentage={'8'} />
          </div>
          <Box
            sx={{
              borderTop: '2px solid #D3D3D3',
              width: { md: '70%', xs: '100%', },
              marginTop: '1rem',
              paddingTop :'1rem'
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
              top:'2rem'
            }}
          >
            <Box sx={{ textAlign: 'right',position:'relative', top: '3rem', right:'2rem'}}>
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
              <span style={{marginRight:'-1.5rem'}}>0</span> 
            </Box>
            <Box>
              <ColorfulArc progressValues={Arc_progressData} />
            </Box>
            <Box sx={{ textAlign: 'left', position:'relative', top: '3rem', left:'2rem' }}>
              <ChartProgressTextgroup
                title={'DEBATES'}
                percentage={'89.5'}
                chartColor={'#b979a4'}
              />
              <ChartProgressTextgroup
                title={'PRIVATE MEMBER BILL'}
                percentage={'87'}
                chartColor={'#686091'}
              />
              <span style={{marginLeft:'-1.5rem'}}>100+</span> 
            </Box>
          </div>
          <img
            src="Assets/icons/Parliament-dot-image1.png"
            alt="parliament"
            style={{ position: 'absolute', bottom: '0%', right: '-9%' }}
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
            <PercentageTextgroup
              title={'LEGISTATIVE BUSINESS'}
              percentage={'85.1'}
            />
            <PercentageTextgroup title={'OTHER BUSINESS'} percentage={'10'} />
          </div>
          <Box
            sx={{
              borderTop: '2px solid #D3D3D3',
              width: { md: '70%', xs: '100%' },
              float: 'right',
              marginTop: '1rem',
              paddingTop :'1rem'
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
      </Grid>
    </div>
  );
}

export default LS_productivity;
