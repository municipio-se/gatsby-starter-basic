import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModularityAreaModulesForSearch on WP_NodeModularityArea {
    modules {
      # columnWidth
      # hidden
      # key
      node {
        # ... on WP_ModContacts {
        #   ...WP_ModContactsForSearch
        # }
        # ... on WP_ModFileslist {
        #   ...WP_ModFileslistForSearch
        # }
        # ... on WP_ModGallery {
        #   ...WP_ModGalleryForSearch
        # }
        # ... on WP_ModImage {
        #   ...WP_ModImageForSearch
        # }
        # ... on WP_ModNotice {
        #   ...WP_ModNoticeForSearch
        # }
        # ... on WP_ModPosts {
        #   ...WP_ModPostsForSearch
        # }
        ... on WP_ModText {
          ...WP_ModTextForSearch
        }
        # ... on WP_ModTable {
        #   ...WP_ModTableForSearch
        # }
      }
    }
  }
`;
