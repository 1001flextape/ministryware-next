"use client"

import React, { useState, useEffect } from 'react';
import { Box, Typography, Grid, Container } from '@mui/material';
import { styled, useTheme, keyframes } from '@mui/system';
import { useInView } from 'react-intersection-observer';
// import churchImage from '../../../../public/images/church-technology.jpg'; // Example image

// Fade-in keyframe
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

// Section Styling
const SolutionsSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(8, 0),
}));

// Image Box Styling
const ImageBox = styled(Box)(({ theme }) => ({
  backgroundImage: `url(/images/church-technology.jpg)`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '300px',
  [theme.breakpoints.up('md')]: {
    height: '400px',
  },
}));

// Content Box Styling
const ContentBox = styled(Box)(({ theme }) => ({
  padding: theme.spacing(3),
}));

// Staggered Fade-In for the Text
const FadeInTypography = styled(Typography)(({ delay }) => ({
  opacity: 0,
  animation: `${fadeIn} 0.8s ease-in-out forwards`,
  animationDelay: `${delay}s`, // Delays based on the delay prop for cascading effect
}));

const InnovativeSolutions = () => {
  const theme = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '-160px', // Adjust if needed to trigger earlier/later
  });

  const [startAnimation, setStartAnimation] = useState(false);

  // Trigger animation when component is in view
  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
    }
  }, [inView]);

  return (
    <SolutionsSection ref={ref}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <ImageBox />
          </Grid>

          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <ContentBox>
              {startAnimation && (
                <>
                  {/* Title with Fade-in */}
                  <FadeInTypography
                    variant="h4"
                    sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}
                    delay={0.5} // First item, no delay
                  >
                    Supporting Addiction Recovery with Online Games and Mobile Resources
                  </FadeInTypography>

                  {/* Main paragraph with Fade-in */}
                  <FadeInTypography
                    variant="body1"
                    sx={{ fontSize: '1.25rem', lineHeight: 1.75 }}
                    delay={0.7} // Slight delay for cascading effect
                  >
                 A collection of tools designed to assist individuals on their journey to recovery. From engaging online games that promote positive habits to mobile apps that offer accessible resources, our solutions are tailored to help individuals stay focused and supported.
                  </FadeInTypography>

                  {/* List Items with cascading fade-in */}
                  <FadeInTypography variant="body2" sx={{ marginTop: theme.spacing(2), mb: theme.spacing(1) }} delay={0.9}>
                  <strong>Recovery-Friendly Online Games:</strong> Engage with interactive games designed to support mental wellness, helping to build positive habits and reduce addictive behaviors.
                  </FadeInTypography>
                  <FadeInTypography variant="body2" sx={{ mb: theme.spacing(1) }} delay={1.0}>
                  <strong>Mobile Apps for Recovery:</strong> Access valuable recovery resources on the go, ensuring support is always within reach. These apps provide an easy, secure way to track progress and access help, reducing the risk of losing important paperwork.
                  </FadeInTypography>
                  <FadeInTypography variant="body2" sx={{ mb: theme.spacing(1) }} delay={1.1}>
                  <strong>Community Support:</strong> Stay connected with recovery groups through built-in messaging features, ensuring continuous support and accountability throughout the recovery journey.
                  </FadeInTypography>
                </>
              )}
            </ContentBox>
          </Grid>
        </Grid>
      </Container>
    </SolutionsSection>
  );
};

export default InnovativeSolutions;
