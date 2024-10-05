import React from "react";
import Layout from "../../layouts/frontWebsiteLayout/layout";
import ArcadeHomeAppBar from "../components/pages/arcade-home/ArcadeHomeAppBar";
import ArcadeHomeList from "../components/pages/arcade-home/ArcadeHomeList";
import Head from "next/head";

const IndexPage = () => (
  <Layout title={"Arcade"}>
    {/* SEO Head */}
    <Head>
      <title>Home | MinistryWare</title>
      <meta name="description" content="Welcome to MinistryWare's Arcade Home. Play our selection of games and browse the list of available games on the platform." />
    </Head>

    {/* AppBar Component */}
    <ArcadeHomeAppBar />

    {/* List Component */}
    <ArcadeHomeList />

    {/* Optionally, include the iframe for the game */}
    {/* <iframe
      src={`/ministryware/malbran-games/index.html`}
      width="100%"
      style={{ height: "calc(100vh - 56px)" }}
      frameBorder="0"
      title="Game 2"
    /> */}
  </Layout>
);

export default IndexPage;
