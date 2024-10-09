"use client";

import React from 'react';
import { useMediaQuery } from '@mui/material';
import DonateHeroMobile from './hero/DonateHeroMobile'
import DonateHeroDesktop from './hero/DonateHeroDesktop'

const DonateHero = () => {
  // Define the media query for screens smaller than 730px
  const isMobile = useMediaQuery('(max-width: 730px)');

  return (
    <>
      {isMobile ? <DonateHeroMobile /> : <DonateHeroDesktop />}
    </>
  );
};

export default DonateHero;
