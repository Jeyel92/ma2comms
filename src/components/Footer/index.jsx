import React from 'react'
import Div from '../Div'
import ContactInfoWidget from '../Widget/ContactInfoWidget'
import MenuWidget from '../Widget/MenuWidget'
// import Newsletter from '../Widget/Newsletter'
import SocialWidget from '../Widget/SocialWidget'
import TextWidget from '../Widget/TextWidget'
import './footer.scss'
import { useTranslation } from "react-i18next";
export default function Footer({copyrightText, logoSrc, logoAlt, text}) {
  const { t } = useTranslation();
  const copyrightLinks = [
    {
      title: "Terms of Use",
      href: "/",
    },
    {
      title: "Privacy Policy",
      href: "/",
    },
  ];

  const serviceMenu = [
    {
      title: t("servicos.planejar")
    },
    {
      title: t("servicos.criar") 
    },
    {
      title: t("servicos.propagar") 
    },
  ];

  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
          <Div className="col-lg-4 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo_roxo.svg"
                  logoAlt="Logo"
                  text={t("textWidget")}
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="offset-lg-2 col-lg-3 col-sm-6 d-lg-flex justify-content-center">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading={t("menu.servicos")} headingHref={"/servicos"}/>
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget withIcon={false}title={t("faleConosco")} />
              </Div>
            </Div>
            {/* <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle=""
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div> */}
          </Div>
        </Div>
      </Div>
      {/* <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">Copyright © 2022 Laralink.</Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=' cs-style2'/>
          </Div>
        </Div>
      </Div> */}
    </footer>
  )
}
