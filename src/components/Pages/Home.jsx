import React, { useEffect } from "react";
import Card from "../Card";
import FunFact from "../FunFact";
import Hero from "../Hero";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import Cta from "../Cta";
import LogoList from "../LogoList";
import MovingText from "../MovingText";
import PortfolioSlider from "../Slider/PortfolioSlider";
// import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from "../Slider/TestimonialSlider";
// import TeamSlider from '../Slider/TeamSlider';
// import VideoModal from '../VideoModal';
// import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from "../../helper";
import { useTranslation } from "react-i18next";

export default function Home() {
  pageTitle("Home");
  const { t, i18n } = useTranslation();
  // Hero Social Links
  // const heroSocialLinks = [
  //   {
  //     name: 'Behance',
  //     links: '/',
  //   },
  //   {
  //     name: 'Twitter',
  //     links: '/',
  //   },
  // ];

  // FunFact Data
  const funfaceData = [
    {
      title: t("home.funFact.data.clientes"),
      factNumber: "85",
    },
    {
      title: t("home.funFact.data.horas"),
      factNumber: "10K",
    },
    {
      title: t("home.funFact.data.designs"),
      factNumber: "5K",
    },
    {
      title: t("home.funFact.data.palavras"),
      factNumber: "100K",
    },
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title={t("home.hero.title")}
        subtitle={t("home.hero.subtitle")}
        scrollDownId="#service"
        bgImageUrl="/images/hero_bg.png"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title={t("home.funFact.title")}
          subtitle={t("home.funFact.subtitle")}
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title={t("home.servicos.title")}
                subtitle={t("home.servicos.subtitle")}
                btnText={t("home.servicos.btn")}
                btnLink="/servicos"
              />              
            </Div>
            <Div className="col-xl-8">
              <Spacing lg="90" md="45" />
              <Div className="row justify-content-center">
                <Div className="col-lg-4 col-sm-6 ">
                  <Card
                    title={t("servicos.planejar")}
                    src="/images/servicos/servico_planejar_contar.jpg"
                    alt={t("servicos.planejar")}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-4 col-sm-6 ">
                  <Card
                    title={t("servicos.criar")}
                    src="/images/servicos/servico_criar.jpg"
                    alt={t("servicos.criar")}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-4 col-sm-6">
                  <Card
                    title={t("servicos.propagar")}
                    src="/images/servicos/servico_propagar.jpg"
                    alt={t("servicos.propagar")}
                  />
                  <Spacing lg="0" md="30" />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title={t("cases.title")}
            subtitle={t("cases.subtitle")}
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="We get multiple awards"
                subtitle="Our Awards"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <Spacing lg="70" md="70" />
        <Div
          className={`cs-video_block cs-style1 cs-bg`}
          style={{
            backgroundImage: `linear-gradient(0deg, rgba(26.06, 2.79, 31.88, 0.80) 0%, rgba(26.06, 2.79, 31.88, 0.80) 100%),url(/images/ma2-ponte.png)`,
          }}
        >
          <h2 className=" cs-m0 text-center cs-line_height_4">
            {t("home.video")}
          </h2>
        </Div>
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      {/* <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" /> */}
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title={t("home.testimonial.title")}
          subtitle=""
          variant="cs-style1 col-6 col-sm-4"
        />
        <Spacing lg="45" md="45" />
      </Div>

      <TestimonialSlider />
      {/* End Testimonial Section */}
      <Spacing lg="105" md="70" />
      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start Blog Section */}
      {/* <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div> */}
      {/* End Blog Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title={t("cta.title")}
          btnText={t("cta.btn")}
          btnLink="/contato"
          bgSrc="/images/cta_bg.jpg"
          imgVariant="linear-gradient(97deg, rgba(162, 49, 243, 0.80) 0%, rgba(0, 35, 244, 0.80) 100%)"
        />
      </Div>
      {/* End CTA Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text={t('home.movingText')} />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}
    </>
  );
}
