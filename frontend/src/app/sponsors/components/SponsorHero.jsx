import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import Branding from "../../../components/Branding"

// Styled container for hero section
const HeroContainer = styled(Box)(({ theme }) => ({
  // backgroundImage: 'url(/images/donation-hero-wide.jpg)', // Path to your background image
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  // height: '80px', // Adjust height as needed
  display: 'block',
  flexDirection: 'column',
  justifyContent: 'center', // Vertically centers the content
  alignItems: 'center', // Horizontally centers the content
  // paddingTop: '50px', // Space for branding on top
  textAlign: 'center', // Centers text content
  [theme.breakpoints.up('md')]: {
    marginTop: "15px",
  }
}));

// Styling for the content wrapper
const ContentWrapper = styled(Box)({
  maxWidth: 'var(--size-content)', // Limit the width for the content
  margin: 'auto',
  padding: '0 20px', // Adding some padding for small screens
});

// Custom styled text for the "Sponsor" title with text stroke
const StyledTypography = styled(Typography)({
  color: 'white',
  fontWeight: 'bold', // Makes the text bold
  fontSize: '64px', // Adjust font size as needed
  WebkitTextStroke: '2px black', // Creates the black outline (stroke)
  textTransform: 'uppercase', // Optional: transform to uppercase
});

function SponsorHero() {
  return (
    <HeroContainer>
      <Branding />
      <ContentWrapper>
        {/* Sponsor text with text stroke */}
        <StyledTypography variant="h1" component="h1" gutterBottom>
          Sponsors
        </StyledTypography>
      </ContentWrapper>
    </HeroContainer>
  );
}

export default SponsorHero;
