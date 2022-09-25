import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_PageForPage on WP_Page {
    label # Needed by breadcrumbs
    isFrontPage
    modifiedGmt
    pageAppearance {
      template
    }
  }
`;
