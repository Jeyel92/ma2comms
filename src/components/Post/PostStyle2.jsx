import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import Div from "../Div";
import "./post.scss";
import CategoryList from "../CategoryList";
import { useTranslation } from "react-i18next";
export default function PostStyle2({
  thumb,
  title,
  subtitle,
  date,
  category,
  categoryHref,
  href,
}) {
  const { t } = useTranslation();
  return (
    <Div className="cs-post cs-style2">
      {thumb && (
        <Link to={href} className="cs-post_thumb cs-radius_15">
          <img src={thumb} alt="Post" className="w-100 cs-radius_15" />
        </Link>
      )}
      <Div className="cs-post_info">
        <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
          <span className="cs-posted_by">{date}</span>
          <CategoryList arrCategory={category} />
        </Div>
        <h2 className="cs-post_title">
        <Link to={`/blog/${href}`}>{title}</Link>
        </h2>
        <Div className="cs-post_sub_title">{subtitle}</Div>
        <Button btnLink={`/blog/${href}`} btnText={t('blog.readMore')} />
      </Div>
    </Div>
  );
}
