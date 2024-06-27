import { Box } from '@mui/material';
import Text from '../Text';
import { useNavigate } from 'react-router-dom';
import { appConstants } from 'helpers/constants/appConstants';

export default function SideNewCards({ data }) {
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
    <Box sx={{ display: 'flex', gap: '1rem', marginRight: '6px' }}>
      <Box>
        <img 
          src={imageUrl + newsItem?.news_description[0]?.image}
          image={imageUrl + newsItem?.news_description[0]?.image}
          style={{ height: '80px', width: '100px' }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: '500px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <Box>
          <Text
           onClick={() => navigate(`/details/${newsItem?.url}`,{state : {id:newsItem?.id}})}

            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
              lineHeight: '17px',
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
            text={newsItem ? (newsItem?.news_description[0]?.title ?? ' ') : ''  }
          />
          <Box
            sx={{
              display: 'flex',
              gap: '1rem',
              alignItems: 'center',
              marginTop: '0.2rem',
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
