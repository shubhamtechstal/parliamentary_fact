import {
  Box,
  Button,
  Container,
  TextField,
  keyframes,
  Menu,
  MenuItem,
} from '@mui/material';
import Text from 'components/common/Text';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useRef, useState } from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import images from 'helpers/images';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Header({ data, setIndex, selected }) {
  const { data: trendingDataApi } = dashboardNewsApiAction.getDashboardNews({
    limit: 10,
  });

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [newLetter, setNewsletter] = useState(true);

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

  const header = data;
  const pageNavigtionLinks = [
    {
      title: 'Home',
      pageUrl: '/',
    },
    {
      title: 'Parliament Performance',
      pageUrl: '/parliament-performance',
    },
    {
      title: 'MPs Parliament Performance',
      pageUrl: '/mps-performance',
    },
    {
      title: 'MPs Constituency Performance',
      pageUrl: '/mps-constituency',
    },
    {
      title: 'MPs Public Rating',
      pageUrl: '/mps-public-rating',
    },
    {
      title: 'News & Videos',
      pageUrl: '/news',
    },
    {
      title: 'Your MPs',
      pageUrl: '/your-mps',
    },
    {
      title: 'Newsletter',
      pageUrl: '/newsletter',
    },
  ];
  const [isSubNavigationMenu, setisSubNavigationMenu] = useState(false);
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
    setIndex(-2);
    if (keyword.trim()) {
      navigate(`/news/search/${createSlug(keyword)}`, {
        state: { keyword: createSlug(keyword) },
      });
      setSearchShow(false);
      setKeyword('');
    }
  };
  const location = useLocation();
  const { id } = location.state || {};
  useEffect(() => {
    if ( window.location.pathname.includes('news')) {
      setisSubNavigationMenu(true);
    } else {
      setisSubNavigationMenu(false);
    }
  }, [id]);
  const parts = window.location.href.split('/');
  useEffect(() => {
    const index = data?.findIndex(
      (item) => item.url === parts[parts.length - 1]
    );
    if (parts[parts.length - 1] !== 'news' && index === -1) {
      setIndex(-2);
    } else {
      setIndex(index);
    }
    if (parts[parts.length - 1] !== 'newsletter') setNewsletter(true);
    else setNewsletter(false);
  }, [window.location.href, data]);
  return (
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        marginBottom: '3px',
      }}
    >
      {/* {newLetter &&  <>
      <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            padding:'1rem 0',
            alignSelf:'center',
          }}
        >
          <Box sx={{ width: { xs: 'min-content', md: '25%' } }}>
            <Box
              sx={{
                display: 'flex',
                gap: '0.2rem',
                width: { xs: '120px', md: '100%' },
                flexWrap: 'wrap',
              }}
            >
              <Text
                sx={{ color: 'grey', fontSize: '1.2rem', fontWeight: 700 }}
                text={`TODAY'S`}
              />
              <Text
                sx={{ color: 'grey', fontSize: '1.2rem', fontWeight: 700 }}
                text={`LOK SABHA `}
              />
              <Text
                sx={{ color: 'grey', fontSize: '1.2rem', fontWeight: 700 }}
                text={`PERFORMANCE`}
              />
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              gap: '0.8rem',
              width: { xs: '100%', md: 'fit-content' },
              textAlign: 'end',
              justifyContent: 'flex-end',
              position: 'relative',
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: { xs: 0, md: 35 },
                left: { xs: '57%', md: '-90px' },
              }}
            >
              <Text
                sx={{
                  color: '#fff',
                  background: '#FF936F',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  width: '80px',
                  borderRadius: '15px',
                  textAlign: 'center',
                  position: 'absolute',
                  top: -21,
                  padding: '0.2rem 0',
                }}
                text={'7.3 Hrs'}
              />
              <Text
                sx={{
                  color: '#fff',
                  background: '#919191',
                  fontSize: '0.8rem',
                  fontWeight: '600',
                  width: '80px',
                  borderRadius: '15px',
                  zIndex: -1,
                  textAlign: 'center',
                  padding: '0.2rem 0',
                }}
                text={'Work'}
              />
            </Box>
            <Box
              sx={{
                marginTop: '1rem',
                position: 'relative',
                display: {xs:'block',md:'flex'},
                flexWrap: 'wrap',
                justifyContent: 'flex-end',
                textAlign: { xs: 'end', md: 'center' },
                gap: { xs: 0, md: '1rem' },
              }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: -65,
                  left: -80,
                  display: { xs: 'block', md: 'none' },
                }}
              >
                <Box
                  sx={{
                    color: '#fff',
                    //   background: '#cbcbcb',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    borderRadius: '50%',
                    textAlign: 'center',
                    width: '55px',
                    height: '55px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <img
                    src="Assets/icons/Adjournment-image1.png"
                    alt="adjournment-1"
                    style={{ width: '100%' }}
                  />
                </Box>
                <Text
                  sx={{
                    color: '#fff',
                    //   background: '#FF936F',
                    fontSize: '1.5rem',
                    fontWeight: '500',
                    borderRadius: '50%',
                    textAlign: 'center',
                    position: 'absolute',
                    top: 43,
                    backgroundImage:
                      'url(/Assets/icons/Adjournment-image-2.png)', // Ensure the file extension is correct
                    backgroundSize: 'cover', // To make the image cover the entire element
                    backgroundRepeat: 'no-repeat',
                    width: '55px',
                    height: '55px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                  text={'06'}
                />
              </Box>
              <Box>
                <Text
                  sx={{ color: 'grey', fontSize: '0.75rem', fontWeight: '600' }}
                  text={'QUESTION HOUR'}
                />
                <Text
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                  }}
                  text={'12.3%'}
                />
              </Box>
              <Box>
                <Text
                  sx={{
                    color: 'grey',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    marginTop:{ xs:'0.5rem',md:'0'},
                  }}
                  text={'LEGISLATIVE BUSINESS'}
                />
                <Text
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                  }}
                  text={'85.1%'}
                />
              </Box>
            </Box>
            <Box
              sx={{
                height: '110px',
                width: '2px',
                background: '#ff2100bf',
                marginTop: '1rem',
                display: { xs: 'block', md: 'none' },
              }}
            ></Box>
            <Box
              sx={{
                textAlign: { xs: 'start', md: 'center' },
                width: { xs: 'min-content', md: 'fit-content' },
                marginTop: '1rem',
                display: 'flex',
                flexWrap: 'wrap',
                gap: { xs: 0, md: '1rem' },
              }}
            >
              <Box>
                <Text
                  sx={{
                    color: 'grey',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textWrap: 'nowrap',
                  }}
                  text={'ZERO HOUR'}
                />
                <Text
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                  }}
                  text={'8%'}
                />
              </Box>
              <Box>
                <Text
                  sx={{
                    color: 'grey',
                    fontSize: '0.75rem',
                    fontWeight: '600',
                    textWrap: 'nowrap',
                    // marginTop: '0.5rem',
                  }}
                  text={'OTHER BUSINESS'}
                />
                <Text
                  sx={{
                    color: '#FF936F',
                    fontSize: '1.2rem',
                    fontWeight: '700',
                  }}
                  text={'10%'}
                />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{display:'flex',justifyContent:'center'}}>
        <Button onClick={()=>navigate('/newsletter')}
          sx={{
            background: '#A6A6A6',
            alignSelf: 'center',
            color: '#fff',
            fontSize: '0.8rem',
            fontWeight: '600',
            marginBottom: '1rem',
            width: 'fit-content',
            borderRadius: '18px',
            padding: { xs: '0.4rem 2rem', md: '0.4rem 3rem' },
            '&:hover': {
              background: '#A6A6A6',
              color: '#fff',
            },
          }}
        >
          Click here to check full News letter
        </Button>
        </Box>
        </>} */}
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
          background: '#f7f7f7',
          padding: '0.5rem 0',
        }}
      >
        <Container
          sx={{ display: 'flex', justifyContent: 'start', gap: '1.5rem' }}
        >
          {pageNavigtionLinks?.slice(0, 6).map((val, index) => {
            const isActive = (val?.pageUrl !== '/')&& window.location.pathname.includes(val?.pageUrl) || (val?.pageUrl === '/' && window.location.pathname === '/');
            return (
              <Link
                style={{
                  textDecoration: 'none',
                  color: isActive ? '#F44336' : 'inherit',
                  borderBottom: isActive ? '2px solid #FF936F' : 'none',
                }}
                to={`${val?.pageUrl}`}
                key={index}
              >
                <Text
                  text={val?.title}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                />
                {val?.subhead && <ExpandMoreIcon />}
              </Link>
            );
          })}
          {pageNavigtionLinks?.length > 6 && (
            <Box
              sx={{ display: 'flex', cursor: 'pointer' }}
              onClick={handleMoreClick}
            >
              <MoreVertIcon sx={{ fontSize: '1.2rem' }} />
            </Box>
          )}
        </Container>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {pageNavigtionLinks?.slice(6).map((val, index) => (
            <MenuItem
              sx={{ fontSize: '12px' }}
              onClick={() => {
                {
                  navigate(`/news/categories/${val?.pageUrl}`, {
                    state: { category: val?.title },
                  }),
                    setIndex(index + 6);
                }
                handleClose();
              }}
              key={index}
            >
              {val?.title}
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* Subheader navigations */}
      {isSubNavigationMenu && (
        <Container
          sx={{ display: 'flex', justifyContent: 'start',  padding: '0.5rem' }}
        >
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
            {header?.slice(0, 6).map((val, index) => (
              <Box
                sx={{ display: 'flex' }}
                onClick={() => {
                  navigate(`/news/categories/${val?.url}`, {
                    state: { category: val?.category },
                  }),
                    setIndex(index);
                }}
                key={index}
              >
                <Text
                  text={val?.category}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color: selected === index ? '#162eb7' : '',
                    '&:hover': {
                      color: '#162eb7',
                    },
                  }}
                />
                {val?.subhead && <ExpandMoreIcon />}
              </Box>
            ))}
            {header?.length > 6 && (
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
            {header?.slice(6).map((val, index) => (
              <MenuItem
                sx={{ fontSize: '12px' }}
                onClick={() => {
                  {
                    navigate(`/news/categories/${val?.url}`, {
                      state: { category: val?.category },
                    }),
                      setIndex(index + 6);
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
