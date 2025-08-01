import { Avatar, Box, Card, Grid, Rating, Skeleton } from '@mui/material';
import { Gauge, gaugeClasses } from '@mui/x-charts';
import IconButton from 'components/common/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import StarIcon from '@mui/icons-material/Star';
import GrayButton from 'components/common/GrayButton';
import Button from 'components/common/Button';
import { Link } from 'react-router-dom';

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

function MpsTopPerformanceRatingCard({
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
          <Card
            sx={{
              p: 1.5,
              textAlign: 'center',
              borderRadius: 5,
              color: 'rgb(0 0 0 / 50%)',
              // background: '#f9f9f9',
              fontFamily: '"Sora", sans-serif',
              position: 'relative',
              minHeight: 215,
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
                {/* <Avatar
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
                </Avatar> */}
                <Box>
                  <Box
                    style={{
                      margin: '0 0',
                      color: '#E19B00',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      width: '100%',
                    }}
                  >
                    <h2 style={{ fontSize: '1rem', margin: '0 0' }}>
                      #MPs Rating
                    </h2>
                    <IconButton sx={{ position: 'absolute', right: 30, top: 0 }}>
                      <img
                        height={20}
                        width={20}
                        src="/Assets/icons/shareYellowIcon.png"
                        alt="share icon"
                      />
                    </IconButton>
                    <IconButton sx={{ position: 'absolute', right: 0, top: 0 }}>
                      <MoreVertIcon onClick={() => handleOpenSharePopup()} />
                    </IconButton>
                  </Box>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'top',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'top',
                  flexDirection: 'column',
                }}
              >
                <h3
                  style={{
                    fontSize: '1rem',
                    margin: '0.5rem 0 0 0',
                    lineHeight: '1.3',
                    height: '2.7rem',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    // whiteSpace: 'nowrap',
                  }}
                >
                  {mp.name}
                </h3>
                <p
                  style={{
                    margin: '0 0',
                    fontSize: '0.6rem',
                    fontWeight: 'bold',
                  }}
                >
                  {mp.partyName ?? 'Samajwadi Party'} |{' '}
                  {mp.constituency ?? 'Azamgarh'} | {mp.state_name ?? 'UP'}
                </p>
                <Rating
                  sx={{ fontSize: '2rem' }}
                  name="read-only"
                  value={4}
                  readOnly
                  emptyIcon={
                    <StarIcon style={{ color: '#000' }} fontSize="inherit" />
                  }
                />
                <Box
                  sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
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
                        fontSize: '26px',
                      }}
                    >
                      {mp.startRating ?? '5.0'}
                    </span>
                    {/* % <br /> */}
                  </p>
                  <h4 style={{ fontSize: '0.6rem', margin: '0 0' }}>
                    {mp.partyName ?? 'Samajwadi Party'} |{' '}
                    {mp.constituency ?? 'Azamgarh'} | {mp.state_name ?? 'UP'}
                  </h4>
                </Box>
                <a href="/mps-performance">
                  <img
                    height={20}
                    src="/pfLogo.png"
                    alt="pmt website logo"
                    style={{ marginBottom: '-10px' }}
                  />
                </a>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  padding: '0.5rem',
                }}
              >
                <Avatar
                  src={mp.image}
                  alt={mp.name}
                  sx={{
                    width: 100,
                    height: 100,
                    border: '4px solid black',
                    padding: '5px',
                  }}
                />
                <Link  to={'/rate-your-mp'}>
                  <Button
                    style={{
                      background: '#E39A00 0% 0% no-repeat padding-box',
                      height: '18px',
                      width: '91px',
                      borderRadius: '20px',
                      fontSize: '12px',
                    }}
                  >
                    Rate Now
                  </Button>
                </Link>
              </Box>
            </Box>
          </Card>
        </Grid>
      )}
    </>
  );
}

export default MpsTopPerformanceRatingCard;
