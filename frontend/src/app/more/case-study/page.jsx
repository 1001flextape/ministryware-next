import React from "react";
import Layout from "../../layouts/frontWebsiteLayout/layout";
import AboutHero from "./components/AboutHero";
import OurMission from "./components/OurMission";
import InnovativeSolutions from "./components/InnovativeSolutions";
import AboutFooter from "./components/AboutFooter";
import Head from "next/head";

const AboutPage = () => {
  return (
    <Layout>
      <Head>
        <title>More | MinistryWare</title>
        <meta name="description" content="Learn more about MinistryWare's mission, values, and innovative solutions." />
      </Head>
      <br />
      <br />
    </Layout>
  );
};

export default AboutPage;
