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
import { useLocation, useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';
import { dashboardNewsApiAction } from 'stores/redux/apiSlices/DashboardNewsSlice/dashboardNewsApiSlice';
import MoreVertIcon from '@mui/icons-material/MoreVert';
export default function Header({ data,setIndex,selected }) {
  const { data: trendingDataApi } = dashboardNewsApiAction.getDashboardNews({
    limit: 10,
  });

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

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
      subCategory:val?.sub_category || ''
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
    setIndex(-2)
    if (keyword.trim()) {
      navigate(`/news-and-videos/search/${createSlug(keyword)}`, {
        state: { keyword: createSlug(keyword) },
      });
      setSearchShow(false);
      setKeyword('');
    }
  };
  const location = useLocation();
  const { id } = location.state || {};
  useEffect(() => {
    if(id!==undefined)setIndex(-2);
  }, [id]);
  return (
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        paddingBottom: '0.8rem',
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
                  `/news-and-videos/details/${arrNews[trendingNews]?.subCategory?.toLowerCase().replace(/\s+/g, '-')}/${arrNews[trendingNews]?.url}`, {
                  state: { id: arrNews[trendingNews]?.id },
                })
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
            marginTop:'0.5rem'
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
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}
        >
          <Box sx={{ display: 'flex', gap: '1.5rem' }}>
            <Box sx={{ display: 'flex' }} onClick={() => {navigate('/'),setIndex(-1)}}>
              <Text
                text={'Home'}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  color:selected===-1?"#162eb7":"",
                  '&:hover': {
                    color: '#162eb7',
                  },
                }}
              />
            </Box>
            {header?.slice(0, 6).map((val, index) => (
              <Box
                sx={{ display: 'flex' }}
                onClick={() =>
                 { navigate(`/news-and-videos/categories/${val?.url}`, {
                    state: { category: val?.category },
                  }),setIndex(index)}
                }
                key={index}
              >
                <Text
                  text={val?.category}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    color:selected===index?"#162eb7":"",
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
                {/* <Text
                  text={'More'}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    '&:hover': {
                      color: '#162eb7',
                    },
                  }}
                /> */}
                <MoreVertIcon sx={{fontSize:'1.2rem'}}/>
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
                 { navigate(`/news-and-videos/categories/${val?.url}`, {
                    state: { category: val?.category },
                  }),setIndex(index+6)};
                  handleClose();
                }}
                key={index}
              >
                {val?.category}
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Container>
    </Box>
  );
}
