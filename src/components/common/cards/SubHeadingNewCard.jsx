import { Box } from '@mui/material';
import Text from '../Text';
import images from 'helpers/images';
import '../../../App.css';
import { useNavigate } from 'react-router-dom';
import './NewsCard.css';

export default function SubHeadingNewCard({ textWidth,data }) {
  const navigate = useNavigate()

  let newsItem;
  if (data) newsItem = data[2];

  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Box className="SubheadingImage">
        <img
          src={images.dummyNews2}
          className='Subheading_card_img'
        />
      </Box>
      <Box
        sx={{
          maxWidth: textWidth ? textWidth : '500px',
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
          <Text onClick={()=>navigate('/details')}
            sx={{
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={newsItem?.title}
          />
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '0.5rem',
            }}
          >
            <Text
              sx={{ fontWeight: 700, fontSize: '0.7rem' }}
              text={newsItem?.author}
            ></Text>
            <Text
              sx={{ textAlign: 'center', color: '#767676', fontSize: '0.7rem' }}
              text={newsItem?.date}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
