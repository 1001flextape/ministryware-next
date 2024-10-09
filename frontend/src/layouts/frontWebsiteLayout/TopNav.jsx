"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ArcadeIcon from '@mui/icons-material/Gamepad';
import SoftwareIcon from '@mui/icons-material/Business';
import AboutIcon from '@mui/icons-material/Info';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { AppBar, Typography, Tabs, Tab, Toolbar, Box, IconButton, Menu, MenuItem, Button, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import logo from "../../../public/images/ministry-ware-logo.png";

// Styled AppBar
const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1AA6B7',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.3)',
}));

const BrandingText = styled(Typography)({
  WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)',
  fontWeight: 'bold',
});

// Styled Tabs
const StyledTabs = styled(Tabs)(({ theme }) => ({
  marginLeft: '20px',
  '& .MuiTab-root': {
    color: '#DAECF3',
    textTransform: 'none',
    fontSize: '16px',
    padding: '12px 20px',
  },
  '& .Mui-selected': {
    color: '#FFFFFF',
    backgroundColor: 'rgb(2, 45, 65)',
  },
  '& .MuiTab-root:hover': {
    backgroundColor: '#022D41',
  },
}));

const TopNav = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const router = useRouter();
  const pathname = usePathname();

  // Ensure the router is available
  if (!router) return null;

  const [value, setValue] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const open = Boolean(anchorEl);

  // Handle Account dropdown menu open/close
  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    handleMenuClose();
  };

  // Update tab selection based on the current path
  useEffect(() => {

    switch (pathname) {
      case '/':
        setValue(0);
        break;
      case '/about':
        setValue(1);
        break;
      case '/donate':
        setValue(2);
        break;
      case '/more':
        setValue(3);
        break;
      default:
        setValue(null);
    }
  }, [router]);

  // Conditionally render the top nav only on desktop
  if (!isDesktop) return null;

  return (
    <StyledAppBar position="static">
      <Toolbar style={{ margin: '0 auto', padding: '0 var(--size-gutter)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 'var(--size-content)' }}>
        {/* Logo and Branding */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt="MinistryWare logo" width={30} height={30} style={{ margin: 0 }} />
          <BrandingText variant="h6" component="div" sx={{ lineHeight: '35px', ml: 1 }}>
            MinistryWare
          </BrandingText>

          <StyledTabs
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
              console.log('new selected value', newValue)
              switch (newValue) {
                case 0:
                  router.push('/');
                  break;
                case 1:
                  router.push('/about');
                  break;
                case 2:
                  router.push('/donate');
                  break;
                case 3:
                  router.push('/more');
                  break;
                default:
                  router.push('/');
              }
            }}
          >
            <Tab icon={<ArcadeIcon />} label="Arcade" />
            <Tab icon={<AboutIcon />} label="About" />
            <Tab icon={<LoyaltyIcon />} label="Donate" />
            <Tab icon={<MoreHorizIcon />} label="More" />
          </StyledTabs>
        </Box>

        {/* Sign In / Account Dropdown */}
        <Box>
          {isSignedIn ? (
            <>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenuClick}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
                <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
              </Menu>
            </>
          ) : (
            <Button
              color="inherit"
              onClick={() => setIsSignedIn(true)}
              variant="outlined"
              sx={{
                textTransform: 'none',
                borderColor: '#fff',
                color: '#fff',
                fontWeight: 'bold',
                ml: 2,
              }}
            >
              Sign In
            </Button>
          )}
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
