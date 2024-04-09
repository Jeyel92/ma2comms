import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import {  useParams } from "react-router-dom";

import { pageTitle, formatDate } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import { useGetPost } from "../../hooks/blog";
import CategoryList from "../CategoryList";
import { useTranslation } from "react-i18next";
export default function BlogDetailsPage() {
  const { t } = useTranslation();
  const params = useParams();

  const slug = params.slug;

  const { post, error, isLoading } = useGetPost(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading)
    return (
      <>
        <p>'loading...'</p>
      </>
    );

  pageTitle(post.title || "");
  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title={post.title}
        bgSrc="/images/banner-pag-blog.jpg"
        pageLinkText={post.title}
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">
            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                {post.featuredImage?.node?.sourceUrl && (
                  <img
                    src={post.featuredImage?.node.sourceUrl}
                    alt="Post"
                    className="w-100 cs-radius_15"
                  />
                )}
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">
                    {" "}
                    {post && formatDate(post.date)}
                  </span>
                  {post?.categories && (
                    <CategoryList arrCategory={post?.categories.nodes} />
                  )}
                </Div>
                <h2 className="cs-post_title">{post?.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: post?.content }} />
              </Div>
            </Div>
            {/* End Details Post Content */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg="0" md="80" />
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title={t("cta.title")}
          btnText={t("cta.btn")}
          btnLink="/contato"
          bgSrc="/images/cta_bg.jpg"
          imgVariant="linear-gradient(97deg, rgba(162, 49, 243, 0.80) 0%, rgba(0, 35, 244, 0.80) 100%)"
        />
      </Div>
      <Spacing lg="150" md="80" />

      {/* End CTA Section */}
    </>
  );
}
