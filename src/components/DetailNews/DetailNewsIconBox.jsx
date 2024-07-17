import React, { useState } from 'react';
import Text from 'components/common/Text';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PinterestIcon from '@mui/icons-material/Pinterest';
import images from 'helpers/images';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import CloseIcon from '@mui/icons-material/Close';
import Divider from 'components/common/Divider';
import { Box, Modal, Typography, IconButton } from '@mui/material';

const DetailNewsIconBox = () => {
  const [open, setOpen] = useState(false);
  const newsLink = 'https://example.com/news/123';

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
            onClick={handleOpen}
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
            <img src={images.facebookWhite} alt="Facebook" />
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
            <img src={images.twitterXWhite} alt="Twitter" />
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="share-modal-title"
        aria-describedby="share-modal-description"
      >
        <Box className="shareIconBox">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'end',
            }}
          >
            <IconButton sx={{ color: '#000' }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '1rem',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '600',
              }}
              id="share-modal-title"
              variant="h6"
              component="h2"
            >
              Share this news :
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
            }}
          >
            <IconButton
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <FacebookIcon sx={{ fontSize: '2rem', color: '#516eab' }} />
            </IconButton>
            <IconButton
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <TwitterIcon sx={{ fontSize: '2rem', color: '#29c5f6' }} />
            </IconButton>
            <IconButton
              href={`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <PinterestIcon sx={{ fontSize: '2rem', color: '#ca212a' }} />
            </IconButton>
            <IconButton
              href={`https://api.whatsapp.com/send?text=${encodeURIComponent(newsLink)}`}
              target="_blank"
            >
              <WhatsAppIcon sx={{ fontSize: '2rem', color: '#7bbf6a' }} />
            </IconButton>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DetailNewsIconBox;
