import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ContentNodeForPage on WP_ContentNode {
    id
    databaseId
    uri
    dateGmt
    contentType {
      node {
        name
      }
    }
    ... on WP_NodeWithAuthor {
      author {
        node {
          name
        }
      }
    }
    ... on WP_NodeWithTitle {
      title
    }
    ... on WP_NodeWithContentEditor {
      content
      contentMedia {
        ...WP_ImageLarge
      }
      contentModularityModules(first: 1000) {
        nodes {
          databaseId
          ...WP_ModularityModule
        }
      }
    }
    # ... on WP_BlockEditorContentNode {
    #   ...WP_BlocksForPage
    # }
    ... on WP_NodeWithModularity {
      ...WP_ContentNodeModularityAreas
    }
    ... on WP_Page {
      ...WP_PageForPage
    }
    ... on WP_Post {
      ...WP_PostForPage
    }
    ... on WP_NodeWithFeaturedImage {
      featuredImage {
        node {
          ...WP_ImageMedium
        }
      }
    }
    ... on WP_NodeWithPageAttributes {
      menuOrder
    }
  }
`;
