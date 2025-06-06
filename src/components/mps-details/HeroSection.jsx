import React from 'react';
import { Box, Typography, Grid, IconButton, Avatar } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';
const arcStyles = [
  { value: 80, color: '#FF6B9F' },
  { value: 90, color: '#FF6B9F' },
  { value: 60, color: '#FF6B9F' },
];

const HalfCircleProgress = ({ boxHeight }) => {
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
        transform: 'rotate(-90deg)', // Rotates the arc to stand vertically
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

const StatBlock = () => (
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
        83.14
      </Typography>
      <Typography variant="body2" sx={{ fontWeight: 500 }}>
        Loksabha Perform...
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
        421
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
        496 out of 496
      </Typography>

      <img
        src="/Assets/icons/shareYellowIcon.png"
        alt="share icon"
        height={30}
        width={30}
      />
      {/* <IconButton size="small" sx={{ color: '#fbc02d' }}>
        <ShareIcon fontSize="small" />
      </IconButton> */}
    </Box>
  </Box>
);
const CardsScroll = () => {
  return (
    <Box
      sx={{
        gap: '1rem',
        overflow: 'auto',
        width: '100%',
        display: 'flex',
      }}
    >
      {Array.from({ length: 7 }).map((i) => {
        return (
          <Box
            key={i}
            sx={{
              display: 'flex',
              height: '50px',
              width: '150px',
              justifyContent: 'space-between',
              gap: '1rem',
              // mt: 4,
              padding: '0.5rem',
              border: '1px solid #70707033',
              borderRadius: '10px',
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              fontSize: '0.7rem',
            }}
          >
            <p style={{ margin: '0 0' }}>Current Position</p>
            <hr />
            <p style={{ margin: '0 0' }}>Current Position</p>
          </Box>
        );
      })}
    </Box>
  );
};
export default function PerformanceUI() {
  const { id } = useParams();
  const mpId = id.split('_')[1];
  const mpName = id.split('_')[0].replaceAll('-', ' ');
  console.log('idididididid', id.split('_'), mpId, mpName);
  return (
    <>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <Box
          position={'relative'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: { xs: '100%', md: '400px' },
            padding: '2rem 1rem',
          }}
        >
          <Avatar src="/mpurl" alt={mpName} sx={{ height: 120, width: 120, fontSize:'4rem', textTransform:"capitalize" }}  />
          <p
            style={{
              margin: '1rem 0 0 0',
              fontWeight: '600',
              fontSize: '1.6rem',
              textTransform: 'capitalize',
            }}
          >
            {mpName}
          </p>
          <p
            style={{
              // margin: '0 0',
              fontSize: '1rem',
              fontWeight: '500',
              color: '#000000',
            }}
          >
            Samajwadi Party <br /> Azamgarh | UP
          </p>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignContent: 'center',
              position: 'absolute',
              top: '0rem',
              right: '1rem',
              textAlign: 'center',
            }}
          >
            <StarIcon sx={{ color: '#FFA200', fontSize: '70px' }} />{' '}
            <p
              style={{
                position: 'absolute',
                top: '8%',
                left: '32%',
                minWidth: '25px',
                color: 'white',
                textAlign: 'center',
              }}
            >
              {' '}
              0{' '}
            </p>
            <span>
              {' '}
              Star <br /> MP{' '}
            </span>
          </Box>
        </Box>
        <Box
          sx={{
            display: { xs: 'flex', md: 'none' },
          }}
        >
          {CardsScroll()}
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            mt: { xs: 5, md: 0 },
            // backgroundColor: '#f9f9f9',
            borderRadius: 2,
            // width: '100%',
          }}
        >
          {/* Left: Half Circle Progress */}
          <Box position={'relative'}>
            <HalfCircleProgress />
            {/* Centered Text */}
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
                Overall Performance
              </Typography>
              <Typography
                sx={{ fontWeight: 600, fontSize: '2rem', color: '#FF6B9F' }}
              >
                83.14
              </Typography>
              <Typography sx={{ fontSize: '13px' }}>
                National Ranking
              </Typography>
              <Typography sx={{ fontWeight: 600, fontSize: '18px', mt: 1 }}>
                421
              </Typography>
              <Typography sx={{ fontSize: '13px' }}>496 Out of496 </Typography>
            </Box>
            <img
              src="/Assets/icons/shareYellowIcon.png"
              alt=""
              height={30}
              width={30}
              style={{ position: 'absolute', bottom: '10px', right: '20px' }}
            />
          </Box>

          {/* Right: Repeated stat blocks */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: { xs: 2, md: '5rem' },
              width: '130px',
            }}
          >
            <StatBlock />
            <StatBlock />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
        }}
      >
        {CardsScroll()}
      </Box>
    </>
  );
}
