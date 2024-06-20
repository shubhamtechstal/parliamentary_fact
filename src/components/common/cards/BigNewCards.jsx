import { Box, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import Text from '../Text';
import { Link, useNavigate } from 'react-router-dom';
import images from 'helpers/images';

export default function BigNewCards({ data }) {
  const navigate = useNavigate();

  let newsItem;
  if (data) newsItem = data[5];

  return (
    <Card sx={{ maxWidth: 450, boxShadow: 'none', borderRadius: '0' }}>
      <CardMedia
        sx={{ height: 300 }}
        src={images.dummyNews1}
        image={images.dummyNews1}
        title="green iguana"
      />
      <CardContent sx={{ margin: 0, padding: '1rem 0rem' }}>
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
        <Text 
          onClick={() => navigate('/details')}
          sx={{
            fontWeight: '700',
            marginTop: '1rem',
            fontSize: '1.5rem',
            lineHeight: '1.8rem',
            cursor: 'pointer',
            '&:hover': {
              color: '#162eb7',
            },
          }}
          text={newsItem?.title}
        />
        <Text
          text={newsItem?.date}
          sx={{ color: '#9e9e9e', margin: '0.6rem 0' }}
        />
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
            fontWeight:'600',
            // fontFamily:'Poppins,sans-serif !important'
          }}
          text={newsItem?.description}
        />
        <Box sx={{ margin: '1rem 0' }}>
          <Link>Read More</Link>
        </Box>
      </CardContent>
    </Card>
  );
}
