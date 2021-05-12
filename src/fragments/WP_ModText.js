import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModText on WP_ModText {
    content
    contentMedia {
      ...WP_ImageMedium
    }
    modTextOptions {
      fontSize
      hideBoxFrame
    }
  }
`;
