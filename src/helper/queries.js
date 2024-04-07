import { gql } from "graphql-request";

export const getAllPostsQuery = gql`query AllPosts($after:String,$category:String) {
    posts(where: {orderby: {field: DATE, order: DESC}, categoryName:$category}, first: 5,after:$after,  ) {   
      pageInfo {
        hasNextPage
        endCursor
      }        
        edges {
          node {
            date
            title
            categories {
              nodes {
                name
                slug
                uri
              }
            }
            featuredImage {
              node {
                link
              }
            }
           slug
          }
        }
      }
  }`

export const getAllCategoriesQuery = gql`
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

export const getLatestPostsQuery = gql`
  query LatestsPosts {
    posts(where: { orderby: { field: DATE, order: DESC } }, first: 5) {
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
  }
`;

export const getAllTagsQuery = gql`
  query AllTags {
    tags(first: 10) {
      edges {
        node {
          name
          slug
        }
      }
    }
  }
`;
