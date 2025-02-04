import React from 'react';
import Card from '@mui/material/Card';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, Rating, Stack } from '@mui/material';
import Text from '../Text';

export default function ParliamentPerformanceCard() {
  return (
    <>
        <Card sx={{ borderRadius: '20px', padding: '0.5rem',minWidth:'200px' }}>
          <Stack  direction={'row'} justifyContent={'space-between'}>
            <Box sx={{ display: 'flex', gap: '0.2rem' }}>
              <Box
                sx={{
                  background: 'orange',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  borderRadius: '50%',
                  fontSize:'0.8rem',
                  fontWeight:'600',
                  padding:'0 0.5rem'
                }}
              >
                001
              </Box>
              <Box>
              <Text
                text={'National Rank:'}
                sx={{ color: 'orange',  fontWeight:'600',fontSize: '0.8rem',display:'flex',alignItems:'center' }}
                />
              <Text
                text={'Att + qs + Dbt + Pmb + Mpf'}
                sx={{ color: 'grey',  fontWeight:'600',fontSize: '0.6rem',display:'flex',alignItems:'center' }}
                />
                </Box>
            </Box>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </Stack>

          <Text
                text={'Neeraj Ram Mandola'}
                sx={{color:'grey',width:'150px',marginTop:'0.5rem',   fontWeight:'600',fontSize: '0.9rem',display:'flex',alignItems:'center' }}
              />
          <Text
                text={'Choudheer Mandola'}
                sx={{  color:'grey',  fontWeight:'600',fontSize: '0.9rem',display:'flex',alignItems:'center' }}
              />
              <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',width:'100%',marginTop:'0.5rem'}}>
<Box>
                  <Text
                      text={'52.9%'}
                      sx={{color:'orange',fontWeight:500,fontSize: '2.2rem',marginTop:'0.5rem',display:'flex',alignItems:'center',lineHeight:1 }}
                      />
                  <Text
                      text={'Performance'}
                      sx={{color:'#4c4a4a',fontWeight:600,fontSize: '0.7rem',display:'flex',alignItems:'center' }}
                      />
                      </Box>
          <Avatar
            src={'Assets/dummy-profile-image.png'}
            sx={{ width: 70, height: 70, mt: 1 }}
          />
                </Box>
        </Card>
    </>
  );
}
