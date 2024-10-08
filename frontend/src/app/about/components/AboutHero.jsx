"use client"

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter'; // Import the new typewriter library
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
// import backgroundImage from '../../../images/woman-prayer-hero-compress.jpg'; // Use your background image

// Background Image Styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start', // Align text to the left
  height: 'calc(100vh - 50px)', // Adjust height
  backgroundImage: `url(/images/woman-prayer-hero-compress.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  color: '#fff',
  textAlign: 'left', // Align text to the left
  overflow: 'hidden',
  zIndex: 1,
}));

// Animation for background movement
const StyledBackground = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: '50%',
  width: '200%', // Make it wider to accommodate movement
  height: '100%',
  transform: 'translateX(-50%)', // Center the image
  backgroundImage: `url(/images/woman-prayer-hero-compress.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'left center',
  animation: 'moveBackground 1s ease-in-out forwards',
  '@keyframes moveBackground': {
    '0%': { transform: 'translateX(-50%)' }, // Start from center
    '100%': { transform: 'translateX(-75%)' }, // Move to left
  },
}));

// Dark Transparent Box Styling
const TextBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgba(0, 0, 0, 0.2)', // Dark transparent background
  padding: theme.spacing(3),
  position: 'absolute',
  top: "75%",
  left: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  [theme.breakpoints.up('md')]: {
    bottom: '10%', // Position for desktop
    left: 'auto',
    right: 'auto',
    borderRadius: theme.shape.borderRadius, // Optional: add rounded corners
  },
  [theme.breakpoints.down('md')]: {
    bottom: '-10%', // Position for mobile/tablet
    transform: 'translateY(-50%)',
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
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the paragraph is visible
  });
  return (
    <HeroSection>
      <StyledBackground />
      <Container sx={{
        zIndex: 2,
        height: "inherit",
      }}>
        <TextBox sx={{ minHeight: "192px", }}>
          <Typography variant="h2" sx={{ fontWeight: 'boldest', minHeight: "77px", fontSize: { xs: '2rem', md: '3rem' } }}>
            <Typewriter
              words={['Software that Spreads the Good Word']}
              loop={1}
              typeSpeed={15}
              deleteSpeed={30}
              delaySpeed={500}
            />
          </Typography>

          <Typography
            ref={paragraphRef} // Add ref to the paragraph for fade-up animation
            variant="h6"
            sx={{
              marginTop: 2,
              fontSize: { xs: '1rem', md: '1.25rem' },
              maxWidth: '600px',
              ...fadeUp, // Initial style
              ...(paragraphInView && fadeUpVisible), // Apply fade-up when in view
            }}
          >
            MinistryWare empowers communities to share faith and connect through innovative software solutions.
          </Typography>
        </TextBox>
      </Container>
    </HeroSection>
  );
};

export default AboutHero;