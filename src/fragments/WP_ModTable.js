import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModTable on WP_ModTable {
    modTableOptions {
      modTable
    }
  }
`;
