import React, { useEffect, useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Helmet } from 'react-helmet-async';

const DetailNewsIconBox = ({ title, description, imageUrl }) => {
  const [metaData, setMetaData] = useState({ title: '', description: '', imageUrl: '' });
  const newsLink = window.location.href; // The current URL of the news article

  useEffect(() => {
    // Ensure data is available before setting meta tags
    if (title && description && imageUrl) {
      // Clean up the description by removing unnecessary tags
      let cleanedDescription = description.replace(/<\/?[^>]+(>|$)/g, "");;
      const shortDescription = cleanedDescription.length > 200 ? cleanedDescription.substring(0, 200) + '...' : cleanedDescription;

      // Set the meta data once all required fields are available
      setMetaData({
        title,
        description: shortDescription,
        imageUrl
      });
    }
  }, [title, description, imageUrl]);

  const handleDirectShare = () => {
    if (navigator.share) {
      navigator.share({
        title: metaData.title || 'Check this out!',
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
    <>
      {metaData.title && metaData.description && metaData.imageUrl && (
        <Helmet>
          <title>{metaData.title}</title>
          {/* Open Graph Meta Tags */}
          <meta property="og:title" content={metaData.title} />
          <meta property="og:description" content={metaData.description} />
          <meta property="og:image" content={metaData.imageUrl} />
          <meta property="og:url" content={newsLink} />
          <meta property="og:type" content="article" />

          {/* Twitter Meta Tags */}
          <meta name="twitter:title" content={metaData.title} />
          <meta name="twitter:description" content={metaData.description} />
          <meta name="twitter:image" content={metaData.imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:url" content={newsLink} />
        </Helmet>
      )}
      
      <Box sx={{ display: 'flex', gap: '0.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {/* Direct Share Button */}
        <IconButton onClick={handleDirectShare}>
          <ShareIcon sx={{ fontSize: '1.7rem' }} />
        </IconButton>

        {/* Facebook Share Button */}
        <IconButton
          href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`}
          aria-label="Share on Facebook"
        >
          {/* <FacebookIcon sx={{ fontSize: '2rem', color: '#4267B2' }} /> */}
          <img src='/Assets/icons/facebook_new.svg'/>
        </IconButton>

        {/* Twitter Share Button */}
        <IconButton
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(newsLink)}&text=${encodeURIComponent(metaData.title)}`}
          aria-label="Share on Twitter"
        >
          <img src='/Assets/icons/twitterX_new.svg' style={{height:20}}/>
          
          {/* <XIcon sx={{ fontSize: '1.7rem', color: '#fff', background: '#000', padding: '0.3rem', borderRadius: '5px' }} /> */}

        </IconButton>

        {/* WhatsApp Share Button */}
        <IconButton href={`https://api.whatsapp.com/send?text=${encodeURIComponent(metaData.title)}%0A${encodeURIComponent(newsLink)}&url=${encodeURIComponent(metaData.imageUrl)}`} aria-label="Share on WhatsApp">
        <img src='/Assets/icons/whatsapp_new.svg' style={{height:30}}/>
        
          {/* <WhatsAppIcon sx={{ fontSize: '1.7rem', color: '#fff', background: '#25D366', padding: '0.1rem', borderRadius: '5px' }} /> */}
        </IconButton>

        {/* Instagram Share Button */}
        <IconButton
          href={`https://www.instagram.com/sharer/sharer.php?u=${encodeURIComponent(newsLink)}`}
          aria-label="Share on Instagram"
        >
          {/* <Box 
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
          </Box> */}
          <img src='/Assets/icons/instagram_new.svg' />

        </IconButton>
      </Box>
    </>
  );
};

export default DetailNewsIconBox;
