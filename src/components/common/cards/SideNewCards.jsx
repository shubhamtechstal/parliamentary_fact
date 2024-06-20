import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';

export default function SideNewCards({ data }) {
  const navigate = useNavigate();
  let newsItem;
  if (data) newsItem = data[1];
  return (
    <Box sx={{ display: 'flex', gap: '1rem',marginRight:'6px' }}>
      <Box
        // sx={{
        //   width: '230px',
        //   height: '60px',
        // }}
      >
        <img
          src={images.dummyNews5}
          // src={data.image || 'path/to/default-image.jpg'}
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
            onClick={() => navigate('/details')}
            sx={{
              fontSize: '0.8rem',
              fontWeight: 500,
              lineHeight: '17px',
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
              gap: '1rem',
              alignItems: 'center',
              marginTop: '0.2rem',
            }}
          >
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
