import { Avatar, Box, Card, Grid, Skeleton } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import IconButton from 'components/common/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
function AttandanceSkeletonCard(index) {
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
          height: 200,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'top',
            mb: 5,
          }}
        >
          <Box display={'flex'} alignItems={'center'} gap={1}>
            <Skeleton variant="circular" height={35} width={35} />
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
                <Skeleton variant="text" height={20} width={120} />
                <IconButton sx={{ position: 'absolute', right: 0, top: 0 }}>
                  <Skeleton variant="circular" height={20} width={20} />
                </IconButton>
              </Box>
              <Box
                sx={{
                  margin: '0 0',
                  fontSize: '0.6rem',
                  textTransform: 'uppercase',
                  paddingBottom: '5px',
                }}
              >
                <Skeleton variant="text" height={10} width={100} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Skeleton variant="rounded" height={20} width={120} />
        <Skeleton variant="text" height={20} width={120} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'top',
          }}
        >
          <Box width={120}>
            <p
              style={{
                margin: '0  0',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                width: '200px',
              }}
            >
              <Skeleton variant="text" height={10} width={90} />
            </p>
            <p
              style={{ margin: '0 0', fontSize: '0.6rem', fontWeight: 'bold' }}
            >
              <Skeleton variant="text" height={10} width={90} />
            </p>
            <p
              style={{
                margin: '0 0',
                fontSize: '0.6rem',
                fontWeight: 'bold',
                width: '120px',
              }}
            >
              <Skeleton variant="text" height={10} width={90} />
            </p>
          </Box>
          <Box
            sx={{ display: 'flex', alignItems: 'center', marginTop: '-40px' }}
          >
            <Skeleton
              variant="circular"
              height={80}
              width={80}
              sx={{ mr: 1 }}
            />
            <Skeleton variant="circular" height={100} width={100} />
          </Box>
        </Box>
        {/* <Skeleton variant="rectangular" height={20} width={120} mb={1} /> */}
      </Card>
    </Grid>
  );
}

function MpsTopPerformanceCard({
  mp,
  index,
  handleOpenSharePopup,
  cardCatagory,
  isLoading,
}) {
  return (
    <>
      {isLoading ? (
        AttandanceSkeletonCard(index)
      ) : (
        <Grid item xs={12} sm={6} md={4} lg={4} key={index}>
          <Link
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={
              mp?.mp_id
                ? `/mps-details/${mp?.name.replaceAll(' ', '-')?.toLowerCase()}_${mp?.mp_id}`
                : '#'
            }
          >
            <Card
              sx={{
                p: 1.5,
                textAlign: 'center',
                borderRadius: 5,
                textAlign: 'left',
                color: 'rgb(0 0 0 / 50%)',
                // background: '#f9f9f9',
                fontFamily: '"Sora", sans-serif',
                position: 'relative',
                minHeight: 200,
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'top',
                  borderBottom: '1px solid #d3d2d2',
                }}
              >
                <Box display={'flex'} alignItems={'center'} gap={1}>
                  <Avatar
                    sx={{
                      width: 35,
                      height: 35,
                      background: '#E19B00',
                      // color: 'rgb(0 0 0 / 50%)',
                      fontSize: '0.8rem',
                      fontFamily: '"Sora", sans-serif',
                      mb: '0.5rem',
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
                      <h2 style={{ fontSize: '0.8rem', margin: '0 0' }}>
                        {mp.rankTitle}{' '}
                      </h2>
                      <IconButton
                        onClick={() => handleOpenSharePopup()}
                        sx={{ position: 'absolute', right: 0, top: 0 }}
                      >
                        <MoreVertIcon />
                      </IconButton>
                    </Box>
                    <Box
                      sx={{
                        margin: '0 0',
                        fontSize: cardCatagory ? '0.6rem' : '0.4rem',
                        textTransform: 'uppercase',
                        paddingBottom: '5px',
                      }}
                    >
                      {cardCatagory ??
                        'Attendance + Questions + Debates + Pvt Member bill + MPLADS'}
                    </Box>
                  </Box>
                </Box>
              </Box>
              <h3
                style={{
                  fontSize: '0.8rem',
                  width: '80%',
                  margin: '0.5rem 0 0 0',
                  lineHeight: '1.3',
                  height: '2.5rem',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  // whiteSpace: 'nowrap',
                }}
              >
                {mp.name}
              </h3>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'top',
                }}
              >
                <Box width={90} pt={2}>
                  <p
                    style={{
                      margin: '0  0',
                      fontSize: '0.6rem',
                      fontWeight: 'bold',
                      width: '80px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      // whiteSpace: 'nowrap',
                    }}
                  >
                    {mp.partyName ?? 'Samajwadi Party'}
                  </p>
                  <p
                    style={{
                      margin: '0 0',
                      fontSize: '0.6rem',
                      fontWeight: 'bold',
                    }}
                  >
                    {mp.constituency ?? 'Azamgarh'}
                  </p>
                  <p
                    style={{
                      margin: '0 0',
                      fontSize: '0.6rem',
                      fontWeight: 'bold',
                      width: '120px',
                    }}
                  >
                    {mp.state_name ?? 'Uttar Pradesh'}
                  </p>
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    marginTop: '-20px',
                  }}
                >
                  <Avatar
                    src={mp.image}
                    alt={mp.name}
                    sx={{ width: 80, height: 80 }}
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
              {/* <a href="/mps-performance">
              <img height={20} src="/pfLogo.png" alt="pmt website logo" />
            </a> */}
            </Card>
          </Link>
        </Grid>
      )}
    </>
  );
}

export default MpsTopPerformanceCard;
