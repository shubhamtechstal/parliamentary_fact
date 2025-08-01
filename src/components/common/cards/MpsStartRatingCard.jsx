import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Rating, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

const mpDomy = {
  rank: 'test01',
  name: 'Test Amit Kumar Singh',
  constituency: 'Varanasi',
  performance: '78.2',
  rankTitle: 'State Rank:',
  image: 'https://via.placeholder.com/50',
  partyName: 'BJP',
};
export default function MpsRatingCard({ mpInfo, cardCatagory,handleOpenSharePopup= ()=>{} }) {
  const mp = mpInfo ?? mpDomy
  return (
    <>
      <Card
        sx={{
          py: 1.5,
          px: 1,
          borderRadius: 6,
          boxShadow: 2,
          textAlign: 'left',
          color: 'rgb(0 0 0 / 50%)',
          // minWidth: { xs: '12rem', md: 'auto' },
          minHeight: 170,
          // width: '100%',
          maxWidth:'10rem'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            // gap: 0.5,
          }}
        >
          <Box
            sx={{
              height: '35px',
              width: '35px',
              borderRadius: '50%',
              background: '#E19B00',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '0.5rem',
              color: '#fff',
              mr:'3px'
            }}
          >
            {mp.rank}
          </Box>
          <h3
            style={{
              margin: '0 0',
              color: '#E19B00',
              fontSize: '0.8rem',
              textWrap:'nowrap'
            }}
          >
            {' '}
            {/* National Rank:{' '} */}
            {mp.rankTitle}
          </h3>
          <MoreVertIcon
            cursor={'pointer'}
            onClick={() => handleOpenSharePopup()}
          />
        </Box>
        <h3
          style={{
            fontSize: '0.8rem',
            width: '70%',
            margin: '10px 0 0 0',
            height: '2.5rem',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            // whiteSpace: 'nowrap',
          }}
        >
          {mp.name} 
          {/* {mp.partyName} <br /> */}
          {/* <span style={{ fontSize: '0.6rem', margin: '0 0' }}> */}
          {/* {mp.constituency} */}
          {/* </span> */}
        </h3>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}
        >
          <Avatar src={mp.image} alt={mp.name} sx={{ width: 60, height: 60 }} />
          <Box>
            <p
              style={{
                color: '#E59B00',
                margin: '0 0',
                fontFamily: "'Saira', sans-serif",
                fontSize: '28px',
              }}
            >
              {mp.performance}
            </p>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Rating
            sx={{ fontSize: '1.5rem' }}
            name="read-only"
            value={4}
            readOnly
            emptyIcon={
              <StarIcon style={{ color: '#000' }} fontSize="inherit" />
            }
          />
        </Box>
        <Box
          style={{
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '10px',
          }}
        >
          <Link to={'/rate-your-mp'} style={{ textDecoration: 'none', color: 'inherit' }}>
            <Button
              variant="secondary"
              sx={{
                borderBottom: '2px solid grey',
                fontWeight: 'bold',
                fontSize: '12px',
              }}
            >
              Rate Now
            </Button>
          </Link>
        </Box>
      </Card>
    </>
  );
}
