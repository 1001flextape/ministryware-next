"use client"

import React from "react";
import Layout from "../../layouts/frontWebsiteLayout/layout";
import AboutHero from "./components/AboutHero";
import OurMission from "./components/OurMission";
import InnovativeSolutions from "./components/InnovativeSolutions";
import AboutFooter from "./components/AboutFooter";
import Head from "next/head";
import { styled } from '@mui/system';
import { Container } from "@mui/material";

// Styled components for the about page
const AboutContainer = styled(Container)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: 0,
  padding: "0px !important",
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  maxWidth: "var(--size-content) !important",
  margin: 'auto',
}));

const AboutPage = () => {
  return (
    <Layout title={"About"}>
      <Head>
        {/* <title>About | MinistryWare</title> */}
        <meta name="description" content="Learn more about MinistryWare's mission, values, and innovative solutions." />
      </Head>
      <AboutContainer>
        <AboutHero />
        <OurMission />
        <InnovativeSolutions />
        <AboutFooter />
        <br />
        <br />
        <br />
        <br />
      </AboutContainer>
    </Layout>
  );
};

export default AboutPage;
