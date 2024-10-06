"use client"

import React from "react";
import Layout from "../../layouts/frontWebsiteLayout/layout";
import Head from "next/head";
import { Box, Typography } from "@mui/material";
import { styled } from '@mui/system';
import SponsorshipProgress from "./components/SponsorshipProgress"
import POSFloatingButton from "./components/POSFloatingButton";

const PageContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  padding: '40px',
  borderRadius: 0,
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: "var(--size-content)",
  margin: 'auto',
}));

// Placeholder for the sponsor box
const SponsorPlaceholder = ({ tier }) => (
  <Box
    sx={{
      backgroundColor: "#E0E0E0", // Light grey background
      height: 150, // Adjust the height of the placeholder as needed
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontWeight: "bold",
      color: "#333", // Darker text color
      borderRadius: "8px", // Slight border-radius for aesthetics
      marginBottom: "16px", // Space between boxes
    }}
  >
    {tier} Sponsor Placeholder
  </Box>
);

// Layout for sponsor tiers
const SponsorSection = () => (
  <Box>
    {/* Mega Tier */}
    <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
      Mega Sponsors
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "1fr", gap: "16px" }}>
      {/* 4 Full-width placeholders */}
      <SponsorPlaceholder tier="Mega" />
      <SponsorPlaceholder tier="Mega" />
      <SponsorPlaceholder tier="Mega" />
      <SponsorPlaceholder tier="Mega" />
    </Box>

    {/* 1st Tier */}
    <Typography variant="h5" sx={{ mb: 2, mt: 4, fontWeight: "bold" }}>
      1st Tier Sponsors
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" }}>
      {/* 15 rows of 2 columns */}
      {Array.from({ length: 30 }, (_, index) => (
        <SponsorPlaceholder key={index} tier="1st Tier" />
      ))}
    </Box>

    {/* 2nd Tier */}
    <Typography variant="h5" sx={{ mb: 2, mt: 4, fontWeight: "bold" }}>
      2nd Tier Sponsors
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
      {/* 10 rows of 3 columns */}
      {Array.from({ length: 30 }, (_, index) => (
        <SponsorPlaceholder key={index} tier="2nd Tier" />
      ))}
    </Box>

    {/* 3rd Tier */}
    <Typography variant="h5" sx={{ mb: 2, mt: 4, fontWeight: "bold" }}>
      3rd Tier Sponsors
    </Typography>
    <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
      {/* 29 rows of 4 columns */}
      {Array.from({ length: 116 }, (_, index) => (
        <SponsorPlaceholder key={index} tier="3rd Tier" />
      ))}
    </Box>
  </Box>
);

const IndexPage = () => (
  <Layout title={"Sponsors"}>
    {/* SEO Head */}
    <Head>
      <title>Sponsors | MinistryWare</title>
      <meta name="description" content="Welcome to MinistryWare's Sponsor Page. Learn about our sponsors and how to become one." />
    </Head>
    {/* <SponsorHero /> */}
    <SponsorshipProgress />
    <PageContainer>
      <SponsorSection />
    </PageContainer>
    <POSFloatingButton/>
  </Layout>
);

export default IndexPage;
