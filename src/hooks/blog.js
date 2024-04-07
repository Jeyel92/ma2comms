import { request } from "graphql-request";
import useSWR from "swr";
import useSWRInfinite, { unstable_serialize } from "swr/infinite";
import {
  getAllCategoriesQuery,
  getLatestPostsQuery,
  getAllTagsQuery,
  getAllPostsQuery,
} from "../helper/queries";

const url = "https://ma2comms.com/ma2/graphql/";

const fetcher = (query, variables) => request(url, query, variables);

const fetcherPosts = async (cursor) => {
    console.log(url, getAllPostsQuery, { after: cursor[0] || "" });
  return await fetcher( getAllPostsQuery, { after: cursor[0] || "" });
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

export function useGetAllPosts() {
  const { data, error, size, setSize, isValidating,isLoading } = useSWRInfinite(getKey, fetcherPosts);

  return {
    data,
    size,
    setSize,
    error,
    isValidating,
    isLoading
  };
}
export function useGetListCategories() {
  const { data, error } = useSWR(getAllCategoriesQuery, fetcher);

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
  const { data, error } = useSWR(getLatestPostsQuery, fetcher);
  return {
    latestsPosts:
      data?.posts?.edges.map(({ node }) => {
        return {
          href: node.slug,
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
  const { data, error } = useSWR(getAllTagsQuery, fetcher);
  return {
    tags:
      data?.tags?.edges.map(({ node }) => {
        return {
          title: node.name,
          url: node.slug,
        };
      }) || [],
    isLoading: !error && !data,
    isError: error,
  };
}
