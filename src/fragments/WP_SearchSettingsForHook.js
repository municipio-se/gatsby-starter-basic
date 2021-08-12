import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_SearchSettingsForHook on WP {
    search {
      displaySettings {
        emptySearchResultMessage
        searchPlaceholderText
        searchLabelText
        searchButtonText
      }
    }
  }
`;
