import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import images from 'helpers/images';

export default function CenterBackgroudNewsCard() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Box
        sx={{
          width: '200px',
          height: '120px',
        }}
      >
        <img
          src={images.dummyNews4}
          style={{ height: '100%', width: '100%' }}
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
            text={'Coronavirus'}
          ></Text>
        </Box>
        <Box>
          <Text
            font={'Roboto'}
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
              cursor: 'pointer',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={`APSC JE Recruitment 2024: लोक निर्माण विभाग में 80 जूनियर इंजीनियर की भर्ती, आवेदन 5 जून तक`}
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
              text={'19/03/2020 - 10:48'}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
