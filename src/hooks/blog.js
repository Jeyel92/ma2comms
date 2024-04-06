import { request } from "graphql-request";
import useSWR from "swr";
import { allCategoriesQuery, latestPostsQuery } from "../helper/queries";

const url = "https://ma2comms.com/ma2/graphql/";

const fetcher = (query) => request(url, query);

export function useGetListCategories() {
  const { data, error } = useSWR(allCategoriesQuery, fetcher);

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
  const { data, error } = useSWR(latestPostsQuery, fetcher);
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
