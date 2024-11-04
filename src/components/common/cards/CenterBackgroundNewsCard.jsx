import { Box } from '@mui/material';
import Text from '../Text';
import { useNavigate } from 'react-router-dom';
import { appConstants } from 'helpers/constants/appConstants';
import './NewsCard.css';

export default function CenterBackgroudNewsCard({ data }) {
  const navigate = useNavigate();

  let newsItem;
  if (data) newsItem = data;

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
    <Box  onClick={() =>
      navigate(`/news-and-videos/details/${newsItem?.sub_category.toLowerCase().replace(/\s+/g, '-')}/${newsItem?.url} `, {
        state: { id: newsItem?.id },
      })
    }
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: {xs:'1rem',md:'0.5rem'},
        maxWidth: { md: '250px', xs: '100%' },
        minWidth:"160px",
        cursor:'pointer'
      }}
    >
      <Box className="centerCardBox" sx={{ width: '100%',overflow:'hidden' }}>
        {/* <img
          src={imageUrl + newsItem?.news_description[0]?.image}
          image={imageUrl + newsItem?.news_description[0]?.image}
          className='shortnews_card_img'
        /> */}
        {newsItem?.video ? (
          <iframe
            width="100%"
            height="100%"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            src={newsItem?.video}
            className='shortnews_card_img'
          ></iframe>
        ) : newsItem?.news_description[0]?.image ? (
          <img
            src={imageUrl + newsItem?.news_description[0].image}
            alt="News"
            className='shortnews_card_img'
            style={{objectFit:'cover' }}
          />
        ) : null}
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
              fontWeight: 500,
            }}
            text={newsItem?.sub_category}
          ></Text>
        </Box>
        <Box>
          <Text
            onClick={() =>
              navigate(`/news-and-videos/details/${newsItem?.sub_category.toLowerCase().replace(/\s+/g, '-')}/${newsItem?.url} `, {
                state: { id: newsItem?.id },
              })
            }
            // font={'Roboto'}
            sx={{
              fontSize: {xs:'0.9rem',md:'0.8rem'},
              fontWeight: {xs:600,md:500},
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: {xs:4,md:3},
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              position: 'relative',
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
            text={newsItem ? newsItem?.news_description[0]?.title ?? ' ' : ''}
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
