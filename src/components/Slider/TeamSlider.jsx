import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Team from '../Team';
import { useTranslation } from "react-i18next";
export default function TeamSlider({ memberIndex }) {
  const { t } = useTranslation();
  /** Team Member Data **/
  let teamData = [
    {
      memberImage: "/images/sobre/M&L-8.jpg",
      memberName: "Mariana Alves de Assis​",
      memberDesignation: t('team.mari'),
      memberSocial: {},
    },
    {
      memberImage: "/images/sobre/P-83.jpg",
      memberName: "Vitor Kennedy",
      memberDesignation:t('team.vitor'),
      memberSocial: {},
    },
    {
      memberImage: "/images/sobre/P-80.jpg",
      memberName: "Tatiane Melo",
      memberDesignation: t('team.tati'),
      memberSocial: {},
    },
    {
      memberImage: "/images/sobre/chris.jpeg",
      memberName: "Christiane Gonçalves",
      memberDesignation: t('team.cris'),
      memberSocial: {},
    },
    
  ];
  if (memberIndex !== undefined) {
    teamData = teamData.filter((x, index) => index === memberIndex);
  }
  /** Slider Settings **/
  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-24 cs-arrow_style2">
      {teamData.map((item, index) => (
        <Div key={index} >
          <Team
            memberImage={item.memberImage}
            memberName={item.memberName}
            memberDesignation={item.memberDesignation}
            memberSocial={item.memberSocial}
          />
        </Div>
      ))}
    </Slider>
  );
}
