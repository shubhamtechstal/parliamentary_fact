import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';

export default function HeadingNewCards() {
  return (
    <Box sx={{display:'flex',gap:'1rem'}}>
            <Box
            component="video"
            src="/public/Assets/Image.png"
            controls
            sx={{
                width: '400px', 
                height: '250px',}}
        />
      <Box sx={{maxWidth:'350px',display:'flex',flexDirection:'column',gap:'1rem',justifyContent:'center'}}>
        <Box>
        <Text sx={{fontSize:'1.5rem',fontWeight:700}}
          text={'Watch: 10 Days Later: What Italians Wish They Had Known'}
        />
        <Box sx={{ display: 'flex', gap: '0.5rem',alignItems:'center' }}>
          <Text    sx={{
            background: '#0d0b52',
            color: '#FFF',
            padding: '0.5rem',
            fontSize: '0.625rem',
            fontWeight: 700,
          }} text={'Video'}></Text>
          <Text  sx={{ fontWeight: 700,fontSize: '1rem'}}
          text={'Stephen Romero'}></Text>
          <Text  sx={{textAlign:'center',color:'#767676',fontSize:'0.75rem'}} text={'19/03/2020 - 10:48'}></Text>
        </Box>
        </Box>
        <Text  sx={{color:'#767676',fontSize:'0.75rem'}}
          text={
            'A supermaket worker was spat at by a customer attempting to stockpile pot noodles while another was told : "I hope you get the virus ellipseeeeee"'
          }
        />
      </Box>
    </Box>
  );
}
