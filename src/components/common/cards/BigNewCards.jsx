import { Box, Card, CardContent, CardMedia } from '@mui/material';
import React from 'react';
import Text from '../Text';
import { Link } from 'react-router-dom';
import images from 'helpers/images';

export default function BigNewCards() {
  return (
    <Card sx={{ maxWidth: 500,boxShadow:'none',borderRadius:'0' }}>
      <CardMedia
        sx={{ height: 300 }}
        src={images.dummy}
        image={images.dummy}
        title="green iguana"
      />
      <CardContent sx={{margin:0,padding:'1rem 0rem'}}>
        <Box sx={{display:'flex'}}>
      <Text    sx={{
            background: '#0d0b52',
            color: '#FFF',
            padding: '0.5rem',
            fontSize: '0.625rem',
            fontWeight: 700,
          }} text={'Coronavirus'}></Text>
          </Box>
        <Text
          sx={{ fontWeight: '600',marginTop:'1rem' }}
          text={`The fortunes of war along Myanmar's border with Thailnd have been
        turn-ing with bewildering speed.`}
        />

        <Text text={' 22/10/2023'} sx={{ color: '#9e9e9e' }} />
        <Text
          text={`The fortunes of war along Myanmar's border with Thailnd have been
        turn-ing with bewildering speed. The Fortunes of war along Myanmar's
        border with Thailand have been turning with bewildering speed.`}
        />

        <Link>Know More</Link>
      </CardContent>
    </Card>
  );
}
