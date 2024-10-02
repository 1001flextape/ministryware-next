import React from 'react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image'; // Next.js Image component for optimized images
import logo from "../../public/images/ministry-ware-logo.png"; // Ensure the image is in the public folder for Next.js

// Styled components for branding
const BrandingContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  cursor: 'pointer',
  paddingLeft: "24px",
  paddingTop: "16px",
});

const BrandingText = styled(Typography)({
  WebkitTextStroke: '1px rgba(0, 0, 0, 0.7)', // Text stroke effect
  fontWeight: 'bold',
});

const Branding = ({ onClick }) => {
  const theme = useTheme();
  const isTabletOrMobile = useMediaQuery(theme.breakpoints.down('md'));

  if (!isTabletOrMobile) {
    return null; // Do not render on desktop
  }

  return (
    <BrandingContainer onClick={onClick}>
      {/* Next.js Image component for optimization */}
      <Image src={logo} alt="MinistryWare logo" height={30} width={30} />
      <BrandingText variant="h6" component="div">
        MinistryWare
      </BrandingText>
    </BrandingContainer>
  );
};

export default Branding;
