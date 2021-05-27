import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ImageWide on WP_MediaItem {
    databaseId
    base64: base64Uri
    src: sourceUrl(size: WIDE_LARGE)
    srcSet: srcSet(size: WIDE_LARGE)
    srcWebp: sourceUrl(size: WIDE_LARGE)
    srcSetWebp: srcSet(size: WIDE_LARGE)
    width(size: WIDE_LARGE)
    height(size: WIDE_LARGE)
    alt: altText
    caption
    credit
  }
`;
