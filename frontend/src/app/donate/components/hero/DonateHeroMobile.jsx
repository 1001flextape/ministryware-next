"use client";

import React, { useEffect, useState, Suspense, lazy } from 'react';
import { Box, Container, Typography } from '@mui/material';
import { styled } from '@mui/system';

// Hero Section styling with responsive handling
const HeroSection = styled(Box)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  height: 'calc(100vh - 50px)', // Adjust height
  overflow: 'hidden',
  zIndex: 1,
  // Ensure the image fills the section
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 0,
  },
}));

// "You Matter" text styling with animation
const YouMatterText = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  bottom: '150px', // Adjusted positioning
  left: '20px',
  fontSize: '80px', // Size of the text
  color: 'white', // Fill color for the text
  fontFamily: "'Great Vibes', cursive", // Fancy cursive font
  textShadow: '2px 2px 0 black, -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black', // Black outline
  zIndex: 3,
  animation: 'text-flicker-in-glow 2.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
}));

// Lazily load the Branding component
const Branding = lazy(() => import('@/components/Branding'));

const DonateHeroMobile = () => {
  const [highResLoaded, setHighResLoaded] = useState(false);

  // Load the high-resolution image when the component mounts
  useEffect(() => {
    const img = new Image();
    img.src = '/images/donation-hero-compress.jpg'; // High-resolution image
    img.onload = () => {
      setHighResLoaded(true); // Set the state to true when the image is loaded
    };
  }, []);

  return (
    <HeroSection>
      {/* Low-resolution hero image */}
      <img 
        src="/images/donation-hero-compress-low-res.jpg" 
        alt="Donation Hero Loading Image" 
        // loading="lazy" 
      />
      {/* High-resolution hero image overlays the low-res one */}
      {highResLoaded && (
        <img 
          src="/images/donation-hero-compress.jpg" 
          alt="Donation Hero" 
          loading="lazy" 
        />
      )}
      {/* <Suspense fallback={<div>Loading...</div>}>
        <Branding />
      </Suspense> */}
      <Container sx={{ zIndex: 2, height: "inherit" }}>
        {/* "You Matter" Text */}
        <YouMatterText className="text-flicker-in-glow">
          You <br />Matter
        </YouMatterText>
      </Container>
    </HeroSection>
  );
};

export default DonateHeroMobile;
