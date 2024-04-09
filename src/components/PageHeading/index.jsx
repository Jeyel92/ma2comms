import React from 'react';
// import { Link } from 'react-router-dom';
import  Link from "../Link";
import Div from '../Div';

export default function PageHeading({ title, bgSrc, pageLinkText,subTitle, bgStyle }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ backgroundImage: `${bgStyle ? bgStyle + ',' : ''} url(${bgSrc})` }}
    >
      <Div className="container">
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <h2 className="cs-page_title cs-font_30 cs-white_color">{subTitle}</h2>
          <ol className="breadcrumb text-uppercase">
            <li className="breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}
