import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import '../../App.css';
import {
  AccountCircleOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from '@mui/material';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import MobileHeader from 'components/header/MobileHeader';
import Text from 'components/common/Text';

const AppLayoutContainer = () => {
  const navigate = useNavigate();
  const [accountAnchorEl, setAccountAnchorEl] = useState(null);

  const menuOptions = [
    {
      key: 'DASHBOARD',
      label: 'Dashboard',
      onClick: () => {
        navigate('/');
      },
    },

    {
      key: 'REPORTS',
      label: 'Reports',
      onClick: () => {
        navigate('/reports');
      },
    },
  ];

  const handleAccountMenuClick = () => {
    setAccountAnchorEl(event.currentTarget);
  };

  const handleAccountMenuClose = () => {
    setAccountAnchorEl(null);
  };

  const handleLogoutClick = () => {};

  return (
    <Stack>
      {/* <AppBar
        position="sticky"
        color="transparent"
        sx={{ backgroundColor: 'white' }}
      >
        <Toolbar>
          {menuOptions.map((menu) => (
            <Button onClick={() => menu.onClick()} size="large" variant="text" key={`menu_${menu.key}`}>
              {menu.label}
            </Button>
          ))}
          <Box sx={{ flexGrow: 1 }} />
          <IconButton color="primary">
            <NotificationsOutlined />
          </IconButton>
          <div>
            <IconButton onClick={handleAccountMenuClick}>
              <AccountCircleOutlined />
            </IconButton>
            <Menu
              keepMounted
              onClose={handleAccountMenuClose}
              anchorEl={accountAnchorEl}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
              transformOrigin={{ horizontal: 'right', vertical: 'center' }}
              open={Boolean(accountAnchorEl)}
            >
              <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar> */}
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
            backgroundImage: 'url(Assets/circleblues.webp)', // Add your image URL here
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
        <Header />
      </Box>
      <Box className="mobileHeader">
        <MobileHeader />
      </Box>
      <Stack>
        <Outlet />
      </Stack>
      <Footer />
    </Stack>
  );
};

export default AppLayoutContainer;
