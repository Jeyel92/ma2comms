import { gql } from "graphql-request";

export const allCategoriesQuery = gql`
query AllCategories {
  categories(where: { orderby: NAME }) {
    edges {
      node {
        name
        uri
        slug
      }
    }
  }
}
`;


export const latestPostsQuery = gql`query LatestsPosts {
    posts(where: {orderby: {field: DATE, order: DESC}}, first: 5) {
        edges {
          node {
            date
            title
            featuredImage {
              node {
                link
              }
            }
            slug
          }
        }
      }
} `