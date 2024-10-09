"use client"

import React from 'react';
import Layout from "./../layouts/frontWebsiteLayout/layout";

import ArcadeHomeAppBar from './index/components/ArcadeHomeAppBar';
import ArcadeHomeList from './index/components/ArcadeHomeList';
import Head from 'next/head';

const IndexPage = () => (
  <>
    {/* Next.js Head for metadata */}
    <Head>
      <title>Home</title>
      <meta name="description" content="Welcome to the Arcade Home Page" />
    </Head>

    {/* Layout and other components */}
    <Layout>
      <ArcadeHomeAppBar />
      <ArcadeHomeList />
      {/* Uncomment this to enable the iframe */}
      {/* 
      <iframe
        src={`/ministryware/malbran-games/index.html`}
        width="100%"
        style={{ height: 'calc(100vh - 56px)' }}
        frameBorder="0"
        title="Game 2"
      /> 
      */}
    </Layout>
  </>
);

export default IndexPage;
