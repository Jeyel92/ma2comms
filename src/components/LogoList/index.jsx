import React from "react";
import Div from "../Div";
import "./logolist.scss";

export default function LogoList() {
  const partnerLogos = [
    {
      src: "/images/portfolio/logos/ACURA_CAPITAL.png",
      alt: "Logo Acura Capital",
    },
    {
      src: "/images/portfolio/logos/COREON_.png",
      alt: "Logo Coreon",
    },
    {
      src: "/images/portfolio/logos/DPE.png",
      alt: "Logo DPE",
    },
    {
      src: "/images/portfolio/logos/GRUPO_SIRIUS.png",
      alt: "Logo GRUPO SIRIUS",
    },
    {
      src: "/images/portfolio/logos/NEOCOUNT_.png",
      alt: "Logo Neocount",
    },
    {
      src: "/images/portfolio/logos/NETSAFE_CORP.png",
      alt: "Logo Netsafe",
    },
    {
      src: "/images/portfolio/logos/ONCLICK_.png",
      alt: "Logo onclick",
    },
    {
      src: "/images/portfolio/logos/SECUREWAY_.png",
      alt: "Logo SECUREWAY",
    },
  ];
  return (
    <Div className="cs-partner_logo_wrap">
      {partnerLogos.map((partnerLogo, index) => (
        <div className="cs-partner_logo" key={index}>
          <img
            src={partnerLogo.src}
            alt={partnerLogo.alt}
            width={100}
            height={100}
          />
        </div>
      ))}
    </Div>
  );
}
