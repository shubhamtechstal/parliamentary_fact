import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';
import { appConstants } from 'helpers/constants/appConstants';

export default function BottomSubHeadingCards({ type, data }) {
  const navigate = useNavigate();

  let newsItem;
  if (data) newsItem = data[3];

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
      <Box className="Bottom_card_box">
        <img
          // src={images.dummyNews3}
          src={imageUrl + newsItem?.image}
          style={{ height: '100px', width: '100%' }}
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
          <Text
            onClick={() => navigate(`/details/${newsItem?.id}`)}
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              position: 'relative',
              paddingBottom:'3px',
              '&:hover': {
                color: '#da251d',
                '&::before': {
                  width: '100%',
                },
              },
              '&::before': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '0%',
                height: '1px',
                backgroundColor: '#da251d',
                transition: 'width 0.4s ease-out',
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
