import React from 'react';
import { Box, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';

const DetailNewsIconBox = ({ title }) => {
  const newsLink = window.location.href;
  const handleDirectShare = () => {
    if (navigator.share) {
      navigator.share({
        title: title || 'Check this out!',
        text: 'Check out this amazing news article!',
        url: newsLink,
      })
      .then(() => console.log('Sharing successful'))
      .catch((error) => console.error('Sharing failed', error));
    } else {
      alert('Sharing is not supported on this browser.');
    }
  };
  return (
    <Box sx={{ display: 'flex', gap: '0.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <IconButton
        onClick={handleDirectShare}
      >
         <ShareIcon sx={{ fontSize: '1.7rem' }} />
      </IconButton>
      <IconButton
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`}
        target="_blank"
        aria-label="Share on Facebook"
      >
        <FacebookIcon sx={{ fontSize: '2rem', color: '#4267B2'  }} />
      </IconButton>
      
      <IconButton
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(newsLink)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        aria-label="Share on Twitter"
      >
        <XIcon sx={{ fontSize: '1.7rem', color: '#fff',background:'#000',padding:'0.3rem',borderRadius:'5px' }} />
      </IconButton>

      <IconButton
        href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(newsLink)}`}
        target="_blank"
        aria-label="Share on WhatsApp"
      >
        <WhatsAppIcon sx={{ fontSize: '1.7rem',color: '#fff',background:'#25D366',padding:'0.1rem',borderRadius:'5px' }} />
      </IconButton>

      <IconButton
  href={`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`}
  target="_blank"
  aria-label="Share on Instagram"
>
<Box 
    sx={{ 
      width: '1.8rem', 
      height: '1.8rem', 
      background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)', 
      borderRadius: '5px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}
  >
    <InstagramIcon sx={{ fontSize: '1.7rem', color: 'white' }} />
  </Box>
</IconButton>

    </Box>
  );
};

export default DetailNewsIconBox;
