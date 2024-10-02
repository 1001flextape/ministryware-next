"use client"

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import ArcadeIcon from '@mui/icons-material/Gamepad';
import SoftwareIcon from '@mui/icons-material/Business';
import AboutIcon from '@mui/icons-material/Info';
import SupportAgentIcon from '@mui/icons-material/SupportAgent'; // Changed icon
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { AppBar, Typography, Tabs, Tab, Toolbar, Box, styled } from '@mui/material';
import { useRouter } from 'next/navigation';
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
  marginLeft: 'auto',
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
  const [value, setValue] = useState(undefined);

  // Update tab selection based on the current path
  useEffect(() => {
    switch (router.pathname) {
      case '/':
        setValue(0);
        break;
      case '/church-software':
        setValue(1);
        break;
      case '/about':
        setValue(2);
        break;
      case '/sponsor': // Updated path for sponsor
        setValue(3);
        break;
      default:
        setValue(0);
    }
  }, [router.pathname]);

  // Conditionally render the top nav only on desktop
  if (!isDesktop) return null;

  return (
    <StyledAppBar position="static">
      <Toolbar
        style={{
          margin: '0 auto',
          padding: '0 var(--size-gutter)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 'var(--size-content)',
        }}
      >
        {/* Logo */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Image src={logo} alt="MinistryWare logo" width={30} height={30} />
          <BrandingText variant="h6" component="div" sx={{ lineHeight: '35px', ml: 1 }}>
            MinistryWare
          </BrandingText>
        </Box>

        {/* Tabs */}
        <StyledTabs
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            // Navigate to corresponding page
            switch (newValue) {
              case 0:
                router.push('/');
                break;
              case 1:
                router.push('/church-software');
                break;
              case 2:
                router.push('/about');
                break;
              case 3:
                router.push('/sponsor'); // Updated path for sponsor
                break;
              default:
                router.push('/');
            }
          }}
        >
          <Tab icon={<ArcadeIcon />} label="Arcade" />
          <Tab icon={<SoftwareIcon />} label="Software" />
          <Tab icon={<AboutIcon />} label="About" />
          <Tab icon={<SupportAgentIcon />} label="Sponsor" /> {/* Changed label and icon */}
        </StyledTabs>
      </Toolbar>
    </StyledAppBar>
  );
};

export default TopNav;
