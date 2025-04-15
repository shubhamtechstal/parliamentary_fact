import { Box } from "@mui/material";

const AdvertiseSection = () => {
  return (
    <>
      <Box
        sx={{
          background: 'white',
          display: { xs: 'none', md: 'flex' },
          justifyContent: 'center',
          padding: '1rem',          
        }}
      >
        <img src="/advertise.jpg" />
      </Box>
      <Box
        sx={{
          background: 'white',
          display: { xs: 'flex', md: 'none' },
          justifyContent: 'center',
          padding: '1rem',          
        }}
      >
        <img style={{ width: '100%' }} src="/advertise.jpg" />
      </Box>
    </>
  );
};
export default AdvertiseSection;