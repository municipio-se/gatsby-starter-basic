import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModIframe on WP_ModIframe {
    modIframeOptions {
      iframeUrl
      iframeHeight
    }
  }
`;
