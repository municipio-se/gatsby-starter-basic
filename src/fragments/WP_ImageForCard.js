import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ImageForCard on WP_MediaItem {
    ...WP_ImageWide
  }
`;
