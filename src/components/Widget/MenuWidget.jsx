import React from 'react'
// import { Link } from 'react-router-dom';
import  Link from "../Link";

export default function MenuWidget({menuItems, menuHeading, variant, headingHref}) {
  let contentMenuHeading = (headingHref) ? <Link href={headingHref}>{menuHeading}</Link> : menuHeading;
  return (
    <>
      {menuHeading && <h2 className="cs-widget_title mx-auto">{contentMenuHeading} </h2> }
      <ul
        className={`${
          variant ? `cs-menu_widget ${variant}` : 'cs-menu_widget cs-style1'
        } cs-mp0`}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            {item.href ? (
              <Link to={item.href}>{item.title}</Link>
            ) : (
              item.title
            )}
          </li>
        ))}
      </ul>
    </>
  )
}
