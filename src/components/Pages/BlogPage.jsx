import React, { useEffect } from "react";
import { useParams,useLocation  } from "react-router-dom";
import { pageTitle, formatDate } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
// import Pagination from '../Pagination'
import PostStyle2 from "../Post/PostStyle2";
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import { useGetAllPosts } from "../../hooks/blog";
import { useTranslation } from "react-i18next";
export default function BlogPage() {
  const { t } = useTranslation();

  const params = useParams();
  const location = useLocation();

  const filters={
    categoryName:"",
    tag:""
  }

  if(location.pathname.includes('category')){
    filters.categoryName=params.categoryName
  }

  if(location.pathname.includes('tag')){
    filters.tag=params.tagName
  }

  pageTitle("Blog");

  const { postData, error, size, setSize, isLoading,hasNextPage } = useGetAllPosts(filters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <PageHeading
        title={t("blog.heading.title")}
        bgSrc="/images/banner-pag-blog.jpg"
        pageLinkText="Blog"
      />
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          {(filters.categoryName !== "" || filters.tag !== "") && (
            <h4>
              {t("blog.categoryExplore")} <i>{params.categoryName || params.tagName}</i>
            </h4>
          )}
          <Div className="col-lg-8">
            { !isLoading && postData?.map((postPages) => {
              return postPages.posts?.edges.map((edge, index) => (
                <Div key={index}>
                  <PostStyle2
                    thumb={edge.node.featuredImage?.node.link}
                    title={edge.node.title}
                    subtitle=""
                    date={formatDate(edge.node.date)}
                    category={edge.node.categories.nodes}
                    href={edge.node.slug}
                  />
                  {postPages.posts?.edges.length > index + 1 && (
                    <Spacing lg="95" md="60" />
                  )}
                </Div>
              ));
            })}

            <Spacing lg="60" md="40" />
          {hasNextPage &&  <button
              className="cs-btn cs-style1"
              onClick={() => {
                setSize(size + 1);
              }}
            >
              <span>{t("blog.loadMore")}</span>
              {/* <Icon icon="bi:arrow-right" /> */}
            </button>}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            <Spacing lg="0" md="80" />
            <Sidebar />
          </Div>
        </Div>
      </Div>
      <Spacing lg="150" md="80" />
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
    </>
  );
}
