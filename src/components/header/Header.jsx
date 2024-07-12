import { Box, Button, Container, TextField, keyframes } from '@mui/material';
import Text from 'components/common/Text';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useRef, useState } from 'react';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';

export default function Header({ data }) {
  const navigate = useNavigate();
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
    fontSize: '0.68rem',
    fontWeight: 400,
    animation: `${fadeInSlideIn} 0.3s ease-in`,
    cursor: 'pointer',
    '&:hover': {
      color: '#162eb7',
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

  const arrNews = [
    'COVID-19: Australia to ban all arrivals of non-residents, says PM',
    'Trump sought to buy vaccine developer exclusively',
    'Doors slam shut across borderless Europe as coronavirus spreads',
    'Fearing coronavirus recession, France announces €45 billion in business aid',
  ];

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
  }, []);

  function createSlug(text) {
    return encodeURIComponent(text.trim().toLowerCase()).replace(/%20/g, '-');
  }

  const searchKeyword = (event) => {
    setKeyword(createSlug(event.target.value));
  };

  const handleSearch = () => {
    if (keyword.trim()) {
      navigate(`/search/${keyword}`, {
        state: { keyword: keyword },
      });
      setSearchShow(false);
      setKeyword('');
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        boxShadow: '0px 2px 0px rgba(0, 0, 0, 0.04)',
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
              text={arrNews[trendingNews]}
              sx={
                isAnimating
                  ? animatedTextStyle
                  : {
                      fontSize: '0.68rem',
                      fontWeight: 400,
                      cursor: 'pointer',
                      '&:hover': {
                        color: '#162eb7',
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
            <Box sx={{ display: 'flex', gap: '0.5rem' }}>
              <img
                style={{ cursor: 'pointer' }}
                src={images.facebook}
                alt="facebook"
              />
              <img
                style={{ cursor: 'pointer' }}
                src={images.instagram}
                alt="instagram"
              />
              <img
                style={{ cursor: 'pointer' }}
                src={images.twitterX}
                alt="twitter"
              />
              <img
                style={{ cursor: 'pointer' }}
                src={images.youtube}
                alt="youtube"
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
            <Box sx={{ display: 'flex' }} onClick={() => navigate('/')}>
              <Text
                text={'Home'}
                sx={{
                  fontSize: '0.9rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  '&:hover': {
                    color: '#162eb7',
                  },
                }}
              />
            </Box>
            {header?.map((val, index) => (
              <Box
                sx={{ display: 'flex' }}
                onClick={() =>
                  navigate(`/categories/${val?.url}`, {
                    state: { category: val?.category },
                  })
                }
                key={index}
              >
                <Text
                  text={val?.category}
                  sx={{
                    fontSize: '0.9rem',
                    fontWeight: 700,
                    cursor: 'pointer',
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
      </Container>
    </Box>
  );
}
