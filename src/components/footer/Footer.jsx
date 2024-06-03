import { Box, Container, Divider, colors } from '@mui/material';
import Text from 'components/common/Text';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  const footer = [
    'Home',
    'News',
    'Sports',
    'Business',
    'Innovation',
    'Culture',
    'Travel',
    'Earth',
    'Video',
    'Live',
    'Audio',
    'Weather',
    'BBC Shop',
  ];
  const footerDescrip = [
    'Terms of Use',
    'About the BBC',
    'Privacy Policy',
    'Cookies',
    'Accesibility Help',
    'Contact the BBC',
    'Advertise with us',
    'Do not share or sell my info',
    'Contact technical support',
  ];

  return (
    <Box sx={{ width: '100%', background: '#bdbdbd', padding: '0 1rem' }}>
      <Box
        sx={{
          margin: '2rem 0',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{}}>
          <Box sx={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
            <Text
              text={'B'}
              sx={{
                color: '#abb8c3',
                background: '#000',
                padding: '0 0.4rem',
                height: '30px',
                width: '30px',
                textAlign: 'center',
                fontSize: '1.3rem',
                fontWeight: 800,
              }}
            />
            <Text
              text={'B'}
              sx={{
                color: '#abb8c3',
                background: '#000',
                padding: '0 0.4rem',
                height: '30px',
                width: '30px',
                textAlign: 'center',
                fontSize: '1.3rem',
                fontWeight: 800,
              }}
            />
            <Text
              text={'C'}
              sx={{
                color: '#abb8c3',
                background: '#000',
                padding: '0 0.4rem',
                height: '30px',
                width: '30px',
                textAlign: 'center',
                fontSize: '1.3rem',
                fontWeight: 800,
              }}
            />
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1rem',
                marginTop: '2rem',
              }}
            >
              {footer.map((val) => (
                <Text
                  key={val}
                  text={val}
                  sx={{
                    //   background: '#000',
                    padding: '0 0.4rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#162eb7',
                    },
                  }}
                />
              ))}
            </Box>
          </Box>
          <Divider sx={{ marginTop: '4rem' }} />
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            {footerDescrip.map((val) => (
              <Text
                key={val}
                text={val}
                sx={{
                  padding: '0 0.4rem',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#162eb7',
                  },
                }}
              />
            ))}
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              marginTop: '1rem',
            }}
          >
            <Text
              text={
                'Copyright 2024 BBC. All rights reserved. The BBC is not responsible for the content of external sites.'
              }
              sx={{
                padding: '0 0.4rem',
                fontSize: '0.7rem',
                fontWeight: 500,
              }}
            />
            <Text
              sx={{
                fontWeight: 800,
                fontSize: '0.8rem',
                cursor: 'pointer',
                '&:hover': {
                  color: '#162eb7',
                },
              }}
              text={'Read about our approach to external linking'}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
