import { graphql } from "gatsby";

export const query = graphql`
  fragment WP_BrandColorsForHook on WP {
    acfOptionsThemeOptions {
      colorScheme {
        brandColors {
          label
          value
        }
      }
    }
  }
`;
