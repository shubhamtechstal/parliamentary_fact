import { Box, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import Text from '../Text';
import { Link, useNavigate } from 'react-router-dom';
import images from 'helpers/images';
import parse from 'html-react-parser';
import { appConstants } from 'helpers/constants/appConstants';

export default function BigNewCards({ data }) {
  const navigate = useNavigate();

  // console.log(data);

  let newsItem;
  if (data) newsItem = data[5];

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
    <Card sx={{ maxWidth: 450, boxShadow: 'none', borderRadius: '0' }}>
      <CardMedia
        sx={{ height: 300 }}
        src={imageUrl + newsItem?.image}
        image={imageUrl + newsItem?.image}
        title="green iguana"
      />
      {/* <CardMedia
        sx={{ height: 300 }}
        src={images.dummyNews1}
        image={images.dummyNews1}
        title="green iguana"
      /> */}
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
          onClick={() => navigate(`/details/${newsItem?.id}`)}
          sx={{
            fontWeight: '700',
            marginTop: '1rem',
            fontSize: '1.5rem',
            lineHeight: '1.8rem',
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
                width: '90%',
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
        <Text
          text={formattedDate}
          sx={{ color: '#9e9e9e', margin: '0.6rem 0' }}
        />
        <Text
          font={'Poppins'}
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
        <Box sx={{ margin: '1rem 0' }}>
          <Link>Read More</Link>
        </Box>
      </CardContent>
    </Card>
  );
}
