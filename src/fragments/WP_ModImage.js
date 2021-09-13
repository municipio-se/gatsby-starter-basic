import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModImage on WP_ModImage {
    modImageOptions {
      link {
        target
        title
        url
      }
      modImageCaption
      modImageImage {
        ...WP_ImageLarge
      }
    }
  }
`;
