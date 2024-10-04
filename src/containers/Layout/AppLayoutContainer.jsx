import {  useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css';
import { Box, Stack, CircularProgress } from '@mui/material';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import MobileHeader from 'components/header/MobileHeader';
import Text from 'components/common/Text';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';

const AppLayoutContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSelectedIndex, setHeaderSelectedIndex] = useState(-1);

  const { data: headerCategoryApi, isLoading } =
    dashboardNewsApiAction.getHeaderCategories();

  if (isLoading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }
 
  return (
    <Stack
      className="MainContainer"
      sx={{ maxHeight: menuOpen ? '100vh' : '100%' }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          className="MobileViewRemove"
          sx={{
            width: '100%',
            background: '#f7f7f7',
            padding: '0.3rem 0 1.2rem 0',
            marginBottom: '0.5rem',
            textAlign: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundImage: 'url(Assets/circleblues.webp)',
            backgroundSize: 'fill',
            backgroundRepeat: 'repeat',
            backgroundPosition: 'centerTop',
          }}
        >
          <Box>
            <Text
              sx={{ color: '#767676', marginBottom: '5px', fontSize: '10px' }}
              text={'-Advertisement-'}
            />
            <Box sx={{ maxWidth: '728px', height: '90px' }}>
              <img
                onClick={() =>
                  window.open(
                    'https://www.theshilp.com/product-details/fortunate-maha-ganesha',
                    '_blank'
                  )
                }
                style={{ width: '100%', height: '100%' }}
                src="/Assets/ads/728x90ad.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="MobileViewRemove">
        <Header
          data={headerCategoryApi?.categories}
          setIndex={setHeaderSelectedIndex}
          selected={headerSelectedIndex}
        />
      </Box>
      <Box className="mobileHeader">
        <MobileHeader
          menuOpen={setMenuOpen}
          data={headerCategoryApi?.categories}
        />
      </Box>
      <Stack sx={{ overflow: 'visible' }}>
        <Outlet />
      </Stack>
      <Footer
        data={headerCategoryApi?.categories}
        setIndex={setHeaderSelectedIndex}
      />
    </Stack>
  );
};

export default AppLayoutContainer;
