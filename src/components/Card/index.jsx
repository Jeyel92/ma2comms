import React from "react";
// import { Link } from "react-router-dom";
import  Link from "../Link";
import Div from "../Div";
import "./card.scss";

function CardBox({ link, style, children }) {
  if (link) {
    return (
      <Link to={link} className="cs-card cs-style1" style={style}>
        {children}
      </Link>
    );
  } else {
    return (
      <Div className="cs-card cs-style1" style={style}>
        {children}
      </Div>
    );
  }
}
export default function Card({ title, link, src, alt }) {
  return (
    <CardBox
      link={link}
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${src})`,
        backgroundSize: "cover",
      }}
    >
      <>
        <Div className="cs-card_info">
          <h2 className="cs-card_title">{title}</h2>
        </Div>
      </>
    </CardBox>
  );
}
