import React from 'react';
import { Box, LinearProgress, Typography, styled } from '@mui/material';
import Branding from '@/components/Branding';

// Styled components
const SponsorshipContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ADD8E6', // Light blue background
  padding: '20px',
  textAlign: 'center',
  width: '100%',
  minHeight: '150px',
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

const SponsorshipProgress = () => {
  const totalSponsorships = 180;
  const remainingSponsorships = 25; // Change this value to show different progress

  const progressValue = ((totalSponsorships - remainingSponsorships) / totalSponsorships) * 100;

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
      </SponsorshipContainer>
    </>
  );
};

export default SponsorshipProgress;
