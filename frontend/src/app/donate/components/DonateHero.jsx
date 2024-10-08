"use client"

import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';
// import bananaWebp from '../../../images/dancing-banana.webp'; // Path to dancing banana webp

// Background Image Styling with responsive handling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  height: 'calc(100vh - 50px)', // Adjust height
  color: '#fff',
  textAlign: 'left', // Align text to the left
  overflow: 'hidden',
  zIndex: 1,
  backgroundSize: 'cover',
  backgroundPosition: 'right',
  // Desktop background
  backgroundImage: `url(/images/donation-hero-wide.jpg)`,
  [theme.breakpoints.down('md')]: {
    // Mobile/Tablet background
    backgroundImage: `url(/images/donation-hero-compress.jpg)`,
  },
}));

// "You Matter" text styling with animation
const YouMatterText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: '150px', // Adjusted positioning to 300px from the top
  left: '20px',
  fontSize: '80px', // Size of the text
  color: 'white', // Fill color for the text
  fontFamily: "'Great Vibes', cursive", // Fancy cursive font
  textShadow: '2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black', // Black outline
  zIndex: 3,
  animation: 'text-flicker-in-glow 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
}));

// Dancing banana webp (static at the bottom left)
// const Banana = styled('img')(({ theme }) => ({
//   position: 'absolute',
//   bottom: '5px', // Banana placed between 5px to 25px from bottom
//   left: '20px', // Positioned on the left side
//   width: '80px',
// }));

const DonateHero = () => {
  return (
    <HeroSection>
      <Container sx={{ zIndex: 2, height: "inherit" }}>
        {/* "You Matter" Text */}
        <YouMatterText className="text-flicker-in-glow">
          You <br />Matter
        </YouMatterText>

        {/* Dancing Banana */}
        {/* <Banana src={bananaWebp} alt="Dancing Banana" /> */}
      </Container>
    </HeroSection>
  );
};

export default DonateHero;