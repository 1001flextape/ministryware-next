"use client"

import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled, useTheme } from '@mui/system';

// Styling for the new donation section
const DonationSection = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  padding: theme.spacing(6, 0),
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

// Styled Button
const DonateButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(1.5, 4),
  fontSize: '1.25rem',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.common.white,
  '&:hover': {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const DonationSectionContent = () => {
  const theme = useTheme();

  return (
    <DonationSection>
      <Container>
        {/* Title */}
        <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: theme.spacing(2) }}>
          Make a Difference Today
        </Typography>
        
        {/* Description */}
        <Typography variant="body1" sx={{ fontSize: '1.25rem', lineHeight: 1.75, maxWidth: '600px', margin: '0 auto' }}>
          Your generous donations help us continue to support our community and spread our mission. Every contribution counts, and together we can make an impact.
        </Typography>
        
        {/* Donate Button */}
        <DonateButton variant="contained" target="_blank" href="https://www.paypal.com/donate/?business=CCJ2MBTCDUZFS&no_recurring=0&item_name=Your+donation+to+Ministryware.org+funds+the+LLC%2C+homeless+resource+app%2C+and+safe+online+games+for+addiction+recovery.&currency_code=USD">
          Donate Now
        </DonateButton>
      <br />
      <br />
      <br />
      <br />
      </Container>
    </DonationSection>
  );
};

export default DonationSectionContent;