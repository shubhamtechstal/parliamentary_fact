import { Box, Button, TextField, keyframes } from '@mui/material';
import Text from 'components/common/Text';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';

export default function MobileHeader({ menuOpen, data }) {
  const [keyword, setKeyword] = useState('');
  const [searchShow, setSearchShow] = useState(false);

  const navigate = useNavigate();
  const slideInFromLeft = keyframes`
  from {
    left: -500px;
  }
  to {
    left: 0;
  }
`;
  const slideInFromRight = keyframes`
  from {
    left: 500px;
  }
  to {
    left: 0;
  }
`;
  const options = data;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [Search, setSearch] = useState(false);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    setAnchorEl(!anchorEl);
    menuOpen(!anchorEl);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setSearch(false);
    menuOpen(false);
  };
  const ITEM_HEIGHT = 100;

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
      handleClose();
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 1rem',
        }}
      >
        <Box>
          <MenuIcon
            onClick={handleClick}
            sx={{ color: '#0d0b52', cursor: 'pointer' }}
          />
        </Box>
        <Box onClick={() => navigate('/')}>
          <img src="/pf_logo.png" alt="logo" className="pf_logo" />
          {/* <Text
            text={'Local Coronavirus informations'}
            sx={{ color: '#767676', fontSize: '0.75rem' }}
          /> */}
        </Box>
        <Box
          onClick={() => {
            setSearch(true), handleClick();
          }}
        >
          <SearchIcon
            onClick={() => setSearch(true)}
            sx={{ color: '#0d0b52', cursor: 'pointer' }}
          />
        </Box>
      </Box>
      {anchorEl && (
        <Box
          sx={{
            position: 'absolute',
            height: '100vh',
            width: '100%',
            top: 0,
            left: 0,
            backgroundImage:
              'url(https://demo.tagdiv.com/newspaper_covid19_news_pro/wp-content/uploads/2020/03/17.jpg)', // Add your image URL here
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            zIndex: 999,
            animation: Search
              ? `${slideInFromRight} 0.5s ease-out forwards`
              : `${slideInFromLeft} 0.5s ease-out forwards`,
          }}
        >
          <Box
            sx={{
              background: '#0d0b52',
              height: '100vh',
              opacity: 0.8,
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8, color: 'white' }}
            >
              <CloseIcon />
            </IconButton>
            {Search ? (
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '30vh',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    background: '#FFF',
                    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                    width: '350px',
                    height: '60px',
                  }}
                >
                  <TextField
                    label="Search"
                    variant="standard"
                    sx={{ width: '200px' }}
                    onChange={searchKeyword}
                    value={keyword}
                  />
                  <Button onClick={handleSearch} disabled={!keyword.trim()}>
                    search
                  </Button>
                </Box>
              </Box>
            ) : (
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  padding: '2rem',
                }}
              >
                <Box
                  sx={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}
                >
                  <img
                    style={{ cursor: 'pointer' }}
                    src={images.facebookWhite}
                    alt="facebook"
                  />
                  <img
                    style={{ cursor: 'pointer' }}
                    src={images.instagramWhite}
                    alt="instagram"
                  />
                  <img
                    style={{ cursor: 'pointer' }}
                    src={images.twitterXWhite}
                    alt="twitter"
                  />
                  <img
                    style={{ cursor: 'pointer' }}
                    src={images.youtubeWhite}
                    alt="youtube"
                  />
                </Box>
                <Box
                  sx={{ display: 'flex' }}
                  onClick={() => {
                    navigate('/'), handleClose();
                  }}
                >
                  <Text
                    text={'Home'}
                    sx={{
                      width: '100%',
                      cursor: 'pointer',
                      color: '#FFF',
                      fontWeight: 700,
                    }}
                  />
                </Box>
                {options.map((val) => (
                  <Box
                    onClick={() => {
                      navigate(`/categories/${val?.url}`, {
                        state: { category: val?.category },
                      }),
                        handleClose();
                    }}
                  >
                    <Text
                      sx={{
                        width: '100%',
                        cursor: 'pointer',
                        color: '#FFF',
                        fontWeight: 700,
                      }}
                      text={val?.category}
                    ></Text>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
