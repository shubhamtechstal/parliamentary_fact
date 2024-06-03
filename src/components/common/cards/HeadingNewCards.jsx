import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';
import '../../../App.css';

export default function HeadingNewCards() {
  return (
    <Box
      className="headCard"
      sx={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}
    >
      <Box
        // component="video"
        // src="/Assets/Image.png"
        // controls
        sx={{
          width: '100%',
          maxWidth: '300px',
          maxHeight: '240px',
        }}
      >
        <iframe
          width="100%"
          height="100%"
          src={'https://www.youtube.com/embed/mcJvi7GVpy0?si=MCATw8rJ5DwH93uk'}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </Box>
      <Box
        sx={{
          maxWidth: '350px',
          maxHeight: '250px',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          justifyContent: 'center',
        }}
      >
        <Box>
          <Text
            sx={{
              fontSize: '1.5rem',
              fontWeight: 700,
              cursor: 'pointer',
              '&:hover': {
                color: '#162eb7',
              },
            }}
            text={
              'Lok Sabha Election 2024: आपके राज्‍य में किस सीट पर कब होगा मतदान; यहां देखिए चुनावी शेड्यूल'
            }
          />
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Text
              sx={{
                background: '#0d0b52',
                color: '#FFF',
                padding: '0.1rem 0.5rem',
                fontSize: '0.625rem',
                fontWeight: 700,
              }}
              text={'Video'}
            ></Text>
            <Text
              sx={{ fontWeight: 700, fontSize: '0.7rem' }}
              text={'दीप्ति मिश्रा, नई दिल्‍ली'}
            ></Text>
            <Text
              sx={{
                textAlign: 'center',
                color: '#767676',
                fontSize: '0.75rem',
              }}
              text={'19/03/2024 - 10:48'}
            ></Text>
          </Box>
        </Box>
        <Text
          font={'Roboto'}
          sx={{
            color: '#767676',
            fontSize: '0.75rem',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
          }}
          text={
            'देश में 18वीं लोकसभा के लिए सात चरणों में चुनाव हो रहा है। पहले चरण में 21 राज्‍यों की 102 सीटों पर मतदान 19 अप्रैल को हुआ। दूसरे चरण में 13 राज्‍यों की 89 लोकसभा सीट पर 26 अप्रैल को चुनाव होना है।'
          }
        />
      </Box>
    </Box>
  );
}
