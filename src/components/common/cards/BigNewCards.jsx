import { Box, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import Text from '../Text';
import { Link } from 'react-router-dom';
import images from 'helpers/images';

export default function BigNewCards() {
  return (
    <Card sx={{ maxWidth: 450, boxShadow: 'none', borderRadius: '0' }}>
      <CardMedia
        sx={{ height: 300 }}
        src={images.dummyNews1}
        image={images.dummyNews1}
        title="green iguana"
      />
      <CardContent sx={{ margin: 0, padding: '1rem 0rem' }}>
        <Box sx={{ display: 'flex' }}>
          <Text
            sx={{
              background: '#0d0b52',
              color: '#FFF',
              padding: '0.2rem 0.5rem',
              fontSize: '0.625rem',
              fontWeight: 700,
            }}
            text={'Coronavirus'}
          ></Text>
        </Box>
        <Text
          sx={{
            fontWeight: '600',
            marginTop: '1rem',
            fontSize: '1.5rem',
            lineHeight: '1.8rem',
            cursor: 'pointer',
            '&:hover': {
              color: '#162eb7',
            },
          }}
          text={`'PoK हमारा नहीं है', Pakistan का बड़ा कबूलनामा! इस्लामाबाद हाईकोर्ट ने पूछा- फिर विदेशी जमीन पर क्यों तैनात किए सैनिक?`}
        />

        <Text
          text={' 22/05/2024'}
          sx={{ color: '#9e9e9e', margin: '0.6rem 0' }}
        />
        <Text
          font={'Roboto'}
          sx={{ fontSize: '0.8rem' }}
          text={`Pakistan big confession on PoK इस्लामाबाद हाईकोर्ट में पाकिस्तान के एक सरकारी वकील ने ही चौंकाने वाला दावा किया है। पाकिस्तान के कब्जे वाले कश्मीर (पीओके) को पाकिस्तान आजाद कश्मीर कहता है जिसपर अब उसने बड़ा बयान दिया है। भारत इसे अपना अभिन्न अंग मानता है। अब पाकिस्तान ने खुद माना है कि पीओके उसके क्षेत्राधिकार में नहीं है और विदेशी जमीन है।`}
        />
        <Box sx={{ margin: '1rem 0' }}>
          <Link>Know More</Link>
        </Box>
      </CardContent>
    </Card>
  );
}
