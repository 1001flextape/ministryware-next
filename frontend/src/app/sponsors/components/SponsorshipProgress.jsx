import React from 'react';
import { Box, LinearProgress, Typography, styled, Button } from '@mui/material';
import Branding from '@/components/Branding';

// Styled components
const SponsorshipContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ADD8E6', // Light blue background
  padding: '20px',
  textAlign: 'center',
  width: '100%',
  minHeight: '200px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  maxWidth: "var(--size-content)",
  margin: 'auto',
}));

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  width: '80%', // Adjust width as needed
  marginTop: '20px',
  height: '10px',
  borderRadius: '5px',
}));

// Point of Sale Button
const POSButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: '#022D41',
  color: '#ffffff',
  fontWeight: 'bold',
  padding: '10px 20px',
  borderRadius: '25px',
  '&:hover': {
    backgroundColor: '#035A74',
  },
}));

const SponsorshipProgress = () => {
  const totalSponsorships = 180;
  const remainingSponsorships = 25; // Change this value to show different progress

  const progressValue = ((totalSponsorships - remainingSponsorships) / totalSponsorships) * 100;

  // Handle click event for the POS button
  const handlePOSClick = () => {
    alert('Redirecting to Point of Sale...');
    // Logic to handle the POS action can be added here, e.g., navigating to a checkout page
  };

  return (
    <>
      <Branding />
      <SponsorshipContainer>
        <Typography variant="h5" color="primary">
          Limited Supply Sponsorships Available!
        </Typography>
        <Typography variant="body1">
          Hurry! Only {remainingSponsorships} sponsorships left out of {totalSponsorships}.
        </Typography>
        <ProgressBar variant="determinate" value={progressValue} />

        {/* Point of Sale Button */}
        <POSButton onClick={handlePOSClick}>
          Purchase Sponsorship
        </POSButton>
      </SponsorshipContainer>
    </>
  );
};

export default SponsorshipProgress;
