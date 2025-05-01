import React from 'react'
import Portfolio from '../Portfolio'
import Div from '../Div'
import Slider from 'react-slick';
import { useTranslation } from "react-i18next";
export default function PortfolioSlider() {
  const { t } = useTranslation();
  const portfolioData = [
    {
      title:'NetSafe Corp',
      subtitle:t('portfolio.netsafe.subtitle'),
      href:'/portfolio/netsafe',
      src:'/images/portfolio/carousel/Netsafe_corp.png'
    },
    {
      title:'Acura Capital',
      subtitle:t('portfolio.acura.subtitle'),
      href:'/portfolio/acura',
      src:'/images/portfolio/carousel/Acura_Capital.png'
    },
    {
      title:'Impacta',
      subtitle:t('portfolio.impacta.subtitle'),
      href:'/portfolio/Impacta',
      src:'/images/portfolio/carousel/Faculdade_Impacta.png'
    },
    // {
    //   title:'ONCLICK',
    //   subtitle:t('portfolio.onclick.subtitle'),
    //   href:'/portfolio/onclick',
    //   src:'/images/portfolio/carousel/ONCLICK.png'
    // },
    {
      title:'SW',
      subtitle:t('portfolio.sw.subtitle'),
      href:'/portfolio/SW',
      src:'/images/portfolio/carousel/SW.png'
    },
    {
      title:'Neocount',
      subtitle:t('portfolio.neocount.subtitle'),
      href:'/portfolio/neocount',
      src:'/images/portfolio/carousel/Neocount.png'
    }
  ]
  
  /** Slider Settings **/
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0",
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows:false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };
  
  return (
    <Slider {...settings} className='cs-slider cs-style3 cs-gap-32'>
      {portfolioData.map((item, index)=> (
        <Div key={index}>
          <Portfolio 
            title={item.title} 
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
          />
        </Div>
      ))}
    </Slider>
  )
}
