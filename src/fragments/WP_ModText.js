import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ModText on WP_ModText {
    content
    contentMedia {
      ...WP_ImageMedium
    }
    contentModularityModules(first: 1000) {
      nodes {
        databaseId
        ...WP_ModularityModuleForModule
      }
    }
    modTextOptions {
      hideBoxFrame
      theme
    }
  }
`;
