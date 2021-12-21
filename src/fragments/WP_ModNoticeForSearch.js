import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModNoticeForSearch on WP_ModNotice {
    modNoticeOptions {
      noticeText
    }
  }
`;
