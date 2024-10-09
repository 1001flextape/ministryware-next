"use client";

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Branding from '@/components/Branding';

// Background Image Styling with responsive handling for desktop
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start', // Align text and content to the left
  height: 'calc(100vh - 100px)', // Full viewport height minus some space for headers
  color: '#fff',
  textAlign: 'left',
  overflow: 'hidden',
  zIndex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundImage: `url(/images/donation-hero-wide.jpg)`, // High-res image for desktop
}));

// "You Matter" text styling for desktop with animation
const YouMatterText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  top: '50%', // Center vertically on desktop
  left: '25%', // Adjusted position for desktop
  transform: 'translateY(-50%)', // Center the text vertically
  fontSize: '6rem', // Larger font size for desktop
  color: 'white',
  fontFamily: "'Great Vibes', cursive",
  textShadow: '2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black',
  zIndex: 3,
  animation: 'text-flicker-in-glow 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
  [theme.breakpoints.down('md')]: {
    fontSize: '4rem', // Adjust font size for medium screens
    left: '30px', // Adjust padding for medium screens
  },
}));

// Dancing banana webp (for future use if needed)
// const Banana = styled('img')(({ theme }) => ({
//   position: 'absolute',
//   bottom: '25px',
//   left: '40px', // Positioned on the left side
//   width: '100px', // Adjusted size for desktop
// }));

const DonateHeroDesktop = () => {
  return (
    <HeroSection>
      <Branding />
      <Container sx={{ zIndex: 2, height: 'inherit' }}>
        {/* "You Matter" Text */}
        <YouMatterText className="text-flicker-in-glow">
          You <br /> Matter
        </YouMatterText>

        {/* Dancing Banana */}
        {/* <Banana src={bananaWebp} alt="Dancing Banana" /> */}
      </Container>
    </HeroSection>
  );
};

export default DonateHeroDesktop;
