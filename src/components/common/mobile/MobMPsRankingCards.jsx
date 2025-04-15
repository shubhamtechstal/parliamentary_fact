import { Box, Card } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import Avatar from 'components/common/Avatar';
// import GrayButton from '../GrayButton';

function MobMPsRankingCards({mp, key, handleOpenSharePopup}) {
//   const mp = {
//     rank: '000',
//     name: 'Neeraj Ram Mandola',
//     constituency: 'Choudheer Mandola',
//     performance: '52.9',
//     image: 'https://via.placeholder.com/50', // Replace with actual image URL
//   };
  return (
    <Card
    key={key}
      sx={{
        p: '0.5em 1em',
        textAlign: 'center',
        borderRadius: 6,
        boxShadow: 2,
        textAlign: 'left',
        color: 'rgb(0 0 0 / 50%)',
        mx: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box width={'50%'} borderRight={'1px solid #d3d2d2'} pr={2}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'start',
            alignItems: 'top',
            gap: 1,
          }}
        >
          <Avatar
            sx={{
              width: 30,
              height: 30,
              background: '#e7a917',
              color: '#fff',
              fontSize: '0.6em',
              fontFamily: '"Sora", sans-serif',
            }}
          >
            {mp.rank}
          </Avatar>
          <Box>
            <h3
              style={{
                margin: '0 0',
                fontSize: '0.7em',
              }}
            >
              {' '}
              National Rank:{' '}
            </h3>
            <h4 style={{ margin: '0 0', fontSize: '0.4em' }}>
              Att + Qs + Dbt + Pmb + Mpf
            </h4>
          </Box>
        </Box>
        <div>
          <Box>
            <h3
              style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                maxWidth: '10rem',
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'normal',
                lineHeight: '1.2rem',
                cursor: 'default',
              }}
            >
              {mp.name}
            </h3>
          </Box>
        </div>
      </Box>
    <Box width={'50%'} pl={1} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Gauge
          width={80}
          height={80}
          value={mp.performance ?? 52.2}
          cornerRadius="50%"
          sx={{
            [`& .${gaugeClasses.valueText}`]: {
              fontSize: '1em', fontWeight: '', transform: 'translate(0px, 0px)',fontFamily: "'Saira', sans-serif",
            },
            [`& .${gaugeClasses.valueArc}`]: {
              fill: '#E59B00',
            },
          }}
          text={({ value }) => `${value}%`}
        />
        <Avatar
          src="Assets/icons/mpGirlImage.png"
          alt={mp.name}
          sx={{ width: 60, height: 60 }}
        />
        <Box height={'90px'} py={1} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }}>
          <img
            width={16}
            height={16}
            src="Assets/icons/icon3dot.png"
            alt="icon3dot"
          />
           <Avatar
              sx={{ width: '30px', height: '30px' }}
              src="Assets/icons/shareYellowIcon.png"
              alt="icon3dot"
              onClick={() => handleOpenSharePopup()}
            /> 
        </Box>
      </Box>
      {/* <GrayButton fontSize='0.5em' width='90%' >Share</GrayButton> */}
    </Box>
    </Card>
  );
}

export default MobMPsRankingCards;
