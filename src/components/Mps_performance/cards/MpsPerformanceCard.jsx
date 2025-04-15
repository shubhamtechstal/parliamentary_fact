import { Box, Card, Grid } from '@mui/material';
import Avatar from 'components/common/Avatar';
import IconButton from 'components/common/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MpsPerformanceCard({ mp, handleOpenSharePopup }) {
  return (
    <Card
      sx={{
        p: 1.5,
        textAlign: 'center',
        borderRadius: 6,
        boxShadow: 2,
        textAlign: 'left',
        color: 'rgb(0 0 0 / 50%)',
        minWidth: { xs: '12rem', md: 'auto' },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'top',
        }}
      >
        <Box
          sx={{
            height: '30px',
            width: '30px',
            borderRadius: '50%',
            background: '#E19B00',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '0.6rem',
            color: '#fff',
          }}
        >
          {mp.rank}
        </Box>
        <Box>
          <h3
            style={{
              margin: '0 0',
              color: '#E19B00',
              fontSize: '0.7rem',
            }}
          >
            {' '}
            {/* National Rank:{' '} */}
            {mp.rankTitle}
          </h3>
          <h4 style={{ margin: '0 0', fontSize: '0.4rem' }}>
            Att + Qs + Dbt + Pmb + Mpf
          </h4>
        </Box>
        <MoreVertIcon
          cursor={'pointer'}
          onClick={() => handleOpenSharePopup()}
        />
      </Box>
      <Box height={50}>
        <h3
          style={{
            fontSize: '0.8rem',
            width: '70%',
            margin: '10px 0 0 0',
          }}
        >
          {mp.name}
        </h3>
        <h5 style={{ fontSize: '0.6rem', margin: '0 0' }}>{mp.constituency}</h5>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Box>
          <p
            style={{
              color: '#E59B00',
              fontSize: '18px',
              margin: '0 0',
            }}
          >
            <span
              style={{
                fontFamily: "'Saira', sans-serif",
                fontSize: '28px',
              }}
            >
              {mp.performance}
            </span>
            % <br />
          </p>
          <h4 style={{ fontSize: '0.6rem', margin: '-0.5rem 0 0 0' }}>
            Performance
          </h4>
        </Box>
        <Avatar
          src="Assets/icons/mpGirlImage.png"
          alt={mp.name}
          sx={{ width: 60, height: 60 }}
        />
      </Box>
    </Card>
  );
}

export default MpsPerformanceCard;
