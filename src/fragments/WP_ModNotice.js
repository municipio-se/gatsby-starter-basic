import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModNotice on WP_ModNotice {
    modNoticeOptions {
      noticeText
      noticeType
    }
  }
`;
