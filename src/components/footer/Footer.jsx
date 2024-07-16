import { Box, Container, Divider, colors } from '@mui/material';
import Text from 'components/common/Text';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer({ data }) {
  const navigate = useNavigate();

  const footer = data;

  const footerDescrip = [
    'Terms of Use',
    'About the Parliamentary Fact ',
    'Privacy Policy',
    'Contact',
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
        <Box>
          <Box sx={{ display: 'flex', gap: '0.5rem', cursor: 'pointer' }}>
            <img src="/pfLogo.png" alt="logo" className="pfLogoFooter" />
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: '1rem',
              }}
            >
              <Box sx={{ display: 'flex' }} onClick={() => navigate('/')}>
                <Text
                  text={'Home'}
                  sx={{
                    padding: '0 0.4rem',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#162eb7',
                    },
                  }}
                />
              </Box>

              {footer?.map((val, index) => (
                <Box
                  sx={{ display: 'flex' }}
                  onClick={() =>
                    navigate(`/categories/${val?.url}`, {
                      state: { category: val?.category },
                    })
                  }
                  key={index}
                >
                  <Text
                    text={val?.category}
                    sx={{
                      padding: '0 0.4rem',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#162eb7',
                      },
                    }}
                  />
                </Box>
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
                'Copyright 2024 Parliamentary Fact. All rights reserved. The Parliamentary Fact is not responsible for the content of external sites.'
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
