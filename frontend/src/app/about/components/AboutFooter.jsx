"use client"

import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, useTheme, keyframes } from '@mui/system';
import { useInView } from 'react-intersection-observer';

// Fade-in keyframe animation
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px); // Start slightly below
  }
  100% {
    opacity: 1;
    transform: translateY(0); // End at the original position
  }
`;

// Footer Styling
const FooterSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[900],
  color: theme.palette.common.white,
  padding: theme.spacing(6, 0),
  textAlign: 'center',
}));

// Staggered Fade-In for Typography
const FadeInTypography = styled(Typography)(({ theme, delay }) => ({
  opacity: 0,
  animation: `${fadeIn} 0.8s ease-in-out forwards`,
  animationDelay: `${delay}s`, // Delay based on the passed delay prop
}));

const AboutFooter = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-130px', // Adjust this if you need it to trigger earlier/later
  });

  const [startAnimation, setStartAnimation] = useState(false);

  // Start animation when the footer is in view
  React.useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <FooterSection ref={ref} style={{ minHeight: "250px" }}>
      <Container sx={{
        maxWidth: "var(--size-content)",
        margin: "auto",
      }}>
        {startAnimation && (
          <>
            {/* First Typography (Title) */}
            <FadeInTypography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }} delay={0}>
              Want to Learn More About MinistryWare?
            </FadeInTypography>

            {/* Second Typography (Description) */}
            <FadeInTypography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.75, margin: "auto", }} delay={0.2}>
              Discover how our software solutions can help you connect with your community and spread the good word.
            </FadeInTypography>
          </>
        )}
      </Container>
    </FooterSection>
  );
};

export default AboutFooter;
