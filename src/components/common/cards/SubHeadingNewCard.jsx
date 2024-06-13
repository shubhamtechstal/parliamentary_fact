import { Box } from '@mui/material';
import Text from '../Text';
import images from 'helpers/images';
import '../../../App.css';
import { useNavigate } from 'react-router-dom';

export default function SubHeadingNewCard({ textWidth }) {
  const navigate = useNavigate()
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Box className="SubheadingImage">
        <img
          src={images.dummyNews2}
          style={{ height: '100%', width: '100%' }}
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
            text={'Coronavirus'}
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
            text={`Mango Bubble Tea Recipe: घर पर बनाकर पिएं ठंडी-ठंडी बबल टी, ये रही इसकी आसान रेसिपी`}
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
              sx={{ fontWeight: 700, fontSize: '0.7rem' }}
              text={'Stephen Romero'}
            ></Text>
            <Text
              sx={{ textAlign: 'center', color: '#767676', fontSize: '0.7rem' }}
              text={'19/03/2020 - 10:48'}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
