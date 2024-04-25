// import languageDetector from "@/lib/languageDetector";
import { useLocation ,Link } from 'react-router-dom';
// import Link from "../Link";
// import Link from "next/link";
import DropDown from "../Header/DropDown";
import Div from "../Div";
import { useTranslation } from "react-i18next";

export default function LanguageSwitchLink({
  currentLocale,
  ...rest
}) {
  const {  i18n } = useTranslation();
  const location = useLocation();

  const locales = {
    pt: { icon: "fi-br", text: "Português" },
    en: { icon: "fi-us", text: "English" },
    de: { icon: "fi-de", text: "Deutsch" },
  };
  return (
    <>
      {/* <Link href="#" > */}
      <Div className="currentLocale">
        <span className={`fi 	${locales[currentLocale].icon}`}></span>
        {locales[currentLocale].text}
      </Div>
      {/* </Link> */}
      <DropDown>
        <ul>
          {Object.keys(locales).map((locale) => {
            let href = location.pathname;
            let pName = location.pathname;
            
            if (locale === currentLocale) return null;
            
            const langPath = pName.split("/")[1]

          
            href = pName.replace(langPath, locale)
        
        
            return (
              <li key={locale}>
                <Link
                  to={href}
                  onClick={() =>  i18n.changeLanguage(locale)}
                  reloadDocument
                >
                  <span className={`fi 	${locales[locale].icon}`}></span>
                  {locales[locale].text}
                </Link>
              </li>
            );
          })}
        </ul>
      </DropDown>
    </>
  
  );
}

