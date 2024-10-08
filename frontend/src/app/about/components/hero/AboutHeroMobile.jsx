"use client"

import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter'; // Import the new typewriter library
import { useInView } from 'react-intersection-observer'; // Import Intersection Observer
import Branding from '@/components/Branding';

// Background Image Styling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start', // Align text to the left
  height: 'calc(100vh - 50px)', // Adjust height
  backgroundColor: '#ADD8E6', // Fallback color
  color: '#fff',
  textAlign: 'left', // Align text to the left
  overflow: 'hidden',
  zIndex: 1,
  backgroundColor: '#9a8999', // A color similar to the image background
  transition: 'background-image 0.5s ease-in-out', // Add transition here
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

// Animation for background image movement from right to left
const backgroundMove = {
  transform: 'translateX(0)', // Start at the normal position
  transition: 'transform 3s ease-out', // Smooth transition for 3 seconds
};

const backgroundMoveLeft = {
  transform: 'translateX(-30%)', // Move the image to the left
  transition: 'transform 3s ease-out', // Smooth transition for 3 seconds
};

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

const AboutHeroMobile = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [highResLoaded, setHighResLoaded] = useState(false);
  const [imageMoved, setImageMoved] = useState(false);
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true, // Trigger only once
    threshold: 0.1, // Trigger when 10% of the paragraph is visible
  });

  // Load the high-resolution image and start the animation once it's loaded
  useEffect(() => {
    const img = new Image();
    img.src = '/images/woman-prayer-hero-high-res.jpg'; // High-resolution image
    img.onload = () => {
      setTimeout(() => {
        setImageMoved(true); // Start the image movement after loading
      }, 300); // Delay before the movement starts
      setHighResLoaded(true);
    };
    setIsLoaded(true)
  }, []);

  return (
    <HeroSection>
      <>{isLoaded && (
        <>
          <Box
            sx={{
              backgroundImage: `url(${highResLoaded ? '/images/woman-prayer-hero-high-res.jpg' : '/images/jpeg-optimizer_woman-prayer-hero-compress.jpg'})`, // Switch between compressed and high-res image
              position: 'absolute',
              top: 0,
              left: '0%', // Start from the right side (initial position)
              width: '200%', // Make it wider to accommodate movement
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Adjust positioning as needed
              ...(imageMoved ? backgroundMoveLeft : backgroundMove), // Trigger movement from right to left
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(/images/jpeg-optimizer_woman-prayer-hero-compress.jpg)`,
              position: 'absolute',
              top: 0,
              left: '0%', // Start from the right side (initial position)
              width: '200%', // Make it wider to accommodate movement
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Adjust positioning as needed
              ...(imageMoved ? backgroundMoveLeft : backgroundMove), // Trigger movement from right to left
            }}
          />
          <Box
            sx={{
              backgroundImage: `url(${highResLoaded ? '/images/woman-prayer-hero-high-res.jpg' : 'none'})`,
              position: 'absolute',
              top: 0,
              left: '0%', // Start from the right side (initial position)
              width: '200%', // Make it wider to accommodate movement
              height: '100%',
              backgroundSize: 'cover',
              backgroundPosition: 'center', // Adjust positioning as needed
              ...(imageMoved ? backgroundMoveLeft : backgroundMove), // Trigger movement from right to left
            }}
          />

          <Container sx={{
            zIndex: 2,
            height: "inherit",
            padding: "0px !important",
          }}>
            <Branding />
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
        </>
      )}
      </>
    </HeroSection>
  );
};

export default AboutHeroMobile;
