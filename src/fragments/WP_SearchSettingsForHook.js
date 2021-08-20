import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_SearchSettingsForHook on WP {
    acfOptionsSearch {
      searchDisplay {
        emptySearchResultMessage
        searchPlaceholderText
        searchLabelText
        searchButtonText
      }
    }
  }
`;
