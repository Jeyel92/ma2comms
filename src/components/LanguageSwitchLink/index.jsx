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
            // location.pathname.split("/")[1]?.match("pt|de|en")
            if (locale === currentLocale) return null;
            
            const langPath = pName.split("/")[1]

            // console.log("langPath",langPath)
            // console.log("pName",pName)
            // console.log("rest",rest.href)
            // console.log("teste",pName.replace(langPath, locale) )

            href = pName.replace(langPath, locale)
            console.log("href",href)
            // Object.keys(location.searchParams).forEach((k) => {
            //   if (k === "locale") {
            //     pName = pName.replace(`[${k}]`, locale);

            //     return;
            //   }

            //   pName = pName.replace(`[${k}]`, location.searchParams[k]);
            // });
            // if (locale) {
            //   href = rest.href ? `/${locale}${rest.href}` : pName;
            // }
            // onClick={() =>  i18n.changeLanguage(locale)}

            // let href = props.to || location.pathname;
            // if (href.indexOf("http") === 0) skipLocaleHandling = true;
            // if (locale && !skipLocaleHandling) {
              // href = href ? `/${locale}${href}` : location.pathname;
            // }
            return (
              <li key={locale}>
                <Link
                  to={href}
                  onClick={() =>  i18n.changeLanguage(locale)}
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
    // <Link href={href} onClick={() => languageDetector.cache(locale)}>
    //     {/*  <span className="fi fi-gr fis"></span> */}
    //   <button><span className={`fi 	${links[locale].icon}`}></span>{links[locale].text}</button>
    // </Link>
  );
}
{
  /* 

<ul>

{i18nextConfig.i18n.
if (locale === currentLocale) return null;
return (
 <li key={locale}> <LanguageSwitchLink locale={locale}  /></li>
);
})}
</ul>
</DropDown> */
}
