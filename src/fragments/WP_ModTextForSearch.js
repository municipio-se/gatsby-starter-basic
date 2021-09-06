import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModTextForSearch on WP_ModText {
    id
    title
    hideTitle
    content
  }
`;
