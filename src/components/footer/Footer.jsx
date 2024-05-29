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
    <Box sx={{ width: '100%', height: '400px', background: '#abb8c3' }}>
      <Container sx={{ marginTop: '2rem' }}>
        <Box sx={{ display: 'flex', gap: '0.3rem' }}>
          <Text
            text={'B'}
            sx={{
              color: '#abb8c3',
              background: '#000',
              padding: '0 0.4rem',
              fontSize: '2rem',
              fontWeight: 800,
            }}
          />
          <Text
            text={'B'}
            sx={{
              color: '#abb8c3',
              background: '#000',
              padding: '0 0.4rem',
              fontSize: '2rem',
              fontWeight: 800,
            }}
          />
          <Text
            text={'C'}
            sx={{
              color: '#abb8c3',
              background: '#000',
              padding: '0 0.4rem',
              fontSize: '2rem',
              fontWeight: 800,
            }}
          />
        </Box>
        <Box >
            <Box sx={{display:'flex',gap:'1rem',marginTop:'2rem'}}>
          {footer.map((val) => (
            <Text key={val}
            text={val}
            sx={{
             
            //   background: '#000',
              padding: '0 0.4rem',
              fontSize: '1rem',
              fontWeight: 700,
            }}
          />
          ))}
        </Box>
        </Box>
        <Divider sx={{marginTop:'6rem'}}/>
        <Box sx={{display:'flex',gap:'1rem',marginTop:'1rem'}}>
            {
        footerDescrip.map((val)=>(
<Text key={val}
            text={val}
            sx={{
              padding: '0 0.4rem',
              fontSize: '0.7rem',
              fontWeight: 500,
            }}
          />
        ))}
        </Box>

        <Box sx={{display:'flex',alignItems:'center'}}>
        <Text 
            text={'Copyright 2024 BBC. All rights reserved. The BBC is not responsible for the content of external sites.'}
            sx={{
              padding: '0 0.4rem',
              fontSize: '0.7rem',
              fontWeight: 500,
            }}
          />
          <Text sx={{fontWeight: 800,fontSize: '0.8rem',curser:'pointer'}}
          text={'Read about our approach to external linking'}
          />
        </Box>
      </Container>
    </Box>
  );
}
