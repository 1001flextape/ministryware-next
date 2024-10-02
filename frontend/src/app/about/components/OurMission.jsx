"use client"

import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { styled, useTheme, keyframes } from '@mui/system'; // Import keyframes for animation
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

// Fade-in from top to bottom keyframe
const fadeInTopBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px); // Start slightly above
  }
  100% {
    opacity: 1;
    transform: translateY(0); // End at the original position
  }
`;

// Section Styling
const MissionSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
}));

// Content Box Styling with fade-in animation
const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

// Fade-in styled Typography for the paragraph
const FadeInTypography = styled(Typography)(({ theme }) => ({
  opacity: 0, // Initially hidden
  animation: `${fadeInTopBottom} 1s ease-in-out forwards`, // Apply the animation
  animationDelay: '0.3s', // Delay before the animation starts
}));

const OurMission = () => {
  const theme = useTheme();

  // Using rootMargin to offset the trigger point
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-100px',
  });

  const [startTypewriter, setStartTypewriter] = useState(false);

  // Trigger typewriter and fade-in effect when the section enters the viewport
  React.useEffect(() => {
    if (inView) {
      setStartTypewriter(true);
    }
  }, [inView]);

  return (
    <MissionSection ref={ref}>
      <Container>
        <ContentBox>
          <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(3) }}>
            {startTypewriter ? (
              <Typewriter
                words={['Our Mission']}
                loop={1}
                typeSpeed={35}
                deleteSpeed={1}
                delaySpeed={330}
              />
            ) : (
              'Our Mission' // Placeholder text while not in view
            )}
          </Typography>

          {/* Paragraph with fade-in effect */}
          {startTypewriter && (
            <FadeInTypography
              variant="body1"
              sx={{
                fontSize: '1.25rem', lineHeight: 1.75, margin: "auto",
                textAlign: "justify",
              }}
            >
              At MinistryWare, we create software that brings people closer together. We believe in the power of technology to enhance faith-based connections, and we are committed to building solutions that enable communities to flourish.
            </FadeInTypography>
          )}
        </ContentBox>
      </Container>
    </MissionSection>
  );
};

export default OurMission;
