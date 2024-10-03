"use client"

import React, { useEffect } from 'react';
import Layout from "../../../../layouts/frontWebsiteLayout/layout";
import { Box, Container, Typography, Button, Breadcrumbs, Link } from '@mui/material';
import { styled } from '@mui/system';
import Branding from "../../../../components/Branding"
import LeadCaptureForm from "../../../../components/LeadCaptureForm"

// Styled components for the case study page
const CaseStudyContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: 0,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: '800px',
  margin: 'auto',
}));

const Section = styled(Box)(({ theme }) => ({
  marginBottom: '40px',
}));

const Title = styled(Typography)(({ theme }) => ({
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '20px',
}));

const Subheader = styled(Typography)(({ theme }) => ({
  fontSize: '1.5rem',
  color: '#555',
  marginBottom: '10px',
}));

const ButtonStyled = styled(Button)(({ theme }) => ({
  backgroundColor: '#007BFF',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#0056b3',
  },
  marginTop: '20px',
}));

const CaseStudy = () => {
  
  const handleFullScreenIframe = () => {
    const iframeSourceUrl = "/more/case-studies/homeless-app-digitalization/preview"; // Replace with actual URL

    // Create an iframe element
    const iframe = document.createElement('iframe');
    iframe.src = iframeSourceUrl;
    iframe.style.position = 'fixed';
    iframe.style.top = '0';
    iframe.style.left = '0';
    iframe.style.width = '100vw';
    iframe.style.height = '100vh';
    iframe.style.border = 'none';
    iframe.style.zIndex = '9999';

    // Create an exit button
    const exitButton = document.createElement('button');
    exitButton.innerText = "Exit";
    exitButton.style.position = 'absolute';
    exitButton.style.top = '10px';
    exitButton.style.right = '20px';
    exitButton.style.zIndex = '10000';
    exitButton.style.padding = '10px 20px';
    exitButton.style.backgroundColor = '#007BFF';
    exitButton.style.color = '#fff';
    exitButton.style.border = 'none';
    exitButton.style.cursor = 'pointer';
    exitButton.style.fontSize = '16px';

    // Append iframe and exit button to the body
    document.body.appendChild(iframe);
    document.body.appendChild(exitButton);

    // Request full-screen mode for the iframe
    iframe.requestFullscreen().catch(err => {
      console.error("Error attempting to enable full-screen mode:", err);
    });

    // Event listener to close the iframe and exit fullscreen
    const closeIframe = () => {
      document.exitFullscreen();
      iframe.remove();
      exitButton.remove();
    };

    // Attach click event to the exit button
    exitButton.addEventListener('click', closeIframe);

    // Listen for the 'Esc' key to close the iframe
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        closeIframe();
      }
    };
    
    document.addEventListener('keydown', handleEscapeKey);

    // Clean up the event listener when the iframe is closed
    iframe.addEventListener('fullscreenchange', () => {
      if (!document.fullscreenElement) {
        closeIframe();
        document.removeEventListener('keydown', handleEscapeKey);
      }
    });
  };

  return (
    <Layout>
      <div style={{

        maxWidth: 'var(--size-content)', // Limit the width for the content
        margin: '0 auto',
      }}>
        <Branding />
        <CaseStudyContainer>
          <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/more/index">
              More
            </Link>
            <Typography sx={{ color: 'text.primary' }}>Case Study</Typography>
          </Breadcrumbs>
          <Title>Case Studies: Application of Homeless Paperwork</Title>
          <Subheader>A Digital Solution for Streamlining Homeless Resource Recording</Subheader>

          <Section>
            <Typography>
              The goal of this project is to transform the current printed homeless paperwork into a streamlined digital app, enhancing efficiency for nonprofits and government agencies in tracking homeless resources.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h6">Problem Statement</Typography>
            <Typography>
              The current state of homelessness paperwork involves large volumes of paper forms that are difficult to track, inefficient, and not easily shareable between organizations. This app aligns with ongoing initiatives to create more shelters and improve service delivery.
            </Typography>
          </Section>

          <Section>
            <Typography variant="h6">Digital Solution</Typography>
            <ul>
              <li>Centralized Data Access: Multiple nonprofits can access and update resource information.</li>
              <li>Real-Time Updates: Information is available instantly across all devices.</li>
              <li>User-Friendly Interface: Streamlines data entry and reduces errors.</li>
              <li>Interoperability: Allows sharing of data between different agencies without delays.</li>
              <li>Customizable Reports: MKDocs-generated documents allow for quick adjustments and output.</li>
            </ul>
          </Section>

          <Section>
            <Typography variant="h6">No-Download App Preview</Typography>
            <Typography>
              A fully interactive experience awaits. See how the app streamlines paperwork without needing to download anything.
            </Typography>
            <ButtonStyled onClick={handleFullScreenIframe}>
              No Download. Instant App Preview.
            </ButtonStyled>
          </Section>

          <Section>
            <Typography variant="h6">Case Study Results</Typography>
            <Typography>Before and After Comparison:</Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', my: 4 }}>
              <img src="before-image.jpg" alt="Before: Paper-based Process" style={{ maxWidth: '45%' }} />
              <img src="after-image.jpg" alt="After: Digital App Process" style={{ maxWidth: '45%' }} />
            </Box>
          </Section>

          <Section>
            <Typography variant="h6">The Future Vision</Typography>
            <Typography>
              This app aims to provide real-time access to the homeless population's needs and resources, making the work of nonprofits more efficient while reducing paperwork costs and delays.
            </Typography>
          </Section>
        </CaseStudyContainer>
        <LeadCaptureForm/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
      </div>
    </Layout>
  );
};

export default CaseStudy;
