import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModColorBlocks on WP_ModColorBlocks {
    colorBlocks {
      blocks {
        themeColor
        excerpt
        post {
          ... on WP_Page {
            id
            title
            dateGmt
            uri
          }
          ... on WP_Post {
            id
            title
            dateGmt
            uri
          }
        }
      }
      display
    }
  }
`;
