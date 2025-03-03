import { Box } from '@mui/material';
import React from 'react';
import Text from '../Text';

export default function TopQuestionPerformerCard({ val }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'flex-start',
        gap: '0.5rem',
        width: '35%',
      }}
    >
      <Box
        sx={{
          background: 'grey',
          minHeight: { xs: '90px', md: '110px' },
          height: { xs: '90px', md: '110px' },
          minWidth: { xs: '90px', md: '110px' },
          width: { xs: '90px', md: '110px' },
          borderRadius: '50%',
          overflow: 'hidden',
        }}
      >
        <img
          src={val?.image}
          alt={val.member}
          style={{ height: '100%', width: '100%' }}
        />
      </Box>
      <Box sx={{ marginTop: '10px' }}>
        <Text
         font={'Sora'}
          sx={{
            color: '#FF936F',
            fontSize: '1.8rem',
            fontWeight: 600,
            lineHeight: 1,
            
          }}
          text={`${val?.performance_percentage}%`}
        />
        <Text
         font={'Sora'}
          sx={{ color: '#656565', fontSize: '0.9rem', fontWeight: 600,lineHeight:1.3,height:'56px'  }}
          text={val?.member?.toUpperCase()}
        />
        {/* <Text
            sx={{ color: '#6e6d6d', fontSize: '0.8rem', fontWeight: 600 }}
            text={`GOVIT`}
          /> */}
        <Text
         font={'Sora'}
          sx={{ color: 'grey', fontSize: '0.75rem', fontWeight: 500,}}
          text={val?.party_full_name}
        />
        <Text
         font={'Sora'}
          sx={{ color: 'grey', fontSize: '0.75rem', fontWeight: 500 }}
          text={val?.state_name}
        />
      </Box>
    </Box>
  );
}
