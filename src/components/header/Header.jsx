import {
  Box,
  Button,
  Container,
  TextField,
  keyframes,
  Menu,
  MenuItem,
  Popover,
  Card,
} from '@mui/material';
import Text from 'components/common/Text';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useEffect, useRef, useState } from 'react';
import images from 'helpers/images';
import { Link, useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Close } from '@mui/icons-material';
import IconButton from 'components/common/IconButton';

export default function Header({
  subNavData,
  pageNavigtionLinks,
  isSubNavigationMenu,
}) {
  const { data: trendingDataApi } = dashboardNewsApiAction.getDashboardNews({
    limit: 10,
  });

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  const handleCloseMoreMenu = () => {
    setShowMoreMenu(false);
  };
  const handleMoreClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const searchRef = useRef(null);

  const fadeInSlideIn = keyframes`
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  `;

  const animatedTextStyle = {
    fontSize: '0.80rem',
    fontWeight: 500,
    animation: `${fadeInSlideIn} 0.3s ease-in`,
    cursor: 'pointer',
    color: '#000000DA',
    '&:hover': {
      color: '#eb3032',
    },
  };

  const [keyword, setKeyword] = useState('');
  const [searchShow, setSearchShow] = useState(false);
  const [trendingNews, setTrendingNews] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    setIsAnimating(true);
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [trendingNews]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSearchShow(false);
        setKeyword('');
      }
    };

    if (searchShow) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [searchShow]);

  const arrNews =
    trendingDataApi?.reviews?.map((val) => ({
      id: val.id,
      title: val?.news_description?.[0]?.title || '',
      url: val?.url || '',
      subCategory: val?.sub_category || '',
    })) || [];

  const limitWords = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  const truncatedText =
    arrNews.length > 0 ? limitWords(arrNews[trendingNews]?.title, 15) : '';

  // const [isSubNavigationMenu, setisSubNavigationMenu] = useState(false);
  const handleRightClick = () => {
    setTrendingNews((prev) => (prev === arrNews.length - 1 ? 0 : prev + 1));
  };

  const handleLeftClick = () => {
    setTrendingNews((prev) => (prev === 0 ? arrNews.length - 1 : prev - 1));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTrendingNews((prev) => (prev === arrNews.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(intervalId);
  }, [arrNews.length]);

  function createSlug(text) {
    return encodeURIComponent(text.trim().toLowerCase()).replace(/%20/g, '-');
  }

  const searchKeyword = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = () => {
    // setIndex(-2);
    if (keyword.trim()) {
      navigate(`/news/search/${createSlug(keyword)}`, {
        state: { keyword: createSlug(keyword) },
      });
      setSearchShow(false);
      setKeyword('');
    }
  };
  return (
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        // marginBottom: '3px',
      }}
    >
      <Container>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              display: 'flex',
              gap: '0.7rem',
              alignItems: 'center',
            }}
          >
            <Text
              text={'TRENDING NOW'}
              sx={{
                background: '#0d0b52',
                color: '#FFF',
                padding: '0.5rem',
                fontSize: '0.625rem',
                fontWeight: 700,
              }}
            />
            <Text
              onClick={() =>
                navigate(
                  `/news/details/${arrNews[trendingNews]?.subCategory?.toLowerCase().replace(/\s+/g, '-')}/${arrNews[trendingNews]?.url}`,
                  {
                    state: { id: arrNews[trendingNews]?.id },
                  }
                )
              }
              text={truncatedText}
              sx={
                isAnimating
                  ? animatedTextStyle
                  : {
                      fontSize: '0.80rem',
                      fontWeight: 500,
                      cursor: 'pointer',
                      color: '#000000DA',
                      '&:hover': {
                        color: '#eb3032',
                      },
                    }
              }
            />
          </Box>
          <Box sx={{ display: 'flex', gap: '5px', alignItems: 'center' }}>
            <ArrowBackIosIcon
              onClick={handleLeftClick}
              sx={{
                border: '1px solid #dcdcdc',
                height: '25px',
                width: '25px',
                padding: '6px',
                color: '#dcdcdc',
                cursor: 'pointer',
                '&:hover': {
                  background: '#162eb7',
                  color: '#FFF',
                },
              }}
            />
            <ArrowForwardIosIcon
              onClick={handleRightClick}
              sx={{
                border: '1px solid #dcdcdc',
                height: '25px',
                width: '25px',
                color: '#dcdcdc',
                padding: '6px',
                cursor: 'pointer',
                '&:hover': {
                  background: '#162eb7',
                  color: '#FFF',
                },
              }}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '0.5rem',
          }}
        >
          <Text
            sx={{ minWidth: '9rem', color: '#767676', fontSize: '0.75rem' }}
            // text={'Download App'}
          />

          <Box sx={{ textAlign: 'center' }}>
            <Box
              onClick={() => navigate('/')}
              sx={{ display: 'flex', cursor: 'pointer' }}
            >
              <img src="/pfLogo.png" alt="logo" className="pfLogo" />
            </Box>
            {/* <Text
                text={'Local Coronavirus informations'}
                sx={{ color: '#767676', fontSize: '0.75rem' }}
              /> */}
          </Box>
          <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <Box display="flex" gap="2px">
              <img
                style={{ height: '25px', cursor: 'pointer' }}
                onClick={() =>
                  (window.location.href =
                    'https://www.facebook.com/profile.php?id=100088959852699')
                }
                src="/Assets/icons/facebook.png"
              />
              <img
                style={{ height: '25px', cursor: 'pointer' }}
                onClick={() =>
                  (window.location.href = 'https://x.com/parliamentaryf7')
                }
                src="/Assets/icons/twitterX.png"
              />
              <img
                style={{ height: '25px', cursor: 'pointer' }}
                onClick={() =>
                  (window.location.href =
                    'https://www.instagram.com/parliamentaryfacts/?hl=en')
                }
                src="/Assets/icons/instagram.png"
              />
              <img
                style={{ height: '25px', cursor: 'pointer' }}
                onClick={() =>
                  (window.location.href =
                    'https://www.youtube.com/channel/UCmiD-5GplSufIcKYQ-fHNUQ')
                }
                src="/Assets/icons/youtube.png"
              />
            </Box>
            <Box
              onClick={() => setSearchShow(!searchShow)}
              sx={{
                position: 'relative',
                background: '#0d0b52',
                color: '#FFF',
                padding: '0.6rem 0.8rem 0.3rem 0.8rem',
                marginLeft: '0.8rem',
                cursor: 'pointer',
              }}
            >
              <img
                src={images.search}
                style={{ height: '16px' }}
                alt="search"
              />
            </Box>
            {searchShow && (
              <Box
                ref={searchRef}
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#FFF',
                  top: 250,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  width: '450px',
                  right: '50px',
                  height: '100px',
                  zIndex: '2',
                }}
              >
                <TextField
                  label="Search"
                  variant="standard"
                  sx={{ width: '350px' }}
                  onChange={searchKeyword}
                  value={keyword}
                />
                <Button onClick={handleSearch} disabled={!keyword.trim()}>
                  search
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Container>
      <Box
        sx={{
          display: 'flex',
          marginTop: '1rem',
          background: '#dfdede',
          color: '#666565',
        }}
      >
        <Container
          sx={{ display: 'flex', justifyContent: 'start', gap: '1.5rem' }}
        >
          {pageNavigtionLinks?.slice(0, 7).map((val, index) => {
            const isActive =
              (val?.pageUrl !== '/' &&
                window.location.pathname.includes(val?.pageUrl)) ||
              (val?.pageUrl === '/' && window.location.pathname === '/') ||
              (val?.pageUrl === '/your-mps' &&
                window.location.pathname.includes(`/mps-details`));
            return (
              <Link
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#F44336' : 'black',
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
                  }}
                />
                {val?.subhead && <ExpandMoreIcon />}
              </Link>
            );
          })}
          {pageNavigtionLinks?.length > 7 && (
            <Box sx={{ position: 'relative' }}>
              <Box
                sx={{ display: 'flex', cursor: 'pointer', padding: '0.5rem' }}
                onClick={() => setShowMoreMenu((prev) => !prev)}
              >
                <MoreVertIcon sx={{ fontSize: '1.2rem' }} />
              </Box>

              <Card
                sx={{
                  minWidth: '110px',
                  display: showMoreMenu ? 'block' : 'none',
                  position: 'absolute',
                }}
              >
                <IconButton
                  onClick={() => handleCloseMoreMenu()}
                  sx={{ float: 'right', p: '3px' }}
                >
                  <Close />
                </IconButton>
                <Box sx={{ mt: 1 }}>
                  {pageNavigtionLinks?.slice(6)?.map((val, index) => (
                    <MenuItem
                      sx={{ fontSize: '12px', fontWeight: '600' }}
                      onClick={() => {
                        navigate(val?.pageUrl);
                        handleCloseMoreMenu();
                      }}
                      key={index}
                    >
                      {val?.title}
                    </MenuItem>
                  ))}
                </Box>
              </Card>
            </Box>
          )}
        </Container>
      </Box>
      {/* Subheader navigations */}
      {isSubNavigationMenu && (
        <Container
          sx={{ display: 'flex', justifyContent: 'start', padding: '0.5rem' }}
        >
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
            {subNavData?.slice(0, 6).map((val, index) => {
              const isActive = window.location.pathname.includes( `/news/categories/${val?.url}`);
              return (
                <Box
                  sx={{ display: 'flex' }}
                  onClick={() => {
                    navigate(`/news/categories/${val?.url}`, {
                      state: { category: val?.category },
                    });
                  }}
                  key={index}
                >
                  <Text
                    text={val?.category}
                    sx={{
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      color: isActive ? '#F44336' : '',
                      '&:hover': {
                        color: '#F44336',
                      },
                    }}
                  />
                  {val?.subhead && <ExpandMoreIcon />}
                </Box>
              );
            })}
            <Box
              sx={{ display: 'flex' }}
              onClick={() => {
                navigate(`/newsletter/loksabha`, {
                  state: { category: '/newsletter/loksabha' },
                });
              }}
            >
              <Text
                text={'Newsletter'}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  textWrap: 'nowrap',
                  cursor: 'pointer',
                  color:  window.location.pathname.includes( `/newsletter/loksabha`) ? '#F44336' : '',
                  '&:hover': {
                    color: '#F44336',
                  },
                }}
              />
            </Box>
            {subNavData?.length > 6 && (
              <Box
                sx={{ display: 'flex', cursor: 'pointer' }}
                onClick={handleMoreClick}
              >
                <MoreVertIcon sx={{ fontSize: '1.2rem' }} />
              </Box>
            )}
          </Box>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {subNavData?.slice(6).map((val, index) => (
              <MenuItem
                sx={{ fontSize: '12px' }}
                onClick={() => {
                  {
                    navigate(`/news/categories/${val?.url}`, {
                      state: { category: val?.category },
                    });
                  }
                  handleClose();
                }}
                key={index}
              >
                {val?.category}
              </MenuItem>
            ))}
          </Menu>
        </Container>
      )}
    </Box>
  );
}
