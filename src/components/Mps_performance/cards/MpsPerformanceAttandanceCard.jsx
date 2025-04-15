import { Avatar, Box, Card, Grid } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import IconButton from 'components/common/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';

function MpsPerformanceAttandanceCard({ mp, index, handleOpenSharePopup }) {
  return (
    <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
      <Card
        sx={{
          p: 1.5,
          textAlign: 'center',
          borderRadius: 5,
          boxShadow: 0,
          textAlign: 'left',
          color: 'rgb(0 0 0 / 50%)',
          background: '#f9f9f9',
          fontFamily: '"Sora", sans-serif',
          position: 'relative',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'top',
          }}
        >
          <Box display={'flex'} alignItems={'center'} gap={1}>
            {/* <h3
              style={{
                margin: '0 0',
                // color: '#E19B00',
                fontSize: '1rem',
              }}
            >
              # MPsPerformance
            </h3> */}
            <Avatar
              // alt={mp.name}
              sx={{
                width: 35,
                height: 35,
                background: 'linear-gradient(#ffdb00, orange, #dc752c)',
                color: 'rgb(0 0 0 / 50%)',
                fontSize: '0.8rem',
                fontFamily: '"Sora", sans-serif',
              }}
            >
              {mp.rank}
            </Avatar>
            <Box>
              <Box
                style={{
                  margin: '0 0',
                  color: '#E19B00',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',                  
                }}
              >
                <h2 style={{ fontSize: '1rem', margin:'0 0' }}>{mp.rankTitle} </h2>
                <IconButton
                  onClick={() => handleOpenSharePopup()}
                  sx={{ position: 'absolute', right: 0, top: 0 }}
                >
                  <MoreVertIcon />
                </IconButton>
              </Box>
              <h4
                style={{
                  margin: '0 0',
                  fontSize: '0.5rem',
                  textTransform: 'uppercase',
                  borderBottom: '1px solid #d3d2d2',
                  paddingBottom: '5px',
                }}
              >
                Attendance + Questions + Debates + Pvt Member bill + MPLADS
              </h4>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center' }}></Box>
        </Box>

        <h3
          style={{
            fontSize: '1rem',
            width: '80%',
            margin: '1rem 0 0 0',
            lineHeight:'1.3'
          }}
        >
          {mp.name} {mp.constituency}
        </h3>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'top',
          }}
        >
          <Box width={60}>
            <p
              style={{
                margin: '0 0 10px 0',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                width: '200px',
              }}
            >
              {mp.partyName ?? 'Samajwadi Party'}
            </p>
            <p
              style={{ margin: '0 0', fontSize: '0.6rem', fontWeight: 'bold' }}
            >
              {mp.city ?? 'Azamgarh'}
            </p>
            <p
              style={{
                margin: '0 0',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                width: '120px',
              }}
            >
              {mp.state ?? 'Uttar Pradesh'}
            </p>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '-20px' }}
          >
            <Avatar
              src="Assets/icons/mpGirlImage.png"
              alt={mp.name}
              sx={{ width: 80, height: 80, border: '10px solid #fff' }}
            />
            <Gauge
              width={120}
              height={120}
              value={mp?.performance}
              cornerRadius="50%"
              sx={{
                [`& .${gaugeClasses.valueText}`]: {
                  fontSize: { md: 20, xs: 18 },
                  fontWeight: 'bold',
                  transform: 'translate(0px, 0px)',
                  color: 'rgb(0 0 0 / 50%)',
                  fontFamily: "'Saira', sans-serif",
                },
                [`& .${gaugeClasses.valueArc}`]: {
                  fill: '#E59B00',
                },
              }}
              text={({ value }) => `${value}%`}
            />
            {/* <Box width={65}>
              <Avatar
                // alt={mp.name}
                sx={{
                  width: 35,
                  height: 35,
                  background: 'linear-gradient(#ffdb00, orange, #dc752c)',
                  color: 'rgb(0 0 0 / 50%)',
                  fontSize: '0.8rem',
                  fontFamily: '"Sora", sans-serif',
                }}
              >
                {mp.rank}
              </Avatar>
              <p
                style={{
                  margin: '0 0',
                  color: 'rgb(251 195 1)',
                  fontSize: '0.6rem',
                }}
              >
                National Rank
              </p>
              <p
                style={{
                  margin: '0 0',
                  fontSize: '0.6rem',
                  fontWeight: 'bold',
                }}
              >
                Out of 496+
              </p>
              <Box display={'flex'} alignItems={'center'} gap={0.5} width={70}>
                {' '}
                <Avatar
                  sx={{
                    width: 20,
                    height: 20,
                    background: '#fff',
                    border: '1px solid #f0e8e8',
                  }}
                />{' '}
                <span style={{ fontSize: '0.5rem' }}>
                  Below Avg. Performer
                </span>{' '}
              </Box>
            </Box> */}
          </Box>
        </Box>
        <a href="/mps-performance">
        <img height={20} src="/pfLogo.png" alt="pmt website logo" />
        </a>
      </Card>
    </Grid>
  );
}

export default MpsPerformanceAttandanceCard;
