import React from "react";
import Div from "../Div";
// import AuthorWidget from '../Widget/AuthorWidget'
import RecentPost from '../Widget/RecentPost'
// import SearchWidget from '../Widget/SearchWidget'
import SideMenuWidget from "../Widget/SideMenuWidget";
import TagWidget from '../Widget/TagWidget'

import { useGetListCategories,useGetLatestPosts, useGetTags } from "../../hooks/blog";

import { useTranslation } from "react-i18next";
export default function Sidebar() {
  const { t } = useTranslation();
  
  const { categories: categoryData } = useGetListCategories();

  const { latestsPosts: recentPostData } = useGetLatestPosts();
  
  const { tags: tagData } = useGetTags();
  
 
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
     <Div className="cs-sidebar_item">
        <TagWidget title="Tags" data={tagData} />
      </Div>
    </>
  );
}
