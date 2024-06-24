import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';
import { appConstants } from 'helpers/constants/appConstants';

export default function CenterBackgroudNewsCard({ data }) {  
  const navigate = useNavigate();

  let newsItem;
  if (data) newsItem = data[7];

  const imageUrl = appConstants.BACKEND_IMAGE_URL;
  const formattedDate = new Date(newsItem?.date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Box className='centercard_box'>
        <img
          // src={images.dummyNews4}
          src={imageUrl + newsItem?.image}
          style={{ height: '100%', width: '100%' }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
        }}
      >
        <Box sx={{ display: 'flex' }}>
          <Text
            sx={{
              background: '#0d0b52',
              color: '#FFF',
              padding: '0.2rem 0.5rem',
              fontSize: '0.625rem',
              fontWeight: 700,
            }}
            text={newsItem?.category}
          ></Text>
        </Box>
        <Box>
          <Text onClick={() => navigate(`/details/${newsItem?.id}`)}
            font={'Roboto'}
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={newsItem?.title}
          />
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            <Text
              sx={{ textAlign: 'center', color: '#767676', fontSize: '0.7rem' }}
              text={formattedDate}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
