// // import React from 'react'
// import Link from "next/link";
// import { useRouter } from "next/router";

// export default function LinkComponent(props) {
//   const router = useRouter();
//   const locale = props.locale || router.query.locale || "";
//   let skipLocaleHandling = props.skipLocaleHandling || false;

//   let href = props.href || router.asPath;
//   if (href.indexOf("http") === 0) skipLocaleHandling = true;
//   if (locale && !skipLocaleHandling) {
//     href = href
//       ? `/${locale}${href}`
//       : router.pathname.replace("[locale]", locale);
//   }

//   return (
//     <>
//       <Link  {...props} href={href}>{props.children}</Link>
//     </>
//   );
// }
import { useLocation, Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";
export default function LinkComponent(props){
  const {  i18n } = useTranslation();
  const location = useLocation();
  
  const locale = i18n.resolvedLanguage || location.pathname.split("/")[1]?.match("pt|de|en") || "";
  
  let skipLocaleHandling = props.skipLocaleHandling || false;

  let href = props.to || location.pathname;
  if (href.indexOf("http") === 0) skipLocaleHandling = true;
  if (locale && !skipLocaleHandling) {
    href = href ? `/${locale}${href}` : location.pathname;
  }

  return (
    <>
      <Link  {...props} to={href}>{props.children}</Link>
    </>
  );
};
