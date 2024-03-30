import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import Mission from "../Mission";
import PageHeading from "../PageHeading";
import Div from "../Div";
import SectionHeading from "../SectionHeading";
import TeamSlider from "../Slider/TeamSlider";
import Spacing from "../Spacing";
import { useTranslation } from "react-i18next";
export default function AboutPage() {
  const { t, i18n } = useTranslation();
  pageTitle("Sobre");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title={t("sobre.heading.title")}
        subTitle={t("sobre.heading.subtitle")}
        bgSrc="/images/sobre/banner-pag-sobre.jpg"
        pageLinkText={t("sobre.heading.pageLinkText")}
      />
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title={t("sobre.about.title")}
              subtitle={t("sobre.about.subtitle")}
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">{t("sobre.about.p1")}</p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">{t("sobre.about.p2")}</p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">{t("sobre.about.p3")}</p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
            <img
              src="/images/sobre/sobre-a-ma2.jpg"
              width={536}
              height={450}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/*Mission*/}
      <Div className="container">
        <Mission />
      </Div>
      {/*End Mission*/}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-6">
            <SectionHeading
              title={t("sobre.why.title")}
              subtitle={t("sobre.why.subtitle")}
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">{t("sobre.why.text")}</p>

              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in col-lg-9 offset-lg-2 col-xl-8 offset-xl-3">
                <img
                  src="/images/sobre/porque-ma.jpg"
                  alt="About"
                  width={479}
                  height={479}
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading
          title={t("sobre.team.title")}
          subtitle={t("sobre:team.subtitle")}
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
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
      {/* End CTA Section */}
    </>
  );
}
