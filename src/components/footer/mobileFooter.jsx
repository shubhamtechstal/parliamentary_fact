import { Box, Divider, Menu, MenuItem } from '@mui/material';
import Text from 'components/common/Text';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';


export default function mobileFooter({ data,setIndex }) {
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
    { label: 'Terms of Use', link: '/terms-and-conditions' },
    { label: 'About the Parliamentary Fact', link: '/about-us' },
    { label: 'Privacy Policy', link: '/privacy-policy' },
    { label: 'Contact', link: '/contact-us' },
    { label: 'Advertise with us', link: '/advertise-with-us' },
    { label: 'Parliament Performance', link: '/parliament-performance' },
    { label: 'MPs Performance', link: '/mps-performance' },
    // { label: 'Do not share or sell my info', link: '' },
    // { label: 'Contact technical support', link: '' },
  ];

  return (
    <Box sx={{ width: '100%', background: '#cfcfcf', padding: '0 1rem' }}>
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
                <Box sx={{ display: 'flex' }} onClick={() => {navigate('/'),setIndex(-1)}}>
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
                    {  navigate(`/categories/${val?.url}`, {
                        state: { category: val?.category },
                      }),setIndex(index)}
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
                  {/* <Text
                    text={'More'}
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#162eb7',
                      },
                    }}
                  /> */}
                  <MoreVertIcon sx={{fontSize:'1.2rem'}}/>
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
          <Box display="flex" gap="10px">
            <Box>
              <Box
                display="flex"
                justifyContent="space-between"
                maxWidth={855}
                flexWrap="wrap-reverse"
                gap="5px"
              >
                <Box className="footerCategory">
                  {footerDescrip.map((val) => (
                    <Text
                      onClick={() => {navigate(val.link),setIndex(-2)}}
                      key={val.label}
                      text={val.label}
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
                <Box display="flex" gap="8px">
                  <FacebookIcon
                  onClick={()=>window.location.href="https://www.facebook.com/profile.php?id=100088959852699"}
                    sx={{
                      fontSize: '24px',
                      color: '#4267B2',
                      cursor: 'pointer',
                    }}
                  />
                  <XIcon
                  onClick={()=>window.location.href="https://x.com/parliamentaryf7"}
                    sx={{
                      fontSize: '20px',
                      color: '#fff',
                      background: '#000',
                      padding: '0.3rem',
                      borderRadius: '5px',
                      marginTop: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <InstagramIcon
                  onClick={()=>window.location.href="https://www.instagram.com/parliamentaryfacts/?hl=en"}
                    sx={{
                      fontSize: '20px',
                      color: '#fff',
                      background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)', 
                      padding: '0.1rem',
                      borderRadius: '5px',
                      marginTop: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <YouTubeIcon
                  onClick={()=>window.location.href="https://www.youtube.com/channel/UCmiD-5GplSufIcKYQ-fHNUQ"}
                    sx={{
                      background: '#fff',
                      color: '#FF0000',
                      fontSize: '20px',
                      borderRadius: '5px',
                      marginTop: '3px',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </Box>
              <Box display="flex" gap="15px" flexWrap="wrap-reverse">
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
                </Box>
                <Box
                  sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    // marginTop: '1rem',
                    maxWidth: '250px',
                  }}
                >
                  <Text
                    text={'Head Office and Mailing Address :'}
                    sx={{
                      fontSize: '0.7rem',
                      fontWeight: 500,
                      marginRight: '5px',
                    }}
                  />
                  <Text
                    sx={{
                      fontSize: '10px',
                    }}
                    text={
                      'Raygain Technology Pvt. Ltd B-3/17, Block B 3, Safdarjung Enclave,New Delhi, Delhi 110029'
                    }
                  />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
