import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import SocialWidget from "../Widget/SocialWidget";
// import Newsletter from '../Widget/Newsletter';
import "./header.scss";
import ContactInfoWidget from "../Widget/ContactInfoWidget";
import Div from "../Div";
// import DropDown from './DropDown';
import { useTranslation } from "react-i18next";
import  Link from "../Link";

export default function Header({ variant }) {
  const { t, i18n } = useTranslation();
  const [isSticky, setIsSticky] = useState(false);
  const [sideHeaderToggle, setSideHeaderToggle] = useState(false);
  const [mobileToggle, setMobileToggle] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    });
  }, []);

  return (
    <>
      <header
        className={`cs-site_header cs-style1 text-uppercase ${
          variant ? variant : ""
        } cs-sticky_header ${isSticky ? "cs-sticky_header_active" : ""}`}
      >
        <Div className="cs-main_header">
          <Div className="container">
            <Div className="cs-main_header_in">
              <Div className="cs-main_header_left">
                <Link className="cs-site_branding" to="/">
                  <img
                    src="/images/logo.svg"
                    width={89}
                    height={30}
                    alt="Logo"
                  />
                </Link>
              </Div>
              <Div className="cs-main_header_center">
                <Div className="cs-nav cs-primary_font cs-medium">
                  <ul
                    className="cs-nav_list"
                    style={{ display: `${mobileToggle ? "block" : "none"}` }}
                  >
                    <li>
                      <NavLink to="/" onClick={() => setMobileToggle(false)}>
                        Home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/${i18n.resolvedLanguage}/sobre`}
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("menu.sobre")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/${i18n.resolvedLanguage}/servicos`}
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("menu.servicos")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/${i18n.resolvedLanguage}/portfolio`}
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("menu.cases")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/${i18n.resolvedLanguage}/blog`}
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("menu.blog")}
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/${i18n.resolvedLanguage}/contato`}
                        onClick={() => setMobileToggle(false)}
                      >
                        {t("menu.contato")}
                      </NavLink>
                    </li>
                    <li className="menu-item-has-children">
                      {/* <LanguageSwitchLink currentLocale={currentLocale} locales={i18nextConfig.i18n.locales} /> */}
                    </li>
                  </ul>
                  <span
                    className={
                      mobileToggle
                        ? "cs-munu_toggle cs-toggle_active"
                        : "cs-munu_toggle"
                    }
                    onClick={() => setMobileToggle(!mobileToggle)}
                  >
                    <span></span>
                  </span>
                </Div>
              </Div>
              <Div className="cs-main_header_right">
                <Div className="cs-toolbox">
                  <span
                    className="cs-icon_btn"
                    onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
                  >
                    <span className="cs-icon_btn_in">
                      <span />
                      <span />
                      <span />
                      <span />
                    </span>
                  </span>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </header>

      <Div
        className={
          sideHeaderToggle ? "cs-side_header active" : "cs-side_header"
        }
      >
        <button
          className="cs-close"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div
          className="cs-side_header_overlay"
          onClick={() => setSideHeaderToggle(!sideHeaderToggle)}
        />
        <Div className="cs-side_header_in">
          <Div className="cs-side_header_shape" />
          <Link className="cs-site_branding" to="/">
            <img
              src="/images/logo_roxo.svg"
              width={89}
              height={30}
              alt="Logo"
            />
          </Link>
          <Div className="cs-side_header_box">
            <h2
              className="cs-side_header_heading"
              dangerouslySetInnerHTML={{ __html: t("faleConosco2") }}
            ></h2>
          </Div>
          <Div className="cs-side_header_box">
            <ContactInfoWidget title={t("faleConosco")} withIcon />
          </Div>
          {/* <Div className="cs-side_header_box">
            <Newsletter
              title="Subscribe"
              subtitle=""
              placeholder="example@gmail.com"
            />
          </Div> */}
          <Div className="cs-side_header_box">
            <SocialWidget />
          </Div>
        </Div>
      </Div>
    </>
  );
}
