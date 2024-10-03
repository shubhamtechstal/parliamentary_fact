import { Box, Divider } from '@mui/material';
import Text from 'components/common/Text';
import '../App.css';
import parse from 'html-react-parser';
import  { useEffect } from 'react';

export default function PrivacyPolicyContainer({data,heading}) {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <Box
      className="aboutContainer"
      sx={{ display: 'flex', margin: '2rem', gap: '2rem' }}
    >
      <Box
        className="aboutTabVal privacytabVal"
        sx={{
          alignSelf: 'flex-start',
          position: 'sticky',
          top: '2rem',
          marginLeft: '1rem',
          gap: '1rem',
        }}
      >
        <Box>
          <Text
            sx={{
              color: '#000',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
            text={heading}
          />
          <Divider sx={{ marginTop: '8px' }} />
        </Box>
      </Box>
      <div style={{ background: 'rgba(0, 0, 0, 0.12)', width: '2px' }}></div>
      <Box
        className="aboutContent"
        sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <Box sx={{alignSelf:'center',borderBottom:'2px solid rgba(0, 0, 0, 0.12)',padding:'0 1rem'}}>
        <Text sx={{fontWeight:'bold',fontSize:'1.8rem'}} text={heading}></Text>
        </Box>
        {data.map((val, index) => (
          <Text
            sx={{
              color: '#767676',
            }}
            text={parse(val)}
          />
        ))}
      </Box>
    </Box>
  );
}
