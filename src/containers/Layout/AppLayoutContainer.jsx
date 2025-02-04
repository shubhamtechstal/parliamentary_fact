import {   useEffect, useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../App.css';
import { Box, Stack,  } from '@mui/material';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import MobileHeader from 'components/header/MobileHeader';
import Text from 'components/common/Text';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';

const AppLayoutContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerSelectedIndex, setHeaderSelectedIndex] = useState(-1);
const navigate = useNavigate();
  const { data: headerCategoryApi, isLoading } =
    dashboardNewsApiAction.getHeaderCategories();
  return (
    <Stack
      className="MainContainer"
      sx={{ maxHeight: menuOpen ? '100vh' : '100vh',width:'100%',overflowY:'auto',overflowX:'hidden',scrollBehavior:'smooth'}}
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
                style={{ width: '100%', height: '100%',cursor:'pointer' }}
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
      <Box className="mobileHeader">
      <Box  sx={{
    display: 'flex',
    gap: '1.5rem',
    overflowX: 'auto', // or 'scroll' if you want to always show the scrollbar
    width: '100%',
    boxShadow: '0 2px 0px rgba(0, 0, 0, 0.1)',
    // marginBottom:'1rem',
    zIndex:1,
    position:'relative',
    padding: '0 1rem 0.3rem 1rem',
    '&::-webkit-scrollbar': {
      display: 'none', // Hides the scrollbar for webkit browsers (Chrome, Safari)
    },
    msOverflowStyle: 'none', // Hides scrollbar for IE and Edge
    scrollbarWidth: 'none', // Hides scrollbar for Firefox
  }}>
            <Box sx={{ display: 'flex' }} onClick={() => {navigate('/'),setHeaderSelectedIndex(-1)}}>
              <Text
                text={'Home'}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color:headerSelectedIndex===-1?"#162eb7":"",
                  '&:hover': {
                    color: '#162eb7',
                  },
                }}
              />
            </Box>
            {headerCategoryApi?.categories?.map((val, index) => (
              <Box
                sx={{ display: 'flex' }}
                onClick={() =>
                 { navigate(`/news/categories/${val?.url}`, {
                    state: { category: val?.category },
                  })
                  setHeaderSelectedIndex(index)
                }
                }
                key={index}
              >
                <Text
                  text={val?.category}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    textWrap:'nowrap',
                    color:headerSelectedIndex===index?"#162eb7":"",
                    '&:hover': {
                      color: '#162eb7',
                    },
                  }}
                />
                {val?.subhead && <ExpandMoreIcon />}
              </Box>
            ))}
          </Box>
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
