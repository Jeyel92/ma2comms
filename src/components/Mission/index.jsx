import React, { useState } from "react";
import Div from "../Div";
import Spacing from "../Spacing";
import SectionHeading from "../SectionHeading";
import { useTranslation } from "react-i18next";
import './mission.scss';
export default function Mission() {
  const { t } = useTranslation();
  const serviceData = [
    {
      title: t("sobre.values.build.title"),
      subtitle: t("sobre.values.build.subtitle"),
    },
    {
      title: t("sobre.values.communicate.title"),
      subtitle: t("sobre.values.communicate.subtitle"),
    },
    {
      title: t("sobre.values.translate.title"),
      subtitle: t("sobre.values.translate.subtitle"),
    },
    {
      title: t("sobre.values.connect.title"),
      subtitle: t("sobre.values.connect.subtitle"),
    },
  ];
  const [active, setActive] = useState(0);
  const handelActive = (index) => {
    setActive(index);
  };
  return (
    <>
      <Div className="cs-funfact_wrap gap-3" style={{ alignItems: "start" }}>
        <Div className="col-12 col-lg-5 mb-5 mb-lg-0">
          <Div className="cs-funfact_heading">
            <h2>{t("sobre.mission.title")} </h2>
            <p>{t("sobre.mission.text")}</p>
          </Div>
        </Div>
        <Div className="col-12 offset-lg-1 col-lg-6">
          <Div className="cs-funfact_heading">
            <h2>{t("sobre.vision.title")} </h2>
            <p>{t("sobre.vision.text")}</p>
          </Div>
        </Div>
      </Div>
      <Spacing lg="70" md="45" />
      <SectionHeading
        title={t("sobre.values.title")}
        subtitle=""
        variant="cs-style1 text-center"
      />
      <Spacing lg="45" md="45" />
      <Div className="cs-iconbox_3_list">
        {serviceData.map((item, index) => (
          <Div
            className={`cs-hover_tab ${active === index ? "active" : ""}`}
            key={index}
            onMouseEnter={() => handelActive(index)}
          >
            <Div className="cs-iconbox cs-style3">
              <>
                <Div className="cs-image_layer cs-style1 cs-size_md">
                  <Div className="cs-image_layer_in">
                    <img
                      src='/images/sobre/missao-visao-valores.jpg'
                      alt="Thumb"
                      className="w-100 cs-radius_15"
                      width={424}
                      height={620}
                    />
                  </Div>
                </Div>

                <Div style={{ width: "100%" }}>
                  <h2 className="cs-iconbox_title">{item.title}</h2>
                  <Div className="cs-iconbox_subtitle">{item.subtitle}</Div>
                </Div>
              </>
            </Div>
          </Div>
        ))}
      </Div>
    </>
  );
}
