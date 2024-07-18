import React, { useState } from 'react';
import Text from 'components/common/Text';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import images from 'helpers/images';
import Divider from 'components/common/Divider';
import { Box,IconButton } from '@mui/material';

const DetailNewsIconBox = () => {
  const newsLink = 'https://example.com/news/123';

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              border: '1px solid #e9e9e9',
              padding: '0.5rem 0.5rem',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
            }}
          >
            <ShareIcon sx={{ fontSize: '0.8rem' }} />
            <Divider
              orientation="vertical"
              sx={{ height: '20px', backgroundColor: '#FFF' }}
            />
            <Text sx={{ fontWeight: 500, fontSize: '0.8rem' }} text={'Share'} />
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: '#516eab',
              border: '1px solid #e9e9e9',
              padding: '0.5rem 0.5rem',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <IconButton
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <img src={images.facebookWhite} alt="Facebook" />
              <Divider
                orientation="vertical"
                sx={{
                  height: '20px',
                  backgroundColor: '#FFF',
                  margin: '0px 8px 0px 8px',
                }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Facebook'}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: '#29c5f6',
              border: '1px solid #e9e9e9',
              padding: '0.5rem 0.5rem',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <IconButton
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <img src={images.twitterXWhite} alt="Twitter" />
              <Divider
                orientation="vertical"
                sx={{
                  height: '20px',
                  backgroundColor: '#FFF',
                  margin: '0px 8px 0px 8px',
                }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Twitter'}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: '#ca212a',
              border: '1px solid #e9e9e9',
              padding: '0.5rem 0.5rem',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <IconButton
              href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <PinterestIcon sx={{ fontSize: '1rem', color: '#FFF' }} />
              <Divider
                orientation="vertical"
                sx={{
                  height: '20px',
                  backgroundColor: '#FFF',
                  margin: '0px 8px 0px 8px',
                }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Pinterest'}
              />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              background: '#7bbf6a',
              border: '1px solid #e9e9e9',
              padding: '0.5rem 0.5rem',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              '&:hover': {
                opacity: 0.8,
              },
            }}
          >
            <IconButton
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <WhatsAppIcon sx={{ fontSize: '1rem', color: '#FFF' }} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF',margin:'0px 8px 0px 8px' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'WhatsApp'}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default DetailNewsIconBox;
