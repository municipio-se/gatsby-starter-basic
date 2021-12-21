import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModPostsForSearch on WP_ModPosts {
    modPostsDataSource {
      data {
        postTitle
        postContent
      }
    }
  }
`;
