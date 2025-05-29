import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Rating,
  Stack,
  Typography,
} from '@mui/material';
import MpRatingForm from 'components/mpRating/MpRatingForm';
import MpSearch from 'components/mpRating/MpSearch';
import SearchMpDropdowns from 'components/mpRating/SearchMpDropdowns';
import StarIcon from '@mui/icons-material/Star';
import * as React from 'react';
import Text from 'components/common/Text';
import MpsStartRatingCard from 'components/common/cards/MpsStartRatingCard';
import RatingCardSection from 'components/mpRating/RatingsCardSection';
import ThankYouModal from 'components/mpRating/ThankYouModal';
import '../App.css';

export default function RateYourMpContainer() {
  const [mp, setMp] = React.useState('');
  const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
  const [modalOpen, setModalOpen] = React.useState(false);
  const handleChange = (event) => {
    setMp(event.target.value);
  };

  return (
    <>
      <ThankYouModal handleClose={() => setModalOpen(false)} open={modalOpen} />
      <Box
        sx={{
          background: '#dce5e850',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '1rem 0',
        }}
      >
        {/* <Box > */}
        <Box sx={{ width: { md: '80%', xs: '90%' } }}>
          <MpSearch />
          <Divider />
          <SearchMpDropdowns />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: '#f9f9f9',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            paddingBottom: '1rem',
          }}
        >
          <Box sx={{ padding: '1rem 0', width: { md: '80%', xs: '90%' } }}>
            <Text
              sx={{
                fontWeight: '600',
                marginTop: '0.1rem',
                fontSize: '1.25rem',
                background: '#dce5e850',
                width: 'fit-content',
                padding: ' 0.2rem 0.5rem',
              }}
              text={'Selected MP'}
            />
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '1rem',
              }}
              className="search_mp"
            >
              <Stack direction="row" gap={{ xs: '0.5rem', md: '2rem' }} mt={3}>
                <Box sx={{ pt: 2 }}>
                  <Avatar
                    alt="Krishna Chaurasiya"
                    src="Assets/dummy-profile-image.png"
                    sx={{ width: 120, height: 120 }}
                  />
                </Box>
                <Box
                  sx={{
                    maxWidth: '70%',
                    padding: '1rem',
                    background: '#dce5e850',
                  }}
                >
                  <Typography sx={{ fontWeight: 600, color: 'grey' }}>
                    Neeraj Ram Mandola Choudheer Mandola
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ mt: { xs: 1, md: 2 }, color: 'grey' }}
                  >
                    Samajwadi Party
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    Azamgarh
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey' }}>
                    Uttar Pradesh
                  </Typography>
                </Box>
              </Stack>

              <Box>
                <Typography variant="h6" sx={{ fontWeight: 600 }}>
                  Current Rating
                </Typography>
                <hr className="MobileViewRemove" />
                <Box sx={{ display: 'flex', gap: '1rem' }}>
                  <Rating
                    sx={{ fontSize: '2rem' }}
                    name="read-only"
                    value={4}
                    readOnly
                    emptyIcon={
                      <StarIcon style={{ color: '#000' }} fontSize="inherit" />
                    }
                  />
                  <Text
                    text={'4.52'}
                    sx={{
                      color: 'orange',
                      fontSize: '1.5rem',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  />
                </Box>
                <Typography
                  sx={{ fontWeight: 600, color: 'grey', fontSize: '0.8rem' }}
                >
                  Performance:{' '}
                  <span style={{ fontWeight: 600, color: '#000' }}>
                    Satisfactory
                  </span>
                </Typography>
                <Button
                  sx={{
                    backgroundColor: 'orange',
                    color: 'white',
                    borderRadius: '15px',
                    fontWeight: 600,
                    mt: 2,
                    px: 1,
                  }}
                  className="search_mp_btn"
                >
                  Rate Now
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ width: { md: '80%', xs: '90%' }, padding: '1rem 0' }}>
          <RatingCardSection />
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            background: '#f9f9f9',
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
            padding: '2rem 0',
          }}
        >
          <Box sx={{ width: { md: '80%', xs: '90%' } }}>
            <MpRatingForm handleSubmit={() => setModalOpen(true)} />
          </Box>
        </Box>
        <Box sx={{ width: { md: '80%', xs: '90%' }, padding: '2rem 0' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Box
              sx={{ height: '1rem', width: '1rem', background: '#ff000070' }}
            ></Box>
            <Text
              sx={{ fontWeight: '600', marginTop: '0.1rem' }}
              text={'Top Rated MPs'}
            />
          </Box>
          <Grid
            container
            spacing={2}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '1fr 1fr 1fr 1fr 1fr 1fr' },
              overflowX: { xs: 'auto', md: 'unset' },
              justifyContent: 'space-around',
              padding: '1rem 0',
            }}
          >
            {data.map((data) => (
              <Grid item key={data}>
                <MpsStartRatingCard />
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* </Box> */}
      </Box>
    </>
  );
}
