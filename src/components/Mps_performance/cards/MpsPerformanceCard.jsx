import { Box, Card, Grid, Skeleton } from '@mui/material';
import Avatar from 'components/common/Avatar';
import IconButton from 'components/common/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Link } from 'react-router-dom';

const MpsPerformanceCardSkeleton = () => {
  return (
    <Card
      sx={{
        py: 1.5,
        px: 1,
        textAlign: 'center',
        borderRadius: 6,
        boxShadow: 2,
        textAlign: 'left',
        color: 'rgb(0 0 0 / 50%)',
        minWidth: { xs: '10.5rem', md: 'auto' },
        minHeight: 170,
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'top',
          mb: 1,
        }}
      >
        <Skeleton variant="circular" height={30} width={30} />
        <Box>
          <Skeleton variant="text" height={20} width={90} />
          <Skeleton variant="text" height={10} width={90} />
        </Box>
        <Skeleton variant="text" height={20} width={10} />
      </Box>
      <Skeleton variant="text" height={40} width={90} mb={1} />
      <Skeleton variant="text" height={10} width={90} />
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
              <Skeleton variant="text" height={30} width={80} />
            </span>
          </p>
          <h4 style={{ fontSize: '0.6rem', margin: '-0.5rem 0 0 0' }}>
            <Skeleton variant="text" width={80} />
          </h4>
        </Box>
        <Skeleton variant="circular" height={60} width={60} />
      </Box>
    </Card>
  );
};

const mpDomy = {
  rank: '001',
  name: 'Amit Kumar Singh',
  constituency: 'Varanasi',
  performance: '78.2',
  rankTitle: 'State Rank:',
  image: 'https://via.placeholder.com/50',
  partyName: 'BJP',
};
function MpsPerformanceCard({
  mpInfo,
  handleOpenSharePopup,
  cardCatagory,
  isLoading,
}) {
  const mp = mpInfo ?? mpDomy;
  return (
    <>
      {isLoading ? (
        MpsPerformanceCardSkeleton()
      ) : (
        <Link style={{textDecoration:'none', color:"inherit"}} to={mp?.mp_id ? `/mps-details/${mp?.name.replaceAll(" ", '-')?.toLowerCase() }_${mp?.mp_id}` : '#'}>
          <Card
            sx={{
              py: 1.5,
              px: 1,
              textAlign: 'center',
              borderRadius: 6,
              boxShadow: 2,
              textAlign: 'left',
              color: 'rgb(0 0 0 / 50%)',
              width: { xs: '10rem', md: 'auto' },
              height: 160,
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
              <Box borderBottom={'1px solid #d3d2d2'}>
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
                <h4
                  style={{
                    margin: '0 0',
                    fontSize: !cardCatagory ? '0.3rem' : '0.45rem',
                  }}
                >
                  {cardCatagory ?? 'Att + Qs + Dbt + Pmb + Mpf'}
                </h4>
              </Box>
              <MoreVertIcon
                cursor={'pointer'}
                onClick={() => handleOpenSharePopup(mp)}
              />
            </Box>
            <h3
              style={{
                fontSize: '0.7rem',
                maxWidth: '70%',
                margin: '10px 0 0 0',
                height: '3rem',
                overflow: 'hidden',
                lineHeight: '0.8rem',
                textOverflow: 'ellipsis',
                // whiteSpace: 'nowrap',
              }}
            >
              {mp.name}
              {/* {mp.partyName} <br />
            {mp.constituency} */}
            </h3>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: '-8px',
              }}
            >
              <Box>
                <p
                  style={{
                    color: '#E59B00',
                    fontSize: '18px',
                    fontFamily: "'Saira', sans-serif",
                    margin: '0 0',
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Saira', sans-serif",
                      fontSize: '22px',
                    }}
                  >
                    {`${mp?.performance}`.replaceAll(".00", '')}
                  </span>
                  % <br />
                </p>
                <h4 style={{ fontSize: '0.6rem', margin: '-0.5rem 0 0 0' }}>
                  Performance
                </h4>
              </Box>
              <Avatar
                src={mp.image}
                alt={mp.name}
                sx={{ width: 50, height: 50 }}
              />
            </Box>
          </Card>
        </Link>
      )}
    </>
  );
}

export default MpsPerformanceCard;
