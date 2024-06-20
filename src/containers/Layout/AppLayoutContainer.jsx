import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../../App.css';
import { Box, Stack } from '@mui/material';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import MobileHeader from 'components/header/MobileHeader';
import Text from 'components/common/Text';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';

const AppLayoutContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const { data: headerCategoryApi } =
    dashboardNewsApiAction.getHeaderCategories();
  // console.log(headerCategoryApi,'headerCategoryApi');

  return (
    <Stack
      className="MainContainer"
      sx={{ maxHeight: menuOpen ? '100vh' : '100%' }}
    >
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
        <Box
          className="MobileViewRemove"
          sx={{
            width: '92%',
            background: '#f7f7f7',
            padding: '0.3rem 0 1.2rem 0',
            marginBottom: '1rem',
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
                style={{ width: '100%', height: '100%' }}
                src="/advertise.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className="MobileViewRemove">
        <Header data={headerCategoryApi?.categories} />
      </Box>
      <Box className="mobileHeader">
        <MobileHeader menuOpen={setMenuOpen} data={headerCategoryApi?.categories} />
      </Box>
      <Stack sx={{ overflow: 'visible' }}>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AppLayoutContainer;
