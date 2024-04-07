import { request } from "graphql-request";
import useSWR from "swr";
import useSWRInfinite from "swr/infinite";
import {
  getAllCategoriesQuery,
  getLatestPostsQuery,
  getAllTagsQuery,
  getAllPostsQuery,
  getPostQuery,
} from "../helper/queries";

const url = "https://ma2comms.com/ma2/graphql/";

const swrConfig = {
  revalidateIfStale: false,
  revalidateOnFocus: false,
  revalidateOnReconnect: false,
};

const fetcher = (query, variables) => request(url, query, variables);

const fetcherPosts = async (cursor, category,tag) => {
   
  return await fetcher(getAllPostsQuery, {
    after: cursor[0] || "",
    category,
    tag
  });
};

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.posts) {
    return [null];
  }

  if (pageIndex === 0) {
    return [null];
  }

  return [previousPageData.posts.pageInfo.endCursor];
};

export function useGetAllPosts({ categoryName ="", tag=""}) {	
  
  const { data, error, size, setSize, isValidating, isLoading } =
    useSWRInfinite(
      (pageIndex, previousPageData) =>
        getKey(pageIndex, previousPageData, categoryName,tag),
      (cursor) => fetcherPosts(cursor, categoryName,tag),swrConfig
 
    );

  return {
    postData: data,
    size,
    setSize,
    error,
    isValidating,
    isLoading,
    hasNextPage: data?.[size - 1]?.posts?.pageInfo?.hasNextPage,
  };
}

export function useGetPost(slug) {
  const { data, error, isLoading } = useSWR(
    [getPostQuery, { id: slug, idType: "SLUG" }],
    ([query, variables]) => fetcher(query, variables)
    // swrConfig
  );

  return {
    post: data?.post,
    error,
    isLoading,
  };
}
export function useGetListCategories() {
  const { data, error } = useSWR(getAllCategoriesQuery, fetcher, swrConfig);

  return {
    categories:
      data?.categories?.edges.map(({ node }) => {
        return {
          title: node.name,
          url: `/blog${node.uri}`,
        };
      }) || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useGetLatestPosts() {
  const { data, error } = useSWR(getLatestPostsQuery, fetcher, swrConfig);
  return {
    latestsPosts:
      data?.posts?.edges.map(({ node }) => {
        return {
          href: `/blog/${node.slug}`,
          thumb: node.featuredImage?.node.link,
          date: node.date,
          title: node.title,
        };
      }) || [],
    isLoading: !error && !data,
    isError: error,
  };
}

export function useGetTags() {
  const { data, error } = useSWR(getAllTagsQuery, fetcher, swrConfig);
  return {
    tags:
      data?.tags?.edges.map(({ node }) => {
        return {
          title: node.name,
          url: `/blog/tag/${node.slug}`,
        };
      }) || [],
    isLoading: !error && !data,
    isError: error,
  };
}
