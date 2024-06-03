import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import images from 'helpers/images';

export default function SideNewCards() {
  return (
    <Box sx={{ display: 'flex', gap: '1rem' }}>
      <Box
        sx={{
          width: '230px',
          height: '60px',
        }}
      >
        <img
          src={images.dummyNews5}
          style={{ height: '100%', width: '100%' }}
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
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
              lineHeight: '17px',
              cursor: 'pointer',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={`
            विकसित देश के सपने को तोड़ते हादसे, नियम-कानून उल्लंघन पर विचार का समय`}
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
              text={'19/03/2020 - 10:48'}
            ></Text>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
