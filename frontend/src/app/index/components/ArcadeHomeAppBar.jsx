import React from 'react';
import { AppBar, Toolbar, Typography, Box, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router'; // For Next.js navigation
import Image from 'next/image'; // Use Next.js Image component
import logo from "../../../images/ministry-ware-logo.png"; // Assuming this is a local image
import { useTheme } from '@mui/material/styles';

const StyledAppBar = styled(AppBar)({
  background: 'linear-gradient(90deg, #1AA6B7 50%, rgb(2, 45, 65) 50%)', // Split AppBar background
  color: '#fff', // Ensure text is white for both colors
});

const Branding = styled(Box)({
  display: 'flex',
  alignItems: 'center', // Align logo and text vertically
  gap: '10px', // Space between logo and text
  cursor: 'pointer',
});

const BrandingText = styled(Typography)({
  // Add text stroke effect
  WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Adjust the opacity to achieve a softer black
  fontWeight: 'bold', // Set a high font weight
});

const ArcadeHomeAppBar = () => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter(); // Use Next.js router

  if (!isTabletOrMobile) {
    return null; // Return null if not mobile or tablet
  }

  return (
    <StyledAppBar position="static">
      <Toolbar>
        {/* MinistryWare section (left side) */}
        <Branding
          sx={{
            flexGrow: 1,
            backgroundColor: '#1AA6B7',
            paddingRight: '16px',
          }}
          onClick={() => router.push('/')} // Use Next.js navigation
        >
          <Box sx={{ position: 'relative', height: 30, width: 30 }}>
            <Image
              src={logo}
              alt="MinistryWare logo"
              layout="fill" // Fill the parent Box
              objectFit="contain" // Maintain aspect ratio
            />
          </Box>
          <BrandingText variant="h6" sx={{ lineHeight: '35px' }}>
            MinistryWare
          </BrandingText>
        </Branding>

        {/* Arcade section (right side) */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(2, 45, 65)',
            paddingLeft: '16px',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontFamily: `"Jacquarda Bastarda 9", serif`,
              fontSize: '32px',
              color: 'aqua',
            }}
          >
            Arcade
          </Typography>
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
};

export default ArcadeHomeAppBar;
