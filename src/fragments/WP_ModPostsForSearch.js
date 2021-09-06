import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModPostsForSearch on WP_ModPosts {
    id
    title
    hideTitle
    modPostsDataSource {
      data {
        postTitle
        postContent
      }
    }
    contentNodes(first: 50) {
      nodes {
        ...WP_ContentNodeForModPosts
      }
    }
  }
`;
