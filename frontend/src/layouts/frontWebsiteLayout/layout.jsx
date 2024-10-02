"use client"; // Ensure this is added to indicate it's a client component

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme"; // Adjust this path based on your project structure
import BottomNav from "./BottomNav"; // Adjust paths as necessary
import TopNav from "./TopNav"; // Adjust paths as necessary
import Head from "next/head";
import './layout.css'

// Define your site metadata here
const siteMetadata = {
  title: "MinistryWare",
  description: "MinistryWare empowers churches and communities by providing innovative software solutions designed to support and uplift their missions.",
};

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>{siteMetadata.title}</title>
        <meta name="description" content={siteMetadata.description} />
      </Head>
      <TopNav />
      <div
        style={{
          margin: `0 auto`,
        }}
      >
        <main>{children}</main>
        <BottomNav />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
