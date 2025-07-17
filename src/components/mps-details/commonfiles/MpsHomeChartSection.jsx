import { Box, Typography } from '@mui/material';
import ProgressMeter from 'components/common/ProgressMeter';
import SectionHeading from 'components/common/SectionHeading';
import { extractPercentage } from 'helpers/utills/utilityFunctions';
const HalfCircleProgress = ({ value, boxHeight, isMobile }) => {
  const arcStyles = [
    { value: 90, color: '#FF6B9F' },
    { value: 90, color: '#FF6B9F' },
    { value: value, color: '#FF6B9F' },
  ];
  //   const radius = 80;
  const strokeWidth = 20;
  //   const center = 100;
  //   const viewBoxSize = 200;
  const radius = 120; // was 80
  const viewBoxSize = boxHeight ?? 250; // was 200
  const center = viewBoxSize / 2;

  const describeArc = (value, index) => {
    const startAngle = 180;
    const endAngle = 180 + value;
    const start = polarToCartesian(
      center,
      center,
      radius - index * 20,
      endAngle
    );
    const end = polarToCartesian(
      center,
      center,
      radius - index * 20,
      startAngle
    );
    const largeArcFlag = value > 180 ? 1 : 0;

    return [
      'M',
      start.x,
      start.y,
      'A',
      radius - index * 20,
      radius - index * 20,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ].join(' ');
  };

  const polarToCartesian = (cx, cy, r, angleInDegrees) => {
    const angleInRadians = (angleInDegrees * Math.PI) / 180.0;
    return {
      x: cx + r * Math.cos(angleInRadians),
      y: cy + r * Math.sin(angleInRadians),
    };
  };

  return (
    <svg
      width={viewBoxSize / 1.2}
      height={viewBoxSize}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      style={{
        transform: isMobile && 'rotate(-90deg)', // Rotates the arc to stand vertically
        overflow: 'visible',
      }}
    >
      {arcStyles.map((arc, index) => (
        <path
          key={index}
          d={describeArc(arc.value * 2, index)}
          fill="none"
          stroke={arc.color}
          strokeWidth={strokeWidth / 1.5}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

// const StatBlock = () => (
//   <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
//     <Box
//       sx={{
//         borderBottom: '1px solid gray',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: 2,
//       }}
//     >
//       <Typography variant="h6" sx={{ fontWeight: 600, color: '#FF6B9F' }}>
//         83.14
//       </Typography>
//       <Typography variant="body2" sx={{ fontWeight: 500 }}>
//         Loksabha Perform...
//       </Typography>
//     </Box>
//     <Box
//       sx={{
//         borderBottom: '1px solid gray',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: 2,
//       }}
//     >
//       <Typography variant="h6" sx={{ fontWeight: 600 }}>
//         421
//       </Typography>
//       <Typography variant="caption">National Ranking</Typography>
//     </Box>

//     <Box
//       sx={{
//         borderBottom: '1px solid gray',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center',
//         gap: 2,
//       }}
//     >
//       <Typography variant="caption" sx={{ fontSize: '11px', color: '#555' }}>
//         496 out of 496
//       </Typography>

//       <img
//         src="/Assets/icons/shareYellowIcon.png"
//         alt="share icon"
//         height={30}
//         width={30}
//       />
//     </Box>
//   </Box>
// );
const StatBlock = ({ stat }) => (
  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5 }}>
    <Box
      sx={{
        borderBottom: '1px solid gray',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#FF6B9F' }}>
        {stat.value}
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        {stat.title}
      </Typography>
    </Box>
    <Box
      sx={{
        borderBottom: '1px solid gray',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="h6" sx={{ fontWeight: 600 }}>
        {stat.ranking}
      </Typography>
      <Typography variant="caption">National Ranking</Typography>
    </Box>
    <Box
      sx={{
        borderBottom: '1px solid gray',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 2,
      }}
    >
      <Typography variant="caption" sx={{ fontSize: '11px', color: '#555' }}>
        {stat.total} out of {stat.total}
      </Typography>
      <img
        src="/Assets/icons/shareYellowIcon.png"
        alt="share icon"
        height={30}
        width={30}
      />
    </Box>
  </Box>
);

function MpsHomeChartSection({
  mpsHome,
  rankingTitle,
  performanceTitle,
  sectionTitle,
}) {
  const {
    overall_performance = '0.0%',
    parliament_performance = '0.0%',
    national_ranking = 0,
    total_mps = 0,
    parliament_stats = [],
  } = mpsHome || {};

  return (
    <div>
      <SectionHeading bgColor='#FF6B9F' title={sectionTitle ?? ''} />
      {/* Mobile view */}
      <Box
        sx={{
          display: { xs: 'flex', md: 'none' },
          gap: 2,
          alignItems: 'center',
          my: { xs: 5, md: 0 },
          borderRadius: 2,
        }}
      >
        <Box position={'relative'}>
          <HalfCircleProgress value={overall_performance} isMobile={true} />
          <Box
            sx={{
              position: 'absolute',
              top: '45%',
              left: '74%',
              transform: 'translate(-50%, -40%)',
              textAlign: 'center',
              width: '50%',
            }}
          >
            <Typography sx={{ fontSize: '13px' }}>
              {performanceTitle}
            </Typography>
            <Typography
              sx={{ fontWeight: 600, fontSize: '2rem', color: '#FF6B9F' }}
            >
              {overall_performance}%
            </Typography>
            <Typography sx={{ fontSize: '13px' }}>
              National Performance
            </Typography>
            <Typography sx={{ fontWeight: 600, fontSize: '18px', mt: 1 }}>
              {parliament_performance}
            </Typography>
            <Typography sx={{ fontSize: '13px' }}>
              {total_mps} Out of {total_mps}
            </Typography>
          </Box>
          <img
            src="/Assets/icons/shareYellowIcon.png"
            alt=""
            height={30}
            width={30}
            style={{ position: 'absolute', bottom: '10px', right: '20px' }}
          />
        </Box>

        {/* Stat Blocks */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 2, md: '5rem' },
            width: '130px',
          }}
        >
          {parliament_stats.map((stat, index) => (
            <StatBlock key={index} stat={stat} />
          ))}
        </Box>
      </Box>

      {/* Desktop view */}
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          gap: 5,
          alignItems: 'center',
          justifyContent: 'Start',
          mt: { xs: 5, md: 0 },
          borderRadius: 2,
        }}
      >
        <Box position={'relative'}>
          {/* <HalfCircleProgress value={overall_performance} isMobile={false} /> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              minWidth: '300px',
            }}
          >
            <ProgressMeter
              titleText={'Overall Performance'}
              // subTiteText={`LOK SABHA`}
              centerDate={'Till Now'}
              value={Number(`${overall_performance}`?.replaceAll('%', ''))}
              percentText={`${extractPercentage(overall_performance?.toString())?.a}`}
              subPercentText={`${extractPercentage(overall_performance?.toString())?.b}`}
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
              chartColor ='#FF6B9F'
            />
          </Box>
          {/* <Box
            sx={{
              position: 'absolute',
              left: '50%',
              top: '54%',
              transform: 'translate(-50%, -40%)',
              textAlign: 'center',
              width: '50%',
            }}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: '2rem', color: '#FF6B9F' }}
            >
              {overall_performance}%
            </Typography>
            <Typography sx={{ fontSize: '18px' }}>
              {performanceTitle}
            </Typography>
          </Box> */}
        </Box>

        <Box>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Typography sx={{ fontSize: '18px', width: '250px' }}>
              {performanceTitle}
            </Typography>
            <Typography sx={{ fontSize: '18px' }}>{rankingTitle}</Typography>
          </Box>
          <Box sx={{ display: 'flex', gap: 5 }}>
            <Box width={200}>
              <Typography
                sx={{ fontWeight: 600, fontSize: '2rem', color: '#FF6B9F' }}
              >
                {overall_performance}
              </Typography>
              <Typography sx={{ fontSize: '12px' }}>
                National Ranking
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: '22px', mt: 1 }}>
                {national_ranking}
              </Typography>
              <Typography sx={{ fontSize: '12px' }}>
                {total_mps} Out of {total_mps}
              </Typography>
            </Box>

            {/* Loop parliament stats */}
            <Box sx={{ display: 'flex', gap: 5, alignItems: 'start', mt: 5 }}>
              {parliament_stats.map((stat, index) => (
                <Box
                  key={index}
                  sx={{
                    borderBottom: '1px solid gray',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    pb: 1,
                    mb: 1,
                    width: 150,
                    minHeight: 50,
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, color: index == 0 ? '#FF6B9F' : '' }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {stat.title}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default MpsHomeChartSection;
