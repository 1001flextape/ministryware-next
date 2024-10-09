"use client";

import React, { useEffect, useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import Branding from '@/components/Branding';

// Styled components for the about page
const AboutContainer = styled(Container)(({ theme }) => ({
  // backgroundColor: `${theme.palette.background.default} !important`,
  padding: '0px !important',
  borderRadius: 0,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: 'var(--size-content)',
  margin: 'auto',
  // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 90%)', // Slanted left edge
  
}));

// Hero Section with 60% text on the left and 40% image on the right
const HeroSection = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  height: '280px', // Fixed height of 200px
  backgroundColor: '#ADD8E6', // Fallback color
  textAlign: 'left',
  overflow: 'hidden',
  zIndex: 1,
}));

// Left Content Styling (60% width)
const LeftContent = styled(Box)(({ theme }) => ({
  width: '60%', // Take up 60% of the hero section
  padding: theme.spacing(2),
  zIndex: 2,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
}));

// Right Image Section with a slanted left edge
const RightImageSection = styled(Box)(({ theme }) => ({
  width: '40%', // Take up 40% of the hero section
  height: '280px', // Ensure it matches the height of the hero section
  position: 'relative',
  overflow: 'hidden',
  clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)', // Slanted left edge
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover', // Cover the entire 40% section
  },
}));

// Dark Transparent Box Styling
const TextBox = styled(Box)(({ theme }) => ({
  // backgroundColor: 'rgba(0, 0, 0, 0.5)', // Darker transparent background
  color: 'rgba(0, 0, 0, 0.8)', // Darker transparent background
  padding: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  maxWidth: '600px', // Limit width for better readability
}));

const AboutHeroDesktop = () => {
  const [highResLoaded, setHighResLoaded] = useState(false);
  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Load the high-resolution image
  useEffect(() => {
    const img = new Image();
    img.src = '/images/woman-prayer-hero-high-res.jpg'; // Ensure this path is correct
    img.onload = () => {
      setHighResLoaded(true);
    };
  }, []);

  return (
    <AboutContainer>
      <HeroSection>
        {/* Left Side Content */}
        <LeftContent>
          <Branding />
          <TextBox>
            <Typography variant="h2" sx={{ fontWeight: 'bold', fontSize: { xs: '1rem', md: '2rem' }, height: "77px" }}>
              <Typewriter
                words={['Software that Spreads the Good Word']}
                loop={1}
                typeSpeed={15}
                deleteSpeed={30}
                delaySpeed={500}
              />
            </Typography>

            {/* Paragraph with Intersection Observer */}
            <Typography
              ref={paragraphRef}
              variant="h6"
              sx={{
                marginTop: 2,
                fontSize: { xs: '1rem', md: '1.25rem' },
                opacity: paragraphInView ? 1 : 0,
                transform: paragraphInView ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
              }}
            >
              MinistryWare empowers communities to share faith and connect through innovative software solutions.
            </Typography>
          </TextBox>
        </LeftContent>

        {/* Right Side Image (40%) */}
        {highResLoaded && (
          <RightImageSection>
            <img src="/images/woman-prayer-hero-high-res.jpg" alt="Hero Image" />
          </RightImageSection>
        )}
      </HeroSection>
    </AboutContainer>
  );
};

export default AboutHeroDesktop;
