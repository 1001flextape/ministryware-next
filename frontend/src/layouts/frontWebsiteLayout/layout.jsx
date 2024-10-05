"use client";

import React from "react";
import { ThemeProvider } from "@mui/material";
import theme from "./theme"; // Adjust path if necessary
import BottomNav from "./BottomNav"; // Adjust path if necessary
import TopNav from "./TopNav"; // Adjust path if necessary
import './layout.css'; // Adjust if needed

// Define your site metadata
const siteMetadata = {
  title: "MinistryWare",
  description:
    "MinistryWare empowers churches and communities by providing innovative software solutions designed to support and uplift their missions.",
};

// export const metadata = {
//   title: siteMetadata.title,
//   description: siteMetadata.description,
// };

const Layout = ({ title, children }) => {
  console.log('adding title:', title)
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <head>
          <title>{`${title} - MinistryWare`}</title>
          {/* Meta and Favicons */}
          <meta name="description" content={siteMetadata.description} />
          <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png" />
          <link rel="shortcut icon" href="/icons/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="192x192" href="/icons/android-chrome-192x192.png" />
          <link rel="icon" type="image/png" sizes="512x512" href="/icons/android-chrome-512x512.png" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        </head>
        <body>
          <TopNav />
          <div
            style={{
              margin: `0 auto`,
            }}
          >
            <main>{children}</main>
          </div>
          <BottomNav />
        </body>
      </html>
    </ThemeProvider>
  );
};

export default Layout;
