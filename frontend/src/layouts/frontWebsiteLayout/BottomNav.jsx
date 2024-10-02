"use client";

import React, { useEffect } from 'react';
import { BottomNavigation, BottomNavigationAction, styled } from '@mui/material';
import ArcadeIcon from '@mui/icons-material/Gamepad';
import SoftwareIcon from '@mui/icons-material/Business';
import AboutIcon from '@mui/icons-material/Info';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz'; // More button icon
import { useRouter } from 'next/navigation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

// Styled Bottom Navigation
const StyledBottomNavigation = styled(BottomNavigation)(({ theme }) => ({
  backgroundColor: '#1AA6B7',
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  zIndex: 1000,
  boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.3)',
}));

const StyledBottomNavigationAction = styled(BottomNavigationAction)(({ theme }) => ({
  color: '#DAECF3',
  transition: 'background-color 0.3s, color 0.3s',
  '&.Mui-selected': {
    backgroundColor: '#022D41',
    color: '#ffffff',
  },
  '&:hover': {
    backgroundColor: 'rgba(218, 236, 243, 0.3)',
  },
  '&:active': {
    backgroundColor: '#022D41',
    color: '#ffffff',
  },
  '&:focus': {
    outline: 'none',
    backgroundColor: '#022D41',
  },
}));

const BottomNav = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();
  const [value, setValue] = React.useState(0);

  // Update tab selection based on the current path
  useEffect(() => {
    const currentPath = router.pathname;
    switch (currentPath) {
      case "/":
        setValue(0);
        break;
      case "/church-software":
        setValue(1);
        break;
      case "/about":
        setValue(2);
        break;
      case "/donate":
        setValue(3);
        break;
      case "/more":
        setValue(4);
        break;
      default:
        setValue(0);
    }
  }, [router.pathname]);

  if (!isTabletOrMobile) return null;

  // Function to handle navigation
  const handleNavigation = (newValue) => {
    setValue(newValue);
    const paths = [
      '/',
      '/church-software',
      '/about',
      '/donate',
      '/more', // Added the path for "More"
    ];
    router.push(paths[newValue]);
  };

  return (
    <StyledBottomNavigation
      value={value}
      onChange={(event, newValue) => handleNavigation(newValue)}
    >
      <StyledBottomNavigationAction label="Arcade" icon={<ArcadeIcon />} />
      <StyledBottomNavigationAction label="Software" icon={<SoftwareIcon />} />
      <StyledBottomNavigationAction label="About" icon={<AboutIcon />} />
      <StyledBottomNavigationAction label="Donate" icon={<LoyaltyIcon />} />
      <StyledBottomNavigationAction label="More" icon={<MoreHorizIcon />} /> {/* More button */}
    </StyledBottomNavigation>
  );
};

export default BottomNav;
