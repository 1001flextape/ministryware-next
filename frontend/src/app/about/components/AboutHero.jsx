"use client";

import React from 'react';
import { useMediaQuery } from '@mui/material';
import AboutHeroMobile from './hero/AboutHeroMobile'
import AboutHeroDesktop from './hero/AboutHeroDesktop'

const AboutHero = () => {
  // Define the media query for screens smaller than 730px
  const isMobile = useMediaQuery('(max-width: 730px)');

  return (
    <>
      {isMobile ? <AboutHeroMobile /> : <AboutHeroDesktop />}
    </>
  );
};

export default AboutHero;
