import { Box } from '@mui/material';
const AdvertisementLayout = ({ children }) => {
  return (
    <Box
      style={{
        color: '#00000080',
        backgroundColor: '#EEF3F7',
        fontFamily: '"Sora", sans-serif',
        scrollbarColor: 'transparent transparent',
        display: 'flex',
        position: 'relative',
        width: '100%',
        justifyContent: 'center',
        backgroundColor: '#f6f6f6'
      }}
    >
      <Box
        className="MobileViewRemove"
        sx={{
          width: '140px',
          height: '100vh',
          background: '#fff',
          position: 'sticky',
          top: 0,
        }}
      >
        <img
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open(
              'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
              '_blank'
            )
          }
          className="advertise_img"
          src="/Assets/ads/leftSideImage.jpg"
        />
      </Box>
      <Box sx={{ width: { xs: '100%', md: '84%' } }}>{children}</Box>
      <Box
        className="MobileViewRemove"
        sx={{
          width: '140px',
          height: '100vh',
          background: '#fff',
          position: 'sticky',
          top: 0,
        }}
      >
        <img
          style={{ cursor: 'pointer' }}
          onClick={() =>
            window.open(
              'https://www.theshilp.com/product-details/indian-army-strike-antique-bronze-gold',
              '_blank'
            )
          }
          className="advertise_img"
          src="/Assets/ads/rightSideImage.jpg"
        />
      </Box>
    </Box>
  );
};

export default AdvertisementLayout;
