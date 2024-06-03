import { Box } from '@mui/material';
import Text from 'components/common/Text';
import '../../App.css';
import React from 'react';

export default function DownloadAppSection() {
  const arr = [1,2,3,4,5,6,7,8,9,10,11];
  return (
    <Box
      sx={{
        overflowX: 'scroll',
        whiteSpace: 'nowrap',
        width: '100%',
        marginTop: '0.1rem',
        background: '#f7f7f7',
        '&::-webkit-scrollbar': {
          width: '0px',
          background: 'transparent',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'transparent',
        },
      }}
    >
      <Box
        className="DownlaodAppSection"
        sx={{
          background: '#f7f7f7',
          display: 'flex',
          gap: '1rem',
          // padding: '1rem 0',
          marginTop: '1rem',
          justifyContent: 'center',
        }}
      >
       {arr.map((val)=>(
        <Box key={val} sx={{display:'flex',flexDirection:'column',alignItems:'center'}}>
          <Box
            sx={{
              height: '60px',
              width: '60px',
              borderRadius: '500px',
              background: '#abb8c3',
              textAlign: 'center',
            }}
          ></Box>
          <Text
            text={'Download App'}
            sx={{
              maxWidth: '5rem',
              textAlign: 'center',
              color: '#767676',
              fontSize: '0.75rem',
              textWrap:'wrap'
            }}
          />
        </Box>
       ))} 
      </Box>
    </Box>
  );
}
