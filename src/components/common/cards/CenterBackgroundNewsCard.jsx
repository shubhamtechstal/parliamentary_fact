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
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', maxWidth:{md:'250px',xs:'100%'} }}>
      <Box className="centercard_box" sx={{width:'100%'}}>
        <img
          src={imageUrl + newsItem?.news_description[0]?.image}
          image={imageUrl + newsItem?.news_description[0]?.image}
          className='shortnews_card_img'
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
            onClick={() =>
              navigate(`/details/${newsItem?.url}`, {
                state: { id: newsItem?.id },
              })
            }
            // font={'Roboto'}
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
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
