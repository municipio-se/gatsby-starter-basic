import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_ContentNodeModularityAreasForSearch on WP_NodeWithModularity {
    contentArea: modularityArea(area: CONTENT_AREA) {
      ...WP_ModularityAreaModulesForSearch
    }
    # sliderArea: modularityArea(area: SLIDER_AREA) {
    #   ...WP_ModularityAreaModulesForSearch
    # }
  }
`;
