"use client"

import React from 'react';
import { Box, Typography, Container, useTheme } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import backgroundImage from '../../../../public/images/woman-prayer-hero-compress.jpg'; // Background image import
// import Branding from '../../branding/Branding';

// Hero section with updated desktop styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'center', // Align vertically center for better appearance
  height: '100vh', // Full height for hero
  backgroundImage: `url(/images/woman-prayer-hero-compress.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'left',
  overflow: 'hidden',
  zIndex: 1,
  [theme.breakpoints.up('md')]: {
    height: '250px', // Shorter height for desktop
    justifyContent: 'center',
  },
}));

// Styled background image with content width and blur
const StyledBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: 'var(--size-content)', // Limit the content width
  height: '100%',
  backgroundImage: `url(/images/woman-prayer-hero-compress.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  transform: 'translateX(-50%)', // Center the image
  zIndex: 1,
}));

// Blurred sides (left and right) with TypeScript support
const BlurSide = styled(Box)(({ side, theme }) => ({
  position: 'absolute',
  top: 0,
  [side]: 0, // Dynamically position on left or right side
  width: '25%', // Define the width of the blur on sides
  height: '100%',
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: side === 'left' ? 'left center' : 'right center',
  filter: 'blur(20px)', // Apply the blur effect
  zIndex: 0,
}));

// Dark transparent box styling
const TextBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker transparent background for contrast
  padding: theme.spacing(3),
  position: 'relative',
  zIndex: 2, // Ensure content appears above the background
  maxWidth: 'var(--size-content)', // Limit the width for the content
  margin: 'auto auto 0 auto',
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(5),
    textAlign: 'left', // Center the text for larger screens
    height: '250px', // Shorter height for desktop
    width: "50%",
    margin: 0,
    backgroundColor: "transparent",
    WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Adjust the opacity to achieve a softer black
    fontWeight: 'bold', // Set a high font weight
  },
}));

// Keyframes for fade-up animation
const fadeUp = {
  opacity: 0,
  transform: 'translateY(20px)',
  transition: 'opacity 1s ease-out, transform 1s ease-out',
};

const fadeUpVisible = {
  opacity: 1,
  transform: 'translateY(0)',
};

const AboutHero = () => {
  const theme = useTheme();

  // Typed hook for InView
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <HeroSection>
      {/* Blurred sides for desktop */}
      <BlurSide side="left" />
      <StyledBackground />
      <BlurSide side="right" />

      <Container sx={{ zIndex: 2, height: 'inherit', p: '0 !important', display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
        {/* <Branding /> */}
        <Box
          style={{ maxWidth: 'var(--size-content)', margin: 'auto' }}
          sx={{
            maxWidth: 'var(--size-content)', // Limit the width for the content
            margin: 'auto',
            [theme.breakpoints.down('lg')]: {
              margin: 'auto auto 0 auto !important', // Apply media query styling
            },
          }}
        >
          <TextBox>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '2rem', md: '3rem' } }}>
              <Typewriter words={['Software that Spreads the Good Word']} loop={1} typeSpeed={15} deleteSpeed={30} delaySpeed={500} />
            </Typography>

            <Typography
              ref={paragraphRef}
              variant="h6"
              sx={{
                marginTop: 2,
                fontSize: { xs: '1rem', md: '1.25rem' },
                maxWidth: '600px',
                ...fadeUp,
                ...(paragraphInView && fadeUpVisible),
                [theme.breakpoints.up('md')]: {
                  display: "none",
                },
              }}
            >
              MinistryWare empowers communities to share faith and connect through innovative software solutions.
            </Typography>
          </TextBox>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default AboutHero;
