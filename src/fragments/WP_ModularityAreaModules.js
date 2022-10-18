import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModularityAreaModules on WP_NodeModularityArea {
    modules {
      columnWidth
      hidden
      key
      module: node {
        ...WP_ModularityModule
      }
    }
  }
`;
