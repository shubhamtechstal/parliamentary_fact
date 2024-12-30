import { Box, Button, Divider, TextField, keyframes } from '@mui/material';
import Text from 'components/common/Text';
import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import images from 'helpers/images';
import { useNavigate } from 'react-router-dom';
import '../../components/common/cards/NewsCard.css';
import { BorderRight } from '@mui/icons-material';

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
      navigate(`/news/search/${keyword}`, {
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
          gap: '2rem',
        }}
      >
        <Box>
          <MenuIcon
            onClick={handleClick}
            sx={{ color: '#0d0b52', cursor: 'pointer' }}
          />
        </Box>
        <Box onClick={() => navigate('/')}>
          <img src="/pfLogo.png" alt="logo" className="pfLogo" />
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
            // backgroundImage:
            //   'url(https://demo.tagdiv.com/newspaper_covid19_news_pro/wp-content/uploads/2020/03/17.jpg)', // Add your image URL here
            // backgroundSize: 'cover',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
            zIndex: 999,
            animation: Search
              ? `${slideInFromRight} 0.5s ease-out forwards`
              : `${slideInFromLeft} 0.5s ease-out forwards`,
          }}
        >
          <Box
            sx={{
              background: '#f7f7f7',
              minHeight: '100vh',
            }}
          >
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{ position: 'absolute', top: 8, right: 8, color: '#000' }}
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
                  gap: '0.2rem',
                  padding: '1rem 2rem 0 2rem',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    gap: '0.5rem',
                    alignItems: 'center',
                    marginTop: '1rem',
                  }}
                >
                  <Box display="flex" gap="8px">
                    {/* <FacebookIcon
                  onClick={()=>window.location.href="https://www.facebook.com/profile.php?id=100088959852699"}
                    sx={{
                      fontSize: '24px',
                      borderRadius:'12px',
                      padding:'0.2rem',
                      color: '#fff',
                      cursor: 'pointer',
                      background:'#cfcfcf'
                    }}
                  /> */}
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
                    {/* <XIcon
                  onClick={()=>window.location.href="https://x.com/parliamentaryf7"}
                    sx={{
                      fontSize: '20px',
                      color: '#fff',
                      background: '#000',
                      padding: '0.2rem',
                      borderRadius: '5px',
                      marginTop: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <InstagramIcon
                  onClick={()=>window.location.href="https://www.instagram.com/parliamentaryfacts/?hl=en"}
                    sx={{
                      fontSize: '20px',
                      color: '#fff',
                      background: 'linear-gradient(45deg, #f58529, #dd2a7b, #8134af, #515bd4)', 
                      padding: '0.1rem',
                      borderRadius: '5px',
                      marginTop: '3px',
                      cursor: 'pointer',
                    }}
                  />
                  <YouTubeIcon
                  onClick={()=>window.location.href="https://www.youtube.com/channel/UCmiD-5GplSufIcKYQ-fHNUQ"}
                    sx={{
                      background: '#fff',
                      color: '#FF0000',
                      fontSize: '20px',
                      borderRadius: '5px',
                      marginTop: '3px',
                      cursor: 'pointer',
                    }}
                  /> */}
                  </Box>

                  {searchShow && (
                    <Box
                      // ref={searchRef}
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
                <Box
                  sx={{ display: 'flex', marginTop: '1rem' }}
                  onClick={() => {
                    navigate('/'), handleClose();
                  }}
                >
                  <Text
                    text={'Home'}
                    sx={{
                      width: '100%',
                      cursor: 'pointer',
                      color: '#000',
                      fontWeight: 400,
                    }}
                  />
                </Box>
                {options.map((val) => (
                  <Box
                    onClick={() => {
                      navigate(`/news/categories/${val?.url}`, {
                        state: { category: val?.category },
                      }),
                        handleClose();
                    }}
                  >
                    <Text
                      sx={{
                        width: '100%',
                        cursor: 'pointer',
                        color: '#000',
                        fontWeight: 400,
                      }}
                      text={val?.category}
                    ></Text>
                  </Box>
                ))}
                <Divider
                  sx={{ borderBottom: '1px solid #cfcfcf', marginTop: '1rem' }}
                />
                <img
                  style={{
                    height: 'auto',
                    width: '50px',
                    cursor: 'pointer',
                    marginTop: '1rem',
                  }}
                  onClick={() => {navigate('/');handleClose()}}
                  src="/Assets/mobilemenulogo.png"
                />
                <Text 
                 sx={{fontSize:'0.75rem',marginTop:'0.5rem'}}
                  text={
                    'Parliamentary fact is an specialized research and media platform which is working as a think tank on parliamentary system, promoting parliamentary values. platform is working as a watchdog and create performance of Parliament, state assemblies and its members Parliamentarian (MPs) and legislature (MLAs).'
                  }
                ></Text>
                <Box sx={{display:'flex',flexWrap:'wrap',gap:'0.2rem',marginTop:'0.5rem'}}>
                <Box onClick={()=>{navigate('/about-us');handleClose()}} sx={{borderRight:'1px solid #000000DE'}}>
                  <Text sx={{fontSize:'0.9rem',padding:'0 0.5rem 0 0',BorderRight:'1px solid #000 !important'}} text={"About Us"}/>
                </Box>
                <Box onClick={()=>{navigate('/about-us/our-vision');handleClose()}} sx={{borderRight:'1px solid #000000DE'}}>
                    <Text sx={{fontSize:'0.9rem',padding:'0 0.5rem'}} text={"Our Vision"}/>
                </Box>
                <Box onClick={()=>{navigate('/about-us/leadership');handleClose()}} sx={{borderRight:'1px solid #000000DE'}}>
                  <Text sx={{fontSize:'0.9rem',padding:'0 0.5rem '}} text={"Leadership"}/>
                </Box>
                  <Text onClick={()=>{navigate('/about-us/research-endorsement');handleClose()}} sx={{fontSize:'0.9rem',padding:'0 0.5rem 0 0'}} text={"Research Endorsement"}/>
                </Box>
                <Divider
                  sx={{ borderBottom: '1px solid #cfcfcf', marginTop: '1rem' }}
                />
                <Box sx={{textAlign:'center'}}>
                <Text sx={{fontSize:'0.75rem',}} text={"Copyright @ParliamentaryFact.com"}/>

                </Box>
              </Box>
            )}
          </Box>
        </Box>
      )}
    </>
  );
}
