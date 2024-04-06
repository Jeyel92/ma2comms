import React from "react";
import Div from "../Div";
// import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
// import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from "../Widget/SideMenuWidget";
// import TagWidget from '../Widget/TagWidget'

import { useGetListCategories,useGetLatestPosts } from "../../hooks/blog";

import { useTranslation } from "react-i18next";
export default function Sidebar() {
  const { t } = useTranslation();
  
  const { categories: categoryData } = useGetListCategories();

  const { latestsPosts: recentPostData } = useGetLatestPosts();
  
  const tagData = [
    {
      title: "Business",
      url: "/",
    },
    {
      title: "Agency",
      url: "/",
    },
    {
      title: "Artwork",
      url: "/",
    },
    {
      title: "Marketing",
      url: "/",
    },
    {
      title: "Information",
      url: "/",
    },
    {
      title: "Design",
      url: "/",
    },
    {
      title: "Wordpress",
      url: "/",
    },
  ];

 
 
  return (
    <>
      <Div className="cs-sidebar_item">
        <SideMenuWidget
          title={t("blog.sidebar.categorias")}
          data={categoryData}
        />
      </Div>
       <Div className="cs-sidebar_item">
        <RecentPost title={t('blog.sidebar.recentes')} data={recentPostData} />
      </Div>
    {/*  <Div className="cs-sidebar_item">
        <TagWidget title="Tags" data={tagData} />
      </Div> */}
    </>
  );
}
