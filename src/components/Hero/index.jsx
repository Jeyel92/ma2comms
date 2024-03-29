import React from "react";
import parse from "html-react-parser";
import "./hero.scss";
import Div from "../Div";
import { useTranslation } from "react-i18next";

export default function Hero({
  title,
  subtitle,
  scrollDownId,
  bgImageUrl,
}) {
  const { t } = useTranslation();
  return (
    <Div
      className="cs-hero cs-style1 cs-bg cs-fixed_bg cs-shape_wrap_1"
      style={{ backgroundImage: `url(${bgImageUrl})` }}
    >
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="cs-shape_1" />
      <Div className="container">
        <Div className="cs-hero_text">
          <h1 className="cs-hero_title">{parse(title)}</h1>
          <Div className="cs-hero_info">
            <Div>
              <Div className="cs-hero_subtitle">{subtitle}</Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <p className="cs-down_btn">
        {t("btnVerMais")}
        <a href={scrollDownId}>.</a>
      </p>
    </Div>
  );
}
