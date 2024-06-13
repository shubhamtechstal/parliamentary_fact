import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';

export default function BottomSubHeadingCards({ type }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Box
        sx={{
          width: type ? '200px' : '240px',
          height: type ? '140px' : '160px',
        }}
      >
        <img
          src={images.dummyNews3}
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
            text={'Cars'}
          ></Text>
        </Box>
        <Box>
          <Text onClick={()=>navigate('/details')}
            sx={{
              fontSize: '0.9rem',
              fontWeight: 500,
              cursor: 'pointer',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={`ऐसा कौन करता है! BMW वाले लूट ले गए Audi, रोका फिर लाठी लेकर गाड़ी से उतरे और कर डाला लाल-पीला`}
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
