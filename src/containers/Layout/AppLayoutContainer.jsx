import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import {
  AccountCircleOutlined,
  NotificationsOutlined,
} from '@mui/icons-material';
import {
  AppBar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
} from '@mui/material';

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
      <AppBar
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
      </AppBar>
      <Stack>
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default AppLayoutContainer;
