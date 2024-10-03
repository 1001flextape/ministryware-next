"use client"

import { useTheme, useMediaQuery, Box } from '@mui/material';
import { useEffect, useState } from 'react';

const PreviewPage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md')); // Desktop or tablet
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Mobile only

  const [showPhoneFrame, setShowPhoneFrame] = useState(null);

  useEffect(() => {
    // If on desktop or tablet, show the phone frame, otherwise, fullscreen on mobile
    setShowPhoneFrame(!isMobile);
  }, [isMobile]);

  // Determine the iframe URL based on the environment
  const iframeUrl = process.env.NODE_ENV === 'development' 
    ? "http://localhost:8000"
    : "/public/homeless-app-digitalization-example/index.html"; // Prod build path

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0', // Background for the page
        overflow: 'hidden',
      }}
    >
      {showPhoneFrame && (
        // Display phone frame on desktop/tablet
        <Box
          sx={{
            width: '375px', // iPhone 6/7/8 width
            height: '667px', // iPhone 6/7/8 height
            background: 'url(/images/phone-frame.png)', // Add a phone frame image here
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            boxShadow: '0px 4px 20px rgba(0,0,0,0.2)', // Optional shadow for effect
            borderRadius: '30px', // Make corners round to match phone screen
          }}
        >
          {/* Inner iframe representing the app preview */}
          <iframe
            src={iframeUrl}
            style={{
              width: '100%',
              height: '100%',
              border: 'none',
              borderRadius: '20px', // Optional for rounder corners on the iframe
            }}
            title="App Preview"
          />
        </Box>
      )}
      {showPhoneFrame === false && (
        // Fullscreen iframe on mobile
        <iframe
          src={iframeUrl}
          style={{ width: '100vw', height: '100vh', border: 'none' }}
          title="App Preview"
        />
      )}
    </Box>
  );
};

export default PreviewPage;
