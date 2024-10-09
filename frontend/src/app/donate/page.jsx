"use client"

import React from 'react';
import Layout from "../../layouts/frontWebsiteLayout/layout";
import DonateHero from './components/DonateHero';
import DonationSectionContent from './components/DonationSectionContent';
import Head from 'next/head';
import { styled } from '@mui/system';
import { Container } from '@mui/material';


// Styled components for the donate page
const DonateContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 0,
  padding: "0px !important",
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: "var(--size-content) !important",
  margin: 'auto',
}));

// DonatePage Component
const DonatePage = () => (
  <Layout title={"Donate"}>
    <Head>
      <title>Donate</title>
      {/* Add any additional meta tags here */}
      <meta name="description" content="Support our mission by donating. Your contributions make a difference." />
    </Head>
    <DonateContainer>
      <DonateHero />
      <DonationSectionContent />
    </DonateContainer>
  </Layout>
);

export default DonatePage;
