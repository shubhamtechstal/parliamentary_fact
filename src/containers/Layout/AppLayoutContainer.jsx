import { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import '../../App.css';
import { Box, Container, Stack } from '@mui/material';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import MobileHeader from 'components/header/MobileHeader';
import Text from 'components/common/Text';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pageNavigtionLinks = [
  {
    title: 'Home',
    pageUrl: '/',
  },
  {
    title: 'Parliament Performance',
    pageUrl: '/parliament-performance/lok-sabha-performance',
  },
  {
    title: 'MPs Parliament Performance',
    pageUrl: '/mps-performance',
  },
  {
    title: 'MPs Constituency Performance',
    pageUrl: '/mps-constituency',
  },
  // {
  //   title: 'MPs Public Rating',
  //   pageUrl: '/mps-public-rating',
  // },
  {
    title: 'News & Videos',
    pageUrl: '/news',
  },
  {
    title: 'Your MPs',
    pageUrl: '/your-mps',
  },
  // {
  //   title: 'Newsletter',
  //   pageUrl: '//newsletter/loksabha',
  // },
];
const AppLayoutContainer = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  // const [headerSelectedIndex, setHeaderSelectedIndex] = useState(-1);
  const navigate = useNavigate();
  const { data: headerCategoryApi, isLoading } =
    dashboardNewsApiAction.getHeaderCategories();

  const [isSubNavigationMenu, setisSubNavigationMenu] = useState(false);
  useEffect(() => {
    if (window.location.pathname.includes('news')) {
      setisSubNavigationMenu(true);
    } else {
      setisSubNavigationMenu(false);
    }
  }, []);
  return (
    <Stack
      className="MainContainer"
      sx={{
        maxHeight: menuOpen ? '100vh' : '100vh',
        width: '100%',
        overflowY: 'auto',
        overflowX: 'hidden',
        scrollBehavior: 'smooth',
      }}
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
                style={{ width: '100%', height: '100%', cursor: 'pointer' }}
                src="/Assets/ads/728x90ad.jpg"
              />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className="MobileViewRemove"  zIndex={'2'} opacity={1}>
        <Header
          subNavData={headerCategoryApi?.categories}
          pageNavigtionLinks={pageNavigtionLinks}
          isSubNavigationMenu={isSubNavigationMenu}
        />
      </Box>
      <Box className="mobileHeader">
        <MobileHeader
          menuOpen={setMenuOpen}
          pageNavigtionLinks={pageNavigtionLinks}
        />
      </Box>
      <Box className="mobileHeader" zIndex={'2'}>
        <Box
          sx={{
            display: 'flex',
            gap: '1.5rem',
            overflowX: 'auto',
            width: '100%',
            boxShadow: '0 2px 0px rgba(0, 0, 0, 0.1)',
            zIndex: 2,
            position: 'relative',
            padding: '0 1rem 0rem 1rem',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
        >
          {pageNavigtionLinks?.map((val, index) => {
            const isActive =
              (val?.pageUrl !== '/' &&
                window.location.pathname.includes(val?.pageUrl)) ||
              (val?.pageUrl === '/' && window.location.pathname === '/');
            return (
              <Link
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#F44336' : 'inherit',
                  borderBottom: isActive
                    ? '4px solid rgb(241, 128, 124)'
                    : 'none',
                  padding: '10px 0 6px 0',
                }}
                to={`${val?.pageUrl}`}
                key={index}
              >
                <Text
                  text={val?.title}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    textWrap: 'nowrap',
                  }}
                />
                {val?.subhead && <ExpandMoreIcon />}
              </Link>
            );
          })}
        </Box>
        {/* Subheader navigations */}
        {isSubNavigationMenu && (
          <Container
            sx={{ display: 'flex', justifyContent: 'start', padding: '0.5rem', overflowX: 'auto' }}
          >
            <Box sx={{ display: 'flex', gap: '1.5rem' }}>
              {headerCategoryApi?.categories?.map((val, index) => {
                 const isActive = window.location.pathname.includes( `/news/categories/${val?.url}`);
                 return (
                   <Box
                  sx={{ display: 'flex' }}
                  onClick={() => {
                    navigate(`/news/categories/${val?.url}`, {
                      state: { category: val?.category },
                    })
                  }}
                  key={index}
                >
                  <Text
                    text={val?.category}
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      textWrap:'nowrap',
                      cursor: 'pointer',
                      color: isActive ? '#F44336' : '',
                      '&:hover': {
                        color: '#F44336',
                      },
                    }}
                  />
                  {val?.subhead && <ExpandMoreIcon />}
                </Box>
              )})}
                <Box
                  sx={{ display: 'flex' }}
                  onClick={() => {
                    navigate(`/newsletter/loksabha`, {
                      state: { category: '/newsletter/loksabha' },
                    })
                  }}
                >
                  <Text
                    text={'Newsletter'}
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      textWrap:'nowrap',
                      cursor: 'pointer',
                      color:  window.location.pathname.includes( `/newsletter/loksabha`) ? '#F44336' : '',
                      '&:hover': {
                        color: '#F44336',
                      },
                    }}
                  />
                </Box>
            </Box>
          </Container>
        )}
      </Box>
      <Stack sx={{ overflow: 'visible', zIndex: 1 }}>
        <Outlet />
      </Stack>
      <Footer
        data={headerCategoryApi?.categories}
        // setIndex={setHeaderSelectedIndex}
      />
    </Stack>
  );
};

export default AppLayoutContainer;
