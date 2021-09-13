import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModPosts on WP_ModPosts {
    modPostsDataDisplay {
      postsDisplayAs
      postsFields
      postsHighlight
      layout
      theme
    }
    modPostsDataSource {
      postsDataSource
      postsCount
      archiveLink
      data {
        postTitle
        link {
          target
          title
          url
        }
        postContent
        image {
          ...WP_ImageWide
        }
        postContentMedia {
          ...WP_ImageWide
        }
        theme
      }
      postsDataPostType {
        name
        hasArchive
        uri
        labels {
          allItems
          archives
          menuName
          name
          singularName
        }
      }
    }
    contentNodes(first: 50) {
      nodes {
        ...WP_ContentNodeForModPosts
      }
    }
  }
`;
