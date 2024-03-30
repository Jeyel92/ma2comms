import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
// import Card from '../Card'
import Cta from '../Cta'
import PageHeading from "../PageHeading";
// import PricingTableList from '../PricingTable/PricingTableList'
import Div from "../Div";
import IconBox from '../IconBox'
import SectionHeading from "../SectionHeading";
import PortfolioSlider from '../Slider/PortfolioSlider'
import Spacing from "../Spacing";
import { useTranslation } from "react-i18next";
import ServiceList from '../ServiceList'
import Accordion from '../Accordion'
export default function ServicesPage() {
  const { t, i18n } = useTranslation();
  pageTitle("Serviços");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqQuestions = [
    {
      question: t("servicos.faq.Q1.question"),
      answer: t("servicos.faq.Q1.answer"),
    },
    {
      question: t("servicos.faq.Q2.question"),
      answer: t("servicos.faq.Q2.answer"),
    },
    {
      question: t("servicos.faq.Q3.question"),
      answer: t("servicos.faq.Q3.answer"),
    },
    {
      question: t("servicos.faq.Q4.question"),
      answer: t("servicos.faq.Q4.answer"),
    },
    {
      question: t("servicos.faq.Q5.question"),
      answer: t("servicos.faq.Q5.answer"),
    },
  ];
  return (
    <>
      <PageHeading
        title={t("servicos.heading.title")}
        subTitle={t("servicos.heading.subtitle")}
        bgSrc="/images/servicos/banner-pag-servicos.png"
        pageLinkText={t("servicos.heading.pageLinkText")}
      />
      <Spacing lg="145" md="80" />

      <Div className="container">
        <SectionHeading
          title={t("servicos.iconSection.title")}
          subtitle={t("servicos.iconSection.title")}
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Div className="row">
          <Div className="col-lg-4">
            <IconBox
              icon="/images/servicos/icons/service_icon_1.svg"
              title={t("servicos.planejar")}
              subtitle={t("servicos.iconSection.iconText.planejar")}
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/servicos/icons/service_icon_2.svg"
              title={t("servicos.criar")}
              subtitle={t("servicos.iconSection.iconText.criar")}
            />
            <Spacing lg="30" md="30" />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              icon="/images/servicos/icons/service_icon_3.svg"
              title={t("servicos.propagar")}
              subtitle={t("servicos.iconSection.iconText.propagar")}
            />
            <Spacing lg="30" md="30" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="120" md="50" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/servicos/imagem-servicos.png"
                width={536}
                height={576}
                alt="Service"
                className="cs-radius_15 w-100"
              />
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <h2 className="cs-font_50 cs-m0">
              {t("servicos.listaServicos.text")}
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-lg-6">
                <ServiceList position="left" />
              </Div>
              <Div className="col-lg-6">
                <ServiceList position="right" />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
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

      <Spacing lg="145" md="80" />
      <Div className="container cs-shape_wrap_4">
       
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title={t("servicos.faq.title")}
                subtitle={t("servicos:faq.subtitle")}
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion accordionData={faqQuestions} />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title={t("cta.title")}
          btnText={t("cta.btn")}
          btnLink="/contato"
          bgSrc="/images/cta_bg.jpg"
          imgVariant="linear-gradient(97deg, rgba(162, 49, 243, 0.80) 0%, rgba(0, 35, 244, 0.80) 100%)"
        />
      </Div>
      <Spacing lg="150" md="80" />
    </>
  );
}
