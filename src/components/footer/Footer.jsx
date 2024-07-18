import { Box, Divider, Menu, MenuItem } from '@mui/material';
import Text from 'components/common/Text';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Footer({ data }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
          <Box
            sx={{ display: 'flex', justifyContent: 'left', cursor: 'pointer' }}
          >
            <img src="/pfLogo.png" alt="logo" className="pfLogoFooter" />
          </Box>
          <Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'left',
                marginTop: '1rem',
              }}
            >
              <Box className="footerCategory">
                <Box sx={{ display: 'flex' }} onClick={() => navigate('/')}>
                  <Text
                    text={'Home'}
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#162eb7',
                      },
                    }}
                  />
                </Box>
                {footer?.slice(0, 6).map((val, index) => (
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
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#162eb7',
                        },
                      }}
                    />
                    {val?.subhead && <ExpandMoreIcon />}
                  </Box>
                ))}
                {footer?.length > 6 && (
                  <Box
                    sx={{ display: 'flex', cursor: 'pointer' }}
                    onClick={handleMoreClick}
                  >
                    <Text
                      text={'More :'}
                      sx={{
                        fontSize: '0.9rem',
                        fontWeight: 700,
                        cursor: 'pointer',
                        '&:hover': {
                          color: '#162eb7',
                        },
                      }}
                    />
                  </Box>
                )}
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {footer?.slice(6).map((val, index) => (
                  <MenuItem
                    sx={{ fontSize: '12px' }}
                    onClick={() => {
                      navigate(`/categories/${val?.url}`, {
                        state: { category: val?.category },
                      });
                      handleClose();
                    }}
                    key={index}
                  >
                    {val?.category}
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Box>
          <Divider sx={{ marginTop: '2rem', marginBottom: '2rem' }} />
          <Box className="footerCategory">
            {footerDescrip.map((val) => (
              <Text
                key={val}
                text={val}
                sx={{
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
