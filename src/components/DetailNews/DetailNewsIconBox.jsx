import React from 'react'
// import Box from 'components/common/Box'
import Text from 'components/common/Text'
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import Divider from 'components/common/Divider';
import images from 'helpers/images';
import { Box } from '@mui/material';

const DetailNewsIconBox = () => {
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
          <Text
            sx={{ fontWeight: 700, fontSize: '0.7rem' }}
            text={'Stephen Romero'}
          />
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
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem' }}
                text={'Share'}
              />
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
              <img src={images.facebookWhite} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Facebook'}
              />
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
              <img src={images.twitterXWhite} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Twitter'}
              />
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
              <PinterestIcon sx={{ fontSize: '1rem', color: '#FFF' }} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'Pinterest'}
              />
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
              <WhatsAppIcon sx={{ fontSize: '1rem', color: '#FFF' }} />
              <Divider
                orientation="vertical"
                sx={{ height: '20px', backgroundColor: '#FFF' }}
              />
              <Text
                sx={{ fontWeight: 500, fontSize: '0.8rem', color: '#FFF' }}
                text={'WhatsApp'}
              />
            </Box>
          </Box>
        </Box>
    </>
  )
}

export default DetailNewsIconBox
