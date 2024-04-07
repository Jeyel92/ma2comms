import React, { useEffect } from "react";
import { pageTitle,formatDate } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
// import Pagination from '../Pagination'
import PostStyle2 from '../Post/PostStyle2'
import Div from "../Div";
import Sidebar from "../Sidebar.jsx";
import Spacing from "../Spacing";
import { useGetAllPosts } from "../../hooks/blog";
import { useTranslation } from "react-i18next";
export default function BlogPage() {
  const { t } = useTranslation();
  pageTitle("Blog");

  const { data: postData, error, size, setSize, isLoading } = useGetAllPosts();

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
          <Div className="col-lg-8">
            {postData?.map((postPages) => {
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
                  {postPages.posts?.edges.length > index + 1 && <Spacing lg="95" md="60" />}
                </Div>                
              ));
            })}

            <Spacing lg="60" md="40" />
            <button
              className="cs-btn cs-style1"
              onClick={() => {
                setSize(size + 1);
              }}
            >
              <span>{t("blog.loadMore")}</span>
              {/* <Icon icon="bi:arrow-right" /> */}
            </button>
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
