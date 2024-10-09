"use client";

import React, { useEffect, useState } from "react";
import Layout from "../../../layouts/frontWebsiteLayout/layout";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Head from "next/head"; // For SEO
import ArcadeHomeAppBar from "@/app/index/components/ArcadeHomeAppBar";
import { Container } from "@mui/material";
import { styled } from "@mui/system";

// Styled components for the game page
const GameContainer = styled(Container)(({ theme }) => ({
  backgroundColor: "#fff", // Dark background to focus on the game
  padding: "30px",
  maxWidth: "var(--size-content) !important",
  margin: "40px auto",
  borderRadius: "8px", // Add slight rounding for desktop view
  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)", // Elevate the container

  // Apply responsive design for tablet and cellphone
  [theme.breakpoints.down("md")]: {
    margin: "0 auto", // Remove margin on tablet and cellphone
    borderRadius: "0 0 8px 8px", // Apply specific border-radius for smaller devices
  },
}));

const FullscreenButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#1AA6B7",
  color: "#fff",
  padding: "10px 20px",
  fontSize: "1.1rem",
  "&:hover": {
    backgroundColor: "#148E9E", // Darken on hover
  },
}));

const IframeWrapper = styled(Box)({
  border: "3px solid #1AA6B7",
  backgroundColor: "#000", // Black background behind the game
  borderRadius: "8px",
  overflow: "hidden", // Prevent overflow
  margin: "20px 0",
  transition: "height 0.3s ease",

  // Responsive margin for smaller screens
  "@media (max-width: 768px)": {
    margin: "0px", // Remove top/bottom margin on tablet and cellphone
  },
});

// Fullscreen handler
const BouncePage = () => {
  const [iframeSrc, setIframeSrc] = useState("");

  useEffect(() => {
    // Set the iframe URL based on the environment
    if (process.env.NODE_ENV === "development") {
      setIframeSrc("http://127.0.0.1:5500/frontend/public/games/malbran-games/bounce/index.html");
    } else {
      setIframeSrc("/games/malbran-games/bounce/index.html");
    }

    const iframe = document.getElementById("bounce-iframe");

    const adjustIframeHeight = () => {
      try {
        const iframeContent = iframe.contentWindow.document.documentElement;
        const iframeHeight = iframeContent.scrollHeight;
        iframe.style.height = `${iframeHeight}px`;
      } catch (e) {
        console.error("Cannot access iframe contents due to cross-origin restrictions.");
      }
    };

    iframe.addEventListener("load", adjustIframeHeight);

    return () => {
      iframe.removeEventListener("load", adjustIframeHeight);
    };
  }, []);

  const handleFullScreen = () => {
    const iframeWrapper = document.getElementById("iframe-wrapper");
    const iframe = document.getElementById("bounce-iframe");
  
    if (iframe.requestFullscreen) {
      iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
      iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
      iframe.webkitRequestFullscreen();
    } else if (iframe.msRequestFullscreen) {
      iframe.msRequestFullscreen();
    } else {
      // Simulate fullscreen on iOS Safari
      iframeWrapper.style.position = "fixed";
      iframeWrapper.style.top = "0";
      iframeWrapper.style.left = "0";
      iframeWrapper.style.width = "100vw";
      iframeWrapper.style.height = "100vh";
      iframeWrapper.style.zIndex = "1000";
      iframeWrapper.style.backgroundColor = "#000";
    }
  };
  
  

  return (
    <>
      <Head>
        <meta
          name="description"
          content="Bounce is a fun and addictive arcade game where you use a paddle to bounce a ball and break all the blocks."
        />
      </Head>
      <Layout title="Bounce - Game">
        <ArcadeHomeAppBar />
        <GameContainer>
          {/* Game Header and Fullscreen Button */}
          <Grid container alignItems="center" justifyContent="space-between" sx={{ marginBottom: 3 }}>
            <Typography
              variant="h3"
              component="div"
              sx={{
                color: "rgba(0, 0, 0, 0.9)",
                fontWeight: "bold",
                textAlign: "center", // Center header
                flexGrow: 1, // Ensure it takes up space
              }}
            >
              Bounce
            </Typography>

            <FullscreenButton onClick={handleFullScreen}>
              Fullscreen
            </FullscreenButton>
          </Grid>

          {/* Game Iframe */}
          <IframeWrapper>
            <iframe
              id="bounce-iframe"
              src={iframeSrc}
              width="100%"
              allow="fullscreen" // Allow fullscreen in iframe
              style={{
                height: "600px",
                border: "none",
              }}
              frameBorder="0"
              title="Bounce Game"
            />
          </IframeWrapper>

          {/* Game Info */}
          <Box sx={{ color: "rgba(0, 0, 0, 0.8)", paddingTop: "20px" }}>
            <Typography variant="h5" gutterBottom>
              Mobile Controls
            </Typography>
            <p><strong>Move paddle:</strong> Touch screen, move thumb side to side, left and right</p>

            <Typography variant="h5" gutterBottom>
              Desktop Controls
            </Typography>
            <p><strong>Move paddle:</strong> Move mouse left and right</p>
            <p><strong>Pause Game:</strong> Left click screen</p>

            <Typography variant="h5" gutterBottom>
              Description
            </Typography>
            <p>Bounce is a fun and addictive arcade game where you use a paddle to bounce a ball and break all the blocks.</p>
          </Box>
        </GameContainer>
        <br />
        <br />
        <br />
        <br />
      </Layout>
    </>
  );
};

export default BouncePage;
