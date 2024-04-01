import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import parse from "html-react-parser";
import { pageTitle } from "../../helper";
import Button from "../Button";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import Spacing from "../Spacing";
import { useTranslation } from "react-i18next";
export default function PortfolioDetailsPage() {
  const { t } = useTranslation();
  const params = useParams();
  const portfolioId = params.portfolioDetailsId;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cases = [
    {
      id: "netsafe",
      titulo: "NetSafe Corp",
      subtitle: t("portfolio.netsafe.subtitle"),
      image: "/images/portfolio/interno/NETSAFE_CORP.png",
      bgImg: "/images/portfolio/cases/Netsafe_Corp.png",
      description: {
        title: t("portfolio.netsafe.description.title"),
        subtitle: t("portfolio.netsafe.description.subtitle"),
        text: t("portfolio.netsafe.description.text"),
      },
      infos: {
        category: t("portfolio.netsafe.category"),
        cliente: "NetSafe Corp",
        location: "São Paulo",
        dated: t("portfolio.netsafe.dated"),
      },
      prev: "/portfolio/neocount",
      next: "/portfolio/acura",
    },
    {
      id: "acura",
      titulo: "Acura Capital",
      subtitle: t("portfolio.acura.subtitle"),
      image: "/images/portfolio/interno/Acura_Capital.png",
      bgImg: "/images/portfolio/cases/Acura_Capital.png",
      description: {
        title: t("portfolio.acura.description.title"),
        subtitle: t("portfolio.acura.description.subtitle"),
        text: t("portfolio.acura.description.text"),
      },
      infos: {
        category: t("portfolio.acura.category"),
        cliente: "Acura Capital",
        location: "São Paulo",
        dated: t("portfolio.acura.dated"),
      },
      prev: "/portfolio/netsafe",
      next: "/portfolio/impacta",
    },
    {
      id: "impacta",
      titulo: "Impacta",
      subtitle: t("portfolio.impacta.subtitle"),
      image: "/images/portfolio/interno/Faculdade_Impacta.png",
      bgImg: "/images/portfolio/cases/Impacta.png",
      description: {
        title: t("portfolio.impacta.description.title"),
        subtitle: t("portfolio.impacta.description.subtitle"),
        text: t("portfolio.impacta.description.text"),
      },
      infos: {
        category: t("portfolio.impacta.category"),
        cliente: "Impacta",
        location: "São Paulo",
        dated: t("portfolio.impacta.dated"),
      },
      prev: "/portfolio/acura",
      next: "/portfolio/onclick",
    },
    {
      id: "onclick",
      titulo: "ONCLICK",
      subtitle: t("portfolio.onclick.subtitle"),
      image: "/images/portfolio/interno/ONCLICK.png",
      bgImg: "/images/portfolio/cases/ONCLICK.png",
      description: {
        title: t("portfolio.onclick.description.title"),
        subtitle: t("portfolio.onclick.description.subtitle"),
        text: t("portfolio.onclick.description.text"),
      },
      infos: {
        category: t("portfolio.onclick.category"),
        cliente: "ONCLICK",
        location: "Marília (SP)",
        dated: t("portfolio.onclick.dated"),
      },
      prev: "/portfolio/impacta",
      next: "/portfolio/sw",
    },
    {
      id: "sw",
      titulo: "SW",
      subtitle: t("portfolio.sw.subtitle"),
      image: "/images/portfolio/interno/Secureway.png",
      description: {
        title: t("portfolio.sw.description.title"),
        subtitle: t("portfolio.sw.description.subtitle"),
        text: t("portfolio.sw.description.text"),
      },
      infos: {
        category: t("portfolio.sw.category"),
        cliente: "SECUREWAY",
        location: "São Paulo",
        dated: t("portfolio.sw.dated"),
      },
      prev: "/portfolio/onclick",
      next: "/portfolio/neocount",
    },
    {
      id: "neocount",
      titulo: "Neocount ",
      subtitle: t("portfolio.neocount.subtitle"),
      image: "/images/portfolio/interno/NEOCOUNT.png",
      bgImg: "/images/portfolio/cases/Neocount.png",
      description: {
        title: t("portfolio.sw.description.title"),
        subtitle: t("portfolio.sw.description.subtitle"),
        text: t("portfolio.sw.description.text"),
      },
      infos: {
        category: t("portfolio.neocount.category"),
        cliente: "Neocount",
        location: "Espírito Santo",
        dated: t("portfolio.neocount.dated"),
      },
      prev: "/portfolio/sw",
      next: "/portfolio/netsafe",
    },
  ];
  let caseDetail = cases.filter((item) => item.id === portfolioId)[0];
  pageTitle(caseDetail.titulo);
  return (
    <>
      <PageHeading
        title={caseDetail.titulo}
        subTitle={caseDetail.subtitle}
        bgSrc={caseDetail.bgImg}
        pageLinkText={caseDetail.titulo}
      />
      {/* <Spacing lg='150' md='80'/> */}
      <Div className="container">
        <img
          src={caseDetail.image}
          alt={`Logo ${caseDetail.titulo}`}
          className="cs-radius_15 w-100 fade-in-image"
          width={1320}
          height={650}
        />
        {/* <Spacing lg="90" md="40" /> */}
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title={caseDetail.description.title}
              subtitle={caseDetail.description.subtitle}
            >
              <Spacing lg="40" md="20" />
              {parse(caseDetail.description.text)}
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg="60" md="40" />
            <h2 className="cs-font_30 cs-font_26_sm cs-m0">
              {t("portfolio.labels.informacoes")} -
            </h2>
            <Spacing lg="50" md="30" />
            <Div className="row">
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  {t("portfolio.labels.categoria")}:
                </h3>
                <p className="cs-m0">{caseDetail.infos.category}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  {t("portfolio.labels.cliente")}:
                </h3>
                <p className="cs-m0">{caseDetail.infos.cliente}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  {t("portfolio.labels.localidade")}:
                </h3>
                <p className="cs-m0">{caseDetail.infos.location}</p>
                <Spacing lg="30" md="30" />
              </Div>
              <Div className="col-6">
                <h3 className="cs-accent_color cs-font_22 cs-font_18_sm cs-m0">
                  {t("portfolio.labels.desde")}:
                </h3>
                <p className="cs-m0">{caseDetail.infos.dated}</p>
                <Spacing lg="30" md="30" />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg="65" md="10" />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button
              btnLink={caseDetail.prev}
              btnText="Prev Project"
              variant="cs-type1"
            />
          </Div>
          <Div>
            <Button btnLink={caseDetail.next} btnText="Next Project" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
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
