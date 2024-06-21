import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';
import parse from 'html-react-parser';

export default function HeadingNewCards({ data }) {
  const navigate = useNavigate();
  let newsItem;
  if (data) newsItem = data[0];
  // console.log(data,'hjshdjs');

  const formattedDate = new Date(newsItem?.date).toLocaleString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  });

  return (
    <Box
      className="headCard"
      sx={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: '300px',
          maxHeight: '250px',
        }}
      >
        <iframe
          width="100%"
          height="100%"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
          src={newsItem?.video}
        ></iframe>
      </Box>
      <Box
        sx={{
          maxWidth: '350px',
          maxHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          // gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Text
            onClick={() => navigate(`/details/${newsItem?.id}`)}
            //  font={'Inter'}
            sx={{
              lineHeight: '33px',
              fontSize: '1.5rem',
              fontWeight: 700,
              cursor: 'pointer',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={newsItem?.title}
            // text={'रोका फिर लाठी लेकर गाड़ी से उतरे और कर डाला लाल-पीला'}
          />
          <Box
            sx={{
              display: 'flex',
              gap: '0.5rem',
              alignItems: 'center',
              marginTop: '10px',
            }}
          >
            <Text
              sx={{
                background: '#0d0b52',
                color: '#FFF',
                padding: '0.1rem 0.5rem',
                fontSize: '0.625rem',
                fontWeight: 700,
              }}
              text={newsItem?.sub_category}
            ></Text>
            <Text
              sx={{ fontWeight: 700, fontSize: '0.7rem' }}
              text={newsItem?.city}
            ></Text>
            <Text
              sx={{
                textAlign: 'center',
                color: '#767676',
                fontSize: '0.75rem',
              }}
              text={formattedDate}
            ></Text>
          </Box>
        </Box>
        <Text
          font={'Roboto'}
          sx={{
            color: '#767676',
            fontSize: '14px',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            fontWeight: '600',
          }}
          // text={newsItem?.description}
          text={newsItem ? parse(newsItem.description) : ''}
        />
      </Box>
    </Box>
  );
}
