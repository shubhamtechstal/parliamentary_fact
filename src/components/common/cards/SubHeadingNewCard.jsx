import { Box } from '@mui/material';
import Text from '../Text';
import '../../../App.css';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';
import { appConstants } from 'helpers/constants/appConstants';

export default function SubHeadingNewCard({ textWidth, data }) {
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
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Box className="SubheadingImage">
        {/* <img
          src={imageUrl + newsItem?.news_description[0]?.image}
          image={imageUrl + newsItem?.news_description[0]?.image}
          className="subheadingCardImage"
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
            className="subheadingCardImage"
          ></iframe>
        ) : newsItem?.news_description[0]?.image ? (
          <img
            src={imageUrl + newsItem?.news_description[0].image}
            alt="News"
            className="subheadingCardImage"
          />
        ) : null}
      </Box>
      <Box
        sx={{
          maxWidth: textWidth ? textWidth : '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.5rem',
          // margin:'auto 0px'
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
            onClick={() =>
              navigate(`/details/${newsItem?.url}`, {
                state: { id: newsItem?.id },
              })
            }
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              display: '-webkit-box',
              WebkitLineClamp: 3,
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
              display: { xs: 'block', md: 'flex' },
              alignItems: 'center',
            }}
          >
            <Text
              sx={{ fontWeight: 700, fontSize: '0.7rem', marginRight: '5px' }}
              text={newsItem?.author}
            ></Text>
            <Text
              sx={{
                textAlign: { xs: 'left', md: 'center' },
                color: '#767676',
                fontSize: '0.7rem',
              }}
              text={formattedDate}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
