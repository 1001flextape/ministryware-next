"use client";

import React from "react";
import Layout from "../../../layouts/frontWebsiteLayout/layout";
import Head from "next/head";
import { Box, Typography, Card, CardContent, Button } from "@mui/material";
import { useRouter } from "next/navigation";
import LanguageIcon from "@mui/icons-material/Language"; // Placeholder for Chrome
import FirefoxIcon from "@mui/icons-material/LocalFireDepartment"; // Using a placeholder icon for Firefox
import Branding from "@/components/Branding";

const MorePage = () => {
  const router = useRouter();

  // Function to navigate to the detailed case study page
  const navigateToCaseStudy = () => {
    router.push("/more/case-studies/homeless-app-digitalization");
  };

  return (
    <Layout title={"More"}>
      <Head>
        <title>More | MinistryWare</title>
        <meta
          name="description"
          content="Explore MinistryWare's community-based projects and research on digitalizing homeless resource management."
        />
      </Head>

      <Branding />
      <br />
      <div
        style={{
          maxWidth: 'var(--size-content)', // Limit the width for the content
          margin: '0 auto',
        }}
      >
        {/* Apps Section */}
        {/* <Box sx={{ padding: "20px", borderRadius: 0 }}>
          <Typography variant="h4">Apps</Typography>
          <div
            style={{
              color: "rgb(126, 126, 126)",
              fontSize: 16,
              paddingBottom: "1rem",
            }}
            gutterBottom
          >
            Explore innovative tools
          </div>

          {/* Case Study Card for Bionic Reading *
          <Card sx={{ marginBottom: "30px", backgroundColor: "#ffffff", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Bionic Reading
              </Typography>
              <Typography variant="body1" paragraph>
                Bionic Reading enhances your reading speed by guiding your eyes through text with strategically bolded letters. Available as an extension for popular browsers.
              </Typography>

              {/* Chrome and Firefox Store List *
              <Box sx={{ paddingBottom: "20px" }}>
                <Typography variant="body2">Available on:</Typography>
                <ul style={{ paddingLeft: "20px" }}>
                  <li style={{ color: "blue", textDecoration: "underline", cursor: "point", }}>
                    Chrome Store
                  </li>
                  <li style={{ color: "blue", textDecoration: "underline", cursor: "point", }}>
                    Firefox Store
                  </li>
                </ul>
              </Box>
            </CardContent>
          </Card>
        </Box> */}

        {/* Case Studies Section */}
        <Box sx={{ padding: "20px", borderRadius: 0 }}>
          <Typography variant="h4">Case Studies</Typography>
          <div
            style={{
              color: "rgb(126, 126, 126)",
              fontSize: 16,
              paddingBottom: "1rem",
            }}
            gutterBottom
          >
            Research & Digital Solutions
          </div>

          {/* Case Study Card for Homeless Outreach */}
          <Card sx={{ marginBottom: "30px", backgroundColor: "#ffffff", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }}>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                Empowering Homeless Outreach: Digitizing Paperwork Through an App
              </Typography>
              <Typography variant="body1" paragraph>
                This case study investigates the challenge of traditional, paper-based homeless outreach documentation, which is prone to inefficiency, loss of data, and inconsistency across organizations. By transitioning to a digital format, we enable teams to focus on real-time data collection and analysis, leading to faster, more coordinated services.
              </Typography>
              <Typography variant="body1" paragraph>
                Research-based insights demonstrate the critical role of data in homeless outreach, providing decision-makers with the tools to allocate resources more effectively and adapt to the evolving needs of the homeless community.
              </Typography>

              {/* Explore Button */}
              <Button variant="contained" color="primary" onClick={navigateToCaseStudy}>
                Explore Case Study
              </Button>
            </CardContent>
          </Card>

          {/* Placeholder for future case studies */}
          <Typography variant="h6" color="textSecondary" gutterBottom>
            More case studies coming soon...
          </Typography>
          <br />
          <br />
          <br />
          <br />
          <br />
        </Box>
      </div>
    </Layout>
  );
};

export default MorePage;
