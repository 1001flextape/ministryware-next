"use client";

import React, { useState, useEffect } from 'react';
import { useMediaQuery } from '@mui/material';
import DonateHeroMobile from './hero/DonateHeroMobile';
import DonateHeroDesktop from './hero/DonateHeroDesktop';

const DonateHero = () => {
  const [hydrated, setHydrated] = useState(false);
  
  // Detect screen size
  const isMobile = useMediaQuery('(max-width: 730px)');

  // Ensure the component has mounted before rendering
  useEffect(() => {
    setHydrated(true);
  }, []);

  // Don't render anything until we're hydrated
  if (!hydrated) {
    return null;  // You could return a loading spinner here if you'd like
  }

  return (
    <>
      {isMobile ? <DonateHeroMobile /> : <DonateHeroDesktop />}
    </>
  );
};

export default DonateHero;
