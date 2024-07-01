import { Box, Button, Container, TextField, keyframes } from '@mui/material';
import Text from 'components/common/Text';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, { useEffect, useState } from 'react';
import images from 'helpers/images';
import { Navigate, useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';

export default function Header({ data }) {

  const navigate = useNavigate();

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
  const arrNews = [
    'COVID-19: Australia to ban all arrivals of non-residents, says PM',
    'Trump sought to buy  vaccine developer excusively',
    'Doors slam shut across borderless Europe as coronavirus spreads',
    'Fearing coronavirus recession, France announces €45 billion in business aid',
  ];
  // const header = [
  //   { head: 'Home', link: '/' },
  //   { head: 'News', subhead: 'check' },
  //   { head: 'Coronavirus', subhead: 'check' },
  //   { head: 'Videos', link: '/categories' },
  //   { head: 'Health' },
  //   { head: 'Stories' },
  //   { head: 'Local news' },
  //   { head: 'More', subhead: 'check' },
  // ];
  const header = data;

  const handleRightClick = () => {
    if (trendingNews === arrNews.length - 1) setTrendingNews(0);
    else setTrendingNews(trendingNews + 1);
  };
  const handleLeftClick = () => {
    if (trendingNews === 0) setTrendingNews(arrNews.length - 1);
    else setTrendingNews(trendingNews - 1);
  };
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (trendingNews === arrNews.length - 1) setTrendingNews(0);
      else setTrendingNews(trendingNews + 1);
    }, 3000);
    return () => clearInterval(intervalId);
  });
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
              <img src="/pf_logo.png" alt="logo" className="pf_logo" />
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
                sx={{
                  position: 'absolute',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  background: '#FFF',
                  top: 250,
                  boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                  width: '500px',
                  right: '10px',
                  height: '50px',
                }}
              >
                <TextField
                  label="Search"
                  variant="standard"
                  sx={{ width: '350px' }}
                />
                <Button>search</Button>
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
                onClick={() => navigate(`/categories/${val?.url}`,{state:{"category":val?.category}})}
              >
                <Text
                  text={val?.category}
                  key={index}
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
