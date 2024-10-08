"use client"

import React from 'react';
import Layout from "../../layouts/frontWebsiteLayout/layout";
import DonateHero from './components/DonateHero';
import DonationSectionContent from './components/DonationSectionContent';
import Head from 'next/head';

// DonatePage Component
const DonatePage = () => (
  <Layout>
    <Head>
      <title>Donate</title>
      {/* Add any additional meta tags here */}
      <meta name="description" content="Support our mission by donating. Your contributions make a difference." />
    </Head>
    <DonateHero />
    <DonationSectionContent />
    <br />
    <br />
  </Layout>
);

export default DonatePage;
