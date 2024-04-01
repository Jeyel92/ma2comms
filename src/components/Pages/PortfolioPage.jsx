import React, { useEffect } from 'react';
import { pageTitle } from '../../helper';
import HeroCases from '../Hero/HeroCases';

export default function PortfolioPage() {
  pageTitle('Cases');
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const showcaseData = [
    {
      title: "NetSafe Corp",
      imgUrl: "/images/portfolio/cases/Netsafe_Corp.png",
      href: "/portfolio/netsafe",
    },
    {
      title: "Acura Capital",
      imgUrl: "/images/portfolio/cases/Acura_Capital.png",
      href: "/portfolio/acura",
    },
    {
      title: "Impacta ",
      imgUrl: "/images/portfolio/cases/Impacta.png",
      href: "/portfolio/impacta",
    },
    {
      title: "ONCLICK",
      imgUrl: "/images/portfolio/cases/ONCLICK.png",
      href: "/portfolio/onclick",
    },
    {
      title: "SW",
      imgUrl: "/images/portfolio/cases/SECUREWAY.png",
      href: "/portfolio/sw",
    },
    {
      title: "Neocount",
      imgUrl: "/images/portfolio/cases/Neocount.png",
      href: "/portfolio/neocount",
    },
  ];
  return (
    <>
       <HeroCases showcaseData={showcaseData} />
    </>
  );
}
