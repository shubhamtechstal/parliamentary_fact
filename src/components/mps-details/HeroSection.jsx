import { Box, Avatar, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import { useParams } from 'react-router-dom';

const CardsScroll = (list = []) => {
  return (
    <Box
      sx={{
        gap: '0.8rem',
        overflow: 'auto',
        width: '100%',
        display: 'flex',
        justifyContent: { md: 'center', xs: 'start' },
      }}
    >
      {list?.map((item, i) => {
        return (
          <Box
            key={i}
            sx={{
              width: { md: '200px', xs: 'auto' },
              gap: '1rem',
              padding: '0.5rem 1rem',
              border: '1px solid #70707033',
              borderRadius: '10px',
              background: '#FFFFFF 0% 0% no-repeat padding-box',
              textAlign: 'center',
              textWrap: 'nowrap',
            }}
          >
            <p style={{ margin: '0 0', fontSize:'0.9rem' }}>{item.title}</p>
            <h3 style={{ margin: '0 0',  fontSize:'1.2rem'}}>{item.value}</h3>
          </Box>
        );
      })}
    </Box>
  );
};
export default function PerformanceUI({ mpBasicInfo }) {

  return (
    mpBasicInfo && (
      <>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              alignItems: 'center',
              width: { xs: '100%', md: '70%' },
              position: 'relative',
              margin: 'auto',
              gap: { md: 4, xs: 2 },
            }}
          >
            <Avatar
              src={mpBasicInfo?.image}
              alt={mpBasicInfo?.name}
              sx={{
                height: 150,
                width: 150,
                fontSize: '4rem',
                textTransform: 'capitalize',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'start',
                padding: '0rem 1rem',
                textAlign: 'left',
              }}
            >
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: { md: '2rem', xs: '1.5rem' },
                  textTransform: 'capitalize',
                  textAlign: { md: 'left', xs: 'center' },
                  maxWidth:' 550px',
                  margin:{xs: '0 auto 1rem', md: '0 0 1rem 0'},
                }}
                variant="h2"
              >
                {mpBasicInfo?.name}
              </Typography>
              <p style={{ margin: '0 0' }}>
                Party :{' '}
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#000000',
                  }}
                >
                  {' '}
                  {mpBasicInfo?.party_full_name}{' '}
                </span>{' '}
                {mpBasicInfo?.party_short_name}{' '}
              </p>
              <p style={{ margin: '0 0' }}>
                Constituency :{' '}
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#000000',
                  }}
                >
                  {' '}
                  {mpBasicInfo?.constituency}
                </span>
              </p>
              <p style={{ margin: '0 0' }}>
                State :{' '}
                <span
                  style={{
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: '#000000',
                  }}
                >
                  {' '}
                  {mpBasicInfo?.state_name}{' '}
                </span>
              </p>
            </Box>
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
              {/* <StarIcon sx={{ color: '#FFA200', fontSize: '70px' }} />{' '} */}
              <img src="/Assets/icons/startImg.png" alt=" startImg icon" />
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
                {mpBasicInfo?.national_rank}{' '}
              </p>
              <span>
                {' '}
                 Rank's <br /> MP{' '}
              </span>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              width: { xs: '100%', md: '75%' },
              justifyContent: 'center',
              margin: 'auto',
              mt: 5,
            }}
          >
            {CardsScroll([
              { title: 'Age', value: `${mpBasicInfo?.age} Years Old` },
              { title: 'Gender', value: mpBasicInfo?.gender },
              { title: 'Category', value: mpBasicInfo?.category ?? 'General'},
              { title: 'Term', value: mpBasicInfo?.term_count },
              { title: 'Winning Margin', value: mpBasicInfo?.winning_margin },
            ])}
          </Box>
        </Box>
      </>
    )
  );
}
