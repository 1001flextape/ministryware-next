"use client"

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled } from '@mui/system';
import { Typewriter } from 'react-simple-typewriter'; // Typewriter effect library
import { useInView } from 'react-intersection-observer'; // Intersection Observer

// Container styling for the Under Construction section
const ConstructionContainer = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  backgroundColor: '#f9f9f9',
  border: '1px solid #ddd',
  position: 'relative',
  zIndex: 1,
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

const UnderConstruction = () => {
  const { ref: headerRef, inView: headerInView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px',
  });

  const { ref: paragraphRef, inView: paragraphInView } = useInView({
    triggerOnce: true,
    rootMargin: '-200px',
  });

  return (
    <ConstructionContainer>
      <Container>
        <Typography
          ref={headerRef} // Add ref to the header for typewriter animation
          variant="h3"
          sx={{
            color: '#e91e63',
            fontWeight: 'bold',
            minHeight: '77px',
            fontSize: { xs: '2rem', md: '3rem' },
          }}
        >
          {headerInView && (
            <Typewriter
              words={['🚧 Under Construction 🚧']}
              loop={1}
              typeSpeed={15}
              deleteSpeed={30}
              delaySpeed={500}
            />
          )}
        </Typography>

        <Typography
          ref={paragraphRef} // Add ref to the paragraph for fade-up animation
          variant="h6"
          sx={{
            marginTop: 2,
            fontSize: { xs: '1rem', md: '1.25rem' },
            maxWidth: '600px',
            margin: '0 auto',
            ...fadeUp, // Initial fade-up style
            ...(paragraphInView && fadeUpVisible), // Apply fade-up when in view
          }}
        >
          MinistryWare is hard at work building something amazing! Stay tuned for updates, and consider donating to help accelerate the development.
        </Typography>
      </Container>
    </ConstructionContainer>
  );
};

export default UnderConstruction;
